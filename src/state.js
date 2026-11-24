// Everything that changes while the game runs lives on G, so every module sees the same values.
import { H, VEH } from './config.js';

export const G = {
  SC:1, V:VEH[0],
  state:'title', day:1, score:0, lives:3, cam:0, speed:0, heat:100, streak:0, pizzas:0, shieldLeft:0,
  lots:[], obs:[], pies:[], pops:[], parts:[], decals:[],
  stats:null, finishY:0, tGame:0, shake:0, inv:0, stun:0, throwAnim:0, throwDir:1, throwCd:0,
  carT:0, slowT:0, skateT:0, bannerT:0, hintT:0, overWhy:'', garageFrom:'title', report:null, newHi:false,
  buttons:[], isTouch:false, keys:{},
  ride:0, step:0, runSeed:null, opt:{}, uiOy:0, hudTop:0, flashL:0, flashR:0, fps:null,
  bonus:false, continued:false, slip:0, sand:0, cartT:0, lifeFlash:0, T:null, hood:null, dusk:false, low:false, ridePics:null, setEffects:null,
  // Where a spot on the street appears on the 480-wide overlay. The 3D view replaces this.
  project:function(x,wy,up){return{x:x,y:H-(wy-G.cam)-(up||0),vis:true};}
};
export const P = {x:240,sy:560,tx:240,ty:560};
// world y (distance up the street) to screen y
export function Y(wy){return H-(wy-G.cam);}
