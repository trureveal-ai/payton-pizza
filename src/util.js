// Small helpers. Random numbers all come from Math.random for now; Phase 2 swaps in a seeded source.
export function rnd(a,b){return a+Math.random()*(b-a);}
export function chance(p){return Math.random()<p;}
export function clamp(v,a,b){return v<a?a:v>b?b:v;}
export function pick(a){return a[(Math.random()*a.length)|0];}
