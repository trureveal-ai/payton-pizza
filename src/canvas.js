// The one canvas the game draws on, scaled to fit the window.
import { W, H } from './config.js';
import { G } from './state.js';

export const cv=document.getElementById('g');
export const ctx=cv.getContext('2d');
export function resize(){
  var dpr=Math.min(window.devicePixelRatio||1,3);
  var s=Math.min(window.innerWidth/W,window.innerHeight/H);
  if(!(s>0))s=1;
  cv.style.width=Math.floor(W*s)+'px';cv.style.height=Math.floor(H*s)+'px';
  cv.width=Math.max(1,Math.round(W*s*dpr));cv.height=Math.max(1,Math.round(H*s*dpr));
  G.SC=cv.width/W;
}
