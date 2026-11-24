// Sound effects, generated in code.
import { save } from './save.js';

var AC=null,noiseBuf=null;
export function audioInit(){
  if(AC){if(AC.state==='suspended'){try{AC.resume();}catch(e){}}return;}
  try{var A=window.AudioContext||window.webkitAudioContext;if(!A)return;AC=new A();
    noiseBuf=AC.createBuffer(1,AC.sampleRate*0.5,AC.sampleRate);var d=noiseBuf.getChannelData(0);
    for(var i=0;i<d.length;i++)d[i]=Math.random()*2-1;}catch(e){AC=null;}
}
export function tone(f,d,type,v,f2,delay){
  if(!AC||save.mute)return;
  try{var t=AC.currentTime+(delay||0),o=AC.createOscillator(),g=AC.createGain();
    o.type=type||'square';o.frequency.setValueAtTime(f,t);
    if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);
    g.gain.setValueAtTime(v||0.06,t);g.gain.exponentialRampToValueAtTime(0.0008,t+d);
    o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d+0.03);}catch(e){}
}
export function noise(d,v){
  if(!AC||save.mute||!noiseBuf)return;
  try{var t=AC.currentTime,s=AC.createBufferSource(),g=AC.createGain();s.buffer=noiseBuf;
    g.gain.setValueAtTime(v||0.12,t);g.gain.exponentialRampToValueAtTime(0.0008,t+d);
    s.connect(g);g.connect(AC.destination);s.start(t);s.stop(t+d+0.03);}catch(e){}
}
export function sfx(n){
  if(n==='throw')tone(520,0.09,'square',0.04,260);
  else if(n==='door'){tone(660,0.08,'square',0.06);tone(880,0.12,'square',0.06,null,0.08);}
  else if(n==='hand'){tone(660,0.07,'square',0.07);tone(880,0.07,'square',0.07,null,0.07);tone(1320,0.18,'square',0.07,null,0.14);}
  else if(n==='smash'){noise(0.25,0.16);tone(1800,0.12,'sawtooth',0.04,400);}
  else if(n==='miss')tone(200,0.14,'triangle',0.08,90);
  else if(n==='bad'){tone(220,0.16,'sawtooth',0.06,140);tone(150,0.22,'sawtooth',0.06,90,0.14);}
  else if(n==='crash'){noise(0.4,0.22);tone(140,0.35,'sawtooth',0.1,40);}
  else if(n==='pickup'){tone(500,0.06,'square',0.06);tone(750,0.06,'square',0.06,null,0.06);tone(1000,0.1,'square',0.06,null,0.12);}
  else if(n==='empty')tone(120,0.08,'square',0.05);
  else if(n==='bark'){tone(380,0.06,'sawtooth',0.07,240);tone(360,0.07,'sawtooth',0.07,220,0.11);}
  else if(n==='beep')tone(900,0.08,'square',0.04);
  else if(n==='ui')tone(700,0.05,'square',0.05);
  else if(n==='buy'){tone(523,0.08,'square',0.06);tone(659,0.08,'square',0.06,null,0.08);tone(784,0.08,'square',0.06,null,0.16);tone(1046,0.22,'square',0.06,null,0.24);}
  else if(n==='win'){tone(523,0.1,'square',0.06);tone(659,0.1,'square',0.06,null,0.1);tone(784,0.1,'square',0.06,null,0.2);tone(1046,0.3,'square',0.06,null,0.3);}
  else if(n==='shield'){tone(300,0.2,'triangle',0.1,600);}
  else if(n==='bonk'){tone(260,0.07,'square',0.06,150);}
  else if(n==='splash'){noise(0.2,0.1);}
  else if(n==='sand'){noise(0.28,0.06);}
  else if(n==='life'){tone(660,0.08,'square',0.07);tone(990,0.08,'square',0.07,null,0.08);tone(1320,0.2,'square',0.07,null,0.16);}
}

