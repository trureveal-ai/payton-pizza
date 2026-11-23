// Entry point: load saved progress, show the title screen, run the loop.
// The rules advance in fixed steps of STEP seconds whatever the screen's speed, so a given seed and
// the same inputs always play out the same way.
import { STEP } from './config.js';
import { G, P } from './state.js';
import { loadSave } from './save.js';
import { resize, toUnits, view } from './canvas.js';
import { toTitle, update } from './game.js';
import { frameDraw } from './render.js';
import { draw3d, info3d, init3d } from './render3d.js';
import './input.js';

// Testing switches in the page address: ?seed=1001&day=14&ride=3 picks the street, ?fps=1 shows the
// frame-rate readout, ?shadows=0 turns shadows off. None of them is saved.
(function(){
  var q=new URLSearchParams(location.search),n=function(k){var v=parseInt(q.get(k),10);return isFinite(v)?v:null;};
  if(n('seed')!=null)G.opt.seed=n('seed');
  if(n('day')!=null)G.opt.day=Math.max(1,n('day'));
  if(q.get('bonus')==='1'){G.opt.bonus=true;if(G.opt.day==null)G.opt.day=7;}
  if(n('ride')!=null)G.opt.ride=Math.max(0,Math.min(3,n('ride')));
  if(q.get('fps')==='1')G.opt.fps=true;
  if(q.get('shadows')==='0')G.opt.shadows=0;
})();

G.isTouch=('ontouchstart' in window)||(navigator.maxTouchPoints>0);
window.addEventListener('resize',resize);resize();
loadSave();
init3d();

var last=0,acc=0,meter={t:0,n:0,total:0,frames:0,low:Infinity,warm:0};
function measure(real){
  meter.warm+=real;if(meter.warm<3)return;         // skip start-up hitches
  meter.t+=real;meter.n++;meter.total+=real;meter.frames++;
  if(meter.t>=1){
    var now=meter.n/meter.t,i=info3d();meter.low=Math.min(meter.low,now);meter.t=0;meter.n=0;
    G.fps={now:Math.round(now),avg:Math.round(meter.frames/meter.total),low:Math.round(meter.low),calls:i.calls,tris:Math.round(i.tris/1000)};
  }
}
function loop(ts){
  var real=(ts-last)/1000||0;last=ts;
  if(real>0.25)real=0.25;
  if(!document.hidden)measure(real);
  acc+=real;
  try{
    var n=0;
    // a frame that took about one step runs exactly one, so a 60 Hz screen never stutters
    if(Math.abs(acc-STEP)<0.004){update(STEP);acc=0;n=1;}
    else while(acc>=STEP&&n<5){update(STEP);acc-=STEP;n++;}
    if(n===5)acc=0;
    draw3d();frameDraw();
  }catch(err){if(window.console)console.error(err);}
  requestAnimationFrame(loop);
}
toTitle();
// Read-only peek for automated tests. It cannot change the game.
window.__pp={get state(){return G.state;},get score(){return G.score;},get day(){return G.day;},get lives(){return G.lives;},
  get step(){return G.step;},get webgl(){return !!G.webgl;},get fps(){return G.fps;},get draws(){return info3d().calls;},
  get stats(){return G.stats?Object.assign({},G.stats):null;},
  get pizzas(){return G.pizzas;},get x(){return P.x;},get tx(){return P.tx;},get bonus(){return !!G.bonus;},get ride(){return G.ride;},
  // where a spot in the 480-wide overlay is on the page; `anchor` is 'top', 'mid' or 'bottom'
  spot:function(x,y,anchor){var oy=anchor==='top'?0:anchor==='bottom'?view.VH-800:(view.VH-800)/2;return{x:view.ox+x*view.s,y:(y+oy)*view.s};},
  units:toUnits,
  version:typeof __APP_VERSION__==='string'?__APP_VERSION__:'dev'};
requestAnimationFrame(loop);
