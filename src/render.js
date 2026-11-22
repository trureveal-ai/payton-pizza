// All drawing: street, houses, people, rides, HUD and menu screens.
import { DAYS, H, HY0, HY1, RANGE, RDL, RDR, SWL, SWR, VEH, W, WALL_L, WALL_R } from './config.js';
import { clamp, rnd } from './util.js';
import { G, P, Y } from './state.js';
import { save, writeSave } from './save.js';
import { ctx } from './canvas.js';
import { sfx } from './audio.js';
import { startRun, startShift, toTitle } from './game.js';

export function R(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h);}
export function circ(x,y,r,c){ctx.fillStyle=c;ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.fill();}
export function RR(x,y,w,h,r,c){ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();ctx.fill();}
export function tri(x1,y1,x2,y2,x3,y3,c){ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.lineTo(x3,y3);ctx.closePath();ctx.fill();}
var FONT='"Courier New",Courier,monospace';
export function T(s,x,y,size,col,align,outline){
  ctx.font='bold '+size+'px '+FONT;ctx.textAlign=align||'left';ctx.textBaseline='middle';
  if(outline){ctx.lineWidth=Math.max(3,size/5);ctx.strokeStyle=outline;ctx.lineJoin='round';ctx.strokeText(s,x,y);}
  ctx.fillStyle=col;ctx.fillText(s,x,y);
}
export function slice(x,y,s){ // small pizza slice icon, tip pointing down
  tri(x-s,y-s,x+s,y-s,x,y+s*1.2,'#ffc93c');
  R(x-s-1,y-s-s*0.35,s*2+2,s*0.45,'#c98a3a');
  circ(x-s*0.3,y-s*0.45,s*0.22,'#d7263d');circ(x+s*0.35,y-s*0.3,s*0.2,'#d7263d');circ(x,y+s*0.25,s*0.18,'#d7263d');
}
export function pizzaBox(x,y,s){
  R(x-s,y-s,s*2,s*2,'#e8b04a');R(x-s,y-s,s*2,s*0.45,'#c98a3a');
  circ(x,y+s*0.2,s*0.5,'#d7263d');circ(x,y+s*0.2,s*0.25,'#ffc93c');
}

