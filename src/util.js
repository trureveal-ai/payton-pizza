// Small helpers. rnd, chance and pick draw from the seeded source in rng.js and are for game
// rules only. Drawing code uses vrnd, so what is on screen never changes how a street plays.
import { rand } from './rng.js';
export function rnd(a,b){return a+rand()*(b-a);}
export function chance(p){return rand()<p;}
export function clamp(v,a,b){return v<a?a:v>b?b:v;}
export function pick(a){return a[(rand()*a.length)|0];}
export function vrnd(a,b){return a+Math.random()*(b-a);}
