(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const pe=480,pt=800,Er=[{name:"HOVERBOARD",price:0,spd:1,steer:290,cap:8,w:28,h:22,tip:1,heat:1,shield:0,perk:[],blurb:["Free. Wobbly. Yours.","Small and easy to dodge with."],perkText:["PERKS: none.","Every hazard wipes you out."],perkShort:"NO PERKS ON THE HOVERBOARD"},{name:"DIRT BIKE",price:150,spd:1.14,steer:390,cap:10,w:16,h:38,tip:1,heat:1,shield:0,perk:["pothole"],blurb:["Faster, sharper steering.","Carries 10 pizzas."],perkText:["PERK: rides over potholes.",""],perkShort:"PERK: RIDES OVER POTHOLES"},{name:"GUN-METAL BLACK BIMMER",price:450,spd:1.28,steer:340,cap:12,w:26,h:50,tip:1.2,heat:1,shield:1,perk:["pothole","cone","can","ball"],blurb:["Fast. Shrugs off 1 crash","per shift. Tips x1.2."],perkText:["PERKS: rides over potholes. Knocks","cones, bins and balls aside."],perkShort:"PERKS: POTHOLES, CONES, BINS, BALLS"},{name:"PAYTON PIZZA VAN",price:1e3,spd:1.2,steer:300,cap:16,w:30,h:58,tip:1.5,heat:.55,shield:1,perk:["pothole","cone","can","ball","dog","skater"],blurb:["Oven on board: pizzas stay","hot. Tips x1.5. 16 pizzas."],perkText:["PERKS: all of the Bimmer's. Dogs","and skaters bounce off too."],perkShort:"PERKS: ALL THE BIMMER'S + DOGS, SKATERS"}],Io=3,Ia=5,Gu=320,ph=130,mc=52,mh=3.2,gh=300,Ma=130,Uo=160,Bl=320,zl=350,ri=96,si=384,ni=210,Vu=40,Wu=170,ya=560,qa=330,Ds=650,vr=185,No=21,fs=16,Xu=13,ss=410,Xr=1250,Yr=1/60,un=20,Cr=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],_h=[["#e4572e","#b8431f"],["#3d7fd9","#2c5fa8"],["#8b5cf6","#6d43d0"],["#f2a007","#c27e00"],["#2aa198","#1c7a73"],["#e0559b","#b23c78"]],vh=[["#7b808c","#5f646f"],["#8a8478","#6c675d"],["#6f7a78","#56605e"]],xh=["#f2c9a0","#d9a577","#a8703f","#7a4a26","#ffdcb8"],Fo=["#ffffff","#ffd23f","#5ad1ff","#9cf07a","#ff9f6b","#d6a5ff"],gc=["#c0392b","#2e86c1","#27ae60","#d4ac0d","#8e44ad","#e67e22","#ecf0f1"],f={SC:1,V:Er[0],state:"title",day:1,score:0,lives:3,cam:0,speed:0,heat:100,streak:0,pizzas:0,shieldLeft:0,lots:[],obs:[],pies:[],pops:[],parts:[],decals:[],stats:null,finishY:0,tGame:0,shake:0,inv:0,stun:0,throwAnim:0,throwDir:1,throwCd:0,carT:0,slowT:0,skateT:0,bannerT:0,hintT:0,overWhy:"",garageFrom:"title",report:null,newHi:!1,buttons:[],isTouch:!1,keys:{},ride:0,step:0,runSeed:null,opt:{},uiOy:0,hudTop:0,flashL:0,flashR:0,fps:null,bonus:!1,continued:!1,slip:0,sand:0,cartT:0,lifeFlash:0,T:null,hood:null,dusk:!1,low:!1,ridePics:null,setEffects:null,project:function(i,e,t){return{x:i,y:pt-(e-f.cam)-(t||0),vis:!0}}},Ae={x:240,sy:560,tx:240,ty:560};function Mh(i){return pt-(i-f.cam)}const be={bank:0,owned:[!0,!1,!1,!1],ride:0,hi:0,bestDay:0,cont:1,mute:!1,low:!1},Yu="payton-pizza-v1";function yh(){try{var i=JSON.parse(localStorage.getItem(Yu)||"null");if(i&&typeof i=="object")for(var e in be)e in i&&(be[e]=i[e])}catch{}(!Array.isArray(be.owned)||be.owned.length!==4)&&(be.owned=[!0,!1,!1,!1]),be.owned[0]=!0,be.owned[be.ride]||(be.ride=0),be.cont>=1||(be.cont=1)}function li(){try{localStorage.setItem(Yu,JSON.stringify(be))}catch{}}const cn=document.getElementById("g"),qu=document.getElementById("gl"),oe=cn.getContext("2d"),He={s:1,ox:0,dpr:1,VW:pe,VH:pt,cw:pe,ch:pt,top:0,bottom:0,onResize:null};function Zu(){var i=window.innerWidth||pe,e=window.innerHeight||pt,t=Math.min(window.devicePixelRatio||1,2),n=Math.min(i/pe,e/pt);n>0||(n=1),He.s=n,He.dpr=t,He.ox=(i-pe*n)/2,He.VW=i/n,He.VH=e/n,He.cw=i,He.ch=e,cn.style.width=i+"px",cn.style.height=e+"px",cn.width=Math.max(1,Math.round(i*t)),cn.height=Math.max(1,Math.round(e*t)),f.SC=n*t;var r=document.getElementById("safe");if(r){var s=getComputedStyle(r);He.top=(parseFloat(s.paddingTop)||0)/n,He.bottom=(parseFloat(s.paddingBottom)||0)/n}f.hudTop=He.top,He.onResize&&He.onResize()}function Ku(i,e){return{x:(i-He.ox)/He.s,y:e/He.s}}var ha=1;function Ju(i){ha=i>>>0||1}function Gi(){ha=ha+1831565813>>>0;var i=ha;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}var Sh=20261123;function $u(i){var e=(Sh^Math.imul(i+1,2654435761))>>>0;return e=Math.imul(e^e>>>16,2246822507)>>>0,e=Math.imul(e^e>>>13,3266489909)>>>0,(e^e>>>16)>>>0||1}function tt(i,e){return i+Gi()*(e-i)}function Ft(i){return Gi()<i}function kt(i,e,t){return i<e?e:i>t?t:i}function on(i){return i[Gi()*i.length|0]}function _c(i,e){return i+Math.random()*(e-i)}var Gt=null,Sa=null;function ju(){if(Gt){if(Gt.state==="suspended")try{Gt.resume()}catch{}return}try{var i=window.AudioContext||window.webkitAudioContext;if(!i)return;Gt=new i,Sa=Gt.createBuffer(1,Gt.sampleRate*.5,Gt.sampleRate);for(var e=Sa.getChannelData(0),t=0;t<e.length;t++)e[t]=Math.random()*2-1}catch{Gt=null}}function lt(i,e,t,n,r,s){if(!(!Gt||be.mute))try{var a=Gt.currentTime+(s||0),o=Gt.createOscillator(),l=Gt.createGain();o.type=t||"square",o.frequency.setValueAtTime(i,a),r&&o.frequency.exponentialRampToValueAtTime(r,a+e),l.gain.setValueAtTime(n||.06,a),l.gain.exponentialRampToValueAtTime(8e-4,a+e),o.connect(l),l.connect(Gt.destination),o.start(a),o.stop(a+e+.03)}catch{}}function Is(i,e){if(!(!Gt||be.mute||!Sa))try{var t=Gt.currentTime,n=Gt.createBufferSource(),r=Gt.createGain();n.buffer=Sa,r.gain.setValueAtTime(e||.12,t),r.gain.exponentialRampToValueAtTime(8e-4,t+i),n.connect(r),r.connect(Gt.destination),n.start(t),n.stop(t+i+.03)}catch{}}function et(i){i==="throw"?lt(520,.09,"square",.04,260):i==="door"?(lt(660,.08,"square",.06),lt(880,.12,"square",.06,null,.08)):i==="hand"?(lt(660,.07,"square",.07),lt(880,.07,"square",.07,null,.07),lt(1320,.18,"square",.07,null,.14)):i==="smash"?(Is(.25,.16),lt(1800,.12,"sawtooth",.04,400)):i==="miss"?lt(200,.14,"triangle",.08,90):i==="bad"?(lt(220,.16,"sawtooth",.06,140),lt(150,.22,"sawtooth",.06,90,.14)):i==="crash"?(Is(.4,.22),lt(140,.35,"sawtooth",.1,40)):i==="pickup"?(lt(500,.06,"square",.06),lt(750,.06,"square",.06,null,.06),lt(1e3,.1,"square",.06,null,.12)):i==="empty"?lt(120,.08,"square",.05):i==="bark"?(lt(380,.06,"sawtooth",.07,240),lt(360,.07,"sawtooth",.07,220,.11)):i==="beep"?lt(900,.08,"square",.04):i==="ui"?lt(700,.05,"square",.05):i==="buy"?(lt(523,.08,"square",.06),lt(659,.08,"square",.06,null,.08),lt(784,.08,"square",.06,null,.16),lt(1046,.22,"square",.06,null,.24)):i==="win"?(lt(523,.1,"square",.06),lt(659,.1,"square",.06,null,.1),lt(784,.1,"square",.06,null,.2),lt(1046,.3,"square",.06,null,.3)):i==="shield"?lt(300,.2,"triangle",.1,600):i==="bonk"?lt(260,.07,"square",.06,150):i==="splash"?Is(.2,.1):i==="sand"?Is(.28,.06):i==="life"&&(lt(660,.08,"square",.07),lt(990,.08,"square",.07,null,.08),lt(1320,.2,"square",.07,null,.16))}const vc=[{key:"suburb",name:"MAPLE STREET",line:"Dogs, balls and cars backing out."},{key:"beach",name:"BEACH TOWN",line:"Sand drifts, surfers and golf carts."}];function Hl(i){return Math.floor((i-1)/7)+1}function kl(i){return vc[(Hl(i)-1)%vc.length]}function Pn(i,e,t,n){return Math.min(i+e*t,n)}function Ua(i){var e=kl(i).key,t=e==="suburb",n=e==="beach",r=(i-1)%7+1,s=Hl(i);return{hood:e,speed:Math.min(150+7*(i-1),250),lots:Math.min(26+2*i,44),order:Pn(.34,.02,i,.5),side:Pn(.14,.025,i,.45),road:Pn(.08,.022,i,.36),dog:t&&i>=3?Pn(.03,.018,i-2,.22):0,dcar:i>=4?Pn(.03,.015,i-3,.18)*(t?1:.4):0,sand:n?Pn(.1,.02,r,.24):0,surfer:n?Pn(.03,.014,r+2*(s-2),.16):0,cart:n?[Math.max(4.5,9-.5*r),Math.max(8,13-.5*r)]:null,ball:i>=3?Pn(.03,.01,i-2,.14):0,barrier:i>=5?Pn(.03,.008,i-5,.1):0,carDown:Math.max(2,5.2-.25*i),carUp:Math.max(3,7-.3*i),skater:i>=4?[Math.max(3.5,10-.5*i),Math.max(7,14-.5*i)]:null,pacer:Pn(.06,.05,i,.4),quitter:i>=2?Pn(.04,.03,i,.22):0,curb:.15,patience:Math.max(1.7,2.6-.05*i),pickupEvery:i<=2?2:3,lives:i>=3?2:1}}function an(i,e,t){var n={type:i,x:e,y:t,vx:0,vy:0,w:16,h:16,st:0,t:tt(0,6),side:0,col:"#888",dead:!1};return i==="can"?(n.w=18,n.h=18):i==="hydrant"||i==="cone"?(n.w=13,n.h=13):i==="pothole"?(n.w=24,n.h=14):i==="dog"?(n.w=16,n.h=18,n.col=on(["#8d5524","#3b3b3b","#d9b382","#f5f5f5"])):i==="dcar"?(n.w=46,n.h=24,n.col=on(gc)):i==="carD"||i==="carU"?(n.w=24,n.h=48,n.col=on(gc)):i==="skater"?(n.w=14,n.h=20,n.col=on(Fo)):i==="pickup"||i==="life"?(n.w=30,n.h=30):i==="puddle"?(n.w=30,n.h=18):i==="ball"?(n.w=14,n.h=14,n.col=on(["#ff3b4e","#3d7fd9","#ffd23f"])):i==="barrier"?(n.w=64,n.h=16):i==="sand"?(n.w=56,n.h=44):i==="surfer"?(n.w=40,n.h=14,n.col=on(Fo),n.board=on(["#ff5a5f","#ffd23f","#3ec1d3","#ffffff"])):i==="cart"&&(n.w=22,n.h=34,n.col=on(["#ff7a59","#3ec1d3","#ffd23f","#7bd389"])),n}function hs(i,e,t,n,r){for(var s=[62,105,148],a=Gi()*3|0,o=Ua(n),l={side:i,y0:e,cust:t,delivered:!1,missed:!1,slot:a,doorY:e+s[a],wins:[],roof:on(t?_h:vh),c:null,ph:tt(0,6)},c=0;c<3;c++)c!==a&&l.wins.push({y:e+s[c],broken:!1});if(t){var u=Gi(),h="porch",d=r?0:o.pacer,m=d+(r?0:o.quitter),_=m+(r?.3:o.curb);u<d?h="pacer":u<m?h="quit":u<_?h="curb":u<_+.3&&(h="yard");var v=i<0?ri:si,g=-i,p=l.doorY+(h==="yard"?(Ft(.5)?-1:1)*tt(26,36):0),A=v+g*(h==="yard"||h==="pacer"?tt(18,27):11);l.c={type:h,x:A,y:p,by:p,hx:A,cx:i<0?Ma-9:zl+9,ph:tt(0,6),happy:0,wait:-1,gone:!1,skin:on(xh),shirt:on(Fo),hair:on(["#3b2a1a","#111","#b5651d","#e6c35c","#888"])}}return l}function Qu(i){f.lots=[],f.obs=[],f.pies=[],f.pops=[],f.parts=[],f.decals=[];var e=Ua(i),t=e.lots,n=ya,r,s,a;for(r=0;r<t;r++){f.lots.push(hs(-1,n,Ft(e.order),i)),f.lots.push(hs(1,n,Ft(e.order),i));var o=[145,335];for(s=0;s<2;s++)Ft(e.side)&&f.obs.push(an(Ft(.6)?"can":"hydrant",o[s]+tt(-7,7),n+tt(10,ni-10)));if(Ft(e.road)){var l=Gi();f.obs.push(an(l<.4?"cone":l<.75?"pothole":"puddle",tt(178,302),n+tt(0,ni)))}e.dog&&Ft(e.dog)&&(s=Ft(.5)?-1:1,a=an("dog",s<0?114:366,n+tt(60,150)),a.side=s,f.obs.push(a)),e.dcar&&Ft(e.dcar)&&(s=Ft(.5)?-1:1,a=an("dcar",s<0?74:406,n+19),a.side=s,f.obs.push(a)),e.ball&&Ft(e.ball)&&(s=Ft(.5)?-1:1,a=an("ball",s<0?120:360,n+tt(40,170)),a.side=s,f.obs.push(a)),e.barrier&&r>2&&Ft(e.barrier)&&f.obs.push(an("barrier",Ft(.5)?200:280,n+tt(30,180))),e.sand&&Ft(e.sand)&&f.obs.push(an("sand",tt(190,290),n+tt(0,ni))),e.surfer&&r>1&&Ft(e.surfer)&&(s=Ft(.5)?-1:1,a=an("surfer",s<0?122:358,n+tt(40,170)),a.side=s,f.obs.push(a)),r%e.pickupEvery===1&&f.obs.push(an("pickup",tt(152,328),n+tt(20,190))),n+=ni}var c=e.lives>1&&Ft(.5)?2:1,u=[.35,.78];for(r=0;r<c;r++)f.obs.push(an("life",tt(170,310),ya+Math.floor(t*u[r])*ni+tt(30,180)));var h=0;for(r=0;r<f.lots.length;r++)f.lots[r].cust&&h++;for(var d=0;h<12&&d++<400;){var m=Gi()*f.lots.length|0;f.lots[m].cust||(f.lots[m]=hs(f.lots[m].side,f.lots[m].y0,!0,i),h++)}return f.finishY=n+240,h}function Eh(i){f.lots=[],f.obs=[],f.pies=[],f.pops=[],f.parts=[],f.decals=[];var e=12,t=ya,n;for(n=0;n<e;n++)f.lots.push(hs(-1,t,!0,i,!0)),f.lots.push(hs(1,t,!0,i,!0)),t+=ni;return f.finishY=t+240,e*2}function Oo(i,e){var t=Math.floor((e-ya)/ni);if(t<0)return null;var n=f.lots[t*2+(i<0?0:1)];return n||null}function _s(i){if(f.day=f.day0=i||f.opt.day||1,f.runSeed=f.opt.seed!=null?f.opt.seed:null,f.continued=!!i&&i>1,f.score=0,f.lives=Io,f.newHi=!1,f.opt.bonus&&!i){nf();return}tf()}function ef(){_s(Math.max(1,be.cont||1))}function tf(){rf(!1)}function nf(){rf(!0)}function xc(){if(!f.bonus&&f.day%7===0){nf();return}f.day++,tf()}function rf(i){f.bonus=i,f.ride=f.opt.ride!=null?f.opt.ride:be.ride,f.V=Er[f.ride],f.T=Ua(f.day),f.hood=kl(f.day),f.dusk=(f.day-1)%7>=4,Ju((f.runSeed!=null?f.runSeed+(f.day-f.day0):$u(f.day))+(i?7777:0)),f.step=0;var e=i?Eh(f.day):Qu(f.day);f.cam=0,Ae.x=Ae.tx=280,Ae.sy=Ae.ty=590,f.heat=100,f.streak=0,f.pizzas=f.V.cap,f.shieldLeft=i?0:f.V.shield,f.inv=0,f.stun=0,f.slip=0,f.sand=0,f.shake=0,f.throwCd=0,f.throwAnim=0,f.lifeFlash=0,f.carT=tt(1.5,3),f.slowT=tt(3,5),f.skateT=tt(4,8),f.cartT=f.T.cart?tt(4,8):0,f.bannerT=2.4,f.day===1&&!i&&(f.hintT=9),f.stats={orders:e,delivered:0,hand:0,door:0,smash:0,missed:0,tips:0,crashes:0,bonks:0,fed:0},f.dogTip=!1,!i&&f.opt.day==null&&be.cont!==f.day&&(be.cont=f.day,li()),f.state="play"}function bh(i){be.bank+=i,f.stats&&(f.stats.tips+=i)}function sf(i){f.overWhy=i,f.state="over",f.score>be.hi&&(be.hi=f.score,f.newHi=!0),f.day>be.bestDay&&(be.bestDay=f.day),li(),et("bad")}function Th(){if(f.bonus){var i=f.stats.delivered===f.stats.orders,e=2*f.stats.delivered,t=i?50:0;be.bank+=e+t,i&&(f.score+=2e3),f.report={bonus:!0,pay:e,perfect:t,pct:Math.round(100*f.stats.delivered/f.stats.orders),healed:!1,title:i?"PARTY HERO":f.stats.delivered>=f.stats.orders*.6?"LIFE OF THE PARTY":"PARTY CRASHER"},f.score>be.hi&&(be.hi=f.score,f.newHi=!0),li(),f.state="report",et("win");return}var n=f.stats.orders?f.stats.delivered/f.stats.orders:1;if(n<.5){sf("fired");return}var r=10+5*f.day,s=f.stats.missed===0&&f.stats.smash===0&&f.stats.crashes===0?25:0;be.bank+=r+s,f.score+=s?1e3:0;var a="BARELY EMPLOYED";s?a="EMPLOYEE OF THE DAY":f.stats.smash>=3?a="WINDOW MENACE":n>=.9&&f.stats.hand>=f.stats.door?a="HAND-OFF HERO":n>=.9?a="RELIABLE DRIVER":n>=.7&&(a="DECENT DRIVER"),f.report={pay:r,perfect:s,title:a,pct:Math.round(n*100),healed:f.lives<Io},f.lives<Io&&f.lives++,f.score>be.hi&&(be.hi=f.score,f.newHi=!0),f.day>be.bestDay&&(be.bestDay=f.day),li(),f.state="report",et("win")}function Ot(i,e,t,n,r,s){f.pops.push({wx:i,wy:e,lift:s||0,txt:t,col:n||"#fff",t:0,size:r||16})}function Mc(i,e,t,n,r){f.pops.push({sx:i,sy:e,lift:0,txt:t,col:n||"#fff",t:0,size:r||16})}function Gl(i,e,t,n,r){for(var s=f.project(i,e,0),a=0;a<t;a++){var o=tt(0,6.28),l=tt(30,r||160);f.parts.push({x:s.x,y:s.y,vx:Math.cos(o)*l,vy:Math.sin(o)*l,t:0,life:tt(.3,.7),col:on(n),s:tt(2,4)})}}function ki(i){if(!(f.state!=="play"||f.throwCd>0)){if(i<0?f.flashL=.25:f.flashR=.25,f.pizzas<=0){Ot(Ae.x,f.cam+pt-Ae.sy,"OUT OF PIZZA!","#ffd23f",16,34),et("empty"),f.throwCd=.25;return}var e=of(i);e.lot&&(e.lot.claim=f.step+50),f.bonus||f.pizzas--,f.throwCd=.2,f.throwAnim=.18,f.throwDir=i,f.pies.push({x:Ae.x+i*10,y:f.cam+pt-Ae.sy,vx:i*ss,vy:f.speed,d:0,side:i,rot:tt(0,6)}),et("throw")}}function yc(i){for(var e=f.cam+pt-Ae.sy,t=null,n=0;n<f.obs.length;n++){var r=f.obs[n];r.type!=="dog"||r.out||r.st!==1&&r.st!==2||Math.abs(r.y-e)>Gu||(r.x-Ae.x)*i<-12||(!t||r.y<t.y)&&(t=r)}return t}function af(i,e,t,n){i.st=3,i.gx=e,i.gy=t,f.stats.fed++,f.score+=25,et("bark"),Ot(i.x,i.y,n+"  +25","#9cf07a",15,34)}function Ah(){for(var i=f.cam+pt-Ae.sy,e=null,t=1e9,n=0;n<f.lots.length;n++){var r=f.lots[n];if(!(!r.cust||r.delivered||r.missed)){var s=r.doorY-i;if(!(s<-40||s>260)){var a=r.side<0?ri:si;if(!(Math.abs(Ae.x-a)>vr+10)){var o=Math.abs(s-60);o<t&&(t=o,e=r)}}}}if(!e){if(yc(-1)){ki(-1);return}if(yc(1)){ki(1);return}}ki(e?e.side:Ae.x<240?-1:1)}function Za(i,e,t){i.delivered=!0,i.c.happy=1.4,f.stats.delivered++;var n=1+f.heat/100,r,s,a,o,l=i.c.x,c=i.c.y,u=f.bonus?2:1;if(e){f.streak++;var h=Math.min(f.streak,5),d=i.c.type==="quit"?1.5:1;r=Math.round(250*n*h*d*u/10)*10,s=Math.max(1,Math.round(3*n*(1+.25*(h-1))*f.V.tip*d*u)),f.stats.hand++,a=(d>1?"JUST IN TIME!":"HAND-OFF!")+(h>1?" x"+h:""),o="#ffd23f",et("hand"),Gl(l,c,14,["#ffd23f","#fff","#ff9f1c"],200),Ot(l,c,a,o,20,38),Ot(l,c,"+"+r+"  $"+s,"#fff",14,18)}else r=Math.round(100*n*u/10)*10,s=Math.max(1,Math.round(1*n*f.V.tip*u)),f.stats.door++,et("door"),Ot(l,c,"FRONT DOOR","#9cf07a",16,38),Ot(l,c,"+"+r+"  $"+s,"#fff",14,20);f.score+=r,bh(s),f.heat=Math.min(100,f.heat+40)}function wh(i){var e=f.cam+pt-Ae.sy;if(f.shieldLeft>0){f.shieldLeft--,f.inv=1.3,f.shake=.2,et("shield"),Ot(Ae.x,e,"BUMPER SAVED YOU!","#5ad1ff",16,40);return}f.lives--,f.inv=1.9,f.stun=.6,f.streak=0,f.heat=Math.max(0,f.heat-25),f.shake=.45,f.stats.crashes++,f.lifeFlash=1,et("crash"),Ot(Ae.x,e,"WIPEOUT!","#ff5964",22,46),f.lives>0&&Ot(Ae.x,e,f.lives+(f.lives===1?" LIFE":" LIVES")+" LEFT","#fff",14,24),Gl(Ae.x,e,18,["#fff","#ffd23f","#ff5964","#e8b04a"],240),f.lives<=0&&sf("crash")}function Rh(i){i.out=!0,i.vx=(i.x>=Ae.x?1:-1)*tt(170,250),i.vy=f.speed*.7,i.t=0,f.stats.bonks++,f.score+=10,et("bonk"),Ot(i.x,i.y,i.type==="dog"?"YIP!":i.type==="skater"?"WHOA!":"BONK!","#5ad1ff",13,26)}function Sc(i){f.tGame+=i;var e,t,n,r;for(e=f.pops.length-1;e>=0;e--)r=f.pops[e],r.t+=i,r.t>1.2&&f.pops.splice(e,1);for(e=f.parts.length-1;e>=0;e--)r=f.parts[e],r.t+=i,r.x+=r.vx*i,r.y+=r.vy*i,r.vy+=300*i,r.t>r.life&&f.parts.splice(e,1);if(f.shake>0&&(f.shake-=i),f.flashL>0&&(f.flashL-=i),f.flashR>0&&(f.flashR-=i),f.lifeFlash>0&&(f.lifeFlash-=i),f.state==="title"){f.cam+=110*i,f.cam>f.finishY-pt-300&&(f.cam=0),Ec(i,-1e9);return}if(f.state==="play"){f.step++,f.inv>0&&(f.inv-=i),f.stun>0&&(f.stun-=i),f.slip>0&&(f.slip-=i),f.sand>0&&(f.sand-=i),f.throwCd>0&&(f.throwCd-=i),f.throwAnim>0&&(f.throwAnim-=i),f.bannerT>0&&(f.bannerT-=i),f.hintT>0&&(f.hintT-=i);var s=(f.keys.ArrowRight||f.keys.KeyL?1:0)-(f.keys.ArrowLeft||f.keys.KeyJ?1:0),a=(f.keys.ArrowDown||f.keys.KeyK?1:0)-(f.keys.ArrowUp||f.keys.KeyI?1:0),o=f.V.steer*(f.stun>0||f.slip>0?.4:1);if(s||a)Ae.x+=s*o*i,Ae.sy+=a*250*i,Ae.tx=Ae.x,Ae.ty=Ae.sy;else{var l=o*1.6*i,c=460*i;Ae.x+=kt(Ae.tx-Ae.x,-l,l),Ae.sy+=kt(Ae.ty-Ae.sy,-c,c)}var u=Ma+f.V.w/2+1,h=zl-f.V.w/2-1;Ae.x=kt(Ae.x,u,h),Ae.sy=kt(Ae.sy,qa,Ds),Ae.tx=kt(Ae.tx,u,h),Ae.ty=kt(Ae.ty,qa,Ds);var d=(Ds-Ae.sy)/(Ds-qa),m=(f.bonus?190:f.T.speed)*f.V.spd;f.speed=m*(.8+.5*d)*(f.stun>0?.35:1)*(f.sand>0?.6:1),f.cam+=f.speed*i,f.heat=Math.max(0,f.heat-6.5*f.V.heat*i);var _=f.cam+pt-Ae.sy,v=f.bonus||f.cam+Xr>f.finishY-80;for(f.carT-=i,f.carT<=0&&!v&&(f.carT=tt(f.T.carDown,f.T.carDown+2.2),n=an("carD",200+tt(-8,8),f.cam+Xr),n.vy=-(110+tt(0,90)),f.obs.push(n)),f.slowT-=i,f.slowT<=0&&!v&&(f.slowT=tt(f.T.carUp,f.T.carUp+3),n=an("carU",280+tt(-8,8),f.cam+Xr),n.vy=m*.42,f.obs.push(n)),f.T.cart&&(f.cartT-=i,f.cartT<=0&&!v&&(f.cartT=tt(f.T.cart[0],f.T.cart[1]),n=an("cart",240,f.cam+Xr),n.vy=m*.5,n.ph=tt(0,6.28),f.obs.push(n))),f.T.skater&&(f.skateT-=i,f.skateT<=0&&!v&&(f.skateT=tt(f.T.skater[0],f.T.skater[1]),n=an("skater",Ft(.5)?145:335,f.cam+Xr-30),n.bx=n.x,n.vy=-70,f.obs.push(n))),Ec(i,_),e=0;e<f.lots.length;e++)t=f.lots[e],t.cust&&!t.delivered&&!t.missed&&t.y0+ni<f.cam-6&&(t.missed=!0,f.stats.missed++,f.bonus||(f.streak=0,Mc(t.side<0?80:pe-80,pt-170,"MISSED ORDER!","#ff5964",18),et("bad")));var g=f.V.w*.78,p=f.V.h*.78;for(e=f.obs.length-1;e>=0;e--){if(n=f.obs[e],n.t+=i,n.out){n.x+=n.vx*i,n.y+=n.vy*i,(n.x<-60||n.x>pe+60||n.y<f.cam-90||n.t>2.5)&&f.obs.splice(e,1);continue}var A=Mh(n.y);if(n.type==="dog"){var E=n.y-_;if(n.st===0&&E<Gu&&E>0&&(n.st=1,et("bark"),!f.dogTip&&f.V.perk.indexOf("dog")<0&&(f.dogTip=!0,Mc(pe/2,250,"DOG!  THROW IT A PIZZA","#ffd23f",15))),n.st===1&&E<ph&&(n.st=2,n.ct=0),n.st===2){n.ct+=i;var x=_-14;n.vy=n.y>x+4?f.speed*.2:n.y<x-4?f.speed*1.3:f.speed,n.x+=kt(Ae.x-n.x,-mc*i,mc*i),n.x=kt(n.x,118,362),n.ct>=mh&&(n.st=5)}else if(n.st===3){n.vy=0;var U=n.gx-n.x,C=n.gy-n.y,P=Math.sqrt(U*U+C*C);if(P<6)n.st=4,n.x=n.gx,n.y=n.gy;else{var D=Math.min(P,230*i);n.x+=U/P*D,n.y+=C/P*D}}else n.st===4?n.vy=0:n.st===5&&(n.vy=0,n.x+=kt((n.side<0?120:360)-n.x,-120*i,120*i))}else if(n.type==="dcar"){if(n.st===0&&A>200&&(n.st=1,et("beep")),n.st===1&&A>310&&(n.st=2),n.st===2){n.x+=-n.side*88*i;var b=n.side<0?205:275;(n.side<0&&n.x>=b||n.side>0&&n.x<=b)&&(n.x=b,n.st=3)}}else if(n.type==="skater")n.x=n.bx+Math.sin(n.t*3)*9;else if(n.type==="cart")n.x=240+Math.sin(n.t*.9+n.ph)*42;else if(n.type==="surfer"){if(n.st===0&&n.y-_<430&&A<pt&&(n.st=1),n.st===1&&(n.x+=-n.side*70*i,n.x<116||n.x>364)){f.obs.splice(e,1);continue}}else if(n.type==="ball"&&(n.st===0&&A>240&&A<pt&&(n.st=1),n.st===1&&(n.x+=-n.side*95*i,n.x<112||n.x>368))){f.obs.splice(e,1);continue}if(n.y+=n.vy*i,n.y<f.cam-90){f.obs.splice(e,1);continue}if(Math.abs(n.x-Ae.x)<(n.w+g)/2&&Math.abs(n.y-_)<(n.h+p)/2){if(n.type==="dog"&&n.st>=3)continue;if(n.type==="pickup"){var y=f.V.cap-f.pizzas;f.pizzas=f.V.cap,f.obs.splice(e,1),et("pickup"),Ot(Ae.x,_,y>0?"+"+y+" PIZZAS":"BAG IS FULL","#ffd23f",16,36);continue}if(n.type==="life"){f.obs.splice(e,1),et("life"),f.lives<Ia?(f.lives++,f.lifeFlash=1,Ot(Ae.x,_,"+1 LIFE","#ff6b7d",20,40)):(f.score+=250,Ot(Ae.x,_,"FULL LIVES  +250","#ff6b7d",16,40));continue}if(n.type==="sand"){f.sand=.3,n.hit||(n.hit=!0,et("sand"),Ot(Ae.x,_,"SAND!","#e8c877",15,34));continue}if(n.type==="puddle"){n.hit||(n.hit=!0,f.slip=.9,f.heat=Math.max(0,f.heat-10),et("splash"),Ot(Ae.x,_,"SPLASH!","#7fd4ff",15,34));continue}if(f.V.perk.indexOf(n.type)>=0){n.type!=="pothole"?Rh(n):n.hit||(n.hit=!0,Ot(Ae.x,_,"SMOOTH!","#5ad1ff",12,30));continue}if(f.inv<=0&&!f.opt.ghost){if(wh(),n.type==="dog"&&(n.st=5),f.state!=="play")return}else n.type==="dog"&&(n.st=5)}}for(e=f.pies.length-1;e>=0;e--){r=f.pies[e];for(var L=!1,k=0;k<3&&!L;k++)r.x+=r.vx*i/3,r.y+=r.vy*i/3,r.d+=Math.abs(r.vx)*i/3,L=Ch(r);r.rot+=i*9,L&&f.pies.splice(e,1)}f.decals.length>40&&f.decals.splice(0,f.decals.length-40),_>=f.finishY&&Th()}}function Ec(i,e){for(var t=0;t<f.lots.length;t++){var n=f.lots[t];if(n.cust){var r=n.c;if(!(n.y0>f.cam+pt+700||n.y0+ni<f.cam-50)&&(r.happy>0&&(r.happy-=i),!n.delivered)){var s=n.doorY-e;r.type==="pacer"?r.y=r.by+Math.sin(f.tGame*2.1+r.ph)*30:r.type==="curb"?!n.missed&&s<700&&s>-80&&(r.x+=kt(r.cx-r.x,-70*i,70*i)):r.type==="quit"&&!r.gone&&(r.wait<0?s<640&&s>-80&&(r.wait=f.T.patience):(r.wait-=i,r.wait<=0&&(r.gone=!0,r.goneT=0,Ot(r.x,r.y,"GAVE UP!","#ffb4b4",13,40)))),r.gone&&(r.goneT+=i,r.x+=kt((n.side<0?ri:si)-r.x,-60*i,60*i))}}}}function Us(i,e){f.streak=0,f.decals.push({x:i.x,y:i.y}),et("miss"),Ot(i.x,i.y,e,"#c9ced6",13,12);for(var t=null,n=gh,r=0;r<f.obs.length;r++){var s=f.obs[r];if(!(s.type!=="dog"||s.out||s.st!==1&&s.st!==2)){var a=s.x-i.x,o=s.y-i.y,l=Math.sqrt(a*a+o*o);l<n&&(n=l,t=s)}}t&&af(t,i.x,i.y,"FETCH!")}function Ch(i){var e,t,n,r=i.side<0?ri:si;for(e=0;e<f.obs.length;e++){var s=f.obs[e];if(s.type==="dog"&&!s.out&&s.st===2&&Math.abs(i.x-s.x)<16&&Math.abs(i.y-s.y)<34)return f.decals.push({x:s.x,y:s.y}),af(s,s.x,s.y,"CHOMP!"),!0}for(e=0;e<f.lots.length;e++)if(t=f.lots[e],!(t.side!==i.side||!t.cust||t.delivered||t.missed||t.c.gone)&&!(Math.abs(t.y0+105-i.y)>170)){n=t.c;var a=n.x-i.x,o=n.y-i.y;if(a*a+o*o<fs*fs)return Za(t,!0),!0}if((i.side<0&&i.x<=r||i.side>0&&i.x>=r)&&(t=Oo(i.side,i.y),t)){var l=i.y-t.y0;if(l>=Vu&&l<=Wu){if(Math.abs(i.y-t.doorY)<=No)return t.cust&&!t.delivered&&!t.missed?(Za(t,!1),!0):(Us(i,t.cust?"ALREADY SERVED":"WRONG HOUSE!"),!0);for(e=0;e<t.wins.length;e++){var c=t.wins[e];if(Math.abs(i.y-c.y)<=Xu){if(c.broken)Us(i,"THUNK");else{c.broken=!0,f.stats.smash++,f.streak=0,f.score=Math.max(0,f.score-50);var u=Math.min(5,be.bank);be.bank-=u,f.stats.tips-=u,et("smash"),f.shake=.15,Gl(r,c.y,14,["#9ad8ff","#fff","#d6f1ff"],180),Ot(r,c.y,"SMASH!  -$"+u,"#ff5964",17,14)}return!0}}return Us(i,"THUNK"),!0}}return i.d>=vr||i.x<-12||i.x>pe+12?(t=Oo(i.side,i.y),t&&t.cust&&!t.delivered&&!t.missed&&Math.abs(i.y-t.doorY)<=No&&Math.abs(i.x-r)<=24?(Za(t,!1),!0):(Us(i,"SPLAT"),!0)):!1}function Na(){f.state="title",f.bonus=!1,f.day=3,f.T=Ua(3),f.hood=kl(3),f.dusk=!1,Ju($u(3)),Qu(3),f.cam=0}function of(i){for(var e=i<0?ri:si,t=f.cam+pt-Ae.sy,n=Ae.x+i*10,r=Math.abs(e-n),s=!1,a=0;a<f.obs.length;a++){var o=f.obs[a];if(!(o.type!=="dog"||o.out||o.st!==2||(o.x-n)*i<0||Math.abs(o.x-n)>vr)){var l=Math.abs(o.x-n)/ss,c=o.y-t+(o.vy-f.speed)*l;if(Math.abs(c)<26)return{x:o.x,y:o.y,hit:"dog",lot:null};o.y-t>-48&&o.y-t<90&&(s=!0)}}if(r>vr)return{x:n+i*vr,y:t+f.speed*vr/ss,hit:"far",lot:null};for(var u=t+f.speed*r/ss,h="wall",d=null,m=0;m<f.lots.length;m++){var _=f.lots[m];if(!(_.side!==i||!_.cust||_.delivered||_.missed||_.claim>f.step||Math.abs(_.y0+105-u)>170)){var v=_.c,g=v.type==="pacer",p=v.type==="curb"&&Math.abs(v.cx-v.x)>1,A=Math.abs(v.x-n)/ss,E=t+f.speed*A,x=g?v.by+Math.sin((f.tGame+A)*2.1+v.ph)*30:v.y;if(!v.gone&&Math.abs(E-x)<(g?fs-7:p?fs-11:fs-3)){h="hand",d=_;break}Math.abs(u-_.doorY)<=No-3&&(h="door",d=_)}}if(h==="wall"){var U=Oo(i,u);if(U&&u-U.y0>=Vu&&u-U.y0<=Wu)for(var C=0;C<U.wins.length;C++)!U.wins[C].broken&&Math.abs(u-U.wins[C].y)<=Xu&&(h="window")}return s&&(h==="hand"||h==="door")&&(h="wall",d=null),{x:e,y:u,hit:h,lot:d}}function ze(i,e,t,n,r){oe.fillStyle=r,oe.fillRect(i,e,t,n)}function ln(i,e,t,n){oe.fillStyle=n,oe.beginPath(),oe.arc(i,e,t,0,6.2832),oe.fill()}function Rt(i,e,t,n,r,s){oe.fillStyle=s,oe.beginPath(),oe.moveTo(i+r,e),oe.lineTo(i+t-r,e),oe.quadraticCurveTo(i+t,e,i+t,e+r),oe.lineTo(i+t,e+n-r),oe.quadraticCurveTo(i+t,e+n,i+t-r,e+n),oe.lineTo(i+r,e+n),oe.quadraticCurveTo(i,e+n,i,e+n-r),oe.lineTo(i,e+r),oe.quadraticCurveTo(i,e,i+r,e),oe.closePath(),oe.fill()}function Fa(i,e,t,n,r,s,a){oe.fillStyle=a,oe.beginPath(),oe.moveTo(i,e),oe.lineTo(t,n),oe.lineTo(r,s),oe.closePath(),oe.fill()}var Ph='"Courier New",Courier,monospace';function ue(i,e,t,n,r,s,a){oe.font="bold "+n+"px "+Ph,oe.textAlign=s||"left",oe.textBaseline="middle",a&&(oe.lineWidth=Math.max(3,n/5),oe.strokeStyle=a,oe.lineJoin="round",oe.strokeText(i,e,t)),oe.fillStyle=r,oe.fillText(i,e,t)}function Ea(i,e,t){Fa(i-t,e-t,i+t,e-t,i,e+t*1.2,"#ffc93c"),ze(i-t-1,e-t-t*.35,t*2+2,t*.45,"#c98a3a"),ln(i-t*.3,e-t*.45,t*.22,"#d7263d"),ln(i+t*.35,e-t*.3,t*.2,"#d7263d"),ln(i,e+t*.25,t*.18,"#d7263d")}function Lh(i,e,t){ze(i-t,e-t,t*2,t*2,"#e8b04a"),ze(i-t,e-t,t*2,t*.45,"#c98a3a"),ln(i,e+t*.2,t*.5,"#d7263d"),ln(i,e+t*.2,t*.25,"#ffc93c")}function bc(i,e,t,n){Rt(i-8,e-4,16,9,4,"#d7263d"),ze(i-9,e-6,3.5,5,"#f2c9a0"),ze(i+5.5,e-6,3.5,5,"#f2c9a0"),ln(i,e-1,5.6,"#b3001b"),ze(i-4.5,e-9,9,3.5,"#7d0013"),ln(i,e-1,1.4,"#fff")}function Dh(i,e,t,n,r,s){if(i===0){var a=Math.sin(s*7)*1.2;ze(e-17,t+3,34,9,"rgba(0,0,0,0.25)"),ze(e-19,t,6,12,"#111"),ze(e+13,t,6,12,"#111"),Rt(e-14,t+1,28,10,3,"#22252e"),ze(e-12,t+9,9,2,"#4de1ff"),ze(e+3,t+9,9,2,"#4de1ff"),ze(e-7,t+8+a*.3,14,10,"#c1121f"),Ea(e,t+13+a*.3,3.2),bc(e+a*.5,t+2)}else if(i===1)ze(e-2,t-17,7,38,"rgba(0,0,0,0.22)"),Rt(e-3,t-21,6,12,2,"#111"),Rt(e-3.5,t+8,7,13,2,"#111"),Rt(e-4,t-11,8,22,3,"#ff7b00"),ze(e-3,t-12,6,4,"#fff"),ze(e-10,t-13,20,3,"#333"),ze(e-11,t-14,3,5,"#111"),ze(e+8,t-14,3,5,"#111"),ze(e-7,t+6,14,10,"#c1121f"),Ea(e,t+11,3.2),bc(e,t-1);else if(i===2)Rt(e-11,t-22,26,50,7,"rgba(0,0,0,0.3)"),Rt(e-13,t-25,26,50,7,"#2a2e35"),Rt(e-11,t-23,22,14,5,"#3a4049"),ze(e-10,t-10,20,8,"#3b6a8c"),ze(e-9,t+11,18,6,"#2b4d66"),Rt(e-10,t-2,20,13,2,"#1c1f25"),ze(e-6,t,12,8,"#101216"),ze(e-11,t-25,6,3,"#fff6c2"),ze(e+5,t-25,6,3,"#fff6c2"),ze(e-11,t+22,7,3,"#ff2e43"),ze(e+4,t+22,7,3,"#ff2e43"),ze(e-15,t-9,3,4,"#2a2e35"),ze(e+12,t-9,3,4,"#2a2e35"),ze(e-1,t-23,2,12,"#4a515c");else{Rt(e-13,t-26,30,58,6,"rgba(0,0,0,0.3)"),Rt(e-15,t-29,30,58,6,"#e3202e"),ze(e-15,t-6,30,5,"#fff1d0"),ze(e-15,t+20,30,3,"#fff1d0"),ze(e-12,t-24,24,9,"#3b6a8c"),ze(e-13,t-29,6,3,"#fff6c2"),ze(e+7,t-29,6,3,"#fff6c2"),ze(e-13,t+26,6,3,"#ff2e43"),ze(e+7,t+26,6,3,"#ff2e43"),ze(e-17,t-22,3,4,"#2c3040"),ze(e+14,t-22,3,4,"#2c3040");var o=.45+.4*Math.sin(s*6);oe.save(),oe.shadowColor="rgba(255,210,63,"+o.toFixed(2)+")",oe.shadowBlur=16*f.SC,Fa(e,t-11,e-12,t+15,e+12,t+15,"#ffc93c"),oe.restore(),ze(e-13,t+13,26,5,"#c98a3a"),ln(e,t-1,2.4,"#d7263d"),ln(e-4,t+7,2.4,"#d7263d"),ln(e+4,t+8,2.2,"#d7263d");for(var l=Math.floor(s*5)%2,c=0;c<4;c++){var u=c/3;ln(e-u*12,t-11+u*26,1.3,(c+l)%2?"#fff":"#ff9f1c"),ln(e+u*12,t-11+u*26,1.3,(c+l)%2?"#ff9f1c":"#fff")}}}function Ih(i,e,t,n){n=n||1;var r=t?"#ff3b4e":"#4a4d57";ln(i-4*n,e-2*n,5*n,r),ln(i+4*n,e-2*n,5*n,r),Fa(i-9*n,e,i+9*n,e,i,e+10*n,r)}function Vl(i,e,t,n){for(var r=Math.min(Ia,Math.max(3,f.lives)),s=0;s<r;s++)Ih(i+s*t,e,s<f.lives,n);return r}function Pr(i,e){for(var t=String(i);t.length<e;)t="0"+t;return t}function Uh(){ze(0,0,pe,60,"rgba(15,16,22,0.9)"),ue("SCORE",10,14,11,"#9aa3b2"),ue(Pr(f.score,6),10,32,20,"#fff");var i=Math.floor((f.day-1)/7)+1;ue(Cr[(f.day-1)%7].slice(0,3)+(i>1?" WK"+i:""),pe/2,14,13,"#ffd23f","center"),ue((f.bonus?"PARTY ":"ORDERS ")+f.stats.delivered+"/"+f.stats.orders,pe/2,33,13,f.stats.missed&&!f.bonus?"#ffb4b4":"#cfd6e3","center"),ue("$"+be.bank,pe-86,32,16,"#9cf07a","right"),Rt(pe-76,6,32,30,6,"#2a2e3a"),ze(pe-66,13,4,16,"#fff"),ze(pe-58,13,4,16,"#fff"),Rt(pe-38,6,32,30,6,"#2a2e3a"),ue(be.mute?"OFF":"SND",pe-22,21,10,be.mute?"#ff8a8a":"#fff","center"),Vl(18,50,20,f.lifeFlash>0?.82+.3*Math.abs(Math.sin(f.lifeFlash*14)):.82),Lh(126,51,7),ue(f.bonus?"FREE":"x"+f.pizzas,138,51,15,f.bonus?"#9cf07a":f.pizzas===0?"#ff5964":f.pizzas<=2?"#ffd23f":"#fff"),ue("HOT",190,51,11,"#ff9f1c"),ze(216,45,168,12,"#2a2e3a");var e=f.heat>60?"#ff5a1f":f.heat>25?"#ff9f1c":"#5a8dd6";ze(218,47,164*f.heat/100,8,e),ue("TIP x"+(1+f.heat/100).toFixed(1),pe-10,51,12,"#fff","right")}function Nh(){var i=kt(f.bannerT,0,1);if(oe.globalAlpha=i,ze(0,268,pe,f.bonus?156:180,"rgba(15,16,22,0.82)"),ue("WEEK "+Hl(f.day)+"  -  "+f.hood.name+(f.dusk?"  -  EVENING":""),pe/2,290,13,"#9cf07a","center"),f.bonus)ue("PIZZA PARTY!",pe/2,328,34,"#ffd23f","center","#000"),ue("BONUS ROUND  -  EVERY HOUSE ORDERED",pe/2,366,14,"#fff","center"),ue("Free pizza. Double tips. Nothing in the way.",pe/2,398,13,"#9cf07a","center");else{ue(Cr[(f.day-1)%7],pe/2,326,34,"#ffd23f","center","#000"),ue(f.stats.orders+" ORDERS  -  DELIVER AT LEAST HALF",pe/2,364,14,"#fff","center");var e=Math.min(Ia,Math.max(3,f.lives));ue("LIVES",pe/2-e*11-12,399,13,"#cfd6e3","right"),Vl(pe/2-e*11+10,397,22,1),ue(f.V.perkShort,pe/2,430,12,"#5ad1ff","center")}oe.globalAlpha=1}function Fh(){oe.globalAlpha=kt(f.hintT,0,1),ze(0,pt-74,pe,74,"rgba(15,16,22,0.82)"),f.isTouch?(ue("DRAG to steer  -  higher = faster",pe/2,pt-52,14,"#fff","center"),ue("TAP left or right side to THROW",pe/2,pt-28,14,"#ffd23f","center")):(ue("ARROWS steer  -  higher = faster",pe/2,pt-52,14,"#fff","center"),ue("Z throw left   X throw right   SPACE auto",pe/2,pt-28,14,"#ffd23f","center")),oe.globalAlpha=1}function Oh(){for(var i=He.VH-He.bottom-(f.hintT>0?148:72),e=[[-1,8,f.flashL],[1,pe-128,f.flashR]],t=0;t<2;t++){var n=e[t][0],r=e[t][1],s=kt(e[t][2]*4,0,1);Rt(r,i,120,56,14,"rgba(15,16,22,"+(.38+.2*s).toFixed(2)+")"),oe.strokeStyle="rgba(255,210,63,"+(.45+.55*s).toFixed(2)+")",oe.lineWidth=2,oe.strokeRect(r+3,i+3,114,50);var a=n<0?r+22:r+98;Fa(a+n*12,i+28,a-n*6,i+16,a-n*6,i+40,"#ffd23f"),ue("THROW",n<0?r+76:r+44,i+21,13,"#fff","center"),ue(n<0?"LEFT":"RIGHT",n<0?r+76:r+44,i+38,13,"#ffd23f","center")}}function Bh(){var i,e;for(i=0;i<f.parts.length;i++){var t=f.parts[i];oe.globalAlpha=kt(1-t.t/t.life,0,1),ze(t.x,t.y,t.s,t.s,t.col)}if(oe.globalAlpha=1,f.state==="play"||f.state==="pause"){for(i=0;i<f.obs.length;i++){var n=f.obs[i];n.y<f.cam-60||n.y>f.cam+1300||(n.type==="dcar"&&n.st===1?(e=f.project(n.x,n.y,40),ue("!",e.x,e.y,18,"#ffd23f","center","#000")):n.type==="dog"&&(n.st===1||n.st===2)&&n.t%.6<.3?(e=f.project(n.x,n.y,34),ue("GRR",e.x,e.y,11,"#fff","center","#000")):n.type==="dog"&&n.st===4?(e=f.project(n.x,n.y,34),ue("YUM",e.x,e.y,11,"#9cf07a","center","#000")):n.type==="pickup"&&!f.bonus?(e=f.project(n.x,n.y,34),ue("PIZZA",e.x,e.y-Math.sin(n.t*5)*2,11,"#ffd23f","center","#000")):n.type==="life"&&(e=f.project(n.x,n.y,44),ue("+1 LIFE",e.x,e.y-Math.sin(n.t*5)*2,12,"#ff6b7d","center","#000")))}for(i=0;i<f.lots.length;i++){var r=f.lots[i];if(!(!r.cust||r.delivered||r.missed||r.y0<f.cam-260||r.y0>f.cam+1300)){if(r.c.type==="pacer")e=f.project(r.c.x,r.c.y,62),ue("!",e.x,e.y,14,"#ffd23f","center","#000");else if(r.c.type==="quit"&&!r.c.gone&&r.c.wait>=0){e=f.project(r.c.x,r.c.y,62);var s=kt(r.c.wait/f.T.patience,0,1);ze(e.x-13,e.y-4,26,7,"rgba(15,16,22,0.85)"),ze(e.x-12,e.y-3,24*s,5,s>.4?"#ffd23f":"#ff5964")}}}f.streak>=2&&(e=f.project(Ae.x+f.V.w/2+16,f.cam+pt-Ae.sy,30),ue("x"+Math.min(f.streak,5),e.x,e.y,15,"#ffd23f","center","#000"))}for(i=0;i<f.pops.length;i++){var a=f.pops[i];e=a.sx!=null?{x:a.sx,y:a.sy+(He.VH-pt)}:f.project(a.wx,a.wy,20),oe.globalAlpha=kt(1.2-a.t,0,1),ue(a.txt,kt(e.x,70,pe-70),e.y-a.lift-38*a.t,a.size,a.col,"center","#000")}oe.globalAlpha=1}function zh(){var i=f.fps;i&&(Rt(6,66,214,52,8,"rgba(15,16,22,0.8)"),ue(i.now+" fps   avg "+i.avg+"   low "+i.low,14,82,12,"#9cf07a"),ue(i.calls+" draws   "+i.tris+"k triangles",14,102,11,"#cfd6e3"))}function Ct(i,e,t,n,r,s,a){a=a||{};var o=a.disabled?"#3a3d47":a.primary?"#d7263d":"#2f3442";Rt(i,e+4,t,n,10,"rgba(0,0,0,0.45)"),Rt(i,e,t,n,10,o),a.primary&&!a.disabled&&(oe.fillStyle="rgba(255,255,255,0.14)",oe.fillRect(i+6,e+4,t-12,n/2-4)),ue(r,i+t/2,e+n/2+1,a.size||18,a.disabled?"#8b8f9a":"#fff","center"),a.disabled||f.buttons.push({x:i,y:e+f.uiOy,w:t,h:n,fn:s,key:a.key||""})}function lf(i){ze(-He.ox/He.s-2,-2,He.VW+4,He.VH+4,i)}function Ns(i){lf("rgba(12,13,18,"+i+")")}function hi(i,e){oe.save(),oe.translate(0,i),f.uiOy=i,e(),oe.restore(),f.uiOy=0}function Hh(){var i=Math.sin(f.tGame*2)*4;oe.save(),oe.translate(pe/2,150+i),oe.rotate(-.04),ue("PAYTON",4,4,74,"#7d0013","center"),ue("PAYTON",0,0,74,"#ffd23f","center","#1a0b0b"),ue("PIZZA",4,82,86,"#7d0013","center"),ue("PIZZA",0,78,86,"#ff4d2e","center","#1a0b0b"),oe.restore(),Ea(pe/2,292+i,26),ue("HOT. FAST. HAND-DELIVERED.",pe/2,352,15,"#fff","center","#000"),be.cont>1&&f.opt.day==null?(Ct(90,378,300,58,"CONTINUE  "+Cr[(be.cont-1)%7].slice(0,3)+" (DAY "+be.cont+")",function(){et("ui"),ef()},{primary:!0,size:19,key:"Enter"}),Ct(90,444,300,42,"NEW RUN FROM MONDAY",function(){et("ui"),_s()},{size:15,key:"KeyN"}),Ct(90,494,300,44,"GARAGE   $"+be.bank,function(){et("ui"),f.garageFrom="title",f.state="garage"},{size:16,key:"KeyG"})):(Ct(90,392,300,62,"START SHIFT",function(){et("ui"),_s()},{primary:!0,size:24,key:"Enter"}),Ct(90,470,300,52,"GARAGE   $"+be.bank,function(){et("ui"),f.garageFrom="title",f.state="garage"},{key:"KeyG"})),Rt(40,548,400,150,12,"rgba(15,16,22,0.85)"),ue("HOW TO PLAY",pe/2,568,14,"#ffd23f","center"),ue("Pizza on the FRONT DOOR = points",pe/2,592,13,"#fff","center"),ue("Pizza into the customer's HANDS = bonus",pe/2,612,13,"#fff","center"),ue("Gray houses did not order. Mind the windows.",pe/2,632,12,"#cfd6e3","center"),f.isTouch?(ue("DRAG to steer - TAP a side to throw",pe/2,660,13,"#9cf07a","center"),ue("Works with a keyboard too",pe/2,680,11,"#9aa3b2","center")):(ue("ARROWS steer - Z / X throw - SPACE auto",pe/2,660,13,"#9cf07a","center"),ue("P pause - M sound - works on phones too",pe/2,680,11,"#9aa3b2","center")),ue("HIGH SCORE "+Pr(be.hi,6)+(be.bestDay?"   BEST DAY "+be.bestDay:""),pe/2,728,14,"#fff","center","#000"),ue("RIDE: "+Er[be.ride].name,pe/2,754,13,"#ffd23f","center","#000")}function kh(i,e,t,n){Rt(i+5,e+6,t,n,6,"rgba(0,0,0,0.4)"),ze(i,e,t,n,"#fff8e7"),oe.fillStyle="#fff8e7";for(var r=0;r<t;r+=16)oe.beginPath(),oe.moveTo(i+r,e+n),oe.lineTo(i+r+8,e+n+8),oe.lineTo(i+r+16,e+n),oe.fill()}function Dt(i,e,t,n){ue(i,84,t,15,"#3a2a20"),ue(e,pe-84,t,15,n||"#3a2a20","right")}function Ji(i){oe.fillStyle="#b9a98f";for(var e=84;e<pe-84;e+=10)oe.fillRect(e,i,6,2)}function Gh(){var i=f.day%7===0;if(kh(60,78,360,558),Ea(pe/2,116,13),ue("PAYTON PIZZA",pe/2,154,22,"#b3001b","center"),f.report.bonus){ue("PIZZA PARTY TICKET",pe/2,178,13,"#3a2a20","center"),Ji(196),Dt("HOUSES SERVED",f.stats.delivered+" / "+f.stats.orders,226),Dt("  HAND-OFFS",String(f.stats.hand),254,"#b3001b"),Dt("  FRONT DOORS",String(f.stats.door),282),Dt("WINDOWS SMASHED",String(f.stats.smash),310,f.stats.smash?"#b3001b":"#3a2a20"),Ji(334),Dt("TIPS (DOUBLE)",f.stats.tips<0?"-$"+-f.stats.tips:"$"+f.stats.tips,362),Dt("PARTY PAY","$"+f.report.pay,390),f.report.perfect&&Dt("EVERY HOUSE SERVED","$"+f.report.perfect,418,"#1f7a3f"),Ji(446),Dt("BANK","$"+be.bank,474,"#1f7a3f"),Dt("SCORE",Pr(f.score,6),502),ue(f.report.title,pe/2,560,17,"#b3001b","center"),Ct(60,664,170,58,"GARAGE",function(){et("ui"),f.garageFrom="report",f.state="garage"},{key:"KeyG"}),Ct(250,664,170,58,"NEXT WEEK",function(){et("ui"),xc()},{primary:!0,key:"Enter"});return}ue(Cr[(f.day-1)%7]+" SHIFT TICKET",pe/2,178,13,"#3a2a20","center"),Ji(196),Dt("ORDERS DELIVERED",f.stats.delivered+" / "+f.stats.orders,222),Dt("  HAND-OFFS",String(f.stats.hand),248,"#b3001b"),Dt("  FRONT DOORS",String(f.stats.door),274),Dt("MISSED ORDERS",String(f.stats.missed),300,f.stats.missed?"#b3001b":"#3a2a20"),Dt("WINDOWS SMASHED",String(f.stats.smash),326,f.stats.smash?"#b3001b":"#3a2a20"),Dt("WIPEOUTS",String(f.stats.crashes),352,f.stats.crashes?"#b3001b":"#3a2a20"),Ji(372),Dt("TIPS",f.stats.tips<0?"-$"+-f.stats.tips:"$"+f.stats.tips,398),Dt("SHIFT PAY","$"+f.report.pay,424),f.report.perfect&&Dt("PERFECT SHIFT","$"+f.report.perfect,450,"#1f7a3f"),Ji(470),Dt("BANK","$"+be.bank,496,"#1f7a3f"),Dt("SCORE",Pr(f.score,6),522),ue("LIVES"+(f.report.healed?"  (+1 FOR FINISHING)":""),84,552,15,"#3a2a20");var e=Math.min(Ia,Math.max(3,f.lives));Vl(pe-84-(e-1)*20-6,550,20,.8),ue(f.report.title,pe/2,596,17,"#b3001b","center"),Ct(60,664,170,58,"GARAGE",function(){et("ui"),f.garageFrom="report",f.state="garage"},{key:"KeyG"}),Ct(250,664,170,58,i?"BONUS ROUND":"NEXT SHIFT",function(){et("ui"),xc()},{primary:!0,size:i?16:18,key:"Enter"})}function Vh(){ue(f.overWhy==="fired"?"YOU'RE FIRED":"WIPED OUT",pe/2,180,46,"#ff4d2e","center","#000"),ue(f.overWhy==="fired"?"Fewer than half the orders got delivered.":"Payton is out of lives.",pe/2,228,14,"#fff","center"),Rt(70,270,340,200,12,"rgba(15,16,22,0.9)"),ue("SCORE",110,306,15,"#9aa3b2"),ue(Pr(f.score,6),370,306,22,"#fff","right"),ue("HIGH SCORE",110,344,15,"#9aa3b2"),ue(Pr(be.hi,6),370,344,22,f.newHi?"#ffd23f":"#fff","right"),ue("REACHED",110,382,15,"#9aa3b2"),ue(Cr[(f.day-1)%7].slice(0,3)+" (DAY "+f.day+")",370,382,16,"#fff","right"),ue("BANK",110,420,15,"#9aa3b2"),ue("$"+be.bank,370,420,22,"#9cf07a","right"),f.newHi&&ue("NEW HIGH SCORE!",pe/2,452,14,"#ffd23f","center"),f.day>1&&f.opt.day==null?(ue("Continue keeps your day, bank and rides.",pe/2,494,13,"#cfd6e3","center"),ue("Your score starts again from zero.",pe/2,514,13,"#cfd6e3","center"),Ct(90,540,300,62,"CONTINUE  "+Cr[(f.day-1)%7],function(){et("ui"),ef()},{primary:!0,size:21,key:"Enter"}),Ct(90,616,300,46,"NEW RUN FROM MONDAY",function(){et("ui"),_s()},{size:15,key:"KeyN"})):(ue("Your bank and rides are kept.",pe/2,500,13,"#cfd6e3","center"),Ct(90,540,300,62,"TRY AGAIN",function(){et("ui"),_s()},{primary:!0,size:24,key:"Enter"})),Ct(90,f.day>1&&f.opt.day==null?674:618,145,46,"GARAGE",function(){et("ui"),f.garageFrom="title",f.state="garage"},{size:15,key:"KeyG"}),Ct(245,f.day>1&&f.opt.day==null?674:618,145,46,"TITLE",function(){et("ui"),Na()},{size:15,key:"Escape"})}function Wh(){oe.fillStyle="#22262f";for(var i=0;i<pt;i+=40)oe.fillRect(0,i,pe,2);ue("GARAGE",20,38,30,"#ffd23f"),ue("BANK $"+be.bank,pe-20,38,20,"#9cf07a","right");for(var e=0;e<4;e++){var t=Er[e],n=74+e*158,r=be.owned[e],s=be.ride===e;Rt(14,n,pe-28,146,12,s?"#333a4d":"#272b37"),s&&(oe.strokeStyle="#ffd23f",oe.lineWidth=3,oe.strokeRect(15.5,n+1.5,pe-31,143)),Rt(26,n+12,112,122,8,"#44464f"),oe.fillStyle="#f5d547",oe.fillRect(80,n+18,3,22),oe.fillRect(80,n+64,3,22),oe.fillRect(80,n+108,3,20),f.ridePics?oe.drawImage(f.ridePics[e],26,n+12,112,122):(oe.save(),oe.translate(82,n+73),oe.scale(1.7,1.7),Dh(e,0,0,0,1,f.tGame),oe.restore()),ue(t.name,152,n+24,18,"#fff"),ue(t.blurb[0],152,n+44,12,"#cfd6e3"),ue(t.blurb[1],152,n+58,12,"#cfd6e3"),ue(t.perkText[0],152,n+74,12,"#5ad1ff"),ue(t.perkText[1],152,n+88,12,"#5ad1ff"),ue("SPEED",152,n+102,11,"#9aa3b2");for(var a=0;a<6;a++)ze(196+a*11,n+97,8,10,a<Math.round((t.spd-.9)*14)?"#ff9f1c":"#3a3f4d");ue("CARRY "+t.cap,280,n+102,11,"#9aa3b2"),(function(o,l){s?Ct(152,n+110,300,30,"RIDING",null,{disabled:!0,size:14}):r?Ct(152,n+110,300,30,"RIDE THIS",function(){be.ride=o,f.V=Er[o],li(),et("ui")},{size:15,key:"Digit"+(o+1)}):be.bank>=l.price?Ct(152,n+110,300,30,"BUY  $"+l.price,function(){be.bank-=l.price,be.owned[o]=!0,be.ride=o,f.V=Er[o],li(),et("buy")},{primary:!0,size:15,key:"Digit"+(o+1)}):Ct(152,n+110,300,30,"$"+l.price+"  (NEED $"+(l.price-be.bank)+" MORE)",null,{disabled:!0,size:13})})(e,t)}Ct(140,726,200,54,"BACK",function(){et("ui"),f.state=f.garageFrom==="report"?"report":"title",f.state==="title"&&Na()},{primary:!0,key:"Escape"})}function Xh(){ue("PAUSED",pe/2,300,48,"#ffd23f","center","#000"),Ct(90,370,300,62,"RESUME",function(){f.state="play"},{primary:!0,size:24,key:"Enter"}),Ct(90,448,300,52,"QUIT TO TITLE",function(){li(),Na()},{}),Ct(90,516,300,46,"EFFECTS: "+(be.low?"LOW":"FULL"),function(){be.low=!be.low,li(),et("ui"),f.setEffects&&f.setEffects(be.low)},{size:15,key:"KeyE"})}function Yh(){var i=He.s*He.dpr,e=(He.VH-pt)/2,t=He.VH-pt;if(oe.setTransform(1,0,0,1,0,0),oe.clearRect(0,0,cn.width,cn.height),oe.setTransform(i,0,0,i,He.ox*He.dpr,0),f.buttons=[],f.uiOy=0,f.state==="garage"){lf("#1b1e27"),hi(e,Wh);return}Bh(),(f.state==="play"||f.state==="pause")&&(f.isTouch&&f.state==="play"&&Oh(),ze(0,-2,pe,f.hudTop+2,"rgba(15,16,22,0.9)"),hi(f.hudTop,Uh),f.bannerT>0?hi(e,Nh):f.hintT>0&&hi(t-He.bottom,Fh)),f.state==="title"?(Ns(.5),hi(e,Hh)):f.state==="report"?(Ns(.6),hi(e,Gh)):f.state==="over"?(Ns(.7),hi(e,Vh)):f.state==="pause"&&(Ns(.65),hi(e,Xh)),f.opt.fps&&zh()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wl="170",qh=0,Tc=1,Zh=2,cf=1,uf=2,ti=3,Ei=0,fn=1,kn=2,Mi=0,br=1,vs=2,Ac=3,wc=4,Kh=5,Ni=100,Jh=101,$h=102,jh=103,Qh=104,ed=200,td=201,nd=202,id=203,Bo=204,zo=205,rd=206,sd=207,ad=208,od=209,ld=210,cd=211,ud=212,fd=213,hd=214,Ho=0,ko=1,Go=2,Lr=3,Vo=4,Wo=5,Xo=6,Yo=7,ff=0,dd=1,pd=2,yi=0,md=1,gd=2,_d=3,vd=4,xd=5,Md=6,yd=7,hf=300,Dr=301,Ir=302,qo=303,Zo=304,Oa=306,Ko=1e3,Oi=1001,Jo=1002,rn=1003,Sd=1004,Fs=1005,Vn=1006,Ka=1007,Bi=1008,ci=1009,df=1010,pf=1011,xs=1012,Xl=1013,Vi=1014,Wn=1015,bs=1016,Yl=1017,ql=1018,Ur=1020,mf=35902,gf=1021,_f=1022,On=1023,vf=1024,xf=1025,Tr=1026,Nr=1027,Ba=1028,Zl=1029,Mf=1030,Kl=1031,Jl=1033,da=33776,pa=33777,ma=33778,ga=33779,$o=35840,jo=35841,Qo=35842,el=35843,tl=36196,nl=37492,il=37496,rl=37808,sl=37809,al=37810,ol=37811,ll=37812,cl=37813,ul=37814,fl=37815,hl=37816,dl=37817,pl=37818,ml=37819,gl=37820,_l=37821,_a=36492,vl=36494,xl=36495,yf=36283,Ml=36284,yl=36285,Sl=36286,Ed=3200,bd=3201,Sf=0,Td=1,xi="",_n="srgb",Br="srgb-linear",za="linear",vt="srgb",$i=7680,Rc=519,Ad=512,wd=513,Rd=514,Ef=515,Cd=516,Pd=517,Ld=518,Dd=519,El=35044,Cc="300 es",ii=2e3,ba=2001;class zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ja=Math.PI/180,bl=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function Id(i,e){return(i%e+e)%e}function $a(i,e,t){return(1-t)*i+t*e}function Gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,r,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],v=r[0],g=r[3],p=r[6],A=r[1],E=r[4],x=r[7],U=r[2],C=r[5],P=r[8];return s[0]=a*v+o*A+l*U,s[3]=a*g+o*E+l*C,s[6]=a*p+o*x+l*P,s[1]=c*v+u*A+h*U,s[4]=c*g+u*E+h*C,s[7]=c*p+u*x+h*P,s[2]=d*v+m*A+_*U,s[5]=d*g+m*E+_*C,s[8]=d*p+m*x+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,_=t*h+n*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Je;function bf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ud(){const i=Ta("canvas");return i.style.display="block",i}const Pc={};function as(i){i in Pc||(Pc[i]=!0,console.warn(i))}function Nd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Fd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Od(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const at={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(i.r=Ar(i.r),i.g=Ar(i.g),i.b=Ar(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?za:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Lc=[.64,.33,.3,.6,.15,.06],Dc=[.2126,.7152,.0722],Ic=[.3127,.329],Uc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);at.define({[Br]:{primaries:Lc,whitePoint:Ic,transfer:za,toXYZ:Uc,fromXYZ:Nc,luminanceCoefficients:Dc,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:Lc,whitePoint:Ic,transfer:vt,toXYZ:Uc,fromXYZ:Nc,luminanceCoefficients:Dc,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}});let ji;class Bd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=Ta("canvas")),ji.width=e.width,ji.height=e.height;const n=ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zd=0;class Tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qa(r[a].image)):s.push(Qa(r[a]))}else s=Qa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hd=0;class en extends zr{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=Oi,r=Oi,s=Vn,a=Bi,o=On,l=ci,c=en.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=ai(),this.name="",this.source=new Tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ko:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ko:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=hf;en.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(m+1)/2,U=(p+1)/2,C=(u+d)/4,P=(h+v)/4,D=(_+g)/4;return E>x&&E>U?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=P/n):x>U?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=C/r,s=D/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=P/s,r=D/s),this.set(n,r,s,t),this}let A=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(h-v)/A,this.z=(d-u)/A,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kd extends zr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new en(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends kd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Af extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gd extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==d||c!==m||u!==_){let g=1-o;const p=l*d+c*m+u*_+h*v,A=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const U=Math.sqrt(E),C=Math.atan2(U,p*A);g=Math.sin(g*C)/U,o=Math.sin(o*C)/U}const x=o*A;if(l=l*g+d*x,c=c*g+m*x,u=u*g+_*x,h=h*g+v*x,g===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*m-c*d,e[t+1]=l*_+u*d+c*h-o*m,e[t+2]=c*_+u*m+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new I,Fc=new Hr;class qi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Bs.subVectors(this.max,qr),Qi.subVectors(e.a,qr),er.subVectors(e.b,qr),tr.subVectors(e.c,qr),di.subVectors(er,Qi),pi.subVectors(tr,er),Ai.subVectors(Qi,tr);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Ai.z,Ai.y,di.z,0,-di.x,pi.z,0,-pi.x,Ai.z,0,-Ai.x,-di.y,di.x,0,-pi.y,pi.x,0,-Ai.y,Ai.x,0];return!to(t,Qi,er,tr,Bs)||(t=[1,0,0,0,1,0,0,0,1],!to(t,Qi,er,tr,Bs))?!1:(zs.crossVectors(di,pi),t=[zs.x,zs.y,zs.z],to(t,Qi,er,tr,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new I,new I,new I,new I,new I,new I,new I,new I],Ln=new I,Os=new qi,Qi=new I,er=new I,tr=new I,di=new I,pi=new I,Ai=new I,qr=new I,Bs=new I,zs=new I,wi=new I;function to(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){wi.fromArray(i,s);const o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Vd=new qi,Zr=new I,no=new I;class Ts{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Zr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(no)),this.expandByPoint(Zr.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new I,io=new I,Hs=new I,mi=new I,ro=new I,ks=new I,so=new I;class Wd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){io.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(io);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Hs),o=mi.dot(this.direction),l=-mi.dot(Hs),c=mi.lengthSq(),u=Math.abs(1-a*a);let h,d,m,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const v=1/u;h*=v,d*=v,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(io).addScaledVector(Hs,d),m}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),r=$n.dot($n)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,r,s){ro.subVectors(t,e),ks.subVectors(n,e),so.crossVectors(ro,ks);let a=this.direction.dot(so),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(ks.crossVectors(mi,ks));if(l<0)return null;const c=o*this.direction.dot(ro.cross(mi));if(c<0||l+c>a)return null;const u=-o*mi.dot(so);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,r,s,a,o,l,c,u,h,d,m,_,v,g){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,m,_,v,g)}set(e,t,n,r,s,a,o,l,c,u,h,d,m,_,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/nr.setFromMatrixColumn(e,0).length(),s=1/nr.setFromMatrixColumn(e,1).length(),a=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,_=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,_=c*u,v=c*h;t[0]=d+v*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,_=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,_=o*u,v=o*h;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=_*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+_,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xd,e,Yd)}lookAt(e,t,n){const r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),gi.crossVectors(n,mn),gi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),gi.crossVectors(n,mn)),gi.normalize(),Gs.crossVectors(mn,gi),r[0]=gi.x,r[4]=Gs.x,r[8]=mn.x,r[1]=gi.y,r[5]=Gs.y,r[9]=mn.y,r[2]=gi.z,r[6]=Gs.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],v=n[6],g=n[10],p=n[14],A=n[3],E=n[7],x=n[11],U=n[15],C=r[0],P=r[4],D=r[8],b=r[12],y=r[1],L=r[5],k=r[9],z=r[13],W=r[2],Z=r[6],Y=r[10],ee=r[14],X=r[3],he=r[7],Me=r[11],Ce=r[15];return s[0]=a*C+o*y+l*W+c*X,s[4]=a*P+o*L+l*Z+c*he,s[8]=a*D+o*k+l*Y+c*Me,s[12]=a*b+o*z+l*ee+c*Ce,s[1]=u*C+h*y+d*W+m*X,s[5]=u*P+h*L+d*Z+m*he,s[9]=u*D+h*k+d*Y+m*Me,s[13]=u*b+h*z+d*ee+m*Ce,s[2]=_*C+v*y+g*W+p*X,s[6]=_*P+v*L+g*Z+p*he,s[10]=_*D+v*k+g*Y+p*Me,s[14]=_*b+v*z+g*ee+p*Ce,s[3]=A*C+E*y+x*W+U*X,s[7]=A*P+E*L+x*Z+U*he,s[11]=A*D+E*k+x*Y+U*Me,s[15]=A*b+E*z+x*ee+U*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*m-n*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+g*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+p*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],v=e[13],g=e[14],p=e[15],A=h*g*c-v*d*c+v*l*m-o*g*m-h*l*p+o*d*p,E=_*d*c-u*g*c-_*l*m+a*g*m+u*l*p-a*d*p,x=u*v*c-_*h*c+_*o*m-a*v*m-u*o*p+a*h*p,U=_*h*l-u*v*l-_*o*d+a*v*d+u*o*g-a*h*g,C=t*A+n*E+r*x+s*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=A*P,e[1]=(v*d*s-h*g*s-v*r*m+n*g*m+h*r*p-n*d*p)*P,e[2]=(o*g*s-v*l*s+v*r*c-n*g*c-o*r*p+n*l*p)*P,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*m-n*l*m)*P,e[4]=E*P,e[5]=(u*g*s-_*d*s+_*r*m-t*g*m-u*r*p+t*d*p)*P,e[6]=(_*l*s-a*g*s-_*r*c+t*g*c+a*r*p-t*l*p)*P,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*P,e[8]=x*P,e[9]=(_*h*s-u*v*s-_*n*m+t*v*m+u*n*p-t*h*p)*P,e[10]=(a*v*s-_*o*s+_*n*c-t*v*c-a*n*p+t*o*p)*P,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*P,e[12]=U*P,e[13]=(u*v*r-_*h*r+_*n*d-t*v*d-u*n*g+t*h*g)*P,e[14]=(_*o*r-a*v*r-_*n*l+t*v*l+a*n*g-t*o*g)*P,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,_=s*h,v=a*u,g=a*h,p=o*h,A=l*c,E=l*u,x=l*h,U=n.x,C=n.y,P=n.z;return r[0]=(1-(v+p))*U,r[1]=(m+x)*U,r[2]=(_-E)*U,r[3]=0,r[4]=(m-x)*C,r[5]=(1-(d+p))*C,r[6]=(g+A)*C,r[7]=0,r[8]=(_+E)*P,r[9]=(g-A)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=nr.set(r[0],r[1],r[2]).length();const a=nr.set(r[4],r[5],r[6]).length(),o=nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/s,u=1/a,h=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ii){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let m,_;if(o===ii)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ba)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ii){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,m=(n+r)*u;let _,v;if(o===ii)_=(a+s)*h,v=-2*h;else if(o===ba)_=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const nr=new I,Dn=new _t,Xd=new I(0,0,0),Yd=new I(1,1,1),gi=new I,Gs=new I,mn=new I,Oc=new _t,Bc=new Hr;class Yn{constructor(e=0,t=0,n=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class wf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qd=0;const zc=new I,ir=new Hr,jn=new _t,Vs=new I,Kr=new I,Zd=new I,Kd=new Hr,Hc=new I(1,0,0),kc=new I(0,1,0),Gc=new I(0,0,1),Vc={type:"added"},Jd={type:"removed"},rr={type:"childadded",child:null},ao={type:"childremoved",child:null};class Vt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new I,t=new Yn,n=new Hr,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Je}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Hc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(Gc,e)}translateOnAxis(e,t){return zc.copy(e).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(Gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Kr,Vs,this.up):jn.lookAt(Vs,Kr,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),ir.setFromRotationMatrix(jn),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vc),rr.child=e,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jd),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vc),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,Zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new I(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new I,Qn=new I,oo=new I,ei=new I,sr=new I,ar=new I,Wc=new I,lo=new I,co=new I,uo=new I,fo=new Pt,ho=new Pt,po=new Pt;class wn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){In.subVectors(r,t),Qn.subVectors(n,t),oo.subVectors(e,t);const a=In.dot(In),o=In.dot(Qn),l=In.dot(oo),c=Qn.dot(Qn),u=Qn.dot(oo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return fo.setScalar(0),ho.setScalar(0),po.setScalar(0),fo.fromBufferAttribute(e,t),ho.fromBufferAttribute(e,n),po.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fo,s.x),a.addScaledVector(ho,s.y),a.addScaledVector(po,s.z),a}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),Qn.subVectors(e,t),In.cross(Qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),In.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;sr.subVectors(r,n),ar.subVectors(s,n),lo.subVectors(e,n);const l=sr.dot(lo),c=ar.dot(lo);if(l<=0&&c<=0)return t.copy(n);co.subVectors(e,r);const u=sr.dot(co),h=ar.dot(co);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(sr,a);uo.subVectors(e,s);const m=sr.dot(uo),_=ar.dot(uo);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ar,o);const g=u*_-m*h;if(g<=0&&h-u>=0&&m-_>=0)return Wc.subVectors(s,r),o=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(Wc,o);const p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(sr,a).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function mo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=Id(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=mo(a,s,e+1/3),this.g=mo(a,s,e),this.b=mo(a,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=_n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const n=Rf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return at.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Qt(Jt.r*255,0,255))*65536+Math.round(Qt(Jt.g*255,0,255))*256+Math.round(Qt(Jt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=_n){at.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,r=Jt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Ws);const n=$a(_i.h,Ws.h,t),r=$a(_i.s,Ws.s,t),s=$a(_i.l,Ws.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Qe;Qe.NAMES=Rf;let $d=0;class kr extends zr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ai(),this.name="",this.blending=br,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xt extends kr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new I,Xs=new le;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}}class Cf extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pf extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jd=0;const Sn=new _t,go=new Vt,or=new I,gn=new qi,Jr=new qi,Ht=new I;class dn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bf(e)?Pf:Cf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(gn.min,Jr.min),gn.expandByPoint(Ht),Ht.addVectors(gn.max,Jr.max),gn.expandByPoint(Ht)):(gn.expandByPoint(Jr.min),gn.expandByPoint(Jr.max))}gn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(e,c),Ht.add(or)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;const c=new I,u=new I,h=new I,d=new le,m=new le,_=new le,v=new I,g=new I;function p(D,b,y){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,D),m.fromBufferAttribute(s,b),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(d),_.sub(d);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(L),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(L),o[D].add(v),o[b].add(v),o[y].add(v),l[D].add(g),l[b].add(g),l[y].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,b=A.length;D<b;++D){const y=A[D],L=y.start,k=y.count;for(let z=L,W=L+k;z<W;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new I,x=new I,U=new I,C=new I;function P(D){U.fromBufferAttribute(r,D),C.copy(U);const b=o[D];E.copy(b),E.sub(U.multiplyScalar(U.dot(b))).normalize(),x.crossVectors(C,b);const L=x.dot(l[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,b=A.length;D<b;++D){const y=A[D],L=y.start,k=y.count;for(let z=L,W=L+k;z<W;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let p=0;p<u;p++)d[_++]=c[m++]}return new hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new _t,Ri=new Wd,Ys=new Ts,Yc=new I,qs=new I,Zs=new I,Ks=new I,_o=new I,Js=new I,qc=new I,$s=new I;class bt extends Vt{constructor(e=new dn,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(_o.fromBufferAttribute(h,e),a?Js.addScaledVector(_o,u):Js.addScaledVector(_o.sub(t),u))}t.add(Js)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),!(Ys.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ys,Yc)===null||Ri.origin.distanceToSquared(Yc)>(e.far-e.near)**2))&&(Xc.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(Xc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const g=d[_],p=a[g.materialIndex],A=Math.max(g.start,m.start),E=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let x=A,U=E;x<U;x+=3){const C=o.getX(x),P=o.getX(x+1),D=o.getX(x+2);r=js(this,p,e,n,c,u,h,C,P,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const A=o.getX(g),E=o.getX(g+1),x=o.getX(g+2);r=js(this,a,e,n,c,u,h,A,E,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const g=d[_],p=a[g.materialIndex],A=Math.max(g.start,m.start),E=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let x=A,U=E;x<U;x+=3){const C=x,P=x+1,D=x+2;r=js(this,p,e,n,c,u,h,C,P,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const A=g,E=g+1,x=g+2;r=js(this,a,e,n,c,u,h,A,E,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Qd(i,e,t,n,r,s,a,o){let l;if(e.side===fn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Ei,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($s);return c<t.near||c>t.far?null:{distance:c,point:$s.clone(),object:i}}function js(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,qs),i.getVertexPosition(l,Zs),i.getVertexPosition(c,Ks);const u=Qd(i,e,t,n,qs,Zs,Ks,qc);if(u){const h=new I;wn.getBarycoord(qc,qs,Zs,Ks,h),r&&(u.uv=wn.getInterpolatedAttribute(r,o,l,c,h,new le)),s&&(u.uv1=wn.getInterpolatedAttribute(s,o,l,c,h,new le)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};wn.getNormal(qs,Zs,Ks,d.normal),u.face=d,u.barycoord=h}return u}class Zi extends dn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function _(v,g,p,A,E,x,U,C,P,D,b){const y=x/P,L=U/D,k=x/2,z=U/2,W=C/2,Z=P+1,Y=D+1;let ee=0,X=0;const he=new I;for(let Me=0;Me<Y;Me++){const Ce=Me*L-z;for(let qe=0;qe<Z;qe++){const ft=qe*y-k;he[v]=ft*A,he[g]=Ce*E,he[p]=W,c.push(he.x,he.y,he.z),he[v]=0,he[g]=0,he[p]=C>0?1:-1,u.push(he.x,he.y,he.z),h.push(qe/P),h.push(1-Me/D),ee+=1}}for(let Me=0;Me<D;Me++)for(let Ce=0;Ce<P;Ce++){const qe=d+Ce+Z*Me,ft=d+Ce+Z*(Me+1),$=d+(Ce+1)+Z*(Me+1),se=d+(Ce+1)+Z*Me;l.push(qe,ft,se),l.push(ft,$,se),X+=6}o.addGroup(m,X,b),m+=X,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=Fr(i[t]);for(const r in n)e[r]=n[r]}return e}function ep(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const tp={clone:Fr,merge:nn};var np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends kr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Df extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new I,Zc=new le,Kc=new le;class vn extends Df{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,Kc),t.subVectors(Kc,Zc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=-90,cr=1;class rp extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(lr,cr,e,t);r.layers=this.layers,this.add(r);const s=new vn(lr,cr,e,t);s.layers=this.layers,this.add(s);const a=new vn(lr,cr,e,t);a.layers=this.layers,this.add(a);const o=new vn(lr,cr,e,t);o.layers=this.layers,this.add(o);const l=new vn(lr,cr,e,t);l.layers=this.layers,this.add(l);const c=new vn(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class If extends en{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sp extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new If(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zi(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Mi});s.uniforms.tEquirect.value=t;const a=new bt(r,s),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Vn),new rp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const vo=new I,ap=new I,op=new Je;class Ii{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vo.subVectors(n,t).cross(ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||op.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Ts,Qs=new I;class $l{constructor(e=new Ii,t=new Ii,n=new Ii,r=new Ii,s=new Ii,a=new Ii){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],_=r[9],v=r[10],g=r[11],p=r[12],A=r[13],E=r[14],x=r[15];if(n[0].setComponents(l-s,d-c,g-m,x-p).normalize(),n[1].setComponents(l+s,d+c,g+m,x+p).normalize(),n[2].setComponents(l+a,d+u,g+_,x+A).normalize(),n[3].setComponents(l-a,d-u,g-_,x-A).normalize(),n[4].setComponents(l-o,d-h,g-v,x-E).normalize(),t===ii)n[5].setComponents(l+o,d+h,g+v,x+E).normalize();else if(t===ba)n[5].setComponents(o,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function lp(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],v=h[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,h[d]=v)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const v=h[m];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Bn extends dn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,m=[],_=[],v=[],g=[];for(let p=0;p<u;p++){const A=p*d-a;for(let E=0;E<c;E++){const x=E*h-s;_.push(x,-A,0),v.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const E=A+c*p,x=A+c*(p+1),U=A+1+c*(p+1),C=A+1+c*p;m.push(E,x,C),m.push(x,U,C)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
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
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
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
#endif`,o0=`struct PhysicalMaterial {
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
}`,l0=`
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
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
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
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
}`,mm=`#if DEPTH_PACKING == 3200
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
}`,gm=`#define DISTANCE
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
}`,_m=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,ym=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,Tm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,wm=`#define MATCAP
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Im=`#define STANDARD
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
}`,Um=`#define TOON
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
}`,Nm=`#define TOON
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
}`,Fm=`uniform float size;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:cp,alphahash_pars_fragment:up,alphamap_fragment:fp,alphamap_pars_fragment:hp,alphatest_fragment:dp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:vp,begin_vertex:xp,beginnormal_vertex:Mp,bsdfs:yp,iridescence_fragment:Sp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:wp,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Lp,common:Dp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:Bp,colorspace_fragment:zp,colorspace_pars_fragment:Hp,envmap_fragment:kp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Vp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:t0,envmap_vertex:Xp,fog_vertex:Yp,fog_pars_vertex:qp,fog_fragment:Zp,fog_pars_fragment:Kp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:$p,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:r0,lights_phong_pars_fragment:s0,lights_physical_fragment:a0,lights_physical_pars_fragment:o0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:u0,logdepthbuf_fragment:f0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:_0,map_particle_pars_fragment:v0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:M0,morphinstance_vertex:y0,morphcolor_vertex:S0,morphnormal_vertex:E0,morphtarget_pars_vertex:b0,morphtarget_vertex:T0,normal_fragment_begin:A0,normal_fragment_maps:w0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:P0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:N0,opaque_fragment:F0,packing:O0,premultiplied_alpha_fragment:B0,project_vertex:z0,dithering_fragment:H0,dithering_pars_fragment:k0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:Y0,shadowmask_pars_fragment:q0,skinbase_vertex:Z0,skinning_pars_vertex:K0,skinning_vertex:J0,skinnormal_vertex:$0,specularmap_fragment:j0,specularmap_pars_fragment:Q0,tonemapping_fragment:em,tonemapping_pars_fragment:tm,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:rm,uv_pars_vertex:sm,uv_vertex:am,worldpos_vertex:om,background_vert:lm,background_frag:cm,backgroundCube_vert:um,backgroundCube_frag:fm,cube_vert:hm,cube_frag:dm,depth_vert:pm,depth_frag:mm,distanceRGBA_vert:gm,distanceRGBA_frag:_m,equirect_vert:vm,equirect_frag:xm,linedashed_vert:Mm,linedashed_frag:ym,meshbasic_vert:Sm,meshbasic_frag:Em,meshlambert_vert:bm,meshlambert_frag:Tm,meshmatcap_vert:Am,meshmatcap_frag:wm,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Pm,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:Im,meshtoon_vert:Um,meshtoon_frag:Nm,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:zm,sprite_vert:Hm,sprite_frag:km},de={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Hn={basic:{uniforms:nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:nn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:nn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:nn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:nn([de.points,de.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:nn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:nn([de.common,de.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:nn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:nn([de.sprite,de.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:nn([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:nn([de.lights,de.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Hn.physical={uniforms:nn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ea={r:0,b:0,g:0},Pi=new Yn,Gm=new _t;function Vm(i,e,t,n,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function _(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function v(A){let E=!1;const x=_(A);x===null?p(o,l):x&&x.isColor&&(p(x,1),E=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(A,E){const x=_(E);x&&(x.isCubeTexture||x.mapping===Oa)?(u===void 0&&(u=new bt(new Zi(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Fr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pi.copy(E.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(Pi)),u.material.toneMapped=at.getTransfer(x.colorSpace)!==vt,(h!==x||d!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,m=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new bt(new Bn(2,2),new bi({name:"BackgroundMaterial",uniforms:Fr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=at.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,E){A.getRGB(ea,Lf(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(o,l)},render:v,addToRenderList:g}}function Wm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(y,L,k,z,W){let Z=!1;const Y=h(z,k,L);s!==Y&&(s=Y,c(s.object)),Z=m(y,z,k,W),Z&&_(y,z,k,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(y,L,k,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,L,k){const z=k.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Z=W[L.id];Z===void 0&&(Z={},W[L.id]=Z);let Y=Z[z];return Y===void 0&&(Y=d(l()),Z[z]=Y),Y}function d(y){const L=[],k=[],z=[];for(let W=0;W<t;W++)L[W]=0,k[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:z,object:y,attributes:{},index:null}}function m(y,L,k,z){const W=s.attributes,Z=L.attributes;let Y=0;const ee=k.getAttributes();for(const X in ee)if(ee[X].location>=0){const Me=W[X];let Ce=Z[X];if(Ce===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Ce=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Ce=y.instanceColor)),Me===void 0||Me.attribute!==Ce||Ce&&Me.data!==Ce.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function _(y,L,k,z){const W={},Z=L.attributes;let Y=0;const ee=k.getAttributes();for(const X in ee)if(ee[X].location>=0){let Me=Z[X];Me===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor));const Ce={};Ce.attribute=Me,Me&&Me.data&&(Ce.data=Me.data),W[X]=Ce,Y++}s.attributes=W,s.attributesNum=Y,s.index=z}function v(){const y=s.newAttributes;for(let L=0,k=y.length;L<k;L++)y[L]=0}function g(y){p(y,0)}function p(y,L){const k=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;k[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),W[y]!==L&&(i.vertexAttribDivisor(y,L),W[y]=L)}function A(){const y=s.newAttributes,L=s.enabledAttributes;for(let k=0,z=L.length;k<z;k++)L[k]!==y[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function E(y,L,k,z,W,Z,Y){Y===!0?i.vertexAttribIPointer(y,L,k,W,Z):i.vertexAttribPointer(y,L,k,z,W,Z)}function x(y,L,k,z){v();const W=z.attributes,Z=k.getAttributes(),Y=L.defaultAttributeValues;for(const ee in Z){const X=Z[ee];if(X.location>=0){let he=W[ee];if(he===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){const Me=he.normalized,Ce=he.itemSize,qe=e.get(he);if(qe===void 0)continue;const ft=qe.buffer,$=qe.type,se=qe.bytesPerElement,Le=$===i.INT||$===i.UNSIGNED_INT||he.gpuType===Xl;if(he.isInterleavedBufferAttribute){const ce=he.data,Be=ce.stride,Xe=he.offset;if(ce.isInstancedInterleavedBuffer){for(let Ve=0;Ve<X.locationSize;Ve++)p(X.location+Ve,ce.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ve=0;Ve<X.locationSize;Ve++)g(X.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Ve=0;Ve<X.locationSize;Ve++)E(X.location+Ve,Ce/X.locationSize,$,Me,Be*se,(Xe+Ce/X.locationSize*Ve)*se,Le)}else{if(he.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)p(X.location+ce,he.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ce=0;ce<X.locationSize;ce++)g(X.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let ce=0;ce<X.locationSize;ce++)E(X.location+ce,Ce/X.locationSize,$,Me,Ce*se,Ce/X.locationSize*ce*se,Le)}}else if(Y!==void 0){const Me=Y[ee];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(X.location,Me);break;case 3:i.vertexAttrib3fv(X.location,Me);break;case 4:i.vertexAttrib4fv(X.location,Me);break;default:i.vertexAttrib1fv(X.location,Me)}}}}A()}function U(){D();for(const y in n){const L=n[y];for(const k in L){const z=L[k];for(const W in z)u(z[W].object),delete z[W];delete L[k]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const k in L){const z=L[k];for(const W in z)u(z[W].object),delete z[W];delete L[k]}delete n[y.id]}function P(y){for(const L in n){const k=n[L];if(k[y.id]===void 0)continue;const z=k[y.id];for(const W in z)u(z[W].object),delete z[W];delete k[y.id]}}function D(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:A}}function Xm(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,n,1)}function l(c,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*d[v];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ym(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==On&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const D=P===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ci&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Wn&&!D)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:U,maxSamples:C}}function qm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ii,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const A=s?0:n,E=A*4;let x=p.clippingState||null;l.value=x,x=u(_,d,E,m);for(let U=0;U!==E;++U)x[U]=t[U];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const p=m+v*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,x=m;E!==v;++E,x+=4)a.copy(h[E]).applyMatrix4(A,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Zm(i){let e=new WeakMap;function t(a,o){return o===qo?a.mapping=Dr:o===Zo&&(a.mapping=Ir),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qo||o===Zo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sp(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Nf extends Df{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xr=4,Jc=[.125,.215,.35,.446,.526,.582],Fi=20,xo=new Nf,$c=new Qe;let Mo=null,yo=0,So=0,Eo=!1;const Ui=(1+Math.sqrt(5))/2,ur=1/Ui,jc=[new I(-Ui,ur,0),new I(Ui,ur,0),new I(-ur,0,Ui),new I(ur,0,Ui),new I(0,Ui,-ur),new I(0,Ui,ur),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,yo,So),this._renderer.xr.enabled=Eo,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:bs,format:On,colorSpace:Br,depthBuffer:!1},r=eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Km(s)),this._blurMaterial=Jm(s,e,t)}return r}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,n,r){const o=new vn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($c),u.toneMapping=yi,u.autoClear=!1;const m=new Xt({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new bt(new Zi,m);let v=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy($c),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;ta(r,A*E,p>2?E:0,E,E),u.setRenderTarget(r),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Dr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jc[(r-s-1)%jc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Fi-1),v=s/_,g=isFinite(s)?1+Math.floor(u*v):Fi;g>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const p=[];let A=0;for(let P=0;P<Fi;++P){const D=P/v,b=Math.exp(-D*D/2);p.push(b),P===0?A+=b:P<g&&(A+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/A;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;const x=this._sizeLods[r],U=3*x*(r>E-xr?r-E+xr:0),C=4*(this._cubeSize-x);ta(t,U,C,3*x,2*x),l.setRenderTarget(t),l.render(h,xo)}}function Km(i){const e=[],t=[],n=[];let r=i;const s=i-xr+1+Jc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-xr?l=Jc[a-i+xr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,g=2,p=1,A=new Float32Array(v*_*m),E=new Float32Array(g*_*m),x=new Float32Array(p*_*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,D=C>2?0:-1,b=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];A.set(b,v*_*C),E.set(d,g*_*C);const y=[C,C,C,C,C,C];x.set(y,p*_*C)}const U=new dn;U.setAttribute("position",new hn(A,v)),U.setAttribute("uv",new hn(E,g)),U.setAttribute("faceIndex",new hn(x,p)),e.push(U),r>xr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eu(i,e,t){const n=new Wi(i,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Jm(i,e,t){const n=new Float32Array(Fi),r=new I(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function tu(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function nu(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}function $m(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qo||l===Zo,u=l===Dr||l===Ir;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Qc(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Qc(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qm(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let E=0,x=A.length;E<x;E+=3){const U=A[E+0],C=A[E+1],P=A[E+2];d.push(U,C,C,P,P,U)}}else if(_!==void 0){const A=_.array;v=_.version;for(let E=0,x=A.length/3-1;E<x;E+=3){const U=E+0,C=E+1,P=E+2;d.push(U,C,C,P,P,U)}}else return;const g=new(bf(d)?Pf:Cf)(d,1);g.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function eg(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*a),t.update(m,n,1)}function c(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,d*a,_),t.update(m,n,_))}function u(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];t.update(g,n,1)}function h(d,m,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,m[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,v,0,_);let p=0;for(let A=0;A<_;A++)p+=m[A]*v[A];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ng(i,e,t){const n=new WeakMap,r=new Pt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let U=o.attributes.position.count*x,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const P=new Float32Array(U*C*4*h),D=new Af(P,U,C,h);D.type=Wn,D.needsUpdate=!0;const b=x*4;for(let L=0;L<h;L++){const k=p[L],z=A[L],W=E[L],Z=U*C*4*L;for(let Y=0;Y<k.count;Y++){const ee=Y*b;_===!0&&(r.fromBufferAttribute(k,Y),P[Z+ee+0]=r.x,P[Z+ee+1]=r.y,P[Z+ee+2]=r.z,P[Z+ee+3]=0),v===!0&&(r.fromBufferAttribute(z,Y),P[Z+ee+4]=r.x,P[Z+ee+5]=r.y,P[Z+ee+6]=r.z,P[Z+ee+7]=0),g===!0&&(r.fromBufferAttribute(W,Y),P[Z+ee+8]=r.x,P[Z+ee+9]=r.y,P[Z+ee+10]=r.z,P[Z+ee+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:D,size:new le(U,C)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function ig(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Ff extends en{constructor(e,t,n,r,s,a,o,l,c,u=Tr){if(u!==Tr&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Tr&&(n=Vi),n===void 0&&u===Nr&&(n=Ur),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Of=new en,iu=new Ff(1,1),Bf=new Af,zf=new Gd,Hf=new If,ru=[],su=[],au=new Float32Array(16),ou=new Float32Array(9),lu=new Float32Array(4);function Gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ru[r];if(s===void 0&&(s=new Float32Array(r),ru[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ha(i,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function lg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),zt(t,n)}}function cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;ou.set(n),i.uniformMatrix3fv(this.addr,!1,ou),zt(t,n)}}function ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;au.set(n),i.uniformMatrix4fv(this.addr,!1,au),zt(t,n)}}function fg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function xg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(iu.compareFunction=Ef,s=iu):s=Of,t.setTexture2D(e||s,r)}function Mg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zf,r)}function yg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hf,r)}function Sg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Bf,r)}function Eg(i){switch(i){case 5126:return rg;case 35664:return sg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return hg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Sg}}function bg(i,e){i.uniform1fv(this.addr,e)}function Tg(i,e){const t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ag(i,e){const t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function wg(i,e){const t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function Rg(i,e){const t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cg(i,e){const t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pg(i,e){const t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lg(i,e){i.uniform1iv(this.addr,e)}function Dg(i,e){i.uniform2iv(this.addr,e)}function Ig(i,e){i.uniform3iv(this.addr,e)}function Ug(i,e){i.uniform4iv(this.addr,e)}function Ng(i,e){i.uniform1uiv(this.addr,e)}function Fg(i,e){i.uniform2uiv(this.addr,e)}function Og(i,e){i.uniform3uiv(this.addr,e)}function Bg(i,e){i.uniform4uiv(this.addr,e)}function zg(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Of,s[a])}function Hg(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||zf,s[a])}function kg(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hf,s[a])}function Gg(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Bf,s[a])}function Vg(i){switch(i){case 5126:return bg;case 35664:return Tg;case 35665:return Ag;case 35666:return wg;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Dg;case 35668:case 35672:return Ig;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Eg(t.type)}}class Xg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vg(t.type)}}class Yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function cu(i,e){i.seq.push(e),i.map[e.id]=e}function qg(i,e,t){const n=i.name,r=n.length;for(bo.lastIndex=0;;){const s=bo.exec(n),a=bo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){cu(t,c===void 0?new Wg(o,i,e):new Xg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Yg(o),cu(t,h)),t=h}}}class va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);qg(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function uu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zg=37297;let Kg=0;function Jg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const fu=new Je;function $g(i){at._getMatrix(fu,at.workingColorSpace,i);const e=`mat3( ${fu.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case za:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Jg(i.getShaderSource(e),a)}else return r}function jg(i,e){const t=$g(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qg(i,e){let t;switch(e){case md:t="Linear";break;case gd:t="Reinhard";break;case _d:t="Cineon";break;case vd:t="ACESFilmic";break;case Md:t="AgX";break;case yd:t="Neutral";break;case xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const na=new I;function e_(){at.getLuminanceCoefficients(na);const i=na.x.toFixed(4),e=na.y.toFixed(4),t=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function n_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function os(i){return i!==""}function du(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(r_,a_)}const s_=new Map;function a_(i,e){let t=je[e];if(t===void 0){const n=s_.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(o_,l_)}function l_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gu(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function u_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Dr:case Ir:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function h_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ff:e="ENVMAP_BLENDING_MULTIPLY";break;case dd:e="ENVMAP_BLENDING_MIX";break;case pd:e="ENVMAP_BLENDING_ADD";break}return e}function d_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function p_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=c_(t),c=u_(t),u=f_(t),h=h_(t),d=d_(t),m=t_(t),_=n_(s),v=r.createProgram();let g,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(os).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(os).join(`
`),p.length>0&&(p+=`
`)):(g=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),p=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?je.tonemapping_pars_fragment:"",t.toneMapping!==yi?Qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,jg("linearToOutputTexel",t.outputColorSpace),e_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),a=Tl(a),a=du(a,t),a=pu(a,t),o=Tl(o),o=du(o,t),o=pu(o,t),a=mu(a),o=mu(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=A+g+a,x=A+p+o,U=uu(r,r.VERTEX_SHADER,E),C=uu(r,r.FRAGMENT_SHADER,x);r.attachShader(v,U),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(L){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(v).trim(),z=r.getShaderInfoLog(U).trim(),W=r.getShaderInfoLog(C).trim();let Z=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,U,C);else{const ee=hu(r,U,"vertex"),X=hu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+ee+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||W==="")&&(Y=!1);Y&&(L.diagnostics={runnable:Z,programLog:k,vertexShader:{log:z,prefix:g},fragmentShader:{log:W,prefix:p}})}r.deleteShader(U),r.deleteShader(C),D=new va(r,v),b=i_(r,v)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,Zg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=C,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new __(e),t.set(e,n)),n}}class __{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}}function v_(i,e,t,n,r,s,a){const o=new wf,l=new g_,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,y,L,k,z){const W=k.fog,Z=z.geometry,Y=b.isMeshStandardMaterial?k.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),X=ee&&ee.mapping===Oa?ee.image.height:null,he=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const Me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ce=Me!==void 0?Me.length:0;let qe=0;Z.morphAttributes.position!==void 0&&(qe=1),Z.morphAttributes.normal!==void 0&&(qe=2),Z.morphAttributes.color!==void 0&&(qe=3);let ft,$,se,Le;if(he){const mt=Hn[he];ft=mt.vertexShader,$=mt.fragmentShader}else ft=b.vertexShader,$=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),Le=l.getFragmentShaderID(b);const ce=i.getRenderTarget(),Be=i.state.buffers.depth.getReversed(),Xe=z.isInstancedMesh===!0,Ve=z.isBatchedMesh===!0,st=!!b.map,Q=!!b.matcap,re=!!ee,R=!!b.aoMap,Fe=!!b.lightMap,ne=!!b.bumpMap,Te=!!b.normalMap,fe=!!b.displacementMap,ke=!!b.emissiveMap,Se=!!b.metalnessMap,w=!!b.roughnessMap,M=b.anisotropy>0,B=b.clearcoat>0,K=b.dispersion>0,te=b.iridescence>0,J=b.sheen>0,De=b.transmission>0,me=M&&!!b.anisotropyMap,Ee=B&&!!b.clearcoatMap,nt=B&&!!b.clearcoatNormalMap,ie=B&&!!b.clearcoatRoughnessMap,we=te&&!!b.iridescenceMap,Ge=te&&!!b.iridescenceThicknessMap,We=J&&!!b.sheenColorMap,Re=J&&!!b.sheenRoughnessMap,rt=!!b.specularMap,$e=!!b.specularColorMap,Mt=!!b.specularIntensityMap,N=De&&!!b.transmissionMap,ge=De&&!!b.thicknessMap,q=!!b.gradientMap,j=!!b.alphaMap,xe=b.alphaTest>0,_e=!!b.alphaHash,Ze=!!b.extensions;let At=yi;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(At=i.toneMapping);const Zt={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:ft,fragmentShader:$,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:Le,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&z._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&z.instanceColor!==null,instancingMorph:Xe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Br,alphaToCoverage:!!b.alphaToCoverage,map:st,matcap:Q,envMap:re,envMapMode:re&&ee.mapping,envMapCubeUVHeight:X,aoMap:R,lightMap:Fe,bumpMap:ne,normalMap:Te,displacementMap:d&&fe,emissiveMap:ke,normalMapObjectSpace:Te&&b.normalMapType===Td,normalMapTangentSpace:Te&&b.normalMapType===Sf,metalnessMap:Se,roughnessMap:w,anisotropy:M,anisotropyMap:me,clearcoat:B,clearcoatMap:Ee,clearcoatNormalMap:nt,clearcoatRoughnessMap:ie,dispersion:K,iridescence:te,iridescenceMap:we,iridescenceThicknessMap:Ge,sheen:J,sheenColorMap:We,sheenRoughnessMap:Re,specularMap:rt,specularColorMap:$e,specularIntensityMap:Mt,transmission:De,transmissionMap:N,thicknessMap:ge,gradientMap:q,opaque:b.transparent===!1&&b.blending===br&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:xe,alphaHash:_e,combine:b.combine,mapUv:st&&v(b.map.channel),aoMapUv:R&&v(b.aoMap.channel),lightMapUv:Fe&&v(b.lightMap.channel),bumpMapUv:ne&&v(b.bumpMap.channel),normalMapUv:Te&&v(b.normalMap.channel),displacementMapUv:fe&&v(b.displacementMap.channel),emissiveMapUv:ke&&v(b.emissiveMap.channel),metalnessMapUv:Se&&v(b.metalnessMap.channel),roughnessMapUv:w&&v(b.roughnessMap.channel),anisotropyMapUv:me&&v(b.anisotropyMap.channel),clearcoatMapUv:Ee&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:We&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(b.sheenRoughnessMap.channel),specularMapUv:rt&&v(b.specularMap.channel),specularColorMapUv:$e&&v(b.specularColorMap.channel),specularIntensityMapUv:Mt&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:ge&&v(b.thicknessMap.channel),alphaMapUv:j&&v(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Te||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(st||j),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Be,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:st&&b.map.isVideoTexture===!0&&at.getTransfer(b.map.colorSpace)===vt,decodeVideoTextureEmissive:ke&&b.emissiveMap.isVideoTexture===!0&&at.getTransfer(b.emissiveMap.colorSpace)===vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===kn,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ze&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&b.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(A(y,b),E(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function A(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function E(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const y=_[b.type];let L;if(y){const k=Hn[y];L=tp.clone(k.uniforms)}else L=b.uniforms;return L}function U(b,y){let L;for(let k=0,z=u.length;k<z;k++){const W=u[k];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new p_(i,y,b,s),u.push(L)),L}function C(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:D}}function x_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function M_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _u(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,m,_,v,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function o(h,d,m,_,v,g){const p=a(h,d,m,_,v,g);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(h,d,m,_,v,g){const p=a(h,d,m,_,v,g);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||M_),n.length>1&&n.sort(d||_u),r.length>1&&r.sort(d||_u)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function y_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new vu,i.set(n,[a])):r>=s.length?(a=new vu,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function S_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Qe};break;case"SpotLight":t={position:new I,direction:new I,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function E_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let b_=0;function T_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function A_(i){const e=new S_,t=E_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new _t,a=new _t;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,_=0,v=0,g=0,p=0,A=0,E=0,x=0,U=0,C=0,P=0;c.sort(T_);for(let b=0,y=c.length;b<y;b++){const L=c[b],k=L.color,z=L.intensity,W=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*z,h+=k.g*z,d+=k.b*z;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],z);P++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=L.shadow.matrix,A++}n.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(k).multiplyScalar(z),Y.distance=W,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[v]=Y;const ee=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,ee.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=ee.matrix,L.castShadow){const X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=Z,x++}v++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(k).multiplyScalar(z),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=Y,g++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const ee=L.shadow,X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=L.shadow.matrix,E++}n.point[_]=Y,_++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(z),Y.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=Y,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==m||D.pointLength!==_||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==x||D.numSpotMaps!==U||D.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,D.directionalLength=m,D.pointLength=_,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=x,D.numSpotMaps=U,D.numLightProbes=P,n.version=b_++)}function l(c,u){let h=0,d=0,m=0,_=0,v=0;const g=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const E=c[p];if(E.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),h++}else if(E.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),m++}else if(E.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(g),a.identity(),s.copy(E.matrixWorld),s.premultiply(g),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function xu(i){const e=new A_(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function w_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new xu(i),e.set(r,[o])):s>=a.length?(o=new xu(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class R_ extends kr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C_ extends kr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
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
}`;function D_(i,e,t){let n=new $l;const r=new le,s=new le,a=new Pt,o=new R_({depthPacking:bd}),l=new C_,c={},u=t.maxTextureSize,h={[Ei]:fn,[fn]:Ei,[kn]:kn},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:P_,fragmentShader:L_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new dn;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bt(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf;let p=this.type;this.render=function(C,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Mi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=p!==ti&&this.type===ti,W=p===ti&&this.type!==ti;for(let Z=0,Y=C.length;Z<Y;Z++){const ee=C[Z],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const he=X.getFrameExtents();if(r.multiply(he),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,X.mapSize.y=s.y)),X.map===null||z===!0||W===!0){const Ce=this.type!==ti?{minFilter:rn,magFilter:rn}:{};X.map!==null&&X.map.dispose(),X.map=new Wi(r.x,r.y,Ce),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const Me=X.getViewportCount();for(let Ce=0;Ce<Me;Ce++){const qe=X.getViewport(Ce);a.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),k.viewport(a),X.updateMatrices(ee,Ce),n=X.getFrustum(),x(P,D,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===ti&&A(X,D),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,y,L)};function A(C,P){const D=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Wi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,D,d,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,D,m,v,null)}function E(C,P,D,b){let y=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)y=L;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const k=y.uuid,z=P.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let Z=W[z];Z===void 0&&(Z=y.clone(),W[z]=Z,P.addEventListener("dispose",U)),y=Z}if(y.visible=P.visible,y.wireframe=P.wireframe,b===ti?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=D}return y}function x(C,P,D,b,y){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===ti)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const z=e.update(C),W=C.material;if(Array.isArray(W)){const Z=z.groups;for(let Y=0,ee=Z.length;Y<ee;Y++){const X=Z[Y],he=W[X.materialIndex];if(he&&he.visible){const Me=E(C,he,b,y);C.onBeforeShadow(i,C,P,D,z,Me,X),i.renderBufferDirect(D,null,z,Me,C,X),C.onAfterShadow(i,C,P,D,z,Me,X)}}}else if(W.visible){const Z=E(C,W,b,y);C.onBeforeShadow(i,C,P,D,z,Z,null),i.renderBufferDirect(D,null,z,Z,C,null),C.onAfterShadow(i,C,P,D,z,Z,null)}}const k=C.children;for(let z=0,W=k.length;z<W;z++)x(k[z],P,D,b,y)}function U(C){C.target.removeEventListener("dispose",U);for(const D in c){const b=c[D],y=C.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const I_={[Ho]:ko,[Go]:Xo,[Vo]:Yo,[Lr]:Wo,[ko]:Ho,[Xo]:Go,[Yo]:Vo,[Wo]:Lr};function U_(i,e){function t(){let N=!1;const ge=new Pt;let q=null;const j=new Pt(0,0,0,0);return{setMask:function(xe){q!==xe&&!N&&(i.colorMask(xe,xe,xe,xe),q=xe)},setLocked:function(xe){N=xe},setClear:function(xe,_e,Ze,At,Zt){Zt===!0&&(xe*=At,_e*=At,Ze*=At),ge.set(xe,_e,Ze,At),j.equals(ge)===!1&&(i.clearColor(xe,_e,Ze,At),j.copy(ge))},reset:function(){N=!1,q=null,j.set(-1,0,0,0)}}}function n(){let N=!1,ge=!1,q=null,j=null,xe=null;return{setReversed:function(_e){if(ge!==_e){const Ze=e.get("EXT_clip_control");ge?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const At=xe;xe=null,this.setClear(At)}ge=_e},getReversed:function(){return ge},setTest:function(_e){_e?ce(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(_e){q!==_e&&!N&&(i.depthMask(_e),q=_e)},setFunc:function(_e){if(ge&&(_e=I_[_e]),j!==_e){switch(_e){case Ho:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case Xo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=_e}},setLocked:function(_e){N=_e},setClear:function(_e){xe!==_e&&(ge&&(_e=1-_e),i.clearDepth(_e),xe=_e)},reset:function(){N=!1,q=null,j=null,xe=null,ge=!1}}}function r(){let N=!1,ge=null,q=null,j=null,xe=null,_e=null,Ze=null,At=null,Zt=null;return{setTest:function(mt){N||(mt?ce(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(mt){ge!==mt&&!N&&(i.stencilMask(mt),ge=mt)},setFunc:function(mt,Rn,Zn){(q!==mt||j!==Rn||xe!==Zn)&&(i.stencilFunc(mt,Rn,Zn),q=mt,j=Rn,xe=Zn)},setOp:function(mt,Rn,Zn){(_e!==mt||Ze!==Rn||At!==Zn)&&(i.stencilOp(mt,Rn,Zn),_e=mt,Ze=Rn,At=Zn)},setLocked:function(mt){N=mt},setClear:function(mt){Zt!==mt&&(i.clearStencil(mt),Zt=mt)},reset:function(){N=!1,ge=null,q=null,j=null,xe=null,_e=null,Ze=null,At=null,Zt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,m=[],_=null,v=!1,g=null,p=null,A=null,E=null,x=null,U=null,C=null,P=new Qe(0,0,0),D=0,b=!1,y=null,L=null,k=null,z=null,W=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ee=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=ee>=2);let he=null,Me={};const Ce=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),ft=new Pt().fromArray(Ce),$=new Pt().fromArray(qe);function se(N,ge,q,j){const xe=new Uint8Array(4),_e=i.createTexture();i.bindTexture(N,_e),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<q;Ze++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ge+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return _e}const Le={};Le[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Lr),ne(!1),Te(Tc),ce(i.CULL_FACE),R(Mi);function ce(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Be(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Xe(N,ge){return h[N]!==ge?(i.bindFramebuffer(N,ge),h[N]=ge,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ve(N,ge){let q=m,j=!1;if(N){q=d.get(ge),q===void 0&&(q=[],d.set(ge,q));const xe=N.textures;if(q.length!==xe.length||q[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Ze=xe.length;_e<Ze;_e++)q[_e]=i.COLOR_ATTACHMENT0+_e;q.length=xe.length,j=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,j=!0);j&&i.drawBuffers(q)}function st(N){return _!==N?(i.useProgram(N),_=N,!0):!1}const Q={[Ni]:i.FUNC_ADD,[Jh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};Q[jh]=i.MIN,Q[Qh]=i.MAX;const re={[ed]:i.ZERO,[td]:i.ONE,[nd]:i.SRC_COLOR,[Bo]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[rd]:i.DST_ALPHA,[id]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[od]:i.ONE_MINUS_DST_COLOR,[sd]:i.ONE_MINUS_DST_ALPHA,[cd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function R(N,ge,q,j,xe,_e,Ze,At,Zt,mt){if(N===Mi){v===!0&&(Be(i.BLEND),v=!1);return}if(v===!1&&(ce(i.BLEND),v=!0),N!==Kh){if(N!==g||mt!==b){if((p!==Ni||x!==Ni)&&(i.blendEquation(i.FUNC_ADD),p=Ni,x=Ni),mt)switch(N){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vs:i.blendFunc(i.ONE,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,E=null,U=null,C=null,P.set(0,0,0),D=0,g=N,b=mt}return}xe=xe||ge,_e=_e||q,Ze=Ze||j,(ge!==p||xe!==x)&&(i.blendEquationSeparate(Q[ge],Q[xe]),p=ge,x=xe),(q!==A||j!==E||_e!==U||Ze!==C)&&(i.blendFuncSeparate(re[q],re[j],re[_e],re[Ze]),A=q,E=j,U=_e,C=Ze),(At.equals(P)===!1||Zt!==D)&&(i.blendColor(At.r,At.g,At.b,Zt),P.copy(At),D=Zt),g=N,b=!1}function Fe(N,ge){N.side===kn?Be(i.CULL_FACE):ce(i.CULL_FACE);let q=N.side===fn;ge&&(q=!q),ne(q),N.blending===br&&N.transparent===!1?R(Mi):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const j=N.stencilWrite;o.setTest(j),j&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function Te(N){N!==qh?(ce(i.CULL_FACE),N!==L&&(N===Tc?i.cullFace(i.BACK):N===Zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),L=N}function fe(N){N!==k&&(Y&&i.lineWidth(N),k=N)}function ke(N,ge,q){N?(ce(i.POLYGON_OFFSET_FILL),(z!==ge||W!==q)&&(i.polygonOffset(ge,q),z=ge,W=q)):Be(i.POLYGON_OFFSET_FILL)}function Se(N){N?ce(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+Z-1),he!==N&&(i.activeTexture(N),he=N)}function M(N,ge,q){q===void 0&&(he===null?q=i.TEXTURE0+Z-1:q=he);let j=Me[q];j===void 0&&(j={type:void 0,texture:void 0},Me[q]=j),(j.type!==N||j.texture!==ge)&&(he!==q&&(i.activeTexture(q),he=q),i.bindTexture(N,ge||Le[N]),j.type=N,j.texture=ge)}function B(){const N=Me[he];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(N){ft.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ft.copy(N))}function Re(N){$.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$.copy(N))}function rt(N,ge){let q=c.get(ge);q===void 0&&(q=new WeakMap,c.set(ge,q));let j=q.get(N);j===void 0&&(j=i.getUniformBlockIndex(ge,N.name),q.set(N,j))}function $e(N,ge){const j=c.get(ge).get(N);l.get(ge)!==j&&(i.uniformBlockBinding(ge,j,N.__bindingPointIndex),l.set(ge,j))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,Me={},h={},d=new WeakMap,m=[],_=null,v=!1,g=null,p=null,A=null,E=null,x=null,U=null,C=null,P=new Qe(0,0,0),D=0,b=!1,y=null,L=null,k=null,z=null,W=null,ft.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:Be,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:st,setBlending:R,setMaterial:Fe,setFlipSided:ne,setCullFace:Te,setLineWidth:fe,setPolygonOffset:ke,setScissorTest:Se,activeTexture:w,bindTexture:M,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:we,texImage3D:Ge,updateUBOMapping:rt,uniformBlockBinding:$e,texStorage2D:nt,texStorage3D:ie,texSubImage2D:J,texSubImage3D:De,compressedTexSubImage2D:me,compressedTexSubImage3D:Ee,scissor:We,viewport:Re,reset:Mt}}function Mu(i,e,t,n){const r=N_(n);switch(t){case gf:return i*e;case vf:return i*e;case xf:return i*e*2;case Ba:return i*e/r.components*r.byteLength;case Zl:return i*e/r.components*r.byteLength;case Mf:return i*e*2/r.components*r.byteLength;case Kl:return i*e*2/r.components*r.byteLength;case _f:return i*e*3/r.components*r.byteLength;case On:return i*e*4/r.components*r.byteLength;case Jl:return i*e*4/r.components*r.byteLength;case da:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:case el:return Math.max(i,16)*Math.max(e,8)/4;case $o:case Qo:return Math.max(i,8)*Math.max(e,8)/2;case tl:case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _a:case vl:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yf:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yl:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N_(i){switch(i){case ci:case df:return{byteLength:1,components:1};case xs:case pf:case bs:return{byteLength:2,components:1};case Yl:case ql:return{byteLength:2,components:4};case Vi:case Xl:case Wn:return{byteLength:4,components:1};case mf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function F_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return m?new OffscreenCanvas(w,M):Ta("canvas")}function v(w,M,B){let K=1;const te=Se(w);if((te.width>B||te.height>B)&&(K=B/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(K*te.width),De=Math.floor(K*te.height);h===void 0&&(h=_(J,De));const me=M?_(J,De):h;return me.width=J,me.height=De,me.getContext("2d").drawImage(w,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+De+")."),me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,M,B,K,te=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=M;if(M===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),M===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),M===i.RGBA){const De=te?za:at.getTransfer(K);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=De===vt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(w,M){let B;return w?M===null||M===Vi||M===Ur?B=i.DEPTH24_STENCIL8:M===Wn?B=i.DEPTH32F_STENCIL8:M===xs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vi||M===Ur?B=i.DEPTH_COMPONENT24:M===Wn?B=i.DEPTH_COMPONENT32F:M===xs&&(B=i.DEPTH_COMPONENT16),B}function U(w,M){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==rn&&w.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function C(w){const M=w.target;M.removeEventListener("dispose",C),D(M),M.isVideoTexture&&u.delete(M)}function P(w){const M=w.target;M.removeEventListener("dispose",P),y(M)}function D(w){const M=n.get(w);if(M.__webglInit===void 0)return;const B=w.source,K=d.get(B);if(K){const te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(w),Object.keys(K).length===0&&d.delete(B)}n.remove(w)}function b(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const B=w.source,K=d.get(B);delete K[M.__cacheKey],a.memory.textures--}function y(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[K][te]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=w.textures;for(let K=0,te=B.length;K<te;K++){const J=n.get(B[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(w)}let L=0;function k(){L=0}function z(){const w=L;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w}function W(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function Z(w,M){const B=n.get(w);if(w.isVideoTexture&&fe(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,w,M);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function Y(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){$(B,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function ee(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){$(B,w,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function X(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){se(B,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const he={[Ko]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},Me={[rn]:i.NEAREST,[Sd]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},Ce={[Ad]:i.NEVER,[Dd]:i.ALWAYS,[wd]:i.LESS,[Ef]:i.LEQUAL,[Rd]:i.EQUAL,[Ld]:i.GEQUAL,[Cd]:i.GREATER,[Pd]:i.NOTEQUAL};function qe(w,M){if(M.type===Wn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Ka||M.magFilter===Fs||M.magFilter===Bi||M.minFilter===Vn||M.minFilter===Ka||M.minFilter===Fs||M.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,he[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,he[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,he[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Me[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===rn||M.minFilter!==Fs&&M.minFilter!==Bi||M.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ft(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",C));const K=M.source;let te=d.get(K);te===void 0&&(te={},d.set(K,te));const J=W(M);if(J!==w.__cacheKey){te[J]===void 0&&(te[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),te[J].usedTimes++;const De=te[w.__cacheKey];De!==void 0&&(te[w.__cacheKey].usedTimes--,De.usedTimes===0&&b(M)),w.__cacheKey=J,w.__webglTexture=te[J].texture}return B}function $(w,M,B){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const te=ft(w,M),J=M.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+B);const De=n.get(J);if(J.version!==De.__version||te===!0){t.activeTexture(i.TEXTURE0+B);const me=at.getPrimaries(at.workingColorSpace),Ee=M.colorSpace===xi?null:at.getPrimaries(M.colorSpace),nt=M.colorSpace===xi||me===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ie=v(M.image,!1,r.maxTextureSize);ie=ke(M,ie);const we=s.convert(M.format,M.colorSpace),Ge=s.convert(M.type);let We=E(M.internalFormat,we,Ge,M.colorSpace,M.isVideoTexture);qe(K,M);let Re;const rt=M.mipmaps,$e=M.isVideoTexture!==!0,Mt=De.__version===void 0||te===!0,N=J.dataReady,ge=U(M,ie);if(M.isDepthTexture)We=x(M.format===Nr,M.type),Mt&&($e?t.texStorage2D(i.TEXTURE_2D,1,We,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,We,ie.width,ie.height,0,we,Ge,null));else if(M.isDataTexture)if(rt.length>0){$e&&Mt&&t.texStorage2D(i.TEXTURE_2D,ge,We,rt[0].width,rt[0].height);for(let q=0,j=rt.length;q<j;q++)Re=rt[q],$e?N&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Re.width,Re.height,we,Ge,Re.data):t.texImage2D(i.TEXTURE_2D,q,We,Re.width,Re.height,0,we,Ge,Re.data);M.generateMipmaps=!1}else $e?(Mt&&t.texStorage2D(i.TEXTURE_2D,ge,We,ie.width,ie.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,we,Ge,ie.data)):t.texImage2D(i.TEXTURE_2D,0,We,ie.width,ie.height,0,we,Ge,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,We,rt[0].width,rt[0].height,ie.depth);for(let q=0,j=rt.length;q<j;q++)if(Re=rt[q],M.format!==On)if(we!==null)if($e){if(N)if(M.layerUpdates.size>0){const xe=Mu(Re.width,Re.height,M.format,M.type);for(const _e of M.layerUpdates){const Ze=Re.data.subarray(_e*xe/Re.data.BYTES_PER_ELEMENT,(_e+1)*xe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,_e,Re.width,Re.height,1,we,Ze)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Re.width,Re.height,ie.depth,we,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,We,Re.width,Re.height,ie.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Re.width,Re.height,ie.depth,we,Ge,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,We,Re.width,Re.height,ie.depth,0,we,Ge,Re.data)}else{$e&&Mt&&t.texStorage2D(i.TEXTURE_2D,ge,We,rt[0].width,rt[0].height);for(let q=0,j=rt.length;q<j;q++)Re=rt[q],M.format!==On?we!==null?$e?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Re.width,Re.height,we,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,q,We,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?N&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Re.width,Re.height,we,Ge,Re.data):t.texImage2D(i.TEXTURE_2D,q,We,Re.width,Re.height,0,we,Ge,Re.data)}else if(M.isDataArrayTexture)if($e){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,We,ie.width,ie.height,ie.depth),N)if(M.layerUpdates.size>0){const q=Mu(ie.width,ie.height,M.format,M.type);for(const j of M.layerUpdates){const xe=ie.data.subarray(j*q/ie.data.BYTES_PER_ELEMENT,(j+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ie.width,ie.height,1,we,Ge,xe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,we,Ge,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,ie.width,ie.height,ie.depth,0,we,Ge,ie.data);else if(M.isData3DTexture)$e?(Mt&&t.texStorage3D(i.TEXTURE_3D,ge,We,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,we,Ge,ie.data)):t.texImage3D(i.TEXTURE_3D,0,We,ie.width,ie.height,ie.depth,0,we,Ge,ie.data);else if(M.isFramebufferTexture){if(Mt)if($e)t.texStorage2D(i.TEXTURE_2D,ge,We,ie.width,ie.height);else{let q=ie.width,j=ie.height;for(let xe=0;xe<ge;xe++)t.texImage2D(i.TEXTURE_2D,xe,We,q,j,0,we,Ge,null),q>>=1,j>>=1}}else if(rt.length>0){if($e&&Mt){const q=Se(rt[0]);t.texStorage2D(i.TEXTURE_2D,ge,We,q.width,q.height)}for(let q=0,j=rt.length;q<j;q++)Re=rt[q],$e?N&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,we,Ge,Re):t.texImage2D(i.TEXTURE_2D,q,We,we,Ge,Re);M.generateMipmaps=!1}else if($e){if(Mt){const q=Se(ie);t.texStorage2D(i.TEXTURE_2D,ge,We,q.width,q.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ge,ie)}else t.texImage2D(i.TEXTURE_2D,0,We,we,Ge,ie);g(M)&&p(K),De.__version=J.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function se(w,M,B){if(M.image.length!==6)return;const K=ft(w,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const J=n.get(te);if(te.version!==J.__version||K===!0){t.activeTexture(i.TEXTURE0+B);const De=at.getPrimaries(at.workingColorSpace),me=M.colorSpace===xi?null:at.getPrimaries(M.colorSpace),Ee=M.colorSpace===xi||De===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,we=[];for(let j=0;j<6;j++)!nt&&!ie?we[j]=v(M.image[j],!0,r.maxCubemapSize):we[j]=ie?M.image[j].image:M.image[j],we[j]=ke(M,we[j]);const Ge=we[0],We=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),rt=E(M.internalFormat,We,Re,M.colorSpace),$e=M.isVideoTexture!==!0,Mt=J.__version===void 0||K===!0,N=te.dataReady;let ge=U(M,Ge);qe(i.TEXTURE_CUBE_MAP,M);let q;if(nt){$e&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,rt,Ge.width,Ge.height);for(let j=0;j<6;j++){q=we[j].mipmaps;for(let xe=0;xe<q.length;xe++){const _e=q[xe];M.format!==On?We!==null?$e?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,_e.width,_e.height,We,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,rt,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,_e.width,_e.height,We,Re,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,rt,_e.width,_e.height,0,We,Re,_e.data)}}}else{if(q=M.mipmaps,$e&&Mt){q.length>0&&ge++;const j=Se(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,rt,j.width,j.height)}for(let j=0;j<6;j++)if(ie){$e?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we[j].width,we[j].height,We,Re,we[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,rt,we[j].width,we[j].height,0,We,Re,we[j].data);for(let xe=0;xe<q.length;xe++){const Ze=q[xe].image[j].image;$e?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,Ze.width,Ze.height,We,Re,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,rt,Ze.width,Ze.height,0,We,Re,Ze.data)}}else{$e?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,We,Re,we[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,rt,We,Re,we[j]);for(let xe=0;xe<q.length;xe++){const _e=q[xe];$e?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,We,Re,_e.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,rt,We,Re,_e.image[j])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),J.__version=te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Le(w,M,B,K,te,J){const De=s.convert(B.format,B.colorSpace),me=s.convert(B.type),Ee=E(B.internalFormat,De,me,B.colorSpace),nt=n.get(M),ie=n.get(B);if(ie.__renderTarget=M,!nt.__hasExternalTextures){const we=Math.max(1,M.width>>J),Ge=Math.max(1,M.height>>J);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,J,Ee,we,Ge,M.depth,0,De,me,null):t.texImage2D(te,J,Ee,we,Ge,0,De,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Te(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,ie.__webglTexture,0,ne(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,ie.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(w,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,J=x(M.stencilBuffer,te),De=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=ne(M);Te(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,J,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,w)}else{const K=M.textures;for(let te=0;te<K.length;te++){const J=K[te],De=s.convert(J.format,J.colorSpace),me=s.convert(J.type),Ee=E(J.internalFormat,De,me,J.colorSpace),nt=ne(M);B&&Te(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Ee,M.width,M.height):Te(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Ee,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const te=K.__webglTexture,J=ne(M);if(M.depthTexture.format===Tr)Te(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===Nr)Te(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Xe(w){const M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Be(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),ce(M.__webglDepthbuffer[K],w,!1);else{const te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ce(M.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(w,M,B){const K=n.get(w);M!==void 0&&Le(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Xe(w)}function st(w){const M=w.texture,B=n.get(w),K=n.get(M);w.addEventListener("dispose",P);const te=w.textures,J=w.isWebGLCubeRenderTarget===!0,De=te.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,a.memory.textures++),J){B.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[me]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)B.__webglFramebuffer[me][Ee]=i.createFramebuffer()}else B.__webglFramebuffer[me]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)B.__webglFramebuffer[me]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(De)for(let me=0,Ee=te.length;me<Ee;me++){const nt=n.get(te[me]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Te(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let me=0;me<te.length;me++){const Ee=te[me];B.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[me]);const nt=s.convert(Ee.format,Ee.colorSpace),ie=s.convert(Ee.type),we=E(Ee.internalFormat,nt,ie,Ee.colorSpace,w.isXRRenderTarget===!0),Ge=ne(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,we,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,B.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),qe(i.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)Le(B.__webglFramebuffer[me][Ee],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee);else Le(B.__webglFramebuffer[me],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let me=0,Ee=te.length;me<Ee;me++){const nt=te[me],ie=n.get(nt);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),qe(i.TEXTURE_2D,nt),Le(B.__webglFramebuffer,w,nt,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),g(nt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),qe(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)Le(B.__webglFramebuffer[Ee],w,M,i.COLOR_ATTACHMENT0,me,Ee);else Le(B.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,me,0);g(M)&&p(me),t.unbindTexture()}w.depthBuffer&&Xe(w)}function Q(w){const M=w.textures;for(let B=0,K=M.length;B<K;B++){const te=M[B];if(g(te)){const J=A(w),De=n.get(te).__webglTexture;t.bindTexture(J,De),p(J),t.unbindTexture()}}}const re=[],R=[];function Fe(w){if(w.samples>0){if(Te(w)===!1){const M=w.textures,B=w.width,K=w.height;let te=i.COLOR_BUFFER_BIT;const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(w),me=M.length>1;if(me)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ee]);const nt=n.get(M[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,te,i.NEAREST),l===!0&&(re.length=0,R.length=0,re.push(i.COLOR_ATTACHMENT0+Ee),w.depthBuffer&&w.resolveDepthBuffer===!1&&(re.push(J),R.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ee]);const nt=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ne(w){return Math.min(r.maxSamples,w.samples)}function Te(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function fe(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function ke(w,M){const B=w.colorSpace,K=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Br&&B!==xi&&(at.getTransfer(B)===vt?(K!==On||te!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=Ve,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Te}function O_(i,e){function t(n,r=xi){let s;const a=at.getTransfer(r);if(n===ci)return i.UNSIGNED_BYTE;if(n===Yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===df)return i.BYTE;if(n===pf)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Xl)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===gf)return i.ALPHA;if(n===_f)return i.RGB;if(n===On)return i.RGBA;if(n===vf)return i.LUMINANCE;if(n===xf)return i.LUMINANCE_ALPHA;if(n===Tr)return i.DEPTH_COMPONENT;if(n===Nr)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===Zl)return i.RED_INTEGER;if(n===Mf)return i.RG;if(n===Kl)return i.RG_INTEGER;if(n===Jl)return i.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===ga)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===jo||n===Qo||n===el)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===nl||n===il)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tl||n===nl)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===il)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===ul||n===fl||n===hl||n===dl||n===pl||n===ml||n===gl||n===_l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===rl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===vl||n===xl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_a)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yf||n===Ml||n===yl||n===Sl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_a)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class B_ extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wt extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z_={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const H_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
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

}`;class G_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bi({vertexShader:H_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V_ extends zr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null;const v=new G_,g=t.getContextAttributes();let p=null,A=null;const E=[],x=[],U=new le;let C=null;const P=new vn;P.viewport=new Pt;const D=new vn;D.viewport=new Pt;const b=[P,D],y=new B_;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=E[$];return se===void 0&&(se=new To,E[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=E[$];return se===void 0&&(se=new To,E[$]=se),se.getGripSpace()},this.getHand=function($){let se=E[$];return se===void 0&&(se=new To,E[$]=se),se.getHandSpace()};function z($){const se=x.indexOf($.inputSource);if(se===-1)return;const Le=E[se];Le!==void 0&&(Le.update($.inputSource,$.frame,c||a),Le.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let $=0;$<E.length;$++){const se=x[$];se!==null&&(x[$]=null,E[$].disconnect(se))}L=null,k=null,v.reset(),e.setRenderTarget(p),m=null,d=null,h=null,r=null,A=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Wi(m.framebufferWidth,m.framebufferHeight,{format:On,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,Le=null,ce=null;g.depth&&(ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=g.stencil?Nr:Tr,Le=g.stencil?Ur:Vi);const Be={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Wi(d.textureWidth,d.textureHeight,{format:On,type:ci,depthTexture:new Ff(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ft.setContext(r),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z($){for(let se=0;se<$.removed.length;se++){const Le=$.removed[se],ce=x.indexOf(Le);ce>=0&&(x[ce]=null,E[ce].disconnect(Le))}for(let se=0;se<$.added.length;se++){const Le=$.added[se];let ce=x.indexOf(Le);if(ce===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=x.length){x.push(Le),ce=Xe;break}else if(x[Xe]===null){x[Xe]=Le,ce=Xe;break}if(ce===-1)break}const Be=E[ce];Be&&Be.connect(Le)}}const Y=new I,ee=new I;function X($,se,Le){Y.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(Le.matrixWorld);const ce=Y.distanceTo(ee),Be=se.projectionMatrix.elements,Xe=Le.projectionMatrix.elements,Ve=Be[14]/(Be[10]-1),st=Be[14]/(Be[10]+1),Q=(Be[9]+1)/Be[5],re=(Be[9]-1)/Be[5],R=(Be[8]-1)/Be[0],Fe=(Xe[8]+1)/Xe[0],ne=Ve*R,Te=Ve*Fe,fe=ce/(-R+Fe),ke=fe*-R;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ke),$.translateZ(fe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Be[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Se=Ve+fe,w=st+fe,M=ne-ke,B=Te+(ce-ke),K=Q*st/w*Se,te=re*st/w*Se;$.projectionMatrix.makePerspective(M,B,K,te,Se,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function he($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let se=$.near,Le=$.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(Le=v.depthFar)),y.near=D.near=P.near=se,y.far=D.far=P.far=Le,(L!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,k=y.far),P.layers.mask=$.layers.mask|2,D.layers.mask=$.layers.mask|4,y.layers.mask=P.layers.mask|D.layers.mask;const ce=$.parent,Be=y.cameras;he(y,ce);for(let Xe=0;Xe<Be.length;Xe++)he(Be[Xe],ce);Be.length===2?X(y,P,D):y.projectionMatrix.copy(P.projectionMatrix),Me($,y,ce)};function Me($,se,Le){Le===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(Le.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Ce=null;function qe($,se){if(u=se.getViewerPose(c||a),_=se,u!==null){const Le=u.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let ce=!1;Le.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Xe=0;Xe<Le.length;Xe++){const Ve=Le[Xe];let st=null;if(m!==null)st=m.getViewport(Ve);else{const re=h.getViewSubImage(d,Ve);st=re.viewport,Xe===0&&(e.setRenderTargetTextures(A,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(A))}let Q=b[Xe];Q===void 0&&(Q=new vn,Q.layers.enable(Xe),Q.viewport=new Pt,b[Xe]=Q),Q.matrix.fromArray(Ve.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ve.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(st.x,st.y,st.width,st.height),Xe===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(Q)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Xe=h.getDepthInformation(Le[0]);Xe&&Xe.isValid&&Xe.texture&&v.init(e,Xe,r.renderState)}}for(let Le=0;Le<E.length;Le++){const ce=x[Le],Be=E[Le];ce!==null&&Be!==void 0&&Be.update(ce,se,c||a)}Ce&&Ce($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),_=null}const ft=new Uf;ft.setAnimationLoop(qe),this.setAnimationLoop=function($){Ce=$},this.dispose=function(){}}}const Li=new Yn,W_=new _t;function X_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Lf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,A,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,A,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const A=e.get(p),E=A.envMap,x=A.envMapRotation;E&&(g.envMap.value=E,Li.copy(x),Li.x*=-1,Li.y*=-1,Li.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),g.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(Li)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,A,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Y_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const x=E.program;n.uniformBlockBinding(A,x)}function c(A,E){let x=r[A.id];x===void 0&&(_(A),x=u(A),r[A.id]=x,A.addEventListener("dispose",g));const U=E.program;n.updateUBOMapping(A,U);const C=e.render.frame;s[A.id]!==C&&(d(A),s[A.id]=C)}function u(A){const E=h();A.__bindingPointIndex=E;const x=i.createBuffer(),U=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,U,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const E=r[A.id],x=A.uniforms,U=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,P=x.length;C<P;C++){const D=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,y=D.length;b<y;b++){const L=D[b];if(m(L,C,b,U)===!0){const k=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Z=0;Z<z.length;Z++){const Y=z[Z],ee=v(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,k+W,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,E,x,U){const C=A.value,P=E+"_"+x;if(U[P]===void 0)return typeof C=="number"||typeof C=="boolean"?U[P]=C:U[P]=C.clone(),!0;{const D=U[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return U[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(A){const E=A.uniforms;let x=0;const U=16;for(let P=0,D=E.length;P<D;P++){const b=Array.isArray(E[P])?E[P]:[E[P]];for(let y=0,L=b.length;y<L;y++){const k=b[y],z=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Z=z.length;W<Z;W++){const Y=z[W],ee=v(Y),X=x%U,he=X%ee.boundary,Me=X+he;x+=he,Me!==0&&U-Me<ee.storage&&(x+=U-Me),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=ee.storage}}}const C=x%U;return C>0&&(x+=U-C),A.__size=x,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function g(A){const E=A.target;E.removeEventListener("dispose",g);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class q_{constructor(e={}){const{canvas:t=Ud(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=yi,this.toneMappingExposure=1;const x=this;let U=!1,C=0,P=0,D=null,b=-1,y=null;const L=new Pt,k=new Pt;let z=null;const W=new Qe(0);let Z=0,Y=t.width,ee=t.height,X=1,he=null,Me=null;const Ce=new Pt(0,0,Y,ee),qe=new Pt(0,0,Y,ee);let ft=!1;const $=new $l;let se=!1,Le=!1;const ce=new _t,Be=new _t,Xe=new I,Ve=new Pt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function re(){return D===null?X:1}let R=n;function Fe(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wl}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),R===null){const F="webgl2";if(R=Fe(F,S),R===null)throw Fe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ne,Te,fe,ke,Se,w,M,B,K,te,J,De,me,Ee,nt,ie,we,Ge,We,Re,rt,$e,Mt,N;function ge(){ne=new jm(R),ne.init(),$e=new O_(R,ne),Te=new Ym(R,ne,e,$e),fe=new U_(R,ne),Te.reverseDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),ke=new tg(R),Se=new x_,w=new F_(R,ne,fe,Se,Te,$e,ke),M=new Zm(x),B=new $m(x),K=new lp(R),Mt=new Wm(R,K),te=new Qm(R,K,ke,Mt),J=new ig(R,te,K,ke),We=new ng(R,Te,w),ie=new qm(Se),De=new v_(x,M,B,ne,Te,Mt,ie),me=new X_(x,Se),Ee=new y_,nt=new w_(ne),Ge=new Vm(x,M,B,fe,J,m,l),we=new D_(x,J,Te),N=new Y_(R,ke,Te,fe),Re=new Xm(R,ne,ke),rt=new eg(R,ne,ke),ke.programs=De.programs,x.capabilities=Te,x.extensions=ne,x.properties=Se,x.renderLists=Ee,x.shadowMap=we,x.state=fe,x.info=ke}ge();const q=new V_(x,R);this.xr=q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(Y,ee,!1))},this.getSize=function(S){return S.set(Y,ee)},this.setSize=function(S,F,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,ee=F,t.width=Math.floor(S*X),t.height=Math.floor(F*X),G===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Y*X,ee*X).floor()},this.setDrawingBufferSize=function(S,F,G){Y=S,ee=F,X=G,t.width=Math.floor(S*G),t.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Ce)},this.setViewport=function(S,F,G,V){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,F,G,V),fe.viewport(L.copy(Ce).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(qe)},this.setScissor=function(S,F,G,V){S.isVector4?qe.set(S.x,S.y,S.z,S.w):qe.set(S,F,G,V),fe.scissor(k.copy(qe).multiplyScalar(X).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(S){fe.setScissorTest(ft=S)},this.setOpaqueSort=function(S){he=S},this.setTransparentSort=function(S){Me=S},this.getClearColor=function(S){return S.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(S=!0,F=!0,G=!0){let V=0;if(S){let O=!1;if(D!==null){const ae=D.texture.format;O=ae===Jl||ae===Kl||ae===Zl}if(O){const ae=D.texture.type,ve=ae===ci||ae===Vi||ae===xs||ae===Ur||ae===Yl||ae===ql,Ie=Ge.getClearColor(),Ue=Ge.getClearAlpha(),Ye=Ie.r,Ke=Ie.g,Ne=Ie.b;ve?(_[0]=Ye,_[1]=Ke,_[2]=Ne,_[3]=Ue,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=Ye,v[1]=Ke,v[2]=Ne,v[3]=Ue,R.clearBufferiv(R.COLOR,0,v))}else V|=R.COLOR_BUFFER_BIT}F&&(V|=R.DEPTH_BUFFER_BIT),G&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ee.dispose(),nt.dispose(),Se.dispose(),M.dispose(),B.dispose(),J.dispose(),Mt.dispose(),N.dispose(),De.dispose(),q.dispose(),q.removeEventListener("sessionstart",oc),q.removeEventListener("sessionend",lc),Ti.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=ke.autoReset,F=we.enabled,G=we.autoUpdate,V=we.needsUpdate,O=we.type;ge(),ke.autoReset=S,we.enabled=F,we.autoUpdate=G,we.needsUpdate=V,we.type=O}function _e(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ze(S){const F=S.target;F.removeEventListener("dispose",Ze),At(F)}function At(S){Zt(S),Se.remove(S)}function Zt(S){const F=Se.get(S).programs;F!==void 0&&(F.forEach(function(G){De.releaseProgram(G)}),S.isShaderMaterial&&De.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,V,O,ae){F===null&&(F=st);const ve=O.isMesh&&O.matrixWorld.determinant()<0,Ie=fh(S,F,G,V,O);fe.setMaterial(V,ve);let Ue=G.index,Ye=1;if(V.wireframe===!0){if(Ue=te.getWireframeAttribute(G),Ue===void 0)return;Ye=2}const Ke=G.drawRange,Ne=G.attributes.position;let ot=Ke.start*Ye,yt=(Ke.start+Ke.count)*Ye;ae!==null&&(ot=Math.max(ot,ae.start*Ye),yt=Math.min(yt,(ae.start+ae.count)*Ye)),Ue!==null?(ot=Math.max(ot,0),yt=Math.min(yt,Ue.count)):Ne!=null&&(ot=Math.max(ot,0),yt=Math.min(yt,Ne.count));const St=yt-ot;if(St<0||St===1/0)return;Mt.setup(O,V,Ie,G,Ue);let sn,ht=Re;if(Ue!==null&&(sn=K.get(Ue),ht=rt,ht.setIndex(sn)),O.isMesh)V.wireframe===!0?(fe.setLineWidth(V.wireframeLinewidth*re()),ht.setMode(R.LINES)):ht.setMode(R.TRIANGLES);else if(O.isLine){let Oe=V.linewidth;Oe===void 0&&(Oe=1),fe.setLineWidth(Oe*re()),O.isLineSegments?ht.setMode(R.LINES):O.isLineLoop?ht.setMode(R.LINE_LOOP):ht.setMode(R.LINE_STRIP)}else O.isPoints?ht.setMode(R.POINTS):O.isSprite&&ht.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Oe=O._multiDrawStarts,Kn=O._multiDrawCounts,dt=O._multiDrawCount,Cn=Ue?K.get(Ue).bytesPerElement:1,Ki=Se.get(V).currentProgram.getUniforms();for(let pn=0;pn<dt;pn++)Ki.setValue(R,"_gl_DrawID",pn),ht.render(Oe[pn]/Cn,Kn[pn])}else if(O.isInstancedMesh)ht.renderInstances(ot,St,O.count);else if(G.isInstancedBufferGeometry){const Oe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Kn=Math.min(G.instanceCount,Oe);ht.renderInstances(ot,St,Kn)}else ht.render(ot,St)};function mt(S,F,G){S.transparent===!0&&S.side===kn&&S.forceSinglePass===!1?(S.side=fn,S.needsUpdate=!0,Ls(S,F,G),S.side=Ei,S.needsUpdate=!0,Ls(S,F,G),S.side=kn):Ls(S,F,G)}this.compile=function(S,F,G=null){G===null&&(G=S),p=nt.get(G),p.init(F),E.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==G&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ae=O.material;if(ae)if(Array.isArray(ae))for(let ve=0;ve<ae.length;ve++){const Ie=ae[ve];mt(Ie,G,O),V.add(Ie)}else mt(ae,G,O),V.add(ae)}),E.pop(),p=null,V},this.compileAsync=function(S,F,G=null){const V=this.compile(S,F,G);return new Promise(O=>{function ae(){if(V.forEach(function(ve){Se.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){O(S);return}setTimeout(ae,10)}ne.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Rn=null;function Zn(S){Rn&&Rn(S)}function oc(){Ti.stop()}function lc(){Ti.start()}const Ti=new Uf;Ti.setAnimationLoop(Zn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(S){Rn=S,q.setAnimationLoop(S),S===null?Ti.stop():Ti.start()},q.addEventListener("sessionstart",oc),q.addEventListener("sessionend",lc),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,F,D),p=nt.get(S,E.length),p.init(F),E.push(p),Be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(Be),Le=this.localClippingEnabled,se=ie.init(this.clippingPlanes,Le),g=Ee.get(S,A.length),g.init(),A.push(g),q.enabled===!0&&q.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&Ya(ae,F,-1/0,x.sortObjects)}Ya(S,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(he,Me),Q=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Q&&Ge.addToRenderList(g,S),this.info.render.frame++,se===!0&&ie.beginShadows();const G=p.state.shadowsArray;we.render(G,S,F),se===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){const ae=F.cameras;if(O.length>0)for(let ve=0,Ie=ae.length;ve<Ie;ve++){const Ue=ae[ve];uc(V,O,S,Ue)}Q&&Ge.render(S);for(let ve=0,Ie=ae.length;ve<Ie;ve++){const Ue=ae[ve];cc(g,S,Ue,Ue.viewport)}}else O.length>0&&uc(V,O,S,F),Q&&Ge.render(S),cc(g,S,F);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(x,S,F),Mt.resetDefaultState(),b=-1,y=null,E.pop(),E.length>0?(p=E[E.length-1],se===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function Ya(S,F,G,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){V&&Ve.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Be);const ve=J.update(S),Ie=S.material;Ie.visible&&g.push(S,ve,Ie,G,Ve.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){const ve=J.update(S),Ie=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ve.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ve.copy(ve.boundingSphere.center)),Ve.applyMatrix4(S.matrixWorld).applyMatrix4(Be)),Array.isArray(Ie)){const Ue=ve.groups;for(let Ye=0,Ke=Ue.length;Ye<Ke;Ye++){const Ne=Ue[Ye],ot=Ie[Ne.materialIndex];ot&&ot.visible&&g.push(S,ve,ot,G,Ve.z,Ne)}}else Ie.visible&&g.push(S,ve,Ie,G,Ve.z,null)}}const ae=S.children;for(let ve=0,Ie=ae.length;ve<Ie;ve++)Ya(ae[ve],F,G,V)}function cc(S,F,G,V){const O=S.opaque,ae=S.transmissive,ve=S.transparent;p.setupLightsView(G),se===!0&&ie.setGlobalState(x.clippingPlanes,G),V&&fe.viewport(L.copy(V)),O.length>0&&Ps(O,F,G),ae.length>0&&Ps(ae,F,G),ve.length>0&&Ps(ve,F,G),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function uc(S,F,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Wi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?bs:ci,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ae=p.state.transmissionRenderTarget[V.id],ve=V.viewport||L;ae.setSize(ve.z,ve.w);const Ie=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(W),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ge.render(G);const Ue=x.toneMapping;x.toneMapping=yi;const Ye=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),se===!0&&ie.setGlobalState(x.clippingPlanes,V),Ps(S,G,V),w.updateMultisampleRenderTarget(ae),w.updateRenderTargetMipmap(ae),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ne=0,ot=F.length;Ne<ot;Ne++){const yt=F[Ne],St=yt.object,sn=yt.geometry,ht=yt.material,Oe=yt.group;if(ht.side===kn&&St.layers.test(V.layers)){const Kn=ht.side;ht.side=fn,ht.needsUpdate=!0,fc(St,G,V,sn,ht,Oe),ht.side=Kn,ht.needsUpdate=!0,Ke=!0}}Ke===!0&&(w.updateMultisampleRenderTarget(ae),w.updateRenderTargetMipmap(ae))}x.setRenderTarget(Ie),x.setClearColor(W,Z),Ye!==void 0&&(V.viewport=Ye),x.toneMapping=Ue}function Ps(S,F,G){const V=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ae=S.length;O<ae;O++){const ve=S[O],Ie=ve.object,Ue=ve.geometry,Ye=V===null?ve.material:V,Ke=ve.group;Ie.layers.test(G.layers)&&fc(Ie,F,G,Ue,Ye,Ke)}}function fc(S,F,G,V,O,ae){S.onBeforeRender(x,F,G,V,O,ae),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(x,F,G,V,S,ae),O.transparent===!0&&O.side===kn&&O.forceSinglePass===!1?(O.side=fn,O.needsUpdate=!0,x.renderBufferDirect(G,F,V,O,S,ae),O.side=Ei,O.needsUpdate=!0,x.renderBufferDirect(G,F,V,O,S,ae),O.side=kn):x.renderBufferDirect(G,F,V,O,S,ae),S.onAfterRender(x,F,G,V,O,ae)}function Ls(S,F,G){F.isScene!==!0&&(F=st);const V=Se.get(S),O=p.state.lights,ae=p.state.shadowsArray,ve=O.state.version,Ie=De.getParameters(S,O.state,ae,F,G),Ue=De.getProgramCacheKey(Ie);let Ye=V.programs;V.environment=S.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(S.isMeshStandardMaterial?B:M).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ye===void 0&&(S.addEventListener("dispose",Ze),Ye=new Map,V.programs=Ye);let Ke=Ye.get(Ue);if(Ke!==void 0){if(V.currentProgram===Ke&&V.lightsStateVersion===ve)return dc(S,Ie),Ke}else Ie.uniforms=De.getUniforms(S),S.onBeforeCompile(Ie,x),Ke=De.acquireProgram(Ie,Ue),Ye.set(Ue,Ke),V.uniforms=Ie.uniforms;const Ne=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=ie.uniform),dc(S,Ie),V.needsLights=dh(S),V.lightsStateVersion=ve,V.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Ke,V.uniformsList=null,Ke}function hc(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=va.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function dc(S,F){const G=Se.get(S);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function fh(S,F,G,V,O){F.isScene!==!0&&(F=st),w.resetTextureUnits();const ae=F.fog,ve=V.isMeshStandardMaterial?F.environment:null,Ie=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Br,Ue=(V.isMeshStandardMaterial?B:M).get(V.envMap||ve),Ye=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ke=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!G.morphAttributes.position,ot=!!G.morphAttributes.normal,yt=!!G.morphAttributes.color;let St=yi;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(St=x.toneMapping);const sn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=sn!==void 0?sn.length:0,Oe=Se.get(V),Kn=p.state.lights;if(se===!0&&(Le===!0||S!==y)){const yn=S===y&&V.id===b;ie.setState(V,S,yn)}let dt=!1;V.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Kn.state.version||Oe.outputColorSpace!==Ie||O.isBatchedMesh&&Oe.batching===!1||!O.isBatchedMesh&&Oe.batching===!0||O.isBatchedMesh&&Oe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Oe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Oe.instancing===!1||!O.isInstancedMesh&&Oe.instancing===!0||O.isSkinnedMesh&&Oe.skinning===!1||!O.isSkinnedMesh&&Oe.skinning===!0||O.isInstancedMesh&&Oe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Oe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Oe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Oe.instancingMorph===!1&&O.morphTexture!==null||Oe.envMap!==Ue||V.fog===!0&&Oe.fog!==ae||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ie.numPlanes||Oe.numIntersection!==ie.numIntersection)||Oe.vertexAlphas!==Ye||Oe.vertexTangents!==Ke||Oe.morphTargets!==Ne||Oe.morphNormals!==ot||Oe.morphColors!==yt||Oe.toneMapping!==St||Oe.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Oe.__version=V.version);let Cn=Oe.currentProgram;dt===!0&&(Cn=Ls(V,F,O));let Ki=!1,pn=!1,Vr=!1;const Et=Cn.getUniforms(),zn=Oe.uniforms;if(fe.useProgram(Cn.program)&&(Ki=!0,pn=!0,Vr=!0),V.id!==b&&(b=V.id,pn=!0),Ki||y!==S){fe.buffers.depth.getReversed()?(ce.copy(S.projectionMatrix),Fd(ce),Od(ce),Et.setValue(R,"projectionMatrix",ce)):Et.setValue(R,"projectionMatrix",S.projectionMatrix),Et.setValue(R,"viewMatrix",S.matrixWorldInverse);const ui=Et.map.cameraPosition;ui!==void 0&&ui.setValue(R,Xe.setFromMatrixPosition(S.matrixWorld)),Te.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Et.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,pn=!0,Vr=!0)}if(O.isSkinnedMesh){Et.setOptional(R,O,"bindMatrix"),Et.setOptional(R,O,"bindMatrixInverse");const yn=O.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Et.setValue(R,"boneTexture",yn.boneTexture,w))}O.isBatchedMesh&&(Et.setOptional(R,O,"batchingTexture"),Et.setValue(R,"batchingTexture",O._matricesTexture,w),Et.setOptional(R,O,"batchingIdTexture"),Et.setValue(R,"batchingIdTexture",O._indirectTexture,w),Et.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(R,"batchingColorTexture",O._colorsTexture,w));const Wr=G.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0)&&We.update(O,G,Cn),(pn||Oe.receiveShadow!==O.receiveShadow)&&(Oe.receiveShadow=O.receiveShadow,Et.setValue(R,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(zn.envMap.value=Ue,zn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(zn.envMapIntensity.value=F.environmentIntensity),pn&&(Et.setValue(R,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&hh(zn,Vr),ae&&V.fog===!0&&me.refreshFogUniforms(zn,ae),me.refreshMaterialUniforms(zn,V,X,ee,p.state.transmissionRenderTarget[S.id]),va.upload(R,hc(Oe),zn,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(va.upload(R,hc(Oe),zn,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Et.setValue(R,"center",O.center),Et.setValue(R,"modelViewMatrix",O.modelViewMatrix),Et.setValue(R,"normalMatrix",O.normalMatrix),Et.setValue(R,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const yn=V.uniformsGroups;for(let ui=0,fi=yn.length;ui<fi;ui++){const pc=yn[ui];N.update(pc,Cn),N.bind(pc,Cn)}}return Cn}function hh(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function dh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,F,G){Se.get(S.texture).__webglTexture=F,Se.get(S.depthTexture).__webglTexture=G;const V=Se.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const G=Se.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,G=0){D=S,C=F,P=G;let V=!0,O=null,ae=!1,ve=!1;if(S){const Ue=Se.get(S);if(Ue.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(Ue.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Ue.__hasExternalTextures)w.rebindTextures(S,Se.get(S.texture).__webglTexture,Se.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ne=S.depthTexture;if(Ue.__boundDepthTexture!==Ne){if(Ne!==null&&Se.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const Ye=S.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(ve=!0);const Ke=Se.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ke[F])?O=Ke[F][G]:O=Ke[F],ae=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?O=Se.get(S).__webglMultisampledFramebuffer:Array.isArray(Ke)?O=Ke[G]:O=Ke,L.copy(S.viewport),k.copy(S.scissor),z=S.scissorTest}else L.copy(Ce).multiplyScalar(X).floor(),k.copy(qe).multiplyScalar(X).floor(),z=ft;if(fe.bindFramebuffer(R.FRAMEBUFFER,O)&&V&&fe.drawBuffers(S,O),fe.viewport(L),fe.scissor(k),fe.setScissorTest(z),ae){const Ue=Se.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ue.__webglTexture,G)}else if(ve){const Ue=Se.get(S.texture),Ye=F||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ue.__webglTexture,G||0,Ye)}b=-1},this.readRenderTargetPixels=function(S,F,G,V,O,ae,ve){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ie=Ie[ve]),Ie){fe.bindFramebuffer(R.FRAMEBUFFER,Ie);try{const Ue=S.texture,Ye=Ue.format,Ke=Ue.type;if(!Te.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&G>=0&&G<=S.height-O&&R.readPixels(F,G,V,O,$e.convert(Ye),$e.convert(Ke),ae)}finally{const Ue=D!==null?Se.get(D).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(S,F,G,V,O,ae,ve){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ie=Ie[ve]),Ie){const Ue=S.texture,Ye=Ue.format,Ke=Ue.type;if(!Te.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-V&&G>=0&&G<=S.height-O){fe.bindFramebuffer(R.FRAMEBUFFER,Ie);const Ne=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ne),R.bufferData(R.PIXEL_PACK_BUFFER,ae.byteLength,R.STREAM_READ),R.readPixels(F,G,V,O,$e.convert(Ye),$e.convert(Ke),0);const ot=D!==null?Se.get(D).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,ot);const yt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Nd(R,yt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ne),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ae),R.deleteBuffer(Ne),R.deleteSync(yt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,G=0){S.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-G),O=Math.floor(S.image.width*V),ae=Math.floor(S.image.height*V),ve=F!==null?F.x:0,Ie=F!==null?F.y:0;w.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,ve,Ie,O,ae),fe.unbindTexture()},this.copyTextureToTexture=function(S,F,G=null,V=null,O=0){S.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let ae,ve,Ie,Ue,Ye,Ke,Ne,ot,yt;const St=S.isCompressedTexture?S.mipmaps[O]:S.image;G!==null?(ae=G.max.x-G.min.x,ve=G.max.y-G.min.y,Ie=G.isBox3?G.max.z-G.min.z:1,Ue=G.min.x,Ye=G.min.y,Ke=G.isBox3?G.min.z:0):(ae=St.width,ve=St.height,Ie=St.depth||1,Ue=0,Ye=0,Ke=0),V!==null?(Ne=V.x,ot=V.y,yt=V.z):(Ne=0,ot=0,yt=0);const sn=$e.convert(F.format),ht=$e.convert(F.type);let Oe;F.isData3DTexture?(w.setTexture3D(F,0),Oe=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(w.setTexture2DArray(F,0),Oe=R.TEXTURE_2D_ARRAY):(w.setTexture2D(F,0),Oe=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const Kn=R.getParameter(R.UNPACK_ROW_LENGTH),dt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Cn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ki=R.getParameter(R.UNPACK_SKIP_ROWS),pn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,St.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ke);const Vr=S.isDataArrayTexture||S.isData3DTexture,Et=F.isDataArrayTexture||F.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const zn=Se.get(S),Wr=Se.get(F),yn=Se.get(zn.__renderTarget),ui=Se.get(Wr.__renderTarget);fe.bindFramebuffer(R.READ_FRAMEBUFFER,yn.__webglFramebuffer),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let fi=0;fi<Ie;fi++)Vr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Se.get(S).__webglTexture,O,Ke+fi),S.isDepthTexture?(Et&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Se.get(F).__webglTexture,O,yt+fi),R.blitFramebuffer(Ue,Ye,ae,ve,Ne,ot,ae,ve,R.DEPTH_BUFFER_BIT,R.NEAREST)):Et?R.copyTexSubImage3D(Oe,O,Ne,ot,yt+fi,Ue,Ye,ae,ve):R.copyTexSubImage2D(Oe,O,Ne,ot,yt+fi,Ue,Ye,ae,ve);fe.bindFramebuffer(R.READ_FRAMEBUFFER,null),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(Oe,O,Ne,ot,yt,ae,ve,Ie,sn,ht,St.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(Oe,O,Ne,ot,yt,ae,ve,Ie,sn,St.data):R.texSubImage3D(Oe,O,Ne,ot,yt,ae,ve,Ie,sn,ht,St):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,O,Ne,ot,ae,ve,sn,ht,St.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,O,Ne,ot,St.width,St.height,sn,St.data):R.texSubImage2D(R.TEXTURE_2D,O,Ne,ot,ae,ve,sn,ht,St);R.pixelStorei(R.UNPACK_ROW_LENGTH,Kn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Cn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ki),R.pixelStorei(R.UNPACK_SKIP_IMAGES,pn),O===0&&F.generateMipmaps&&R.generateMipmap(Oe),fe.unbindTexture()},this.copyTextureToTexture3D=function(S,F,G=null,V=null,O=0){return S.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,S=arguments[2],F=arguments[3],O=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,G,V,O)},this.initRenderTarget=function(S){Se.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,fe.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class Ql{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=n}clone(){return new Ql(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kf extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Z_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new I;class Aa{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wa extends kr{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fr;const $r=new I,hr=new I,dr=new I,pr=new le,jr=new le,Gf=new _t,ia=new I,Qr=new I,ra=new I,yu=new le,Ao=new le,Su=new le;class Al extends Vt{constructor(e=new wa){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new dn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Z_(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new Aa(n,3,0,!1)),fr.setAttribute("uv",new Aa(n,2,3,!1))}this.geometry=fr,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),Gf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-dr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;sa(ia.set(-.5,-.5,0),dr,a,hr,r,s),sa(Qr.set(.5,-.5,0),dr,a,hr,r,s),sa(ra.set(.5,.5,0),dr,a,hr,r,s),yu.set(0,0),Ao.set(1,0),Su.set(1,1);let o=e.ray.intersectTriangle(ia,Qr,ra,!1,$r);if(o===null&&(sa(Qr.set(-.5,.5,0),dr,a,hr,r,s),Ao.set(0,1),o=e.ray.intersectTriangle(ia,ra,Qr,!1,$r),o===null))return;const l=e.ray.origin.distanceTo($r);l<e.near||l>e.far||t.push({distance:l,point:$r.clone(),uv:wn.getInterpolation($r,ia,Qr,ra,yu,Ao,Su,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sa(i,e,t,n,r,s){pr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(jr.x=s*pr.x-r*pr.y,jr.y=r*pr.x+s*pr.y):jr.copy(pr),i.copy(e),i.x+=jr.x,i.y+=jr.y,i.applyMatrix4(Gf)}class Vf extends en{constructor(e=null,t=1,n=1,r,s,a,o,l,c=rn,u=rn,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eu extends hn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mr=new _t,bu=new _t,aa=[],Tu=new qi,K_=new _t,es=new bt,ts=new Ts;class wl extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,K_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Tu.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Tu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),ts.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),e.ray.intersectsSphere(ts)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mr),bu.multiplyMatrices(n,mr),es.matrixWorld=bu,es.raycast(e,aa);for(let a=0,o=aa.length;a<o;a++){const l=aa[a];l.instanceId=s,l.object=this,t.push(l)}aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Eu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vf(new Float32Array(r*this.count),r,this.count,Ba,Wn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class J_ extends en{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,m=(a-u)/d;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new le:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,r=[],s=[],a=[],o=new I,l=new _t;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Qt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Qt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ec extends qn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*u-m*h+this.aX,c=d*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $_ extends ec{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function tc(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,m*=u,r(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const oa=new I,wo=new tc,Ro=new tc,Co=new tc;class j_ extends qn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(oa.subVectors(r[0],r[1]).add(r[0]),c=oa);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(oa.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=oa),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(u),m);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),wo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,v,g),Ro.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,v,g),Co.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,v,g)}else this.curveType==="catmullrom"&&(wo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ro.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Co.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(wo.calc(l),Ro.calc(l),Co.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Au(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Q_(i,e){const t=1-i;return t*t*e}function ev(i,e){return 2*(1-i)*i*e}function tv(i,e){return i*i*e}function ds(i,e,t,n){return Q_(i,e)+ev(i,t)+tv(i,n)}function nv(i,e){const t=1-i;return t*t*t*e}function iv(i,e){const t=1-i;return 3*t*t*i*e}function rv(i,e){return 3*(1-i)*i*i*e}function sv(i,e){return i*i*i*e}function ps(i,e,t,n,r){return nv(i,e)+iv(i,t)+rv(i,n)+sv(i,r)}class Wf extends qn{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ps(e,r.x,s.x,a.x,o.x),ps(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class av extends qn{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ps(e,r.x,s.x,a.x,o.x),ps(e,r.y,s.y,a.y,o.y),ps(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xf extends qn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ov extends qn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yf extends qn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ds(e,r.x,s.x,a.x),ds(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lv extends qn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ds(e,r.x,s.x,a.x),ds(e,r.y,s.y,a.y),ds(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qf extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Au(o,l.x,c.x,u.x,h.x),Au(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var Rl=Object.freeze({__proto__:null,ArcCurve:$_,CatmullRomCurve3:j_,CubicBezierCurve:Wf,CubicBezierCurve3:av,EllipseCurve:ec,LineCurve:Xf,LineCurve3:ov,QuadraticBezierCurve:Yf,QuadraticBezierCurve3:lv,SplineCurve:qf});class cv extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Rl[r.type]().fromJSON(r))}return this}}class wu extends cv{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Xf(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Yf(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Wf(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new qf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new ec(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ka extends dn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],m=[];let _=0;const v=[],g=n/2;let p=0;A(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(m,2));function A(){const x=new I,U=new I;let C=0;const P=(t-e)/n;for(let D=0;D<=s;D++){const b=[],y=D/s,L=y*(t-e)+e;for(let k=0;k<=r;k++){const z=k/r,W=z*l+o,Z=Math.sin(W),Y=Math.cos(W);U.x=L*Z,U.y=-y*n+g,U.z=L*Y,h.push(U.x,U.y,U.z),x.set(Z,P,Y).normalize(),d.push(x.x,x.y,x.z),m.push(z,1-y),b.push(_++)}v.push(b)}for(let D=0;D<r;D++)for(let b=0;b<s;b++){const y=v[b][D],L=v[b+1][D],k=v[b+1][D+1],z=v[b][D+1];(e>0||b!==0)&&(u.push(y,L,z),C+=3),(t>0||b!==s-1)&&(u.push(L,k,z),C+=3)}c.addGroup(p,C,0),p+=C}function E(x){const U=_,C=new le,P=new I;let D=0;const b=x===!0?e:t,y=x===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,g*y,0),d.push(0,y,0),m.push(.5,.5),_++;const L=_;for(let k=0;k<=r;k++){const W=k/r*l+o,Z=Math.cos(W),Y=Math.sin(W);P.x=b*Y,P.y=g*y,P.z=b*Z,h.push(P.x,P.y,P.z),d.push(0,y,0),C.x=Z*.5+.5,C.y=Y*.5*y+.5,m.push(C.x,C.y),_++}for(let k=0;k<r;k++){const z=U+k,W=L+k;x===!0?u.push(W,W+1,z):u.push(W+1,W,z),D+=3}c.addGroup(p,D,x===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ga extends ka{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ga(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nc extends dn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(s.slice(),3)),this.setAttribute("uv",new Lt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const E=new I,x=new I,U=new I;for(let C=0;C<t.length;C+=3)m(t[C+0],E),m(t[C+1],x),m(t[C+2],U),l(E,x,U,A)}function l(A,E,x,U){const C=U+1,P=[];for(let D=0;D<=C;D++){P[D]=[];const b=A.clone().lerp(x,D/C),y=E.clone().lerp(x,D/C),L=C-D;for(let k=0;k<=L;k++)k===0&&D===C?P[D][k]=b:P[D][k]=b.clone().lerp(y,k/L)}for(let D=0;D<C;D++)for(let b=0;b<2*(C-D)-1;b++){const y=Math.floor(b/2);b%2===0?(d(P[D][y+1]),d(P[D+1][y]),d(P[D][y])):(d(P[D][y+1]),d(P[D+1][y+1]),d(P[D+1][y]))}}function c(A){const E=new I;for(let x=0;x<s.length;x+=3)E.x=s[x+0],E.y=s[x+1],E.z=s[x+2],E.normalize().multiplyScalar(A),s[x+0]=E.x,s[x+1]=E.y,s[x+2]=E.z}function u(){const A=new I;for(let E=0;E<s.length;E+=3){A.x=s[E+0],A.y=s[E+1],A.z=s[E+2];const x=g(A)/2/Math.PI+.5,U=p(A)/Math.PI+.5;a.push(x,1-U)}_(),h()}function h(){for(let A=0;A<a.length;A+=6){const E=a[A+0],x=a[A+2],U=a[A+4],C=Math.max(E,x,U),P=Math.min(E,x,U);C>.9&&P<.1&&(E<.2&&(a[A+0]+=1),x<.2&&(a[A+2]+=1),U<.2&&(a[A+4]+=1))}}function d(A){s.push(A.x,A.y,A.z)}function m(A,E){const x=A*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function _(){const A=new I,E=new I,x=new I,U=new I,C=new le,P=new le,D=new le;for(let b=0,y=0;b<s.length;b+=9,y+=6){A.set(s[b+0],s[b+1],s[b+2]),E.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),C.set(a[y+0],a[y+1]),P.set(a[y+2],a[y+3]),D.set(a[y+4],a[y+5]),U.copy(A).add(E).add(x).divideScalar(3);const L=g(U);v(C,y+0,A,L),v(P,y+2,E,L),v(D,y+4,x,L)}}function v(A,E,x,U){U<0&&A.x===1&&(a[E]=A.x-1),x.x===0&&x.z===0&&(a[E]=U/2/Math.PI+.5)}function g(A){return Math.atan2(A.z,-A.x)}function p(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.vertices,e.indices,e.radius,e.details)}}class Va extends wu{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new wu().fromJSON(r))}return this}}const uv={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Zf(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,m;if(n&&(s=mv(i,e,s,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let _=t;_<r;_+=t)h=i[_],d=i[_+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return Ms(s,a,t,o,l,m,0),a}};function Zf(i,e,t,n,r){let s,a;if(r===Av(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Ru(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Ru(s,i[s],i[s+1],a);return a&&Wa(a,a.next)&&(Ss(a),a=a.next),a}function Xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wa(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Ss(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ms(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Mv(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?hv(i,n,r,s):fv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ss(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=dv(Xi(i),e,t),Ms(i,e,t,n,r,s,2)):a===2&&pv(i,e,t,n,r,s):Ms(Xi(i),e,t,n,r,s,1);break}}}function fv(i){const e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=m&&Mr(r,o,s,l,a,c,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function hv(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Tt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,v=o>l?o>c?o:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,p=Cl(m,_,e,t,n),A=Cl(v,g,e,t,n);let E=i.prevZ,x=i.nextZ;for(;E&&E.z>=p&&x&&x.z<=A;){if(E.x>=m&&E.x<=v&&E.y>=_&&E.y<=g&&E!==r&&E!==a&&Mr(o,u,l,h,c,d,E.x,E.y)&&Tt(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=m&&x.x<=v&&x.y>=_&&x.y<=g&&x!==r&&x!==a&&Mr(o,u,l,h,c,d,x.x,x.y)&&Tt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=p;){if(E.x>=m&&E.x<=v&&E.y>=_&&E.y<=g&&E!==r&&E!==a&&Mr(o,u,l,h,c,d,E.x,E.y)&&Tt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=A;){if(x.x>=m&&x.x<=v&&x.y>=_&&x.y<=g&&x!==r&&x!==a&&Mr(o,u,l,h,c,d,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function dv(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Wa(r,s)&&Kf(r,n,n.next,s)&&ys(r,s)&&ys(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ss(n),Ss(n.next),n=i=s),n=n.next}while(n!==i);return Xi(n)}function pv(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ev(a,o)){let l=Jf(a,o);a=Xi(a,a.next),l=Xi(l,l.next),Ms(a,e,t,n,r,s,0),Ms(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function mv(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Zf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Sv(c));for(r.sort(gv),s=0;s<r.length;s++)t=_v(r[s],t);return t}function gv(i,e){return i.x-e.x}function _v(i,e){const t=vv(i,e);if(!t)return e;const n=Jf(t,i);return Xi(n,n.next),Xi(t,t.next)}function vv(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Mr(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),ys(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&xv(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function xv(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function Mv(i,e,t,n){let r=i;do r.z===0&&(r.z=Cl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,yv(r)}function yv(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function Cl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Sv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mr(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ev(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!bv(i,e)&&(ys(i,e)&&ys(e,i)&&Tv(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||Wa(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wa(i,e){return i.x===e.x&&i.y===e.y}function Kf(i,e,t,n){const r=ca(Tt(i,e,t)),s=ca(Tt(i,e,n)),a=ca(Tt(t,n,i)),o=ca(Tt(t,n,e));return!!(r!==s&&a!==o||r===0&&la(i,t,e)||s===0&&la(i,n,e)||a===0&&la(t,i,n)||o===0&&la(t,e,n))}function la(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ca(i){return i>0?1:i<0?-1:0}function bv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Kf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ys(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function Tv(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jf(i,e){const t=new Pl(i.i,i.x,i.y),n=new Pl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ru(i,e,t,n){const r=new Pl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ss(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Av(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class ms{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return ms.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Cu(e),Pu(n,e);let a=e.length;t.forEach(Cu);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Pu(n,t[l]);const o=uv.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Cu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class As extends dn{constructor(e=new Va([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Lt(r,3)),this.setAttribute("uv",new Lt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:wv;let E,x=!1,U,C,P,D;p&&(E=p.getSpacedPoints(u),x=!0,d=!1,U=p.computeFrenetFrames(u,!1),C=new I,P=new I,D=new I),d||(g=0,m=0,_=0,v=0);const b=o.extractPoints(c);let y=b.shape;const L=b.holes;if(!ms.isClockWise(y)){y=y.reverse();for(let Q=0,re=L.length;Q<re;Q++){const R=L[Q];ms.isClockWise(R)&&(L[Q]=R.reverse())}}const z=ms.triangulateShape(y,L),W=y;for(let Q=0,re=L.length;Q<re;Q++){const R=L[Q];y=y.concat(R)}function Z(Q,re,R){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(re,R)}const Y=y.length,ee=z.length;function X(Q,re,R){let Fe,ne,Te;const fe=Q.x-re.x,ke=Q.y-re.y,Se=R.x-Q.x,w=R.y-Q.y,M=fe*fe+ke*ke,B=fe*w-ke*Se;if(Math.abs(B)>Number.EPSILON){const K=Math.sqrt(M),te=Math.sqrt(Se*Se+w*w),J=re.x-ke/K,De=re.y+fe/K,me=R.x-w/te,Ee=R.y+Se/te,nt=((me-J)*w-(Ee-De)*Se)/(fe*w-ke*Se);Fe=J+fe*nt-Q.x,ne=De+ke*nt-Q.y;const ie=Fe*Fe+ne*ne;if(ie<=2)return new le(Fe,ne);Te=Math.sqrt(ie/2)}else{let K=!1;fe>Number.EPSILON?Se>Number.EPSILON&&(K=!0):fe<-Number.EPSILON?Se<-Number.EPSILON&&(K=!0):Math.sign(ke)===Math.sign(w)&&(K=!0),K?(Fe=-ke,ne=fe,Te=Math.sqrt(M)):(Fe=fe,ne=ke,Te=Math.sqrt(M/2))}return new le(Fe/Te,ne/Te)}const he=[];for(let Q=0,re=W.length,R=re-1,Fe=Q+1;Q<re;Q++,R++,Fe++)R===re&&(R=0),Fe===re&&(Fe=0),he[Q]=X(W[Q],W[R],W[Fe]);const Me=[];let Ce,qe=he.concat();for(let Q=0,re=L.length;Q<re;Q++){const R=L[Q];Ce=[];for(let Fe=0,ne=R.length,Te=ne-1,fe=Fe+1;Fe<ne;Fe++,Te++,fe++)Te===ne&&(Te=0),fe===ne&&(fe=0),Ce[Fe]=X(R[Fe],R[Te],R[fe]);Me.push(Ce),qe=qe.concat(Ce)}for(let Q=0;Q<g;Q++){const re=Q/g,R=m*Math.cos(re*Math.PI/2),Fe=_*Math.sin(re*Math.PI/2)+v;for(let ne=0,Te=W.length;ne<Te;ne++){const fe=Z(W[ne],he[ne],Fe);ce(fe.x,fe.y,-R)}for(let ne=0,Te=L.length;ne<Te;ne++){const fe=L[ne];Ce=Me[ne];for(let ke=0,Se=fe.length;ke<Se;ke++){const w=Z(fe[ke],Ce[ke],Fe);ce(w.x,w.y,-R)}}}const ft=_+v;for(let Q=0;Q<Y;Q++){const re=d?Z(y[Q],qe[Q],ft):y[Q];x?(P.copy(U.normals[0]).multiplyScalar(re.x),C.copy(U.binormals[0]).multiplyScalar(re.y),D.copy(E[0]).add(P).add(C),ce(D.x,D.y,D.z)):ce(re.x,re.y,0)}for(let Q=1;Q<=u;Q++)for(let re=0;re<Y;re++){const R=d?Z(y[re],qe[re],ft):y[re];x?(P.copy(U.normals[Q]).multiplyScalar(R.x),C.copy(U.binormals[Q]).multiplyScalar(R.y),D.copy(E[Q]).add(P).add(C),ce(D.x,D.y,D.z)):ce(R.x,R.y,h/u*Q)}for(let Q=g-1;Q>=0;Q--){const re=Q/g,R=m*Math.cos(re*Math.PI/2),Fe=_*Math.sin(re*Math.PI/2)+v;for(let ne=0,Te=W.length;ne<Te;ne++){const fe=Z(W[ne],he[ne],Fe);ce(fe.x,fe.y,h+R)}for(let ne=0,Te=L.length;ne<Te;ne++){const fe=L[ne];Ce=Me[ne];for(let ke=0,Se=fe.length;ke<Se;ke++){const w=Z(fe[ke],Ce[ke],Fe);x?ce(w.x,w.y+E[u-1].y,E[u-1].x+R):ce(w.x,w.y,h+R)}}}$(),se();function $(){const Q=r.length/3;if(d){let re=0,R=Y*re;for(let Fe=0;Fe<ee;Fe++){const ne=z[Fe];Be(ne[2]+R,ne[1]+R,ne[0]+R)}re=u+g*2,R=Y*re;for(let Fe=0;Fe<ee;Fe++){const ne=z[Fe];Be(ne[0]+R,ne[1]+R,ne[2]+R)}}else{for(let re=0;re<ee;re++){const R=z[re];Be(R[2],R[1],R[0])}for(let re=0;re<ee;re++){const R=z[re];Be(R[0]+Y*u,R[1]+Y*u,R[2]+Y*u)}}n.addGroup(Q,r.length/3-Q,0)}function se(){const Q=r.length/3;let re=0;Le(W,re),re+=W.length;for(let R=0,Fe=L.length;R<Fe;R++){const ne=L[R];Le(ne,re),re+=ne.length}n.addGroup(Q,r.length/3-Q,1)}function Le(Q,re){let R=Q.length;for(;--R>=0;){const Fe=R;let ne=R-1;ne<0&&(ne=Q.length-1);for(let Te=0,fe=u+g*2;Te<fe;Te++){const ke=Y*Te,Se=Y*(Te+1),w=re+Fe+ke,M=re+ne+ke,B=re+ne+Se,K=re+Fe+Se;Xe(w,M,B,K)}}}function ce(Q,re,R){l.push(Q),l.push(re),l.push(R)}function Be(Q,re,R){Ve(Q),Ve(re),Ve(R);const Fe=r.length/3,ne=A.generateTopUV(n,r,Fe-3,Fe-2,Fe-1);st(ne[0]),st(ne[1]),st(ne[2])}function Xe(Q,re,R,Fe){Ve(Q),Ve(re),Ve(Fe),Ve(re),Ve(R),Ve(Fe);const ne=r.length/3,Te=A.generateSideWallUV(n,r,ne-6,ne-3,ne-2,ne-1);st(Te[0]),st(Te[1]),st(Te[3]),st(Te[1]),st(Te[2]),st(Te[3])}function Ve(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function st(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rv(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Rl[r.type]().fromJSON(r)),new As(n,e.options)}}const wv={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new le(s,a),new le(o,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],m=e[r*3+1],_=e[r*3+2],v=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-h),new le(d,1-_),new le(v,1-p)]:[new le(o,1-l),new le(u,1-h),new le(m,1-_),new le(g,1-p)]}};function Rv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xa extends nc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xa(e.radius,e.detail)}}class Yi extends dn{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/r,m=new I,_=new le;for(let v=0;v<=r;v++){for(let g=0;g<=n;g++){const p=s+g/n*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}h+=d}for(let v=0;v<r;v++){const g=v*(n+1);for(let p=0;p<n;p++){const A=p+g,E=A,x=A+n+1,U=A+n+2,C=A+1;o.push(E,x,C),o.push(x,U,C)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ic extends dn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,d=new I,m=[],_=[],v=[],g=[];for(let p=0;p<=n;p++){const A=[],E=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let U=0;U<=t;U++){const C=U/t;h.x=-e*Math.cos(r+C*s)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+E*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(C+x,1-E),A.push(c++)}u.push(A)}for(let p=0;p<n;p++)for(let A=0;A<t;A++){const E=u[p][A+1],x=u[p][A],U=u[p+1][A],C=u[p+1][A+1];(p!==0||a>0)&&m.push(E,x,C),(p!==n-1||l<Math.PI)&&m.push(x,U,C)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lu extends kr{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class $f extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jf extends $f{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Po=new _t,Du=new I,Iu=new I;class Cv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $l,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pv extends Cv{constructor(){super(new Nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qf extends $f{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Pv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);const ns=new I;function En(i,e,t,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;ns.copy(e),ns[n]=0,ns.normalize();const c=.5*a/(a+o),u=1-ns.angleTo(i)/l;return Math.sign(ns[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Lv extends Zi{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,_=new I,v=.5/r;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(o.fromArray(u,g),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[g+0]=c.x*Math.sign(o.x)+l.x*s,u[g+1]=c.y*Math.sign(o.y)+l.y*s,u[g+2]=c.z*Math.sign(o.z)+l.z*s,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/m)){case 0:_.set(1,0,0),d[p+0]=En(_,l,"z","y",s,n),d[p+1]=1-En(_,l,"y","z",s,t);break;case 1:_.set(-1,0,0),d[p+0]=1-En(_,l,"z","y",s,n),d[p+1]=1-En(_,l,"y","z",s,t);break;case 2:_.set(0,1,0),d[p+0]=1-En(_,l,"x","z",s,e),d[p+1]=En(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),d[p+0]=1-En(_,l,"x","z",s,e),d[p+1]=1-En(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),d[p+0]=1-En(_,l,"x","y",s,e),d[p+1]=1-En(_,l,"y","x",s,t);break;case 5:_.set(0,0,-1),d[p+0]=En(_,l,"x","y",s,e),d[p+1]=1-En(_,l,"y","x",s,t);break}}}function Dv(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new dn;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const m=i[d].index;for(let _=0;_<m.count;++_)h.push(m.getX(_)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Uu(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const m=[];for(let v=0;v<a[u].length;++v)m.push(a[u][v][d]);const _=Uu(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function Uu(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new hn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,m=u.count;d<m;d++)for(let _=0;_<t;_++){const v=u.getComponent(d,_);o.setComponent(d+h,_,v)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const yr="#e3202e",is="#fff1d0",bn="#2c3040",Lo="#3d6ea8",ws="#ffc933",eh="#d08a35",rc="#d7263d";function T(i,e,t,n,r){i.index&&(i=i.toNonIndexed());for(var s=i.attributes.position.count,a=new Float32Array(s*3),o=new Qe(e),l=0;l<s;l++)a[l*3]=o.r,a[l*3+1]=o.g,a[l*3+2]=o.b;return i.setAttribute("color",new hn(a,3)),t=t||[0,0,0],n=n||[0,0,0],r=r||[1,1,1],i.applyMatrix4(new _t().compose(new I(t[0],t[1],t[2]),new Hr().setFromEuler(new Yn(n[0],n[1],n[2])),new I(r[0],r[1],r[2]))),i}function H(i,e,t,n,r){return n=n??.08,new Lv(i,e,t,r||1,Math.min(n,i/2-.004,e/2-.004,t/2-.004))}function Pe(i,e,t,n){return new ka(n??i,i,e,t||12)}function Si(i){return new Xa(i,1)}function ut(i){return Dv(i,!1)}var gt=Math.PI/2;function Iv(){var i=new Va;i.moveTo(-.52,.45),i.lineTo(.52,.45),i.lineTo(0,-.62),i.closePath();var e=new As(i,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:1}),t=function(n,r){return T(Pe(.12,.24,10),rc,[n,r,0],[gt,0,0])};return ut([T(e,ws,[0,0,-.06]),T(H(1.22,.24,.3,.1),eh,[0,.53,0]),t(-.2,.2),t(.2,.14),t(0,-.16)])}function th(){return ut([T(H(.62,.1,.62,.03),"#f1dbb0"),T(H(.5,.03,.5,.01),rc,[0,.055,0]),T(Pe(.14,.03,10),ws,[0,.062,0])])}function Uv(){for(var i=[],e=0;e<3;e++)i.push(T(H(.9,.14,.9,.04),"#f1dbb0",[e*.06-.06,.09+e*.16,.06-e*.06],[0,e*.25,0])),i.push(T(H(.9,.05,.3,.02),eh,[e*.06-.06,.17+e*.16,.06-e*.06-.3],[0,e*.25,0]));return i.push(T(Pe(.26,.04,12),rc,[.06,.5,-.06])),i.push(T(Pe(.13,.05,10),ws,[.06,.505,-.06])),ut(i)}function Nv(){return ut([T(Pe(.42,.02,12),"#c5384a"),T(H(.5,.04,.5,.02),"#e8b04a",[0,.02,0],[0,.5,0]),T(Pe(.18,.05,10),ws,[.08,.03,.05])])}var wr=[2.15,0,-2.15];function ye(i,e,t){return new Zi(i,e,t)}function An(i){return new Xa(i,0)}function Di(i,e,t){return new Ga(i,e,t||8)}var Yt="#ffffff",Ra="#9ad8ff";function Fv(i){Ra=i||"#9ad8ff"}function nh(i,e,t){var n=wr[e.slot],r,s;for(i.push(T(H(.16,2.3,1.56,.04),Yt,[.05,1.15,n])),i.push(T(H(.2,2.05,1.24,.04),e.door,[.09,1.03,n])),i.push(T(ye(.04,.5,.7),"#cfeaff",[.2,1.62,n])),i.push(T(An(.07),"#ffd23f",[.2,1.05,n-.4])),i.push(T(An(.09),"#fff6c9",[.14,2.3,n+.98])),t||i.push(T(H(1.05,.22,2.1,.06),e.porch,[.52,.11,n])),i.push(T(H(.56,.05,1.1,.02),e.mat,[.6,.235,n])),i.push(T(ye(.68,.07,.7),t?"#e9d7a3":"#d8d2c0",[1.38,.035,n])),i.push(T(ye(.09,.8,.09),"#f4f6fa",[1.5,.4,n+1.4])),i.push(T(H(.26,.24,.44,.08),e.cust?"#2f6fd6":"#8d939e",[1.5,.86,n+1.4])),r=0;r<3;r++)if(r!==e.slot){var a=wr[r];if(i.push(T(H(.14,1.4,1.5,.04),Yt,[.04,1.75,a])),i.push(T(H(.18,1.1,1.2,.03),Ra,[.07,1.75,a])),i.push(T(ye(.2,1.1,.05),Yt,[.08,1.75,a])),i.push(T(ye(.08,1.3,.3),e.roof2,[.05,1.75,a-.93])),i.push(T(ye(.08,1.3,.3),e.roof2,[.05,1.75,a+.93])),e.cust)for(i.push(T(ye(.34,.2,1.4),"#8a5a35",[.24,.92,a])),s=-1;s<=1;s++)i.push(T(An(.15),s?"#ff6fae":"#ffd23f",[.26,1.1,a+s*.42]))}}function Ov(i){var e=[],t,n=i.variant|0,r=n===1?4.3:3;e.push(T(H(4.1,r,6.5,.16),i.wall,[-2.05,r/2,0])),e.push(T(ye(4.16,.28,6.56),"#a9a59a",[-2.05,.14,0]));var s=new Va;if(s.moveTo(-4.25,0),s.lineTo(.1,0),s.lineTo(-2.07,1.55),s.closePath(),e.push(T(new As(s,{depth:6.8,bevelEnabled:!1}),i.roof,[0,r-.02,-3.4])),e.push(T(H(.3,.16,6.95,.05),i.roof2,[-2.07,r+1.53,0])),e.push(T(ye(.16,.14,6.84),Yt,[.06,r+.03,0])),e.push(T(H(.55,1,.55,.06),"#8a4a33",[-3.15,r+1.2,1.9])),e.push(T(ye(.66,.12,.66),"#5d3323",[-3.15,r+1.74,1.9])),n===0){var a=wr[(i.slot+1)%3];e.push(T(H(1.1,.8,1.2,.06),i.wall,[-.85,r+.62,a])),e.push(T(ye(.06,.5,.7),Ra,[-.29,r+.66,a])),e.push(T(H(1.3,.14,1.44,.04),i.roof2,[-.85,r+1.08,a]))}else if(n===1)for(e.push(T(ye(.1,.1,6.5),Yt,[.04,2.72,0])),t=0;t<3;t++)e.push(T(ye(.1,1,1.2),Yt,[.04,3.42,wr[t]])),e.push(T(ye(.12,.8,1),Ra,[.06,3.42,wr[t]]));else e.push(T(H(2.6,2.3,1.95,.08),i.wall,[-2.7,1.15,4.3])),e.push(T(H(2.8,.16,2.15,.05),i.roof2,[-2.7,2.38,4.3])),e.push(T(ye(.08,1.8,1.6),"#f4f6fa",[-1.38,.9,4.3])),e.push(T(ye(.09,.05,1.6),"#c9ced6",[-1.37,.7,4.3])),e.push(T(ye(.09,.05,1.6),"#c9ced6",[-1.37,1.3,4.3]));return nh(e,i,!1),e.push(T(ye(5.5,.06,1.5),"#b9b5a8",[-1.05,.03,4.3])),ut(e)}function Bv(i){var e=[],t,n=wr[i.slot];for(e.push(T(H(4.1,3,6.5,.16),i.wall,[-2.05,1.5,0])),e.push(T(H(4.5,.2,6.9,.06),Yt,[-2.05,3.08,0])),t=0;t<5;t++)e.push(T(ye(.84,.07,6.7),t%2?Yt:i.roof,[-3.73+t*.84,3.21,0]));return e.push(T(H(.9,.5,.9,.06),"#d9dde4",[-3,3.5,-2])),e.push(T(Pe(.3,.06,8),"#aab2bd",[-3,3.77,-2])),e.push(T(ye(1.5,.2,6.5),"#c9a36b",[.75,.1,0])),e.push(T(ye(1.5,.21,.05),"#a9844f",[.75,.1,-1.1])),e.push(T(ye(1.5,.21,.05),"#a9844f",[.75,.1,1.1])),nh(e,i,!0),i.cust&&(e.push(T(H(.1,1.9,.5,.05),"#3ec1d3",[.16,.98,n+1.15],[0,0,-.1])),e.push(T(H(.1,1.7,.46,.05),"#ff7a59",[.2,.9,n-1.12],[0,0,-.14]))),e.push(T(ye(5.5,.06,1.5),"#e3d2a2",[-1.05,.03,4.3])),ut(e)}function zv(i){var e=[],t;if(i.hood==="beach"){if(i.tree){for(t=0;t<4;t++)e.push(T(Pe(.2-t*.02,.85,6),t%2?"#b98f5e":"#a67c4d",[-2.3+t*.14,.42+t*.8,-4.35]));for(t=0;t<6;t++)e.push(T(ye(1.7,.06,.46),t%2?"#2fae5a":"#3cc46b",[-1.75+Math.cos(t*1.047)*.8,3.45,-4.35+Math.sin(t*1.047)*.8],[0,-t*1.047,-.38]));e.push(T(An(.16),"#6b4a2b",[-1.65,3.4,-4.25])),e.push(T(An(.16),"#6b4a2b",[-1.85,3.38,-4.5]))}else for(t=0;t<4;t++)e.push(T(Di(.16,.7,5),"#9bbf5a",[-1.4+t*.42,.35,-4.4+t%2*.3]));i.prop===1?(e.push(T(Pe(.04,1.7,5),Yt,[.85,.85,-4.3])),e.push(T(Di(.95,.42,8),"#ff5a5f",[.85,1.75,-4.3])),e.push(T(Di(.5,.25,8),Yt,[.85,1.9,-4.3])),e.push(T(ye(.7,.04,1.3),"#3ec1d3",[.8,.03,-3.75]))):i.prop===2?(e.push(T(Pe(.45,.3,8),"#e6cf8f",[.9,.15,-4.3])),e.push(T(Pe(.26,.3,8),"#e6cf8f",[.9,.45,-4.3])),e.push(T(Di(.16,.3,6),"#ff5a5f",[.9,.75,-4.3]))):i.prop===3&&(e.push(T(H(.5,1.8,.1,.05),"#ffd23f",[.7,.85,-4.3],[.12,.3,0])),e.push(T(H(.5,1.6,.1,.05),"#ff7a59",[1.15,.75,-4.1],[-.1,-.3,0])))}else{if(i.tree===1?(e.push(T(Pe(.2,2,7),"#9a6b3f",[-2.3,1,-4.35])),e.push(T(Si(1.15),"#35b84e",[-2.3,2.8,-4.35])),e.push(T(An(.8),"#4fd063",[-1.85,3.55,-4.1]))):i.tree===2?(e.push(T(Pe(.16,1,6),"#7d5a36",[-2.3,.5,-4.35])),e.push(T(Di(1.15,1.5,8),"#2f9e55",[-2.3,1.6,-4.35])),e.push(T(Di(.9,1.3,8),"#37b061",[-2.3,2.5,-4.35])),e.push(T(Di(.62,1.1,8),"#43c06e",[-2.3,3.3,-4.35]))):i.tree===3?(e.push(T(Pe(.18,1.8,7),"#8a5a3c",[-2.3,.9,-4.35])),e.push(T(Si(1.05),"#ff9ec4",[-2.3,2.6,-4.35])),e.push(T(An(.7),"#ffc4dc",[-2.7,3.2,-4.6]))):(e.push(T(Si(.62),"#35b84e",[-1.2,.45,-4.4],null,[1.3,.85,1])),e.push(T(An(.42),i.cust?"#ff6fae":"#7fae6a",[-.2,.32,-4.5]))),i.fence)for(e.push(T(ye(4.6,.07,.06),Yt,[-1.6,.5,-5.1])),e.push(T(ye(4.6,.07,.06),Yt,[-1.6,.26,-5.1])),t=0;t<5;t++)e.push(T(ye(.1,.7,.1),Yt,[-3.8+t*1.1,.35,-5.1]));if(i.prop===1)for(t=0;t<2;t++)e.push(T(ye(.03,.5,.03),"#ff8fb1",[.8+t*.4,.25,-4.3+t*.3])),e.push(T(An(.17),"#ff6fa3",[.8+t*.4,.58,-4.3+t*.3])),e.push(T(ye(.05,.3,.05),"#ff6fa3",[.92+t*.4,.78,-4.3+t*.3]));else i.prop===2?(e.push(T(Pe(.72,.2,12),"#ff7a59",[.9,.1,-4.3])),e.push(T(Pe(.6,.21,12),"#4db8ff",[.9,.1,-4.3]))):i.prop===3&&(e.push(T(Pe(.1,.6,6),"#b9bcc4",[.9,.3,-4.3])),e.push(T(Pe(.2,.1,10,.42),"#c9ccd4",[.9,.65,-4.3])),e.push(T(Pe(.34,.04,10),"#7fd4ff",[.9,.7,-4.3])))}return i.lamp&&(e.push(T(Pe(.07,3.4,6),"#4a4f5c",[1.6,1.7,-5])),e.push(T(ye(.7,.07,.07),"#4a4f5c",[1.9,3.36,-5])),e.push(T(H(.36,.13,.22,.04),"#fff6c9",[2.2,3.3,-5]))),e.length||e.push(T(ye(.01,.01,.01),"#5fd14e",[0,-1,0])),ut(e)}function Hv(){return ut([T(H(.2,1.1,1.2,.03),"#15161c"),T(H(.22,.06,1,.01),"#cfe9ff",[0,.1,0],[.5,0,0]),T(H(.22,.06,.7,.01),"#cfe9ff",[0,-.15,.1],[-.7,0,0])])}function sc(i,e,t,n){return ut([T(H(.3,.62,.5,.08),n||"#34425e",[0,.31,0]),T(H(.38,.62,.64,.12),i,[0,.92,0]),T(H(.5,.5,.52,.16,2),e,[0,1.5,0]),T(H(.52,.22,.56,.1),t,[-.03,1.75,0]),T(H(.03,.1,.08,.01),"#1c1c24",[.255,1.52,.12]),T(H(.03,.1,.08,.01),"#1c1c24",[.255,1.52,-.12])])}function kv(i){return ut([T(H(.56,.16,.16,.06),i,[.36,0,.4]),T(H(.56,.16,.16,.06),i,[.36,0,-.4])])}function Gv(i){return T(H(.66,.17,.17,.06),i,[.5,0,0])}function Vv(i,e){for(var t=[T(H(1.75,.62,3.5,.24,2),i,[0,.62,0]),T(H(1.5,.6,1.8,.24,2),"#bfe6ff",[0,1.14,.15]),T(H(1.56,.12,1.86,.05),i,[0,1.46,.15]),T(H(1.8,.2,.26,.07),bn,[0,.42,-1.72]),T(H(1.8,.2,.26,.07),bn,[0,.42,1.72]),T(H(.34,.18,.08,.03),"#fff6c9",[-.55,.72,-1.76]),T(H(.34,.18,.08,.03),"#fff6c9",[.55,.72,-1.76]),T(H(.3,.16,.08,.03),"#ff3b30",[-.58,.72,1.76]),T(H(.3,.16,.08,.03),"#ff3b30",[.58,.72,1.76])],n=-1;n<=1;n+=2)for(var r=-1;r<=1;r+=2)t.push(T(Pe(.36,.3,12),"#22242c",[n*.82,.36,r*1.08],[0,0,gt]));return ut(t)}function Wv(){return ut([T(Pe(.3,.8,10,.36),"#7c8794",[0,.56,0]),T(Pe(.4,.12,10),"#5a6169",[0,1,0])])}function Xv(){return ut([T(Pe(.2,.62,9),"#e63946",[0,.47,0]),T(Si(.21),"#e63946",[0,.8,0]),T(Pe(.09,.56,7),"#ffd23f",[0,.55,0],[0,0,gt])])}function Yv(){return ut([T(new Ga(.26,.72,10),"#ff7a1a",[0,.4,0]),T(H(.62,.07,.62,.02),"#ff7a1a",[0,.035,0]),T(Pe(.165,.13,10,.125),"#ffffff",[0,.42,0])])}function qv(){return ut([T(Pe(.62,.02,14),"#24252b",[0,.01,0],null,[1,1,.6]),T(Pe(.42,.02,12),"#101116",[.03,.02,.02],null,[1,1,.55])])}function Zv(i){return ut([T(H(.42,.42,.9,.14),i,[0,.5,0]),T(H(.4,.4,.42,.13),i,[0,.78,-.52]),T(H(.2,.18,.2,.06),"#2b1a0e",[0,.7,-.78]),T(H(.1,.22,.12,.03),"#2b1a0e",[-.17,1.02,-.5]),T(H(.1,.22,.12,.03),"#2b1a0e",[.17,1.02,-.5]),T(H(.1,.1,.4,.03),i,[0,.72,.55],[.6,0,0]),T(H(.12,.3,.12,.03),i,[-.14,.15,-.3]),T(H(.12,.3,.12,.03),i,[.14,.15,-.3]),T(H(.12,.3,.12,.03),i,[-.14,.15,.3]),T(H(.12,.3,.12,.03),i,[.14,.15,.3])])}function Kv(){for(var i=[T(H(.36,.06,1.1,.03),"#22252e",[0,.14,0])],e=-1;e<=1;e+=2)for(var t=-1;t<=1;t+=2)i.push(T(Pe(.07,.08,8),"#ffd23f",[e*.14,.07,t*.38],[0,0,gt]));return ut(i)}function Jv(){var i=new Va;i.moveTo(0,-.42),i.bezierCurveTo(-.7,.05,-.5,.55,0,.22),i.bezierCurveTo(.5,.55,.7,.05,0,-.42);var e=new As(i,{depth:.2,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1,curveSegments:8});return ut([T(e,"#ff3b4e",[0,0,-.1]),T(Si(.09),"#ffd0d6",[-.18,.2,.17])])}function $v(){return ut([T(Pe(.78,.02,16),"#3f9be0",[0,.012,0],null,[1,1,.6]),T(Pe(.45,.02,12),"#8fd3ff",[-.12,.022,-.05],null,[1,1,.5])])}function jv(i){return ut([T(Si(.34),i,[0,.34,0]),T(Pe(.345,.1,14),"#ffffff",[0,.34,0])])}function Qv(){for(var i=[T(H(.12,1,.5,.03),"#f4f6fa",[-1.45,.5,0]),T(H(.12,1,.5,.03),"#f4f6fa",[1.45,.5,0]),T(H(.3,.08,.7,.02),"#8a92a3",[-1.45,.04,0]),T(H(.3,.08,.7,.02),"#8a92a3",[1.45,.04,0]),T(Si(.12),"#ffb000",[-1.45,1.1,0]),T(Si(.12),"#ffb000",[1.45,1.1,0])],e=0;e<8;e++)i.push(T(H(.4,.3,.1,.02),e%2?"#ffffff":"#ff7a1a",[-1.4+e*.4,.82,0])),i.push(T(H(.4,.22,.1,.02),e%2?"#ff7a1a":"#ffffff",[-1.4+e*.4,.42,0]));return ut(i)}function ex(){return ut([T(Pe(1.4,.04,14),"#f1dea6",[0,.02,0],null,[1,1,.8]),T(Pe(.9,.05,10),"#e6cf8f",[.3,.03,.2],null,[1,1,.6]),T(ye(.9,.05,.06),"#d9bf7a",[-.4,.045,-.35]),T(ye(.7,.05,.06),"#d9bf7a",[.2,.05,.55]),T(ye(.6,.05,.06),"#d9bf7a",[-.5,.045,.3])])}function tx(i,e){return ut([sc(i,"#d9a577","#e6c35c","#2f8fbf"),T(H(2.3,.1,.52,.05),e,[.05,1,.45]),T(ye(2,.11,.08),Yt,[.05,1,.45]),T(H(.5,.16,.16,.06),"#d9a577",[.1,1.08,.3])])}function nx(i){for(var e=[T(H(1.2,.45,2,.12),"#f7f3e8",[0,.55,0]),T(H(1,.5,.5,.08),i,[0,.95,.35]),T(H(1.1,.35,.3,.06),"#f7f3e8",[0,.9,-.75]),T(H(1.3,.1,2,.04),i,[0,1.9,0]),T(ye(1.32,.11,.42),Yt,[0,1.9,.5]),T(ye(1.32,.11,.42),Yt,[0,1.9,-.5]),T(Pe(.16,.8,6),"#3d7fd9",[.3,1,.95]),T(An(.12),Yt,[.3,1.45,.95])],t=-1;t<=1;t+=2)for(var n=-1;n<=1;n+=2)e.push(T(ye(.06,1.1,.06),"#d9dde4",[t*.56,1.32,n*.86])),e.push(T(Pe(.24,.2,10),"#22242c",[t*.62,.24,n*.7],[0,0,gt]));return ut(e)}function ix(i){for(var e=[T(H(1.8,.62,3.7,.2,2),i,[0,.66,0]),T(H(1.56,.66,1.4,.2,2),"#bfe6ff",[0,1.22,-.55]),T(H(1.62,.12,1.46,.05),i,[0,1.58,-.55]),T(ye(1.5,.3,1.5),bn,[0,1,.95]),T(H(1.84,.2,.26,.07),bn,[0,.44,-1.82]),T(H(1.84,.2,.26,.07),bn,[0,.44,1.82]),T(ye(.34,.18,.08),"#fff6c9",[-.56,.76,-1.86]),T(ye(.34,.18,.08),"#fff6c9",[.56,.76,-1.86]),T(ye(.3,.16,.08),"#ff3b30",[-.6,.76,1.86]),T(ye(.3,.16,.08),"#ff3b30",[.6,.76,1.86])],t=-1;t<=1;t+=2)for(var n=-1;n<=1;n+=2)e.push(T(Pe(.4,.3,12),"#22242c",[t*.84,.4,n*1.15],[0,0,gt]));return ut(e)}function rx(){var i=ut([T(H(.3,.6,.5,.08),"#2b3350",[0,.3,0]),T(H(.4,.62,.66,.12),"#d7263d",[0,.92,0]),T(H(.5,.5,.52,.16,2),"#f2c9a0",[0,1.5,0]),T(H(.56,.2,.58,.09),"#b3001b",[0,1.76,0]),T(H(.3,.07,.5,.03),"#7d0013",[.36,1.68,0]),T(H(.03,.1,.08,.01),"#1c1c24",[.255,1.5,.12]),T(H(.03,.1,.08,.01),"#1c1c24",[.255,1.5,-.12])]);return i.rotateY(gt),i}function Nu(){return ut([T(H(.62,.5,.5,.08),"#c1121f"),T(H(.34,.3,.04,.02),ws,[0,.02,.26]),T(H(.64,.08,.52,.03),"#7d0013",[0,.24,0])])}function sx(){return ut([T(H(1.3,.14,.46,.06),"#22252e",[0,.3,0]),T(Pe(.3,.26,12),"#111318",[-.72,.3,0],[0,0,gt]),T(Pe(.3,.26,12),"#111318",[.72,.3,0],[0,0,gt]),T(Pe(.14,.28,10),"#cfd5e0",[-.72,.3,0],[0,0,gt]),T(Pe(.14,.28,10),"#cfd5e0",[.72,.3,0],[0,0,gt]),T(H(.42,.05,.1,.02),"#4de1ff",[-.3,.26,.24]),T(H(.42,.05,.1,.02),"#4de1ff",[.3,.26,.24]),T(H(.42,.05,.1,.02),"#4de1ff",[-.3,.26,-.24]),T(H(.42,.05,.1,.02),"#4de1ff",[.3,.26,-.24]),T(ye(.44,.03,.36),"#4a505c",[-.3,.385,0]),T(ye(.44,.03,.36),"#4a505c",[.3,.385,0]),T(H(.34,.1,.5,.05),yr,[-.72,.64,0]),T(H(.34,.1,.5,.05),yr,[.72,.64,0]),T(Pe(.33,.04,14),"#4de1ff",[-.87,.3,0],[0,0,gt]),T(Pe(.33,.04,14),"#4de1ff",[.87,.3,0],[0,0,gt]),T(Pe(.2,.05,10),"#111318",[-.88,.3,0],[0,0,gt]),T(Pe(.2,.05,10),"#111318",[.88,.3,0],[0,0,gt]),T(Pe(.1,.5,8),"#59616d",[0,.3,0],[gt,0,0])])}function ax(){return ut([T(Pe(.36,.2,14),"#111318",[0,.36,-.72],[0,0,gt]),T(Pe(.38,.24,14),"#111318",[0,.38,.7],[0,0,gt]),T(Pe(.15,.22,10),"#cfd5e0",[0,.36,-.72],[0,0,gt]),T(Pe(.15,.26,10),"#cfd5e0",[0,.38,.7],[0,0,gt]),T(H(.3,.42,1.3,.12),"#ff7b00",[0,.72,0]),T(H(.28,.16,.56,.06),"#1c1f27",[0,.98,.26]),T(H(.22,.2,.5,.06),"#ffffff",[0,.86,-.62],[.4,0,0]),T(H(.1,.5,.1,.03),"#3a3f4a",[0,.82,-.62],[.35,0,0]),T(H(.9,.07,.08,.03),"#3a3f4a",[0,1.12,-.5]),T(H(.12,.1,.12,.03),"#111318",[-.46,1.12,-.5]),T(H(.12,.1,.12,.03),"#111318",[.46,1.12,-.5]),T(H(.2,.12,.5,.05),"#ff7b00",[0,.84,.8],[-.3,0,0]),T(H(.2,.06,.62,.03),"#ff7b00",[0,.8,-.8],[.25,0,0]),T(ye(.36,.3,.04),"#ffffff",[0,1,-.76]),T(ye(.14,.18,.05),"#111318",[0,1,-.765]),T(H(.34,.3,.42,.05),"#59616d",[0,.5,.05]),T(Pe(.07,.9,8),"#cfd5e0",[.2,.56,.45],[gt,0,0]),T(Pe(.1,.24,8),"#3a3f4a",[.2,.58,.98],[gt,0,0]),T(ye(.07,.08,.72),"#3a3f4a",[-.15,.42,.42]),T(ye(.07,.08,.72),"#3a3f4a",[.15,.42,.42])])}function ox(){for(var i=[T(H(1.4,.46,2.7,.2,2),"#2f343c",[0,.5,0]),T(H(1.36,.1,2.5,.04),"#4a515c",[0,.74,0]),T(H(1.16,.4,1.25,.2,2),"#14161b",[0,.92,.18]),T(H(1.1,.08,1.05,.04),"#2a2e35",[0,1.12,.18]),T(H(.05,.03,1.05,.01),"#59616d",[0,.775,-.82]),T(H(1.42,.16,.2,.06),"#1b1e24",[0,.36,-1.3]),T(H(1.42,.16,.2,.06),"#1b1e24",[0,.36,1.3]),T(H(.34,.11,.07,.03),"#f4fbff",[-.44,.58,-1.34]),T(H(.34,.11,.07,.03),"#f4fbff",[.44,.58,-1.34]),T(H(.4,.1,.07,.03),"#ff2e43",[-.42,.6,1.34]),T(H(.4,.1,.07,.03),"#ff2e43",[.42,.6,1.34]),T(H(.1,.1,.16,.03),"#2f343c",[-.76,.84,-.3]),T(H(.1,.1,.16,.03),"#2f343c",[.76,.84,-.3]),T(H(.72,.14,.06,.03),"#0d0e12",[0,.5,-1.36]),T(ye(.76,.02,.07),"#aab2bd",[0,.585,-1.36]),T(ye(.03,.02,.9),"#59616d",[-.32,.775,-.82]),T(ye(.03,.02,.9),"#59616d",[.32,.775,-.82]),T(H(1.2,.05,.16,.02),"#1b1e24",[0,.8,1.24]),T(ye(.06,.1,1.9),"#1b1e24",[-.71,.3,0]),T(ye(.06,.1,1.9),"#1b1e24",[.71,.3,0]),T(Pe(.06,.12,8),"#aab2bd",[-.4,.28,1.4],[gt,0,0]),T(Pe(.06,.12,8),"#aab2bd",[.4,.28,1.4],[gt,0,0]),T(ye(1.18,.4,.05),"#2f343c",[0,.92,.2])],e=-1;e<=1;e+=2)for(var t=-1;t<=1;t+=2)i.push(T(Pe(.3,.26,14),"#15171c",[e*.64,.3,t*.86],[0,0,gt])),i.push(T(Pe(.17,.28,10),"#9aa3b0",[e*.64,.3,t*.86],[0,0,gt]));return ut(i)}function lx(){for(var i=[T(H(1.9,.8,3.8,.3,3),yr,[0,.74,0]),T(H(1.94,.17,3.4,.06),is,[0,.6,0]),T(H(1.86,1.3,2.35,.32,3),yr,[0,1.62,.68]),T(H(1.8,1,1.4,.34,3),yr,[0,1.46,-.9]),T(H(1.5,.62,.12,.05),Lo,[0,1.6,-1.585],[-.16,0,0]),T(H(.08,.5,.8,.04),Lo,[-.88,1.62,-.95]),T(H(.08,.5,.8,.04),Lo,[.88,1.62,-.95]),T(H(1.98,.28,.32,.1),bn,[0,.46,-1.86]),T(H(1.98,.28,.32,.1),bn,[0,.46,1.86]),T(H(.4,.22,.1,.05),"#fff6c9",[-.6,.9,-1.88]),T(H(.4,.22,.1,.05),"#fff6c9",[.6,.9,-1.88]),T(H(.56,.14,.08,.04),bn,[0,.9,-1.89]),T(H(.24,.42,.1,.05),"#ff8a1e",[-.74,1.12,1.87]),T(H(.24,.42,.1,.05),"#ff8a1e",[.74,1.12,1.87]),T(H(.56,.22,.05,.02),"#f4f6fa",[0,.82,1.9]),T(H(.16,.26,.12,.04),bn,[-1.03,1.52,-1.4]),T(H(.16,.26,.12,.04),bn,[1.03,1.52,-1.4]),T(H(1,.12,.56,.05),bn,[0,2.31,.55]),T(Pe(.07,.5,8),bn,[0,2.58,.55]),T(ye(1.84,.12,.06),is,[0,1.13,-1.61]),T(ye(.03,.1,2.2),is,[-.94,2.06,.7]),T(ye(.03,.1,2.2),is,[.94,2.06,.7]),T(ye(.03,1,.03),"#a3101c",[-.955,1.3,-.25]),T(ye(.03,1,.03),"#a3101c",[.955,1.3,-.25]),T(H(1.5,.05,1.9,.02),is,[0,2.285,.72]),T(ye(.03,1.1,.02),"#a3101c",[0,1.5,1.86])],e=-1;e<=1;e+=2)for(var t=-1;t<=1;t+=2)i.push(T(Pe(.44,.36,16),"#20222a",[e*.86,.44,t*1.15],[0,0,gt])),i.push(T(Pe(.24,.38,12),"#cfd5e0",[e*.86,.44,t*1.15],[0,0,gt])),i.push(T(Pe(.1,.4,8),yr,[e*.86,.44,t*1.15],[0,0,gt]));return ut(i)}function cx(){for(var i=[T(H(5.6,4.2,7.4,.2),"#b3001b",[0,2.1,0]),T(H(6,.4,7.8,.1),"#7d0013",[0,4.3,0]),T(H(.2,2.4,1.4,.04),"#3d6ea8",[-2.82,1.3,-1.6]),T(H(.2,2.2,1.2,.04),"#fff8e7",[-2.82,1.1,1.4])],e=0;e<6;e++)i.push(T(H(1.2,.14,1.2,.03),e%2?"#ffffff":"#d7263d",[-3.3,3,-3+e*1.2],[0,0,.5]));for(i.push(T(ye(.16,2.6,3.4),"#fff8e7",[-2.8,1.4,-1.6])),i.push(T(ye(.2,2.2,3),"#3d6ea8",[-2.82,1.4,-1.6])),i.push(T(ye(.22,2.2,.08),"#fff8e7",[-2.83,1.4,-1.6])),i.push(T(ye(.22,.5,1),"#3d6ea8",[-2.83,1.75,1.4])),i.push(T(An(.08),"#ffd23f",[-2.95,1.05,1])),e=-1;e<=1;e+=2)i.push(T(Pe(.26,.42,8),"#c58d4e",[-3.15,.21,1.4+e*1])),i.push(T(An(.42),"#35b84e",[-3.15,.78,1.4+e*1]));return i.push(T(H(.8,1.3,.8,.06),"#fff8e7",[1.8,5.1,-2.6])),i.push(T(ye(.9,.16,.9),"#d7263d",[1.8,5.5,-2.6])),i.push(T(H(1.1,.5,.9,.06),"#d9dde4",[1.6,4.75,2.6])),ut(i)}function Rs(i,e){var t=document.createElement("canvas");return t.width=i,t.height=e,t}function Cs(i){var e=new J_(i);return e.colorSpace=_n,e.anisotropy=4,e}function Rr(i,e,t,n,r,s){i.beginPath(),i.roundRect?i.roundRect(e,t,n,r,s):i.rect(e,t,n,r)}function ac(i,e,t,n){i.fillStyle="#ffc933",i.beginPath(),i.moveTo(e-n,t-n*.8),i.lineTo(e+n,t-n*.8),i.lineTo(e,t+n*1.2),i.closePath(),i.fill(),i.fillStyle="#d08a35",Rr(i,e-n*1.15,t-n*1.05,n*2.3,n*.42,n*.2),i.fill(),i.fillStyle="#d7263d",[[-.35,-.3,.2],[.35,-.35,.18],[0,.3,.16]].forEach(function(r){i.beginPath(),i.arc(e+r[0]*n,t+r[1]*n,r[2]*n,0,7),i.fill()})}function ux(){var i=Rs(256,256),e=i.getContext("2d");return e.fillStyle="#fff1d0",e.beginPath(),e.arc(128,128,122,0,7),e.fill(),e.lineWidth=10,e.strokeStyle="#b3001b",e.beginPath(),e.arc(128,128,112,0,7),e.stroke(),ac(e,128,138,44),e.fillStyle="#b3001b",e.textAlign="center",e.textBaseline="middle",e.font="900 40px system-ui, Arial, sans-serif",e.fillText("PAYTON",128,62),e.font="900 30px system-ui, Arial, sans-serif",e.fillText("PIZZA",128,216),Cs(i)}function Ll(){var i=Rs(128,128),e=i.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);return t.addColorStop(0,"rgba(255,220,120,0.95)"),t.addColorStop(.4,"rgba(255,170,40,0.4)"),t.addColorStop(1,"rgba(255,150,20,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Cs(i)}function fx(i){var e=Rs(128,128),t=e.getContext("2d");return t.lineCap="round",t.lineJoin="round",i==="order"?(t.fillStyle="rgba(0,0,0,0.25)",Rr(t,14,18,104,100,26),t.fill(),t.fillStyle="#ffffff",Rr(t,10,10,104,100,26),t.fill(),t.strokeStyle="#ffd23f",t.lineWidth=6,Rr(t,13,13,98,94,23),t.stroke(),ac(t,62,62,30)):(t.fillStyle=i==="done"?"#1f9d55":"#c1121f",t.beginPath(),t.arc(64,64,50,0,7),t.fill(),t.strokeStyle="#fff",t.lineWidth=14,t.beginPath(),i==="done"?(t.moveTo(40,64),t.lineTo(58,82),t.lineTo(90,46)):(t.moveTo(44,44),t.lineTo(84,84),t.moveTo(84,44),t.lineTo(44,84)),t.stroke()),Cs(e)}function hx(){for(var i=Rs(352,32),e=i.getContext("2d"),t=0;t<22;t++)for(var n=0;n<2;n++)e.fillStyle=(t+n)%2?"#111":"#fff",e.fillRect(t*16,n*16,16,16);var r=Cs(i);return r.magFilter=rn,r}function dx(){var i=Rs(512,256),e=i.getContext("2d");return e.fillStyle="#fff8e7",Rr(e,0,0,512,256,28),e.fill(),e.strokeStyle="#b3001b",e.lineWidth=12,Rr(e,8,8,496,240,22),e.stroke(),ac(e,86,132,52),e.fillStyle="#b3001b",e.textAlign="center",e.textBaseline="middle",e.font="900 86px system-ui, Arial, sans-serif",e.fillText("PAYTON",320,88),e.font="900 86px system-ui, Arial, sans-serif",e.fillText("PIZZA",320,178),Cs(i)}var xn=function(i){return(i-pe/2)/un},Mn=function(i){return-i/un},Ca={suburb:{haze:"#cdeaff",grass:"#5fd14e",road:"#565b6e",walk:"#e3ddcb",dash:"#f5d547",under:"#9fd68a",ocean:!1,walls:["#f4ead2","#e6f0f7","#fbe3c7","#e4efd8","#f7dfe4","#fff6e6"],dull:["#cfcabb","#c9cfd3","#d3c8be"],porch:"#c58d4e"},beach:{haze:"#bfeeff",grass:"#f1dea6",road:"#6c7181",walk:"#c9a36b",dash:"#ffffff",under:"#ffe9b0",ocean:!0,walls:["#ffd9c2","#c9f0ea","#fff3b8","#d7e3ff","#ffd1e1","#ffffff"],dull:["#e3ddd0","#d6dde0","#e0d6cc"],porch:"#c9a36b"}},Nt=Ca.suburb,Dl="",Fu={suburb:"#f6b98e",beach:"#ffb98f"},ih=null,Ou=[],Un=null,rs=57*Math.PI/180,Il=60,px=11.8,mx=-.6,qt=null,wt,Fn,Xn,jt,gs,_r,Sr,Tn,xa,Ul,Nl,ls,Ut={D:38,h:33,g:18,foot:1,far:60,ahead:55},rh=null,Pa=[],cs=new Map,Do=0,Bu={},ua=[],La={},Nn=null,Fl=[],zi,sh=[],Ol=null,us=null,fa=new I,Or=new _t;function it(i,e){return Bu[i]||(Bu[i]=e())}function ct(i,e,t){var n=new bt(i,e||Xn);return n.castShadow=t!==!1,n}function gx(){try{qt=new q_({canvas:qu,antialias:!0,powerPreference:"high-performance"})}catch{return qt=null,f.webgl=!1,!1}f.webgl=!0;var i=f.opt.shadows!==0;qt.shadowMap.enabled=i,qt.shadowMap.type=uf,wt=new kf,wt.background=new Qe(Nt.haze),wt.fog=new Ql(Nt.haze,40,60),Fn=new vn(Il,1,1,300);var e=new Vf(new Uint8Array([160,218,255]),3,1,Ba);e.minFilter=e.magFilter=rn,e.needsUpdate=!0,Xn=new Lu({vertexColors:!0,gradientMap:e}),gs=new jf("#ffffff",Nt.under,1.5),wt.add(gs),jt=new Qf("#fff3d0",2.9),jt.castShadow=i,jt.shadow.mapSize.set(1024,2048),Object.assign(jt.shadow.camera,{left:-22,right:22,top:30,bottom:-30,near:1,far:90}),jt.shadow.bias=-8e-4,jt.shadow.normalBias=.05,wt.add(jt,jt.target),_r=new Wt,wt.add(_r);var t=150,n=function(g,p,A,E){var x=new Bn(g,t);x.rotateX(-Math.PI/2);var U=new bt(x,p);return U.position.set(A,E,0),U.receiveShadow=!0,_r.add(U),U},r=function(g){return new Lu({color:g,gradientMap:e})};xa=r(Nt.grass),Ul=r(Nt.road),Nl=r(Nt.walk);var s=(Bl-Uo)/un,a=(Uo-Ma)/un,o=(zl-Ma)/un/2;n(80,xa,-45.5,0),n(80,xa,o+40,0),n(s,Ul,0,0);for(var l=-1;l<=1;l+=2){var c=new bt(H(a,.16,t,.04),Nl);c.position.set(l*(s/2+a/2),.08,0),c.receiveShadow=!0,_r.add(c)}ls=new Wt,ls.add(n(70,new Xt({color:"#3fb8e6"}),-51.5,.03),n(.7,new Xt({color:"#ffffff"}),-16.4,.04),n(2.2,new Xt({color:"#8fdcf5"}),-17.8,.035)),ls.visible=!1,_r.add(ls);var u=new Bn(.2,1.7);u.rotateX(-Math.PI/2),Sr=new wl(u,new Xt({color:"#f5d547"}),40);for(var h=0;h<40;h++)Or.makeTranslation(0,.02,8-h*3.5),Sr.setMatrixAt(h,Or);Sr.frustumCulled=!1,wt.add(Sr),Tn=new Wt,wt.add(Tn),["order","done","missed"].forEach(function(g){La[g]=new wa({map:fx(g),depthTest:!1,fog:!1})});var d=it("pie",th);for(h=0;h<14;h++){var m=ct(d);m.visible=!1,wt.add(m),Fl.push(m)}for(zi=new wl(it("splat",Nv),Xn,40),zi.count=0,zi.frustumCulled=!1,wt.add(zi),h=0;h<2;h++){var _=new bt(new Yi(.46,.68,28),new Xt({color:"#fff",transparent:!0,opacity:.4,depthTest:!1,fog:!1}));_.rotation.x=-Math.PI/2,_.renderOrder=5,_.visible=!1,wt.add(_),sh.push(_)}ih=new wa({map:Ll(),color:"#ffe2a0",blending:vs,depthWrite:!1,transparent:!0,fog:!1,opacity:.8});var v=new Bn(1,1);return v.rotateX(-Math.PI/2),Un=new bt(v,new Xt({map:Ll(),blending:vs,depthWrite:!1,transparent:!0,fog:!1})),Un.visible=!1,Un.renderOrder=3,wt.add(Un),xx(),Mx(),f.setEffects=zu,zu(!!be.low),He.onResize=Da,Da(),f.project=vx,!0}function zu(i){f.low=!!i;var e=!f.low&&f.opt.shadows!==0;qt.shadowMap.enabled=e,jt.castShadow=e,wt.traverse(function(t){t.material&&(t.material.needsUpdate=!0)}),Dl="",Da()}function _x(){var i=[],e=new kf,t=Nn.userData,n;e.background=new Qe("#44464f"),e.add(new jf("#ffffff","#8a8f9c",1.7));var r=new Qf("#fff3d0",2.6);r.position.set(-3,6,-2),e.add(r);var s=new vn(32,112/122,.1,60);for(qt.setPixelRatio(1),qt.setSize(224,244,!1),n=0;n<4;n++){var a=t.rides[n],o=a.visible,l=[6.8,7.4,6.6,9.4][n],c=[1.4,1.5,.6,1.6][n];e.add(a),a.visible=!0,a.rotation.set(0,0,0),a.position.set(0,0,0),s.position.set(-l*.6,l*.5+c,-l*.66),s.lookAt(0,c,0),qt.render(e,s);var u=document.createElement("canvas");u.width=224,u.height=244,u.getContext("2d").drawImage(qu,0,0),i.push(u),Nn.add(a),a.visible=o}Da(),qt.render(wt,Fn),f.ridePics=i}function Da(){if(qt){qt.setPixelRatio(f.low?Math.min(He.dpr,1.25):He.dpr),qt.setSize(He.cw,He.ch,!1);var i=He.cw/He.ch,e=Il/2*Math.PI/180;Fn.aspect=i,Fn.fov=Il,Fn.updateProjectionMatrix(),Ut.D=Math.min(Math.max(px/(Math.tan(e)*i),31),50),Ut.h=Ut.D*Math.sin(rs),Ut.g=Ut.D*Math.cos(rs),Ut.foot=mx-Ut.h/Math.tan(rs+e),Ut.ahead=Ut.foot+Ut.h/Math.tan(rs-e),Ut.far=Ut.h/Math.sin(rs-e),wt.fog.near=Ut.far*.76,wt.fog.far=Ut.far*1.04}}function vx(i,e,t){return fa.set(xn(i),(t||0)/un,Mn(e)).project(Fn),{x:((fa.x*.5+.5)*He.cw-He.ox)/He.s,y:(-fa.y*.5+.5)*He.ch/He.s,vis:fa.z<1}}function xx(){Nn=new Wt,wt.add(Nn);var i="#f2c9a0",e=[],t,n=function(z,W){var Z=new Wt,Y=ct(it("payton",rx));return Z.add(Y),Z.position.set(0,z,W),Z},r=function(z,W){var Z=ct(it("arm",function(){return Gv(i)}),Xn,!1);return Z.position.set(0,z,W),Z.visible=!1,Z},s=new Wt;s.add(ct(it("hover",sx))),s.add(n(.37,0));var a=ct(it("bag",Nu));a.position.set(0,1.2,.5),s.add(a),s.userData.arm=r(1.42,0),s.add(s.userData.arm);var o=new Wt;o.add(ct(it("bike",ax)));var l=n(.55,.05);o.add(l);var c=ct(it("bag",Nu));c.position.set(0,1.25,.72),o.add(c),o.userData.arm=r(1.6,.05),o.add(o.userData.arm);var u=new Wt;u.add(ct(it("bimmer",ox))),u.userData.arm=r(.95,.1),u.add(u.userData.arm);var h=new Wt,d=ct(it("van",lx));h.add(d);for(var m=new Xt({map:ux(),transparent:!0}),_=-1;_<=1;_+=2){var v=new bt(new Bn(1.12,1.12),m);v.position.set(_*.94,1.66,.72),v.rotation.y=_*Math.PI/2,h.add(v)}var g=new bt(new Bn(1,1),m);g.position.set(0,1.68,1.865),h.add(g);var p=new Wt;p.position.set(0,3.6,.55);var A=new Xt({vertexColors:!0}),E=new bt(it("slice",Iv),A);E.scale.set(1.15,1.15,1.7),E.castShadow=!0;var x=new wl(new ic(.06,8,6),new Xt,15),U=[[-.62,.68],[.62,.68],[0,-.74]];for(t=0;t<15;t++){var C=Math.floor(t/5),P=t%5/5,D=U[C],b=U[(C+1)%3];Or.makeTranslation((D[0]+(b[0]-D[0])*P)*1.15,(D[1]+(b[1]-D[1])*P)*1.15,0),x.setMatrixAt(t,Or),x.setColorAt(t,new Qe("#fff"))}var y=new Al(new wa({map:Ll(),blending:vs,depthWrite:!1,transparent:!0,fog:!1}));for(y.scale.setScalar(3.6),p.add(E,x,y),h.add(p),h.userData={arm:r(1.5,-.95),sign:p,signMat:A,bulbs:x,halo:y},h.add(h.userData.arm),s.scale.setScalar(1.35),o.scale.setScalar(1.3),u.scale.setScalar(1.12),h.scale.setScalar(.9),e=[s,o,u,h],t=0;t<4;t++)e[t].visible=!1,Nn.add(e[t]);var L=new bt(new Yi(.92,1,40),new Xt({color:"#5ad1ff",transparent:!0,opacity:.65,depthWrite:!1,side:kn}));L.rotation.x=-Math.PI/2,L.position.y=.2,Nn.add(L);var k=new bt(new Yi(.86,1,36),new Xt({color:"#ffffff",transparent:!0,opacity:.4,depthWrite:!1}));k.rotation.x=-Math.PI/2,k.position.y=.05,Nn.add(k),Nn.userData={rides:e,ring:L,spot:k,px:0,lean:0,bulbT:0,bulbStep:0}}function Mx(){var i=(Bl-Uo)/un,e=new Bn(i,i*32/352*2.2);e.rotateX(-Math.PI/2),Ol=new bt(e,new Xt({map:hx()})),wt.add(Ol),us=new Wt;var t=ct(it("shop",cx));t.receiveShadow=!0,us.add(t);var n=new Bn(5.2,2.6);n.rotateX(-Math.PI/2);var r=new bt(n,new Xt({map:dx()}));r.position.set(0,4.56,0),us.add(r),wt.add(us)}function yx(){var i=f.hood?f.hood.key:"suburb",e=!!f.dusk,t=i+(e?"|dusk":"")+(f.low?"|low":"");if(t!==Dl){Dl=t,Nt=Ca[i]||Ca.suburb;var n=e?Fu[i]||Fu.suburb:Nt.haze;wt.background.set(n),wt.fog.color.set(n),gs.groundColor.set(Nt.under),gs.color.set(e?"#ffd2b8":"#ffffff"),gs.intensity=e?1.05:1.5,jt.color.set(e?"#ff9a5c":"#fff3d0"),jt.intensity=e?2.3:2.9,xa.color.set(Nt.grass),Ul.color.set(Nt.road),Nl.color.set(Nt.walk),Sr.material.color.set(Nt.dash),ls.visible=Nt.ocean}}function Sx(){var i;for(rh=f.lots,yx();Tn.children.length;)Tn.remove(Tn.children[0]);for(i=0;i<ua.length;i++)ua[i].dispose();ua=[],Pa=[],cs.clear();var e=Nt===Ca.beach,t=e?"beach":"suburb",n=!!f.dusk,r={};for(Ou=[],i=0;i<f.lots.length;i++){var s=f.lots[i],a=s.side<0,o={l:s,house:null,yard:null,person:null,arms:null,box:null,marker:null,wins:[]},l=i>>1,c=function(p,A){return Math.floor(s.ph*p)%A},u={slot:s.slot,cust:s.cust,variant:c(5,3),roof:s.roof[0],roof2:s.roof[1],wall:s.cust?Nt.walls[c(7,Nt.walls.length)]:Nt.dull[c(7,Nt.dull.length)],door:s.cust?e?"#1f9bb3":"#c2262c":"#5a4634",porch:s.cust?Nt.porch:"#9d9d97",mat:s.cust?"#ffd23f":"#8b8b86"},h={hood:t,cust:s.cust,tree:e?c(3.7,3)?1:0:c(3.7,4),fence:!e&&c(11,3)===0,lamp:(l+(a?0:2))%4===0,prop:c(13,5)};h.prop>3&&(h.prop=0);var d=[u.roof,u.cust,u.slot,u.variant,u.wall].join("|"),m=r[d];if(m||(Fv(n?s.cust?"#ffe08a":"#4f5d7a":null),m=r[d]=e?Bv(u):Ov(u),ua.push(m)),o.house=ct(m),o.house.receiveShadow=!0,o.house.position.set(xn(a?ri:si),0,Mn(s.y0+105)),o.yard=ct(it(["y",t,h.cust&&!h.tree?1:0,h.tree,h.fence,h.lamp,h.prop].join("|"),function(){return zv(h)})),o.yard.position.copy(o.house.position),a||(o.house.scale.x=-1,o.yard.scale.x=-1),Tn.add(o.house,o.yard),n&&!f.low&&h.lamp){var _=new Al(ih);_.scale.setScalar(3.4),_.position.set(o.house.position.x+(a?2.2:-2.2),3.3,o.house.position.z-5),Tn.add(_),Ou.push({s:_,y0:s.y0})}if(s.cust){var v=s.c,g="p|"+v.shirt+v.skin+v.hair;o.person=new Wt,o.person.add(ct(it(g,Ex(v)))),o.arms=ct(it("a|"+v.skin,bx(v.skin)),Xn,!1),o.arms.position.set(0,1.1,0),o.person.add(o.arms),o.box=ct(it("pie",th),Xn,!1),o.box.position.set(.78,1.12,0),o.box.visible=!1,o.person.add(o.box),o.person.scale.setScalar(1.25),Tn.add(o.person),o.marker=new Al(La.order),o.marker.scale.setScalar(1.9),o.marker.renderOrder=4,Tn.add(o.marker)}Pa.push(o)}Ol.position.set(0,.03,Mn(f.finishY)),us.position.set(xn(416),0,Mn(f.finishY+115))}function Ex(i){return function(){return sc(i.shirt,i.skin,i.hair)}}function bx(i){return function(){return kv(i)}}function Tx(i){for(var e=f.cam-340,t=f.cam+Ut.ahead*un+140,n=0;n<Pa.length;n++){var r=Pa[n],s=r.l,a=s.y0>e&&s.y0<t;r.house.visible=a,r.yard.visible=a;for(var o=0;o<s.wins.length;o++){var l=s.wins[o];if(l.broken&&!r.wins[o]){var c=ct(it("broken",Hv),Xn,!1);c.position.set(xn(s.side<0?ri:si)-s.side*.08,1.75,Mn(l.y)),Tn.add(c),r.wins[o]=c}r.wins[o]&&(r.wins[o].visible=a)}if(r.person){var u=s.c,h=u.gone&&u.goneT>.45&&!s.delivered;if(r.person.visible=a&&!h,r.marker.visible=a,!!a){var d=s.side<0?ri:si,m=u.happy>0?Math.abs(Math.sin(u.happy*12))*.45:0,_=Math.abs(u.x-d)<20?.22:0;r.person.position.set(xn(u.x),_+m,Mn(u.y));var v=s.side<0?0:Math.PI;s.missed?(r.person.rotation.y=v+Math.PI,r.arms.rotation.z=-1.35,r.box.visible=!1):s.delivered?(r.person.rotation.y=v,r.arms.rotation.z=.05,r.box.visible=!0):u.gone?(r.person.rotation.y=v+Math.PI,r.arms.rotation.z=-1.35,r.box.visible=!1):u.type==="quit"?(r.person.rotation.y=v+Math.sin(i*6+u.ph)*.25,r.arms.rotation.z=-.9,r.box.visible=!1):(r.person.rotation.y=v,r.arms.rotation.z=.45+Math.sin(i*9+u.ph)*.35,r.box.visible=!1);var g=s.delivered?"done":s.missed?"missed":"order";r.marker.material!==La[g]&&(r.marker.material=La[g]),r.marker.position.set(xn(s.side<0?ri:si)+s.side*1.6,5.4+(g==="order"?Math.sin(i*4+s.ph)*.2:0),Mn(s.doorY)),r.marker.scale.setScalar(g==="order"?1.9:1.5)}}}}function Ax(i){var e=i.type,t=new Wt,n;if(e==="can")t.add(ct(it("can",Wv)));else if(e==="hydrant")t.add(ct(it("hydrant",Xv)));else if(e==="cone")t.add(ct(it("cone",Yv)));else if(e==="pothole")t.add(ct(it("pothole",qv),Xn,!1));else if(e==="puddle")t.add(ct(it("puddle",$v),Xn,!1));else if(e==="barrier")t.add(ct(it("barrier",Qv)));else if(e==="sand")t.add(ct(it("sand",ex),Xn,!1));else if(e==="surfer")t.add(ct(it("surfer|"+i.col+i.board,function(){return tx(i.col,i.board)}))),t.rotation.y=i.side>0?Math.PI:0;else if(e==="cart")n=ct(it("cart|"+i.col,function(){return nx(i.col)})),n.scale.setScalar(.92),t.add(n);else if(e==="ball")t.add(ct(it("ball|"+i.col,function(){return jv(i.col)})));else if(e==="life"){n=ct(it("heart",Jv)),n.scale.setScalar(1.25),n.position.y=.9,t.add(n),t.userData.spin=n;var r=new bt(it("pickupRing",function(){return new Yi(.75,.95,24)}),Dx);r.rotation.x=-Math.PI/2,r.position.y=.04,t.add(r),t.userData.ring=r}else if(e==="dog")t.add(ct(it("dog|"+i.col,function(){return Zv(i.col)})));else if(e==="carD"||e==="carU"||e==="dcar"){var s=i.col.charCodeAt(2)%3===0;n=ct(it((s?"truck|":"car|")+i.col,function(){return s?ix(i.col):Vv(i.col)})),n.scale.setScalar(.74),t.add(n),t.rotation.y=e==="carD"?Math.PI:e==="dcar"?i.side<0?Math.PI/2:-Math.PI/2:0}else if(e==="skater")t.add(ct(it("board",Kv))),n=ct(it("p|"+i.col+"#f2c9a0#3b2a1a",function(){return sc(i.col,"#f2c9a0","#3b2a1a")})),n.rotation.y=-Math.PI/2,n.position.y=.17,n.scale.setScalar(.95),t.add(n);else if(e==="pickup"){t.add(ct(it("pickup",Uv)));var a=new bt(it("pickupRing",function(){return new Yi(.75,.95,24)}),Lx);a.rotation.x=-Math.PI/2,a.position.y=.04,t.add(a),t.userData.ring=a}return Tn.add(t),{g:t,stamp:0}}function wx(){var i=f.cam-120,e=f.cam+Ut.ahead*un+160,t;for(Do++,t=0;t<f.obs.length;t++){var n=f.obs[t];if(!(n.y<i||n.y>e)){var r=cs.get(n);r||(r=Ax(n),cs.set(n,r)),r.stamp=Do;var s=r.g,a=0;if(n.out)a=.4+Math.sin(Math.min(1,n.t*1.6)*Math.PI)*1.6,s.rotation.x=n.t*9,s.rotation.z=n.t*6;else if(n.type==="life")s.userData.spin.rotation.y=n.t*2.4,s.userData.spin.position.y=.9+Math.sin(n.t*4)*.15,s.userData.ring.scale.setScalar(1+Math.sin(n.t*5)*.1);else if(n.type==="ball")a=n.st===1?Math.abs(Math.sin(n.t*7))*.5:0,s.rotation.z=-n.side*n.t*(n.st===1?5:0);else if(n.type==="pickup")a=.15+Math.abs(Math.sin(n.t*2.5))*.25,s.rotation.y=n.t*1.5,s.userData.ring&&(s.userData.ring.position.y=.04-a,s.userData.ring.scale.setScalar(1+Math.sin(n.t*5)*.08));else if(n.type==="dog"){var o=function(c,u){return Math.atan2(-c,u)},l=n.side<0?120:360;n.st===1||n.st===2?s.rotation.y=o(Ae.x-n.x,f.cam+pt-Ae.sy-n.y+(n.st===2?60:0)):n.st===3?s.rotation.y=o(n.gx-n.x,n.gy-n.y):n.st===4?s.rotation.y+=Math.sin(n.t*16)*.04:n.st===5&&Math.abs(l-n.x)>2?s.rotation.y=o(l-n.x,0):s.rotation.y=n.side<0?-Math.PI/2:Math.PI/2,a=n.st===2||n.st===3?Math.abs(Math.sin(n.t*20))*.12:n.st===1?Math.abs(Math.sin(n.t*9))*.06:0}else n.type==="skater"?s.rotation.y=Math.PI+Math.cos(n.t*3)*.2:n.type==="surfer"?a=n.st===1?Math.abs(Math.sin(n.t*9))*.07:0:n.type==="cart"&&(s.rotation.y=-Math.cos(n.t*.9+n.ph)*.18);s.position.set(xn(n.x),a,Mn(n.y))}}cs.forEach(function(c,u){c.stamp!==Do&&(Tn.remove(c.g),cs.delete(u))})}function Rx(i,e){var t=Nn.userData,n=(f.state==="play"||f.state==="pause")&&!(f.inv>0&&Math.floor(f.inv*14)%2===0);if(Nn.visible=n,!n){t.px=Ae.x,Un.visible=!1;return}var r=f.cam+pt-Ae.sy,s=e>0?(Ae.x-t.px)/e:0;t.px=Ae.x,t.lean+=(Math.max(-.3,Math.min(.3,-s*.0016))-t.lean)*Math.min(1,e*10),Nn.position.set(xn(Ae.x),0,Mn(r));for(var a=0;a<4;a++)t.rides[a].visible=a===f.ride;var o=t.rides[f.ride];o.rotation.y=t.lean,o.rotation.z=f.ride<2?t.lean*.9:t.lean*.2,o.position.y=f.ride===0?.06+Math.sin(i*7)*.03:Math.abs(Math.sin(i*13))*.02;var l=o.userData.arm;if(l.visible=f.throwAnim>0,l.visible&&(l.scale.x=f.throwDir),f.ride===3){var c=o.userData,u=.88+.12*Math.sin(i*5);if(c.signMat.color.setScalar(u),c.halo.material.opacity=.45*u,c.sign.rotation.z=-t.lean*.5,t.bulbT+=e,t.bulbT>.11){t.bulbT=0,t.bulbStep++;for(var h=0;h<15;h++)c.bulbs.setColorAt(h,(h+t.bulbStep)%3===0?Cx:Px);c.bulbs.instanceColor.needsUpdate=!0}}if(Un.visible=n&&!!f.dusk&&!f.low,Un.visible){var d=f.ride===3;Un.material.color.set(d?"#ff9a3c":"#fff1c4"),Un.material.opacity=d?.5+.08*Math.sin(i*5):.38,Un.scale.set(d?9:4.2,1,d?11:7.5),Un.position.set(xn(Ae.x),.06,Mn(r)-(d?1.5:4.2))}t.spot.visible=f.shieldLeft<=0&&f.ride<2,t.spot.visible&&t.spot.scale.setScalar(1.25),t.ring.visible=f.shieldLeft>0,t.ring.visible&&t.ring.scale.set(f.V.w/un*.5+.55,f.V.h/un*.5+.55,1)}var Cx=new Qe("#fffbe0"),Px=new Qe("#ff8a1e"),Lx=new Xt({color:"#ffd23f",transparent:!0,opacity:.7,depthWrite:!1}),Dx=new Xt({color:"#ff6b7d",transparent:!0,opacity:.8,depthWrite:!1}),Ix={hand:["#ffd23f",.95,1.25],dog:["#ff9f1c",.95,1.2],door:["#7dff8a",.9,1.1],window:["#ff5964",.75,1],wall:["#ffffff",.32,.9]};function Ux(i){var e,t=f.state==="play"||f.state==="pause";for(e=0;e<Fl.length;e++){var n=t?f.pies[e]:null,r=Fl[e];if(r.visible=!!n,!!n){var s=Math.min(1,n.d/185);r.position.set(xn(n.x),1.15+Math.sin(s*Math.PI)*.7-s*.5,Mn(n.y)),r.rotation.y=n.rot}}var a=Math.min(f.decals.length,40);for(e=0;e<a;e++){var o=f.decals[f.decals.length-a+e];Or.makeTranslation(xn(o.x),Math.abs(xn(o.x))>Bl/un-pe/2/un?.18:.02,Mn(o.y)),zi.setMatrixAt(e,Or)}for(zi.count=a,zi.instanceMatrix.needsUpdate=!0,e=0;e<2;e++){var l=sh[e],c=e?1:-1;if(f.state!=="play"||f.pizzas<=0){l.visible=!1;continue}var u=of(c);if(u.hit==="far"){l.visible=!1;continue}var h=Ix[u.hit],d=u.hit==="hand"||u.hit==="door"||u.hit==="dog"?1+Math.sin(i*16)*.1:1;l.visible=!0,l.position.set(xn(u.x)-c*.75,.35,Mn(u.y)),l.material.color.set(h[0]),l.material.opacity=h[1],l.scale.setScalar(h[2]*d)}}function Nx(i){var e=jt.shadow.camera,t=(e.top-e.bottom)/jt.shadow.mapSize.y,n=t/.905,r=Math.round((i-Ut.ahead/2+3)/n)*n;jt.position.set(0,34,r+16),jt.target.position.set(0,0,r),jt.target.updateMatrixWorld()}var Hu=0;function Fx(){if(qt){if(f.state==="garage"){f.ridePics||_x();return}var i=f.tGame,e=Math.max(0,Math.min(.1,i-Hu));Hu=i,f.lots!==rh&&Sx(),Tx(i),wx(),Rx(i,e),Ux(i);var t=-(f.cam/un+Ut.foot),n=f.shake>0?f.shake*2:0;Fn.position.set(_c(-1,1)*.22*n,Ut.h,t+_c(-1,1)*.22*n),Fn.lookAt(Fn.position.x,0,Fn.position.z-Ut.g),_r.position.z=t-55,Sr.position.z=-Math.floor((f.cam-160)/70)*3.5,Nx(t),qt.render(wt,Fn)}}function ah(){return qt?{calls:qt.info.render.calls,tris:qt.info.render.triangles}:{calls:0,tris:0}}const Ox=16,Bx=450;function zx(i,e,t){return{sx:i,sy:e,lx:i,ly:e,t0:t,steering:!1}}function Hx(i,e,t){var n={dx:0,dy:0};return i.steering?(n.dx=e-i.lx,n.dy=t-i.ly):Math.hypot(e-i.sx,t-i.sy)>Ox&&(i.steering=!0),i.lx=e,i.ly=t,n}function kx(i,e){return!i.steering&&e-i.t0<=Bx}function Gx(i){return Ku(i.clientX,i.clientY)}function oh(i){return i<He.cw/2?-1:1}function Vx(i){for(var e=f.buttons.length-1;e>=0;e--){var t=f.buttons[e];if(i.x>=t.x&&i.x<=t.x+t.w&&i.y>=t.y&&i.y<=t.y+t.h)return t.fn&&t.fn(),!0}return!1}function lh(){be.mute=!be.mute,li(),be.mute||et("ui")}var Es=null,Hi=null;cn.addEventListener("pointerdown",function(i){i.preventDefault(),ju();try{cn.focus()}catch{}i.pointerType==="touch"&&(f.isTouch=!0);var e=Gx(i);if(f.state!=="play"){Vx(e);return}if(e.y-f.hudTop<42&&e.x>pe-78){e.x>pe-40?lh():f.state="pause";return}if(Es!==null){ki(oh(i.clientX));return}Es=i.pointerId,Hi=zx(i.clientX,i.clientY,performance.now());try{cn.setPointerCapture(i.pointerId)}catch{}});cn.addEventListener("pointermove",function(i){if(!(i.pointerId!==Es||!Hi||f.state!=="play")){i.preventDefault();var e=Hx(Hi,i.clientX,i.clientY);Ae.tx+=e.dx/He.s*1.35,Ae.ty+=e.dy/He.s*1.15}});function ch(i){i.pointerId===Es&&(Hi&&f.state==="play"&&i.type==="pointerup"&&kx(Hi,performance.now())&&ki(oh(Hi.sx)),Es=null,Hi=null)}cn.addEventListener("pointerup",ch);cn.addEventListener("pointercancel",ch);cn.addEventListener("contextmenu",function(i){i.preventDefault()});window.addEventListener("keydown",function(i){var e=i.code;if((e.indexOf("Arrow")===0||e==="Space")&&i.preventDefault(),ju(),!i.repeat){if(f.keys[e]=!0,e==="KeyM"){lh();return}if(f.state==="play"){e==="KeyZ"||e==="KeyA"||e==="KeyQ"?ki(-1):e==="KeyX"||e==="KeyD"||e==="KeyE"?ki(1):e==="Space"?Ah():e==="KeyP"||e==="Escape"?f.state="pause":e==="KeyF"&&(f.opt.fps=!f.opt.fps);return}if(f.state==="pause"&&(e==="KeyP"||e==="Escape"||e==="Space")){f.state="play";return}for(var t=e==="Space"||e==="NumpadEnter"?"Enter":e,n=0;n<f.buttons.length;n++)if(f.buttons[n].key===t&&f.buttons[n].fn){f.buttons[n].fn();return}}});window.addEventListener("keyup",function(i){f.keys[i.code]=!1});window.addEventListener("blur",function(){f.keys={},f.state==="play"&&(f.state="pause")});document.addEventListener("visibilitychange",function(){document.hidden&&f.state==="play"&&(f.state="pause")});(function(){var i=new URLSearchParams(location.search),e=function(t){var n=parseInt(i.get(t),10);return isFinite(n)?n:null};e("seed")!=null&&(f.opt.seed=e("seed")),e("day")!=null&&(f.opt.day=Math.max(1,e("day"))),i.get("bonus")==="1"&&(f.opt.bonus=!0,f.opt.day==null&&(f.opt.day=7)),e("ride")!=null&&(f.opt.ride=Math.max(0,Math.min(3,e("ride")))),i.get("fps")==="1"&&(f.opt.fps=!0),i.get("shadows")==="0"&&(f.opt.shadows=0)})();f.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0;window.addEventListener("resize",Zu);Zu();yh();gx();var ku=0,gr=0,$t={t:0,n:0,total:0,frames:0,low:1/0,warm:0};function Wx(i){if($t.warm+=i,!($t.warm<3)&&($t.t+=i,$t.n++,$t.total+=i,$t.frames++,$t.t>=1)){var e=$t.n/$t.t,t=ah();$t.low=Math.min($t.low,e),$t.t=0,$t.n=0,f.fps={now:Math.round(e),avg:Math.round($t.frames/$t.total),low:Math.round($t.low),calls:t.calls,tris:Math.round(t.tris/1e3)}}}function uh(i){var e=(i-ku)/1e3||0;ku=i,e>.25&&(e=.25),document.hidden||Wx(e),gr+=e;try{var t=0;if(Math.abs(gr-Yr)<.004)Sc(Yr),gr=0,t=1;else for(;gr>=Yr&&t<5;)Sc(Yr),gr-=Yr,t++;t===5&&(gr=0),Fx(),Yh()}catch(n){window.console&&console.error(n)}requestAnimationFrame(uh)}Na();window.__pp={get state(){return f.state},get score(){return f.score},get day(){return f.day},get lives(){return f.lives},get step(){return f.step},get webgl(){return!!f.webgl},get fps(){return f.fps},get draws(){return ah().calls},get stats(){return f.stats?Object.assign({},f.stats):null},get pizzas(){return f.pizzas},get x(){return Ae.x},get tx(){return Ae.tx},get bonus(){return!!f.bonus},get ride(){return f.ride},spot:function(i,e,t){var n=t==="top"?0:t==="bottom"?He.VH-800:(He.VH-800)/2;return{x:He.ox+i*He.s,y:(e+n)*He.s}},units:Ku,version:"0.3.0"};requestAnimationFrame(uh);
