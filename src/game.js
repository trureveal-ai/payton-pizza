// Game rules: starting runs and shifts, throwing, delivering, crashing, and the per-step update.
import { AHEAD, DOOR_HALF, H, HAND_R, HY0, HY1, LOT, MAX_LIVES, PIE_SPEED, RANGE, START_LIVES, SWL, SWR, VEH, W, WALL_L, WALL_R, WIN_HALF, YMAX, YMIN } from './config.js';
import { chance, clamp, pick, rnd } from './util.js';
import { G, P, Y } from './state.js';
import { seed, shiftSeed } from './rng.js';
import { save, writeSave } from './save.js';
import { sfx } from './audio.js';
import { buildBonus, buildShift, lotAt, mk } from './world.js';
import { tune } from './tuning.js';

// A run starts on Monday. startRun(day) continues from a later day instead: the day and the bank are
// kept, but the score starts again from zero, so a score on the boards is always earned in one go.
// G.opt (set from the page address, for testing) can pick the first day, the ride and the street seed.
export function startRun(day){
  G.day=G.day0=day||G.opt.day||1;G.runSeed=G.opt.seed!=null?G.opt.seed:null;
  G.continued=!!day&&day>1;G.score=0;G.lives=START_LIVES;G.newHi=false;
  startShift();
}
export function continueRun(){startRun(Math.max(1,save.cont||1));}
export function startShift(){begin(false);}
// After Sunday's shift comes a bonus round: every house ordered, nothing is in the way, pizzas never run out.
export function startBonus(){begin(true);}
export function nextShift(){
  if(!G.bonus&&G.day%7===0){startBonus();return;}
  G.day++;startShift();
}
function begin(bonus){
  G.bonus=bonus;G.ride=G.opt.ride!=null?G.opt.ride:save.ride;G.V=VEH[G.ride];G.T=tune(G.day);
  // the same day always gets the same street and the same traffic
  seed((G.runSeed!=null?G.runSeed+(G.day-G.day0):shiftSeed(G.day))+(bonus?7777:0));G.step=0;
  var orders=bonus?buildBonus(G.day):buildShift(G.day);
  G.cam=0;P.x=P.tx=280;P.sy=P.ty=590;G.heat=100;G.streak=0;G.pizzas=G.V.cap;G.shieldLeft=bonus?0:G.V.shield;
  G.inv=0;G.stun=0;G.slip=0;G.shake=0;G.throwCd=0;G.throwAnim=0;G.lifeFlash=0;
  G.carT=rnd(1.5,3);G.slowT=rnd(3,5);G.skateT=rnd(4,8);G.bannerT=2.4;if(G.day===1&&!bonus)G.hintT=9;
  G.stats={orders:orders,delivered:0,hand:0,door:0,smash:0,missed:0,tips:0,crashes:0,bonks:0};
  if(!bonus&&G.opt.day==null&&save.cont!==G.day){save.cont=G.day;writeSave();}   // where Continue picks up from
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
  if(G.bonus){
    var all=G.stats.delivered===G.stats.orders,party=2*G.stats.delivered,extra=all?50:0;
    save.bank+=party+extra;if(all)G.score+=2000;
    G.report={bonus:true,pay:party,perfect:extra,pct:Math.round(100*G.stats.delivered/G.stats.orders),healed:false,
      title:all?'PARTY HERO':G.stats.delivered>=G.stats.orders*0.6?'LIFE OF THE PARTY':'PARTY CRASHER'};
    if(G.score>save.hi){save.hi=G.score;G.newHi=true;}
    writeSave();G.state='report';sfx('win');return;
  }
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
  // finishing a shift gives back one life, up to the three a run starts with; lives carry into the next shift
  G.report={pay:pay,perfect:perfect,title:title,pct:Math.round(ratio*100),healed:G.lives<START_LIVES};
  if(G.lives<START_LIVES)G.lives++;
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
  // The order this pizza is about to reach is marked as taken, so the aiming ring goes out at once
  // and a second pizza is not wasted on the same house.
  var a=aimAt(side);if(a.lot)a.lot.claim=G.step+50;
  if(!G.bonus)G.pizzas--;
  G.throwCd=0.2;G.throwAnim=0.18;G.throwDir=side;
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
  var hm=1+G.heat/100,pts,tip,txt,col,cx=l.c.x,cy=l.c.y,party=G.bonus?2:1;
  if(hand){
    G.streak++;var m=Math.min(G.streak,5),rush=l.c.type==='quit'?1.5:1;   // caught before they gave up
    pts=Math.round(250*hm*m*rush*party/10)*10;tip=Math.max(1,Math.round(3*hm*(1+0.25*(m-1))*G.V.tip*rush*party));G.stats.hand++;
    txt=(rush>1?'JUST IN TIME!':'HAND-OFF!')+(m>1?' x'+m:'');col='#ffd23f';sfx('hand');
    burst(cx,cy,14,['#ffd23f','#fff','#ff9f1c'],200);
    pop(cx,cy,txt,col,20,38);pop(cx,cy,'+'+pts+'  $'+tip,'#fff',14,18);
  }else{
    pts=Math.round(100*hm*party/10)*10;tip=Math.max(1,Math.round(1*hm*G.V.tip*party));G.stats.door++;
    sfx('door');pop(cx,cy,'FRONT DOOR','#9cf07a',16,38);pop(cx,cy,'+'+pts+'  $'+tip,'#fff',14,20);
  }
  G.score+=pts;addMoney(tip);G.heat=Math.min(100,G.heat+40);
}
export function crash(o){
  var py=G.cam+H-P.sy;
  if(G.shieldLeft>0){G.shieldLeft--;G.inv=1.3;G.shake=0.2;sfx('shield');pop(P.x,py,'BUMPER SAVED YOU!','#5ad1ff',16,40);return;}
  G.lives--;G.inv=1.9;G.stun=0.6;G.streak=0;G.heat=Math.max(0,G.heat-25);G.shake=0.45;G.stats.crashes++;G.lifeFlash=1;
  sfx('crash');pop(P.x,py,'WIPEOUT!','#ff5964',22,46);
  if(G.lives>0)pop(P.x,py,G.lives+(G.lives===1?' LIFE':' LIVES')+' LEFT','#fff',14,24);
  burst(P.x,py,18,['#fff','#ffd23f','#ff5964','#e8b04a'],240);
  if(G.lives<=0)gameOver('crash');
}
// A ride with the right perk sends a hazard flying instead of wiping out.
function knock(o){
  o.out=true;o.vx=(o.x>=P.x?1:-1)*rnd(170,250);o.vy=G.speed*0.7;o.t=0;
  G.stats.bonks++;G.score+=10;sfx('bonk');
  pop(o.x,o.y,o.type==='dog'?'YIP!':o.type==='skater'?'WHOA!':'BONK!','#5ad1ff',13,26);
}

