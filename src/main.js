// Entry point: load saved progress, show the title screen, run the loop.
import { G } from './state.js';
import { loadSave } from './save.js';
import { resize } from './canvas.js';
import { toTitle, update } from './game.js';
import { frameDraw } from './render.js';
import './input.js';

G.isTouch=('ontouchstart' in window)||(navigator.maxTouchPoints>0);
window.addEventListener('resize',resize);resize();
loadSave();

var last=0;
function loop(ts){
  var dt=Math.min(0.034,(ts-last)/1000||0);last=ts;
  try{update(dt);frameDraw();}catch(err){if(window.console)console.error(err);}
  requestAnimationFrame(loop);
}
toTitle();
// Read-only peek for automated tests. It cannot change the game.
window.__pp={get state(){return G.state;},get score(){return G.score;},get day(){return G.day;},get lives(){return G.lives;},version:typeof __APP_VERSION__==='string'?__APP_VERSION__:'dev'};
requestAnimationFrame(loop);
