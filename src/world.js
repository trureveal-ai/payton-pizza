// Builds a street for one shift: houses, customers, hazards, pizza pickups.
import { CARCOL, DULL, LOT, LOT0, ROOFS, SHIRT, SKIN, SWL, SWR, WALL_L, WALL_R } from './config.js';
import { tune } from './tuning.js';
import { chance, pick, rnd } from './util.js';
import { rand } from './rng.js';
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
  else if(type==='life'){o.w=30;o.h=30;}
  else if(type==='puddle'){o.w=30;o.h=18;}
  else if(type==='ball'){o.w=14;o.h=14;o.col=pick(['#ff3b4e','#3d7fd9','#ffd23f']);}
  else if(type==='barrier'){o.w=64;o.h=16;}
  return o;
}
// Customer types: 'porch' waits at the door, 'yard' stands beside it, 'pacer' walks up and down,
// 'curb' walks out to the sidewalk as you approach, 'quit' gives up and goes inside if you are slow.
export function makeLot(side,y0,cust,d,party){
  var slots=[62,105,148],di=(rand()*3)|0,t=tune(d);
  var l={side:side,y0:y0,cust:cust,delivered:false,missed:false,slot:di,doorY:y0+slots[di],wins:[],roof:cust?pick(ROOFS):pick(DULL),c:null,ph:rnd(0,6)};
  for(var i=0;i<3;i++)if(i!==di)l.wins.push({y:y0+slots[i],broken:false});
  if(cust){
    var r=rand(),type='porch',a=party?0:t.pacer,b=a+(party?0:t.quitter),k=b+(party?0.3:t.curb);
    if(r<a)type='pacer';else if(r<b)type='quit';else if(r<k)type='curb';else if(r<k+0.3)type='yard';
    var wall=side<0?WALL_L:WALL_R,out=-side;
    var cy=l.doorY+(type==='yard'?(chance(0.5)?-1:1)*rnd(26,36):0);
    var hx=wall+out*((type==='yard'||type==='pacer')?rnd(18,27):11);
    l.c={type:type,x:hx,y:cy,by:cy,hx:hx,cx:side<0?SWL-9:SWR+9,ph:rnd(0,6),happy:0,wait:-1,gone:false,skin:pick(SKIN),shirt:pick(SHIRT),hair:pick(['#3b2a1a','#111','#b5651d','#e6c35c','#888'])};
  }
  return l;
}
export function buildShift(d){
  G.lots=[];G.obs=[];G.pies=[];G.pops=[];G.parts=[];G.decals=[];
  var t=tune(d),n=t.lots,y=LOT0,i,s,o;
  for(i=0;i<n;i++){
    G.lots.push(makeLot(-1,y,chance(t.order),d));
    G.lots.push(makeLot(1,y,chance(t.order),d));
    var sx=[145,335];
    for(s=0;s<2;s++)if(chance(t.side))G.obs.push(mk(chance(0.6)?'can':'hydrant',sx[s]+rnd(-7,7),y+rnd(10,LOT-10)));
    if(chance(t.road)){var kind=rand();G.obs.push(mk(kind<0.4?'cone':kind<0.75?'pothole':'puddle',rnd(178,302),y+rnd(0,LOT)));}
    if(t.dog&&chance(t.dog)){s=chance(0.5)?-1:1;o=mk('dog',s<0?114:366,y+rnd(60,150));o.side=s;G.obs.push(o);}
    if(t.dcar&&chance(t.dcar)){s=chance(0.5)?-1:1;o=mk('dcar',s<0?74:406,y+19);o.side=s;G.obs.push(o);}
    if(t.ball&&chance(t.ball)){s=chance(0.5)?-1:1;o=mk('ball',s<0?120:360,y+rnd(40,170));o.side=s;G.obs.push(o);}
    if(t.barrier&&i>2&&chance(t.barrier))G.obs.push(mk('barrier',chance(0.5)?200:280,y+rnd(30,180)));
    if(i%t.pickupEvery===1)G.obs.push(mk('pickup',rnd(152,328),y+rnd(20,190)));
    y+=LOT;
  }
  // extra lives: one about a third of the way along, and sometimes a second near the end
  var lives=t.lives>1&&chance(0.5)?2:1,spots=[0.35,0.78];
  for(i=0;i<lives;i++)G.obs.push(mk('life',rnd(170,310),LOT0+Math.floor(n*spots[i])*LOT+rnd(30,180)));
  var count=0;for(i=0;i<G.lots.length;i++)if(G.lots[i].cust)count++;
  var guard=0;
  while(count<12&&guard++<400){var k=(rand()*G.lots.length)|0;if(!G.lots[k].cust){G.lots[k]=makeLot(G.lots[k].side,G.lots[k].y0,true,d);count++;}}
  G.finishY=y+240;
  return count;
}
// The bonus round after Sunday: a short street where every house ordered and nothing is in the way.
export function buildBonus(d){
  G.lots=[];G.obs=[];G.pies=[];G.pops=[];G.parts=[];G.decals=[];
  var n=12,y=LOT0,i;
  for(i=0;i<n;i++){
    G.lots.push(makeLot(-1,y,true,d,true));G.lots.push(makeLot(1,y,true,d,true));
    y+=LOT;
  }
  G.finishY=y+240;
  return n*2;
}
export function lotAt(side,wy){
  var i=Math.floor((wy-LOT0)/LOT);if(i<0)return null;
  var l=G.lots[i*2+(side<0?0:1)];return l||null;
}