export function drawStreet(){
  R(0,0,W,H,'#3f9b4a');
  var off=((G.cam%80)+80)%80,y;
  ctx.fillStyle='#46a652';
  for(y=-80+off;y<H;y+=80){ctx.fillRect(0,y,SWL,40);ctx.fillRect(SWR,y,W-SWR,40);}
  R(RDL,0,RDR-RDL,H,'#44464f');
  R(SWL,0,RDL-SWL,H,'#c9c5b8');R(RDR,0,SWR-RDR,H,'#c9c5b8');
  R(RDL-3,0,3,H,'#9d998c');R(RDR,0,3,H,'#9d998c');
  var o2=((G.cam%40)+40)%40;ctx.fillStyle='#aeaa9c';
  for(y=-40+o2;y<H;y+=40){ctx.fillRect(SWL,y,RDL-SWL-3,2);ctx.fillRect(RDR+3,y,SWR-RDR-3,2);}
  var o3=((G.cam%70)+70)%70;ctx.fillStyle='#f5d547';
  for(y=-70+o3;y<H;y+=70)ctx.fillRect(238,y,4,34);
  // finish line + shop
  var fy=Y(G.finishY);
  if(fy>-200&&fy<H+40){
    for(var cx=SWL;cx<SWR;cx+=10){R(cx,fy-10,10,10,((cx/10)|0)%2?'#111':'#fff');R(cx,fy,10,10,((cx/10)|0)%2?'#fff':'#111');}
    var by=fy-190;
    R(358,by,116,150,'#b3001b');R(358,by+138,116,12,'#7d0013');
    for(var k=0;k<8;k++)R(350,by+4+k*18,10,18,k%2?'#fff':'#d7263d');
    R(366,by+50,100,44,'#fff8e7');T('PAYTON',416,by+63,15,'#b3001b','center');T('PIZZA',416,by+81,15,'#b3001b','center');
    slice(416,by+24,10);
  }
}
export function drawLot(l){
  var top=Y(l.y0+HY1);
  if(top>H+40||top<-210)return;
  var left=l.side<0,hx=left?14:384,hw=82,hh=HY1-HY0,wy=Y(l.doorY);
  // driveway + walkway + porch
  R(left?20:SWR,Y(l.y0+34),110,30,'#b9b5a8');
  R(left?WALL_L:SWR,wy-6,34,12,'#d8d2c0');
  R(left?WALL_L:WALL_R-20,wy-17,20,34,l.cust?'#a9753f':'#8b8b86');
  R(left?WALL_L+3:WALL_R-17,wy-13,14,26,l.cust?'#c58d4e':'#9d9d97');
  // house
  R(hx+4,top+6,hw,hh,'rgba(0,0,0,0.22)');
  R(hx,top,hw,hh,l.roof[0]);
  ctx.fillStyle=l.roof[1];
  for(var k=0;k<hh;k+=13)ctx.fillRect(hx,top+k,hw,2);
  R(hx+hw/2-2,top,4,hh,l.roof[1]);
  R(hx+(left?16:54),top+16,12,12,'#7b3f2a');R(hx+(left?18:56),top+18,8,8,'#3a1d13');
  var sx=left?hx+hw-11:hx;
  R(sx,top,11,hh,l.cust?'#f4ead2':'#cfcabb');
  R(sx,wy-14,11,28,l.cust?'#a4161a':'#5a4634');
  R(left?sx+7:sx+2,wy+4,2,3,'#ffd23f');
  for(var i=0;i<l.wins.length;i++){var w=l.wins[i],yy=Y(w.y);
    R(sx+1,yy-11,9,22,w.broken?'#17181f':'#9ad8ff');
    if(w.broken){ctx.strokeStyle='#cfe9ff';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(sx+1,yy-6);ctx.lineTo(sx+6,yy-1);ctx.lineTo(sx+3,yy+4);ctx.lineTo(sx+9,yy+9);ctx.stroke();}
    else R(sx+1,yy-1,9,2,'#f4ead2');
  }
  // order marker on the roof
  if(l.cust){
    var bx=hx+hw/2+(left?-12:12),bob=Math.sin(G.tGame*4+l.ph)*2,by=top+hh/2+bob;
    if(l.delivered){circ(bx,by,13,'#1f9d55');ctx.strokeStyle='#fff';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(bx-6,by);ctx.lineTo(bx-1,by+5);ctx.lineTo(bx+7,by-5);ctx.stroke();}
    else if(l.missed){circ(bx,by,13,'#c1121f');ctx.strokeStyle='#fff';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(bx-5,by-5);ctx.lineTo(bx+5,by+5);ctx.moveTo(bx+5,by-5);ctx.lineTo(bx-5,by+5);ctx.stroke();}
    else{RR(bx-15,by-14,30,28,7,'#fff');slice(bx,by-1,8);}
  }
}
export function drawCustomer(l){
  var c=l.c,x=c.x,y=Y(c.y);if(y<-30||y>H+30)return;
  var out=-l.side,j=c.happy>0?Math.abs(Math.sin(c.happy*12))*4:0;
  circ(x+2,y+3,10,'rgba(0,0,0,0.2)');
  y-=j;
  if(l.missed){circ(x,y,9,c.shirt);circ(x,y,5.6,c.hair);return;}
  var reach=l.delivered?8:9+Math.sin(G.tGame*9+c.ph)*3;
  R(out>0?x+4:x-4-reach,y-9.5,reach,4,c.skin);R(out>0?x+4:x-4-reach,y+5.5,reach,4,c.skin);
  circ(x,y,9,c.shirt);circ(x,y,5.6,c.skin);
  ctx.fillStyle=c.hair;ctx.beginPath();ctx.arc(x,y,5.6,out>0?1.57:-1.57,out>0?4.71:1.57);ctx.fill();
  if(l.delivered)pizzaBox(x+out*14,y,6);
  else if(c.type==='pacer'){T('!',x,y-19,14,'#ffd23f','center','#000');}
}
export function drawDecal(d){var y=Y(d.y);if(y<-20||y>H+20)return;circ(d.x,y,8,'rgba(215,38,61,0.55)');R(d.x-6,y-6,12,12,'#e8b04a');circ(d.x+2,y+1,4,'#ffc93c');circ(d.x-1,y-2,1.6,'#d7263d');}

