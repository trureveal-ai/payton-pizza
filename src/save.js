// Progress kept on this device: bank, rides owned, high score, the day Continue picks up from, mute, low effects.
export const save={bank:0,owned:[true,false,false,false],ride:0,hi:0,bestDay:0,cont:1,mute:false,low:false};
const KEY='payton-pizza-v1';
export function loadSave(){try{var s=JSON.parse(localStorage.getItem(KEY)||'null');if(s&&typeof s==='object'){for(var k in save)if(k in s)save[k]=s[k];}}catch(e){}
  if(!Array.isArray(save.owned)||save.owned.length!==4)save.owned=[true,false,false,false];save.owned[0]=true;
  if(!save.owned[save.ride])save.ride=0;
  if(!(save.cont>=1))save.cont=1;}
export function writeSave(){try{localStorage.setItem(KEY,JSON.stringify(save));}catch(e){}}