export function update(dt){
  G.tGame+=dt;
  var i,l,o,p;
  for(i=G.pops.length-1;i>=0;i--){p=G.pops[i];p.t+=dt;if(p.t>1.2)G.pops.splice(i,1);}
  for(i=G.parts.length-1;i>=0;i--){p=G.parts[i];p.t+=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=300*dt;if(p.t>p.life)G.parts.splice(i,1);}
  if(G.shake>0)G.shake-=dt;if(G.flashL>0)G.flashL-=dt;if(G.flashR>0)G.flashR-=dt;if(G.lifeFlash>0)G.lifeFlash-=dt;
  if(G.state==='title'){G.cam+=110*dt;if(G.cam>G.finishY-H-300)G.cam=0;updCustomers(dt,-1e9);return;}
  if(G.state!=='play')return;
  G.step++;

  if(G.inv>0)G.inv-=dt;if(G.stun>0)G.stun-=dt;if(G.slip>0)G.slip-=dt;if(G.throwCd>0)G.throwCd-=dt;if(G.throwAnim>0)G.throwAnim-=dt;
  if(G.bannerT>0)G.bannerT-=dt;if(G.hintT>0)G.hintT-=dt;

  // steering (a puddle makes the ride slide: it answers the wheel slowly for a moment)
  var kx=((G.keys.ArrowRight||G.keys.KeyL)?1:0)-((G.keys.ArrowLeft||G.keys.KeyJ)?1:0);
  var ky=((G.keys.ArrowDown||G.keys.KeyK)?1:0)-((G.keys.ArrowUp||G.keys.KeyI)?1:0);
  var st=G.V.steer*(G.stun>0?0.4:G.slip>0?0.4:1);
  if(kx||ky){P.x+=kx*st*dt;P.sy+=ky*250*dt;P.tx=P.x;P.ty=P.sy;}
  else{var mx=st*1.6*dt,my=460*dt;P.x+=clamp(P.tx-P.x,-mx,mx);P.sy+=clamp(P.ty-P.sy,-my,my);}
  var xmin=SWL+G.V.w/2+1,xmax=SWR-G.V.w/2-1;
  P.x=clamp(P.x,xmin,xmax);P.sy=clamp(P.sy,YMIN,YMAX);P.tx=clamp(P.tx,xmin,xmax);P.ty=clamp(P.ty,YMIN,YMAX);

  // G.speed: higher on the screen = faster
  var f=(YMAX-P.sy)/(YMAX-YMIN);
  var base=(G.bonus?190:G.T.speed)*G.V.spd;
  G.speed=base*(0.8+0.5*f)*(G.stun>0?0.35:1);
  G.cam+=G.speed*dt;
  G.heat=Math.max(0,G.heat-6.5*G.V.heat*dt);
  var py=G.cam+H-P.sy;

  // traffic (none in the bonus round)
  var nearEnd=G.bonus||G.cam+AHEAD>G.finishY-80;
  G.carT-=dt;if(G.carT<=0&&!nearEnd){G.carT=rnd(G.T.carDown,G.T.carDown+2.2);o=mk('carD',200+rnd(-8,8),G.cam+AHEAD);o.vy=-(110+rnd(0,90));G.obs.push(o);}
  G.slowT-=dt;if(G.slowT<=0&&!nearEnd){G.slowT=rnd(G.T.carUp,G.T.carUp+3);o=mk('carU',280+rnd(-8,8),G.cam+AHEAD);o.vy=base*0.42;G.obs.push(o);}
  if(G.T.skater){G.skateT-=dt;if(G.skateT<=0&&!nearEnd){G.skateT=rnd(G.T.skater[0],G.T.skater[1]);o=mk('skater',chance(0.5)?145:335,G.cam+AHEAD-30);o.bx=o.x;o.vy=-70;G.obs.push(o);}}

  updCustomers(dt,py);
  // missed orders
  for(i=0;i<G.lots.length;i++){l=G.lots[i];
    if(l.cust&&!l.delivered&&!l.missed&&l.y0+LOT<G.cam-6){l.missed=true;G.stats.missed++;
      if(!G.bonus){G.streak=0;popScreen(l.side<0?80:W-80,H-170,'MISSED ORDER!','#ff5964',18);sfx('bad');}}}

  // hazards, traffic and pickups
  var pw=G.V.w*0.78,ph=G.V.h*0.78;
  for(i=G.obs.length-1;i>=0;i--){o=G.obs[i];o.t+=dt;
    if(o.out){   // knocked aside: it flies off and can no longer be hit
      o.x+=o.vx*dt;o.y+=o.vy*dt;
      if(o.x<-60||o.x>W+60||o.y<G.cam-90||o.t>2.5)G.obs.splice(i,1);
      continue;
    }
    var sy=Y(o.y);
    if(o.type==='dog'){
      if(o.st===0&&sy>230&&sy<H){o.st=1;sfx('bark');}
      if(o.st===1){o.vy=G.speed*0.8;var dx=P.x-o.x;o.x+=clamp(dx,-125*dt,125*dt);o.x=clamp(o.x,118,362);}
    }else if(o.type==='dcar'){
      if(o.st===0&&sy>200){o.st=1;sfx('beep');}
      if(o.st===1&&sy>310){o.st=2;}
      if(o.st===2){o.x+=-o.side*88*dt;var stop=o.side<0?205:275;if((o.side<0&&o.x>=stop)||(o.side>0&&o.x<=stop)){o.x=stop;o.st=3;}}
    }else if(o.type==='skater'){o.x=o.bx+Math.sin(o.t*3)*9;}
    else if(o.type==='ball'){   // rolls across the street once you are close
      if(o.st===0&&sy>240&&sy<H)o.st=1;
      if(o.st===1){o.x+=-o.side*95*dt;if(o.x<112||o.x>368){G.obs.splice(i,1);continue;}}
    }
    o.y+=o.vy*dt;
    if(o.y<G.cam-90){G.obs.splice(i,1);continue;}
    if(Math.abs(o.x-P.x)<(o.w+pw)/2&&Math.abs(o.y-py)<(o.h+ph)/2){
      if(o.type==='pickup'){var got=G.V.cap-G.pizzas;G.pizzas=G.V.cap;G.obs.splice(i,1);sfx('pickup');pop(P.x,py,got>0?'+'+got+' PIZZAS':'BAG IS FULL','#ffd23f',16,36);continue;}
      if(o.type==='life'){
        G.obs.splice(i,1);sfx('life');
        if(G.lives<MAX_LIVES){G.lives++;G.lifeFlash=1;pop(P.x,py,'+1 LIFE','#ff6b7d',20,40);}
        else{G.score+=250;pop(P.x,py,'FULL LIVES  +250','#ff6b7d',16,40);}
        continue;
      }
      if(o.type==='puddle'){if(!o.hit){o.hit=true;G.slip=0.9;G.heat=Math.max(0,G.heat-10);sfx('splash');pop(P.x,py,'SPLASH!','#7fd4ff',15,34);}continue;}
      if(G.V.perk.indexOf(o.type)>=0){if(o.type!=='pothole')knock(o);continue;}   // a pothole is simply ridden over
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
// py is how far up the street the player is; the title screen passes a value no customer reacts to.
export function updCustomers(dt,py){
  for(var i=0;i<G.lots.length;i++){var l=G.lots[i];if(!l.cust)continue;var c=l.c;
    if(l.y0>G.cam+H+700||l.y0+LOT<G.cam-50)continue;
    if(c.happy>0)c.happy-=dt;
    if(l.delivered)continue;
    var ahead=l.doorY-py;
    if(c.type==='pacer')c.y=c.by+Math.sin(G.tGame*2.1+c.ph)*30;
    else if(c.type==='curb'){if(!l.missed&&ahead<700&&ahead>-80)c.x+=clamp(c.cx-c.x,-70*dt,70*dt);}
    else if(c.type==='quit'&&!c.gone){
      if(c.wait<0){if(ahead<640&&ahead>-80)c.wait=G.T.patience;}
      else{c.wait-=dt;if(c.wait<=0){c.gone=true;c.goneT=0;pop(c.x,c.y,'GAVE UP!','#ffb4b4',13,40);}}
    }
    if(c.gone){c.goneT+=dt;c.x+=clamp((l.side<0?WALL_L:WALL_R)-c.x,-60*dt,60*dt);}   // walks back to the door
  }
}
export function missPie(p,txt){
  G.streak=0;G.decals.push({x:p.x,y:p.y});sfx('miss');
  pop(p.x,p.y,txt,'#c9ced6',13,12);
}
export function resolvePie(p){
  var i,l,c,wall=p.side<0?WALL_L:WALL_R;
  for(i=0;i<G.lots.length;i++){l=G.lots[i];
    if(l.side!==p.side||!l.cust||l.delivered||l.missed||l.c.gone)continue;   // someone who went inside cannot take a hand-off
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

export function toTitle(){G.state='title';G.bonus=false;G.day=3;G.T=tune(3);seed(shiftSeed(3));buildShift(3);G.cam=0;}

// Where a pizza thrown right now to one side would land, and what it would hit.
// The 3D view draws this as an aiming mark, so throwing is about position, not guesswork.
export function aimAt(side){
  var wall=side<0?WALL_L:WALL_R,py=G.cam+H-P.sy,x0=P.x+side*10,reach=Math.abs(wall-x0);
  if(reach>RANGE)return{x:x0+side*RANGE,y:py+G.speed*RANGE/PIE_SPEED,hit:'far',lot:null};
  var y=py+G.speed*reach/PIE_SPEED,hit='wall',lot=null;
  for(var i=0;i<G.lots.length;i++){var l=G.lots[i];
    if(l.side!==side||!l.cust||l.delivered||l.missed||l.claim>G.step||Math.abs(l.y0+105-y)>170)continue;
    // The mark promises a little less than the rules allow, so a throw on a lit mark always lands.
    // A customer who is walking may have moved by the time the pizza arrives, so they need a truer aim.
    var c=l.c,moving=c.type==='pacer'||(c.type==='curb'&&Math.abs(c.cx-c.x)>1);
    var yc=py+G.speed*Math.abs(c.x-x0)/PIE_SPEED;
    if(!c.gone&&Math.abs(yc-c.y)<(moving?HAND_R-11:HAND_R-3)){hit='hand';lot=l;break;}
    if(Math.abs(y-l.doorY)<=DOOR_HALF-3){hit='door';lot=l;}
  }
  if(hit==='wall'){var w=lotAt(side,y);if(w&&y-w.y0>=HY0&&y-w.y0<=HY1)for(var k=0;k<w.wins.length;k++)if(!w.wins[k].broken&&Math.abs(y-w.wins[k].y)<=WIN_HALF)hit='window';}
  return{x:wall,y:y,hit:hit,lot:lot};
}