export function drawCar(x,y,col,down){
  RR(x-10,y-21,24,48,5,'rgba(0,0,0,0.25)');
  RR(x-12,y-24,24,48,5,col);
  R(x-9,down?y+4:y-12,18,8,'#2b4d66');R(x-9,down?y-14:y+8,18,5,'#2b4d66');
  R(x-9,down?y-8:y-3,18,11,'rgba(255,255,255,0.18)');
  R(x-11,down?y+21:y-24,6,3,'#fff6c2');R(x+5,down?y+21:y-24,6,3,'#fff6c2');
  R(x-11,down?y-24:y+21,6,3,'#d7263d');R(x+5,down?y-24:y+21,6,3,'#d7263d');
}
export function drawObs(o){
  var x=o.x,y=Y(o.y);if(y<-80||y>H+80)return;
  var t=o.type;
  if(t==='can'){circ(x+2,y+3,9,'rgba(0,0,0,0.25)');circ(x,y,9,'#6c757d');circ(x,y,6.5,'#8d99a6');R(x-5,y-1,10,2,'#5a6169');}
  else if(t==='hydrant'){circ(x+1,y+2,7,'rgba(0,0,0,0.25)');R(x-9,y-2,18,4,'#b3001b');circ(x,y,6,'#e63946');circ(x,y,2.5,'#ffd23f');}
  else if(t==='cone'){circ(x,y,7,'#ff7b00');circ(x,y,4.5,'#fff');circ(x,y,2.5,'#ff7b00');}
  else if(t==='pothole'){ctx.fillStyle='#24252b';ctx.beginPath();ctx.ellipse(x,y,12,7,0,0,6.2832);ctx.fill();ctx.fillStyle='#17181d';ctx.beginPath();ctx.ellipse(x+1,y+1,8,4,0,0,6.2832);ctx.fill();}
  else if(t==='carD')drawCar(x,y,o.col,true);
  else if(t==='carU')drawCar(x,y,o.col,false);
  else if(t==='dcar'){
    RR(x-21,y-9,46,24,5,'rgba(0,0,0,0.25)');RR(x-23,y-12,46,24,5,o.col);
    var fr=o.side<0?-1:1; // front faces the house, rear toward the road
    R(fr<0?x-12:x+4,y-9,8,18,'#2b4d66');R(fr<0?x+8:x-13,y-9,5,18,'#2b4d66');
    var blink=o.st>=1&&o.st<3&&Math.sin(o.t*18)>0;
    R(fr<0?x+20:x-23,y-11,3,6,blink?'#fff':'#d7263d');R(fr<0?x+20:x-23,y+5,3,6,blink?'#fff':'#d7263d');
    if(o.st===1)T('!',x,y-22,18,'#ffd23f','center','#000');
  }
  else if(t==='dog'){
    var run=o.st===1?Math.sin(o.t*20)*2:0;
    circ(x+1,y+3,8,'rgba(0,0,0,0.22)');
    ctx.fillStyle=o.col;ctx.beginPath();ctx.ellipse(x,y+2,6,9,0,0,6.2832);ctx.fill();
    circ(x,y-8,5,o.col);R(x-6,y-11+run*0.3,3,5,'#2b1a0e');R(x+3,y-11-run*0.3,3,5,'#2b1a0e');
    R(x-1,y+10,2,5+run,o.col);circ(x,y-12,1.5,'#111');
    if(o.st===1&&o.t%0.6<0.3)T('GRR',x,y-24,11,'#fff','center','#000');
  }
  else if(t==='skater'){
    circ(x+1,y+3,7,'rgba(0,0,0,0.22)');RR(x-4,y-11,8,22,3,'#222');circ(x-3,y-8,1.5,'#ffd23f');circ(x+3,y+8,1.5,'#ffd23f');
    circ(x,y,6.5,o.col);circ(x,y,4.2,'#f2c9a0');circ(x,y+1,4.2,'#3b2a1a');
  }
  else if(t==='pickup'){
    var b=Math.sin(o.t*5)*2;
    circ(x,y,17+b*0.5,'rgba(255,210,63,0.28)');
    pizzaBox(x+3,y+3,9);pizzaBox(x,y,9);pizzaBox(x-3,y-3,9);
    T('+5',x,y-22-b,13,'#ffd23f','center','#000');
  }
}

