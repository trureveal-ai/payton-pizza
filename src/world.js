// Builds a street for one shift: houses, customers, hazards, pizza pickups.
import { CARCOL, DULL, LOT, LOT0, ROOFS, SHIRT, SKIN, WALL_L, WALL_R } from './config.js';
import { chance, pick, rnd } from './util.js';
import { G } from './state.js';

export function mk(type,x,y){
  var o={type:type,x:x,y:y,vx:0,vy:0,w:16,h:16,st:0,t:rnd(0,6),side:0,col:'#888',dead:false};
  if(type==='can'){o.w=18;o.h=18;}
  else if(type==='hydrant'){o.w=13;o.h=13;}
  else if(type==='cone'){o.w=13;o.h=13;}
  else if(type==='pothole'){o.w=24;o.h=14;}
  else if(type==='dog'){o.w=16;o.h=18;o.col=pick(['#8d5524','#3b3b3b','#d9b382','#f5f5f5']);}
  else if(type==='dcar'){o.w=46;o.h=24;o.col=pick(CARCOL);}
  else if(type==='carD'||type==='carU'){o.w=24;o.h=48;o.col=pick(CARCOL);}
  else if(type==='skater'){o.w=14;o.h=20;o.col=pick(SHIRT);}
  else if(type==='pickup'){o.w=30;o.h=30;}
  return o;
}
export function makeLot(side,y0,cust,d){
  var slots=[62,105,148],di=(Math.random()*3)|0;
  var l={side:side,y0:y0,cust:cust,delivered:false,missed:false,doorY:y0+slots[di],wins:[],roof:cust?pick(ROOFS):pick(DULL),c:null,ph:rnd(0,6)};
  for(var i=0;i<3;i++)if(i!==di)l.wins.push({y:y0+slots[i],broken:false});
  if(cust){
    var r=Math.random(),type='porch',pm=Math.min(0.08+0.07*d,0.55);
    if(r<pm)type='pacer';else if(r<pm+0.35)type='yard';
    var wall=side<0?WALL_L:WALL_R,out=-side;
    var cy=l.doorY+(type==='yard'?(chance(0.5)?-1:1)*rnd(26,36):0);
    l.c={type:type,x:wall+out*(type==='porch'?11:rnd(18,27)),y:cy,by:cy,ph:rnd(0,6),happy:0,skin:pick(SKIN),shirt:pick(SHIRT),hair:pick(['#3b2a1a','#111','#b5651d','#e6c35c','#888'])};
  }
  return l;
}
export function buildShift(d){
  G.lots=[];G.obs=[];G.pies=[];G.pops=[];G.parts=[];G.decals=[];
  var n=Math.min(30+3*d,48),pc=Math.min(0.32+0.025*d,0.55),y=LOT0,i,s,o;
  for(i=0;i<n;i++){
    G.lots.push(makeLot(-1,y,chance(pc),d));
    G.lots.push(makeLot(1,y,chance(pc),d));
    var sx=[145,335];
    for(s=0;s<2;s++)if(chance(Math.min(0.2+0.04*d,0.6)))G.obs.push(mk(chance(0.6)?'can':'hydrant',sx[s]+rnd(-7,7),y+rnd(10,LOT-10)));
    if(chance(Math.min(0.1+0.035*d,0.5)))G.obs.push(mk(chance(0.5)?'cone':'pothole',rnd(178,302),y+rnd(0,LOT)));
    if(d>=2&&chance(Math.min(0.06+0.03*d,0.35))){s=chance(0.5)?-1:1;o=mk('dog',s<0?114:366,y+rnd(60,150));o.side=s;G.obs.push(o);}
    if(d>=3&&chance(Math.min(0.04+0.025*d,0.3))){s=chance(0.5)?-1:1;o=mk('dcar',s<0?74:406,y+19);o.side=s;G.obs.push(o);}
    if(i%3===1)G.obs.push(mk('pickup',rnd(152,328),y+rnd(20,190)));
    y+=LOT;
  }
  var count=0;for(i=0;i<G.lots.length;i++)if(G.lots[i].cust)count++;
  var guard=0;
  while(count<12&&guard++<400){var k=(Math.random()*G.lots.length)|0;if(!G.lots[k].cust){G.lots[k]=makeLot(G.lots[k].side,G.lots[k].y0,true,d);count++;}}
  G.finishY=y+240;
  return count;
}
export function lotAt(side,wy){
  var i=Math.floor((wy-LOT0)/LOT);if(i<0)return null;
  var l=G.lots[i*2+(side<0?0:1)];return l||null;
}

