// Game rules: starting runs and shifts, throwing, delivering, crashing, and the per-frame update.
import { AHEAD, DOOR_HALF, H, HAND_R, HY0, HY1, LOT, PIE_SPEED, RANGE, SWL, SWR, VEH, W, WALL_L, WALL_R, WIN_HALF, YMAX, YMIN } from './config.js';
import { chance, clamp, pick, rnd } from './util.js';
import { G, P, Y } from './state.js';
import { seed, shiftSeed } from './rng.js';
import { save, writeSave } from './save.js';
import { sfx } from './audio.js';
import { buildShift, lotAt, mk } from './world.js';

// G.opt (set from the page address, for testing) can pick the first day, the ride and the street seed.
export function startRun(){G.day=G.day0=G.opt.day||1;G.runSeed=G.opt.seed!=null?G.opt.seed:null;G.score=0;G.lives=3;G.newHi=false;startShift();}
export function startShift(){
  G.ride=G.opt.ride!=null?G.opt.ride:save.ride;G.V=VEH[G.ride];
  // the same day always gets the same street and the same traffic
  seed(G.runSeed!=null?G.runSeed+(G.day-G.day0):shiftSeed(G.day));G.step=0;
  var orders=buildShift(G.day);
  G.cam=0;P.x=P.tx=280;P.sy=P.ty=590;G.heat=100;G.streak=0;G.pizzas=G.V.cap;G.shieldLeft=G.V.shield;
  G.inv=0;G.stun=0;G.shake=0;G.throwCd=0;G.throwAnim=0;
  G.carT=rnd(1.5,3);G.slowT=rnd(3,5);G.skateT=rnd(4,8);G.bannerT=2.4;if(G.day===1)G.hintT=9;
  G.stats={orders:orders,delivered:0,hand:0,door:0,smash:0,missed:0,tips:0,crashes:0};
  G.state='play';
}
export function addMoney(n){save.bank+=n;if(G.stats)G.stats.tips+=n;}
export function gameOver(why){
  G.overWhy=why;G.state='over';
  if(G.score>save.hi){save.hi=G.score;G.newHi=true;}
  if(G.day>save.bestDay)save.bestDay=G.day;
  writeSave();sfx('bad');
}
export function endShift(){
  var ratio=G.stats.orders?G.stats.delivered/G.stats.orders:1;
  if(ratio<0.5){gameOver('fired');return;}
  var pay=10+5*G.day,perfect=(G.stats.missed===0&&G.stats.smash===0&&G.stats.crashes===0)?25:0;
  save.bank+=pay+perfect;G.score+=perfect?1000:0;
  var title='BARELY EMPLOYED';
  if(perfect)title='EMPLOYEE OF THE DAY';
  else if(G.stats.smash>=3)title='WINDOW MENACE';
  else if(ratio>=0.9&&G.stats.hand>=G.stats.door)title='HAND-OFF HERO';
  else if(ratio>=0.9)title='RELIABLE DRIVER';
  else if(ratio>=0.7)title='DECENT DRIVER';
  G.report={pay:pay,perfect:perfect,title:title,pct:Math.round(ratio*100),healed:G.lives<3};
  if(G.lives<3)G.lives++;
  if(G.score>save.hi){save.hi=G.score;G.newHi=true;}
  if(G.day>save.bestDay)save.bestDay=G.day;
  writeSave();G.state='report';sfx('win');
}

