// The overlay: HUD, menu screens, pop-up words and sparks. The street itself is drawn in 3D by render3d.js.
import { DAYS, H, MAX_LIVES, VEH, W } from './config.js';
import { clamp } from './util.js';
import { G, P } from './state.js';
import { save, writeSave } from './save.js';
import { ctx, cv, view } from './canvas.js';
import { sfx } from './audio.js';
import { continueRun, nextShift, startRun, toTitle } from './game.js';

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
    RR(x-13,y-25,26,50,7,'#2a2e35');
    RR(x-11,y-23,22,14,5,'#3a4049');
    R(x-10,y-10,20,8,'#3b6a8c');R(x-9,y+11,18,6,'#2b4d66');
    RR(x-10,y-2,20,13,2,'#1c1f25');R(x-6,y,12,8,'#101216');
    R(x-11,y-25,6,3,'#fff6c2');R(x+5,y-25,6,3,'#fff6c2');
    R(x-11,y+22,7,3,'#ff2e43');R(x+4,y+22,7,3,'#ff2e43');
    R(x-15,y-9,3,4,'#2a2e35');R(x+12,y-9,3,4,'#2a2e35');
    R(x-1,y-23,2,12,'#4a515c');
    if(arm>0){R(side>0?x+12:x-20,y-3,8,4,'#f2c9a0');}
  }else{
    RR(x-13,y-26,30,58,6,'rgba(0,0,0,0.3)');
    RR(x-15,y-29,30,58,6,'#e3202e');
    R(x-15,y-6,30,5,'#fff1d0');R(x-15,y+20,30,3,'#fff1d0');
    R(x-12,y-24,24,9,'#3b6a8c');
    R(x-13,y-29,6,3,'#fff6c2');R(x+7,y-29,6,3,'#fff6c2');
    R(x-13,y+26,6,3,'#ff2e43');R(x+7,y+26,6,3,'#ff2e43');
    R(x-17,y-22,3,4,'#2c3040');R(x+14,y-22,3,4,'#2c3040');
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
export function heart(x,y,on,k){k=k||1;var c=on?'#ff3b4e':'#4a4d57';circ(x-4*k,y-2*k,5*k,c);circ(x+4*k,y-2*k,5*k,c);tri(x-9*k,y,x+9*k,y,x,y+10*k,c);}
// a row of hearts: the three a run starts with, plus any extra lives picked up (up to five)
export function hearts(x,y,gap,k){var n=Math.min(MAX_LIVES,Math.max(3,G.lives));for(var i=0;i<n;i++)heart(x+i*gap,y,i<G.lives,k);return n;}
export function pad(n,w){var s=String(n);while(s.length<w)s='0'+s;return s;}
export function drawHUD(){
  R(0,0,W,60,'rgba(15,16,22,0.9)');
  T('SCORE',10,14,11,'#9aa3b2');T(pad(G.score,6),10,32,20,'#fff');
  var wk=Math.floor((G.day-1)/7)+1;
  T(DAYS[(G.day-1)%7].slice(0,3)+(wk>1?' WK'+wk:''),W/2,14,13,'#ffd23f','center');
  T((G.bonus?'PARTY ':'ORDERS ')+G.stats.delivered+'/'+G.stats.orders,W/2,33,13,G.stats.missed&&!G.bonus?'#ffb4b4':'#cfd6e3','center');
  T('$'+save.bank,W-86,32,16,'#9cf07a','right');
  // pause + mute
  RR(W-76,6,32,30,6,'#2a2e3a');R(W-66,13,4,16,'#fff');R(W-58,13,4,16,'#fff');
  RR(W-38,6,32,30,6,'#2a2e3a');T(save.mute?'OFF':'SND',W-22,21,10,save.mute?'#ff8a8a':'#fff','center');
  hearts(18,50,20,G.lifeFlash>0?0.82+0.3*Math.abs(Math.sin(G.lifeFlash*14)):0.82);
  pizzaBox(126,51,7);T(G.bonus?'FREE':'x'+G.pizzas,138,51,15,G.bonus?'#9cf07a':G.pizzas===0?'#ff5964':G.pizzas<=2?'#ffd23f':'#fff');
  // G.heat bar
  T('HOT',190,51,11,'#ff9f1c');
  R(216,45,168,12,'#2a2e3a');
  var hc=G.heat>60?'#ff5a1f':G.heat>25?'#ff9f1c':'#5a8dd6';
  R(218,47,164*G.heat/100,8,hc);
  T('TIP x'+(1+G.heat/100).toFixed(1),W-10,51,12,'#fff','right');

}
export function drawBanner(){
  var a=clamp(G.bannerT,0,1);ctx.globalAlpha=a;
  R(0,292,W,132,'rgba(15,16,22,0.82)');
  if(G.bonus){
    T('PIZZA PARTY!',W/2,328,34,'#ffd23f','center','#000');
    T('BONUS ROUND  -  EVERY HOUSE ORDERED',W/2,366,14,'#fff','center');
    T('Free pizza. Double tips. Nothing in the way.',W/2,398,13,'#9cf07a','center');
  }else{
    T(DAYS[(G.day-1)%7],W/2,326,34,'#ffd23f','center','#000');
    T(G.stats.orders+' ORDERS  -  DELIVER AT LEAST HALF',W/2,364,14,'#fff','center');
    var n=Math.min(MAX_LIVES,Math.max(3,G.lives));
    T('LIVES',W/2-n*11-12,399,13,'#cfd6e3','right');hearts(W/2-n*11+10,397,22,1);
  }
  ctx.globalAlpha=1;
}
export function drawHint(){
  ctx.globalAlpha=clamp(G.hintT,0,1);
  R(0,H-74,W,74,'rgba(15,16,22,0.82)');
  if(G.isTouch){T('DRAG to steer  -  higher = faster',W/2,H-52,14,'#fff','center');T('TAP left or right side to THROW',W/2,H-28,14,'#ffd23f','center');}
  else{T('ARROWS steer  -  higher = faster',W/2,H-52,14,'#fff','center');T('Z throw left   X throw right   SPACE auto',W/2,H-28,14,'#ffd23f','center');}
  ctx.globalAlpha=1;
}
// Where to tap: a chip in each bottom corner. Tapping anywhere on that half of the screen throws that way.
export function drawTapZones(){
  var y=view.VH-view.bottom-(G.hintT>0?148:72),sides=[[-1,8,G.flashL],[1,W-128,G.flashR]];
  for(var i=0;i<2;i++){var d=sides[i][0],x=sides[i][1],f=clamp(sides[i][2]*4,0,1);
    RR(x,y,120,56,14,'rgba(15,16,22,'+(0.38+0.2*f).toFixed(2)+')');
    ctx.strokeStyle='rgba(255,210,63,'+(0.45+0.55*f).toFixed(2)+')';ctx.lineWidth=2;ctx.strokeRect(x+3,y+3,114,50);
    var ax=d<0?x+22:x+98;tri(ax+d*12,y+28,ax-d*6,y+16,ax-d*6,y+40,'#ffd23f');
    T('THROW',d<0?x+76:x+44,y+21,13,'#fff','center');T(d<0?'LEFT':'RIGHT',d<0?x+76:x+44,y+38,13,'#ffd23f','center');
  }
}
// Words and sparks that belong to things on the street. G.project turns a street spot into overlay units.
export function drawStreetWords(){
  var i,q;
  for(i=0;i<G.parts.length;i++){var p=G.parts[i];ctx.globalAlpha=clamp(1-p.t/p.life,0,1);R(p.x,p.y,p.s,p.s,p.col);}
  ctx.globalAlpha=1;
  if(G.state==='play'||G.state==='pause'){
    for(i=0;i<G.obs.length;i++){var o=G.obs[i];
      if(o.y<G.cam-60||o.y>G.cam+1300)continue;
      if(o.type==='dcar'&&o.st===1){q=G.project(o.x,o.y,40);T('!',q.x,q.y,18,'#ffd23f','center','#000');}
      else if(o.type==='dog'&&o.st===1&&o.t%0.6<0.3){q=G.project(o.x,o.y,34);T('GRR',q.x,q.y,11,'#fff','center','#000');}
      else if(o.type==='pickup'&&!G.bonus){q=G.project(o.x,o.y,34);T('PIZZA',q.x,q.y-Math.sin(o.t*5)*2,11,'#ffd23f','center','#000');}
      else if(o.type==='life'){q=G.project(o.x,o.y,44);T('+1 LIFE',q.x,q.y-Math.sin(o.t*5)*2,12,'#ff6b7d','center','#000');}
    }
    for(i=0;i<G.lots.length;i++){var l=G.lots[i];
      if(!l.cust||l.delivered||l.missed||l.y0<G.cam-260||l.y0>G.cam+1300)continue;
      if(l.c.type==='pacer'){q=G.project(l.c.x,l.c.y,62);T('!',q.x,q.y,14,'#ffd23f','center','#000');}
      else if(l.c.type==='quit'&&!l.c.gone&&l.c.wait>=0){   // how long before they give up and go inside
        q=G.project(l.c.x,l.c.y,62);var left=clamp(l.c.wait/G.T.patience,0,1);
        R(q.x-13,q.y-4,26,7,'rgba(15,16,22,0.85)');R(q.x-12,q.y-3,24*left,5,left>0.4?'#ffd23f':'#ff5964');
      }
    }
    if(G.streak>=2){q=G.project(P.x+G.V.w/2+16,G.cam+H-P.sy,30);T('x'+Math.min(G.streak,5),q.x,q.y,15,'#ffd23f','center','#000');}
  }
  for(i=0;i<G.pops.length;i++){var w=G.pops[i];
    q=w.sx!=null?{x:w.sx,y:w.sy+(view.VH-H)}:G.project(w.wx,w.wy,20);
    ctx.globalAlpha=clamp(1.2-w.t,0,1);T(w.txt,clamp(q.x,70,W-70),q.y-w.lift-38*w.t,w.size,w.col,'center','#000');}
  ctx.globalAlpha=1;
}
export function drawFps(){
  var f=G.fps;if(!f)return;
  RR(6,66,214,52,8,'rgba(15,16,22,0.8)');
  T(f.now+' fps   avg '+f.avg+'   low '+f.low,14,82,12,'#9cf07a');
  T(f.calls+' draws   '+f.tris+'k triangles',14,102,11,'#cfd6e3');
}

export function btn(x,y,w,h,label,fn,opt){
  opt=opt||{};
  var col=opt.disabled?'#3a3d47':opt.primary?'#d7263d':'#2f3442';
  RR(x,y+4,w,h,10,'rgba(0,0,0,0.45)');RR(x,y,w,h,10,col);
  if(opt.primary&&!opt.disabled){ctx.fillStyle='rgba(255,255,255,0.14)';ctx.fillRect(x+6,y+4,w-12,h/2-4);}
  T(label,x+w/2,y+h/2+1,opt.size||18,opt.disabled?'#8b8f9a':'#fff','center');
  if(!opt.disabled)G.buttons.push({x:x,y:y+G.uiOy,w:w,h:h,fn:fn,key:opt.key||''});
}
// fill the whole window, not just the 480-wide column
export function full(c){R(-view.ox/view.s-2,-2,view.VW+4,view.VH+4,c);}
export function dim(a){full('rgba(12,13,18,'+a+')');}
// draw a screen shifted down by oy overlay units, and tell its buttons
function at(oy,fn){ctx.save();ctx.translate(0,oy);G.uiOy=oy;fn();ctx.restore();G.uiOy=0;}
export function drawTitle(){
  var b=Math.sin(G.tGame*2)*4;
  ctx.save();ctx.translate(W/2,150+b);ctx.rotate(-0.04);
  T('PAYTON',4,4,74,'#7d0013','center');T('PAYTON',0,0,74,'#ffd23f','center','#1a0b0b');
  T('PIZZA',4,82,86,'#7d0013','center');T('PIZZA',0,78,86,'#ff4d2e','center','#1a0b0b');
  ctx.restore();
  slice(W/2,292+b,26);
  T('HOT. FAST. HAND-DELIVERED.',W/2,352,15,'#fff','center','#000');
  if(save.cont>1&&G.opt.day==null){
    btn(90,378,300,58,'CONTINUE  '+DAYS[(save.cont-1)%7].slice(0,3)+' (DAY '+save.cont+')',function(){sfx('ui');continueRun();},{primary:true,size:19,key:'Enter'});
    btn(90,444,300,42,'NEW RUN FROM MONDAY',function(){sfx('ui');startRun();},{size:15,key:'KeyN'});
    btn(90,494,300,44,'GARAGE   $'+save.bank,function(){sfx('ui');G.garageFrom='title';G.state='garage';},{size:16,key:'KeyG'});
  }else{
    btn(90,392,300,62,'START SHIFT',function(){sfx('ui');startRun();},{primary:true,size:24,key:'Enter'});
    btn(90,470,300,52,'GARAGE   $'+save.bank,function(){sfx('ui');G.garageFrom='title';G.state='garage';},{key:'KeyG'});
  }
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
  var wk=G.day%7===0;
  receipt(60,78,360,558);
  slice(W/2,116,13);
  T('PAYTON PIZZA',W/2,154,22,'#b3001b','center');
  if(G.report.bonus){
    T('PIZZA PARTY TICKET',W/2,178,13,'#3a2a20','center');
    dash(196);
    row('HOUSES SERVED',G.stats.delivered+' / '+G.stats.orders,226);
    row('  HAND-OFFS',String(G.stats.hand),254,'#b3001b');
    row('  FRONT DOORS',String(G.stats.door),282);
    row('WINDOWS SMASHED',String(G.stats.smash),310,G.stats.smash?'#b3001b':'#3a2a20');
    dash(334);
    row('TIPS (DOUBLE)',(G.stats.tips<0?'-$'+(-G.stats.tips):'$'+G.stats.tips),362);
    row('PARTY PAY','$'+G.report.pay,390);
    if(G.report.perfect)row('EVERY HOUSE SERVED','$'+G.report.perfect,418,'#1f7a3f');
    dash(446);
    row('BANK','$'+save.bank,474,'#1f7a3f');
    row('SCORE',pad(G.score,6),502);
    T(G.report.title,W/2,560,17,'#b3001b','center');
    btn(60,664,170,58,'GARAGE',function(){sfx('ui');G.garageFrom='report';G.state='garage';},{key:'KeyG'});
    btn(250,664,170,58,'NEXT WEEK',function(){sfx('ui');nextShift();},{primary:true,key:'Enter'});
    return;
  }
  T(DAYS[(G.day-1)%7]+' SHIFT TICKET',W/2,178,13,'#3a2a20','center');
  dash(196);
  row('ORDERS DELIVERED',G.stats.delivered+' / '+G.stats.orders,222);
  row('  HAND-OFFS',String(G.stats.hand),248,'#b3001b');
  row('  FRONT DOORS',String(G.stats.door),274);
  row('MISSED ORDERS',String(G.stats.missed),300,G.stats.missed?'#b3001b':'#3a2a20');
  row('WINDOWS SMASHED',String(G.stats.smash),326,G.stats.smash?'#b3001b':'#3a2a20');
  row('WIPEOUTS',String(G.stats.crashes),352,G.stats.crashes?'#b3001b':'#3a2a20');
  dash(372);
  row('TIPS',(G.stats.tips<0?'-$'+(-G.stats.tips):'$'+G.stats.tips),398);
  row('SHIFT PAY','$'+G.report.pay,424);
  if(G.report.perfect)row('PERFECT SHIFT','$'+G.report.perfect,450,'#1f7a3f');
  dash(470);
  row('BANK','$'+save.bank,496,'#1f7a3f');
  row('SCORE',pad(G.score,6),522);
  // lives carry into the next shift
  T('LIVES'+(G.report.healed?'  (+1 FOR FINISHING)':''),84,552,15,'#3a2a20');
  var n=Math.min(MAX_LIVES,Math.max(3,G.lives));hearts(W-84-(n-1)*20-6,550,20,0.8);
  T(G.report.title,W/2,596,17,'#b3001b','center');
  btn(60,664,170,58,'GARAGE',function(){sfx('ui');G.garageFrom='report';G.state='garage';},{key:'KeyG'});
  btn(250,664,170,58,wk?'BONUS ROUND':'NEXT SHIFT',function(){sfx('ui');nextShift();},{primary:true,size:wk?16:18,key:'Enter'});
}
export function drawOver(){
  T(G.overWhy==='fired'?'YOU\'RE FIRED':'WIPED OUT',W/2,180,46,'#ff4d2e','center','#000');
  T(G.overWhy==='fired'?'Fewer than half the orders got delivered.':'Payton is out of lives.',W/2,228,14,'#fff','center');
  RR(70,270,340,200,12,'rgba(15,16,22,0.9)');
  T('SCORE',110,306,15,'#9aa3b2');T(pad(G.score,6),370,306,22,'#fff','right');
  T('HIGH SCORE',110,344,15,'#9aa3b2');T(pad(save.hi,6),370,344,22,G.newHi?'#ffd23f':'#fff','right');
  T('REACHED',110,382,15,'#9aa3b2');T(DAYS[(G.day-1)%7].slice(0,3)+' (DAY '+G.day+')',370,382,16,'#fff','right');
  T('BANK',110,420,15,'#9aa3b2');T('$'+save.bank,370,420,22,'#9cf07a','right');
  if(G.newHi)T('NEW HIGH SCORE!',W/2,452,14,'#ffd23f','center');
  if(G.day>1&&G.opt.day==null){
    T('Continue keeps your day, bank and rides.',W/2,494,13,'#cfd6e3','center');
    T('Your score starts again from zero.',W/2,514,13,'#cfd6e3','center');
    btn(90,540,300,62,'CONTINUE  '+DAYS[(G.day-1)%7],function(){sfx('ui');continueRun();},{primary:true,size:21,key:'Enter'});
    btn(90,616,300,46,'NEW RUN FROM MONDAY',function(){sfx('ui');startRun();},{size:15,key:'KeyN'});
  }else{
    T('Your bank and rides are kept.',W/2,500,13,'#cfd6e3','center');
    btn(90,540,300,62,'TRY AGAIN',function(){sfx('ui');startRun();},{primary:true,size:24,key:'Enter'});
  }
  btn(90,G.day>1&&G.opt.day==null?674:618,145,46,'GARAGE',function(){sfx('ui');G.garageFrom='title';G.state='garage';},{size:15,key:'KeyG'});
  btn(245,G.day>1&&G.opt.day==null?674:618,145,46,'TITLE',function(){sfx('ui');toTitle();},{size:15,key:'Escape'});
}
export function drawGarage(){
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
    T(v.perkText,152,cy+80,11,'#5ad1ff');
    T('SPEED',152,cy+94,11,'#9aa3b2');
    for(var k=0;k<6;k++)R(196+k*11,cy+89,8,10,k<Math.round((v.spd-0.9)*14)?'#ff9f1c':'#3a3f4d');
    T('CARRY '+v.cap,280,cy+94,11,'#9aa3b2');
    (function(i,v){
      if(sel)btn(152,cy+104,300,34,'RIDING',null,{disabled:true,size:15});
      else if(own)btn(152,cy+104,300,34,'RIDE THIS',function(){save.ride=i;G.V=VEH[i];writeSave();sfx('ui');},{size:15,key:'Digit'+(i+1)});
      else if(save.bank>=v.price)btn(152,cy+104,300,34,'BUY  $'+v.price,function(){save.bank-=v.price;save.owned[i]=true;save.ride=i;G.V=VEH[i];writeSave();sfx('buy');},{primary:true,size:15,key:'Digit'+(i+1)});
      else btn(152,cy+104,300,34,'$'+v.price+'  (NEED $'+(v.price-save.bank)+' MORE)',null,{disabled:true,size:13});
    })(i,v);
  }
  btn(140,726,200,54,'BACK',function(){sfx('ui');G.state=G.garageFrom==='report'?'report':'title';if(G.state==='title')toTitle();},{primary:true,key:'Escape'});
}
export function drawPause(){
  T('PAUSED',W/2,300,48,'#ffd23f','center','#000');
  btn(90,370,300,62,'RESUME',function(){G.state='play';},{primary:true,size:24,key:'Enter'});
  btn(90,448,300,52,'QUIT TO TITLE',function(){writeSave();toTitle();},{});
}

export function frameDraw(){
  var k=view.s*view.dpr,mid=(view.VH-H)/2,bot=view.VH-H;
  ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,cv.width,cv.height);
  ctx.setTransform(k,0,0,k,view.ox*view.dpr,0);
  G.buttons=[];G.uiOy=0;
  if(G.state==='garage'){full('#1b1e27');at(mid,drawGarage);return;}
  drawStreetWords();
  if(G.state==='play'||G.state==='pause'){
    if(G.isTouch&&G.state==='play')drawTapZones();
    R(0,-2,W,G.hudTop+2,'rgba(15,16,22,0.9)');
    at(G.hudTop,drawHUD);
    if(G.bannerT>0)at(mid,drawBanner);else if(G.hintT>0)at(bot-view.bottom,drawHint);
  }
  if(G.state==='title'){dim(0.5);at(mid,drawTitle);}
  else if(G.state==='report'){dim(0.6);at(mid,drawReport);}
  else if(G.state==='over'){dim(0.7);at(mid,drawOver);}
  else if(G.state==='pause'){dim(0.65);at(mid,drawPause);}
  if(G.opt.fps)drawFps();
}