export function drawRider(x,y,arm,side){
  RR(x-8,y-4,16,9,4,'#d7263d');
  if(arm>0){R(side>0?x+6:x-15,y-2,9,4,'#f2c9a0');}
  else{R(x-9,y-6,3.5,5,'#f2c9a0');R(x+5.5,y-6,3.5,5,'#f2c9a0');}
  circ(x,y-1,5.6,'#b3001b');R(x-4.5,y-9,9,3.5,'#7d0013');circ(x,y-1,1.4,'#fff');
}
export function drawVeh(i,x,y,arm,side,t){
  if(i===0){
    var wob=Math.sin(t*7)*1.2;
    R(x-17,y+3,34,9,'rgba(0,0,0,0.25)');
    R(x-19,y,6,12,'#111');R(x+13,y,6,12,'#111');
    RR(x-14,y+1,28,10,3,'#22252e');
    R(x-12,y+9,9,2,'#4de1ff');R(x+3,y+9,9,2,'#4de1ff');
    R(x-7,y+8+wob*0.3,14,10,'#c1121f');slice(x,y+13+wob*0.3,3.2);
    drawRider(x+wob*0.5,y+2,arm,side);
  }else if(i===1){
    R(x-2,y-17,7,38,'rgba(0,0,0,0.22)');
    RR(x-3,y-21,6,12,2,'#111');RR(x-3.5,y+8,7,13,2,'#111');
    RR(x-4,y-11,8,22,3,'#ff7b00');R(x-3,y-12,6,4,'#fff');
    R(x-10,y-13,20,3,'#333');R(x-11,y-14,3,5,'#111');R(x+8,y-14,3,5,'#111');
    R(x-7,y+6,14,10,'#c1121f');slice(x,y+11,3.2);
    drawRider(x,y-1,arm,side);
  }else if(i===2){
    RR(x-11,y-22,26,50,7,'rgba(0,0,0,0.3)');
    RR(x-13,y-25,26,50,7,'#0c0d10');
    RR(x-11,y-23,22,14,5,'#1b1d24');
    R(x-10,y-10,20,8,'#3b6a8c');R(x-9,y+11,18,6,'#2b4d66');
    RR(x-10,y-2,20,13,2,'#16181d');R(x-6,y,12,8,'#0a0b0e');circ(x,y+4,3.6,'#d7263d');
    R(x-11,y-25,6,3,'#fff6c2');R(x+5,y-25,6,3,'#fff6c2');
    R(x-11,y+22,7,3,'#ff2e43');R(x+4,y+22,7,3,'#ff2e43');
    R(x-15,y-9,3,4,'#0c0d10');R(x+12,y-9,3,4,'#0c0d10');
    R(x-1,y-23,2,12,'#2a2d36');
    if(arm>0){R(side>0?x+12:x-20,y-3,8,4,'#f2c9a0');}
  }else{
    RR(x-13,y-26,30,58,6,'rgba(0,0,0,0.3)');
    RR(x-15,y-29,30,58,6,'#f4f1e8');
    R(x-15,y-6,30,6,'#d7263d');R(x-15,y+20,30,3,'#d7263d');
    R(x-12,y-24,24,9,'#3b6a8c');
    R(x-13,y-29,6,3,'#fff6c2');R(x+7,y-29,6,3,'#fff6c2');
    R(x-13,y+26,6,3,'#ff2e43');R(x+7,y+26,6,3,'#ff2e43');
    R(x-17,y-22,3,4,'#f4f1e8');R(x+14,y-22,3,4,'#f4f1e8');
    // giant light-up slice sign on the roof
    var g=0.45+0.4*Math.sin(t*6);
    ctx.save();ctx.shadowColor='rgba(255,210,63,'+g.toFixed(2)+')';ctx.shadowBlur=16*G.SC;
    tri(x,y-11,x-12,y+15,x+12,y+15,'#ffc93c');ctx.restore();
    R(x-13,y+13,26,5,'#c98a3a');
    circ(x,y-1,2.4,'#d7263d');circ(x-4,y+7,2.4,'#d7263d');circ(x+4,y+8,2.2,'#d7263d');
    var on=Math.floor(t*5)%2;
    for(var k=0;k<4;k++){var f=k/3;circ(x-f*12,y-11+f*26,1.3,(k+on)%2?'#fff':'#ff9f1c');circ(x+f*12,y-11+f*26,1.3,(k+on)%2?'#ff9f1c':'#fff');}
    if(arm>0){R(side>0?x+14:x-22,y-18,8,4,'#f2c9a0');}
  }
}
export function drawPlayer(){
  if(G.inv>0&&Math.floor(G.inv*14)%2===0)return;
  drawVeh(save.ride,P.x,P.sy,G.throwAnim,G.throwDir,G.tGame);
  if(G.shieldLeft>0){ctx.strokeStyle='rgba(90,209,255,0.55)';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(P.x,P.sy,G.V.w/2+7,G.V.h/2+7,0,0,6.2832);ctx.stroke();}
  if(G.streak>=2)T('x'+Math.min(G.streak,5),P.x+G.V.w/2+14,P.sy-G.V.h/2,15,'#ffd23f','center','#000');
}
export function drawPies(){
  for(var i=0;i<G.pies.length;i++){var p=G.pies[i],y=Y(p.y),f=clamp(p.d/RANGE,0,1),lift=Math.sin(f*3.1416);
    circ(p.x+3,y+5+lift*6,6,'rgba(0,0,0,0.25)');
    ctx.save();ctx.translate(p.x,y-lift*8);ctx.rotate(p.rot);pizzaBox(0,0,6+lift*2.5);ctx.restore();}
}
export function drawWorld(){
  var i;
  ctx.save();
  if(G.shake>0)ctx.translate(rnd(-5,5)*G.shake*2,rnd(-5,5)*G.shake*2);
  drawStreet();
  for(i=0;i<G.lots.length;i++)drawLot(G.lots[i]);
  for(i=0;i<G.decals.length;i++)drawDecal(G.decals[i]);
  for(i=0;i<G.lots.length;i++)if(G.lots[i].cust)drawCustomer(G.lots[i]);
  for(i=0;i<G.obs.length;i++)drawObs(G.obs[i]);
  if(G.state==='play'||G.state==='pause'){drawPies();drawPlayer();}
  for(i=0;i<G.parts.length;i++){var p=G.parts[i];ctx.globalAlpha=clamp(1-p.t/p.life,0,1);R(p.x,p.y,p.s,p.s,p.col);}
  ctx.globalAlpha=1;
  for(i=0;i<G.pops.length;i++){var q=G.pops[i];ctx.globalAlpha=clamp(1.2-q.t,0,1);T(q.txt,q.x,q.y,q.size,q.col,'center','#000');}
  ctx.globalAlpha=1;
  ctx.restore();
}