// Pop-up words and sparks are placed on the street (x across, wy up the street); 'lift' raises them on screen.
export function pop(x,wy,txt,col,size,lift){G.pops.push({wx:x,wy:wy,lift:lift||0,txt:txt,col:col||'#fff',t:0,size:size||16});}
export function popScreen(x,y,txt,col,size){G.pops.push({sx:x,sy:y,lift:0,txt:txt,col:col||'#fff',t:0,size:size||16});}
export function burst(x,wy,n,cols,spd){var q=G.project(x,wy,0);for(var i=0;i<n;i++){var a=rnd(0,6.28),v=rnd(30,spd||160);G.parts.push({x:q.x,y:q.y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,t:0,life:rnd(0.3,0.7),col:pick(cols),s:rnd(2,4)});}}
export function throwPizza(side){
  if(G.state!=='play'||G.throwCd>0)return;
  if(side<0)G.flashL=0.25;else G.flashR=0.25;
  if(G.pizzas<=0){pop(P.x,G.cam+H-P.sy,'OUT OF PIZZA!','#ffd23f',16,34);sfx('empty');G.throwCd=0.25;return;}
  G.pizzas--;G.throwCd=0.2;G.throwAnim=0.18;G.throwDir=side;
  G.pies.push({x:P.x+side*10,y:G.cam+H-P.sy,vx:side*PIE_SPEED,vy:G.speed,d:0,side:side,rot:rnd(0,6)});
  sfx('throw');
}
export function smartThrow(){
  var py=G.cam+H-P.sy,best=null,bd=1e9;
  for(var i=0;i<G.lots.length;i++){var l=G.lots[i];if(!l.cust||l.delivered||l.missed)continue;
    var dy=l.doorY-py;if(dy<-40||dy>260)continue;
    var wall=l.side<0?WALL_L:WALL_R;if(Math.abs(P.x-wall)>RANGE+10)continue;
    var dd=Math.abs(dy-60);if(dd<bd){bd=dd;best=l;}}
  throwPizza(best?best.side:(P.x<240?-1:1));
}
export function deliver(l,hand,p){
  l.delivered=true;l.c.happy=1.4;G.stats.delivered++;
  var hm=1+G.heat/100,pts,tip,txt,col,cx=l.c.x,cy=l.c.y;
  if(hand){
    G.streak++;var m=Math.min(G.streak,5);
    pts=Math.round(250*hm*m/10)*10;tip=Math.max(1,Math.round(3*hm*(1+0.25*(m-1))*G.V.tip));G.stats.hand++;
    txt='HAND-OFF!'+(m>1?' x'+m:'');col='#ffd23f';sfx('hand');
    burst(cx,cy,14,['#ffd23f','#fff','#ff9f1c'],200);
    pop(cx,cy,txt,col,20,38);pop(cx,cy,'+'+pts+'  $'+tip,'#fff',14,18);
  }else{
    pts=Math.round(100*hm/10)*10;tip=Math.max(1,Math.round(1*hm*G.V.tip));G.stats.door++;
    sfx('door');pop(cx,cy,'FRONT DOOR','#9cf07a',16,38);pop(cx,cy,'+'+pts+'  $'+tip,'#fff',14,20);
  }
  G.score+=pts;addMoney(tip);G.heat=Math.min(100,G.heat+40);
}
export function crash(o){
  var py=G.cam+H-P.sy;
  if(G.shieldLeft>0){G.shieldLeft--;G.inv=1.3;G.shake=0.2;sfx('shield');pop(P.x,py,'BUMPER SAVED YOU!','#5ad1ff',16,40);return;}
  G.lives--;G.inv=1.9;G.stun=0.6;G.streak=0;G.heat=Math.max(0,G.heat-25);G.shake=0.45;G.stats.crashes++;
  sfx('crash');pop(P.x,py,'WIPEOUT!','#ff5964',22,40);
  burst(P.x,py,18,['#fff','#ffd23f','#ff5964','#e8b04a'],240);
  if(G.lives<=0)gameOver('crash');
}

