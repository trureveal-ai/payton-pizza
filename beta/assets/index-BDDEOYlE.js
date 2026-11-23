(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const gt=480,ge=800,fr=[{name:"HOVERBOARD",price:0,spd:1,steer:290,cap:8,w:28,h:22,tip:1,heat:1,shield:0,perk:[],blurb:["Free. Wobbly. Yours.","Small and easy to dodge with."],perkText:"No perks. All skill."},{name:"DIRT BIKE",price:150,spd:1.14,steer:390,cap:10,w:16,h:38,tip:1,heat:1,shield:0,perk:["pothole"],blurb:["Faster, sharper steering.","Carries 10 pizzas."],perkText:"Rides over potholes."},{name:"GUN-METAL BLACK BIMMER",price:450,spd:1.28,steer:340,cap:12,w:26,h:50,tip:1.2,heat:1,shield:1,perk:["pothole","cone","can","ball"],blurb:["Fast. Shrugs off 1 crash","per shift. Tips x1.2."],perkText:"Also knocks cones and bins aside."},{name:"PAYTON PIZZA VAN",price:1e3,spd:1.2,steer:300,cap:16,w:30,h:58,tip:1.5,heat:.55,shield:1,perk:["pothole","cone","can","ball","dog","skater"],blurb:["Oven on board: pizzas stay","hot. Tips x1.5. 16 pizzas."],perkText:"Also shrugs off dogs and skaters."}],mo=3,pa=5,ra=130,go=160,ml=320,gl=350,Qn=96,ti=384,pi=210,pu=40,mu=170,sa=560,Aa=330,_s=650,$r=185,_o=21,aa=16,gu=13,Js=410,vs=1250,Ir=1/60,en=20,gr=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],Uf=[["#e4572e","#b8431f"],["#3d7fd9","#2c5fa8"],["#8b5cf6","#6d43d0"],["#f2a007","#c27e00"],["#2aa198","#1c7a73"],["#e0559b","#b23c78"]],Nf=[["#7b808c","#5f646f"],["#8a8478","#6c675d"],["#6f7a78","#56605e"]],Ff=["#f2c9a0","#d9a577","#a8703f","#7a4a26","#ffdcb8"],_u=["#ffffff","#ffd23f","#5ad1ff","#9cf07a","#ff9f6b","#d6a5ff"],Yl=["#c0392b","#2e86c1","#27ae60","#d4ac0d","#8e44ad","#e67e22","#ecf0f1"],f={SC:1,V:fr[0],state:"title",day:1,score:0,lives:3,cam:0,speed:0,heat:100,streak:0,pizzas:0,shieldLeft:0,lots:[],obs:[],pies:[],pops:[],parts:[],decals:[],stats:null,finishY:0,tGame:0,shake:0,inv:0,stun:0,throwAnim:0,throwDir:1,throwCd:0,carT:0,slowT:0,skateT:0,bannerT:0,hintT:0,overWhy:"",garageFrom:"title",report:null,newHi:!1,buttons:[],isTouch:!1,keys:{},ride:0,step:0,runSeed:null,opt:{},uiOy:0,hudTop:0,flashL:0,flashR:0,fps:null,bonus:!1,continued:!1,slip:0,lifeFlash:0,T:null,project:function(i,t,e){return{x:i,y:ge-(t-f.cam)-(e||0),vis:!0}}},Pt={x:240,sy:560,tx:240,ty:560};function Of(i){return ge-(i-f.cam)}const wt={bank:0,owned:[!0,!1,!1,!1],ride:0,hi:0,bestDay:0,cont:1,mute:!1},vu="payton-pizza-v1";function Bf(){try{var i=JSON.parse(localStorage.getItem(vu)||"null");if(i&&typeof i=="object")for(var t in wt)t in i&&(wt[t]=i[t])}catch{}(!Array.isArray(wt.owned)||wt.owned.length!==4)&&(wt.owned=[!0,!1,!1,!1]),wt.owned[0]=!0,wt.owned[wt.ride]||(wt.ride=0),wt.cont>=1||(wt.cont=1)}function _i(){try{localStorage.setItem(vu,JSON.stringify(wt))}catch{}}const tn=document.getElementById("g"),zf=document.getElementById("gl"),ot=tn.getContext("2d"),Ht={s:1,ox:0,dpr:1,VW:gt,VH:ge,cw:gt,ch:ge,top:0,bottom:0,onResize:null};function xu(){var i=window.innerWidth||gt,t=window.innerHeight||ge,e=Math.min(window.devicePixelRatio||1,2),n=Math.min(i/gt,t/ge);n>0||(n=1),Ht.s=n,Ht.dpr=e,Ht.ox=(i-gt*n)/2,Ht.VW=i/n,Ht.VH=t/n,Ht.cw=i,Ht.ch=t,tn.style.width=i+"px",tn.style.height=t+"px",tn.width=Math.max(1,Math.round(i*e)),tn.height=Math.max(1,Math.round(t*e)),f.SC=n*e;var r=document.getElementById("safe");if(r){var s=getComputedStyle(r);Ht.top=(parseFloat(s.paddingTop)||0)/n,Ht.bottom=(parseFloat(s.paddingBottom)||0)/n}f.hudTop=Ht.top,Ht.onResize&&Ht.onResize()}function Mu(i,t){return{x:(i-Ht.ox)/Ht.s,y:t/Ht.s}}var $s=1;function yu(i){$s=i>>>0||1}function Ni(){$s=$s+1831565813>>>0;var i=$s;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}var Hf=20261123;function Su(i){var t=(Hf^Math.imul(i+1,2654435761))>>>0;return t=Math.imul(t^t>>>16,2246822507)>>>0,t=Math.imul(t^t>>>13,3266489909)>>>0,(t^t>>>16)>>>0||1}function oe(i,t){return i+Ni()*(t-i)}function We(i){return Ni()<i}function Be(i,t,e){return i<t?t:i>e?e:i}function wn(i){return i[Ni()*i.length|0]}function ql(i,t){return i+Math.random()*(t-i)}var Ne=null,oa=null;function Eu(){if(Ne){if(Ne.state==="suspended")try{Ne.resume()}catch{}return}try{var i=window.AudioContext||window.webkitAudioContext;if(!i)return;Ne=new i,oa=Ne.createBuffer(1,Ne.sampleRate*.5,Ne.sampleRate);for(var t=oa.getChannelData(0),e=0;e<t.length;e++)t[e]=Math.random()*2-1}catch{Ne=null}}function re(i,t,e,n,r,s){if(!(!Ne||wt.mute))try{var a=Ne.currentTime+(s||0),o=Ne.createOscillator(),l=Ne.createGain();o.type=e||"square",o.frequency.setValueAtTime(i,a),r&&o.frequency.exponentialRampToValueAtTime(r,a+t),l.gain.setValueAtTime(n||.06,a),l.gain.exponentialRampToValueAtTime(8e-4,a+t),o.connect(l),l.connect(Ne.destination),o.start(a),o.stop(a+t+.03)}catch{}}function wa(i,t){if(!(!Ne||wt.mute||!oa))try{var e=Ne.currentTime,n=Ne.createBufferSource(),r=Ne.createGain();n.buffer=oa,r.gain.setValueAtTime(t||.12,e),r.gain.exponentialRampToValueAtTime(8e-4,e+i),n.connect(r),r.connect(Ne.destination),n.start(e),n.stop(e+i+.03)}catch{}}function Qt(i){i==="throw"?re(520,.09,"square",.04,260):i==="door"?(re(660,.08,"square",.06),re(880,.12,"square",.06,null,.08)):i==="hand"?(re(660,.07,"square",.07),re(880,.07,"square",.07,null,.07),re(1320,.18,"square",.07,null,.14)):i==="smash"?(wa(.25,.16),re(1800,.12,"sawtooth",.04,400)):i==="miss"?re(200,.14,"triangle",.08,90):i==="bad"?(re(220,.16,"sawtooth",.06,140),re(150,.22,"sawtooth",.06,90,.14)):i==="crash"?(wa(.4,.22),re(140,.35,"sawtooth",.1,40)):i==="pickup"?(re(500,.06,"square",.06),re(750,.06,"square",.06,null,.06),re(1e3,.1,"square",.06,null,.12)):i==="empty"?re(120,.08,"square",.05):i==="bark"?(re(380,.06,"sawtooth",.07,240),re(360,.07,"sawtooth",.07,220,.11)):i==="beep"?re(900,.08,"square",.04):i==="ui"?re(700,.05,"square",.05):i==="buy"?(re(523,.08,"square",.06),re(659,.08,"square",.06,null,.08),re(784,.08,"square",.06,null,.16),re(1046,.22,"square",.06,null,.24)):i==="win"?(re(523,.1,"square",.06),re(659,.1,"square",.06,null,.1),re(784,.1,"square",.06,null,.2),re(1046,.3,"square",.06,null,.3)):i==="shield"?re(300,.2,"triangle",.1,600):i==="bonk"?re(260,.07,"square",.06,150):i==="splash"?wa(.2,.1):i==="life"&&(re(660,.08,"square",.07),re(990,.08,"square",.07,null,.08),re(1320,.2,"square",.07,null,.16))}function kn(i,t,e,n){return Math.min(i+t*e,n)}function ma(i){return{speed:Math.min(160+9*(i-1),280),lots:Math.min(26+2*i,44),order:kn(.34,.02,i,.5),side:kn(.14,.025,i,.45),road:kn(.08,.022,i,.36),dog:i>=3?kn(.03,.018,i-2,.22):0,dcar:i>=4?kn(.03,.015,i-3,.18):0,ball:i>=3?kn(.03,.01,i-2,.14):0,barrier:i>=5?kn(.03,.008,i-5,.1):0,carDown:Math.max(2,5.2-.25*i),carUp:Math.max(3,7-.3*i),skater:i>=4?[Math.max(3.5,10-.5*i),Math.max(7,14-.5*i)]:null,pacer:kn(.06,.05,i,.4),quitter:i>=2?kn(.04,.03,i,.22):0,curb:.15,patience:Math.max(1.7,2.6-.05*i),pickupEvery:i<=2?2:3,lives:i>=3?2:1}}function Tn(i,t,e){var n={type:i,x:t,y:e,vx:0,vy:0,w:16,h:16,st:0,t:oe(0,6),side:0,col:"#888",dead:!1};return i==="can"?(n.w=18,n.h=18):i==="hydrant"||i==="cone"?(n.w=13,n.h=13):i==="pothole"?(n.w=24,n.h=14):i==="dog"?(n.w=16,n.h=18,n.col=wn(["#8d5524","#3b3b3b","#d9b382","#f5f5f5"])):i==="dcar"?(n.w=46,n.h=24,n.col=wn(Yl)):i==="carD"||i==="carU"?(n.w=24,n.h=48,n.col=wn(Yl)):i==="skater"?(n.w=14,n.h=20,n.col=wn(_u)):i==="pickup"||i==="life"?(n.w=30,n.h=30):i==="puddle"?(n.w=30,n.h=18):i==="ball"?(n.w=14,n.h=14,n.col=wn(["#ff3b4e","#3d7fd9","#ffd23f"])):i==="barrier"&&(n.w=64,n.h=16),n}function jr(i,t,e,n,r){for(var s=[62,105,148],a=Ni()*3|0,o=ma(n),l={side:i,y0:t,cust:e,delivered:!1,missed:!1,slot:a,doorY:t+s[a],wins:[],roof:wn(e?Uf:Nf),c:null,ph:oe(0,6)},c=0;c<3;c++)c!==a&&l.wins.push({y:t+s[c],broken:!1});if(e){var u=Ni(),h="porch",d=r?0:o.pacer,m=d+(r?0:o.quitter),_=m+(r?.3:o.curb);u<d?h="pacer":u<m?h="quit":u<_?h="curb":u<_+.3&&(h="yard");var M=i<0?Qn:ti,g=-i,p=l.doorY+(h==="yard"?(We(.5)?-1:1)*oe(26,36):0),T=M+g*(h==="yard"||h==="pacer"?oe(18,27):11);l.c={type:h,x:T,y:p,by:p,hx:T,cx:i<0?ra-9:gl+9,ph:oe(0,6),happy:0,wait:-1,gone:!1,skin:wn(Ff),shirt:wn(_u),hair:wn(["#3b2a1a","#111","#b5651d","#e6c35c","#888"])}}return l}function bu(i){f.lots=[],f.obs=[],f.pies=[],f.pops=[],f.parts=[],f.decals=[];var t=ma(i),e=t.lots,n=sa,r,s,a;for(r=0;r<e;r++){f.lots.push(jr(-1,n,We(t.order),i)),f.lots.push(jr(1,n,We(t.order),i));var o=[145,335];for(s=0;s<2;s++)We(t.side)&&f.obs.push(Tn(We(.6)?"can":"hydrant",o[s]+oe(-7,7),n+oe(10,pi-10)));if(We(t.road)){var l=Ni();f.obs.push(Tn(l<.4?"cone":l<.75?"pothole":"puddle",oe(178,302),n+oe(0,pi)))}t.dog&&We(t.dog)&&(s=We(.5)?-1:1,a=Tn("dog",s<0?114:366,n+oe(60,150)),a.side=s,f.obs.push(a)),t.dcar&&We(t.dcar)&&(s=We(.5)?-1:1,a=Tn("dcar",s<0?74:406,n+19),a.side=s,f.obs.push(a)),t.ball&&We(t.ball)&&(s=We(.5)?-1:1,a=Tn("ball",s<0?120:360,n+oe(40,170)),a.side=s,f.obs.push(a)),t.barrier&&r>2&&We(t.barrier)&&f.obs.push(Tn("barrier",We(.5)?200:280,n+oe(30,180))),r%t.pickupEvery===1&&f.obs.push(Tn("pickup",oe(152,328),n+oe(20,190))),n+=pi}var c=t.lives>1&&We(.5)?2:1,u=[.35,.78];for(r=0;r<c;r++)f.obs.push(Tn("life",oe(170,310),sa+Math.floor(e*u[r])*pi+oe(30,180)));var h=0;for(r=0;r<f.lots.length;r++)f.lots[r].cust&&h++;for(var d=0;h<12&&d++<400;){var m=Ni()*f.lots.length|0;f.lots[m].cust||(f.lots[m]=jr(f.lots[m].side,f.lots[m].y0,!0,i),h++)}return f.finishY=n+240,h}function Gf(i){f.lots=[],f.obs=[],f.pies=[],f.pops=[],f.parts=[],f.decals=[];var t=12,e=sa,n;for(n=0;n<t;n++)f.lots.push(jr(-1,e,!0,i,!0)),f.lots.push(jr(1,e,!0,i,!0)),e+=pi;return f.finishY=e+240,t*2}function vo(i,t){var e=Math.floor((t-sa)/pi);if(e<0)return null;var n=f.lots[e*2+(i<0?0:1)];return n||null}function ns(i){f.day=f.day0=i||f.opt.day||1,f.runSeed=f.opt.seed!=null?f.opt.seed:null,f.continued=!!i&&i>1,f.score=0,f.lives=mo,f.newHi=!1,Au()}function Tu(){ns(Math.max(1,wt.cont||1))}function Au(){wu(!1)}function Vf(){wu(!0)}function Zl(){if(!f.bonus&&f.day%7===0){Vf();return}f.day++,Au()}function wu(i){f.bonus=i,f.ride=f.opt.ride!=null?f.opt.ride:wt.ride,f.V=fr[f.ride],f.T=ma(f.day),yu((f.runSeed!=null?f.runSeed+(f.day-f.day0):Su(f.day))+(i?7777:0)),f.step=0;var t=i?Gf(f.day):bu(f.day);f.cam=0,Pt.x=Pt.tx=280,Pt.sy=Pt.ty=590,f.heat=100,f.streak=0,f.pizzas=f.V.cap,f.shieldLeft=i?0:f.V.shield,f.inv=0,f.stun=0,f.slip=0,f.shake=0,f.throwCd=0,f.throwAnim=0,f.lifeFlash=0,f.carT=oe(1.5,3),f.slowT=oe(3,5),f.skateT=oe(4,8),f.bannerT=2.4,f.day===1&&!i&&(f.hintT=9),f.stats={orders:t,delivered:0,hand:0,door:0,smash:0,missed:0,tips:0,crashes:0,bonks:0},!i&&f.opt.day==null&&wt.cont!==f.day&&(wt.cont=f.day,_i()),f.state="play"}function kf(i){wt.bank+=i,f.stats&&(f.stats.tips+=i)}function Ru(i){f.overWhy=i,f.state="over",f.score>wt.hi&&(wt.hi=f.score,f.newHi=!0),f.day>wt.bestDay&&(wt.bestDay=f.day),_i(),Qt("bad")}function Wf(){if(f.bonus){var i=f.stats.delivered===f.stats.orders,t=2*f.stats.delivered,e=i?50:0;wt.bank+=t+e,i&&(f.score+=2e3),f.report={bonus:!0,pay:t,perfect:e,pct:Math.round(100*f.stats.delivered/f.stats.orders),healed:!1,title:i?"PARTY HERO":f.stats.delivered>=f.stats.orders*.6?"LIFE OF THE PARTY":"PARTY CRASHER"},f.score>wt.hi&&(wt.hi=f.score,f.newHi=!0),_i(),f.state="report",Qt("win");return}var n=f.stats.orders?f.stats.delivered/f.stats.orders:1;if(n<.5){Ru("fired");return}var r=10+5*f.day,s=f.stats.missed===0&&f.stats.smash===0&&f.stats.crashes===0?25:0;wt.bank+=r+s,f.score+=s?1e3:0;var a="BARELY EMPLOYED";s?a="EMPLOYEE OF THE DAY":f.stats.smash>=3?a="WINDOW MENACE":n>=.9&&f.stats.hand>=f.stats.door?a="HAND-OFF HERO":n>=.9?a="RELIABLE DRIVER":n>=.7&&(a="DECENT DRIVER"),f.report={pay:r,perfect:s,title:a,pct:Math.round(n*100),healed:f.lives<mo},f.lives<mo&&f.lives++,f.score>wt.hi&&(wt.hi=f.score,f.newHi=!0),f.day>wt.bestDay&&(wt.bestDay=f.day),_i(),f.state="report",Qt("win")}function qe(i,t,e,n,r,s){f.pops.push({wx:i,wy:t,lift:s||0,txt:e,col:n||"#fff",t:0,size:r||16})}function Xf(i,t,e,n,r){f.pops.push({sx:i,sy:t,lift:0,txt:e,col:n,t:0,size:r})}function _l(i,t,e,n,r){for(var s=f.project(i,t,0),a=0;a<e;a++){var o=oe(0,6.28),l=oe(30,r||160);f.parts.push({x:s.x,y:s.y,vx:Math.cos(o)*l,vy:Math.sin(o)*l,t:0,life:oe(.3,.7),col:wn(n),s:oe(2,4)})}}function is(i){if(!(f.state!=="play"||f.throwCd>0)){if(i<0?f.flashL=.25:f.flashR=.25,f.pizzas<=0){qe(Pt.x,f.cam+ge-Pt.sy,"OUT OF PIZZA!","#ffd23f",16,34),Qt("empty"),f.throwCd=.25;return}var t=Cu(i);t.lot&&(t.lot.claim=f.step+50),f.bonus||f.pizzas--,f.throwCd=.2,f.throwAnim=.18,f.throwDir=i,f.pies.push({x:Pt.x+i*10,y:f.cam+ge-Pt.sy,vx:i*Js,vy:f.speed,d:0,side:i,rot:oe(0,6)}),Qt("throw")}}function Yf(){for(var i=f.cam+ge-Pt.sy,t=null,e=1e9,n=0;n<f.lots.length;n++){var r=f.lots[n];if(!(!r.cust||r.delivered||r.missed)){var s=r.doorY-i;if(!(s<-40||s>260)){var a=r.side<0?Qn:ti;if(!(Math.abs(Pt.x-a)>$r+10)){var o=Math.abs(s-60);o<e&&(e=o,t=r)}}}}is(t?t.side:Pt.x<240?-1:1)}function Ra(i,t,e){i.delivered=!0,i.c.happy=1.4,f.stats.delivered++;var n=1+f.heat/100,r,s,a,o,l=i.c.x,c=i.c.y,u=f.bonus?2:1;if(t){f.streak++;var h=Math.min(f.streak,5),d=i.c.type==="quit"?1.5:1;r=Math.round(250*n*h*d*u/10)*10,s=Math.max(1,Math.round(3*n*(1+.25*(h-1))*f.V.tip*d*u)),f.stats.hand++,a=(d>1?"JUST IN TIME!":"HAND-OFF!")+(h>1?" x"+h:""),o="#ffd23f",Qt("hand"),_l(l,c,14,["#ffd23f","#fff","#ff9f1c"],200),qe(l,c,a,o,20,38),qe(l,c,"+"+r+"  $"+s,"#fff",14,18)}else r=Math.round(100*n*u/10)*10,s=Math.max(1,Math.round(1*n*f.V.tip*u)),f.stats.door++,Qt("door"),qe(l,c,"FRONT DOOR","#9cf07a",16,38),qe(l,c,"+"+r+"  $"+s,"#fff",14,20);f.score+=r,kf(s),f.heat=Math.min(100,f.heat+40)}function qf(i){var t=f.cam+ge-Pt.sy;if(f.shieldLeft>0){f.shieldLeft--,f.inv=1.3,f.shake=.2,Qt("shield"),qe(Pt.x,t,"BUMPER SAVED YOU!","#5ad1ff",16,40);return}f.lives--,f.inv=1.9,f.stun=.6,f.streak=0,f.heat=Math.max(0,f.heat-25),f.shake=.45,f.stats.crashes++,f.lifeFlash=1,Qt("crash"),qe(Pt.x,t,"WIPEOUT!","#ff5964",22,46),f.lives>0&&qe(Pt.x,t,f.lives+(f.lives===1?" LIFE":" LIVES")+" LEFT","#fff",14,24),_l(Pt.x,t,18,["#fff","#ffd23f","#ff5964","#e8b04a"],240),f.lives<=0&&Ru("crash")}function Zf(i){i.out=!0,i.vx=(i.x>=Pt.x?1:-1)*oe(170,250),i.vy=f.speed*.7,i.t=0,f.stats.bonks++,f.score+=10,Qt("bonk"),qe(i.x,i.y,i.type==="dog"?"YIP!":i.type==="skater"?"WHOA!":"BONK!","#5ad1ff",13,26)}function Kl(i){f.tGame+=i;var t,e,n,r;for(t=f.pops.length-1;t>=0;t--)r=f.pops[t],r.t+=i,r.t>1.2&&f.pops.splice(t,1);for(t=f.parts.length-1;t>=0;t--)r=f.parts[t],r.t+=i,r.x+=r.vx*i,r.y+=r.vy*i,r.vy+=300*i,r.t>r.life&&f.parts.splice(t,1);if(f.shake>0&&(f.shake-=i),f.flashL>0&&(f.flashL-=i),f.flashR>0&&(f.flashR-=i),f.lifeFlash>0&&(f.lifeFlash-=i),f.state==="title"){f.cam+=110*i,f.cam>f.finishY-ge-300&&(f.cam=0),Jl(i,-1e9);return}if(f.state==="play"){f.step++,f.inv>0&&(f.inv-=i),f.stun>0&&(f.stun-=i),f.slip>0&&(f.slip-=i),f.throwCd>0&&(f.throwCd-=i),f.throwAnim>0&&(f.throwAnim-=i),f.bannerT>0&&(f.bannerT-=i),f.hintT>0&&(f.hintT-=i);var s=(f.keys.ArrowRight||f.keys.KeyL?1:0)-(f.keys.ArrowLeft||f.keys.KeyJ?1:0),a=(f.keys.ArrowDown||f.keys.KeyK?1:0)-(f.keys.ArrowUp||f.keys.KeyI?1:0),o=f.V.steer*(f.stun>0||f.slip>0?.4:1);if(s||a)Pt.x+=s*o*i,Pt.sy+=a*250*i,Pt.tx=Pt.x,Pt.ty=Pt.sy;else{var l=o*1.6*i,c=460*i;Pt.x+=Be(Pt.tx-Pt.x,-l,l),Pt.sy+=Be(Pt.ty-Pt.sy,-c,c)}var u=ra+f.V.w/2+1,h=gl-f.V.w/2-1;Pt.x=Be(Pt.x,u,h),Pt.sy=Be(Pt.sy,Aa,_s),Pt.tx=Be(Pt.tx,u,h),Pt.ty=Be(Pt.ty,Aa,_s);var d=(_s-Pt.sy)/(_s-Aa),m=(f.bonus?190:f.T.speed)*f.V.spd;f.speed=m*(.8+.5*d)*(f.stun>0?.35:1),f.cam+=f.speed*i,f.heat=Math.max(0,f.heat-6.5*f.V.heat*i);var _=f.cam+ge-Pt.sy,M=f.bonus||f.cam+vs>f.finishY-80;for(f.carT-=i,f.carT<=0&&!M&&(f.carT=oe(f.T.carDown,f.T.carDown+2.2),n=Tn("carD",200+oe(-8,8),f.cam+vs),n.vy=-(110+oe(0,90)),f.obs.push(n)),f.slowT-=i,f.slowT<=0&&!M&&(f.slowT=oe(f.T.carUp,f.T.carUp+3),n=Tn("carU",280+oe(-8,8),f.cam+vs),n.vy=m*.42,f.obs.push(n)),f.T.skater&&(f.skateT-=i,f.skateT<=0&&!M&&(f.skateT=oe(f.T.skater[0],f.T.skater[1]),n=Tn("skater",We(.5)?145:335,f.cam+vs-30),n.bx=n.x,n.vy=-70,f.obs.push(n))),Jl(i,_),t=0;t<f.lots.length;t++)e=f.lots[t],e.cust&&!e.delivered&&!e.missed&&e.y0+pi<f.cam-6&&(e.missed=!0,f.stats.missed++,f.bonus||(f.streak=0,Xf(e.side<0?80:gt-80,ge-170,"MISSED ORDER!","#ff5964",18),Qt("bad")));var g=f.V.w*.78,p=f.V.h*.78;for(t=f.obs.length-1;t>=0;t--){if(n=f.obs[t],n.t+=i,n.out){n.x+=n.vx*i,n.y+=n.vy*i,(n.x<-60||n.x>gt+60||n.y<f.cam-90||n.t>2.5)&&f.obs.splice(t,1);continue}var T=Of(n.y);if(n.type==="dog"){if(n.st===0&&T>230&&T<ge&&(n.st=1,Qt("bark")),n.st===1){n.vy=f.speed*.8;var E=Pt.x-n.x;n.x+=Be(E,-125*i,125*i),n.x=Be(n.x,118,362)}}else if(n.type==="dcar"){if(n.st===0&&T>200&&(n.st=1,Qt("beep")),n.st===1&&T>310&&(n.st=2),n.st===2){n.x+=-n.side*88*i;var v=n.side<0?205:275;(n.side<0&&n.x>=v||n.side>0&&n.x<=v)&&(n.x=v,n.st=3)}}else if(n.type==="skater")n.x=n.bx+Math.sin(n.t*3)*9;else if(n.type==="ball"&&(n.st===0&&T>240&&T<ge&&(n.st=1),n.st===1&&(n.x+=-n.side*95*i,n.x<112||n.x>368))){f.obs.splice(t,1);continue}if(n.y+=n.vy*i,n.y<f.cam-90){f.obs.splice(t,1);continue}if(Math.abs(n.x-Pt.x)<(n.w+g)/2&&Math.abs(n.y-_)<(n.h+p)/2){if(n.type==="pickup"){var U=f.V.cap-f.pizzas;f.pizzas=f.V.cap,f.obs.splice(t,1),Qt("pickup"),qe(Pt.x,_,U>0?"+"+U+" PIZZAS":"BAG IS FULL","#ffd23f",16,36);continue}if(n.type==="life"){f.obs.splice(t,1),Qt("life"),f.lives<pa?(f.lives++,f.lifeFlash=1,qe(Pt.x,_,"+1 LIFE","#ff6b7d",20,40)):(f.score+=250,qe(Pt.x,_,"FULL LIVES  +250","#ff6b7d",16,40));continue}if(n.type==="puddle"){n.hit||(n.hit=!0,f.slip=.9,f.heat=Math.max(0,f.heat-10),Qt("splash"),qe(Pt.x,_,"SPLASH!","#7fd4ff",15,34));continue}if(f.V.perk.indexOf(n.type)>=0){n.type!=="pothole"&&Zf(n);continue}if(f.inv<=0&&!f.opt.ghost&&(qf(),f.state!=="play"))return}}for(t=f.pies.length-1;t>=0;t--){r=f.pies[t];for(var C=!1,R=0;R<3&&!C;R++)r.x+=r.vx*i/3,r.y+=r.vy*i/3,r.d+=Math.abs(r.vx)*i/3,C=Kf(r);r.rot+=i*9,C&&f.pies.splice(t,1)}f.decals.length>40&&f.decals.splice(0,f.decals.length-40),_>=f.finishY&&Wf()}}function Jl(i,t){for(var e=0;e<f.lots.length;e++){var n=f.lots[e];if(n.cust){var r=n.c;if(!(n.y0>f.cam+ge+700||n.y0+pi<f.cam-50)&&(r.happy>0&&(r.happy-=i),!n.delivered)){var s=n.doorY-t;r.type==="pacer"?r.y=r.by+Math.sin(f.tGame*2.1+r.ph)*30:r.type==="curb"?!n.missed&&s<700&&s>-80&&(r.x+=Be(r.cx-r.x,-70*i,70*i)):r.type==="quit"&&!r.gone&&(r.wait<0?s<640&&s>-80&&(r.wait=f.T.patience):(r.wait-=i,r.wait<=0&&(r.gone=!0,r.goneT=0,qe(r.x,r.y,"GAVE UP!","#ffb4b4",13,40)))),r.gone&&(r.goneT+=i,r.x+=Be((n.side<0?Qn:ti)-r.x,-60*i,60*i))}}}}function xs(i,t){f.streak=0,f.decals.push({x:i.x,y:i.y}),Qt("miss"),qe(i.x,i.y,t,"#c9ced6",13,12)}function Kf(i){var t,e,n,r=i.side<0?Qn:ti;for(t=0;t<f.lots.length;t++)if(e=f.lots[t],!(e.side!==i.side||!e.cust||e.delivered||e.missed||e.c.gone)&&!(Math.abs(e.y0+105-i.y)>170)){n=e.c;var s=n.x-i.x,a=n.y-i.y;if(s*s+a*a<aa*aa)return Ra(e,!0),!0}if((i.side<0&&i.x<=r||i.side>0&&i.x>=r)&&(e=vo(i.side,i.y),e)){var o=i.y-e.y0;if(o>=pu&&o<=mu){if(Math.abs(i.y-e.doorY)<=_o)return e.cust&&!e.delivered&&!e.missed?(Ra(e,!1),!0):(xs(i,e.cust?"ALREADY SERVED":"WRONG HOUSE!"),!0);for(t=0;t<e.wins.length;t++){var l=e.wins[t];if(Math.abs(i.y-l.y)<=gu){if(l.broken)xs(i,"THUNK");else{l.broken=!0,f.stats.smash++,f.streak=0,f.score=Math.max(0,f.score-50);var c=Math.min(5,wt.bank);wt.bank-=c,f.stats.tips-=c,Qt("smash"),f.shake=.15,_l(r,l.y,14,["#9ad8ff","#fff","#d6f1ff"],180),qe(r,l.y,"SMASH!  -$"+c,"#ff5964",17,14)}return!0}}return xs(i,"THUNK"),!0}}return i.d>=$r||i.x<-12||i.x>gt+12?(e=vo(i.side,i.y),e&&e.cust&&!e.delivered&&!e.missed&&Math.abs(i.y-e.doorY)<=_o&&Math.abs(i.x-r)<=24?(Ra(e,!1),!0):(xs(i,"SPLAT"),!0)):!1}function ga(){f.state="title",f.bonus=!1,f.day=3,f.T=ma(3),yu(Su(3)),bu(3),f.cam=0}function Cu(i){var t=i<0?Qn:ti,e=f.cam+ge-Pt.sy,n=Pt.x+i*10,r=Math.abs(t-n);if(r>$r)return{x:n+i*$r,y:e+f.speed*$r/Js,hit:"far",lot:null};for(var s=e+f.speed*r/Js,a="wall",o=null,l=0;l<f.lots.length;l++){var c=f.lots[l];if(!(c.side!==i||!c.cust||c.delivered||c.missed||c.claim>f.step||Math.abs(c.y0+105-s)>170)){var u=c.c,h=u.type==="pacer"||u.type==="curb"&&Math.abs(u.cx-u.x)>1,d=e+f.speed*Math.abs(u.x-n)/Js;if(!u.gone&&Math.abs(d-u.y)<(h?aa-11:aa-3)){a="hand",o=c;break}Math.abs(s-c.doorY)<=_o-3&&(a="door",o=c)}}if(a==="wall"){var m=vo(i,s);if(m&&s-m.y0>=pu&&s-m.y0<=mu)for(var _=0;_<m.wins.length;_++)!m.wins[_].broken&&Math.abs(s-m.wins[_].y)<=gu&&(a="window")}return{x:t,y:s,hit:a,lot:o}}function Ot(i,t,e,n,r){ot.fillStyle=r,ot.fillRect(i,t,e,n)}function Qe(i,t,e,n){ot.fillStyle=n,ot.beginPath(),ot.arc(i,t,e,0,6.2832),ot.fill()}function Te(i,t,e,n,r,s){ot.fillStyle=s,ot.beginPath(),ot.moveTo(i+r,t),ot.lineTo(i+e-r,t),ot.quadraticCurveTo(i+e,t,i+e,t+r),ot.lineTo(i+e,t+n-r),ot.quadraticCurveTo(i+e,t+n,i+e-r,t+n),ot.lineTo(i+r,t+n),ot.quadraticCurveTo(i,t+n,i,t+n-r),ot.lineTo(i,t+r),ot.quadraticCurveTo(i,t,i+r,t),ot.closePath(),ot.fill()}function _a(i,t,e,n,r,s,a){ot.fillStyle=a,ot.beginPath(),ot.moveTo(i,t),ot.lineTo(e,n),ot.lineTo(r,s),ot.closePath(),ot.fill()}var Jf='"Courier New",Courier,monospace';function ft(i,t,e,n,r,s,a){ot.font="bold "+n+"px "+Jf,ot.textAlign=s||"left",ot.textBaseline="middle",a&&(ot.lineWidth=Math.max(3,n/5),ot.strokeStyle=a,ot.lineJoin="round",ot.strokeText(i,t,e)),ot.fillStyle=r,ot.fillText(i,t,e)}function la(i,t,e){_a(i-e,t-e,i+e,t-e,i,t+e*1.2,"#ffc93c"),Ot(i-e-1,t-e-e*.35,e*2+2,e*.45,"#c98a3a"),Qe(i-e*.3,t-e*.45,e*.22,"#d7263d"),Qe(i+e*.35,t-e*.3,e*.2,"#d7263d"),Qe(i,t+e*.25,e*.18,"#d7263d")}function $f(i,t,e){Ot(i-e,t-e,e*2,e*2,"#e8b04a"),Ot(i-e,t-e,e*2,e*.45,"#c98a3a"),Qe(i,t+e*.2,e*.5,"#d7263d"),Qe(i,t+e*.2,e*.25,"#ffc93c")}function $l(i,t,e,n){Te(i-8,t-4,16,9,4,"#d7263d"),Ot(i-9,t-6,3.5,5,"#f2c9a0"),Ot(i+5.5,t-6,3.5,5,"#f2c9a0"),Qe(i,t-1,5.6,"#b3001b"),Ot(i-4.5,t-9,9,3.5,"#7d0013"),Qe(i,t-1,1.4,"#fff")}function jf(i,t,e,n,r,s){if(i===0){var a=Math.sin(s*7)*1.2;Ot(t-17,e+3,34,9,"rgba(0,0,0,0.25)"),Ot(t-19,e,6,12,"#111"),Ot(t+13,e,6,12,"#111"),Te(t-14,e+1,28,10,3,"#22252e"),Ot(t-12,e+9,9,2,"#4de1ff"),Ot(t+3,e+9,9,2,"#4de1ff"),Ot(t-7,e+8+a*.3,14,10,"#c1121f"),la(t,e+13+a*.3,3.2),$l(t+a*.5,e+2)}else if(i===1)Ot(t-2,e-17,7,38,"rgba(0,0,0,0.22)"),Te(t-3,e-21,6,12,2,"#111"),Te(t-3.5,e+8,7,13,2,"#111"),Te(t-4,e-11,8,22,3,"#ff7b00"),Ot(t-3,e-12,6,4,"#fff"),Ot(t-10,e-13,20,3,"#333"),Ot(t-11,e-14,3,5,"#111"),Ot(t+8,e-14,3,5,"#111"),Ot(t-7,e+6,14,10,"#c1121f"),la(t,e+11,3.2),$l(t,e-1);else if(i===2)Te(t-11,e-22,26,50,7,"rgba(0,0,0,0.3)"),Te(t-13,e-25,26,50,7,"#2a2e35"),Te(t-11,e-23,22,14,5,"#3a4049"),Ot(t-10,e-10,20,8,"#3b6a8c"),Ot(t-9,e+11,18,6,"#2b4d66"),Te(t-10,e-2,20,13,2,"#1c1f25"),Ot(t-6,e,12,8,"#101216"),Ot(t-11,e-25,6,3,"#fff6c2"),Ot(t+5,e-25,6,3,"#fff6c2"),Ot(t-11,e+22,7,3,"#ff2e43"),Ot(t+4,e+22,7,3,"#ff2e43"),Ot(t-15,e-9,3,4,"#2a2e35"),Ot(t+12,e-9,3,4,"#2a2e35"),Ot(t-1,e-23,2,12,"#4a515c");else{Te(t-13,e-26,30,58,6,"rgba(0,0,0,0.3)"),Te(t-15,e-29,30,58,6,"#e3202e"),Ot(t-15,e-6,30,5,"#fff1d0"),Ot(t-15,e+20,30,3,"#fff1d0"),Ot(t-12,e-24,24,9,"#3b6a8c"),Ot(t-13,e-29,6,3,"#fff6c2"),Ot(t+7,e-29,6,3,"#fff6c2"),Ot(t-13,e+26,6,3,"#ff2e43"),Ot(t+7,e+26,6,3,"#ff2e43"),Ot(t-17,e-22,3,4,"#2c3040"),Ot(t+14,e-22,3,4,"#2c3040");var o=.45+.4*Math.sin(s*6);ot.save(),ot.shadowColor="rgba(255,210,63,"+o.toFixed(2)+")",ot.shadowBlur=16*f.SC,_a(t,e-11,t-12,e+15,t+12,e+15,"#ffc93c"),ot.restore(),Ot(t-13,e+13,26,5,"#c98a3a"),Qe(t,e-1,2.4,"#d7263d"),Qe(t-4,e+7,2.4,"#d7263d"),Qe(t+4,e+8,2.2,"#d7263d");for(var l=Math.floor(s*5)%2,c=0;c<4;c++){var u=c/3;Qe(t-u*12,e-11+u*26,1.3,(c+l)%2?"#fff":"#ff9f1c"),Qe(t+u*12,e-11+u*26,1.3,(c+l)%2?"#ff9f1c":"#fff")}}}function Qf(i,t,e,n){n=n||1;var r=e?"#ff3b4e":"#4a4d57";Qe(i-4*n,t-2*n,5*n,r),Qe(i+4*n,t-2*n,5*n,r),_a(i-9*n,t,i+9*n,t,i,t+10*n,r)}function vl(i,t,e,n){for(var r=Math.min(pa,Math.max(3,f.lives)),s=0;s<r;s++)Qf(i+s*e,t,s<f.lives,n);return r}function _r(i,t){for(var e=String(i);e.length<t;)e="0"+e;return e}function th(){Ot(0,0,gt,60,"rgba(15,16,22,0.9)"),ft("SCORE",10,14,11,"#9aa3b2"),ft(_r(f.score,6),10,32,20,"#fff");var i=Math.floor((f.day-1)/7)+1;ft(gr[(f.day-1)%7].slice(0,3)+(i>1?" WK"+i:""),gt/2,14,13,"#ffd23f","center"),ft((f.bonus?"PARTY ":"ORDERS ")+f.stats.delivered+"/"+f.stats.orders,gt/2,33,13,f.stats.missed&&!f.bonus?"#ffb4b4":"#cfd6e3","center"),ft("$"+wt.bank,gt-86,32,16,"#9cf07a","right"),Te(gt-76,6,32,30,6,"#2a2e3a"),Ot(gt-66,13,4,16,"#fff"),Ot(gt-58,13,4,16,"#fff"),Te(gt-38,6,32,30,6,"#2a2e3a"),ft(wt.mute?"OFF":"SND",gt-22,21,10,wt.mute?"#ff8a8a":"#fff","center"),vl(18,50,20,f.lifeFlash>0?.82+.3*Math.abs(Math.sin(f.lifeFlash*14)):.82),$f(126,51,7),ft(f.bonus?"FREE":"x"+f.pizzas,138,51,15,f.bonus?"#9cf07a":f.pizzas===0?"#ff5964":f.pizzas<=2?"#ffd23f":"#fff"),ft("HOT",190,51,11,"#ff9f1c"),Ot(216,45,168,12,"#2a2e3a");var t=f.heat>60?"#ff5a1f":f.heat>25?"#ff9f1c":"#5a8dd6";Ot(218,47,164*f.heat/100,8,t),ft("TIP x"+(1+f.heat/100).toFixed(1),gt-10,51,12,"#fff","right")}function eh(){var i=Be(f.bannerT,0,1);if(ot.globalAlpha=i,Ot(0,292,gt,132,"rgba(15,16,22,0.82)"),f.bonus)ft("PIZZA PARTY!",gt/2,328,34,"#ffd23f","center","#000"),ft("BONUS ROUND  -  EVERY HOUSE ORDERED",gt/2,366,14,"#fff","center"),ft("Free pizza. Double tips. Nothing in the way.",gt/2,398,13,"#9cf07a","center");else{ft(gr[(f.day-1)%7],gt/2,326,34,"#ffd23f","center","#000"),ft(f.stats.orders+" ORDERS  -  DELIVER AT LEAST HALF",gt/2,364,14,"#fff","center");var t=Math.min(pa,Math.max(3,f.lives));ft("LIVES",gt/2-t*11-12,399,13,"#cfd6e3","right"),vl(gt/2-t*11+10,397,22,1)}ot.globalAlpha=1}function nh(){ot.globalAlpha=Be(f.hintT,0,1),Ot(0,ge-74,gt,74,"rgba(15,16,22,0.82)"),f.isTouch?(ft("DRAG to steer  -  higher = faster",gt/2,ge-52,14,"#fff","center"),ft("TAP left or right side to THROW",gt/2,ge-28,14,"#ffd23f","center")):(ft("ARROWS steer  -  higher = faster",gt/2,ge-52,14,"#fff","center"),ft("Z throw left   X throw right   SPACE auto",gt/2,ge-28,14,"#ffd23f","center")),ot.globalAlpha=1}function ih(){for(var i=Ht.VH-Ht.bottom-(f.hintT>0?148:72),t=[[-1,8,f.flashL],[1,gt-128,f.flashR]],e=0;e<2;e++){var n=t[e][0],r=t[e][1],s=Be(t[e][2]*4,0,1);Te(r,i,120,56,14,"rgba(15,16,22,"+(.38+.2*s).toFixed(2)+")"),ot.strokeStyle="rgba(255,210,63,"+(.45+.55*s).toFixed(2)+")",ot.lineWidth=2,ot.strokeRect(r+3,i+3,114,50);var a=n<0?r+22:r+98;_a(a+n*12,i+28,a-n*6,i+16,a-n*6,i+40,"#ffd23f"),ft("THROW",n<0?r+76:r+44,i+21,13,"#fff","center"),ft(n<0?"LEFT":"RIGHT",n<0?r+76:r+44,i+38,13,"#ffd23f","center")}}function rh(){var i,t;for(i=0;i<f.parts.length;i++){var e=f.parts[i];ot.globalAlpha=Be(1-e.t/e.life,0,1),Ot(e.x,e.y,e.s,e.s,e.col)}if(ot.globalAlpha=1,f.state==="play"||f.state==="pause"){for(i=0;i<f.obs.length;i++){var n=f.obs[i];n.y<f.cam-60||n.y>f.cam+1300||(n.type==="dcar"&&n.st===1?(t=f.project(n.x,n.y,40),ft("!",t.x,t.y,18,"#ffd23f","center","#000")):n.type==="dog"&&n.st===1&&n.t%.6<.3?(t=f.project(n.x,n.y,34),ft("GRR",t.x,t.y,11,"#fff","center","#000")):n.type==="pickup"&&!f.bonus?(t=f.project(n.x,n.y,34),ft("PIZZA",t.x,t.y-Math.sin(n.t*5)*2,11,"#ffd23f","center","#000")):n.type==="life"&&(t=f.project(n.x,n.y,44),ft("+1 LIFE",t.x,t.y-Math.sin(n.t*5)*2,12,"#ff6b7d","center","#000")))}for(i=0;i<f.lots.length;i++){var r=f.lots[i];if(!(!r.cust||r.delivered||r.missed||r.y0<f.cam-260||r.y0>f.cam+1300)){if(r.c.type==="pacer")t=f.project(r.c.x,r.c.y,62),ft("!",t.x,t.y,14,"#ffd23f","center","#000");else if(r.c.type==="quit"&&!r.c.gone&&r.c.wait>=0){t=f.project(r.c.x,r.c.y,62);var s=Be(r.c.wait/f.T.patience,0,1);Ot(t.x-13,t.y-4,26,7,"rgba(15,16,22,0.85)"),Ot(t.x-12,t.y-3,24*s,5,s>.4?"#ffd23f":"#ff5964")}}}f.streak>=2&&(t=f.project(Pt.x+f.V.w/2+16,f.cam+ge-Pt.sy,30),ft("x"+Math.min(f.streak,5),t.x,t.y,15,"#ffd23f","center","#000"))}for(i=0;i<f.pops.length;i++){var a=f.pops[i];t=a.sx!=null?{x:a.sx,y:a.sy+(Ht.VH-ge)}:f.project(a.wx,a.wy,20),ot.globalAlpha=Be(1.2-a.t,0,1),ft(a.txt,Be(t.x,70,gt-70),t.y-a.lift-38*a.t,a.size,a.col,"center","#000")}ot.globalAlpha=1}function sh(){var i=f.fps;i&&(Te(6,66,214,52,8,"rgba(15,16,22,0.8)"),ft(i.now+" fps   avg "+i.avg+"   low "+i.low,14,82,12,"#9cf07a"),ft(i.calls+" draws   "+i.tris+"k triangles",14,102,11,"#cfd6e3"))}function we(i,t,e,n,r,s,a){a=a||{};var o=a.disabled?"#3a3d47":a.primary?"#d7263d":"#2f3442";Te(i,t+4,e,n,10,"rgba(0,0,0,0.45)"),Te(i,t,e,n,10,o),a.primary&&!a.disabled&&(ot.fillStyle="rgba(255,255,255,0.14)",ot.fillRect(i+6,t+4,e-12,n/2-4)),ft(r,i+e/2,t+n/2+1,a.size||18,a.disabled?"#8b8f9a":"#fff","center"),a.disabled||f.buttons.push({x:i,y:t+f.uiOy,w:e,h:n,fn:s,key:a.key||""})}function Pu(i){Ot(-Ht.ox/Ht.s-2,-2,Ht.VW+4,Ht.VH+4,i)}function Ms(i){Pu("rgba(12,13,18,"+i+")")}function ai(i,t){ot.save(),ot.translate(0,i),f.uiOy=i,t(),ot.restore(),f.uiOy=0}function ah(){var i=Math.sin(f.tGame*2)*4;ot.save(),ot.translate(gt/2,150+i),ot.rotate(-.04),ft("PAYTON",4,4,74,"#7d0013","center"),ft("PAYTON",0,0,74,"#ffd23f","center","#1a0b0b"),ft("PIZZA",4,82,86,"#7d0013","center"),ft("PIZZA",0,78,86,"#ff4d2e","center","#1a0b0b"),ot.restore(),la(gt/2,292+i,26),ft("HOT. FAST. HAND-DELIVERED.",gt/2,352,15,"#fff","center","#000"),wt.cont>1&&f.opt.day==null?(we(90,378,300,58,"CONTINUE  "+gr[(wt.cont-1)%7].slice(0,3)+" (DAY "+wt.cont+")",function(){Qt("ui"),Tu()},{primary:!0,size:19,key:"Enter"}),we(90,444,300,42,"NEW RUN FROM MONDAY",function(){Qt("ui"),ns()},{size:15,key:"KeyN"}),we(90,494,300,44,"GARAGE   $"+wt.bank,function(){Qt("ui"),f.garageFrom="title",f.state="garage"},{size:16,key:"KeyG"})):(we(90,392,300,62,"START SHIFT",function(){Qt("ui"),ns()},{primary:!0,size:24,key:"Enter"}),we(90,470,300,52,"GARAGE   $"+wt.bank,function(){Qt("ui"),f.garageFrom="title",f.state="garage"},{key:"KeyG"})),Te(40,548,400,150,12,"rgba(15,16,22,0.85)"),ft("HOW TO PLAY",gt/2,568,14,"#ffd23f","center"),ft("Pizza on the FRONT DOOR = points",gt/2,592,13,"#fff","center"),ft("Pizza into the customer's HANDS = bonus",gt/2,612,13,"#fff","center"),ft("Gray houses did not order. Mind the windows.",gt/2,632,12,"#cfd6e3","center"),f.isTouch?(ft("DRAG to steer - TAP a side to throw",gt/2,660,13,"#9cf07a","center"),ft("Works with a keyboard too",gt/2,680,11,"#9aa3b2","center")):(ft("ARROWS steer - Z / X throw - SPACE auto",gt/2,660,13,"#9cf07a","center"),ft("P pause - M sound - works on phones too",gt/2,680,11,"#9aa3b2","center")),ft("HIGH SCORE "+_r(wt.hi,6)+(wt.bestDay?"   BEST DAY "+wt.bestDay:""),gt/2,728,14,"#fff","center","#000"),ft("RIDE: "+fr[wt.ride].name,gt/2,754,13,"#ffd23f","center","#000")}function oh(i,t,e,n){Te(i+5,t+6,e,n,6,"rgba(0,0,0,0.4)"),Ot(i,t,e,n,"#fff8e7"),ot.fillStyle="#fff8e7";for(var r=0;r<e;r+=16)ot.beginPath(),ot.moveTo(i+r,t+n),ot.lineTo(i+r+8,t+n+8),ot.lineTo(i+r+16,t+n),ot.fill()}function Ce(i,t,e,n){ft(i,84,e,15,"#3a2a20"),ft(t,gt-84,e,15,n||"#3a2a20","right")}function Vi(i){ot.fillStyle="#b9a98f";for(var t=84;t<gt-84;t+=10)ot.fillRect(t,i,6,2)}function lh(){var i=f.day%7===0;if(oh(60,78,360,558),la(gt/2,116,13),ft("PAYTON PIZZA",gt/2,154,22,"#b3001b","center"),f.report.bonus){ft("PIZZA PARTY TICKET",gt/2,178,13,"#3a2a20","center"),Vi(196),Ce("HOUSES SERVED",f.stats.delivered+" / "+f.stats.orders,226),Ce("  HAND-OFFS",String(f.stats.hand),254,"#b3001b"),Ce("  FRONT DOORS",String(f.stats.door),282),Ce("WINDOWS SMASHED",String(f.stats.smash),310,f.stats.smash?"#b3001b":"#3a2a20"),Vi(334),Ce("TIPS (DOUBLE)",f.stats.tips<0?"-$"+-f.stats.tips:"$"+f.stats.tips,362),Ce("PARTY PAY","$"+f.report.pay,390),f.report.perfect&&Ce("EVERY HOUSE SERVED","$"+f.report.perfect,418,"#1f7a3f"),Vi(446),Ce("BANK","$"+wt.bank,474,"#1f7a3f"),Ce("SCORE",_r(f.score,6),502),ft(f.report.title,gt/2,560,17,"#b3001b","center"),we(60,664,170,58,"GARAGE",function(){Qt("ui"),f.garageFrom="report",f.state="garage"},{key:"KeyG"}),we(250,664,170,58,"NEXT WEEK",function(){Qt("ui"),Zl()},{primary:!0,key:"Enter"});return}ft(gr[(f.day-1)%7]+" SHIFT TICKET",gt/2,178,13,"#3a2a20","center"),Vi(196),Ce("ORDERS DELIVERED",f.stats.delivered+" / "+f.stats.orders,222),Ce("  HAND-OFFS",String(f.stats.hand),248,"#b3001b"),Ce("  FRONT DOORS",String(f.stats.door),274),Ce("MISSED ORDERS",String(f.stats.missed),300,f.stats.missed?"#b3001b":"#3a2a20"),Ce("WINDOWS SMASHED",String(f.stats.smash),326,f.stats.smash?"#b3001b":"#3a2a20"),Ce("WIPEOUTS",String(f.stats.crashes),352,f.stats.crashes?"#b3001b":"#3a2a20"),Vi(372),Ce("TIPS",f.stats.tips<0?"-$"+-f.stats.tips:"$"+f.stats.tips,398),Ce("SHIFT PAY","$"+f.report.pay,424),f.report.perfect&&Ce("PERFECT SHIFT","$"+f.report.perfect,450,"#1f7a3f"),Vi(470),Ce("BANK","$"+wt.bank,496,"#1f7a3f"),Ce("SCORE",_r(f.score,6),522),ft("LIVES"+(f.report.healed?"  (+1 FOR FINISHING)":""),84,552,15,"#3a2a20");var t=Math.min(pa,Math.max(3,f.lives));vl(gt-84-(t-1)*20-6,550,20,.8),ft(f.report.title,gt/2,596,17,"#b3001b","center"),we(60,664,170,58,"GARAGE",function(){Qt("ui"),f.garageFrom="report",f.state="garage"},{key:"KeyG"}),we(250,664,170,58,i?"BONUS ROUND":"NEXT SHIFT",function(){Qt("ui"),Zl()},{primary:!0,size:i?16:18,key:"Enter"})}function ch(){ft(f.overWhy==="fired"?"YOU'RE FIRED":"WIPED OUT",gt/2,180,46,"#ff4d2e","center","#000"),ft(f.overWhy==="fired"?"Fewer than half the orders got delivered.":"Payton is out of lives.",gt/2,228,14,"#fff","center"),Te(70,270,340,200,12,"rgba(15,16,22,0.9)"),ft("SCORE",110,306,15,"#9aa3b2"),ft(_r(f.score,6),370,306,22,"#fff","right"),ft("HIGH SCORE",110,344,15,"#9aa3b2"),ft(_r(wt.hi,6),370,344,22,f.newHi?"#ffd23f":"#fff","right"),ft("REACHED",110,382,15,"#9aa3b2"),ft(gr[(f.day-1)%7].slice(0,3)+" (DAY "+f.day+")",370,382,16,"#fff","right"),ft("BANK",110,420,15,"#9aa3b2"),ft("$"+wt.bank,370,420,22,"#9cf07a","right"),f.newHi&&ft("NEW HIGH SCORE!",gt/2,452,14,"#ffd23f","center"),f.day>1&&f.opt.day==null?(ft("Continue keeps your day, bank and rides.",gt/2,494,13,"#cfd6e3","center"),ft("Your score starts again from zero.",gt/2,514,13,"#cfd6e3","center"),we(90,540,300,62,"CONTINUE  "+gr[(f.day-1)%7],function(){Qt("ui"),Tu()},{primary:!0,size:21,key:"Enter"}),we(90,616,300,46,"NEW RUN FROM MONDAY",function(){Qt("ui"),ns()},{size:15,key:"KeyN"})):(ft("Your bank and rides are kept.",gt/2,500,13,"#cfd6e3","center"),we(90,540,300,62,"TRY AGAIN",function(){Qt("ui"),ns()},{primary:!0,size:24,key:"Enter"})),we(90,f.day>1&&f.opt.day==null?674:618,145,46,"GARAGE",function(){Qt("ui"),f.garageFrom="title",f.state="garage"},{size:15,key:"KeyG"}),we(245,f.day>1&&f.opt.day==null?674:618,145,46,"TITLE",function(){Qt("ui"),ga()},{size:15,key:"Escape"})}function uh(){ot.fillStyle="#22262f";for(var i=0;i<ge;i+=40)ot.fillRect(0,i,gt,2);ft("GARAGE",20,38,30,"#ffd23f"),ft("BANK $"+wt.bank,gt-20,38,20,"#9cf07a","right");for(var t=0;t<4;t++){var e=fr[t],n=74+t*158,r=wt.owned[t],s=wt.ride===t;Te(14,n,gt-28,146,12,s?"#333a4d":"#272b37"),s&&(ot.strokeStyle="#ffd23f",ot.lineWidth=3,ot.strokeRect(15.5,n+1.5,gt-31,143)),Te(26,n+12,112,122,8,"#44464f"),ot.fillStyle="#f5d547",ot.fillRect(80,n+18,3,22),ot.fillRect(80,n+64,3,22),ot.fillRect(80,n+108,3,20),ot.save(),ot.translate(82,n+73),ot.scale(1.7,1.7),jf(t,0,0,0,1,f.tGame),ot.restore(),ft(e.name,152,n+26,18,"#fff"),ft(e.blurb[0],152,n+50,12,"#cfd6e3"),ft(e.blurb[1],152,n+66,12,"#cfd6e3"),ft(e.perkText,152,n+80,11,"#5ad1ff"),ft("SPEED",152,n+94,11,"#9aa3b2");for(var a=0;a<6;a++)Ot(196+a*11,n+89,8,10,a<Math.round((e.spd-.9)*14)?"#ff9f1c":"#3a3f4d");ft("CARRY "+e.cap,280,n+94,11,"#9aa3b2"),(function(o,l){s?we(152,n+104,300,34,"RIDING",null,{disabled:!0,size:15}):r?we(152,n+104,300,34,"RIDE THIS",function(){wt.ride=o,f.V=fr[o],_i(),Qt("ui")},{size:15,key:"Digit"+(o+1)}):wt.bank>=l.price?we(152,n+104,300,34,"BUY  $"+l.price,function(){wt.bank-=l.price,wt.owned[o]=!0,wt.ride=o,f.V=fr[o],_i(),Qt("buy")},{primary:!0,size:15,key:"Digit"+(o+1)}):we(152,n+104,300,34,"$"+l.price+"  (NEED $"+(l.price-wt.bank)+" MORE)",null,{disabled:!0,size:13})})(t,e)}we(140,726,200,54,"BACK",function(){Qt("ui"),f.state=f.garageFrom==="report"?"report":"title",f.state==="title"&&ga()},{primary:!0,key:"Escape"})}function fh(){ft("PAUSED",gt/2,300,48,"#ffd23f","center","#000"),we(90,370,300,62,"RESUME",function(){f.state="play"},{primary:!0,size:24,key:"Enter"}),we(90,448,300,52,"QUIT TO TITLE",function(){_i(),ga()},{})}function hh(){var i=Ht.s*Ht.dpr,t=(Ht.VH-ge)/2,e=Ht.VH-ge;if(ot.setTransform(1,0,0,1,0,0),ot.clearRect(0,0,tn.width,tn.height),ot.setTransform(i,0,0,i,Ht.ox*Ht.dpr,0),f.buttons=[],f.uiOy=0,f.state==="garage"){Pu("#1b1e27"),ai(t,uh);return}rh(),(f.state==="play"||f.state==="pause")&&(f.isTouch&&f.state==="play"&&ih(),Ot(0,-2,gt,f.hudTop+2,"rgba(15,16,22,0.9)"),ai(f.hudTop,th),f.bannerT>0?ai(t,eh):f.hintT>0&&ai(e-Ht.bottom,nh)),f.state==="title"?(Ms(.5),ai(t,ah)):f.state==="report"?(Ms(.6),ai(t,lh)):f.state==="over"?(Ms(.7),ai(t,ch)):f.state==="pause"&&(Ms(.65),ai(t,fh)),f.opt.fps&&sh()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="170",dh=0,jl=1,ph=2,Lu=1,Du=2,Kn=3,vi=0,nn=1,Ln=2,mi=0,hr=1,xo=2,Ql=3,tc=4,mh=5,Ci=100,gh=101,_h=102,vh=103,xh=104,Mh=200,yh=201,Sh=202,Eh=203,Mo=204,yo=205,bh=206,Th=207,Ah=208,wh=209,Rh=210,Ch=211,Ph=212,Lh=213,Dh=214,So=0,Eo=1,bo=2,vr=3,To=4,Ao=5,wo=6,Ro=7,Iu=0,Ih=1,Uh=2,gi=0,Nh=1,Fh=2,Oh=3,Bh=4,zh=5,Hh=6,Gh=7,Uu=300,xr=301,Mr=302,Co=303,Po=304,va=306,Lo=1e3,Li=1001,Do=1002,$e=1003,Vh=1004,ys=1005,Nn=1006,Ca=1007,Di=1008,ii=1009,Nu=1010,Fu=1011,rs=1012,Ml=1013,Fi=1014,Fn=1015,cs=1016,yl=1017,Sl=1018,yr=1020,Ou=35902,Bu=1021,zu=1022,Rn=1023,Hu=1024,Gu=1025,dr=1026,Sr=1027,xa=1028,El=1029,Vu=1030,bl=1031,Tl=1033,js=33776,Qs=33777,ta=33778,ea=33779,Io=35840,Uo=35841,No=35842,Fo=35843,Oo=36196,Bo=37492,zo=37496,Ho=37808,Go=37809,Vo=37810,ko=37811,Wo=37812,Xo=37813,Yo=37814,qo=37815,Zo=37816,Ko=37817,Jo=37818,$o=37819,jo=37820,Qo=37821,na=36492,tl=36494,el=36495,ku=36283,nl=36284,il=36285,rl=36286,kh=3200,Wh=3201,Wu=0,Xh=1,di="",un="srgb",Tr="srgb-linear",Ma="linear",pe="srgb",ki=7680,ec=519,Yh=512,qh=513,Zh=514,Xu=515,Kh=516,Jh=517,$h=518,jh=519,sl=35044,nc="300 es",jn=2e3,ca=2001;class Ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,al=180/Math.PI;function ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function Qh(i,t){return(i%t+t)%t}function La(i,t,e){return(1-e)*i+e*t}function Dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,r,s,a,o,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],M=r[0],g=r[3],p=r[6],T=r[1],E=r[4],v=r[7],U=r[2],C=r[5],R=r[8];return s[0]=a*M+o*T+l*U,s[3]=a*g+o*E+l*C,s[6]=a*p+o*v+l*R,s[1]=c*M+u*T+h*U,s[4]=c*g+u*E+h*C,s[7]=c*p+u*v+h*R,s[2]=d*M+m*T+_*U,s[5]=d*g+m*E+_*C,s[8]=d*p+m*v+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,_=e*h+n*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=h*M,t[1]=(r*c-u*n)*M,t[2]=(o*n-r*a)*M,t[3]=d*M,t[4]=(u*e-r*l)*M,t[5]=(r*s-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Zt;function Yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){const i=ua("canvas");return i.style.display="block",i}const ic={};function Xr(i){i in ic||(ic[i]=!0,console.warn(i))}function ed(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function nd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function id(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=pr(i.r),i.g=pr(i.g),i.b=pr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Ma:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const rc=[.64,.33,.3,.6,.15,.06],sc=[.2126,.7152,.0722],ac=[.3127,.329],oc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Tr]:{primaries:rc,whitePoint:ac,transfer:Ma,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:sc,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:rc,whitePoint:ac,transfer:pe,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:sc,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});let Wi;class rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=ua("canvas")),Wi.width=t.width,Wi.height=t.height;const n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ua("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ni(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sd=0;class qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ia(r[a].image)):s.push(Ia(r[a]))}else s=Ia(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;class Ze extends Ar{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Li,r=Li,s=Nn,a=Di,o=Rn,l=ii,c=Ze.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=ei(),this.name="",this.source=new qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lo:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case Do:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lo:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case Do:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Uu;Ze.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,r=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],M=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(m+1)/2,U=(p+1)/2,C=(u+d)/4,R=(h+M)/4,L=(_+g)/4;return E>v&&E>U?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=R/n):v>U?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=C/r,s=L/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=R/s,r=L/s),this.set(n,r,s,e),this}let T=Math.sqrt((g-_)*(g-_)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(h-M)/T,this.z=(d-u)/T,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class od extends Ar{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ze(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends od{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zu extends Ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ld extends Ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],M=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=M;return}if(h!==M||l!==d||c!==m||u!==_){let g=1-o;const p=l*d+c*m+u*_+h*M,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const U=Math.sqrt(E),C=Math.atan2(U,p*T);g=Math.sin(g*C)/U,o=Math.sin(o*C)/U}const v=o*T;if(l=l*g+d*v,c=c*g+m*v,u=u*g+_*v,h=h*g+M*v,g===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return t[e]=o*_+u*h+l*m-c*d,t[e+1]=l*_+u*d+c*h-o*m,t[e+2]=c*_+u*m+o*d-l*h,t[e+3]=u*_-o*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new D,cc=new wr;class Hi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),Es.subVectors(this.max,Ur),Xi.subVectors(t.a,Ur),Yi.subVectors(t.b,Ur),qi.subVectors(t.c,Ur),oi.subVectors(Yi,Xi),li.subVectors(qi,Yi),yi.subVectors(Xi,qi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-yi.z,yi.y,oi.z,0,-oi.x,li.z,0,-li.x,yi.z,0,-yi.x,-oi.y,oi.x,0,-li.y,li.x,0,-yi.y,yi.x,0];return!Na(e,Xi,Yi,qi,Es)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,Xi,Yi,qi,Es))?!1:(bs.crossVectors(oi,li),e=[bs.x,bs.y,bs.z],Na(e,Xi,Yi,qi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wn=[new D,new D,new D,new D,new D,new D,new D,new D],Sn=new D,Ss=new Hi,Xi=new D,Yi=new D,qi=new D,oi=new D,li=new D,yi=new D,Ur=new D,Es=new D,bs=new D,Si=new D;function Na(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Si.fromArray(i,s);const o=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cd=new Hi,Nr=new D,Fa=new D;class us{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cd.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);const e=Nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Nr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(Fa)),this.expandByPoint(Nr.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new D,Oa=new D,Ts=new D,ci=new D,Ba=new D,As=new D,za=new D;class ud{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Oa.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Oa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ts),o=ci.dot(this.direction),l=-ci.dot(Ts),c=ci.lengthSq(),u=Math.abs(1-a*a);let h,d,m,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const M=1/u;h*=M,d*=M,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Oa).addScaledVector(Ts,d),m}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,r,s){Ba.subVectors(e,t),As.subVectors(n,t),za.crossVectors(Ba,As);let a=this.direction.dot(za),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,t);const l=o*this.direction.dot(As.crossVectors(ci,As));if(l<0)return null;const c=o*this.direction.dot(Ba.cross(ci));if(c<0||l+c>a)return null;const u=-o*ci.dot(za);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,r,s,a,o,l,c,u,h,d,m,_,M,g){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,h,d,m,_,M,g)}set(t,e,n,r,s,a,o,l,c,u,h,d,m,_,M,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=_,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Zi.setFromMatrixColumn(t,0).length(),s=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*h,_=o*u,M=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,_=c*u,M=c*h;e[0]=d+M*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,_=c*u,M=c*h;e[0]=d-M*o,e[4]=-a*h,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*h,_=o*u,M=o*h;e[0]=l*u,e[4]=_*c-m,e[8]=d*c+M,e[1]=l*h,e[5]=M*c+d,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,_=o*l,M=o*c;e[0]=l*u,e[4]=M-d*h,e[8]=_*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+_,e[10]=d-M*h}else if(t.order==="XZY"){const d=a*l,m=a*c,_=o*l,M=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+M,e[5]=a*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=o*u,e[10]=M*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fd,t,hd)}lookAt(t,e,n){const r=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ui.crossVectors(n,on),ui.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ui.crossVectors(n,on)),ui.normalize(),ws.crossVectors(on,ui),r[0]=ui.x,r[4]=ws.x,r[8]=on.x,r[1]=ui.y,r[5]=ws.y,r[9]=on.y,r[2]=ui.z,r[6]=ws.z,r[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],M=n[6],g=n[10],p=n[14],T=n[3],E=n[7],v=n[11],U=n[15],C=r[0],R=r[4],L=r[8],b=r[12],y=r[1],P=r[5],H=r[9],z=r[13],k=r[2],q=r[6],X=r[10],tt=r[14],W=r[3],ht=r[7],Mt=r[11],At=r[15];return s[0]=a*C+o*y+l*k+c*W,s[4]=a*R+o*P+l*q+c*ht,s[8]=a*L+o*H+l*X+c*Mt,s[12]=a*b+o*z+l*tt+c*At,s[1]=u*C+h*y+d*k+m*W,s[5]=u*R+h*P+d*q+m*ht,s[9]=u*L+h*H+d*X+m*Mt,s[13]=u*b+h*z+d*tt+m*At,s[2]=_*C+M*y+g*k+p*W,s[6]=_*R+M*P+g*q+p*ht,s[10]=_*L+M*H+g*X+p*Mt,s[14]=_*b+M*z+g*tt+p*At,s[3]=T*C+E*y+v*k+U*W,s[7]=T*R+E*P+v*q+U*ht,s[11]=T*L+E*H+v*X+U*Mt,s[15]=T*b+E*z+v*tt+U*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],_=t[3],M=t[7],g=t[11],p=t[15];return _*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*m-n*l*m)+M*(+e*l*m-e*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+g*(+e*c*h-e*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+p*(-r*o*u-e*l*h+e*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],_=t[12],M=t[13],g=t[14],p=t[15],T=h*g*c-M*d*c+M*l*m-o*g*m-h*l*p+o*d*p,E=_*d*c-u*g*c-_*l*m+a*g*m+u*l*p-a*d*p,v=u*M*c-_*h*c+_*o*m-a*M*m-u*o*p+a*h*p,U=_*h*l-u*M*l-_*o*d+a*M*d+u*o*g-a*h*g,C=e*T+n*E+r*v+s*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=T*R,t[1]=(M*d*s-h*g*s-M*r*m+n*g*m+h*r*p-n*d*p)*R,t[2]=(o*g*s-M*l*s+M*r*c-n*g*c-o*r*p+n*l*p)*R,t[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*m-n*l*m)*R,t[4]=E*R,t[5]=(u*g*s-_*d*s+_*r*m-e*g*m-u*r*p+e*d*p)*R,t[6]=(_*l*s-a*g*s-_*r*c+e*g*c+a*r*p-e*l*p)*R,t[7]=(a*d*s-u*l*s+u*r*c-e*d*c-a*r*m+e*l*m)*R,t[8]=v*R,t[9]=(_*h*s-u*M*s-_*n*m+e*M*m+u*n*p-e*h*p)*R,t[10]=(a*M*s-_*o*s+_*n*c-e*M*c-a*n*p+e*o*p)*R,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*m-e*o*m)*R,t[12]=U*R,t[13]=(u*M*r-_*h*r+_*n*d-e*M*d-u*n*g+e*h*g)*R,t[14]=(_*o*r-a*M*r-_*n*l+e*M*l+a*n*g-e*o*g)*R,t[15]=(a*h*r-u*o*r+u*n*l-e*h*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,_=s*h,M=a*u,g=a*h,p=o*h,T=l*c,E=l*u,v=l*h,U=n.x,C=n.y,R=n.z;return r[0]=(1-(M+p))*U,r[1]=(m+v)*U,r[2]=(_-E)*U,r[3]=0,r[4]=(m-v)*C,r[5]=(1-(d+p))*C,r[6]=(g+T)*C,r[7]=0,r[8]=(_+E)*R,r[9]=(g-T)*R,r[10]=(1-(d+M))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const a=Zi.set(r[4],r[5],r[6]).length(),o=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],En.copy(this);const c=1/s,u=1/a,h=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,e.setFromRotationMatrix(En),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=jn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r);let m,_;if(o===jn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ca)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=jn){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(a-s),d=(e+t)*c,m=(n+r)*u;let _,M;if(o===jn)_=(a+s)*h,M=-2*h;else if(o===ca)_=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new D,En=new de,fd=new D(0,0,0),hd=new D(1,1,1),ui=new D,ws=new D,on=new D,uc=new de,fc=new wr;class Bn{constructor(t=0,e=0,n=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Ku{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dd=0;const hc=new D,Ki=new wr,Yn=new de,Rs=new D,Fr=new D,pd=new D,md=new wr,dc=new D(1,0,0),pc=new D(0,1,0),mc=new D(0,0,1),gc={type:"added"},gd={type:"removed"},Ji={type:"childadded",child:null},Ha={type:"childremoved",child:null};class Fe extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new D,e=new Bn,n=new wr,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new de},normalMatrix:{value:new Zt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(dc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rs.copy(t):Rs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Fr,Rs,this.up):Yn.lookAt(Rs,Fr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(Yn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gd),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Fe.DEFAULT_UP=new D(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new D,qn=new D,Ga=new D,Zn=new D,$i=new D,ji=new D,_c=new D,Va=new D,ka=new D,Wa=new D,Xa=new Ae,Ya=new Ae,qa=new Ae;class gn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),bn.subVectors(t,e),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){bn.subVectors(r,e),qn.subVectors(n,e),Ga.subVectors(t,e);const a=bn.dot(bn),o=bn.dot(qn),l=bn.dot(Ga),c=qn.dot(qn),u=qn.dot(Ga),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Xa.setScalar(0),Ya.setScalar(0),qa.setScalar(0),Xa.fromBufferAttribute(t,e),Ya.fromBufferAttribute(t,n),qa.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Xa,s.x),a.addScaledVector(Ya,s.y),a.addScaledVector(qa,s.z),a}static isFrontFacing(t,e,n,r){return bn.subVectors(n,e),qn.subVectors(t,e),bn.cross(qn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),bn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;$i.subVectors(r,n),ji.subVectors(s,n),Va.subVectors(t,n);const l=$i.dot(Va),c=ji.dot(Va);if(l<=0&&c<=0)return e.copy(n);ka.subVectors(t,r);const u=$i.dot(ka),h=ji.dot(ka);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector($i,a);Wa.subVectors(t,s);const m=$i.dot(Wa),_=ji.dot(Wa);if(_>=0&&m<=_)return e.copy(s);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ji,o);const g=u*_-m*h;if(g<=0&&h-u>=0&&m-_>=0)return _c.subVectors(s,r),o=(h-u)/(h-u+(m-_)),e.copy(r).addScaledVector(_c,o);const p=1/(g+M+d);return a=M*p,o=d*p,e.copy(n).addScaledVector($i,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ne.workingColorSpace){if(t=Qh(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Za(a,s,t+1/3),this.g=Za(a,s,t),this.b=Za(a,s,t-1/3)}return ne.toWorkingColorSpace(this,r),this}setStyle(t,e=un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const n=Ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return ne.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ye(Ve.r*255,0,255))*65536+Math.round(Ye(Ve.g*255,0,255))*256+Math.round(Ye(Ve.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,r=Ve.g,s=Ve.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=un){ne.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,r=Ve.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Cs);const n=La(fi.h,Cs.h,e),r=La(fi.s,Cs.s,e),s=La(fi.l,Cs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new $t;$t.NAMES=Ju;let _d=0;class Rr extends Ar{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=ei(),this.name="",this.blending=hr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=yo,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mo&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fn extends Rr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new D,Ps=new lt;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),r=me(r,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sl&&(t.usage=this.usage),t}}class $u extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ju extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Re extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vd=0;const dn=new de,Ka=new Fe,Qi=new D,ln=new Hi,Or=new Hi,Ue=new D;class sn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yu(t)?ju:$u)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(ln.min,Or.min),ln.expandByPoint(Ue),Ue.addVectors(ln.max,Or.max),ln.expandByPoint(Ue)):(ln.expandByPoint(Or.min),ln.expandByPoint(Or.max))}ln.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ue));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ue.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(t,c),Ue.add(Qi)),r=Math.max(r,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new D,l[L]=new D;const c=new D,u=new D,h=new D,d=new lt,m=new lt,_=new lt,M=new D,g=new D;function p(L,b,y){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,L),m.fromBufferAttribute(s,b),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(d),_.sub(d);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(P),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(P),o[L].add(M),o[b].add(M),o[y].add(M),l[L].add(g),l[b].add(g),l[y].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,b=T.length;L<b;++L){const y=T[L],P=y.start,H=y.count;for(let z=P,k=P+H;z<k;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new D,v=new D,U=new D,C=new D;function R(L){U.fromBufferAttribute(r,L),C.copy(U);const b=o[L];E.copy(b),E.sub(U.multiplyScalar(U.dot(b))).normalize(),v.crossVectors(C,b);const P=v.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,P)}for(let L=0,b=T.length;L<b;++L){const y=T[L],P=y.start,H=y.count;for(let z=P,k=P+H;z<k;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),M=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let p=0;p<u;p++)d[_++]=c[m++]}return new rn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vc=new de,Ei=new ud,Ls=new us,xc=new D,Ds=new D,Is=new D,Us=new D,Ja=new D,Ns=new D,Mc=new D,Fs=new D;class Se extends Fe{constructor(t=new sn,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ja.fromBufferAttribute(h,t),a?Ns.addScaledVector(Ja,u):Ns.addScaledVector(Ja.sub(e),u))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),Ei.copy(t.ray).recast(t.near),!(Ls.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ls,xc)===null||Ei.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(vc.copy(s).invert(),Ei.copy(t.ray).applyMatrix4(vc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const g=d[_],p=a[g.materialIndex],T=Math.max(g.start,m.start),E=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let v=T,U=E;v<U;v+=3){const C=o.getX(v),R=o.getX(v+1),L=o.getX(v+2);r=Os(this,p,t,n,c,u,h,C,R,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let g=_,p=M;g<p;g+=3){const T=o.getX(g),E=o.getX(g+1),v=o.getX(g+2);r=Os(this,a,t,n,c,u,h,T,E,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const g=d[_],p=a[g.materialIndex],T=Math.max(g.start,m.start),E=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let v=T,U=E;v<U;v+=3){const C=v,R=v+1,L=v+2;r=Os(this,p,t,n,c,u,h,C,R,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let g=_,p=M;g<p;g+=3){const T=g,E=g+1,v=g+2;r=Os(this,a,t,n,c,u,h,T,E,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function xd(i,t,e,n,r,s,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===vi,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Fs);return c<e.near||c>e.far?null:{distance:c,point:Fs.clone(),object:i}}function Os(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Ds),i.getVertexPosition(l,Is),i.getVertexPosition(c,Us);const u=xd(i,t,e,n,Ds,Is,Us,Mc);if(u){const h=new D;gn.getBarycoord(Mc,Ds,Is,Us,h),r&&(u.uv=gn.getInterpolatedAttribute(r,o,l,c,h,new lt)),s&&(u.uv1=gn.getInterpolatedAttribute(s,o,l,c,h,new lt)),a&&(u.normal=gn.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};gn.getNormal(Ds,Is,Us,d.normal),u.face=d,u.barycoord=h}return u}class Cr extends sn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2));function _(M,g,p,T,E,v,U,C,R,L,b){const y=v/R,P=U/L,H=v/2,z=U/2,k=C/2,q=R+1,X=L+1;let tt=0,W=0;const ht=new D;for(let Mt=0;Mt<X;Mt++){const At=Mt*P-z;for(let Xt=0;Xt<q;Xt++){const le=Xt*y-H;ht[M]=le*T,ht[g]=At*E,ht[p]=k,c.push(ht.x,ht.y,ht.z),ht[M]=0,ht[g]=0,ht[p]=C>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(Xt/R),h.push(1-Mt/L),tt+=1}}for(let Mt=0;Mt<L;Mt++)for(let At=0;At<R;At++){const Xt=d+At+q*Mt,le=d+At+q*(Mt+1),$=d+(At+1)+q*(Mt+1),st=d+(At+1)+q*Mt;l.push(Xt,le,st),l.push(le,$,st),W+=6}o.addGroup(m,W,b),m+=W,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=Er(i[e]);for(const r in n)t[r]=n[r]}return t}function Md(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const yd={clone:Er,merge:Je};var Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Rr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tf extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new D,yc=new lt,Sc=new lt;class mn extends tf{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=al*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return al*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,yc,Sc),e.subVectors(Sc,yc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const tr=-90,er=1;class bd extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(tr,er,t,e);r.layers=this.layers,this.add(r);const s=new mn(tr,er,t,e);s.layers=this.layers,this.add(s);const a=new mn(tr,er,t,e);a.layers=this.layers,this.add(a);const o=new mn(tr,er,t,e);o.layers=this.layers,this.add(o);const l=new mn(tr,er,t,e);l.layers=this.layers,this.add(l);const c=new mn(tr,er,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ef extends Ze{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:xr,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Td extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ef(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cr(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:mi});s.uniforms.tEquirect.value=e;const a=new Se(r,s),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=Nn),new bd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const $a=new D,Ad=new D,wd=new Zt;class wi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=$a.subVectors(n,e).cross(Ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($a),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wd.getNormalMatrix(t),r=this.coplanarPoint($a).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new us,Bs=new D;class Al{constructor(t=new wi,e=new wi,n=new wi,r=new wi,s=new wi,a=new wi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],_=r[9],M=r[10],g=r[11],p=r[12],T=r[13],E=r[14],v=r[15];if(n[0].setComponents(l-s,d-c,g-m,v-p).normalize(),n[1].setComponents(l+s,d+c,g+m,v+p).normalize(),n[2].setComponents(l+a,d+u,g+_,v+T).normalize(),n[3].setComponents(l-a,d-u,g-_,v-T).normalize(),n[4].setComponents(l-o,d-h,g-M,v-E).normalize(),e===jn)n[5].setComponents(l+o,d+h,g+M,v+E).normalize();else if(e===ca)n[5].setComponents(o,h,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Bs.x=r.normal.x>0?t.max.x:t.min.x,Bs.y=r.normal.y>0?t.max.y:t.min.y,Bs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nf(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Rd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],M=h[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,h[d]=M)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const M=h[m];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class zn extends sn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=t/o,d=e/l,m=[],_=[],M=[],g=[];for(let p=0;p<u;p++){const T=p*d-a;for(let E=0;E<c;E++){const v=E*h-s;_.push(v,-T,0),M.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const E=T+c*p,v=T+c*(p+1),U=T+1+c*(p+1),C=T+1+c*p;m.push(E,v,C),m.push(v,U,C)}this.setIndex(m),this.setAttribute("position",new Re(_,3)),this.setAttribute("normal",new Re(M,3)),this.setAttribute("uv",new Re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,im=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Em=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Cd,alphahash_pars_fragment:Pd,alphamap_fragment:Ld,alphamap_pars_fragment:Dd,alphatest_fragment:Id,alphatest_pars_fragment:Ud,aomap_fragment:Nd,aomap_pars_fragment:Fd,batching_pars_vertex:Od,batching_vertex:Bd,begin_vertex:zd,beginnormal_vertex:Hd,bsdfs:Gd,iridescence_fragment:Vd,bumpmap_pars_fragment:kd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:qd,color_fragment:Zd,color_pars_fragment:Kd,color_pars_vertex:Jd,color_vertex:$d,common:jd,cube_uv_reflection_fragment:Qd,defaultnormal_vertex:tp,displacementmap_pars_vertex:ep,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:rp,colorspace_fragment:sp,colorspace_pars_fragment:ap,envmap_fragment:op,envmap_common_pars_fragment:lp,envmap_pars_fragment:cp,envmap_pars_vertex:up,envmap_physical_pars_fragment:yp,envmap_vertex:fp,fog_vertex:hp,fog_pars_vertex:dp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:_p,lights_lambert_fragment:vp,lights_lambert_pars_fragment:xp,lights_pars_begin:Mp,lights_toon_fragment:Sp,lights_toon_pars_fragment:Ep,lights_phong_fragment:bp,lights_phong_pars_fragment:Tp,lights_physical_fragment:Ap,lights_physical_pars_fragment:wp,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Up,map_fragment:Np,map_pars_fragment:Fp,map_particle_fragment:Op,map_particle_pars_fragment:Bp,metalnessmap_fragment:zp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:Gp,morphcolor_vertex:Vp,morphnormal_vertex:kp,morphtarget_pars_vertex:Wp,morphtarget_vertex:Xp,normal_fragment_begin:Yp,normal_fragment_maps:qp,normal_pars_fragment:Zp,normal_pars_vertex:Kp,normal_vertex:Jp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:tm,iridescence_pars_fragment:em,opaque_fragment:nm,packing:im,premultiplied_alpha_fragment:rm,project_vertex:sm,dithering_fragment:am,dithering_pars_fragment:om,roughnessmap_fragment:lm,roughnessmap_pars_fragment:cm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:fm,shadowmap_vertex:hm,shadowmask_pars_fragment:dm,skinbase_vertex:pm,skinning_pars_vertex:mm,skinning_vertex:gm,skinnormal_vertex:_m,specularmap_fragment:vm,specularmap_pars_fragment:xm,tonemapping_fragment:Mm,tonemapping_pars_fragment:ym,transmission_fragment:Sm,transmission_pars_fragment:Em,uv_pars_fragment:bm,uv_pars_vertex:Tm,uv_vertex:Am,worldpos_vertex:wm,background_vert:Rm,background_frag:Cm,backgroundCube_vert:Pm,backgroundCube_frag:Lm,cube_vert:Dm,cube_frag:Im,depth_vert:Um,depth_frag:Nm,distanceRGBA_vert:Fm,distanceRGBA_frag:Om,equirect_vert:Bm,equirect_frag:zm,linedashed_vert:Hm,linedashed_frag:Gm,meshbasic_vert:Vm,meshbasic_frag:km,meshlambert_vert:Wm,meshlambert_frag:Xm,meshmatcap_vert:Ym,meshmatcap_frag:qm,meshnormal_vert:Zm,meshnormal_frag:Km,meshphong_vert:Jm,meshphong_frag:$m,meshphysical_vert:jm,meshphysical_frag:Qm,meshtoon_vert:t0,meshtoon_frag:e0,points_vert:n0,points_frag:i0,shadow_vert:r0,shadow_frag:s0,sprite_vert:a0,sprite_frag:o0},dt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Pn={basic:{uniforms:Je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Je([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Je([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Je([dt.points,dt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Je([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Je([dt.common,dt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Je([dt.sprite,dt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Je([dt.common,dt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Je([dt.lights,dt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Pn.physical={uniforms:Je([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const zs={r:0,b:0,g:0},Ti=new Bn,l0=new de;function c0(i,t,e,n,r,s,a){const o=new $t(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function _(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function M(T){let E=!1;const v=_(T);v===null?p(o,l):v&&v.isColor&&(p(v,1),E=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(T,E){const v=_(E);v&&(v.isCubeTexture||v.mapping===va)?(u===void 0&&(u=new Se(new Cr(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Er(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ti.copy(E.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(Ti)),u.material.toneMapped=ne.getTransfer(v.colorSpace)!==pe,(h!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Se(new zn(2,2),new xi({name:"BackgroundMaterial",uniforms:Er(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ne.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,E){T.getRGB(zs,Qu(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:M,addToRenderList:g}}function u0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(y,P,H,z,k){let q=!1;const X=h(z,H,P);s!==X&&(s=X,c(s.object)),q=m(y,z,H,k),q&&_(y,z,H,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(y,P,H,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,P,H){const z=H.wireframe===!0;let k=n[y.id];k===void 0&&(k={},n[y.id]=k);let q=k[P.id];q===void 0&&(q={},k[P.id]=q);let X=q[z];return X===void 0&&(X=d(l()),q[z]=X),X}function d(y){const P=[],H=[],z=[];for(let k=0;k<e;k++)P[k]=0,H[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:y,attributes:{},index:null}}function m(y,P,H,z){const k=s.attributes,q=P.attributes;let X=0;const tt=H.getAttributes();for(const W in tt)if(tt[W].location>=0){const Mt=k[W];let At=q[W];if(At===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(At=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(At=y.instanceColor)),Mt===void 0||Mt.attribute!==At||At&&Mt.data!==At.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function _(y,P,H,z){const k={},q=P.attributes;let X=0;const tt=H.getAttributes();for(const W in tt)if(tt[W].location>=0){let Mt=q[W];Mt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor));const At={};At.attribute=Mt,Mt&&Mt.data&&(At.data=Mt.data),k[W]=At,X++}s.attributes=k,s.attributesNum=X,s.index=z}function M(){const y=s.newAttributes;for(let P=0,H=y.length;P<H;P++)y[P]=0}function g(y){p(y,0)}function p(y,P){const H=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;H[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),k[y]!==P&&(i.vertexAttribDivisor(y,P),k[y]=P)}function T(){const y=s.newAttributes,P=s.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==y[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function E(y,P,H,z,k,q,X){X===!0?i.vertexAttribIPointer(y,P,H,k,q):i.vertexAttribPointer(y,P,H,z,k,q)}function v(y,P,H,z){M();const k=z.attributes,q=H.getAttributes(),X=P.defaultAttributeValues;for(const tt in q){const W=q[tt];if(W.location>=0){let ht=k[tt];if(ht===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const Mt=ht.normalized,At=ht.itemSize,Xt=t.get(ht);if(Xt===void 0)continue;const le=Xt.buffer,$=Xt.type,st=Xt.bytesPerElement,Rt=$===i.INT||$===i.UNSIGNED_INT||ht.gpuType===Ml;if(ht.isInterleavedBufferAttribute){const ct=ht.data,Ft=ct.stride,kt=ht.offset;if(ct.isInstancedInterleavedBuffer){for(let Gt=0;Gt<W.locationSize;Gt++)p(W.location+Gt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Gt=0;Gt<W.locationSize;Gt++)g(W.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Gt=0;Gt<W.locationSize;Gt++)E(W.location+Gt,At/W.locationSize,$,Mt,Ft*st,(kt+At/W.locationSize*Gt)*st,Rt)}else{if(ht.isInstancedBufferAttribute){for(let ct=0;ct<W.locationSize;ct++)p(W.location+ct,ht.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ct=0;ct<W.locationSize;ct++)g(W.location+ct);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ct=0;ct<W.locationSize;ct++)E(W.location+ct,At/W.locationSize,$,Mt,At*st,At/W.locationSize*ct*st,Rt)}}else if(X!==void 0){const Mt=X[tt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(W.location,Mt);break;case 3:i.vertexAttrib3fv(W.location,Mt);break;case 4:i.vertexAttrib4fv(W.location,Mt);break;default:i.vertexAttrib1fv(W.location,Mt)}}}}T()}function U(){L();for(const y in n){const P=n[y];for(const H in P){const z=P[H];for(const k in z)u(z[k].object),delete z[k];delete P[H]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const H in P){const z=P[H];for(const k in z)u(z[k].object),delete z[k];delete P[H]}delete n[y.id]}function R(y){for(const P in n){const H=n[P];if(H[y.id]===void 0)continue;const z=H[y.id];for(const k in z)u(z[k].object),delete z[k];delete H[y.id]}}function L(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:g,disableUnusedAttributes:T}}function f0(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];e.update(m,n,1)}function l(c,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let M=0;M<h;M++)_+=u[M]*d[M];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function h0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ii&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:U,maxSamples:C}}function d0(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new wi,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const T=s?0:n,E=T*4;let v=p.clippingState||null;l.value=v,v=u(_,d,E,m);for(let U=0;U!==E;++U)v[U]=e[U];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,_){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const p=m+M*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,v=m;E!==M;++E,v+=4)a.copy(h[E]).applyMatrix4(T,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function p0(i){let t=new WeakMap;function e(a,o){return o===Co?a.mapping=xr:o===Po&&(a.mapping=Mr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Co||o===Po)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Td(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class rf extends tf{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cr=4,Ec=[.125,.215,.35,.446,.526,.582],Pi=20,ja=new rf,bc=new $t;let Qa=null,to=0,eo=0,no=!1;const Ri=(1+Math.sqrt(5))/2,nr=1/Ri,Tc=[new D(-Ri,nr,0),new D(Ri,nr,0),new D(-nr,0,Ri),new D(nr,0,Ri),new D(0,Ri,-nr),new D(0,Ri,nr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Qa=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:cs,format:Rn,colorSpace:Tr,depthBuffer:!1},r=wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(s)),this._blurMaterial=g0(s,t,e)}return r}_compileMaterial(t){const e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,r){const o=new mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(bc),u.toneMapping=gi,u.autoClear=!1;const m=new fn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new Se(new Cr,m);let M=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,M=!0):(m.color.copy(bc),M=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):T===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;Hs(r,T*E,p>2?E:0,E,E),u.setRenderTarget(r),M&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===xr||t.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Tc[(r-s-1)%Tc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Se(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pi-1),M=s/_,g=isFinite(s)?1+Math.floor(u*M):Pi;g>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pi}`);const p=[];let T=0;for(let R=0;R<Pi;++R){const L=R/M,b=Math.exp(-L*L/2);p.push(b),R===0?T+=b:R<g&&(T+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;const v=this._sizeLods[r],U=3*v*(r>E-cr?r-E+cr:0),C=4*(this._cubeSize-v);Hs(e,U,C,3*v,2*v),l.setRenderTarget(e),l.render(h,ja)}}function m0(i){const t=[],e=[],n=[];let r=i;const s=i-cr+1+Ec.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-cr?l=Ec[a-i+cr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,M=3,g=2,p=1,T=new Float32Array(M*_*m),E=new Float32Array(g*_*m),v=new Float32Array(p*_*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,L=C>2?0:-1,b=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];T.set(b,M*_*C),E.set(d,g*_*C);const y=[C,C,C,C,C,C];v.set(y,p*_*C)}const U=new sn;U.setAttribute("position",new rn(T,M)),U.setAttribute("uv",new rn(E,g)),U.setAttribute("faceIndex",new rn(v,p)),t.push(U),r>cr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wc(i,t,e){const n=new Oi(i,t,e);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function g0(i,t,e){const n=new Float32Array(Pi),r=new D(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Rc(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Cc(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Co||l===Po,u=l===xr||l===Mr;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ac(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Ac(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function v0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function x0(i,t,e,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const M=d.morphAttributes[_];for(let g=0,p=M.length;g<p;g++)t.remove(M[g])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const M=m[_];for(let g=0,p=M.length;g<p;g++)t.update(M[g],i.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let M=0;if(m!==null){const T=m.array;M=m.version;for(let E=0,v=T.length;E<v;E+=3){const U=T[E+0],C=T[E+1],R=T[E+2];d.push(U,C,C,R,R,U)}}else if(_!==void 0){const T=_.array;M=_.version;for(let E=0,v=T.length/3-1;E<v;E+=3){const U=E+0,C=E+1,R=E+2;d.push(U,C,C,R,R,U)}}else return;const g=new(Yu(d)?ju:$u)(d,1);g.version=M;const p=s.get(h);p&&t.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function M0(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*a),e.update(m,n,1)}function c(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,d*a,_),e.update(m,n,_))}function u(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];e.update(g,n,1)}function h(d,m,_,M){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,m[p],M[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,M,0,_);let p=0;for(let T=0;T<_;T++)p+=m[T]*M[T];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function y0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function S0(i,t,e){const n=new WeakMap,r=new Ae;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),M===!0&&(v=2),g===!0&&(v=3);let U=o.attributes.position.count*v,C=1;U>t.maxTextureSize&&(C=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const R=new Float32Array(U*C*4*h),L=new Zu(R,U,C,h);L.type=Fn,L.needsUpdate=!0;const b=v*4;for(let P=0;P<h;P++){const H=p[P],z=T[P],k=E[P],q=U*C*4*P;for(let X=0;X<H.count;X++){const tt=X*b;_===!0&&(r.fromBufferAttribute(H,X),R[q+tt+0]=r.x,R[q+tt+1]=r.y,R[q+tt+2]=r.z,R[q+tt+3]=0),M===!0&&(r.fromBufferAttribute(z,X),R[q+tt+4]=r.x,R[q+tt+5]=r.y,R[q+tt+6]=r.z,R[q+tt+7]=0),g===!0&&(r.fromBufferAttribute(k,X),R[q+tt+8]=r.x,R[q+tt+9]=r.y,R[q+tt+10]=r.z,R[q+tt+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:L,size:new lt(U,C)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function E0(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class sf extends Ze{constructor(t,e,n,r,s,a,o,l,c,u=dr){if(u!==dr&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===dr&&(n=Fi),n===void 0&&u===Sr&&(n=yr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const af=new Ze,Pc=new sf(1,1),of=new Zu,lf=new ld,cf=new ef,Lc=[],Dc=[],Ic=new Float32Array(16),Uc=new Float32Array(9),Nc=new Float32Array(4);function Pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Lc[r];if(s===void 0&&(s=new Float32Array(r),Lc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ya(i,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function b0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function R0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Nc.set(n),i.uniformMatrix2fv(this.addr,!1,Nc),Ie(e,n)}}function C0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Uc.set(n),i.uniformMatrix3fv(this.addr,!1,Uc),Ie(e,n)}}function P0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Ic.set(n),i.uniformMatrix4fv(this.addr,!1,Ic),Ie(e,n)}}function L0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function N0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function z0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Pc.compareFunction=Xu,s=Pc):s=af,e.setTexture2D(t||s,r)}function H0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||lf,r)}function G0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||cf,r)}function V0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||of,r)}function k0(i){switch(i){case 5126:return b0;case 35664:return T0;case 35665:return A0;case 35666:return w0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return I0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return F0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return V0}}function W0(i,t){i.uniform1fv(this.addr,t)}function X0(i,t){const e=Pr(t,this.size,2);i.uniform2fv(this.addr,e)}function Y0(i,t){const e=Pr(t,this.size,3);i.uniform3fv(this.addr,e)}function q0(i,t){const e=Pr(t,this.size,4);i.uniform4fv(this.addr,e)}function Z0(i,t){const e=Pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function K0(i,t){const e=Pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function J0(i,t){const e=Pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $0(i,t){i.uniform1iv(this.addr,t)}function j0(i,t){i.uniform2iv(this.addr,t)}function Q0(i,t){i.uniform3iv(this.addr,t)}function tg(i,t){i.uniform4iv(this.addr,t)}function eg(i,t){i.uniform1uiv(this.addr,t)}function ng(i,t){i.uniform2uiv(this.addr,t)}function ig(i,t){i.uniform3uiv(this.addr,t)}function rg(i,t){i.uniform4uiv(this.addr,t)}function sg(i,t,e){const n=this.cache,r=t.length,s=ya(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||af,s[a])}function ag(i,t,e){const n=this.cache,r=t.length,s=ya(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||lf,s[a])}function og(i,t,e){const n=this.cache,r=t.length,s=ya(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||cf,s[a])}function lg(i,t,e){const n=this.cache,r=t.length,s=ya(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||of,s[a])}function cg(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return Y0;case 35666:return q0;case 35674:return Z0;case 35675:return K0;case 35676:return J0;case 5124:case 35670:return $0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Fc(i,t){i.seq.push(t),i.map[t.id]=t}function dg(i,t,e){const n=i.name,r=n.length;for(io.lastIndex=0;;){const s=io.exec(n),a=io.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Fc(e,c===void 0?new ug(o,i,t):new fg(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new hg(o),Fc(e,h)),e=h}}}class ia{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);dg(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Oc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pg=37297;let mg=0;function gg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Bc=new Zt;function _g(i){ne._getMatrix(Bc,ne.workingColorSpace,i);const t=`mat3( ${Bc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Ma:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+gg(i.getShaderSource(t),a)}else return r}function vg(i,t){const e=_g(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xg(i,t){let e;switch(t){case Nh:e="Linear";break;case Fh:e="Reinhard";break;case Oh:e="Cineon";break;case Bh:e="ACESFilmic";break;case Hh:e="AgX";break;case Gh:e="Neutral";break;case zh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new D;function Mg(){ne.getLuminanceCoefficients(Gs);const i=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function Sg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Yr(i){return i!==""}function Hc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(bg,Ag)}const Tg=new Map;function Ag(i,t){let e=Jt[t];if(e===void 0){const n=Tg.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ol(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(i){return i.replace(wg,Rg)}function Rg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case Mr:t="ENVMAP_TYPE_CUBE";break;case va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function Dg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Iu:t="ENVMAP_BLENDING_MULTIPLY";break;case Ih:t="ENVMAP_BLENDING_MIX";break;case Uh:t="ENVMAP_BLENDING_ADD";break}return t}function Ig(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ug(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Cg(e),c=Pg(e),u=Lg(e),h=Dg(e),d=Ig(e),m=yg(e),_=Sg(s),M=r.createProgram();let g,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(g=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==gi?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),Mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),a=ol(a),a=Hc(a,e),a=Gc(a,e),o=ol(o),o=Hc(o,e),o=Gc(o,e),a=Vc(a),o=Vc(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+g+a,v=T+p+o,U=Oc(r,r.VERTEX_SHADER,E),C=Oc(r,r.FRAGMENT_SHADER,v);r.attachShader(M,U),r.attachShader(M,C),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(P){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(M).trim(),z=r.getShaderInfoLog(U).trim(),k=r.getShaderInfoLog(C).trim();let q=!0,X=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,U,C);else{const tt=zc(r,U,"vertex"),W=zc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+tt+`
`+W)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||k==="")&&(X=!1);X&&(P.diagnostics={runnable:q,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:k,prefix:p}})}r.deleteShader(U),r.deleteShader(C),L=new ia(r,M),b=Eg(r,M)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,pg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=C,this}let Ng=0;class Fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Og(t),e.set(t,n)),n}}class Og{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}}function Bg(i,t,e,n,r,s,a){const o=new Ku,l=new Fg,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,y,P,H,z){const k=H.fog,q=z.geometry,X=b.isMeshStandardMaterial?H.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),W=tt&&tt.mapping===va?tt.image.height:null,ht=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,At=Mt!==void 0?Mt.length:0;let Xt=0;q.morphAttributes.position!==void 0&&(Xt=1),q.morphAttributes.normal!==void 0&&(Xt=2),q.morphAttributes.color!==void 0&&(Xt=3);let le,$,st,Rt;if(ht){const fe=Pn[ht];le=fe.vertexShader,$=fe.fragmentShader}else le=b.vertexShader,$=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),Rt=l.getFragmentShaderID(b);const ct=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),kt=z.isInstancedMesh===!0,Gt=z.isBatchedMesh===!0,ee=!!b.map,Q=!!b.matcap,rt=!!tt,w=!!b.aoMap,Ut=!!b.lightMap,nt=!!b.bumpMap,Et=!!b.normalMap,ut=!!b.displacementMap,Bt=!!b.emissiveMap,yt=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,B=b.clearcoat>0,K=b.dispersion>0,et=b.iridescence>0,J=b.sheen>0,Ct=b.transmission>0,pt=x&&!!b.anisotropyMap,St=B&&!!b.clearcoatMap,jt=B&&!!b.clearcoatNormalMap,it=B&&!!b.clearcoatRoughnessMap,bt=et&&!!b.iridescenceMap,zt=et&&!!b.iridescenceThicknessMap,Vt=J&&!!b.sheenColorMap,Tt=J&&!!b.sheenRoughnessMap,te=!!b.specularMap,Kt=!!b.specularColorMap,_e=!!b.specularIntensityMap,I=Ct&&!!b.transmissionMap,mt=Ct&&!!b.thicknessMap,Y=!!b.gradientMap,j=!!b.alphaMap,xt=b.alphaTest>0,_t=!!b.alphaHash,Yt=!!b.extensions;let be=gi;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(be=i.toneMapping);const He={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:le,fragmentShader:$,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:Rt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Gt,batchingColor:Gt&&z._colorsTexture!==null,instancing:kt,instancingColor:kt&&z.instanceColor!==null,instancingMorph:kt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Tr,alphaToCoverage:!!b.alphaToCoverage,map:ee,matcap:Q,envMap:rt,envMapMode:rt&&tt.mapping,envMapCubeUVHeight:W,aoMap:w,lightMap:Ut,bumpMap:nt,normalMap:Et,displacementMap:d&&ut,emissiveMap:Bt,normalMapObjectSpace:Et&&b.normalMapType===Xh,normalMapTangentSpace:Et&&b.normalMapType===Wu,metalnessMap:yt,roughnessMap:A,anisotropy:x,anisotropyMap:pt,clearcoat:B,clearcoatMap:St,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:K,iridescence:et,iridescenceMap:bt,iridescenceThicknessMap:zt,sheen:J,sheenColorMap:Vt,sheenRoughnessMap:Tt,specularMap:te,specularColorMap:Kt,specularIntensityMap:_e,transmission:Ct,transmissionMap:I,thicknessMap:mt,gradientMap:Y,opaque:b.transparent===!1&&b.blending===hr&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:xt,alphaHash:_t,combine:b.combine,mapUv:ee&&M(b.map.channel),aoMapUv:w&&M(b.aoMap.channel),lightMapUv:Ut&&M(b.lightMap.channel),bumpMapUv:nt&&M(b.bumpMap.channel),normalMapUv:Et&&M(b.normalMap.channel),displacementMapUv:ut&&M(b.displacementMap.channel),emissiveMapUv:Bt&&M(b.emissiveMap.channel),metalnessMapUv:yt&&M(b.metalnessMap.channel),roughnessMapUv:A&&M(b.roughnessMap.channel),anisotropyMapUv:pt&&M(b.anisotropyMap.channel),clearcoatMapUv:St&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:jt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&M(b.sheenRoughnessMap.channel),specularMapUv:te&&M(b.specularMap.channel),specularColorMapUv:Kt&&M(b.specularColorMap.channel),specularIntensityMapUv:_e&&M(b.specularIntensityMap.channel),transmissionMapUv:I&&M(b.transmissionMap.channel),thicknessMapUv:mt&&M(b.thicknessMap.channel),alphaMapUv:j&&M(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Et||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(ee||j),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ft,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Xt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:ee&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===pe,decodeVideoTextureEmissive:Bt&&b.emissiveMap.isVideoTexture===!0&&ne.getTransfer(b.emissiveMap.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ln,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Yt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&b.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(T(y,b),E(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function T(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function E(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const y=_[b.type];let P;if(y){const H=Pn[y];P=yd.clone(H.uniforms)}else P=b.uniforms;return P}function U(b,y){let P;for(let H=0,z=u.length;H<z;H++){const k=u[H];if(k.cacheKey===y){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Ug(i,y,b,s),u.push(P)),P}function C(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:U,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:L}}function zg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Hg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,d,m,_,M,g){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:M,group:g},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=M,p.group=g),t++,p}function o(h,d,m,_,M,g){const p=a(h,d,m,_,M,g);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(h,d,m,_,M,g){const p=a(h,d,m,_,M,g);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||Hg),n.length>1&&n.sort(d||Wc),r.length>1&&r.sort(d||Wc)}function u(){for(let h=t,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Gg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Xc,i.set(n,[a])):r>=s.length?(a=new Xc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new $t};break;case"SpotLight":e={position:new D,direction:new D,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function kg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wg=0;function Xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yg(i){const t=new Vg,e=kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const r=new D,s=new de,a=new de;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,_=0,M=0,g=0,p=0,T=0,E=0,v=0,U=0,C=0,R=0;c.sort(Xg);for(let b=0,y=c.length;b<y;b++){const P=c[b],H=P.color,z=P.intensity,k=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=H.r*z,h+=H.g*z,d+=H.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);R++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=P.shadow.matrix,T++}n.directional[m]=X,m++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(H).multiplyScalar(z),X.distance=k,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[M]=X;const tt=P.shadow;if(P.map&&(n.spotLightMap[U]=P.map,U++,tt.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[M]=tt.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[M]=W,n.spotShadowMap[M]=q,v++}M++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(H).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=X,g++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const tt=P.shadow,W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,E++}n.point[_]=X,_++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=X,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==M||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==v||L.numSpotMaps!==U||L.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,L.directionalLength=m,L.pointLength=_,L.spotLength=M,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=v,L.numSpotMaps=U,L.numLightProbes=R,n.version=Wg++)}function l(c,u){let h=0,d=0,m=0,_=0,M=0;const g=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),h++}else if(E.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),m++}else if(E.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(E.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){const v=n.hemi[M];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:n}}function Yc(i){const t=new Yg(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function qg(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Yc(i),t.set(r,[o])):s>=a.length?(o=new Yc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Zg extends Rr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kg extends Rr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jg(i,t,e){let n=new Al;const r=new lt,s=new lt,a=new Ae,o=new Zg({depthPacking:Wh}),l=new Kg,c={},u=e.maxTextureSize,h={[vi]:nn,[nn]:vi,[Ln]:Ln},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Jg,fragmentShader:$g}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Se(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let p=this.type;this.render=function(C,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(mi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=p!==Kn&&this.type===Kn,k=p===Kn&&this.type!==Kn;for(let q=0,X=C.length;q<X;q++){const tt=C[q],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ht=W.getFrameExtents();if(r.multiply(ht),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ht.x),r.x=s.x*ht.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ht.y),r.y=s.y*ht.y,W.mapSize.y=s.y)),W.map===null||z===!0||k===!0){const At=this.type!==Kn?{minFilter:$e,magFilter:$e}:{};W.map!==null&&W.map.dispose(),W.map=new Oi(r.x,r.y,At),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Mt=W.getViewportCount();for(let At=0;At<Mt;At++){const Xt=W.getViewport(At);a.set(s.x*Xt.x,s.y*Xt.y,s.x*Xt.z,s.y*Xt.w),H.viewport(a),W.updateMatrices(tt,At),n=W.getFrustum(),v(R,L,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===Kn&&T(W,L),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,y,P)};function T(C,R){const L=t.update(M);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Oi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,M,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,L,m,M,null)}function E(C,R,L,b){let y=null;const P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)y=P;else if(y=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=y.uuid,z=R.uuid;let k=c[H];k===void 0&&(k={},c[H]=k);let q=k[z];q===void 0&&(q=y.clone(),k[z]=q,R.addEventListener("dispose",U)),y=q}if(y.visible=R.visible,y.wireframe=R.wireframe,b===Kn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=i.properties.get(y);H.light=L}return y}function v(C,R,L,b,y){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Kn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const z=t.update(C),k=C.material;if(Array.isArray(k)){const q=z.groups;for(let X=0,tt=q.length;X<tt;X++){const W=q[X],ht=k[W.materialIndex];if(ht&&ht.visible){const Mt=E(C,ht,b,y);C.onBeforeShadow(i,C,R,L,z,Mt,W),i.renderBufferDirect(L,null,z,Mt,C,W),C.onAfterShadow(i,C,R,L,z,Mt,W)}}}else if(k.visible){const q=E(C,k,b,y);C.onBeforeShadow(i,C,R,L,z,q,null),i.renderBufferDirect(L,null,z,q,C,null),C.onAfterShadow(i,C,R,L,z,q,null)}}const H=C.children;for(let z=0,k=H.length;z<k;z++)v(H[z],R,L,b,y)}function U(C){C.target.removeEventListener("dispose",U);for(const L in c){const b=c[L],y=C.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const Qg={[So]:Eo,[bo]:wo,[To]:Ro,[vr]:Ao,[Eo]:So,[wo]:bo,[Ro]:To,[Ao]:vr};function t_(i,t){function e(){let I=!1;const mt=new Ae;let Y=null;const j=new Ae(0,0,0,0);return{setMask:function(xt){Y!==xt&&!I&&(i.colorMask(xt,xt,xt,xt),Y=xt)},setLocked:function(xt){I=xt},setClear:function(xt,_t,Yt,be,He){He===!0&&(xt*=be,_t*=be,Yt*=be),mt.set(xt,_t,Yt,be),j.equals(mt)===!1&&(i.clearColor(xt,_t,Yt,be),j.copy(mt))},reset:function(){I=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let I=!1,mt=!1,Y=null,j=null,xt=null;return{setReversed:function(_t){if(mt!==_t){const Yt=t.get("EXT_clip_control");mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const be=xt;xt=null,this.setClear(be)}mt=_t},getReversed:function(){return mt},setTest:function(_t){_t?ct(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(_t){Y!==_t&&!I&&(i.depthMask(_t),Y=_t)},setFunc:function(_t){if(mt&&(_t=Qg[_t]),j!==_t){switch(_t){case So:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case vr:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case wo:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=_t}},setLocked:function(_t){I=_t},setClear:function(_t){xt!==_t&&(mt&&(_t=1-_t),i.clearDepth(_t),xt=_t)},reset:function(){I=!1,Y=null,j=null,xt=null,mt=!1}}}function r(){let I=!1,mt=null,Y=null,j=null,xt=null,_t=null,Yt=null,be=null,He=null;return{setTest:function(fe){I||(fe?ct(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(fe){mt!==fe&&!I&&(i.stencilMask(fe),mt=fe)},setFunc:function(fe,Mn,Gn){(Y!==fe||j!==Mn||xt!==Gn)&&(i.stencilFunc(fe,Mn,Gn),Y=fe,j=Mn,xt=Gn)},setOp:function(fe,Mn,Gn){(_t!==fe||Yt!==Mn||be!==Gn)&&(i.stencilOp(fe,Mn,Gn),_t=fe,Yt=Mn,be=Gn)},setLocked:function(fe){I=fe},setClear:function(fe){He!==fe&&(i.clearStencil(fe),He=fe)},reset:function(){I=!1,mt=null,Y=null,j=null,xt=null,_t=null,Yt=null,be=null,He=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,m=[],_=null,M=!1,g=null,p=null,T=null,E=null,v=null,U=null,C=null,R=new $t(0,0,0),L=0,b=!1,y=null,P=null,H=null,z=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=tt>=2);let ht=null,Mt={};const At=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),le=new Ae().fromArray(At),$=new Ae().fromArray(Xt);function st(I,mt,Y,j){const xt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(I,_t),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<Y;Yt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(mt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return _t}const Rt={};Rt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(vr),nt(!1),Et(jl),ct(i.CULL_FACE),w(mi);function ct(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Ft(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function kt(I,mt){return h[I]!==mt?(i.bindFramebuffer(I,mt),h[I]=mt,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=mt),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Gt(I,mt){let Y=m,j=!1;if(I){Y=d.get(mt),Y===void 0&&(Y=[],d.set(mt,Y));const xt=I.textures;if(Y.length!==xt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Yt=xt.length;_t<Yt;_t++)Y[_t]=i.COLOR_ATTACHMENT0+_t;Y.length=xt.length,j=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,j=!0);j&&i.drawBuffers(Y)}function ee(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const Q={[Ci]:i.FUNC_ADD,[gh]:i.FUNC_SUBTRACT,[_h]:i.FUNC_REVERSE_SUBTRACT};Q[vh]=i.MIN,Q[xh]=i.MAX;const rt={[Mh]:i.ZERO,[yh]:i.ONE,[Sh]:i.SRC_COLOR,[Mo]:i.SRC_ALPHA,[Rh]:i.SRC_ALPHA_SATURATE,[Ah]:i.DST_COLOR,[bh]:i.DST_ALPHA,[Eh]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[wh]:i.ONE_MINUS_DST_COLOR,[Th]:i.ONE_MINUS_DST_ALPHA,[Ch]:i.CONSTANT_COLOR,[Ph]:i.ONE_MINUS_CONSTANT_COLOR,[Lh]:i.CONSTANT_ALPHA,[Dh]:i.ONE_MINUS_CONSTANT_ALPHA};function w(I,mt,Y,j,xt,_t,Yt,be,He,fe){if(I===mi){M===!0&&(Ft(i.BLEND),M=!1);return}if(M===!1&&(ct(i.BLEND),M=!0),I!==mh){if(I!==g||fe!==b){if((p!==Ci||v!==Ci)&&(i.blendEquation(i.FUNC_ADD),p=Ci,v=Ci),fe)switch(I){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,U=null,C=null,R.set(0,0,0),L=0,g=I,b=fe}return}xt=xt||mt,_t=_t||Y,Yt=Yt||j,(mt!==p||xt!==v)&&(i.blendEquationSeparate(Q[mt],Q[xt]),p=mt,v=xt),(Y!==T||j!==E||_t!==U||Yt!==C)&&(i.blendFuncSeparate(rt[Y],rt[j],rt[_t],rt[Yt]),T=Y,E=j,U=_t,C=Yt),(be.equals(R)===!1||He!==L)&&(i.blendColor(be.r,be.g,be.b,He),R.copy(be),L=He),g=I,b=!1}function Ut(I,mt){I.side===Ln?Ft(i.CULL_FACE):ct(i.CULL_FACE);let Y=I.side===nn;mt&&(Y=!Y),nt(Y),I.blending===hr&&I.transparent===!1?w(mi):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const j=I.stencilWrite;o.setTest(j),j&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function Et(I){I!==dh?(ct(i.CULL_FACE),I!==P&&(I===jl?i.cullFace(i.BACK):I===ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),P=I}function ut(I){I!==H&&(X&&i.lineWidth(I),H=I)}function Bt(I,mt,Y){I?(ct(i.POLYGON_OFFSET_FILL),(z!==mt||k!==Y)&&(i.polygonOffset(mt,Y),z=mt,k=Y)):Ft(i.POLYGON_OFFSET_FILL)}function yt(I){I?ct(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+q-1),ht!==I&&(i.activeTexture(I),ht=I)}function x(I,mt,Y){Y===void 0&&(ht===null?Y=i.TEXTURE0+q-1:Y=ht);let j=Mt[Y];j===void 0&&(j={type:void 0,texture:void 0},Mt[Y]=j),(j.type!==I||j.texture!==mt)&&(ht!==Y&&(i.activeTexture(Y),ht=Y),i.bindTexture(I,mt||Rt[I]),j.type=I,j.texture=mt)}function B(){const I=Mt[ht];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(I){le.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),le.copy(I))}function Tt(I){$.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function te(I,mt){let Y=c.get(mt);Y===void 0&&(Y=new WeakMap,c.set(mt,Y));let j=Y.get(I);j===void 0&&(j=i.getUniformBlockIndex(mt,I.name),Y.set(I,j))}function Kt(I,mt){const j=c.get(mt).get(I);l.get(mt)!==j&&(i.uniformBlockBinding(mt,j,I.__bindingPointIndex),l.set(mt,j))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ht=null,Mt={},h={},d=new WeakMap,m=[],_=null,M=!1,g=null,p=null,T=null,E=null,v=null,U=null,C=null,R=new $t(0,0,0),L=0,b=!1,y=null,P=null,H=null,z=null,k=null,le.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ct,disable:Ft,bindFramebuffer:kt,drawBuffers:Gt,useProgram:ee,setBlending:w,setMaterial:Ut,setFlipSided:nt,setCullFace:Et,setLineWidth:ut,setPolygonOffset:Bt,setScissorTest:yt,activeTexture:A,bindTexture:x,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:bt,texImage3D:zt,updateUBOMapping:te,uniformBlockBinding:Kt,texStorage2D:jt,texStorage3D:it,texSubImage2D:J,texSubImage3D:Ct,compressedTexSubImage2D:pt,compressedTexSubImage3D:St,scissor:Vt,viewport:Tt,reset:_e}}function qc(i,t,e,n){const r=e_(n);switch(e){case Bu:return i*t;case Hu:return i*t;case Gu:return i*t*2;case xa:return i*t/r.components*r.byteLength;case El:return i*t/r.components*r.byteLength;case Vu:return i*t*2/r.components*r.byteLength;case bl:return i*t*2/r.components*r.byteLength;case zu:return i*t*3/r.components*r.byteLength;case Rn:return i*t*4/r.components*r.byteLength;case Tl:return i*t*4/r.components*r.byteLength;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:case Fo:return Math.max(i,16)*Math.max(t,8)/4;case Io:case No:return Math.max(i,8)*Math.max(t,8)/2;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case na:case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ku:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case il:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e_(i){switch(i){case ii:case Nu:return{byteLength:1,components:1};case rs:case Fu:case cs:return{byteLength:2,components:1};case yl:case Sl:return{byteLength:2,components:4};case Fi:case Ml:case Fn:return{byteLength:4,components:1};case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):ua("canvas")}function M(A,x,B){let K=1;const et=yt(A);if((et.width>B||et.height>B)&&(K=B/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(K*et.width),Ct=Math.floor(K*et.height);h===void 0&&(h=_(J,Ct));const pt=x?_(J,Ct):h;return pt.width=J,pt.height=Ct,pt.getContext("2d").drawImage(A,0,0,J,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Ct+")."),pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,x,B,K,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=x;if(x===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),x===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){const Ct=et?Ma:ne.getTransfer(K);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Ct===pe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(A,x){let B;return A?x===null||x===Fi||x===yr?B=i.DEPTH24_STENCIL8:x===Fn?B=i.DEPTH32F_STENCIL8:x===rs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fi||x===yr?B=i.DEPTH_COMPONENT24:x===Fn?B=i.DEPTH_COMPONENT32F:x===rs&&(B=i.DEPTH_COMPONENT16),B}function U(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==Nn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&u.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),y(x)}function L(A){const x=n.get(A);if(x.__webglInit===void 0)return;const B=A.source,K=d.get(B);if(K){const et=K[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(A),Object.keys(K).length===0&&d.delete(B)}n.remove(A)}function b(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const B=A.source,K=d.get(B);delete K[x.__cacheKey],a.memory.textures--}function y(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let et=0;et<x.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[K][et]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=A.textures;for(let K=0,et=B.length;K<et;K++){const J=n.get(B[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(A)}let P=0;function H(){P=0}function z(){const A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function k(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function q(A,x){const B=n.get(A);if(A.isVideoTexture&&ut(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,A,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function X(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){$(B,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function tt(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){$(B,A,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function W(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){st(B,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const ht={[Lo]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[Do]:i.MIRRORED_REPEAT},Mt={[$e]:i.NEAREST,[Vh]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},At={[Yh]:i.NEVER,[jh]:i.ALWAYS,[qh]:i.LESS,[Xu]:i.LEQUAL,[Zh]:i.EQUAL,[$h]:i.GEQUAL,[Kh]:i.GREATER,[Jh]:i.NOTEQUAL};function Xt(A,x){if(x.type===Fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Nn||x.magFilter===Ca||x.magFilter===ys||x.magFilter===Di||x.minFilter===Nn||x.minFilter===Ca||x.minFilter===ys||x.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ht[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ht[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ht[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Mt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,At[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===$e||x.minFilter!==ys&&x.minFilter!==Di||x.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function le(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const K=x.source;let et=d.get(K);et===void 0&&(et={},d.set(K,et));const J=k(x);if(J!==A.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),et[J].usedTimes++;const Ct=et[A.__cacheKey];Ct!==void 0&&(et[A.__cacheKey].usedTimes--,Ct.usedTimes===0&&b(x)),A.__cacheKey=J,A.__webglTexture=et[J].texture}return B}function $(A,x,B){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const et=le(A,x),J=x.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+B);const Ct=n.get(J);if(J.version!==Ct.__version||et===!0){e.activeTexture(i.TEXTURE0+B);const pt=ne.getPrimaries(ne.workingColorSpace),St=x.colorSpace===di?null:ne.getPrimaries(x.colorSpace),jt=x.colorSpace===di||pt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=M(x.image,!1,r.maxTextureSize);it=Bt(x,it);const bt=s.convert(x.format,x.colorSpace),zt=s.convert(x.type);let Vt=E(x.internalFormat,bt,zt,x.colorSpace,x.isVideoTexture);Xt(K,x);let Tt;const te=x.mipmaps,Kt=x.isVideoTexture!==!0,_e=Ct.__version===void 0||et===!0,I=J.dataReady,mt=U(x,it);if(x.isDepthTexture)Vt=v(x.format===Sr,x.type),_e&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Vt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Vt,it.width,it.height,0,bt,zt,null));else if(x.isDataTexture)if(te.length>0){Kt&&_e&&e.texStorage2D(i.TEXTURE_2D,mt,Vt,te[0].width,te[0].height);for(let Y=0,j=te.length;Y<j;Y++)Tt=te[Y],Kt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Tt.width,Tt.height,bt,zt,Tt.data):e.texImage2D(i.TEXTURE_2D,Y,Vt,Tt.width,Tt.height,0,bt,zt,Tt.data);x.generateMipmaps=!1}else Kt?(_e&&e.texStorage2D(i.TEXTURE_2D,mt,Vt,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,bt,zt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,it.width,it.height,0,bt,zt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Kt&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Vt,te[0].width,te[0].height,it.depth);for(let Y=0,j=te.length;Y<j;Y++)if(Tt=te[Y],x.format!==Rn)if(bt!==null)if(Kt){if(I)if(x.layerUpdates.size>0){const xt=qc(Tt.width,Tt.height,x.format,x.type);for(const _t of x.layerUpdates){const Yt=Tt.data.subarray(_t*xt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*xt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,_t,Tt.width,Tt.height,1,bt,Yt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Tt.width,Tt.height,it.depth,bt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Vt,Tt.width,Tt.height,it.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Tt.width,Tt.height,it.depth,bt,zt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Vt,Tt.width,Tt.height,it.depth,0,bt,zt,Tt.data)}else{Kt&&_e&&e.texStorage2D(i.TEXTURE_2D,mt,Vt,te[0].width,te[0].height);for(let Y=0,j=te.length;Y<j;Y++)Tt=te[Y],x.format!==Rn?bt!==null?Kt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Tt.width,Tt.height,bt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Vt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Tt.width,Tt.height,bt,zt,Tt.data):e.texImage2D(i.TEXTURE_2D,Y,Vt,Tt.width,Tt.height,0,bt,zt,Tt.data)}else if(x.isDataArrayTexture)if(Kt){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Vt,it.width,it.height,it.depth),I)if(x.layerUpdates.size>0){const Y=qc(it.width,it.height,x.format,x.type);for(const j of x.layerUpdates){const xt=it.data.subarray(j*Y/it.data.BYTES_PER_ELEMENT,(j+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,bt,zt,xt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,zt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,it.width,it.height,it.depth,0,bt,zt,it.data);else if(x.isData3DTexture)Kt?(_e&&e.texStorage3D(i.TEXTURE_3D,mt,Vt,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,zt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,it.width,it.height,it.depth,0,bt,zt,it.data);else if(x.isFramebufferTexture){if(_e)if(Kt)e.texStorage2D(i.TEXTURE_2D,mt,Vt,it.width,it.height);else{let Y=it.width,j=it.height;for(let xt=0;xt<mt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Vt,Y,j,0,bt,zt,null),Y>>=1,j>>=1}}else if(te.length>0){if(Kt&&_e){const Y=yt(te[0]);e.texStorage2D(i.TEXTURE_2D,mt,Vt,Y.width,Y.height)}for(let Y=0,j=te.length;Y<j;Y++)Tt=te[Y],Kt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,bt,zt,Tt):e.texImage2D(i.TEXTURE_2D,Y,Vt,bt,zt,Tt);x.generateMipmaps=!1}else if(Kt){if(_e){const Y=yt(it);e.texStorage2D(i.TEXTURE_2D,mt,Vt,Y.width,Y.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,zt,it)}else e.texImage2D(i.TEXTURE_2D,0,Vt,bt,zt,it);g(x)&&p(K),Ct.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function st(A,x,B){if(x.image.length!==6)return;const K=le(A,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const J=n.get(et);if(et.version!==J.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const Ct=ne.getPrimaries(ne.workingColorSpace),pt=x.colorSpace===di?null:ne.getPrimaries(x.colorSpace),St=x.colorSpace===di||Ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const jt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,bt=[];for(let j=0;j<6;j++)!jt&&!it?bt[j]=M(x.image[j],!0,r.maxCubemapSize):bt[j]=it?x.image[j].image:x.image[j],bt[j]=Bt(x,bt[j]);const zt=bt[0],Vt=s.convert(x.format,x.colorSpace),Tt=s.convert(x.type),te=E(x.internalFormat,Vt,Tt,x.colorSpace),Kt=x.isVideoTexture!==!0,_e=J.__version===void 0||K===!0,I=et.dataReady;let mt=U(x,zt);Xt(i.TEXTURE_CUBE_MAP,x);let Y;if(jt){Kt&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,te,zt.width,zt.height);for(let j=0;j<6;j++){Y=bt[j].mipmaps;for(let xt=0;xt<Y.length;xt++){const _t=Y[xt];x.format!==Rn?Vt!==null?Kt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,0,0,_t.width,_t.height,Vt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,te,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,0,0,_t.width,_t.height,Vt,Tt,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,te,_t.width,_t.height,0,Vt,Tt,_t.data)}}}else{if(Y=x.mipmaps,Kt&&_e){Y.length>0&&mt++;const j=yt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,te,j.width,j.height)}for(let j=0;j<6;j++)if(it){Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,bt[j].width,bt[j].height,Vt,Tt,bt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,bt[j].width,bt[j].height,0,Vt,Tt,bt[j].data);for(let xt=0;xt<Y.length;xt++){const Yt=Y[xt].image[j].image;Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,0,0,Yt.width,Yt.height,Vt,Tt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,te,Yt.width,Yt.height,0,Vt,Tt,Yt.data)}}else{Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Vt,Tt,bt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,Vt,Tt,bt[j]);for(let xt=0;xt<Y.length;xt++){const _t=Y[xt];Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,0,0,Vt,Tt,_t.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,te,Vt,Tt,_t.image[j])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),J.__version=et.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Rt(A,x,B,K,et,J){const Ct=s.convert(B.format,B.colorSpace),pt=s.convert(B.type),St=E(B.internalFormat,Ct,pt,B.colorSpace),jt=n.get(x),it=n.get(B);if(it.__renderTarget=x,!jt.__hasExternalTextures){const bt=Math.max(1,x.width>>J),zt=Math.max(1,x.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,St,bt,zt,x.depth,0,Ct,pt,null):e.texImage2D(et,J,St,bt,zt,0,Ct,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,it.__webglTexture,0,nt(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,it.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(A,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,et=K&&K.isDepthTexture?K.type:null,J=v(x.stencilBuffer,et),Ct=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=nt(x);Et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,J,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,A)}else{const K=x.textures;for(let et=0;et<K.length;et++){const J=K[et],Ct=s.convert(J.format,J.colorSpace),pt=s.convert(J.type),St=E(J.internalFormat,Ct,pt,J.colorSpace),jt=nt(x);B&&Et(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,St,x.width,x.height):Et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,St,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,St,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const et=K.__webglTexture,J=nt(x);if(x.depthTexture.format===dr)Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(x.depthTexture.format===Sr)Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function kt(A){const x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ft(x.__webglFramebuffer,A)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),ct(x.__webglDepthbuffer[K],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ct(x.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,x,B){const K=n.get(A);x!==void 0&&Rt(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&kt(A)}function ee(A){const x=A.texture,B=n.get(A),K=n.get(x);A.addEventListener("dispose",R);const et=A.textures,J=A.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,a.memory.textures++),J){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let St=0;St<x.mipmaps.length;St++)B.__webglFramebuffer[pt][St]=i.createFramebuffer()}else B.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<x.mipmaps.length;pt++)B.__webglFramebuffer[pt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let pt=0,St=et.length;pt<St;pt++){const jt=n.get(et[pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Et(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){const St=et[pt];B.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);const jt=s.convert(St.format,St.colorSpace),it=s.convert(St.type),bt=E(St.internalFormat,jt,it,St.colorSpace,A.isXRRenderTarget===!0),zt=nt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,bt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,x);for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)Rt(B.__webglFramebuffer[pt][St],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,St);else Rt(B.__webglFramebuffer[pt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let pt=0,St=et.length;pt<St;pt++){const jt=et[pt],it=n.get(jt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Xt(i.TEXTURE_2D,jt),Rt(B.__webglFramebuffer,A,jt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),g(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,K.__webglTexture),Xt(pt,x),x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)Rt(B.__webglFramebuffer[St],A,x,i.COLOR_ATTACHMENT0,pt,St);else Rt(B.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,pt,0);g(x)&&p(pt),e.unbindTexture()}A.depthBuffer&&kt(A)}function Q(A){const x=A.textures;for(let B=0,K=x.length;B<K;B++){const et=x[B];if(g(et)){const J=T(A),Ct=n.get(et).__webglTexture;e.bindTexture(J,Ct),p(J),e.unbindTexture()}}}const rt=[],w=[];function Ut(A){if(A.samples>0){if(Et(A)===!1){const x=A.textures,B=A.width,K=A.height;let et=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(A),pt=x.length>1;if(pt)for(let St=0;St<x.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let St=0;St<x.length;St++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);const jt=n.get(x[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,et,i.NEAREST),l===!0&&(rt.length=0,w.length=0,rt.push(i.COLOR_ATTACHMENT0+St),A.depthBuffer&&A.resolveDepthBuffer===!1&&(rt.push(J),w.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let St=0;St<x.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);const jt=n.get(x[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function nt(A){return Math.min(r.maxSamples,A.samples)}function Et(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ut(A){const x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Bt(A,x){const B=A.colorSpace,K=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Tr&&B!==di&&(ne.getTransfer(B)===pe?(K!==Rn||et!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=Gt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Et}function i_(i,t){function e(n,r=di){let s;const a=ne.getTransfer(r);if(n===ii)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.BYTE;if(n===Fu)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===cs)return i.HALF_FLOAT;if(n===Bu)return i.ALPHA;if(n===zu)return i.RGB;if(n===Rn)return i.RGBA;if(n===Hu)return i.LUMINANCE;if(n===Gu)return i.LUMINANCE_ALPHA;if(n===dr)return i.DEPTH_COMPONENT;if(n===Sr)return i.DEPTH_STENCIL;if(n===xa)return i.RED;if(n===El)return i.RED_INTEGER;if(n===Vu)return i.RG;if(n===bl)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===js||n===Qs||n===ta||n===ea)if(a===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Uo||n===No||n===Fo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===No)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Bo||n===zo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oo||n===Bo)return a===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zo)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ho||n===Go||n===Vo||n===ko||n===Wo||n===Xo||n===Yo||n===qo||n===Zo||n===Ko||n===Jo||n===$o||n===jo||n===Qo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ho)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zo)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jo)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===na||n===tl||n===el)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===na)return a===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ku||n===nl||n===il||n===rl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===na)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class r_ extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xe extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s_={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,n),p=this._getHandJoint(c,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const a_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ze,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:a_,fragmentShader:o_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c_ extends Ar{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null;const M=new l_,g=e.getContextAttributes();let p=null,T=null;const E=[],v=[],U=new lt;let C=null;const R=new mn;R.viewport=new Ae;const L=new mn;L.viewport=new Ae;const b=[R,L],y=new r_;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=E[$];return st===void 0&&(st=new ro,E[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=E[$];return st===void 0&&(st=new ro,E[$]=st),st.getGripSpace()},this.getHand=function($){let st=E[$];return st===void 0&&(st=new ro,E[$]=st),st.getHandSpace()};function z($){const st=v.indexOf($.inputSource);if(st===-1)return;const Rt=E[st];Rt!==void 0&&(Rt.update($.inputSource,$.frame,c||a),Rt.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",q);for(let $=0;$<E.length;$++){const st=v[$];st!==null&&(v[$]=null,E[$].disconnect(st))}P=null,H=null,M.reset(),t.setRenderTarget(p),m=null,d=null,h=null,r=null,T=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(U),r.renderState.layers===void 0){const st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Oi(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,Rt=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?Sr:dr,Rt=g.stencil?yr:Fi);const Ft={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(Ft),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Oi(d.textureWidth,d.textureHeight,{format:Rn,type:ii,depthTexture:new sf(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q($){for(let st=0;st<$.removed.length;st++){const Rt=$.removed[st],ct=v.indexOf(Rt);ct>=0&&(v[ct]=null,E[ct].disconnect(Rt))}for(let st=0;st<$.added.length;st++){const Rt=$.added[st];let ct=v.indexOf(Rt);if(ct===-1){for(let kt=0;kt<E.length;kt++)if(kt>=v.length){v.push(Rt),ct=kt;break}else if(v[kt]===null){v[kt]=Rt,ct=kt;break}if(ct===-1)break}const Ft=E[ct];Ft&&Ft.connect(Rt)}}const X=new D,tt=new D;function W($,st,Rt){X.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(Rt.matrixWorld);const ct=X.distanceTo(tt),Ft=st.projectionMatrix.elements,kt=Rt.projectionMatrix.elements,Gt=Ft[14]/(Ft[10]-1),ee=Ft[14]/(Ft[10]+1),Q=(Ft[9]+1)/Ft[5],rt=(Ft[9]-1)/Ft[5],w=(Ft[8]-1)/Ft[0],Ut=(kt[8]+1)/kt[0],nt=Gt*w,Et=Gt*Ut,ut=ct/(-w+Ut),Bt=ut*-w;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Bt),$.translateZ(ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const yt=Gt+ut,A=ee+ut,x=nt-Bt,B=Et+(ct-Bt),K=Q*ee/A*yt,et=rt*ee/A*yt;$.projectionMatrix.makePerspective(x,B,K,et,yt,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ht($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let st=$.near,Rt=$.far;M.texture!==null&&(M.depthNear>0&&(st=M.depthNear),M.depthFar>0&&(Rt=M.depthFar)),y.near=L.near=R.near=st,y.far=L.far=R.far=Rt,(P!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,H=y.far),R.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,y.layers.mask=R.layers.mask|L.layers.mask;const ct=$.parent,Ft=y.cameras;ht(y,ct);for(let kt=0;kt<Ft.length;kt++)ht(Ft[kt],ct);Ft.length===2?W(y,R,L):y.projectionMatrix.copy(R.projectionMatrix),Mt($,y,ct)};function Mt($,st,Rt){Rt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(Rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=al*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let At=null;function Xt($,st){if(u=st.getViewerPose(c||a),_=st,u!==null){const Rt=u.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let ct=!1;Rt.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let kt=0;kt<Rt.length;kt++){const Gt=Rt[kt];let ee=null;if(m!==null)ee=m.getViewport(Gt);else{const rt=h.getViewSubImage(d,Gt);ee=rt.viewport,kt===0&&(t.setRenderTargetTextures(T,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(T))}let Q=b[kt];Q===void 0&&(Q=new mn,Q.layers.enable(kt),Q.viewport=new Ae,b[kt]=Q),Q.matrix.fromArray(Gt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Gt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),kt===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(Q)}const Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const kt=h.getDepthInformation(Rt[0]);kt&&kt.isValid&&kt.texture&&M.init(t,kt,r.renderState)}}for(let Rt=0;Rt<E.length;Rt++){const ct=v[Rt],Ft=E[Rt];ct!==null&&Ft!==void 0&&Ft.update(ct,st,c||a)}At&&At($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const le=new nf;le.setAnimationLoop(Xt),this.setAnimationLoop=function($){At=$},this.dispose=function(){}}}const Ai=new Bn,u_=new de;function f_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,T,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),M(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,T,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=t.get(p),E=T.envMap,v=T.envMapRotation;E&&(g.envMap.value=E,Ai.copy(v),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),g.envMapRotation.value.setFromMatrix4(u_.makeRotationFromEuler(Ai)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,T,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){const T=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function h_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const v=E.program;n.uniformBlockBinding(T,v)}function c(T,E){let v=r[T.id];v===void 0&&(_(T),v=u(T),r[T.id]=v,T.addEventListener("dispose",g));const U=E.program;n.updateUBOMapping(T,U);const C=t.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function u(T){const E=h();T.__bindingPointIndex=E;const v=i.createBuffer(),U=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=r[T.id],v=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,R=v.length;C<R;C++){const L=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,y=L.length;b<y;b++){const P=L[b];if(m(P,C,b,U)===!0){const H=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let q=0;q<z.length;q++){const X=z[q],tt=M(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,H+k,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,k),k+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,E,v,U){const C=T.value,R=E+"_"+v;if(U[R]===void 0)return typeof C=="number"||typeof C=="boolean"?U[R]=C:U[R]=C.clone(),!0;{const L=U[R];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return U[R]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function _(T){const E=T.uniforms;let v=0;const U=16;for(let R=0,L=E.length;R<L;R++){const b=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,P=b.length;y<P;y++){const H=b[y],z=Array.isArray(H.value)?H.value:[H.value];for(let k=0,q=z.length;k<q;k++){const X=z[k],tt=M(X),W=v%U,ht=W%tt.boundary,Mt=W+ht;v+=ht,Mt!==0&&U-Mt<tt.storage&&(v+=U-Mt),H.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=tt.storage}}}const C=v%U;return C>0&&(v+=U-C),T.__size=v,T.__cache={},this}function M(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function g(T){const E=T.target;E.removeEventListener("dispose",g);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class d_{constructor(t={}){const{canvas:e=td(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),M=new Int32Array(4);let g=null,p=null;const T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=gi,this.toneMappingExposure=1;const v=this;let U=!1,C=0,R=0,L=null,b=-1,y=null;const P=new Ae,H=new Ae;let z=null;const k=new $t(0);let q=0,X=e.width,tt=e.height,W=1,ht=null,Mt=null;const At=new Ae(0,0,X,tt),Xt=new Ae(0,0,X,tt);let le=!1;const $=new Al;let st=!1,Rt=!1;const ct=new de,Ft=new de,kt=new D,Gt=new Ae,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function rt(){return L===null?W:1}let w=n;function Ut(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),w===null){const N="webgl2";if(w=Ut(N,S),w===null)throw Ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let nt,Et,ut,Bt,yt,A,x,B,K,et,J,Ct,pt,St,jt,it,bt,zt,Vt,Tt,te,Kt,_e,I;function mt(){nt=new v0(w),nt.init(),Kt=new i_(w,nt),Et=new h0(w,nt,t,Kt),ut=new t_(w,nt),Et.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),Bt=new y0(w),yt=new zg,A=new n_(w,nt,ut,yt,Et,Kt,Bt),x=new p0(v),B=new _0(v),K=new Rd(w),_e=new u0(w,K),et=new x0(w,K,Bt,_e),J=new E0(w,et,K,Bt),Vt=new S0(w,Et,A),it=new d0(yt),Ct=new Bg(v,x,B,nt,Et,_e,it),pt=new f_(v,yt),St=new Gg,jt=new qg(nt),zt=new c0(v,x,B,ut,J,m,l),bt=new jg(v,J,Et),I=new h_(w,Bt,Et,ut),Tt=new f0(w,nt,Bt),te=new M0(w,nt,Bt),Bt.programs=Ct.programs,v.capabilities=Et,v.extensions=nt,v.properties=yt,v.renderLists=St,v.shadowMap=bt,v.state=ut,v.info=Bt}mt();const Y=new c_(v,w);this.xr=Y,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(X,tt,!1))},this.getSize=function(S){return S.set(X,tt)},this.setSize=function(S,N,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,tt=N,e.width=Math.floor(S*W),e.height=Math.floor(N*W),G===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(X*W,tt*W).floor()},this.setDrawingBufferSize=function(S,N,G){X=S,tt=N,W=G,e.width=Math.floor(S*G),e.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(At)},this.setViewport=function(S,N,G,V){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,N,G,V),ut.viewport(P.copy(At).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(Xt)},this.setScissor=function(S,N,G,V){S.isVector4?Xt.set(S.x,S.y,S.z,S.w):Xt.set(S,N,G,V),ut.scissor(H.copy(Xt).multiplyScalar(W).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){ut.setScissorTest(le=S)},this.setOpaqueSort=function(S){ht=S},this.setTransparentSort=function(S){Mt=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(S=!0,N=!0,G=!0){let V=0;if(S){let F=!1;if(L!==null){const at=L.texture.format;F=at===Tl||at===bl||at===El}if(F){const at=L.texture.type,vt=at===ii||at===Fi||at===rs||at===yr||at===yl||at===Sl,Lt=zt.getClearColor(),Dt=zt.getClearAlpha(),Wt=Lt.r,qt=Lt.g,It=Lt.b;vt?(_[0]=Wt,_[1]=qt,_[2]=It,_[3]=Dt,w.clearBufferuiv(w.COLOR,0,_)):(M[0]=Wt,M[1]=qt,M[2]=It,M[3]=Dt,w.clearBufferiv(w.COLOR,0,M))}else V|=w.COLOR_BUFFER_BIT}N&&(V|=w.DEPTH_BUFFER_BIT),G&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),St.dispose(),jt.dispose(),yt.dispose(),x.dispose(),B.dispose(),J.dispose(),_e.dispose(),I.dispose(),Ct.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Bl),Y.removeEventListener("sessionend",zl),Mi.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=Bt.autoReset,N=bt.enabled,G=bt.autoUpdate,V=bt.needsUpdate,F=bt.type;mt(),Bt.autoReset=S,bt.enabled=N,bt.autoUpdate=G,bt.needsUpdate=V,bt.type=F}function _t(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Yt(S){const N=S.target;N.removeEventListener("dispose",Yt),be(N)}function be(S){He(S),yt.remove(S)}function He(S){const N=yt.get(S).programs;N!==void 0&&(N.forEach(function(G){Ct.releaseProgram(G)}),S.isShaderMaterial&&Ct.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,V,F,at){N===null&&(N=ee);const vt=F.isMesh&&F.matrixWorld.determinant()<0,Lt=Lf(S,N,G,V,F);ut.setMaterial(V,vt);let Dt=G.index,Wt=1;if(V.wireframe===!0){if(Dt=et.getWireframeAttribute(G),Dt===void 0)return;Wt=2}const qt=G.drawRange,It=G.attributes.position;let ie=qt.start*Wt,ve=(qt.start+qt.count)*Wt;at!==null&&(ie=Math.max(ie,at.start*Wt),ve=Math.min(ve,(at.start+at.count)*Wt)),Dt!==null?(ie=Math.max(ie,0),ve=Math.min(ve,Dt.count)):It!=null&&(ie=Math.max(ie,0),ve=Math.min(ve,It.count));const Me=ve-ie;if(Me<0||Me===1/0)return;_e.setup(F,V,Lt,G,Dt);let je,ce=Tt;if(Dt!==null&&(je=K.get(Dt),ce=te,ce.setIndex(je)),F.isMesh)V.wireframe===!0?(ut.setLineWidth(V.wireframeLinewidth*rt()),ce.setMode(w.LINES)):ce.setMode(w.TRIANGLES);else if(F.isLine){let Nt=V.linewidth;Nt===void 0&&(Nt=1),ut.setLineWidth(Nt*rt()),F.isLineSegments?ce.setMode(w.LINES):F.isLineLoop?ce.setMode(w.LINE_LOOP):ce.setMode(w.LINE_STRIP)}else F.isPoints?ce.setMode(w.POINTS):F.isSprite&&ce.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ce.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ce.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Nt=F._multiDrawStarts,Vn=F._multiDrawCounts,ue=F._multiDrawCount,yn=Dt?K.get(Dt).bytesPerElement:1,Gi=yt.get(V).currentProgram.getUniforms();for(let an=0;an<ue;an++)Gi.setValue(w,"_gl_DrawID",an),ce.render(Nt[an]/yn,Vn[an])}else if(F.isInstancedMesh)ce.renderInstances(ie,Me,F.count);else if(G.isInstancedBufferGeometry){const Nt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Vn=Math.min(G.instanceCount,Nt);ce.renderInstances(ie,Me,Vn)}else ce.render(ie,Me)};function fe(S,N,G){S.transparent===!0&&S.side===Ln&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,gs(S,N,G),S.side=vi,S.needsUpdate=!0,gs(S,N,G),S.side=Ln):gs(S,N,G)}this.compile=function(S,N,G=null){G===null&&(G=S),p=jt.get(G),p.init(N),E.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==G&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let vt=0;vt<at.length;vt++){const Lt=at[vt];fe(Lt,G,F),V.add(Lt)}else fe(at,G,F),V.add(at)}),E.pop(),p=null,V},this.compileAsync=function(S,N,G=null){const V=this.compile(S,N,G);return new Promise(F=>{function at(){if(V.forEach(function(vt){yt.get(vt).currentProgram.isReady()&&V.delete(vt)}),V.size===0){F(S);return}setTimeout(at,10)}nt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Mn=null;function Gn(S){Mn&&Mn(S)}function Bl(){Mi.stop()}function zl(){Mi.start()}const Mi=new nf;Mi.setAnimationLoop(Gn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(S){Mn=S,Y.setAnimationLoop(S),S===null?Mi.stop():Mi.start()},Y.addEventListener("sessionstart",Bl),Y.addEventListener("sessionend",zl),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,L),p=jt.get(S,E.length),p.init(N),E.push(p),Ft.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Ft),Rt=this.localClippingEnabled,st=it.init(this.clippingPlanes,Rt),g=St.get(S,T.length),g.init(),T.push(g),Y.enabled===!0&&Y.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&Ta(at,N,-1/0,v.sortObjects)}Ta(S,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ht,Mt),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&zt.addToRenderList(g,S),this.info.render.frame++,st===!0&&it.beginShadows();const G=p.state.shadowsArray;bt.render(G,S,N),st===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,F=g.transmissive;if(p.setupLights(),N.isArrayCamera){const at=N.cameras;if(F.length>0)for(let vt=0,Lt=at.length;vt<Lt;vt++){const Dt=at[vt];Gl(V,F,S,Dt)}Q&&zt.render(S);for(let vt=0,Lt=at.length;vt<Lt;vt++){const Dt=at[vt];Hl(g,S,Dt,Dt.viewport)}}else F.length>0&&Gl(V,F,S,N),Q&&zt.render(S),Hl(g,S,N);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,N),_e.resetDefaultState(),b=-1,y=null,E.pop(),E.length>0?(p=E[E.length-1],st===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function Ta(S,N,G,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){V&&Gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ft);const vt=J.update(S),Lt=S.material;Lt.visible&&g.push(S,vt,Lt,G,Gt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){const vt=J.update(S),Lt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Gt.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Gt.copy(vt.boundingSphere.center)),Gt.applyMatrix4(S.matrixWorld).applyMatrix4(Ft)),Array.isArray(Lt)){const Dt=vt.groups;for(let Wt=0,qt=Dt.length;Wt<qt;Wt++){const It=Dt[Wt],ie=Lt[It.materialIndex];ie&&ie.visible&&g.push(S,vt,ie,G,Gt.z,It)}}else Lt.visible&&g.push(S,vt,Lt,G,Gt.z,null)}}const at=S.children;for(let vt=0,Lt=at.length;vt<Lt;vt++)Ta(at[vt],N,G,V)}function Hl(S,N,G,V){const F=S.opaque,at=S.transmissive,vt=S.transparent;p.setupLightsView(G),st===!0&&it.setGlobalState(v.clippingPlanes,G),V&&ut.viewport(P.copy(V)),F.length>0&&ms(F,N,G),at.length>0&&ms(at,N,G),vt.length>0&&ms(vt,N,G),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Gl(S,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Oi(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?cs:ii,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const at=p.state.transmissionRenderTarget[V.id],vt=V.viewport||P;at.setSize(vt.z,vt.w);const Lt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(k),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Q&&zt.render(G);const Dt=v.toneMapping;v.toneMapping=gi;const Wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),st===!0&&it.setGlobalState(v.clippingPlanes,V),ms(S,G,V),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),nt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let It=0,ie=N.length;It<ie;It++){const ve=N[It],Me=ve.object,je=ve.geometry,ce=ve.material,Nt=ve.group;if(ce.side===Ln&&Me.layers.test(V.layers)){const Vn=ce.side;ce.side=nn,ce.needsUpdate=!0,Vl(Me,G,V,je,ce,Nt),ce.side=Vn,ce.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}v.setRenderTarget(Lt),v.setClearColor(k,q),Wt!==void 0&&(V.viewport=Wt),v.toneMapping=Dt}function ms(S,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,at=S.length;F<at;F++){const vt=S[F],Lt=vt.object,Dt=vt.geometry,Wt=V===null?vt.material:V,qt=vt.group;Lt.layers.test(G.layers)&&Vl(Lt,N,G,Dt,Wt,qt)}}function Vl(S,N,G,V,F,at){S.onBeforeRender(v,N,G,V,F,at),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(v,N,G,V,S,at),F.transparent===!0&&F.side===Ln&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,v.renderBufferDirect(G,N,V,F,S,at),F.side=vi,F.needsUpdate=!0,v.renderBufferDirect(G,N,V,F,S,at),F.side=Ln):v.renderBufferDirect(G,N,V,F,S,at),S.onAfterRender(v,N,G,V,F,at)}function gs(S,N,G){N.isScene!==!0&&(N=ee);const V=yt.get(S),F=p.state.lights,at=p.state.shadowsArray,vt=F.state.version,Lt=Ct.getParameters(S,F.state,at,N,G),Dt=Ct.getProgramCacheKey(Lt);let Wt=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?B:x).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Wt===void 0&&(S.addEventListener("dispose",Yt),Wt=new Map,V.programs=Wt);let qt=Wt.get(Dt);if(qt!==void 0){if(V.currentProgram===qt&&V.lightsStateVersion===vt)return Wl(S,Lt),qt}else Lt.uniforms=Ct.getUniforms(S),S.onBeforeCompile(Lt,v),qt=Ct.acquireProgram(Lt,Dt),Wt.set(Dt,qt),V.uniforms=Lt.uniforms;const It=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=it.uniform),Wl(S,Lt),V.needsLights=If(S),V.lightsStateVersion=vt,V.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=qt,V.uniformsList=null,qt}function kl(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=ia.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Wl(S,N){const G=yt.get(S);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Lf(S,N,G,V,F){N.isScene!==!0&&(N=ee),A.resetTextureUnits();const at=N.fog,vt=V.isMeshStandardMaterial?N.environment:null,Lt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Tr,Dt=(V.isMeshStandardMaterial?B:x).get(V.envMap||vt),Wt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,ve=!!G.morphAttributes.color;let Me=gi;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Me=v.toneMapping);const je=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=je!==void 0?je.length:0,Nt=yt.get(V),Vn=p.state.lights;if(st===!0&&(Rt===!0||S!==y)){const hn=S===y&&V.id===b;it.setState(V,S,hn)}let ue=!1;V.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Vn.state.version||Nt.outputColorSpace!==Lt||F.isBatchedMesh&&Nt.batching===!1||!F.isBatchedMesh&&Nt.batching===!0||F.isBatchedMesh&&Nt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Nt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Nt.instancing===!1||!F.isInstancedMesh&&Nt.instancing===!0||F.isSkinnedMesh&&Nt.skinning===!1||!F.isSkinnedMesh&&Nt.skinning===!0||F.isInstancedMesh&&Nt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Nt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Nt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Nt.instancingMorph===!1&&F.morphTexture!==null||Nt.envMap!==Dt||V.fog===!0&&Nt.fog!==at||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==it.numPlanes||Nt.numIntersection!==it.numIntersection)||Nt.vertexAlphas!==Wt||Nt.vertexTangents!==qt||Nt.morphTargets!==It||Nt.morphNormals!==ie||Nt.morphColors!==ve||Nt.toneMapping!==Me||Nt.morphTargetsCount!==ce)&&(ue=!0):(ue=!0,Nt.__version=V.version);let yn=Nt.currentProgram;ue===!0&&(yn=gs(V,N,F));let Gi=!1,an=!1,Lr=!1;const ye=yn.getUniforms(),Cn=Nt.uniforms;if(ut.useProgram(yn.program)&&(Gi=!0,an=!0,Lr=!0),V.id!==b&&(b=V.id,an=!0),Gi||y!==S){ut.buffers.depth.getReversed()?(ct.copy(S.projectionMatrix),nd(ct),id(ct),ye.setValue(w,"projectionMatrix",ct)):ye.setValue(w,"projectionMatrix",S.projectionMatrix),ye.setValue(w,"viewMatrix",S.matrixWorldInverse);const ri=ye.map.cameraPosition;ri!==void 0&&ri.setValue(w,kt.setFromMatrixPosition(S.matrixWorld)),Et.logarithmicDepthBuffer&&ye.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ye.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,an=!0,Lr=!0)}if(F.isSkinnedMesh){ye.setOptional(w,F,"bindMatrix"),ye.setOptional(w,F,"bindMatrixInverse");const hn=F.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),ye.setValue(w,"boneTexture",hn.boneTexture,A))}F.isBatchedMesh&&(ye.setOptional(w,F,"batchingTexture"),ye.setValue(w,"batchingTexture",F._matricesTexture,A),ye.setOptional(w,F,"batchingIdTexture"),ye.setValue(w,"batchingIdTexture",F._indirectTexture,A),ye.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&ye.setValue(w,"batchingColorTexture",F._colorsTexture,A));const Dr=G.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&Vt.update(F,G,yn),(an||Nt.receiveShadow!==F.receiveShadow)&&(Nt.receiveShadow=F.receiveShadow,ye.setValue(w,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Cn.envMap.value=Dt,Cn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Cn.envMapIntensity.value=N.environmentIntensity),an&&(ye.setValue(w,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&Df(Cn,Lr),at&&V.fog===!0&&pt.refreshFogUniforms(Cn,at),pt.refreshMaterialUniforms(Cn,V,W,tt,p.state.transmissionRenderTarget[S.id]),ia.upload(w,kl(Nt),Cn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ia.upload(w,kl(Nt),Cn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ye.setValue(w,"center",F.center),ye.setValue(w,"modelViewMatrix",F.modelViewMatrix),ye.setValue(w,"normalMatrix",F.normalMatrix),ye.setValue(w,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const hn=V.uniformsGroups;for(let ri=0,si=hn.length;ri<si;ri++){const Xl=hn[ri];I.update(Xl,yn),I.bind(Xl,yn)}}return yn}function Df(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function If(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,N,G){yt.get(S.texture).__webglTexture=N,yt.get(S.depthTexture).__webglTexture=G;const V=yt.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const G=yt.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,G=0){L=S,C=N,R=G;let V=!0,F=null,at=!1,vt=!1;if(S){const Dt=yt.get(S);if(Dt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(w.FRAMEBUFFER,null),V=!1;else if(Dt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Dt.__hasExternalTextures)A.rebindTextures(S,yt.get(S.texture).__webglTexture,yt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const It=S.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&yt.has(It)&&(S.width!==It.image.width||S.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Wt=S.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(vt=!0);const qt=yt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qt[N])?F=qt[N][G]:F=qt[N],at=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?F=yt.get(S).__webglMultisampledFramebuffer:Array.isArray(qt)?F=qt[G]:F=qt,P.copy(S.viewport),H.copy(S.scissor),z=S.scissorTest}else P.copy(At).multiplyScalar(W).floor(),H.copy(Xt).multiplyScalar(W).floor(),z=le;if(ut.bindFramebuffer(w.FRAMEBUFFER,F)&&V&&ut.drawBuffers(S,F),ut.viewport(P),ut.scissor(H),ut.setScissorTest(z),at){const Dt=yt.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+N,Dt.__webglTexture,G)}else if(vt){const Dt=yt.get(S.texture),Wt=N||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Dt.__webglTexture,G||0,Wt)}b=-1},this.readRenderTargetPixels=function(S,N,G,V,F,at,vt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Lt=Lt[vt]),Lt){ut.bindFramebuffer(w.FRAMEBUFFER,Lt);try{const Dt=S.texture,Wt=Dt.format,qt=Dt.type;if(!Et.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&G>=0&&G<=S.height-F&&w.readPixels(N,G,V,F,Kt.convert(Wt),Kt.convert(qt),at)}finally{const Dt=L!==null?yt.get(L).__webglFramebuffer:null;ut.bindFramebuffer(w.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,N,G,V,F,at,vt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Lt=Lt[vt]),Lt){const Dt=S.texture,Wt=Dt.format,qt=Dt.type;if(!Et.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-V&&G>=0&&G<=S.height-F){ut.bindFramebuffer(w.FRAMEBUFFER,Lt);const It=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,It),w.bufferData(w.PIXEL_PACK_BUFFER,at.byteLength,w.STREAM_READ),w.readPixels(N,G,V,F,Kt.convert(Wt),Kt.convert(qt),0);const ie=L!==null?yt.get(L).__webglFramebuffer:null;ut.bindFramebuffer(w.FRAMEBUFFER,ie);const ve=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await ed(w,ve,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,It),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,at),w.deleteBuffer(It),w.deleteSync(ve),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,G=0){S.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-G),F=Math.floor(S.image.width*V),at=Math.floor(S.image.height*V),vt=N!==null?N.x:0,Lt=N!==null?N.y:0;A.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,G,0,0,vt,Lt,F,at),ut.unbindTexture()},this.copyTextureToTexture=function(S,N,G=null,V=null,F=0){S.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,G=null);let at,vt,Lt,Dt,Wt,qt,It,ie,ve;const Me=S.isCompressedTexture?S.mipmaps[F]:S.image;G!==null?(at=G.max.x-G.min.x,vt=G.max.y-G.min.y,Lt=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,Wt=G.min.y,qt=G.isBox3?G.min.z:0):(at=Me.width,vt=Me.height,Lt=Me.depth||1,Dt=0,Wt=0,qt=0),V!==null?(It=V.x,ie=V.y,ve=V.z):(It=0,ie=0,ve=0);const je=Kt.convert(N.format),ce=Kt.convert(N.type);let Nt;N.isData3DTexture?(A.setTexture3D(N,0),Nt=w.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Nt=w.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Nt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,N.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,N.unpackAlignment);const Vn=w.getParameter(w.UNPACK_ROW_LENGTH),ue=w.getParameter(w.UNPACK_IMAGE_HEIGHT),yn=w.getParameter(w.UNPACK_SKIP_PIXELS),Gi=w.getParameter(w.UNPACK_SKIP_ROWS),an=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Me.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Me.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Dt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Wt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,qt);const Lr=S.isDataArrayTexture||S.isData3DTexture,ye=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Cn=yt.get(S),Dr=yt.get(N),hn=yt.get(Cn.__renderTarget),ri=yt.get(Dr.__renderTarget);ut.bindFramebuffer(w.READ_FRAMEBUFFER,hn.__webglFramebuffer),ut.bindFramebuffer(w.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let si=0;si<Lt;si++)Lr&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,yt.get(S).__webglTexture,F,qt+si),S.isDepthTexture?(ye&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,yt.get(N).__webglTexture,F,ve+si),w.blitFramebuffer(Dt,Wt,at,vt,It,ie,at,vt,w.DEPTH_BUFFER_BIT,w.NEAREST)):ye?w.copyTexSubImage3D(Nt,F,It,ie,ve+si,Dt,Wt,at,vt):w.copyTexSubImage2D(Nt,F,It,ie,ve+si,Dt,Wt,at,vt);ut.bindFramebuffer(w.READ_FRAMEBUFFER,null),ut.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ye?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(Nt,F,It,ie,ve,at,vt,Lt,je,ce,Me.data):N.isCompressedArrayTexture?w.compressedTexSubImage3D(Nt,F,It,ie,ve,at,vt,Lt,je,Me.data):w.texSubImage3D(Nt,F,It,ie,ve,at,vt,Lt,je,ce,Me):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,F,It,ie,at,vt,je,ce,Me.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,F,It,ie,Me.width,Me.height,je,Me.data):w.texSubImage2D(w.TEXTURE_2D,F,It,ie,at,vt,je,ce,Me);w.pixelStorei(w.UNPACK_ROW_LENGTH,Vn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ue),w.pixelStorei(w.UNPACK_SKIP_PIXELS,yn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Gi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,an),F===0&&N.generateMipmaps&&w.generateMipmap(Nt),ut.unbindTexture()},this.copyTextureToTexture3D=function(S,N,G=null,V=null,F=0){return S.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0),Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,G,V,F)},this.initRenderTarget=function(S){yt.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),ut.unbindTexture()},this.resetState=function(){C=0,R=0,L=null,ut.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Rl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class p_ extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class m_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sl,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new D;class fa{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),r=me(r,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cl extends Rr{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ir;const Br=new D,rr=new D,sr=new D,ar=new lt,zr=new lt,uf=new de,Vs=new D,Hr=new D,ks=new D,Zc=new lt,so=new lt,Kc=new lt;class ff extends Fe{constructor(t=new Cl){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new sn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new m_(e,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new fa(n,3,0,!1)),ir.setAttribute("uv",new fa(n,2,3,!1))}this.geometry=ir,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-sr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Ws(Vs.set(-.5,-.5,0),sr,a,rr,r,s),Ws(Hr.set(.5,-.5,0),sr,a,rr,r,s),Ws(ks.set(.5,.5,0),sr,a,rr,r,s),Zc.set(0,0),so.set(1,0),Kc.set(1,1);let o=t.ray.intersectTriangle(Vs,Hr,ks,!1,Br);if(o===null&&(Ws(Hr.set(-.5,.5,0),sr,a,rr,r,s),so.set(0,1),o=t.ray.intersectTriangle(Vs,ks,Hr,!1,Br),o===null))return;const l=t.ray.origin.distanceTo(Br);l<t.near||l>t.far||e.push({distance:l,point:Br.clone(),uv:gn.getInterpolation(Br,Vs,Hr,ks,Zc,so,Kc,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ws(i,t,e,n,r,s){ar.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(zr.x=s*ar.x-r*ar.y,zr.y=r*ar.x+s*ar.y):zr.copy(ar),i.copy(t),i.x+=zr.x,i.y+=zr.y,i.applyMatrix4(uf)}class hf extends Ze{constructor(t=null,e=1,n=1,r,s,a,o,l,c=$e,u=$e,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jc extends rn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const or=new de,$c=new de,Xs=[],jc=new Hi,g_=new de,Gr=new Se,Vr=new us;class ll extends Se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,g_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),jc.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union(jc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),Vr.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),t.ray.intersectsSphere(Vr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,or),$c.multiplyMatrices(n,or),Gr.matrixWorld=$c,Gr.raycast(t,Xs);for(let a=0,o=Xs.length;a<o;a++){const l=Xs[a];l.instanceId=s,l.object=this,e.push(l)}Xs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new hf(new Float32Array(r*this.count),r,this.count,xa,Fn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class __ extends Ze{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,m=(a-u)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new lt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],s=[],a=[],o=new D,l=new de;for(let m=0;m<=t;m++){const _=m/t;r[m]=this.getTangentAt(_,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ye(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Ye(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pl extends Hn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*u-m*h+this.aX,c=d*h+m*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class v_ extends Pl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,m*=u,r(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Ys=new D,ao=new Ll,oo=new Ll,lo=new Ll;class x_ extends Hn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Ys.subVectors(r[0],r[1]).add(r[0]),c=Ys);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Ys.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),m),M=Math.pow(h.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(u),m);M<1e-4&&(M=1),_<1e-4&&(_=M),g<1e-4&&(g=M),ao.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,M,g),oo.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,M,g),lo.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,M,g)}else this.curveType==="catmullrom"&&(ao.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),oo.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),lo.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ao.calc(l),oo.calc(l),lo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function M_(i,t){const e=1-i;return e*e*t}function y_(i,t){return 2*(1-i)*i*t}function S_(i,t){return i*i*t}function Qr(i,t,e,n){return M_(i,t)+y_(i,e)+S_(i,n)}function E_(i,t){const e=1-i;return e*e*e*t}function b_(i,t){const e=1-i;return 3*e*e*i*t}function T_(i,t){return 3*(1-i)*i*i*t}function A_(i,t){return i*i*i*t}function ts(i,t,e,n,r){return E_(i,t)+b_(i,e)+T_(i,n)+A_(i,r)}class df extends Hn{constructor(t=new lt,e=new lt,n=new lt,r=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new lt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ts(t,r.x,s.x,a.x,o.x),ts(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w_ extends Hn{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ts(t,r.x,s.x,a.x,o.x),ts(t,r.y,s.y,a.y,o.y),ts(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pf extends Hn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R_ extends Hn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mf extends Hn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Qr(t,r.x,s.x,a.x),Qr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C_ extends Hn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Qr(t,r.x,s.x,a.x),Qr(t,r.y,s.y,a.y),Qr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gf extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Qc(o,l.x,c.x,u.x,h.x),Qc(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new lt().fromArray(r))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:v_,CatmullRomCurve3:x_,CubicBezierCurve:df,CubicBezierCurve3:w_,EllipseCurve:Pl,LineCurve:pf,LineCurve3:R_,QuadraticBezierCurve:mf,QuadraticBezierCurve3:C_,SplineCurve:gf});class P_ extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new cl[r.type]().fromJSON(r))}return this}}class tu extends P_{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new pf(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new mf(this.currentPoint.clone(),new lt(t,e),new lt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new df(this.currentPoint.clone(),new lt(t,e),new lt(n,r),new lt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new Pl(t,e,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sa extends sn{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],m=[];let _=0;const M=[],g=n/2;let p=0;T(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(m,2));function T(){const v=new D,U=new D;let C=0;const R=(e-t)/n;for(let L=0;L<=s;L++){const b=[],y=L/s,P=y*(e-t)+t;for(let H=0;H<=r;H++){const z=H/r,k=z*l+o,q=Math.sin(k),X=Math.cos(k);U.x=P*q,U.y=-y*n+g,U.z=P*X,h.push(U.x,U.y,U.z),v.set(q,R,X).normalize(),d.push(v.x,v.y,v.z),m.push(z,1-y),b.push(_++)}M.push(b)}for(let L=0;L<r;L++)for(let b=0;b<s;b++){const y=M[b][L],P=M[b+1][L],H=M[b+1][L+1],z=M[b][L+1];(t>0||b!==0)&&(u.push(y,P,z),C+=3),(e>0||b!==s-1)&&(u.push(P,H,z),C+=3)}c.addGroup(p,C,0),p+=C}function E(v){const U=_,C=new lt,R=new D;let L=0;const b=v===!0?t:e,y=v===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,g*y,0),d.push(0,y,0),m.push(.5,.5),_++;const P=_;for(let H=0;H<=r;H++){const k=H/r*l+o,q=Math.cos(k),X=Math.sin(k);R.x=b*X,R.y=g*y,R.z=b*q,h.push(R.x,R.y,R.z),d.push(0,y,0),C.x=q*.5+.5,C.y=X*.5*y+.5,m.push(C.x,C.y),_++}for(let H=0;H<r;H++){const z=U+H,k=P+H;v===!0?u.push(k,k+1,z):u.push(k+1,k,z),L+=3}c.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dl extends Sa{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Dl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Il extends sn{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(s.slice(),3)),this.setAttribute("uv",new Re(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const E=new D,v=new D,U=new D;for(let C=0;C<e.length;C+=3)m(e[C+0],E),m(e[C+1],v),m(e[C+2],U),l(E,v,U,T)}function l(T,E,v,U){const C=U+1,R=[];for(let L=0;L<=C;L++){R[L]=[];const b=T.clone().lerp(v,L/C),y=E.clone().lerp(v,L/C),P=C-L;for(let H=0;H<=P;H++)H===0&&L===C?R[L][H]=b:R[L][H]=b.clone().lerp(y,H/P)}for(let L=0;L<C;L++)for(let b=0;b<2*(C-L)-1;b++){const y=Math.floor(b/2);b%2===0?(d(R[L][y+1]),d(R[L+1][y]),d(R[L][y])):(d(R[L][y+1]),d(R[L+1][y+1]),d(R[L+1][y]))}}function c(T){const E=new D;for(let v=0;v<s.length;v+=3)E.x=s[v+0],E.y=s[v+1],E.z=s[v+2],E.normalize().multiplyScalar(T),s[v+0]=E.x,s[v+1]=E.y,s[v+2]=E.z}function u(){const T=new D;for(let E=0;E<s.length;E+=3){T.x=s[E+0],T.y=s[E+1],T.z=s[E+2];const v=g(T)/2/Math.PI+.5,U=p(T)/Math.PI+.5;a.push(v,1-U)}_(),h()}function h(){for(let T=0;T<a.length;T+=6){const E=a[T+0],v=a[T+2],U=a[T+4],C=Math.max(E,v,U),R=Math.min(E,v,U);C>.9&&R<.1&&(E<.2&&(a[T+0]+=1),v<.2&&(a[T+2]+=1),U<.2&&(a[T+4]+=1))}}function d(T){s.push(T.x,T.y,T.z)}function m(T,E){const v=T*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function _(){const T=new D,E=new D,v=new D,U=new D,C=new lt,R=new lt,L=new lt;for(let b=0,y=0;b<s.length;b+=9,y+=6){T.set(s[b+0],s[b+1],s[b+2]),E.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),C.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),U.copy(T).add(E).add(v).divideScalar(3);const P=g(U);M(C,y+0,T,P),M(R,y+2,E,P),M(L,y+4,v,P)}}function M(T,E,v,U){U<0&&T.x===1&&(a[E]=T.x-1),v.x===0&&v.z===0&&(a[E]=U/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.vertices,t.indices,t.radius,t.details)}}class Ea extends tu{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new tu().fromJSON(r))}return this}}const L_={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=_f(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,m;if(n&&(s=F_(i,t,s,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let _=e;_<r;_+=e)h=i[_],d=i[_+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return ss(s,a,e,o,l,m,0),a}};function _f(i,t,e,n,r){let s,a;if(r===q_(i,t,e,n)>0)for(s=t;s<e;s+=n)a=eu(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=eu(s,i[s],i[s+1],a);return a&&ba(a,a.next)&&(os(a),a=a.next),a}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ba(e,e.next)||Ee(e.prev,e,e.next)===0)){if(os(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ss(i,t,e,n,r,s,a){if(!i)return;!a&&s&&G_(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?I_(i,n,r,s):D_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),os(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=U_(Bi(i),t,e),ss(i,t,e,n,r,s,2)):a===2&&N_(i,t,e,n,r,s):ss(Bi(i),t,e,n,r,s,1);break}}}function D_(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=m&&ur(r,o,s,l,a,c,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function I_(i,t,e,n){const r=i.prev,s=i,a=i.next;if(Ee(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,M=o>l?o>c?o:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,p=ul(m,_,t,e,n),T=ul(M,g,t,e,n);let E=i.prevZ,v=i.nextZ;for(;E&&E.z>=p&&v&&v.z<=T;){if(E.x>=m&&E.x<=M&&E.y>=_&&E.y<=g&&E!==r&&E!==a&&ur(o,u,l,h,c,d,E.x,E.y)&&Ee(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=m&&v.x<=M&&v.y>=_&&v.y<=g&&v!==r&&v!==a&&ur(o,u,l,h,c,d,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=p;){if(E.x>=m&&E.x<=M&&E.y>=_&&E.y<=g&&E!==r&&E!==a&&ur(o,u,l,h,c,d,E.x,E.y)&&Ee(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=T;){if(v.x>=m&&v.x<=M&&v.y>=_&&v.y<=g&&v!==r&&v!==a&&ur(o,u,l,h,c,d,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function U_(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!ba(r,s)&&vf(r,n,n.next,s)&&as(r,s)&&as(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),os(n),os(n.next),n=i=s),n=n.next}while(n!==i);return Bi(n)}function N_(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&W_(a,o)){let l=xf(a,o);a=Bi(a,a.next),l=Bi(l,l.next),ss(a,t,e,n,r,s,0),ss(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function F_(i,t,e,n){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=_f(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(k_(c));for(r.sort(O_),s=0;s<r.length;s++)e=B_(r[s],e);return e}function O_(i,t){return i.x-t.x}function B_(i,t){const e=z_(i,t);if(!e)return t;const n=xf(e,i);return Bi(n,n.next),Bi(e,e.next)}function z_(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&ur(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),as(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&H_(r,e)))&&(r=e,u=h)),e=e.next;while(e!==o);return r}function H_(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function G_(i,t,e,n){let r=i;do r.z===0&&(r.z=ul(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,V_(r)}function V_(i){let t,e,n,r,s,a,o,l,c=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(a>1);return i}function ul(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function k_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ur(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function W_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!X_(i,t)&&(as(i,t)&&as(t,i)&&Y_(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||ba(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ba(i,t){return i.x===t.x&&i.y===t.y}function vf(i,t,e,n){const r=Zs(Ee(i,t,e)),s=Zs(Ee(i,t,n)),a=Zs(Ee(e,n,i)),o=Zs(Ee(e,n,t));return!!(r!==s&&a!==o||r===0&&qs(i,e,t)||s===0&&qs(i,n,t)||a===0&&qs(e,i,n)||o===0&&qs(e,t,n))}function qs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zs(i){return i>0?1:i<0?-1:0}function X_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function as(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Y_(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xf(i,t){const e=new fl(i.i,i.x,i.y),n=new fl(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function eu(i,t,e,n){const r=new fl(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function q_(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class es{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return es.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];nu(t),iu(n,t);let a=t.length;e.forEach(nu);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,iu(n,e[l]);const o=L_.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function nu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function iu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class fs extends sn{constructor(t=new Ea([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Re(r,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Z_;let E,v=!1,U,C,R,L;p&&(E=p.getSpacedPoints(u),v=!0,d=!1,U=p.computeFrenetFrames(u,!1),C=new D,R=new D,L=new D),d||(g=0,m=0,_=0,M=0);const b=o.extractPoints(c);let y=b.shape;const P=b.holes;if(!es.isClockWise(y)){y=y.reverse();for(let Q=0,rt=P.length;Q<rt;Q++){const w=P[Q];es.isClockWise(w)&&(P[Q]=w.reverse())}}const z=es.triangulateShape(y,P),k=y;for(let Q=0,rt=P.length;Q<rt;Q++){const w=P[Q];y=y.concat(w)}function q(Q,rt,w){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(rt,w)}const X=y.length,tt=z.length;function W(Q,rt,w){let Ut,nt,Et;const ut=Q.x-rt.x,Bt=Q.y-rt.y,yt=w.x-Q.x,A=w.y-Q.y,x=ut*ut+Bt*Bt,B=ut*A-Bt*yt;if(Math.abs(B)>Number.EPSILON){const K=Math.sqrt(x),et=Math.sqrt(yt*yt+A*A),J=rt.x-Bt/K,Ct=rt.y+ut/K,pt=w.x-A/et,St=w.y+yt/et,jt=((pt-J)*A-(St-Ct)*yt)/(ut*A-Bt*yt);Ut=J+ut*jt-Q.x,nt=Ct+Bt*jt-Q.y;const it=Ut*Ut+nt*nt;if(it<=2)return new lt(Ut,nt);Et=Math.sqrt(it/2)}else{let K=!1;ut>Number.EPSILON?yt>Number.EPSILON&&(K=!0):ut<-Number.EPSILON?yt<-Number.EPSILON&&(K=!0):Math.sign(Bt)===Math.sign(A)&&(K=!0),K?(Ut=-Bt,nt=ut,Et=Math.sqrt(x)):(Ut=ut,nt=Bt,Et=Math.sqrt(x/2))}return new lt(Ut/Et,nt/Et)}const ht=[];for(let Q=0,rt=k.length,w=rt-1,Ut=Q+1;Q<rt;Q++,w++,Ut++)w===rt&&(w=0),Ut===rt&&(Ut=0),ht[Q]=W(k[Q],k[w],k[Ut]);const Mt=[];let At,Xt=ht.concat();for(let Q=0,rt=P.length;Q<rt;Q++){const w=P[Q];At=[];for(let Ut=0,nt=w.length,Et=nt-1,ut=Ut+1;Ut<nt;Ut++,Et++,ut++)Et===nt&&(Et=0),ut===nt&&(ut=0),At[Ut]=W(w[Ut],w[Et],w[ut]);Mt.push(At),Xt=Xt.concat(At)}for(let Q=0;Q<g;Q++){const rt=Q/g,w=m*Math.cos(rt*Math.PI/2),Ut=_*Math.sin(rt*Math.PI/2)+M;for(let nt=0,Et=k.length;nt<Et;nt++){const ut=q(k[nt],ht[nt],Ut);ct(ut.x,ut.y,-w)}for(let nt=0,Et=P.length;nt<Et;nt++){const ut=P[nt];At=Mt[nt];for(let Bt=0,yt=ut.length;Bt<yt;Bt++){const A=q(ut[Bt],At[Bt],Ut);ct(A.x,A.y,-w)}}}const le=_+M;for(let Q=0;Q<X;Q++){const rt=d?q(y[Q],Xt[Q],le):y[Q];v?(R.copy(U.normals[0]).multiplyScalar(rt.x),C.copy(U.binormals[0]).multiplyScalar(rt.y),L.copy(E[0]).add(R).add(C),ct(L.x,L.y,L.z)):ct(rt.x,rt.y,0)}for(let Q=1;Q<=u;Q++)for(let rt=0;rt<X;rt++){const w=d?q(y[rt],Xt[rt],le):y[rt];v?(R.copy(U.normals[Q]).multiplyScalar(w.x),C.copy(U.binormals[Q]).multiplyScalar(w.y),L.copy(E[Q]).add(R).add(C),ct(L.x,L.y,L.z)):ct(w.x,w.y,h/u*Q)}for(let Q=g-1;Q>=0;Q--){const rt=Q/g,w=m*Math.cos(rt*Math.PI/2),Ut=_*Math.sin(rt*Math.PI/2)+M;for(let nt=0,Et=k.length;nt<Et;nt++){const ut=q(k[nt],ht[nt],Ut);ct(ut.x,ut.y,h+w)}for(let nt=0,Et=P.length;nt<Et;nt++){const ut=P[nt];At=Mt[nt];for(let Bt=0,yt=ut.length;Bt<yt;Bt++){const A=q(ut[Bt],At[Bt],Ut);v?ct(A.x,A.y+E[u-1].y,E[u-1].x+w):ct(A.x,A.y,h+w)}}}$(),st();function $(){const Q=r.length/3;if(d){let rt=0,w=X*rt;for(let Ut=0;Ut<tt;Ut++){const nt=z[Ut];Ft(nt[2]+w,nt[1]+w,nt[0]+w)}rt=u+g*2,w=X*rt;for(let Ut=0;Ut<tt;Ut++){const nt=z[Ut];Ft(nt[0]+w,nt[1]+w,nt[2]+w)}}else{for(let rt=0;rt<tt;rt++){const w=z[rt];Ft(w[2],w[1],w[0])}for(let rt=0;rt<tt;rt++){const w=z[rt];Ft(w[0]+X*u,w[1]+X*u,w[2]+X*u)}}n.addGroup(Q,r.length/3-Q,0)}function st(){const Q=r.length/3;let rt=0;Rt(k,rt),rt+=k.length;for(let w=0,Ut=P.length;w<Ut;w++){const nt=P[w];Rt(nt,rt),rt+=nt.length}n.addGroup(Q,r.length/3-Q,1)}function Rt(Q,rt){let w=Q.length;for(;--w>=0;){const Ut=w;let nt=w-1;nt<0&&(nt=Q.length-1);for(let Et=0,ut=u+g*2;Et<ut;Et++){const Bt=X*Et,yt=X*(Et+1),A=rt+Ut+Bt,x=rt+nt+Bt,B=rt+nt+yt,K=rt+Ut+yt;kt(A,x,B,K)}}}function ct(Q,rt,w){l.push(Q),l.push(rt),l.push(w)}function Ft(Q,rt,w){Gt(Q),Gt(rt),Gt(w);const Ut=r.length/3,nt=T.generateTopUV(n,r,Ut-3,Ut-2,Ut-1);ee(nt[0]),ee(nt[1]),ee(nt[2])}function kt(Q,rt,w,Ut){Gt(Q),Gt(rt),Gt(Ut),Gt(rt),Gt(w),Gt(Ut);const nt=r.length/3,Et=T.generateSideWallUV(n,r,nt-6,nt-3,nt-2,nt-1);ee(Et[0]),ee(Et[1]),ee(Et[3]),ee(Et[1]),ee(Et[2]),ee(Et[3])}function Gt(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function ee(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return K_(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new cl[r.type]().fromJSON(r)),new fs(n,t.options)}}const Z_={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new lt(s,a),new lt(o,l),new lt(c,u)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[r*3],m=t[r*3+1],_=t[r*3+2],M=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-h),new lt(d,1-_),new lt(M,1-p)]:[new lt(o,1-l),new lt(u,1-h),new lt(m,1-_),new lt(g,1-p)]}};function K_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ul extends Il{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ul(t.radius,t.detail)}}class zi extends sn{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let h=t;const d=(e-t)/r,m=new D,_=new lt;for(let M=0;M<=r;M++){for(let g=0;g<=n;g++){const p=s+g/n*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,u.push(_.x,_.y)}h+=d}for(let M=0;M<r;M++){const g=M*(n+1);for(let p=0;p<n;p++){const T=p+g,E=T,v=T+n+1,U=T+n+2,C=T+1;o.push(E,v,C),o.push(v,U,C)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nl extends sn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new D,d=new D,m=[],_=[],M=[],g=[];for(let p=0;p<=n;p++){const T=[],E=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){const C=U/e;h.x=-t*Math.cos(r+C*s)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(r+C*s)*Math.sin(a+E*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),M.push(d.x,d.y,d.z),g.push(C+v,1-E),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const E=u[p][T+1],v=u[p][T],U=u[p+1][T],C=u[p+1][T+1];(p!==0||a>0)&&m.push(E,v,C),(p!==n-1||l<Math.PI)&&m.push(v,U,C)}this.setIndex(m),this.setAttribute("position",new Re(_,3)),this.setAttribute("normal",new Re(M,3)),this.setAttribute("uv",new Re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ru extends Rr{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new $t(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Mf extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class J_ extends Mf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const co=new de,su=new D,au=new D;class $_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;su.setFromMatrixPosition(t.matrixWorld),e.position.copy(su),au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(au),e.updateMatrixWorld(),co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class j_ extends $_{constructor(){super(new rf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q_ extends Mf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new j_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);const kr=new D;function pn(i,t,e,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;kr.copy(t),kr[n]=0,kr.normalize();const c=.5*a/(a+o),u=1-kr.angleTo(i)/l;return Math.sign(kr[e])===1?u*c:o/(a+o)+c+c*(1-u)}class tv extends Cr{constructor(t=1,e=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new D,l=new D,c=new D(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,_=new D,M=.5/r;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(o.fromArray(u,g),l.copy(o),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),u[g+0]=c.x*Math.sign(o.x)+l.x*s,u[g+1]=c.y*Math.sign(o.y)+l.y*s,u[g+2]=c.z*Math.sign(o.z)+l.z*s,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/m)){case 0:_.set(1,0,0),d[p+0]=pn(_,l,"z","y",s,n),d[p+1]=1-pn(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),d[p+0]=1-pn(_,l,"z","y",s,n),d[p+1]=1-pn(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),d[p+0]=1-pn(_,l,"x","z",s,t),d[p+1]=pn(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),d[p+0]=1-pn(_,l,"x","z",s,t),d[p+1]=1-pn(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),d[p+0]=1-pn(_,l,"x","y",s,t),d[p+1]=1-pn(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),d[p+0]=pn(_,l,"x","y",s,t),d[p+1]=1-pn(_,l,"y","x",s,e);break}}}function ev(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new sn;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(h.morphAttributes[m])}if(t){let m;if(e)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const m=i[d].index;for(let _=0;_<m.count;++_)h.push(m.getX(_)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=ou(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const m=[];for(let M=0;M<a[u].length;++M)m.push(a[u][M][d]);const _=ou(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function ou(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new rn(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let d=0,m=u.count;d<m;d++)for(let _=0;_<e;_++){const M=u.getComponent(d,_);o.setComponent(d+h,_,M)}}else a.set(u.array,l);l+=u.count*e}return r!==void 0&&(o.gpuType=r),o}const uo="#e3202e",nv="#fff1d0",Jn="#2c3040",fo="#3d6ea8",hs="#ffc933",yf="#d08a35",Fl="#d7263d";function O(i,t,e,n,r){i.index&&(i=i.toNonIndexed());for(var s=i.attributes.position.count,a=new Float32Array(s*3),o=new $t(t),l=0;l<s;l++)a[l*3]=o.r,a[l*3+1]=o.g,a[l*3+2]=o.b;return i.setAttribute("color",new rn(a,3)),e=e||[0,0,0],n=n||[0,0,0],r=r||[1,1,1],i.applyMatrix4(new de().compose(new D(e[0],e[1],e[2]),new wr().setFromEuler(new Bn(n[0],n[1],n[2])),new D(r[0],r[1],r[2]))),i}function Z(i,t,e,n,r){return n=n??.08,new tv(i,t,e,r||1,Math.min(n,i/2-.004,t/2-.004,e/2-.004))}function ae(i,t,e,n){return new Sa(n??i,i,t,e||12)}function In(i){return new Ul(i,1)}function xe(i){return ev(i,!1)}var ze=Math.PI/2;function iv(){var i=new Ea;i.moveTo(-.52,.45),i.lineTo(.52,.45),i.lineTo(0,-.62),i.closePath();var t=new fs(i,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:1}),e=function(n,r){return O(ae(.12,.24,10),Fl,[n,r,0],[ze,0,0])};return xe([O(t,hs,[0,0,-.06]),O(Z(1.22,.24,.3,.1),yf,[0,.53,0]),e(-.2,.2),e(.2,.14),e(0,-.16)])}function Sf(){return xe([O(Z(.62,.1,.62,.03),"#f1dbb0"),O(Z(.5,.03,.5,.01),Fl,[0,.055,0]),O(ae(.14,.03,10),hs,[0,.062,0])])}function rv(){for(var i=[],t=0;t<3;t++)i.push(O(Z(.9,.14,.9,.04),"#f1dbb0",[t*.06-.06,.09+t*.16,.06-t*.06],[0,t*.25,0])),i.push(O(Z(.9,.05,.3,.02),yf,[t*.06-.06,.17+t*.16,.06-t*.06-.3],[0,t*.25,0]));return i.push(O(ae(.26,.04,12),Fl,[.06,.5,-.06])),i.push(O(ae(.13,.05,10),hs,[.06,.505,-.06])),xe(i)}function sv(){return xe([O(ae(.42,.02,12),"#c5384a"),O(Z(.5,.04,.5,.02),"#e8b04a",[0,.02,0],[0,.5,0]),O(ae(.18,.05,10),hs,[.08,.03,.05])])}var ho=[2.15,0,-2.15];function av(i){var t=[],e=ho[i.slot],n;t.push(O(Z(4.1,3,6.5,.16),i.wall,[-2.05,1.5,0]));var r=new Ea;for(r.moveTo(-4.25,0),r.lineTo(.1,0),r.lineTo(-2.07,1.55),r.closePath(),t.push(O(new fs(r,{depth:6.8,bevelEnabled:!1}),i.roof,[0,2.98,-3.4])),t.push(O(Z(.3,.16,6.95,.05),i.roof2,[-2.07,4.55,0])),t.push(O(Z(.55,1,.55,.06),"#7b3f2a",[-3.15,4.2,1.9])),t.push(O(Z(.16,2.3,1.56,.04),"#ffffff",[.05,1.15,e])),t.push(O(Z(.2,2.05,1.24,.04),i.door,[.09,1.03,e])),t.push(O(In(.07),"#ffd23f",[.2,1.05,e-.4])),t.push(O(Z(1.05,.22,2.1,.06),i.porch,[.52,.11,e])),t.push(O(Z(.56,.05,1.1,.02),i.mat,[.6,.235,e])),t.push(O(Z(.68,.07,.7,.02),"#d8d2c0",[1.38,.035,e])),n=0;n<3;n++)n!==i.slot&&(t.push(O(Z(.14,1.4,1.5,.04),"#ffffff",[.04,1.75,ho[n]])),t.push(O(Z(.18,1.1,1.2,.03),"#9ad8ff",[.07,1.75,ho[n]])));return t.push(O(Z(5.5,.06,1.5,.02),"#b9b5a8",[-1.05,.03,4.3])),t.push(O(Z(.09,.8,.09,.02),"#f4f6fa",[1.5,.4,e+1.4])),t.push(O(Z(.26,.24,.44,.08),i.cust?"#2f6fd6":"#8d939e",[1.5,.86,e+1.4])),i.tree?(t.push(O(ae(.2,2,7),"#9a6b3f",[-2.3,1,-4.35])),t.push(O(In(1.15),"#35b84e",[-2.3,2.8,-4.35])),t.push(O(In(.8),"#4fd063",[-1.85,3.55,-4.1]))):(t.push(O(In(.62),"#35b84e",[-1.2,.45,-4.4],null,[1.3,.85,1])),t.push(O(In(.42),i.cust?"#ff6fae":"#7fae6a",[-.2,.32,-4.5]))),xe(t)}function ov(){return xe([O(Z(.2,1.1,1.2,.03),"#15161c"),O(Z(.22,.06,1,.01),"#cfe9ff",[0,.1,0],[.5,0,0]),O(Z(.22,.06,.7,.01),"#cfe9ff",[0,-.15,.1],[-.7,0,0])])}function Ef(i,t,e,n){return xe([O(Z(.3,.62,.5,.08),"#34425e",[0,.31,0]),O(Z(.38,.62,.64,.12),i,[0,.92,0]),O(Z(.5,.5,.52,.16,2),t,[0,1.5,0]),O(Z(.52,.22,.56,.1),e,[-.03,1.75,0]),O(Z(.03,.1,.08,.01),"#1c1c24",[.255,1.52,.12]),O(Z(.03,.1,.08,.01),"#1c1c24",[.255,1.52,-.12])])}function lv(i){return xe([O(Z(.56,.16,.16,.06),i,[.36,0,.4]),O(Z(.56,.16,.16,.06),i,[.36,0,-.4])])}function cv(i){return O(Z(.66,.17,.17,.06),i,[.5,0,0])}function uv(i,t){for(var e=[O(Z(1.75,.62,3.5,.24,2),i,[0,.62,0]),O(Z(1.5,.6,1.8,.24,2),"#bfe6ff",[0,1.14,.15]),O(Z(1.56,.12,1.86,.05),i,[0,1.46,.15]),O(Z(1.8,.2,.26,.07),Jn,[0,.42,-1.72]),O(Z(1.8,.2,.26,.07),Jn,[0,.42,1.72]),O(Z(.34,.18,.08,.03),"#fff6c9",[-.55,.72,-1.76]),O(Z(.34,.18,.08,.03),"#fff6c9",[.55,.72,-1.76]),O(Z(.3,.16,.08,.03),"#ff3b30",[-.58,.72,1.76]),O(Z(.3,.16,.08,.03),"#ff3b30",[.58,.72,1.76])],n=-1;n<=1;n+=2)for(var r=-1;r<=1;r+=2)e.push(O(ae(.36,.3,12),"#22242c",[n*.82,.36,r*1.08],[0,0,ze]));return xe(e)}function fv(){return xe([O(ae(.3,.8,10,.36),"#7c8794",[0,.56,0]),O(ae(.4,.12,10),"#5a6169",[0,1,0])])}function hv(){return xe([O(ae(.2,.62,9),"#e63946",[0,.47,0]),O(In(.21),"#e63946",[0,.8,0]),O(ae(.09,.56,7),"#ffd23f",[0,.55,0],[0,0,ze])])}function dv(){return xe([O(new Dl(.26,.72,10),"#ff7a1a",[0,.4,0]),O(Z(.62,.07,.62,.02),"#ff7a1a",[0,.035,0]),O(ae(.165,.13,10,.125),"#ffffff",[0,.42,0])])}function pv(){return xe([O(ae(.62,.02,14),"#24252b",[0,.01,0],null,[1,1,.6]),O(ae(.42,.02,12),"#101116",[.03,.02,.02],null,[1,1,.55])])}function mv(i){return xe([O(Z(.42,.42,.9,.14),i,[0,.5,0]),O(Z(.4,.4,.42,.13),i,[0,.78,-.52]),O(Z(.2,.18,.2,.06),"#2b1a0e",[0,.7,-.78]),O(Z(.1,.22,.12,.03),"#2b1a0e",[-.17,1.02,-.5]),O(Z(.1,.22,.12,.03),"#2b1a0e",[.17,1.02,-.5]),O(Z(.1,.1,.4,.03),i,[0,.72,.55],[.6,0,0]),O(Z(.12,.3,.12,.03),i,[-.14,.15,-.3]),O(Z(.12,.3,.12,.03),i,[.14,.15,-.3]),O(Z(.12,.3,.12,.03),i,[-.14,.15,.3]),O(Z(.12,.3,.12,.03),i,[.14,.15,.3])])}function gv(){for(var i=[O(Z(.36,.06,1.1,.03),"#22252e",[0,.14,0])],t=-1;t<=1;t+=2)for(var e=-1;e<=1;e+=2)i.push(O(ae(.07,.08,8),"#ffd23f",[t*.14,.07,e*.38],[0,0,ze]));return xe(i)}function _v(){var i=new Ea;i.moveTo(0,-.42),i.bezierCurveTo(-.7,.05,-.5,.55,0,.22),i.bezierCurveTo(.5,.55,.7,.05,0,-.42);var t=new fs(i,{depth:.2,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1,curveSegments:8});return xe([O(t,"#ff3b4e",[0,0,-.1]),O(In(.09),"#ffd0d6",[-.18,.2,.17])])}function vv(){return xe([O(ae(.78,.02,16),"#3f9be0",[0,.012,0],null,[1,1,.6]),O(ae(.45,.02,12),"#8fd3ff",[-.12,.022,-.05],null,[1,1,.5])])}function xv(i){return xe([O(In(.34),i,[0,.34,0]),O(ae(.345,.1,14),"#ffffff",[0,.34,0])])}function Mv(){for(var i=[O(Z(.12,1,.5,.03),"#f4f6fa",[-1.45,.5,0]),O(Z(.12,1,.5,.03),"#f4f6fa",[1.45,.5,0]),O(Z(.3,.08,.7,.02),"#8a92a3",[-1.45,.04,0]),O(Z(.3,.08,.7,.02),"#8a92a3",[1.45,.04,0]),O(In(.12),"#ffb000",[-1.45,1.1,0]),O(In(.12),"#ffb000",[1.45,1.1,0])],t=0;t<8;t++)i.push(O(Z(.4,.3,.1,.02),t%2?"#ffffff":"#ff7a1a",[-1.4+t*.4,.82,0])),i.push(O(Z(.4,.22,.1,.02),t%2?"#ff7a1a":"#ffffff",[-1.4+t*.4,.42,0]));return xe(i)}function yv(){var i=xe([O(Z(.3,.6,.5,.08),"#2b3350",[0,.3,0]),O(Z(.4,.62,.66,.12),"#d7263d",[0,.92,0]),O(Z(.5,.5,.52,.16,2),"#f2c9a0",[0,1.5,0]),O(Z(.56,.2,.58,.09),"#b3001b",[0,1.76,0]),O(Z(.3,.07,.5,.03),"#7d0013",[.36,1.68,0]),O(Z(.03,.1,.08,.01),"#1c1c24",[.255,1.5,.12]),O(Z(.03,.1,.08,.01),"#1c1c24",[.255,1.5,-.12])]);return i.rotateY(ze),i}function lu(){return xe([O(Z(.62,.5,.5,.08),"#c1121f"),O(Z(.34,.3,.04,.02),hs,[0,.02,.26]),O(Z(.64,.08,.52,.03),"#7d0013",[0,.24,0])])}function Sv(){return xe([O(Z(1.3,.14,.46,.06),"#22252e",[0,.3,0]),O(ae(.3,.26,12),"#111318",[-.72,.3,0],[0,0,ze]),O(ae(.3,.26,12),"#111318",[.72,.3,0],[0,0,ze]),O(ae(.14,.28,10),"#cfd5e0",[-.72,.3,0],[0,0,ze]),O(ae(.14,.28,10),"#cfd5e0",[.72,.3,0],[0,0,ze]),O(Z(.42,.05,.1,.02),"#4de1ff",[-.3,.26,.24]),O(Z(.42,.05,.1,.02),"#4de1ff",[.3,.26,.24]),O(Z(.42,.05,.1,.02),"#4de1ff",[-.3,.26,-.24]),O(Z(.42,.05,.1,.02),"#4de1ff",[.3,.26,-.24])])}function Ev(){return xe([O(ae(.36,.2,14),"#111318",[0,.36,-.72],[0,0,ze]),O(ae(.38,.24,14),"#111318",[0,.38,.7],[0,0,ze]),O(ae(.15,.22,10),"#cfd5e0",[0,.36,-.72],[0,0,ze]),O(ae(.15,.26,10),"#cfd5e0",[0,.38,.7],[0,0,ze]),O(Z(.3,.42,1.3,.12),"#ff7b00",[0,.72,0]),O(Z(.28,.16,.56,.06),"#1c1f27",[0,.98,.26]),O(Z(.22,.2,.5,.06),"#ffffff",[0,.86,-.62],[.4,0,0]),O(Z(.1,.5,.1,.03),"#3a3f4a",[0,.82,-.62],[.35,0,0]),O(Z(.9,.07,.08,.03),"#3a3f4a",[0,1.12,-.5]),O(Z(.12,.1,.12,.03),"#111318",[-.46,1.12,-.5]),O(Z(.12,.1,.12,.03),"#111318",[.46,1.12,-.5]),O(Z(.2,.12,.5,.05),"#ff7b00",[0,.84,.8],[-.3,0,0])])}function bv(){for(var i=[O(Z(1.4,.46,2.7,.2,2),"#2f343c",[0,.5,0]),O(Z(1.36,.1,2.5,.04),"#4a515c",[0,.74,0]),O(Z(1.16,.4,1.25,.2,2),"#14161b",[0,.92,.18]),O(Z(1.1,.08,1.05,.04),"#2a2e35",[0,1.12,.18]),O(Z(.05,.03,1.05,.01),"#59616d",[0,.775,-.82]),O(Z(1.42,.16,.2,.06),"#1b1e24",[0,.36,-1.3]),O(Z(1.42,.16,.2,.06),"#1b1e24",[0,.36,1.3]),O(Z(.34,.11,.07,.03),"#f4fbff",[-.44,.58,-1.34]),O(Z(.34,.11,.07,.03),"#f4fbff",[.44,.58,-1.34]),O(Z(.4,.1,.07,.03),"#ff2e43",[-.42,.6,1.34]),O(Z(.4,.1,.07,.03),"#ff2e43",[.42,.6,1.34]),O(Z(.1,.1,.16,.03),"#2f343c",[-.76,.84,-.3]),O(Z(.1,.1,.16,.03),"#2f343c",[.76,.84,-.3])],t=-1;t<=1;t+=2)for(var e=-1;e<=1;e+=2)i.push(O(ae(.3,.26,14),"#15171c",[t*.64,.3,e*.86],[0,0,ze])),i.push(O(ae(.17,.28,10),"#9aa3b0",[t*.64,.3,e*.86],[0,0,ze]));return xe(i)}function Tv(){for(var i=[O(Z(1.9,.8,3.8,.3,3),uo,[0,.74,0]),O(Z(1.94,.17,3.4,.06),nv,[0,.6,0]),O(Z(1.86,1.3,2.35,.32,3),uo,[0,1.62,.68]),O(Z(1.8,1,1.4,.34,3),uo,[0,1.46,-.9]),O(Z(1.5,.62,.12,.05),fo,[0,1.6,-1.585],[-.16,0,0]),O(Z(.08,.5,.8,.04),fo,[-.88,1.62,-.95]),O(Z(.08,.5,.8,.04),fo,[.88,1.62,-.95]),O(Z(1.98,.28,.32,.1),Jn,[0,.46,-1.86]),O(Z(1.98,.28,.32,.1),Jn,[0,.46,1.86]),O(Z(.4,.22,.1,.05),"#fff6c9",[-.6,.9,-1.88]),O(Z(.4,.22,.1,.05),"#fff6c9",[.6,.9,-1.88]),O(Z(.56,.14,.08,.04),Jn,[0,.9,-1.89]),O(Z(.24,.42,.1,.05),"#ff8a1e",[-.74,1.12,1.87]),O(Z(.24,.42,.1,.05),"#ff8a1e",[.74,1.12,1.87]),O(Z(.56,.22,.05,.02),"#f4f6fa",[0,.82,1.9]),O(Z(.16,.26,.12,.04),Jn,[-1.03,1.52,-1.4]),O(Z(.16,.26,.12,.04),Jn,[1.03,1.52,-1.4]),O(Z(1,.12,.56,.05),Jn,[0,2.31,.55]),O(ae(.07,.5,8),Jn,[0,2.58,.55])],t=-1;t<=1;t+=2)for(var e=-1;e<=1;e+=2)i.push(O(ae(.44,.36,16),"#20222a",[t*.86,.44,e*1.15],[0,0,ze])),i.push(O(ae(.24,.38,12),"#cfd5e0",[t*.86,.44,e*1.15],[0,0,ze]));return xe(i)}function Av(){for(var i=[O(Z(5.6,4.2,7.4,.2),"#b3001b",[0,2.1,0]),O(Z(6,.4,7.8,.1),"#7d0013",[0,4.3,0]),O(Z(.2,2.4,1.4,.04),"#3d6ea8",[-2.82,1.3,-1.6]),O(Z(.2,2.2,1.2,.04),"#fff8e7",[-2.82,1.1,1.4])],t=0;t<6;t++)i.push(O(Z(1.2,.14,1.2,.03),t%2?"#ffffff":"#d7263d",[-3.3,3,-3+t*1.2],[0,0,.5]));return xe(i)}function ds(i,t){var e=document.createElement("canvas");return e.width=i,e.height=t,e}function ps(i){var t=new __(i);return t.colorSpace=un,t.anisotropy=4,t}function mr(i,t,e,n,r,s){i.beginPath(),i.roundRect?i.roundRect(t,e,n,r,s):i.rect(t,e,n,r)}function Ol(i,t,e,n){i.fillStyle="#ffc933",i.beginPath(),i.moveTo(t-n,e-n*.8),i.lineTo(t+n,e-n*.8),i.lineTo(t,e+n*1.2),i.closePath(),i.fill(),i.fillStyle="#d08a35",mr(i,t-n*1.15,e-n*1.05,n*2.3,n*.42,n*.2),i.fill(),i.fillStyle="#d7263d",[[-.35,-.3,.2],[.35,-.35,.18],[0,.3,.16]].forEach(function(r){i.beginPath(),i.arc(t+r[0]*n,e+r[1]*n,r[2]*n,0,7),i.fill()})}function wv(){var i=ds(256,256),t=i.getContext("2d");return t.fillStyle="#fff1d0",t.beginPath(),t.arc(128,128,122,0,7),t.fill(),t.lineWidth=10,t.strokeStyle="#b3001b",t.beginPath(),t.arc(128,128,112,0,7),t.stroke(),Ol(t,128,138,44),t.fillStyle="#b3001b",t.textAlign="center",t.textBaseline="middle",t.font="900 40px system-ui, Arial, sans-serif",t.fillText("PAYTON",128,62),t.font="900 30px system-ui, Arial, sans-serif",t.fillText("PIZZA",128,216),ps(i)}function Rv(){var i=ds(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(255,220,120,0.95)"),e.addColorStop(.4,"rgba(255,170,40,0.4)"),e.addColorStop(1,"rgba(255,150,20,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ps(i)}function Cv(i){var t=ds(128,128),e=t.getContext("2d");return e.lineCap="round",e.lineJoin="round",i==="order"?(e.fillStyle="rgba(0,0,0,0.25)",mr(e,14,18,104,100,26),e.fill(),e.fillStyle="#ffffff",mr(e,10,10,104,100,26),e.fill(),e.strokeStyle="#ffd23f",e.lineWidth=6,mr(e,13,13,98,94,23),e.stroke(),Ol(e,62,62,30)):(e.fillStyle=i==="done"?"#1f9d55":"#c1121f",e.beginPath(),e.arc(64,64,50,0,7),e.fill(),e.strokeStyle="#fff",e.lineWidth=14,e.beginPath(),i==="done"?(e.moveTo(40,64),e.lineTo(58,82),e.lineTo(90,46)):(e.moveTo(44,44),e.lineTo(84,84),e.moveTo(84,44),e.lineTo(44,84)),e.stroke()),ps(t)}function Pv(){for(var i=ds(352,32),t=i.getContext("2d"),e=0;e<22;e++)for(var n=0;n<2;n++)t.fillStyle=(e+n)%2?"#111":"#fff",t.fillRect(e*16,n*16,16,16);var r=ps(i);return r.magFilter=$e,r}function Lv(){var i=ds(512,256),t=i.getContext("2d");return t.fillStyle="#fff8e7",mr(t,0,0,512,256,28),t.fill(),t.strokeStyle="#b3001b",t.lineWidth=12,mr(t,8,8,496,240,22),t.stroke(),Ol(t,86,132,52),t.fillStyle="#b3001b",t.textAlign="center",t.textBaseline="middle",t.font="900 86px system-ui, Arial, sans-serif",t.fillText("PAYTON",320,88),t.font="900 86px system-ui, Arial, sans-serif",t.fillText("PIZZA",320,178),ps(i)}var _n=function(i){return(i-gt/2)/en},xn=function(i){return-i/en},cu="#cdeaff",Wr=62*Math.PI/180,hl=60,Dv=11.8,Iv=-.6,vn=null,Oe,Un,On,cn,qr,Zr,An,Le={D:38,h:33,g:18,foot:1,far:60,ahead:55},bf=null,ha=[],Kr=new Map,po=0,uu={},da={},$n=null,dl=[],Ii,Tf=[],pl=null,Jr=null,Ks=new D,br=new de;function se(i,t){return uu[i]||(uu[i]=t())}function he(i,t,e){var n=new Se(i,t||On);return n.castShadow=e!==!1,n}function Uv(){try{vn=new d_({canvas:zf,antialias:!0,powerPreference:"high-performance"})}catch{return vn=null,f.webgl=!1,!1}f.webgl=!0;var i=f.opt.shadows!==0;vn.shadowMap.enabled=i,vn.shadowMap.type=Du,Oe=new p_,Oe.background=new $t(cu),Oe.fog=new Rl(cu,40,60),Un=new mn(hl,1,1,300);var t=new hf(new Uint8Array([160,218,255]),3,1,xa);t.minFilter=t.magFilter=$e,t.needsUpdate=!0,On=new ru({vertexColors:!0,gradientMap:t}),Oe.add(new J_("#ffffff","#9fd68a",1.5)),cn=new Q_("#fff3d0",2.9),cn.castShadow=i,cn.shadow.mapSize.set(1024,2048),Object.assign(cn.shadow.camera,{left:-22,right:22,top:30,bottom:-30,near:1,far:90}),cn.shadow.bias=-8e-4,cn.shadow.normalBias=.05,Oe.add(cn,cn.target),qr=new Xe,Oe.add(qr);var e=150,n=function(_,M,g,p){var T=new zn(_,e);T.rotateX(-Math.PI/2);var E=new Se(T,new ru({color:M,gradientMap:t}));E.position.set(g,p,0),E.receiveShadow=!0,qr.add(E)},r=(ml-go)/en,s=(go-ra)/en,a=(gl-ra)/en/2;n(80,"#5fd14e",-45.5,0),n(80,"#5fd14e",a+40,0),n(r,"#565b6e",0,0);for(var o=-1;o<=1;o+=2){var l=he(O(Z(s,.16,e,.04),"#e3ddcb"),On,!1);l.position.set(o*(r/2+s/2),.08,0),l.receiveShadow=!0,qr.add(l)}var c=new zn(.2,1.7);c.rotateX(-Math.PI/2),Zr=new ll(c,new fn({color:"#f5d547"}),40);for(var u=0;u<40;u++)br.makeTranslation(0,.02,8-u*3.5),Zr.setMatrixAt(u,br);Zr.frustumCulled=!1,Oe.add(Zr),An=new Xe,Oe.add(An),["order","done","missed"].forEach(function(_){da[_]=new Cl({map:Cv(_),depthTest:!1,fog:!1})});var h=se("pie",Sf);for(u=0;u<14;u++){var d=he(h);d.visible=!1,Oe.add(d),dl.push(d)}for(Ii=new ll(se("splat",sv),On,40),Ii.count=0,Ii.frustumCulled=!1,Oe.add(Ii),u=0;u<2;u++){var m=new Se(new zi(.46,.68,28),new fn({color:"#fff",transparent:!0,opacity:.4,depthTest:!1,fog:!1}));m.rotation.x=-Math.PI/2,m.renderOrder=5,m.visible=!1,Oe.add(m),Tf.push(m)}return Fv(),Ov(),Ht.onResize=fu,fu(),f.project=Nv,!0}function fu(){if(vn){vn.setPixelRatio(Ht.dpr),vn.setSize(Ht.cw,Ht.ch,!1);var i=Ht.cw/Ht.ch,t=hl/2*Math.PI/180;Un.aspect=i,Un.fov=hl,Un.updateProjectionMatrix(),Le.D=Math.min(Math.max(Dv/(Math.tan(t)*i),31),50),Le.h=Le.D*Math.sin(Wr),Le.g=Le.D*Math.cos(Wr),Le.foot=Iv-Le.h/Math.tan(Wr+t),Le.ahead=Le.foot+Le.h/Math.tan(Wr-t),Le.far=Le.h/Math.sin(Wr-t),Oe.fog.near=Le.far*.76,Oe.fog.far=Le.far*1.04}}function Nv(i,t,e){return Ks.set(_n(i),(e||0)/en,xn(t)).project(Un),{x:((Ks.x*.5+.5)*Ht.cw-Ht.ox)/Ht.s,y:(-Ks.y*.5+.5)*Ht.ch/Ht.s,vis:Ks.z<1}}function Fv(){$n=new Xe,Oe.add($n);var i="#f2c9a0",t=[],e,n=function(z,k){var q=new Xe,X=he(se("payton",yv));return q.add(X),q.position.set(0,z,k),q},r=function(z,k){var q=he(se("arm",function(){return cv(i)}),On,!1);return q.position.set(0,z,k),q.visible=!1,q},s=new Xe;s.add(he(se("hover",Sv))),s.add(n(.37,0));var a=he(se("bag",lu));a.position.set(0,1.2,.5),s.add(a),s.userData.arm=r(1.42,0),s.add(s.userData.arm);var o=new Xe;o.add(he(se("bike",Ev)));var l=n(.55,.05);o.add(l);var c=he(se("bag",lu));c.position.set(0,1.25,.72),o.add(c),o.userData.arm=r(1.6,.05),o.add(o.userData.arm);var u=new Xe;u.add(he(se("bimmer",bv))),u.userData.arm=r(.95,.1),u.add(u.userData.arm);var h=new Xe,d=he(se("van",Tv));h.add(d);for(var m=new fn({map:wv(),transparent:!0}),_=-1;_<=1;_+=2){var M=new Se(new zn(1.12,1.12),m);M.position.set(_*.94,1.66,.72),M.rotation.y=_*Math.PI/2,h.add(M)}var g=new Se(new zn(1,1),m);g.position.set(0,1.68,1.865),h.add(g);var p=new Xe;p.position.set(0,3.6,.55);var T=new fn({vertexColors:!0}),E=new Se(se("slice",iv),T);E.scale.set(1.15,1.15,1.7),E.castShadow=!0;var v=new ll(new Nl(.06,8,6),new fn,15),U=[[-.62,.68],[.62,.68],[0,-.74]];for(e=0;e<15;e++){var C=Math.floor(e/5),R=e%5/5,L=U[C],b=U[(C+1)%3];br.makeTranslation((L[0]+(b[0]-L[0])*R)*1.15,(L[1]+(b[1]-L[1])*R)*1.15,0),v.setMatrixAt(e,br),v.setColorAt(e,new $t("#fff"))}var y=new ff(new Cl({map:Rv(),blending:xo,depthWrite:!1,transparent:!0,fog:!1}));for(y.scale.setScalar(3.6),p.add(E,v,y),h.add(p),h.userData={arm:r(1.5,-.95),sign:p,signMat:T,bulbs:v,halo:y},h.add(h.userData.arm),s.scale.setScalar(1.35),o.scale.setScalar(1.3),u.scale.setScalar(1.12),h.scale.setScalar(.9),t=[s,o,u,h],e=0;e<4;e++)t[e].visible=!1,$n.add(t[e]);var P=new Se(new zi(.92,1,40),new fn({color:"#5ad1ff",transparent:!0,opacity:.65,depthWrite:!1,side:Ln}));P.rotation.x=-Math.PI/2,P.position.y=.2,$n.add(P);var H=new Se(new zi(.86,1,36),new fn({color:"#ffffff",transparent:!0,opacity:.4,depthWrite:!1}));H.rotation.x=-Math.PI/2,H.position.y=.05,$n.add(H),$n.userData={rides:t,ring:P,spot:H,px:0,lean:0,bulbT:0,bulbStep:0}}function Ov(){var i=(ml-go)/en,t=new zn(i,i*32/352*2.2);t.rotateX(-Math.PI/2),pl=new Se(t,new fn({map:Pv()})),Oe.add(pl),Jr=new Xe;var e=he(se("shop",Av));e.receiveShadow=!0,Jr.add(e);var n=new zn(5.2,2.6);n.rotateX(-Math.PI/2);var r=new Se(n,new fn({map:Lv()}));r.position.set(0,4.56,0),Jr.add(r),Oe.add(Jr)}function Bv(){var i;for(bf=f.lots;An.children.length;)An.remove(An.children[0]);for(ha=[],Kr.clear(),i=0;i<f.lots.length;i++){var t=f.lots[i],e=t.side<0,n={l:t,house:null,person:null,arms:null,box:null,marker:null,wins:[]},r=t.ph>2.6,s="h|"+t.roof[0]+"|"+(t.cust?1:0)+"|"+t.slot+"|"+(r?1:0);if(n.house=he(se(s,zv(t,r))),n.house.receiveShadow=!0,n.house.position.set(_n(e?Qn:ti),0,xn(t.y0+105)),e||(n.house.scale.x=-1),An.add(n.house),t.cust){var a=t.c,o="p|"+a.shirt+a.skin+a.hair;n.person=new Xe,n.person.add(he(se(o,Hv(a)))),n.arms=he(se("a|"+a.skin,Gv(a.skin)),On,!1),n.arms.position.set(0,1.1,0),n.person.add(n.arms),n.box=he(se("pie",Sf),On,!1),n.box.position.set(.78,1.12,0),n.box.visible=!1,n.person.add(n.box),n.person.scale.setScalar(1.25),An.add(n.person),n.marker=new ff(da.order),n.marker.scale.setScalar(1.9),n.marker.renderOrder=4,An.add(n.marker)}ha.push(n)}pl.position.set(0,.03,xn(f.finishY)),Jr.position.set(_n(416),0,xn(f.finishY+115))}function zv(i,t){return function(){return av({slot:i.slot,cust:i.cust,tree:t,roof:i.roof[0],roof2:i.roof[1],wall:i.cust?"#f4ead2":"#cfcabb",door:i.cust?"#c2262c":"#5a4634",porch:i.cust?"#c58d4e":"#9d9d97",mat:i.cust?"#ffd23f":"#8b8b86"})}}function Hv(i){return function(){return Ef(i.shirt,i.skin,i.hair)}}function Gv(i){return function(){return lv(i)}}function Vv(i){for(var t=f.cam-340,e=f.cam+Le.ahead*en+140,n=0;n<ha.length;n++){var r=ha[n],s=r.l,a=s.y0>t&&s.y0<e;r.house.visible=a;for(var o=0;o<s.wins.length;o++){var l=s.wins[o];if(l.broken&&!r.wins[o]){var c=he(se("broken",ov),On,!1);c.position.set(_n(s.side<0?Qn:ti)-s.side*.08,1.75,xn(l.y)),An.add(c),r.wins[o]=c}r.wins[o]&&(r.wins[o].visible=a)}if(r.person){var u=s.c,h=u.gone&&u.goneT>.45&&!s.delivered;if(r.person.visible=a&&!h,r.marker.visible=a,!!a){var d=s.side<0?Qn:ti,m=u.happy>0?Math.abs(Math.sin(u.happy*12))*.45:0,_=Math.abs(u.x-d)<20?.22:0;r.person.position.set(_n(u.x),_+m,xn(u.y));var M=s.side<0?0:Math.PI;s.missed?(r.person.rotation.y=M+Math.PI,r.arms.rotation.z=-1.35,r.box.visible=!1):s.delivered?(r.person.rotation.y=M,r.arms.rotation.z=.05,r.box.visible=!0):u.gone?(r.person.rotation.y=M+Math.PI,r.arms.rotation.z=-1.35,r.box.visible=!1):u.type==="quit"?(r.person.rotation.y=M+Math.sin(i*6+u.ph)*.25,r.arms.rotation.z=-.9,r.box.visible=!1):(r.person.rotation.y=M,r.arms.rotation.z=.45+Math.sin(i*9+u.ph)*.35,r.box.visible=!1);var g=s.delivered?"done":s.missed?"missed":"order";r.marker.material!==da[g]&&(r.marker.material=da[g]),r.marker.position.set(_n(s.side<0?Qn:ti)+s.side*1.6,5.4+(g==="order"?Math.sin(i*4+s.ph)*.2:0),xn(s.doorY)),r.marker.scale.setScalar(g==="order"?1.9:1.5)}}}}function kv(i){var t=i.type,e=new Xe,n;if(t==="can")e.add(he(se("can",fv)));else if(t==="hydrant")e.add(he(se("hydrant",hv)));else if(t==="cone")e.add(he(se("cone",dv)));else if(t==="pothole")e.add(he(se("pothole",pv),On,!1));else if(t==="puddle")e.add(he(se("puddle",vv),On,!1));else if(t==="barrier")e.add(he(se("barrier",Mv)));else if(t==="ball")e.add(he(se("ball|"+i.col,function(){return xv(i.col)})));else if(t==="life"){n=he(se("heart",_v)),n.scale.setScalar(1.25),n.position.y=.9,e.add(n),e.userData.spin=n;var r=new Se(se("pickupRing",function(){return new zi(.75,.95,24)}),Kv);r.rotation.x=-Math.PI/2,r.position.y=.04,e.add(r),e.userData.ring=r}else if(t==="dog")e.add(he(se("dog|"+i.col,function(){return mv(i.col)})));else if(t==="carD"||t==="carU"||t==="dcar")n=he(se("car|"+i.col,function(){return uv(i.col)})),n.scale.setScalar(.74),e.add(n),e.rotation.y=t==="carD"?Math.PI:t==="dcar"?i.side<0?Math.PI/2:-Math.PI/2:0;else if(t==="skater")e.add(he(se("board",gv))),n=he(se("p|"+i.col+"#f2c9a0#3b2a1a",function(){return Ef(i.col,"#f2c9a0","#3b2a1a")})),n.rotation.y=-Math.PI/2,n.position.y=.17,n.scale.setScalar(.95),e.add(n);else if(t==="pickup"){e.add(he(se("pickup",rv)));var s=new Se(se("pickupRing",function(){return new zi(.75,.95,24)}),Zv);s.rotation.x=-Math.PI/2,s.position.y=.04,e.add(s),e.userData.ring=s}return An.add(e),{g:e,stamp:0}}function Wv(){var i=f.cam-120,t=f.cam+Le.ahead*en+160,e;for(po++,e=0;e<f.obs.length;e++){var n=f.obs[e];if(!(n.y<i||n.y>t)){var r=Kr.get(n);r||(r=kv(n),Kr.set(n,r)),r.stamp=po;var s=r.g,a=0;n.out?(a=.4+Math.sin(Math.min(1,n.t*1.6)*Math.PI)*1.6,s.rotation.x=n.t*9,s.rotation.z=n.t*6):n.type==="life"?(s.userData.spin.rotation.y=n.t*2.4,s.userData.spin.position.y=.9+Math.sin(n.t*4)*.15,s.userData.ring.scale.setScalar(1+Math.sin(n.t*5)*.1)):n.type==="ball"?(a=n.st===1?Math.abs(Math.sin(n.t*7))*.5:0,s.rotation.z=-n.side*n.t*(n.st===1?5:0)):n.type==="pickup"?(a=.15+Math.abs(Math.sin(n.t*2.5))*.25,s.rotation.y=n.t*1.5,s.userData.ring&&(s.userData.ring.position.y=.04-a,s.userData.ring.scale.setScalar(1+Math.sin(n.t*5)*.08))):n.type==="dog"?(s.rotation.y=n.st===1?Math.atan2(-(Pt.x-n.x),30):n.side<0?-Math.PI/2:Math.PI/2,a=n.st===1?Math.abs(Math.sin(n.t*20))*.12:0):n.type==="skater"&&(s.rotation.y=Math.PI+Math.cos(n.t*3)*.2),s.position.set(_n(n.x),a,xn(n.y))}}Kr.forEach(function(o,l){o.stamp!==po&&(An.remove(o.g),Kr.delete(l))})}function Xv(i,t){var e=$n.userData,n=(f.state==="play"||f.state==="pause")&&!(f.inv>0&&Math.floor(f.inv*14)%2===0);if($n.visible=n,!n){e.px=Pt.x;return}var r=f.cam+ge-Pt.sy,s=t>0?(Pt.x-e.px)/t:0;e.px=Pt.x,e.lean+=(Math.max(-.3,Math.min(.3,-s*.0016))-e.lean)*Math.min(1,t*10),$n.position.set(_n(Pt.x),0,xn(r));for(var a=0;a<4;a++)e.rides[a].visible=a===f.ride;var o=e.rides[f.ride];o.rotation.y=e.lean,o.rotation.z=f.ride<2?e.lean*.9:e.lean*.2,o.position.y=f.ride===0?.06+Math.sin(i*7)*.03:Math.abs(Math.sin(i*13))*.02;var l=o.userData.arm;if(l.visible=f.throwAnim>0,l.visible&&(l.scale.x=f.throwDir),f.ride===3){var c=o.userData,u=.88+.12*Math.sin(i*5);if(c.signMat.color.setScalar(u),c.halo.material.opacity=.45*u,c.sign.rotation.z=-e.lean*.5,e.bulbT+=t,e.bulbT>.11){e.bulbT=0,e.bulbStep++;for(var h=0;h<15;h++)c.bulbs.setColorAt(h,(h+e.bulbStep)%3===0?Yv:qv);c.bulbs.instanceColor.needsUpdate=!0}}e.spot.visible=f.shieldLeft<=0&&f.ride<2,e.spot.visible&&e.spot.scale.setScalar(1.25),e.ring.visible=f.shieldLeft>0,e.ring.visible&&e.ring.scale.set(f.V.w/en*.5+.55,f.V.h/en*.5+.55,1)}var Yv=new $t("#fffbe0"),qv=new $t("#ff8a1e"),Zv=new fn({color:"#ffd23f",transparent:!0,opacity:.7,depthWrite:!1}),Kv=new fn({color:"#ff6b7d",transparent:!0,opacity:.8,depthWrite:!1}),Jv={hand:["#ffd23f",.95,1.25],door:["#7dff8a",.9,1.1],window:["#ff5964",.75,1],wall:["#ffffff",.32,.9]};function $v(i){var t,e=f.state==="play"||f.state==="pause";for(t=0;t<dl.length;t++){var n=e?f.pies[t]:null,r=dl[t];if(r.visible=!!n,!!n){var s=Math.min(1,n.d/185);r.position.set(_n(n.x),1.15+Math.sin(s*Math.PI)*.7-s*.5,xn(n.y)),r.rotation.y=n.rot}}var a=Math.min(f.decals.length,40);for(t=0;t<a;t++){var o=f.decals[f.decals.length-a+t];br.makeTranslation(_n(o.x),Math.abs(_n(o.x))>ml/en-gt/2/en?.18:.02,xn(o.y)),Ii.setMatrixAt(t,br)}for(Ii.count=a,Ii.instanceMatrix.needsUpdate=!0,t=0;t<2;t++){var l=Tf[t],c=t?1:-1;if(f.state!=="play"||f.pizzas<=0){l.visible=!1;continue}var u=Cu(c);if(u.hit==="far"){l.visible=!1;continue}var h=Jv[u.hit],d=u.hit==="hand"||u.hit==="door"?1+Math.sin(i*16)*.1:1;l.visible=!0,l.position.set(_n(u.x)-c*.75,.35,xn(u.y)),l.material.color.set(h[0]),l.material.opacity=h[1],l.scale.setScalar(h[2]*d)}}function jv(i){var t=cn.shadow.camera,e=(t.top-t.bottom)/cn.shadow.mapSize.y,n=e/.905,r=Math.round((i-Le.ahead/2+3)/n)*n;cn.position.set(0,34,r+16),cn.target.position.set(0,0,r),cn.target.updateMatrixWorld()}var hu=0;function Qv(){if(!(!vn||f.state==="garage")){var i=f.tGame,t=Math.max(0,Math.min(.1,i-hu));hu=i,f.lots!==bf&&Bv(),Vv(i),Wv(),Xv(i,t),$v(i);var e=-(f.cam/en+Le.foot),n=f.shake>0?f.shake*2:0;Un.position.set(ql(-1,1)*.22*n,Le.h,e+ql(-1,1)*.22*n),Un.lookAt(Un.position.x,0,Un.position.z-Le.g),qr.position.z=e-55,Zr.position.z=-Math.floor((f.cam-160)/70)*3.5,jv(e),vn.render(Oe,Un)}}function Af(){return vn?{calls:vn.info.render.calls,tris:vn.info.render.triangles}:{calls:0,tris:0}}const tx=16,ex=450;function nx(i,t,e){return{sx:i,sy:t,lx:i,ly:t,t0:e,steering:!1}}function ix(i,t,e){var n={dx:0,dy:0};return i.steering?(n.dx=t-i.lx,n.dy=e-i.ly):Math.hypot(t-i.sx,e-i.sy)>tx&&(i.steering=!0),i.lx=t,i.ly=e,n}function rx(i,t){return!i.steering&&t-i.t0<=ex}function sx(i){return Mu(i.clientX,i.clientY)}function wf(i){return i<Ht.cw/2?-1:1}function ax(i){for(var t=f.buttons.length-1;t>=0;t--){var e=f.buttons[t];if(i.x>=e.x&&i.x<=e.x+e.w&&i.y>=e.y&&i.y<=e.y+e.h)return e.fn&&e.fn(),!0}return!1}function Rf(){wt.mute=!wt.mute,_i(),wt.mute||Qt("ui")}var ls=null,Ui=null;tn.addEventListener("pointerdown",function(i){i.preventDefault(),Eu();try{tn.focus()}catch{}i.pointerType==="touch"&&(f.isTouch=!0);var t=sx(i);if(f.state!=="play"){ax(t);return}if(t.y-f.hudTop<42&&t.x>gt-78){t.x>gt-40?Rf():f.state="pause";return}if(ls!==null){is(wf(i.clientX));return}ls=i.pointerId,Ui=nx(i.clientX,i.clientY,performance.now());try{tn.setPointerCapture(i.pointerId)}catch{}});tn.addEventListener("pointermove",function(i){if(!(i.pointerId!==ls||!Ui||f.state!=="play")){i.preventDefault();var t=ix(Ui,i.clientX,i.clientY);Pt.tx+=t.dx/Ht.s*1.35,Pt.ty+=t.dy/Ht.s*1.15}});function Cf(i){i.pointerId===ls&&(Ui&&f.state==="play"&&i.type==="pointerup"&&rx(Ui,performance.now())&&is(wf(Ui.sx)),ls=null,Ui=null)}tn.addEventListener("pointerup",Cf);tn.addEventListener("pointercancel",Cf);tn.addEventListener("contextmenu",function(i){i.preventDefault()});window.addEventListener("keydown",function(i){var t=i.code;if((t.indexOf("Arrow")===0||t==="Space")&&i.preventDefault(),Eu(),!i.repeat){if(f.keys[t]=!0,t==="KeyM"){Rf();return}if(f.state==="play"){t==="KeyZ"||t==="KeyA"||t==="KeyQ"?is(-1):t==="KeyX"||t==="KeyD"||t==="KeyE"?is(1):t==="Space"?Yf():t==="KeyP"||t==="Escape"?f.state="pause":t==="KeyF"&&(f.opt.fps=!f.opt.fps);return}if(f.state==="pause"&&(t==="KeyP"||t==="Escape"||t==="Space")){f.state="play";return}for(var e=t==="Space"||t==="NumpadEnter"?"Enter":t,n=0;n<f.buttons.length;n++)if(f.buttons[n].key===e&&f.buttons[n].fn){f.buttons[n].fn();return}}});window.addEventListener("keyup",function(i){f.keys[i.code]=!1});window.addEventListener("blur",function(){f.keys={},f.state==="play"&&(f.state="pause")});document.addEventListener("visibilitychange",function(){document.hidden&&f.state==="play"&&(f.state="pause")});(function(){var i=new URLSearchParams(location.search),t=function(e){var n=parseInt(i.get(e),10);return isFinite(n)?n:null};t("seed")!=null&&(f.opt.seed=t("seed")),t("day")!=null&&(f.opt.day=Math.max(1,t("day"))),t("ride")!=null&&(f.opt.ride=Math.max(0,Math.min(3,t("ride")))),i.get("fps")==="1"&&(f.opt.fps=!0),i.get("shadows")==="0"&&(f.opt.shadows=0)})();f.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0;window.addEventListener("resize",xu);xu();Bf();Uv();var du=0,lr=0,ke={t:0,n:0,total:0,frames:0,low:1/0,warm:0};function ox(i){if(ke.warm+=i,!(ke.warm<3)&&(ke.t+=i,ke.n++,ke.total+=i,ke.frames++,ke.t>=1)){var t=ke.n/ke.t,e=Af();ke.low=Math.min(ke.low,t),ke.t=0,ke.n=0,f.fps={now:Math.round(t),avg:Math.round(ke.frames/ke.total),low:Math.round(ke.low),calls:e.calls,tris:Math.round(e.tris/1e3)}}}function Pf(i){var t=(i-du)/1e3||0;du=i,t>.25&&(t=.25),document.hidden||ox(t),lr+=t;try{var e=0;if(Math.abs(lr-Ir)<.004)Kl(Ir),lr=0,e=1;else for(;lr>=Ir&&e<5;)Kl(Ir),lr-=Ir,e++;e===5&&(lr=0),Qv(),hh()}catch(n){window.console&&console.error(n)}requestAnimationFrame(Pf)}ga();window.__pp={get state(){return f.state},get score(){return f.score},get day(){return f.day},get lives(){return f.lives},get step(){return f.step},get webgl(){return!!f.webgl},get fps(){return f.fps},get draws(){return Af().calls},get stats(){return f.stats?Object.assign({},f.stats):null},get pizzas(){return f.pizzas},get x(){return Pt.x},get tx(){return Pt.tx},get bonus(){return!!f.bonus},get ride(){return f.ride},spot:function(i,t,e){var n=e==="top"?0:e==="bottom"?Ht.VH-800:(Ht.VH-800)/2;return{x:Ht.ox+i*Ht.s,y:(t+n)*Ht.s}},units:Mu,version:"0.2.0"};requestAnimationFrame(Pf);
