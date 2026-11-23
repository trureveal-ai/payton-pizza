// Two canvases fill the window: the 3D street underneath, and this overlay for the HUD, menus and words.
// The overlay keeps the game's 480-unit width; `view` says how those units sit in the window.
import { W, H } from './config.js';
import { G } from './state.js';

export const cv=document.getElementById('g');
export const glc=document.getElementById('gl');
export const ctx=cv.getContext('2d');
export const view={s:1,ox:0,dpr:1,VW:W,VH:H,cw:W,ch:H,top:0,bottom:0,onResize:null};
export function resize(){
  var ww=window.innerWidth||W,wh=window.innerHeight||H;
  var dpr=Math.min(window.devicePixelRatio||1,2);
  var s=Math.min(ww/W,wh/H);
  if(!(s>0))s=1;
  view.s=s;view.dpr=dpr;view.ox=(ww-W*s)/2;view.VW=ww/s;view.VH=wh/s;view.cw=ww;view.ch=wh;
  cv.style.width=ww+'px';cv.style.height=wh+'px';
  cv.width=Math.max(1,Math.round(ww*dpr));cv.height=Math.max(1,Math.round(wh*dpr));
  G.SC=s*dpr;
  // room for a phone's notch and home bar, in overlay units
  var probe=document.getElementById('safe');
  if(probe){var cs=getComputedStyle(probe);view.top=(parseFloat(cs.paddingTop)||0)/s;view.bottom=(parseFloat(cs.paddingBottom)||0)/s;}
  G.hudTop=view.top;
  if(view.onResize)view.onResize();
}
// a spot in the window (CSS pixels) as overlay units
export function toUnits(cx,cy){return{x:(cx-view.ox)/view.s,y:cy/view.s};}