export function update(dt){
  G.tGame+=dt;
  var i,l,o,p;
  for(i=G.pops.length-1;i>=0;i--){p=G.pops[i];p.t+=dt;if(p.t>1.2)G.pops.splice(i,1);}
  for(i=G.parts.length-1;i>=0;i--){p=G.parts[i];p.t+=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=300*dt;if(p.t>p.life)G.parts.splice(i,1);}
  if(G.shake>0)G.shake-=dt;if(G.flashL>0)G.flashL-=dt;if(G.flashR>0)G.flashR-=dt;
  if(G.state==='title'){G.cam+=110*dt;if(G.cam>G.finishY-H-300)G.cam=0;updCustomers(dt);return;}
  if(G.state!=='play')return;
  G.step++;

  if(G.inv>0)G.inv-=dt;if(G.stun>0)G.stun-=dt;if(G.throwCd>0)G.throwCd-=dt;if(G.throwAnim>0)G.throwAnim-=dt;
  if(G.bannerT>0)G.bannerT-=dt;if(G.hintT>0)G.hintT-=dt;

  // steering
  var kx=((G.keys.ArrowRight||G.keys.KeyL)?1:0)-((G.keys.ArrowLeft||G.keys.KeyJ)?1:0);
  var ky=((G.keys.ArrowDown||G.keys.KeyK)?1:0)-((G.keys.ArrowUp||G.keys.KeyI)?1:0);
  var st=G.V.steer*(G.stun>0?0.4:1);
  if(kx||ky){P.x+=kx*st*dt;P.sy+=ky*250*dt;P.tx=P.x;P.ty=P.sy;}
  else{var mx=st*1.6*dt,my=460*dt;P.x+=clamp(P.tx-P.x,-mx,mx);P.sy+=clamp(P.ty-P.sy,-my,my);}
  var xmin=SWL+G.V.w/2+1,xmax=SWR-G.V.w/2-1;
  P.x=clamp(P.x,xmin,xmax);P.sy=clamp(P.sy,YMIN,YMAX);P.tx=clamp(P.tx,xmin,xmax);P.ty=clamp(P.ty,YMIN,YMAX);

  // G.speed: higher on the screen = faster
  var f=(YMAX-P.sy)/(YMAX-YMIN);
  var base=Math.min(185+13*(G.day-1),320)*G.V.spd;
  G.speed=base*(0.8+0.5*f)*(G.stun>0?0.35:1);
  G.cam+=G.speed*dt;
  G.heat=Math.max(0,G.heat-6.5*G.V.heat*dt);
  var py=G.cam+H-P.sy;

  // traffic
  var nearEnd=G.cam+AHEAD>G.finishY-80;
  G.carT-=dt;if(G.carT<=0&&!nearEnd){var a=Math.max(1.3,4.2-0.3*G.day);G.carT=rnd(a,a+2);o=mk('carD',200+rnd(-8,8),G.cam+AHEAD);o.vy=-(110+rnd(0,90));G.obs.push(o);}
  G.slowT-=dt;if(G.slowT<=0&&!nearEnd){var b=Math.max(2.2,6-0.35*G.day);G.slowT=rnd(b,b+3);o=mk('carU',280+rnd(-8,8),G.cam+AHEAD);o.vy=base*0.42;G.obs.push(o);}
  if(G.day>=3){G.skateT-=dt;if(G.skateT<=0&&!nearEnd){G.skateT=rnd(Math.max(3,9-0.5*G.day),Math.max(6,13-0.5*G.day));o=mk('skater',chance(0.5)?145:335,G.cam+AHEAD-30);o.bx=o.x;o.vy=-70;G.obs.push(o);}}

  updCustomers(dt);
  // missed orders
  for(i=0;i<G.lots.length;i++){l=G.lots[i];
    if(l.cust&&!l.delivered&&!l.missed&&l.y0+LOT<G.cam-6){l.missed=true;G.stats.missed++;G.streak=0;
      popScreen(l.side<0?80:W-80,H-170,'MISSED ORDER!','#ff5964',18);sfx('bad');}}

  // obstacles
  var pw=G.V.w*0.78,ph=G.V.h*0.78;
  for(i=G.obs.length-1;i>=0;i--){o=G.obs[i];o.t+=dt;
    var sy=Y(o.y);
    if(o.type==='dog'){
      if(o.st===0&&sy>230&&sy<H){o.st=1;sfx('bark');}
      if(o.st===1){o.vy=G.speed*0.8;var dx=P.x-o.x;o.x+=clamp(dx,-125*dt,125*dt);o.x=clamp(o.x,118,362);}
    }else if(o.type==='dcar'){
      if(o.st===0&&sy>200){o.st=1;sfx('beep');}
      if(o.st===1&&sy>310){o.st=2;}
      if(o.st===2){o.x+=-o.side*88*dt;var stop=o.side<0?205:275;if((o.side<0&&o.x>=stop)||(o.side>0&&o.x<=stop)){o.x=stop;o.st=3;}}
    }else if(o.type==='skater'){o.x=o.bx+Math.sin(o.t*3)*9;}
    o.y+=o.vy*dt;
    if(o.y<G.cam-90){G.obs.splice(i,1);continue;}
    if(Math.abs(o.x-P.x)<(o.w+pw)/2&&Math.abs(o.y-py)<(o.h+ph)/2){
      if(o.type==='pickup'){var got=Math.min(5,G.V.cap-G.pizzas);G.pizzas+=got;G.obs.splice(i,1);sfx('pickup');pop(P.x,py,got>0?'+'+got+' PIZZAS':'BAG IS FULL','#ffd23f',16,36);continue;}
      if(G.inv<=0&&!G.opt.ghost){crash(o);if(G.state!=='play')return;}   // ghost: a test-only switch, never set in the game
    }
  }

  // G.pizzas in flight
  for(i=G.pies.length-1;i>=0;i--){p=G.pies[i];var done=false;
    for(var s=0;s<3&&!done;s++){p.x+=p.vx*dt/3;p.y+=p.vy*dt/3;p.d+=Math.abs(p.vx)*dt/3;done=resolvePie(p);}
    p.rot+=dt*9;
    if(done)G.pies.splice(i,1);
  }
  if(G.decals.length>40)G.decals.splice(0,G.decals.length-40);

  if(py>=G.finishY)endShift();
}
export function updCustomers(dt){
  for(var i=0;i<G.lots.length;i++){var l=G.lots[i];if(!l.cust)continue;var c=l.c;
    if(l.y0>G.cam+H+50||l.y0+LOT<G.cam-50)continue;
    if(c.happy>0)c.happy-=dt;
    if(c.type==='pacer'&&!l.delivered)c.y=c.by+Math.sin(G.tGame*2.1+c.ph)*30;
  }
}
export function missPie(p,txt){
  G.streak=0;G.decals.push({x:p.x,y:p.y});sfx('miss');
  pop(p.x,p.y,txt,'#c9ced6',13,12);
}
export function resolvePie(p){
  var i,l,c,wall=p.side<0?WALL_L:WALL_R;
  for(i=0;i<G.lots.length;i++){l=G.lots[i];
    if(l.side!==p.side||!l.cust||l.delivered||l.missed)continue;
    if(Math.abs(l.y0+105-p.y)>170)continue;
    c=l.c;var dx=c.x-p.x,dy=c.y-p.y;
    if(dx*dx+dy*dy<HAND_R*HAND_R){deliver(l,true,p);return true;}
  }
  if((p.side<0&&p.x<=wall)||(p.side>0&&p.x>=wall)){
    l=lotAt(p.side,p.y);
    if(l){var ry=p.y-l.y0;
      if(ry>=HY0&&ry<=HY1){
        if(Math.abs(p.y-l.doorY)<=DOOR_HALF){
          if(l.cust&&!l.delivered&&!l.missed){deliver(l,false,p);return true;}
          missPie(p,l.cust?'ALREADY SERVED':'WRONG HOUSE!');return true;
        }
        for(i=0;i<l.wins.length;i++){var w=l.wins[i];
          if(Math.abs(p.y-w.y)<=WIN_HALF){
            if(!w.broken){w.broken=true;G.stats.smash++;G.streak=0;G.score=Math.max(0,G.score-50);
              var fine=Math.min(5,save.bank);save.bank-=fine;G.stats.tips-=fine;
              sfx('smash');G.shake=0.15;burst(wall,w.y,14,['#9ad8ff','#fff','#d6f1ff'],180);
              pop(wall,w.y,'SMASH!  -$'+fine,'#ff5964',17,14);
            }else missPie(p,'THUNK');
            return true;
          }
        }
        missPie(p,'THUNK');return true;
      }
    }
  }
  if(p.d>=RANGE||p.x<-12||p.x>W+12){
    l=lotAt(p.side,p.y);
    if(l&&l.cust&&!l.delivered&&!l.missed&&Math.abs(p.y-l.doorY)<=DOOR_HALF&&Math.abs(p.x-wall)<=24){deliver(l,false,p);return true;}
    missPie(p,'SPLAT');return true;
  }
  return false;
}