export function heart(x,y,on){var c=on?'#ff3b4e':'#4a4d57';circ(x-4,y-2,5,c);circ(x+4,y-2,5,c);tri(x-9,y,x+9,y,x,y+10,c);}
export function pad(n,w){var s=String(n);while(s.length<w)s='0'+s;return s;}
export function drawHUD(){
  R(0,0,W,60,'rgba(15,16,22,0.9)');
  T('SCORE',10,14,11,'#9aa3b2');T(pad(G.score,6),10,32,20,'#fff');
  var wk=Math.floor((G.day-1)/7)+1;
  T(DAYS[(G.day-1)%7].slice(0,3)+(wk>1?' WK'+wk:''),W/2,14,13,'#ffd23f','center');
  T('ORDERS '+G.stats.delivered+'/'+G.stats.orders,W/2,33,13,G.stats.missed?'#ffb4b4':'#cfd6e3','center');
  T('$'+save.bank,W-86,32,16,'#9cf07a','right');
  // pause + mute
  RR(W-76,6,32,30,6,'#2a2e3a');R(W-66,13,4,16,'#fff');R(W-58,13,4,16,'#fff');
  RR(W-38,6,32,30,6,'#2a2e3a');T(save.mute?'OFF':'SND',W-22,21,10,save.mute?'#ff8a8a':'#fff','center');
  for(var i=0;i<3;i++)heart(22+i*24,50,i<G.lives);
  pizzaBox(108,51,7);T('x'+G.pizzas,120,51,15,G.pizzas===0?'#ff5964':G.pizzas<=2?'#ffd23f':'#fff');
  // G.heat bar
  T('HOT',176,51,11,'#ff9f1c');
  R(204,45,180,12,'#2a2e3a');
  var hc=G.heat>60?'#ff5a1f':G.heat>25?'#ff9f1c':'#5a8dd6';
  R(206,47,176*G.heat/100,8,hc);
  T('TIP x'+(1+G.heat/100).toFixed(1),W-10,51,12,'#fff','right');

  if(G.bannerT>0){
    var a=clamp(G.bannerT,0,1);ctx.globalAlpha=a;
    R(0,300,W,96,'rgba(15,16,22,0.82)');
    T(DAYS[(G.day-1)%7],W/2,332,34,'#ffd23f','center','#000');
    T(G.stats.orders+' ORDERS  -  DELIVER AT LEAST HALF',W/2,372,14,'#fff','center');
    ctx.globalAlpha=1;
  }else if(G.hintT>0){
    ctx.globalAlpha=clamp(G.hintT,0,1);
    R(0,H-74,W,74,'rgba(15,16,22,0.82)');
    if(G.isTouch){T('DRAG to steer  -  higher = faster',W/2,H-52,14,'#fff','center');T('TAP left or right side to THROW',W/2,H-28,14,'#ffd23f','center');}
    else{T('ARROWS steer  -  higher = faster',W/2,H-52,14,'#fff','center');T('Z throw left   X throw right   SPACE auto',W/2,H-28,14,'#ffd23f','center');}
    ctx.globalAlpha=1;
  }
}

