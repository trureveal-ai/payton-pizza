// Touch, mouse and keyboard.
import { H, W } from './config.js';
import { G, P } from './state.js';
import { save, writeSave } from './save.js';
import { cv } from './canvas.js';
import { audioInit, sfx } from './audio.js';
import { smartThrow, throwPizza } from './game.js';

export function pos(e){var r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)/r.width*W,y:(e.clientY-r.top)/r.height*H};}
export function uiTap(p){
  for(var i=G.buttons.length-1;i>=0;i--){var b=G.buttons[i];if(p.x>=b.x&&p.x<=b.x+b.w&&p.y>=b.y&&p.y<=b.y+b.h){if(b.fn)b.fn();return true;}}
  return false;
}
export function toggleMute(){save.mute=!save.mute;writeSave();if(!save.mute)sfx('ui');}
var steerId=null,drag=null;
cv.addEventListener('pointerdown',function(e){
  e.preventDefault();audioInit();try{cv.focus();}catch(err){}
  if(e.pointerType==='touch')G.isTouch=true;
  var p=pos(e);
  if(G.state!=='play'){uiTap(p);return;}
  if(p.y<42&&p.x>W-78){if(p.x>W-40)toggleMute();else G.state='pause';return;}
  if(steerId!==null){throwPizza(p.x<W/2?-1:1);return;}   // second finger = instant throw
  steerId=e.pointerId;drag={sx:p.x,sy:p.y,lx:p.x,ly:p.y,t:performance.now(),moved:0};
  try{cv.setPointerCapture(e.pointerId);}catch(err){}
});
cv.addEventListener('pointermove',function(e){
  if(e.pointerId!==steerId||!drag||G.state!=='play')return;
  e.preventDefault();
  var p=pos(e),dx=p.x-drag.lx,dy=p.y-drag.ly;
  drag.moved+=Math.abs(dx)+Math.abs(dy);drag.lx=p.x;drag.ly=p.y;
  if(drag.moved>8){P.tx+=dx*1.35;P.ty+=dy*1.15;}
});
export function endPtr(e){
  if(e.pointerId!==steerId)return;
  if(drag&&G.state==='play'&&e.type==='pointerup'&&drag.moved<10&&performance.now()-drag.t<350)throwPizza(drag.sx<W/2?-1:1);
  steerId=null;drag=null;
}
cv.addEventListener('pointerup',endPtr);cv.addEventListener('pointercancel',endPtr);
cv.addEventListener('contextmenu',function(e){e.preventDefault();});
window.addEventListener('keydown',function(e){
  var c=e.code;
  if(c.indexOf('Arrow')===0||c==='Space')e.preventDefault();
  audioInit();
  if(e.repeat){return;}
  G.keys[c]=true;
  if(c==='KeyM'){toggleMute();return;}
  if(G.state==='play'){
    if(c==='KeyZ'||c==='KeyA'||c==='KeyQ')throwPizza(-1);
    else if(c==='KeyX'||c==='KeyD'||c==='KeyE')throwPizza(1);
    else if(c==='Space')smartThrow();
    else if(c==='KeyP'||c==='Escape')G.state='pause';
    return;
  }
  if(G.state==='pause'&&(c==='KeyP'||c==='Escape'||c==='Space')){G.state='play';return;}
  var k=(c==='Space'||c==='NumpadEnter')?'Enter':c;
  for(var i=0;i<G.buttons.length;i++)if(G.buttons[i].key===k&&G.buttons[i].fn){G.buttons[i].fn();return;}
});
window.addEventListener('keyup',function(e){G.keys[e.code]=false;});
window.addEventListener('blur',function(){G.keys={};if(G.state==='play')G.state='pause';});
document.addEventListener('visibilitychange',function(){if(document.hidden&&G.state==='play')G.state='pause';});