export function toTitle(){G.state='title';G.day=3;seed(shiftSeed(3));buildShift(3);G.cam=0;}

// Where a pizza thrown right now to one side would land, and what it would hit.
// The 3D view draws this as an aiming mark, so throwing is about position, not guesswork.
export function aimAt(side){
  var wall=side<0?WALL_L:WALL_R,py=G.cam+H-P.sy,x0=P.x+side*10,reach=Math.abs(wall-x0);
  if(reach>RANGE)return{x:x0+side*RANGE,y:py+G.speed*RANGE/PIE_SPEED,hit:'far'};
  var y=py+G.speed*reach/PIE_SPEED,hit='wall';
  for(var i=0;i<G.lots.length;i++){var l=G.lots[i];
    if(l.side!==side||!l.cust||l.delivered||l.missed||Math.abs(l.y0+105-y)>170)continue;
    // The mark promises a little less than the rules allow, so a throw on a lit mark always lands.
    // A customer who is pacing may have moved by the time the pizza arrives, so they need a truer aim.
    var yc=py+G.speed*Math.abs(l.c.x-x0)/PIE_SPEED;
    if(Math.abs(yc-l.c.y)<(l.c.type==='pacer'?HAND_R-11:HAND_R-3)){hit='hand';break;}
    if(Math.abs(y-l.doorY)<=DOOR_HALF-3)hit='door';
  }
  if(hit==='wall'){var w=lotAt(side,y);if(w&&y-w.y0>=HY0&&y-w.y0<=HY1)for(var k=0;k<w.wins.length;k++)if(!w.wins[k].broken&&Math.abs(y-w.wins[k].y)<=WIN_HALF)hit='window';}
  return{x:wall,y:y,hit:hit};
}