export function btn(x,y,w,h,label,fn,opt){
  opt=opt||{};
  var col=opt.disabled?'#3a3d47':opt.primary?'#d7263d':'#2f3442';
  RR(x,y+4,w,h,10,'rgba(0,0,0,0.45)');RR(x,y,w,h,10,col);
  if(opt.primary&&!opt.disabled){ctx.fillStyle='rgba(255,255,255,0.14)';ctx.fillRect(x+6,y+4,w-12,h/2-4);}
  T(label,x+w/2,y+h/2+1,opt.size||18,opt.disabled?'#8b8f9a':'#fff','center');
  if(!opt.disabled)G.buttons.push({x:x,y:y,w:w,h:h,fn:fn,key:opt.key||''});
}
export function dim(a){R(0,0,W,H,'rgba(12,13,18,'+a+')');}
export function drawTitle(){
  dim(0.55);
  var b=Math.sin(G.tGame*2)*4;
  ctx.save();ctx.translate(W/2,150+b);ctx.rotate(-0.04);
  T('PAYTON',4,4,74,'#7d0013','center');T('PAYTON',0,0,74,'#ffd23f','center','#1a0b0b');
  T('PIZZA',4,82,86,'#7d0013','center');T('PIZZA',0,78,86,'#ff4d2e','center','#1a0b0b');
  ctx.restore();
  slice(W/2,292+b,26);
  T('HOT. FAST. HAND-DELIVERED.',W/2,352,15,'#fff','center','#000');
  btn(90,392,300,62,'START SHIFT',function(){sfx('ui');startRun();},{primary:true,size:24,key:'Enter'});
  btn(90,470,300,52,'GARAGE   $'+save.bank,function(){sfx('ui');G.garageFrom='title';G.state='garage';},{key:'KeyG'});
  RR(40,548,400,150,12,'rgba(15,16,22,0.85)');
  T('HOW TO PLAY',W/2,568,14,'#ffd23f','center');
  T('Pizza on the FRONT DOOR = points',W/2,592,13,'#fff','center');
  T('Pizza into the customer\'s HANDS = bonus',W/2,612,13,'#fff','center');
  T('Gray houses did not order. Mind the windows.',W/2,632,12,'#cfd6e3','center');
  if(G.isTouch){T('DRAG to steer - TAP a side to throw',W/2,660,13,'#9cf07a','center');T('Works with a keyboard too',W/2,680,11,'#9aa3b2','center');}
  else{T('ARROWS steer - Z / X throw - SPACE auto',W/2,660,13,'#9cf07a','center');T('P pause - M sound - works on phones too',W/2,680,11,'#9aa3b2','center');}
  T('HIGH SCORE '+pad(save.hi,6)+(save.bestDay?'   BEST DAY '+save.bestDay:''),W/2,728,14,'#fff','center','#000');
  T('RIDE: '+VEH[save.ride].name,W/2,754,13,'#ffd23f','center','#000');
}
export function receipt(x,y,w,h){
  RR(x+5,y+6,w,h,6,'rgba(0,0,0,0.4)');R(x,y,w,h,'#fff8e7');
  ctx.fillStyle='#fff8e7';for(var i=0;i<w;i+=16){ctx.beginPath();ctx.moveTo(x+i,y+h);ctx.lineTo(x+i+8,y+h+8);ctx.lineTo(x+i+16,y+h);ctx.fill();}
}
export function row(label,val,y,col){T(label,84,y,15,'#3a2a20');T(val,W-84,y,15,col||'#3a2a20','right');}
export function dash(y){ctx.fillStyle='#b9a98f';for(var x=84;x<W-84;x+=10)ctx.fillRect(x,y,6,2);}
export function drawReport(){
  dim(0.6);
  receipt(60,90,360,520);
  slice(W/2,128,13);
  T('PAYTON PIZZA',W/2,166,22,'#b3001b','center');
  T(DAYS[(G.day-1)%7]+' SHIFT TICKET',W/2,190,13,'#3a2a20','center');
  dash(208);
  row('ORDERS DELIVERED',G.stats.delivered+' / '+G.stats.orders,236);
  row('  HAND-OFFS',String(G.stats.hand),262,'#b3001b');
  row('  FRONT DOORS',String(G.stats.door),288);
  row('MISSED ORDERS',String(G.stats.missed),314,G.stats.missed?'#b3001b':'#3a2a20');
  row('WINDOWS SMASHED',String(G.stats.smash),340,G.stats.smash?'#b3001b':'#3a2a20');
  row('WIPEOUTS',String(G.stats.crashes),366,G.stats.crashes?'#b3001b':'#3a2a20');
  dash(386);
  row('TIPS',(G.stats.tips<0?'-$'+(-G.stats.tips):'$'+G.stats.tips),412);
  row('SHIFT PAY','$'+G.report.pay,438);
  if(G.report.perfect)row('PERFECT SHIFT','$'+G.report.perfect,464,'#1f7a3f');
  dash(484);
  row('BANK','$'+save.bank,510,'#1f7a3f');
  row('SCORE',pad(G.score,6),536);
  T(G.report.title,W/2,576,17,'#b3001b','center');
  if(G.report.healed)T('+1 LIFE',W/2,640,14,'#ff8a8a','center','#000');
  btn(60,664,170,58,'GARAGE',function(){sfx('ui');G.garageFrom='report';G.state='garage';},{key:'KeyG'});
  btn(250,664,170,58,'NEXT SHIFT',function(){sfx('ui');G.day++;startShift();},{primary:true,key:'Enter'});
}
export function drawOver(){
  dim(0.7);
  T(G.overWhy==='fired'?'YOU\'RE FIRED':'WIPED OUT',W/2,180,46,'#ff4d2e','center','#000');
  T(G.overWhy==='fired'?'Fewer than half the orders got delivered.':'Payton is out of lives.',W/2,228,14,'#fff','center');
  RR(70,270,340,200,12,'rgba(15,16,22,0.9)');
  T('SCORE',110,306,15,'#9aa3b2');T(pad(G.score,6),370,306,22,'#fff','right');
  T('HIGH SCORE',110,344,15,'#9aa3b2');T(pad(save.hi,6),370,344,22,G.newHi?'#ffd23f':'#fff','right');
  T('REACHED',110,382,15,'#9aa3b2');T(DAYS[(G.day-1)%7].slice(0,3)+' (DAY '+G.day+')',370,382,16,'#fff','right');
  T('BANK',110,420,15,'#9aa3b2');T('$'+save.bank,370,420,22,'#9cf07a','right');
  if(G.newHi)T('NEW HIGH SCORE!',W/2,452,14,'#ffd23f','center');
  T('Your bank and rides are kept.',W/2,500,13,'#cfd6e3','center');
  btn(90,540,300,62,'TRY AGAIN',function(){sfx('ui');startRun();},{primary:true,size:24,key:'Enter'});
  btn(90,618,300,52,'GARAGE',function(){sfx('ui');G.garageFrom='title';G.state='garage';},{key:'KeyG'});
  btn(90,684,300,46,'TITLE',function(){sfx('ui');toTitle();},{size:15,key:'Escape'});
}
export function drawGarage(){
  R(0,0,W,H,'#1b1e27');
  ctx.fillStyle='#22262f';for(var y=0;y<H;y+=40)ctx.fillRect(0,y,W,2);
  T('GARAGE',20,38,30,'#ffd23f');T('BANK $'+save.bank,W-20,38,20,'#9cf07a','right');
  for(var i=0;i<4;i++){
    var v=VEH[i],cy=74+i*158,own=save.owned[i],sel=save.ride===i;
    RR(14,cy,W-28,146,12,sel?'#333a4d':'#272b37');
    if(sel){ctx.strokeStyle='#ffd23f';ctx.lineWidth=3;ctx.strokeRect(15.5,cy+1.5,W-31,143);}
    RR(26,cy+12,112,122,8,'#44464f');
    ctx.fillStyle='#f5d547';ctx.fillRect(80,cy+18,3,22);ctx.fillRect(80,cy+64,3,22);ctx.fillRect(80,cy+108,3,20);
    ctx.save();ctx.translate(82,cy+73);ctx.scale(1.7,1.7);drawVeh(i,0,0,0,1,G.tGame);ctx.restore();
    T(v.name,152,cy+26,18,'#fff');
    T(v.blurb[0],152,cy+50,12,'#cfd6e3');T(v.blurb[1],152,cy+66,12,'#cfd6e3');
    T('SPEED',152,cy+90,11,'#9aa3b2');
    for(var k=0;k<6;k++)R(196+k*11,cy+85,8,10,k<Math.round((v.spd-0.9)*14)?'#ff9f1c':'#3a3f4d');
    T('CARRY '+v.cap,280,cy+90,11,'#9aa3b2');
    (function(i,v){
      if(sel)btn(152,cy+102,300,36,'RIDING',null,{disabled:true,size:15});
      else if(own)btn(152,cy+102,300,36,'RIDE THIS',function(){save.ride=i;G.V=VEH[i];writeSave();sfx('ui');},{size:15,key:'Digit'+(i+1)});
      else if(save.bank>=v.price)btn(152,cy+102,300,36,'BUY  $'+v.price,function(){save.bank-=v.price;save.owned[i]=true;save.ride=i;G.V=VEH[i];writeSave();sfx('buy');},{primary:true,size:15,key:'Digit'+(i+1)});
      else btn(152,cy+102,300,36,'$'+v.price+'  (NEED $'+(v.price-save.bank)+' MORE)',null,{disabled:true,size:13});
    })(i,v);
  }
  btn(140,726,200,54,'BACK',function(){sfx('ui');G.state=G.garageFrom==='report'?'report':'title';if(G.state==='title')toTitle();},{primary:true,key:'Escape'});
}
export function drawPause(){
  dim(0.65);
  T('PAUSED',W/2,300,48,'#ffd23f','center','#000');
  btn(90,370,300,62,'RESUME',function(){G.state='play';},{primary:true,size:24,key:'Enter'});
  btn(90,448,300,52,'QUIT TO TITLE',function(){writeSave();toTitle();},{});
}

export function frameDraw(){
  ctx.setTransform(G.SC,0,0,G.SC,0,0);
  G.buttons=[];
  if(G.state==='garage'){drawGarage();return;}
  drawWorld();
  if(G.state==='play'||G.state==='pause')drawHUD();
  if(G.state==='title')drawTitle();
  else if(G.state==='report')drawReport();
  else if(G.state==='over')drawOver();
  else if(G.state==='pause')drawPause();
}

