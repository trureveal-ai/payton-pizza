(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ge=480,ht=800,Tr=[{name:"HOVERBOARD",price:0,spd:1,steer:290,cap:8,w:28,h:22,tip:1,heat:1,shield:0,perk:[],blurb:["Free. Wobbly. Yours.","Small and easy to dodge with."],perkText:["PERKS: none.","Every hazard wipes you out."],perkShort:"NO PERKS ON THE HOVERBOARD"},{name:"DIRT BIKE",price:150,spd:1.14,steer:390,cap:10,w:16,h:38,tip:1,heat:1,shield:0,perk:["pothole"],blurb:["Faster, sharper steering.","Carries 10 pizzas."],perkText:["PERK: rides over potholes.",""],perkShort:"PERK: RIDES OVER POTHOLES"},{name:"GUN-METAL BLACK BIMMER",price:450,spd:1.28,steer:340,cap:12,w:26,h:50,tip:1.2,heat:1,shield:1,perk:["pothole","cone","can","ball","snowball"],blurb:["Fast. Shrugs off 1 crash","per shift. Tips x1.2."],perkText:["PERKS: rides over potholes. Knocks","cones, bins and balls aside."],perkShort:"PERKS: POTHOLES, CONES, BINS, BALLS"},{name:"PAYTON PIZZA VAN",price:1e3,spd:1.2,steer:300,cap:16,w:30,h:58,tip:1.5,heat:.55,shield:1,perk:["pothole","cone","can","ball","snowball","dog","skater"],blurb:["Oven on board: pizzas stay","hot. Tips x1.5. 16 pizzas."],perkText:["PERKS: all of the Bimmer's. Dogs","and skaters bounce off too."],perkShort:"PERKS: ALL THE BIMMER'S + DOGS, SKATERS"}],Fo=3,Ua=5,Xu=320,vh=130,vc=52,xh=3.2,Mh=300,Sa=130,Oo=160,Hl=320,Gl=350,ai=96,oi=384,On=210,Yu=40,qu=170,Ea=560,Ka=330,Is=650,Mr=185,Bo=21,hs=16,Zu=13,as=410,Ri=1250,qr=1/60,hn=20,Pr=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],yh=[["#e4572e","#b8431f"],["#3d7fd9","#2c5fa8"],["#8b5cf6","#6d43d0"],["#f2a007","#c27e00"],["#2aa198","#1c7a73"],["#e0559b","#b23c78"]],Sh=[["#7b808c","#5f646f"],["#8a8478","#6c675d"],["#6f7a78","#56605e"]],Eh=["#f2c9a0","#d9a577","#a8703f","#7a4a26","#ffdcb8"],da=["#ffffff","#ffd23f","#5ad1ff","#9cf07a","#ff9f6b","#d6a5ff"],xc=["#c0392b","#2e86c1","#27ae60","#d4ac0d","#8e44ad","#e67e22","#ecf0f1"],u={SC:1,V:Tr[0],state:"title",day:1,score:0,lives:3,cam:0,speed:0,heat:100,streak:0,pizzas:0,shieldLeft:0,lots:[],obs:[],pies:[],pops:[],parts:[],decals:[],stats:null,finishY:0,tGame:0,shake:0,inv:0,stun:0,throwAnim:0,throwDir:1,throwCd:0,carT:0,slowT:0,skateT:0,bannerT:0,hintT:0,overWhy:"",garageFrom:"title",report:null,newHi:!1,buttons:[],isTouch:!1,keys:{},ride:0,step:0,runSeed:null,opt:{},uiOy:0,hudTop:0,flashL:0,flashR:0,fps:null,bonus:!1,continued:!1,slip:0,sand:0,ice:0,cartT:0,busT:0,plowT:0,lifeFlash:0,T:null,hood:null,dusk:!1,low:!1,ridePics:null,setEffects:null,project:function(i,e,t){return{x:i,y:ht-(e-u.cam)-(t||0),vis:!0}}},Te={x:240,sy:560,tx:240,ty:560};function bh(i){return ht-(i-u.cam)}const Ae={bank:0,owned:[!0,!1,!1,!1],ride:0,hi:0,bestDay:0,cont:1,mute:!1,low:!1},Ku="payton-pizza-v1";function Th(){try{var i=JSON.parse(localStorage.getItem(Ku)||"null");if(i&&typeof i=="object")for(var e in Ae)e in i&&(Ae[e]=i[e])}catch{}(!Array.isArray(Ae.owned)||Ae.owned.length!==4)&&(Ae.owned=[!0,!1,!1,!1]),Ae.owned[0]=!0,Ae.owned[Ae.ride]||(Ae.ride=0),Ae.cont>=1||(Ae.cont=1)}function ui(){try{localStorage.setItem(Ku,JSON.stringify(Ae))}catch{}}const fn=document.getElementById("g"),Ju=document.getElementById("gl"),le=fn.getContext("2d"),He={s:1,ox:0,dpr:1,VW:ge,VH:ht,cw:ge,ch:ht,top:0,bottom:0,onResize:null};function $u(){var i=window.innerWidth||ge,e=window.innerHeight||ht,t=Math.min(window.devicePixelRatio||1,2),n=Math.min(i/ge,e/ht);n>0||(n=1),He.s=n,He.dpr=t,He.ox=(i-ge*n)/2,He.VW=i/n,He.VH=e/n,He.cw=i,He.ch=e,fn.style.width=i+"px",fn.style.height=e+"px",fn.width=Math.max(1,Math.round(i*t)),fn.height=Math.max(1,Math.round(e*t)),u.SC=n*t;var r=document.getElementById("safe");if(r){var s=getComputedStyle(r);He.top=(parseFloat(s.paddingTop)||0)/n,He.bottom=(parseFloat(s.paddingBottom)||0)/n}u.hudTop=He.top,He.onResize&&He.onResize()}function ju(i,e){return{x:(i-He.ox)/He.s,y:e/He.s}}var pa=1;function Qu(i){pa=i>>>0||1}function Wi(){pa=pa+1831565813>>>0;var i=pa;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}var Ah=20261123;function ef(i){var e=(Ah^Math.imul(i+1,2654435761))>>>0;return e=Math.imul(e^e>>>16,2246822507)>>>0,e=Math.imul(e^e>>>13,3266489909)>>>0,(e^e>>>16)>>>0||1}function ke(i,e){return i+Wi()*(e-i)}function Tt(i){return Wi()<i}function Wt(i,e,t){return i<e?e:i>t?t:i}function tn(i){return i[Wi()*i.length|0]}function Mc(i,e){return i+Math.random()*(e-i)}var Xt=null,ba=null;function tf(){if(Xt){if(Xt.state==="suspended")try{Xt.resume()}catch{}return}try{var i=window.AudioContext||window.webkitAudioContext;if(!i)return;Xt=new i,ba=Xt.createBuffer(1,Xt.sampleRate*.5,Xt.sampleRate);for(var e=ba.getChannelData(0),t=0;t<e.length;t++)e[t]=Math.random()*2-1}catch{Xt=null}}function ut(i,e,t,n,r,s){if(!(!Xt||Ae.mute))try{var a=Xt.currentTime+(s||0),o=Xt.createOscillator(),l=Xt.createGain();o.type=t||"square",o.frequency.setValueAtTime(i,a),r&&o.frequency.exponentialRampToValueAtTime(r,a+e),l.gain.setValueAtTime(n||.06,a),l.gain.exponentialRampToValueAtTime(8e-4,a+e),o.connect(l),l.connect(Xt.destination),o.start(a),o.stop(a+e+.03)}catch{}}function Us(i,e){if(!(!Xt||Ae.mute||!ba))try{var t=Xt.currentTime,n=Xt.createBufferSource(),r=Xt.createGain();n.buffer=ba,r.gain.setValueAtTime(e||.12,t),r.gain.exponentialRampToValueAtTime(8e-4,t+i),n.connect(r),r.connect(Xt.destination),n.start(t),n.stop(t+i+.03)}catch{}}function Je(i){i==="throw"?ut(520,.09,"square",.04,260):i==="door"?(ut(660,.08,"square",.06),ut(880,.12,"square",.06,null,.08)):i==="hand"?(ut(660,.07,"square",.07),ut(880,.07,"square",.07,null,.07),ut(1320,.18,"square",.07,null,.14)):i==="smash"?(Us(.25,.16),ut(1800,.12,"sawtooth",.04,400)):i==="miss"?ut(200,.14,"triangle",.08,90):i==="bad"?(ut(220,.16,"sawtooth",.06,140),ut(150,.22,"sawtooth",.06,90,.14)):i==="crash"?(Us(.4,.22),ut(140,.35,"sawtooth",.1,40)):i==="pickup"?(ut(500,.06,"square",.06),ut(750,.06,"square",.06,null,.06),ut(1e3,.1,"square",.06,null,.12)):i==="empty"?ut(120,.08,"square",.05):i==="bark"?(ut(380,.06,"sawtooth",.07,240),ut(360,.07,"sawtooth",.07,220,.11)):i==="beep"?ut(900,.08,"square",.04):i==="ui"?ut(700,.05,"square",.05):i==="buy"?(ut(523,.08,"square",.06),ut(659,.08,"square",.06,null,.08),ut(784,.08,"square",.06,null,.16),ut(1046,.22,"square",.06,null,.24)):i==="win"?(ut(523,.1,"square",.06),ut(659,.1,"square",.06,null,.1),ut(784,.1,"square",.06,null,.2),ut(1046,.3,"square",.06,null,.3)):i==="shield"?ut(300,.2,"triangle",.1,600):i==="bonk"?ut(260,.07,"square",.06,150):i==="splash"?Us(.2,.1):i==="sand"?Us(.28,.06):i==="life"&&(ut(660,.08,"square",.07),ut(990,.08,"square",.07,null,.08),ut(1320,.2,"square",.07,null,.16))}const zo=[{key:"suburb",name:"MAPLE STREET",line:"Dogs, balls and cars backing out."},{key:"beach",name:"BEACH TOWN",line:"Sand drifts, surfers and golf carts."},{key:"city",name:"DOWNTOWN",line:"Taxis pulling out, buses that stop, open manholes."},{key:"snow",name:"FROSTY PEAK",line:"Ice, snowballs and the snowplow."}];function Vl(i){return Math.floor((i-1)/7)+1}function Wl(i){return zo[(Vl(i)-1)%zo.length]}function qt(i,e,t,n){return Math.min(i+e*t,n)}function Ja(i,e,t,n,r){return[Math.max(n,i-.5*t),Math.max(r,e-.5*t)]}const yc=[170,195,220,240],wh=250;function Na(i){var e=Wl(i).key,t=e==="suburb",n=e==="beach",r=e==="city",s=e==="snow",a=(i-1)%7+1,o=Vl(i),l=Math.min(Math.floor((o-1)/zo.length),2),c=o===1?i:Math.min(6.5+2*(o-1),14),f=a+3*l,h=f-2;return{hood:e,speed:o<=yc.length?yc[o-1]:wh,lots:Math.round(Math.min(26+2*c,44)),order:qt(.34,.02,c,.5),side:qt(.14,.025,c,.45),road:qt(.08,.022,c,.36),barrier:c>=5?qt(.03,.008,c-5,.1):0,carDown:Math.max(2,5.2-.25*c),carUp:Math.max(3,7-.3*c),skater:c>=4?[Math.max(3.5,10-.5*c),Math.max(7,14-.5*c)]:null,dog:t&&h>=1?qt(.03,.018,h,.22):0,dcar:t?f>=4?qt(.03,.015,f-3,.18):0:r?0:.4*qt(.03,.015,c-3,.18),ball:t?h>=1?qt(.03,.01,h,.14):0:n?qt(.07,.01,f,.14):0,sand:n?qt(.1,.02,f,.3):0,surfer:n?qt(.02,.01,f,.12):0,cart:n?Ja(12,16,f,6,10):null,taxi:r?qt(.08,.018,f,.24):0,manhole:r?qt(.08,.018,f,.24):0,bus:r?Ja(8,12,f,4.5,7.5):null,ice:s?qt(.12,.024,f,.34):0,kid:s?qt(.07,.018,f,.26):0,plow:s?Ja(8,12,f,4,7):null,pacer:qt(.06,.05,c,.4),quitter:c>=2?qt(.04,.03,c,.22):0,curb:.15,patience:Math.max(1.7,2.6-.05*c-.1*l),pickupEvery:i<=2?2:3,lives:i>=3?2:1}}function It(i,e,t){var n={type:i,x:e,y:t,vx:0,vy:0,w:16,h:16,st:0,t:ke(0,6),side:0,col:"#888",dead:!1};return i==="can"?(n.w=18,n.h=18):i==="hydrant"||i==="cone"?(n.w=13,n.h=13):i==="pothole"?(n.w=24,n.h=14):i==="dog"?(n.w=16,n.h=18,n.col=tn(["#8d5524","#3b3b3b","#d9b382","#f5f5f5"])):i==="dcar"?(n.w=46,n.h=24,n.col=tn(xc)):i==="carD"||i==="carU"?(n.w=24,n.h=48,n.col=tn(xc)):i==="skater"?(n.w=14,n.h=20,n.col=tn(da)):i==="pickup"||i==="life"?(n.w=30,n.h=30):i==="puddle"?(n.w=30,n.h=18):i==="ball"?(n.w=14,n.h=14,n.col=tn(["#ff3b4e","#3d7fd9","#ffd23f"])):i==="barrier"?(n.w=64,n.h=16):i==="sand"?(n.w=56,n.h=44):i==="surfer"?(n.w=40,n.h=14,n.col=tn(da),n.board=tn(["#ff5a5f","#ffd23f","#3ec1d3","#ffffff"])):i==="taxi"?(n.w=24,n.h=46):i==="bus"?(n.w=30,n.h=92,n.col=tn(["#2e86c1","#27ae60","#c0392b"])):i==="manhole"?(n.w=22,n.h=22):i==="ice"?(n.w=60,n.h=50):i==="kid"?(n.w=0,n.h=0,n.col=tn(da),n.at=ke(180,330)):i==="snowball"?(n.w=12,n.h=12):i==="plow"?(n.w=44,n.h=50):i==="cart"&&(n.w=22,n.h=34,n.col=tn(["#ff7a59","#3ec1d3","#ffd23f","#7bd389"])),n}function ds(i,e,t,n,r){for(var s=[62,105,148],a=Wi()*3|0,o=Na(n),l={side:i,y0:e,cust:t,delivered:!1,missed:!1,slot:a,doorY:e+s[a],wins:[],roof:tn(t?yh:Sh),c:null,ph:ke(0,6)},c=0;c<3;c++)c!==a&&l.wins.push({y:e+s[c],broken:!1});if(t){var f=Wi(),h="porch",d=r?0:o.pacer,m=d+(r?0:o.quitter),_=m+(r?.3:o.curb);f<d?h="pacer":f<m?h="quit":f<_?h="curb":f<_+.3&&(h="yard");var x=i<0?ai:oi,g=-i,p=l.doorY+(h==="yard"?(Tt(.5)?-1:1)*ke(26,36):0),A=x+g*(h==="yard"||h==="pacer"?ke(18,27):11);l.c={type:h,x:A,y:p,by:p,hx:A,cx:i<0?Sa-9:Gl+9,ph:ke(0,6),happy:0,wait:-1,gone:!1,skin:tn(Eh),shirt:tn(da),hair:tn(["#3b2a1a","#111","#b5651d","#e6c35c","#888"])}}return l}function nf(i){u.lots=[],u.obs=[],u.pies=[],u.pops=[],u.parts=[],u.decals=[];var e=Na(i),t=e.lots,n=Ea,r,s,a;for(r=0;r<t;r++){u.lots.push(ds(-1,n,Tt(e.order),i)),u.lots.push(ds(1,n,Tt(e.order),i));var o=[145,335];for(s=0;s<2;s++)Tt(e.side)&&u.obs.push(It(Tt(.6)?"can":"hydrant",o[s]+ke(-7,7),n+ke(10,On-10)));if(Tt(e.road)){var l=Wi();u.obs.push(It(l<.4?"cone":l<.75?"pothole":"puddle",ke(178,302),n+ke(0,On)))}e.dog&&Tt(e.dog)&&(s=Tt(.5)?-1:1,a=It("dog",s<0?114:366,n+ke(60,150)),a.side=s,u.obs.push(a)),e.dcar&&Tt(e.dcar)&&(s=Tt(.5)?-1:1,a=It("dcar",s<0?74:406,n+19),a.side=s,u.obs.push(a)),e.ball&&Tt(e.ball)&&(s=Tt(.5)?-1:1,a=It("ball",s<0?120:360,n+ke(40,170)),a.side=s,u.obs.push(a)),e.barrier&&r>2&&Tt(e.barrier)&&u.obs.push(It("barrier",Tt(.5)?200:280,n+ke(30,180))),e.sand&&Tt(e.sand)&&u.obs.push(It("sand",ke(190,290),n+ke(0,On))),e.manhole&&Tt(e.manhole)&&u.obs.push(It("manhole",ke(185,295),n+ke(0,On))),e.taxi&&r>1&&Tt(e.taxi)&&(s=Tt(.5)?-1:1,a=It("taxi",s<0?173:307,n+ke(30,180)),a.side=s,u.obs.push(a)),e.ice&&Tt(e.ice)&&u.obs.push(It("ice",ke(190,290),n+ke(0,On))),e.kid&&r>1&&Tt(e.kid)&&(s=Tt(.5)?-1:1,a=It("kid",s<0?122:358,n+ke(40,170)),a.side=s,u.obs.push(a)),e.surfer&&r>1&&Tt(e.surfer)&&(s=Tt(.5)?-1:1,a=It("surfer",s<0?122:358,n+ke(40,170)),a.side=s,u.obs.push(a)),r%e.pickupEvery===1&&u.obs.push(It("pickup",ke(152,328),n+ke(20,190))),n+=On}var c=e.lives>1&&Tt(.5)?2:1,f=[.35,.78];for(r=0;r<c;r++)u.obs.push(It("life",ke(170,310),Ea+Math.floor(t*f[r])*On+ke(30,180)));var h=0;for(r=0;r<u.lots.length;r++)u.lots[r].cust&&h++;for(var d=0;h<12&&d++<400;){var m=Wi()*u.lots.length|0;u.lots[m].cust||(u.lots[m]=ds(u.lots[m].side,u.lots[m].y0,!0,i),h++)}return u.finishY=n+240,h}function Rh(i){u.lots=[],u.obs=[],u.pies=[],u.pops=[],u.parts=[],u.decals=[];var e=12,t=Ea,n;for(n=0;n<e;n++)u.lots.push(ds(-1,t,!0,i,!0)),u.lots.push(ds(1,t,!0,i,!0)),t+=On;return u.finishY=t+240,e*2}function ko(i,e){var t=Math.floor((e-Ea)/On);if(t<0)return null;var n=u.lots[t*2+(i<0?0:1)];return n||null}function vs(i){if(u.day=u.day0=i||u.opt.day||1,u.runSeed=u.opt.seed!=null?u.opt.seed:null,u.continued=!!i&&i>1,u.score=0,u.lives=Fo,u.newHi=!1,u.opt.bonus&&!i){af();return}sf()}function rf(){vs(Math.max(1,Ae.cont||1))}function sf(){of(!1)}function af(){of(!0)}function Sc(){if(!u.bonus&&u.day%7===0){af();return}u.day++,sf()}function of(i){u.bonus=i,u.ride=u.opt.ride!=null?u.opt.ride:Ae.ride,u.V=Tr[u.ride],u.T=Na(u.day),u.hood=Wl(u.day),u.dusk=(u.day-1)%7>=4,Qu((u.runSeed!=null?u.runSeed+(u.day-u.day0):ef(u.day))+(i?7777:0)),u.step=0;var e=i?Rh(u.day):nf(u.day);u.cam=0,Te.x=Te.tx=280,Te.sy=Te.ty=590,u.heat=100,u.streak=0,u.pizzas=u.V.cap,u.shieldLeft=i?0:u.V.shield,u.inv=0,u.stun=0,u.slip=0,u.sand=0,u.shake=0,u.throwCd=0,u.throwAnim=0,u.lifeFlash=0,u.carT=ke(1.5,3),u.slowT=ke(3,5),u.skateT=ke(4,8),u.cartT=u.T.cart?ke(4,8):0,u.busT=u.T.bus?ke(3,7):0,u.plowT=u.T.plow?ke(3,7):0,u.ice=0,u.bannerT=2.4,u.day===1&&!i&&(u.hintT=9),u.stats={orders:e,delivered:0,hand:0,door:0,smash:0,missed:0,tips:0,crashes:0,bonks:0,fed:0,by:{}},u.dogTip=!1,!i&&u.opt.day==null&&Ae.cont!==u.day&&(Ae.cont=u.day,ui()),u.state="play"}function Ch(i){Ae.bank+=i,u.stats&&(u.stats.tips+=i)}function lf(i){u.overWhy=i,u.state="over",u.score>Ae.hi&&(Ae.hi=u.score,u.newHi=!0),u.day>Ae.bestDay&&(Ae.bestDay=u.day),ui(),Je("bad")}function Ph(){if(u.bonus){var i=u.stats.delivered===u.stats.orders,e=2*u.stats.delivered,t=i?50:0;Ae.bank+=e+t,i&&(u.score+=2e3),u.report={bonus:!0,pay:e,perfect:t,pct:Math.round(100*u.stats.delivered/u.stats.orders),healed:!1,title:i?"PARTY HERO":u.stats.delivered>=u.stats.orders*.6?"LIFE OF THE PARTY":"PARTY CRASHER"},u.score>Ae.hi&&(Ae.hi=u.score,u.newHi=!0),ui(),u.state="report",Je("win");return}var n=u.stats.orders?u.stats.delivered/u.stats.orders:1;if(n<.5){lf("fired");return}var r=10+5*u.day,s=u.stats.missed===0&&u.stats.smash===0&&u.stats.crashes===0?25:0;Ae.bank+=r+s,u.score+=s?1e3:0;var a="BARELY EMPLOYED";s?a="EMPLOYEE OF THE DAY":u.stats.smash>=3?a="WINDOW MENACE":n>=.9&&u.stats.hand>=u.stats.door?a="HAND-OFF HERO":n>=.9?a="RELIABLE DRIVER":n>=.7&&(a="DECENT DRIVER"),u.report={pay:r,perfect:s,title:a,pct:Math.round(n*100),healed:u.lives<Fo},u.lives<Fo&&u.lives++,u.score>Ae.hi&&(Ae.hi=u.score,u.newHi=!0),u.day>Ae.bestDay&&(Ae.bestDay=u.day),ui(),u.state="report",Je("win")}function Bt(i,e,t,n,r,s){u.pops.push({wx:i,wy:e,lift:s||0,txt:t,col:n||"#fff",t:0,size:r||16})}function Ec(i,e,t,n,r){u.pops.push({sx:i,sy:e,lift:0,txt:t,col:n||"#fff",t:0,size:r||16})}function Xl(i,e,t,n,r){for(var s=u.project(i,e,0),a=0;a<t;a++){var o=ke(0,6.28),l=ke(30,r||160);u.parts.push({x:s.x,y:s.y,vx:Math.cos(o)*l,vy:Math.sin(o)*l,t:0,life:ke(.3,.7),col:tn(n),s:ke(2,4)})}}function Vi(i){if(!(u.state!=="play"||u.throwCd>0)){if(i<0?u.flashL=.25:u.flashR=.25,u.pizzas<=0){Bt(Te.x,u.cam+ht-Te.sy,"OUT OF PIZZA!","#ffd23f",16,34),Je("empty"),u.throwCd=.25;return}var e=uf(i);e.lot&&(e.lot.claim=u.step+50),u.bonus||u.pizzas--,u.throwCd=.2,u.throwAnim=.18,u.throwDir=i,u.pies.push({x:Te.x+i*10,y:u.cam+ht-Te.sy,vx:i*as,vy:u.speed,d:0,side:i,rot:ke(0,6)}),Je("throw")}}function bc(i){for(var e=u.cam+ht-Te.sy,t=null,n=0;n<u.obs.length;n++){var r=u.obs[n];r.type!=="dog"||r.out||r.st!==1&&r.st!==2||Math.abs(r.y-e)>Xu||(r.x-Te.x)*i<-12||(!t||r.y<t.y)&&(t=r)}return t}function cf(i,e,t,n){i.st=3,i.gx=e,i.gy=t,u.stats.fed++,u.score+=25,Je("bark"),Bt(i.x,i.y,n+"  +25","#9cf07a",15,34)}function Lh(){for(var i=u.cam+ht-Te.sy,e=null,t=1e9,n=0;n<u.lots.length;n++){var r=u.lots[n];if(!(!r.cust||r.delivered||r.missed)){var s=r.doorY-i;if(!(s<-40||s>260)){var a=r.side<0?ai:oi;if(!(Math.abs(Te.x-a)>Mr+10)){var o=Math.abs(s-60);o<t&&(t=o,e=r)}}}}if(!e){if(bc(-1)){Vi(-1);return}if(bc(1)){Vi(1);return}}Vi(e?e.side:Te.x<240?-1:1)}function $a(i,e,t){i.delivered=!0,i.c.happy=1.4,u.stats.delivered++;var n=1+u.heat/100,r,s,a,o,l=i.c.x,c=i.c.y,f=u.bonus?2:1;if(e){u.streak++;var h=Math.min(u.streak,5),d=i.c.type==="quit"?1.5:1;r=Math.round(250*n*h*d*f/10)*10,s=Math.max(1,Math.round(3*n*(1+.25*(h-1))*u.V.tip*d*f)),u.stats.hand++,a=(d>1?"JUST IN TIME!":"HAND-OFF!")+(h>1?" x"+h:""),o="#ffd23f",Je("hand"),Xl(l,c,14,["#ffd23f","#fff","#ff9f1c"],200),Bt(l,c,a,o,20,38),Bt(l,c,"+"+r+"  $"+s,"#fff",14,18)}else r=Math.round(100*n*f/10)*10,s=Math.max(1,Math.round(1*n*u.V.tip*f)),u.stats.door++,Je("door"),Bt(l,c,"FRONT DOOR","#9cf07a",16,38),Bt(l,c,"+"+r+"  $"+s,"#fff",14,20);u.score+=r,Ch(s),u.heat=Math.min(100,u.heat+40)}function Dh(i){var e=u.cam+ht-Te.sy;if(u.shieldLeft>0){u.shieldLeft--,u.inv=1.3,u.shake=.2,Je("shield"),Bt(Te.x,e,"BUMPER SAVED YOU!","#5ad1ff",16,40);return}u.lives--,u.inv=1.9,u.stun=.6,u.streak=0,u.heat=Math.max(0,u.heat-25),u.shake=.45,u.stats.crashes++,i&&(u.stats.by[i.type]=(u.stats.by[i.type]||0)+1),u.lifeFlash=1,Je("crash"),Bt(Te.x,e,"WIPEOUT!","#ff5964",22,46),u.lives>0&&Bt(Te.x,e,u.lives+(u.lives===1?" LIFE":" LIVES")+" LEFT","#fff",14,24),Xl(Te.x,e,18,["#fff","#ffd23f","#ff5964","#e8b04a"],240),u.lives<=0&&lf("crash")}function Ih(i){i.out=!0,i.vx=(i.x>=Te.x?1:-1)*ke(170,250),i.vy=u.speed*.7,i.t=0,u.stats.bonks++,u.score+=10,Je("bonk"),Bt(i.x,i.y,i.type==="dog"?"YIP!":i.type==="skater"?"WHOA!":"BONK!","#5ad1ff",13,26)}function Tc(i){u.tGame+=i;var e,t,n,r;for(e=u.pops.length-1;e>=0;e--)r=u.pops[e],r.t+=i,r.t>1.2&&u.pops.splice(e,1);for(e=u.parts.length-1;e>=0;e--)r=u.parts[e],r.t+=i,r.x+=r.vx*i,r.y+=r.vy*i,r.vy+=300*i,r.t>r.life&&u.parts.splice(e,1);if(u.shake>0&&(u.shake-=i),u.flashL>0&&(u.flashL-=i),u.flashR>0&&(u.flashR-=i),u.lifeFlash>0&&(u.lifeFlash-=i),u.state==="title"){u.cam+=110*i,u.cam>u.finishY-ht-300&&(u.cam=0),Ac(i,-1e9);return}if(u.state==="play"){u.step++,u.inv>0&&(u.inv-=i),u.stun>0&&(u.stun-=i),u.slip>0&&(u.slip-=i),u.sand>0&&(u.sand-=i),u.ice>0&&(u.ice-=i),u.throwCd>0&&(u.throwCd-=i),u.throwAnim>0&&(u.throwAnim-=i),u.bannerT>0&&(u.bannerT-=i),u.hintT>0&&(u.hintT-=i);var s=(u.keys.ArrowRight||u.keys.KeyL?1:0)-(u.keys.ArrowLeft||u.keys.KeyJ?1:0),a=(u.keys.ArrowDown||u.keys.KeyK?1:0)-(u.keys.ArrowUp||u.keys.KeyI?1:0),o=u.V.steer*(u.stun>0?.4:u.ice>0?.12:u.slip>0?.4:1);if(s||a)Te.x+=s*o*i,Te.sy+=a*250*i,Te.tx=Te.x,Te.ty=Te.sy;else{var l=o*1.6*i,c=460*i;Te.x+=Wt(Te.tx-Te.x,-l,l),Te.sy+=Wt(Te.ty-Te.sy,-c,c)}var f=Sa+u.V.w/2+1,h=Gl-u.V.w/2-1;Te.x=Wt(Te.x,f,h),Te.sy=Wt(Te.sy,Ka,Is),Te.tx=Wt(Te.tx,f,h),Te.ty=Wt(Te.ty,Ka,Is);var d=(Is-Te.sy)/(Is-Ka),m=(u.bonus?190:u.T.speed)*u.V.spd;u.speed=m*(.8+.5*d)*(u.stun>0?.35:1)*(u.sand>0?.6:1),u.cam+=u.speed*i,u.heat=Math.max(0,u.heat-6.5*u.V.heat*i);var _=u.cam+ht-Te.sy,x=u.bonus||u.cam+Ri>u.finishY-80;for(u.carT-=i,u.carT<=0&&!x&&(u.carT=ke(u.T.carDown,u.T.carDown+2.2),n=It("carD",200+ke(-8,8),u.cam+Ri),n.vy=-(110+ke(0,90)),u.obs.push(n)),u.slowT-=i,u.slowT<=0&&!x&&(u.slowT=ke(u.T.carUp,u.T.carUp+3),n=It("carU",280+ke(-8,8),u.cam+Ri),n.vy=m*.42,u.obs.push(n)),u.T.bus&&(u.busT-=i,u.busT<=0&&!x&&(u.busT=ke(u.T.bus[0],u.T.bus[1]),n=It("bus",280,u.cam+Ri),n.ct=ke(0,3),u.obs.push(n))),u.T.plow&&(u.plowT-=i,u.plowT<=0&&!x&&(u.plowT=ke(u.T.plow[0],u.T.plow[1]),n=It("plow",205,u.cam+Ri),n.vy=-55,u.obs.push(n))),u.T.cart&&(u.cartT-=i,u.cartT<=0&&!x&&(u.cartT=ke(u.T.cart[0],u.T.cart[1]),n=It("cart",240,u.cam+Ri),n.vy=m*.5,n.ph=ke(0,6.28),u.obs.push(n))),u.T.skater&&(u.skateT-=i,u.skateT<=0&&!x&&(u.skateT=ke(u.T.skater[0],u.T.skater[1]),n=It("skater",Tt(.5)?145:335,u.cam+Ri-30),n.bx=n.x,n.vy=-70,u.obs.push(n))),Ac(i,_),e=0;e<u.lots.length;e++)t=u.lots[e],t.cust&&!t.delivered&&!t.missed&&t.y0+On<u.cam-6&&(t.missed=!0,u.stats.missed++,u.bonus||(u.streak=0,Ec(t.side<0?80:ge-80,ht-170,"MISSED ORDER!","#ff5964",18),Je("bad")));var g=u.V.w*.78,p=u.V.h*.78;for(e=u.obs.length-1;e>=0;e--){if(n=u.obs[e],n.t+=i,n.out){n.x+=n.vx*i,n.y+=n.vy*i,(n.x<-60||n.x>ge+60||n.y<u.cam-90||n.t>2.5)&&u.obs.splice(e,1);continue}var A=bh(n.y);if(n.type==="dog"){var b=n.y-_;if(n.st===0&&b<Xu&&b>0&&(n.st=1,Je("bark"),!u.dogTip&&u.V.perk.indexOf("dog")<0&&(u.dogTip=!0,Ec(ge/2,250,"DOG!  THROW IT A PIZZA","#ffd23f",15))),n.st===1&&b<vh&&(n.st=2,n.ct=0),n.st===2){n.ct+=i;var M=_-14;n.vy=n.y>M+4?u.speed*.2:n.y<M-4?u.speed*1.3:u.speed,n.x+=Wt(Te.x-n.x,-vc*i,vc*i),n.x=Wt(n.x,118,362),n.ct>=xh&&(n.st=5)}else if(n.st===3){n.vy=0;var U=n.gx-n.x,C=n.gy-n.y,P=Math.sqrt(U*U+C*C);if(P<6)n.st=4,n.x=n.gx,n.y=n.gy;else{var D=Math.min(P,230*i);n.x+=U/P*D,n.y+=C/P*D}}else n.st===4?n.vy=0:n.st===5&&(n.vy=0,n.x+=Wt((n.side<0?120:360)-n.x,-120*i,120*i))}else if(n.type==="dcar"){if(n.st===0&&A>200&&(n.st=1,Je("beep")),n.st===1&&A>310&&(n.st=2),n.st===2){n.x+=-n.side*88*i;var T=n.side<0?205:275;(n.side<0&&n.x>=T||n.side>0&&n.x<=T)&&(n.x=T,n.st=3)}}else if(n.type==="skater")n.x=n.bx+Math.sin(n.t*3)*9;else if(n.type==="cart")n.x=240+Math.sin(n.t*.9+n.ph)*42;else if(n.type==="bus")n.ct+=i,n.stopped=n.ct%5.5>=3.5,n.vy=n.stopped?0:m*.5;else if(n.type==="taxi"){if(n.st===0&&n.y-_<460&&A<ht&&(n.st=1,n.ct=0,Je("beep")),n.st===1&&(n.ct+=i,n.ct>.5&&(n.st=2)),n.st===2){n.x+=-n.side*70*i,n.vy=Math.min(m*.45,n.vy+140*i);var S=n.side<0?205:275;(n.side<0&&n.x>=S||n.side>0&&n.x<=S)&&(n.x=S,n.st=3)}n.st===3&&(n.vy=m*.45)}else if(n.type==="kid"){if(n.st===0&&n.y-_<n.at&&n.y>_){n.st=1;var L=It("snowball",n.x,n.y);L.vx=-n.side*150,L.side=n.side,u.obs.push(L),Je("throw")}}else if(n.type==="snowball"){if(n.x+=n.vx*i,n.x<112||n.x>368){u.obs.splice(e,1);continue}}else if(n.type==="surfer"){if(n.st===0&&n.y-_<430&&A<ht&&(n.st=1),n.st===1&&(n.x+=-n.side*70*i,n.x<116||n.x>364)){u.obs.splice(e,1);continue}}else if(n.type==="ball"&&(n.st===0&&A>240&&A<ht&&(n.st=1),n.st===1&&(n.x+=-n.side*95*i,n.x<112||n.x>368))){u.obs.splice(e,1);continue}if(n.y+=n.vy*i,n.y<u.cam-90){u.obs.splice(e,1);continue}if(Math.abs(n.x-Te.x)<(n.w+g)/2&&Math.abs(n.y-_)<(n.h+p)/2){if(n.type==="kid"||n.type==="dog"&&n.st>=3)continue;if(n.type==="pickup"){var H=u.V.cap-u.pizzas;u.pizzas=u.V.cap,u.obs.splice(e,1),Je("pickup"),Bt(Te.x,_,H>0?"+"+H+" PIZZAS":"BAG IS FULL","#ffd23f",16,36);continue}if(n.type==="life"){u.obs.splice(e,1),Je("life"),u.lives<Ua?(u.lives++,u.lifeFlash=1,Bt(Te.x,_,"+1 LIFE","#ff6b7d",20,40)):(u.score+=250,Bt(Te.x,_,"FULL LIVES  +250","#ff6b7d",16,40));continue}if(n.type==="ice"){u.ice=.25,n.hit||(n.hit=!0,Je("splash"),Bt(Te.x,_,"ICE!","#bfe9ff",15,34));continue}if(n.type==="sand"){u.sand=.3,n.hit||(n.hit=!0,Je("sand"),Bt(Te.x,_,"SAND!","#e8c877",15,34));continue}if(n.type==="puddle"){n.hit||(n.hit=!0,u.slip=.9,u.heat=Math.max(0,u.heat-10),Je("splash"),Bt(Te.x,_,"SPLASH!","#7fd4ff",15,34));continue}if(u.V.perk.indexOf(n.type)>=0){n.type!=="pothole"?Ih(n):n.hit||(n.hit=!0,Bt(Te.x,_,"SMOOTH!","#5ad1ff",12,30));continue}if(u.inv<=0&&!u.opt.ghost){if(Dh(n),n.type==="dog"&&(n.st=5),u.state!=="play")return}else n.type==="dog"&&(n.st=5)}}for(e=u.pies.length-1;e>=0;e--){r=u.pies[e];for(var z=!1,W=0;W<3&&!z;W++)r.x+=r.vx*i/3,r.y+=r.vy*i/3,r.d+=Math.abs(r.vx)*i/3,z=Uh(r);r.rot+=i*9,z&&u.pies.splice(e,1)}u.decals.length>40&&u.decals.splice(0,u.decals.length-40),_>=u.finishY&&Ph()}}function Ac(i,e){for(var t=0;t<u.lots.length;t++){var n=u.lots[t];if(n.cust){var r=n.c;if(!(n.y0>u.cam+ht+700||n.y0+On<u.cam-50)&&(r.happy>0&&(r.happy-=i),!n.delivered)){var s=n.doorY-e;r.type==="pacer"?r.y=r.by+Math.sin(u.tGame*2.1+r.ph)*30:r.type==="curb"?!n.missed&&s<700&&s>-80&&(r.x+=Wt(r.cx-r.x,-70*i,70*i)):r.type==="quit"&&!r.gone&&(r.wait<0?s<640&&s>-80&&(r.wait=u.T.patience):(r.wait-=i,r.wait<=0&&(r.gone=!0,r.goneT=0,Bt(r.x,r.y,"GAVE UP!","#ffb4b4",13,40)))),r.gone&&(r.goneT+=i,r.x+=Wt((n.side<0?ai:oi)-r.x,-60*i,60*i))}}}}function Ns(i,e){u.streak=0,u.decals.push({x:i.x,y:i.y}),Je("miss"),Bt(i.x,i.y,e,"#c9ced6",13,12);for(var t=null,n=Mh,r=0;r<u.obs.length;r++){var s=u.obs[r];if(!(s.type!=="dog"||s.out||s.st!==1&&s.st!==2)){var a=s.x-i.x,o=s.y-i.y,l=Math.sqrt(a*a+o*o);l<n&&(n=l,t=s)}}t&&cf(t,i.x,i.y,"FETCH!")}function Uh(i){var e,t,n,r=i.side<0?ai:oi;for(e=0;e<u.obs.length;e++){var s=u.obs[e];if(s.type==="dog"&&!s.out&&s.st===2&&Math.abs(i.x-s.x)<16&&Math.abs(i.y-s.y)<34)return u.decals.push({x:s.x,y:s.y}),cf(s,s.x,s.y,"CHOMP!"),!0}for(e=0;e<u.lots.length;e++)if(t=u.lots[e],!(t.side!==i.side||!t.cust||t.delivered||t.missed||t.c.gone)&&!(Math.abs(t.y0+105-i.y)>170)){n=t.c;var a=n.x-i.x,o=n.y-i.y;if(a*a+o*o<hs*hs)return $a(t,!0),!0}if((i.side<0&&i.x<=r||i.side>0&&i.x>=r)&&(t=ko(i.side,i.y),t)){var l=i.y-t.y0;if(l>=Yu&&l<=qu){if(Math.abs(i.y-t.doorY)<=Bo)return t.cust&&!t.delivered&&!t.missed?($a(t,!1),!0):(Ns(i,t.cust?"ALREADY SERVED":"WRONG HOUSE!"),!0);for(e=0;e<t.wins.length;e++){var c=t.wins[e];if(Math.abs(i.y-c.y)<=Zu){if(c.broken)Ns(i,"THUNK");else{c.broken=!0,u.stats.smash++,u.streak=0,u.score=Math.max(0,u.score-50);var f=Math.min(5,Ae.bank);Ae.bank-=f,u.stats.tips-=f,Je("smash"),u.shake=.15,Xl(r,c.y,14,["#9ad8ff","#fff","#d6f1ff"],180),Bt(r,c.y,"SMASH!  -$"+f,"#ff5964",17,14)}return!0}}return Ns(i,"THUNK"),!0}}return i.d>=Mr||i.x<-12||i.x>ge+12?(t=ko(i.side,i.y),t&&t.cust&&!t.delivered&&!t.missed&&Math.abs(i.y-t.doorY)<=Bo&&Math.abs(i.x-r)<=24?($a(t,!1),!0):(Ns(i,"SPLAT"),!0)):!1}function Fa(){u.state="title",u.bonus=!1,u.day=3,u.T=Na(3),u.hood=Wl(3),u.dusk=!1,Qu(ef(3)),nf(3),u.cam=0}function uf(i){for(var e=i<0?ai:oi,t=u.cam+ht-Te.sy,n=Te.x+i*10,r=Math.abs(e-n),s=!1,a=0;a<u.obs.length;a++){var o=u.obs[a];if(!(o.type!=="dog"||o.out||o.st!==2||(o.x-n)*i<0||Math.abs(o.x-n)>Mr)){var l=Math.abs(o.x-n)/as,c=o.y-t+(o.vy-u.speed)*l;if(Math.abs(c)<26)return{x:o.x,y:o.y,hit:"dog",lot:null};o.y-t>-48&&o.y-t<90&&(s=!0)}}if(r>Mr)return{x:n+i*Mr,y:t+u.speed*Mr/as,hit:"far",lot:null};for(var f=t+u.speed*r/as,h="wall",d=null,m=0;m<u.lots.length;m++){var _=u.lots[m];if(!(_.side!==i||!_.cust||_.delivered||_.missed||_.claim>u.step||Math.abs(_.y0+105-f)>170)){var x=_.c,g=x.type==="pacer",p=x.type==="curb"&&Math.abs(x.cx-x.x)>1,A=Math.abs(x.x-n)/as,b=t+u.speed*A,M=g?x.by+Math.sin((u.tGame+A)*2.1+x.ph)*30:x.y;if(!x.gone&&Math.abs(b-M)<(g?hs-7:p?hs-11:hs-3)){h="hand",d=_;break}Math.abs(f-_.doorY)<=Bo-3&&(h="door",d=_)}}if(h==="wall"){var U=ko(i,f);if(U&&f-U.y0>=Yu&&f-U.y0<=qu)for(var C=0;C<U.wins.length;C++)!U.wins[C].broken&&Math.abs(f-U.wins[C].y)<=Zu&&(h="window")}return s&&(h==="hand"||h==="door")&&(h="wall",d=null),{x:e,y:f,hit:h,lot:d}}function ze(i,e,t,n,r){le.fillStyle=r,le.fillRect(i,e,t,n)}function un(i,e,t,n){le.fillStyle=n,le.beginPath(),le.arc(i,e,t,0,6.2832),le.fill()}function Pt(i,e,t,n,r,s){le.fillStyle=s,le.beginPath(),le.moveTo(i+r,e),le.lineTo(i+t-r,e),le.quadraticCurveTo(i+t,e,i+t,e+r),le.lineTo(i+t,e+n-r),le.quadraticCurveTo(i+t,e+n,i+t-r,e+n),le.lineTo(i+r,e+n),le.quadraticCurveTo(i,e+n,i,e+n-r),le.lineTo(i,e+r),le.quadraticCurveTo(i,e,i+r,e),le.closePath(),le.fill()}function Oa(i,e,t,n,r,s,a){le.fillStyle=a,le.beginPath(),le.moveTo(i,e),le.lineTo(t,n),le.lineTo(r,s),le.closePath(),le.fill()}var Nh='"Courier New",Courier,monospace';function fe(i,e,t,n,r,s,a){le.font="bold "+n+"px "+Nh,le.textAlign=s||"left",le.textBaseline="middle",a&&(le.lineWidth=Math.max(3,n/5),le.strokeStyle=a,le.lineJoin="round",le.strokeText(i,e,t)),le.fillStyle=r,le.fillText(i,e,t)}function Ta(i,e,t){Oa(i-t,e-t,i+t,e-t,i,e+t*1.2,"#ffc93c"),ze(i-t-1,e-t-t*.35,t*2+2,t*.45,"#c98a3a"),un(i-t*.3,e-t*.45,t*.22,"#d7263d"),un(i+t*.35,e-t*.3,t*.2,"#d7263d"),un(i,e+t*.25,t*.18,"#d7263d")}function Fh(i,e,t){ze(i-t,e-t,t*2,t*2,"#e8b04a"),ze(i-t,e-t,t*2,t*.45,"#c98a3a"),un(i,e+t*.2,t*.5,"#d7263d"),un(i,e+t*.2,t*.25,"#ffc93c")}function wc(i,e,t,n){Pt(i-8,e-4,16,9,4,"#d7263d"),ze(i-9,e-6,3.5,5,"#f2c9a0"),ze(i+5.5,e-6,3.5,5,"#f2c9a0"),un(i,e-1,5.6,"#b3001b"),ze(i-4.5,e-9,9,3.5,"#7d0013"),un(i,e-1,1.4,"#fff")}function Oh(i,e,t,n,r,s){if(i===0){var a=Math.sin(s*7)*1.2;ze(e-17,t+3,34,9,"rgba(0,0,0,0.25)"),ze(e-19,t,6,12,"#111"),ze(e+13,t,6,12,"#111"),Pt(e-14,t+1,28,10,3,"#22252e"),ze(e-12,t+9,9,2,"#4de1ff"),ze(e+3,t+9,9,2,"#4de1ff"),ze(e-7,t+8+a*.3,14,10,"#c1121f"),Ta(e,t+13+a*.3,3.2),wc(e+a*.5,t+2)}else if(i===1)ze(e-2,t-17,7,38,"rgba(0,0,0,0.22)"),Pt(e-3,t-21,6,12,2,"#111"),Pt(e-3.5,t+8,7,13,2,"#111"),Pt(e-4,t-11,8,22,3,"#ff7b00"),ze(e-3,t-12,6,4,"#fff"),ze(e-10,t-13,20,3,"#333"),ze(e-11,t-14,3,5,"#111"),ze(e+8,t-14,3,5,"#111"),ze(e-7,t+6,14,10,"#c1121f"),Ta(e,t+11,3.2),wc(e,t-1);else if(i===2)Pt(e-11,t-22,26,50,7,"rgba(0,0,0,0.3)"),Pt(e-13,t-25,26,50,7,"#2a2e35"),Pt(e-11,t-23,22,14,5,"#3a4049"),ze(e-10,t-10,20,8,"#3b6a8c"),ze(e-9,t+11,18,6,"#2b4d66"),Pt(e-10,t-2,20,13,2,"#1c1f25"),ze(e-6,t,12,8,"#101216"),ze(e-11,t-25,6,3,"#fff6c2"),ze(e+5,t-25,6,3,"#fff6c2"),ze(e-11,t+22,7,3,"#ff2e43"),ze(e+4,t+22,7,3,"#ff2e43"),ze(e-15,t-9,3,4,"#2a2e35"),ze(e+12,t-9,3,4,"#2a2e35"),ze(e-1,t-23,2,12,"#4a515c");else{Pt(e-13,t-26,30,58,6,"rgba(0,0,0,0.3)"),Pt(e-15,t-29,30,58,6,"#e3202e"),ze(e-15,t-6,30,5,"#fff1d0"),ze(e-15,t+20,30,3,"#fff1d0"),ze(e-12,t-24,24,9,"#3b6a8c"),ze(e-13,t-29,6,3,"#fff6c2"),ze(e+7,t-29,6,3,"#fff6c2"),ze(e-13,t+26,6,3,"#ff2e43"),ze(e+7,t+26,6,3,"#ff2e43"),ze(e-17,t-22,3,4,"#2c3040"),ze(e+14,t-22,3,4,"#2c3040");var o=.45+.4*Math.sin(s*6);le.save(),le.shadowColor="rgba(255,210,63,"+o.toFixed(2)+")",le.shadowBlur=16*u.SC,Oa(e,t-11,e-12,t+15,e+12,t+15,"#ffc93c"),le.restore(),ze(e-13,t+13,26,5,"#c98a3a"),un(e,t-1,2.4,"#d7263d"),un(e-4,t+7,2.4,"#d7263d"),un(e+4,t+8,2.2,"#d7263d");for(var l=Math.floor(s*5)%2,c=0;c<4;c++){var f=c/3;un(e-f*12,t-11+f*26,1.3,(c+l)%2?"#fff":"#ff9f1c"),un(e+f*12,t-11+f*26,1.3,(c+l)%2?"#ff9f1c":"#fff")}}}function Bh(i,e,t,n){n=n||1;var r=t?"#ff3b4e":"#4a4d57";un(i-4*n,e-2*n,5*n,r),un(i+4*n,e-2*n,5*n,r),Oa(i-9*n,e,i+9*n,e,i,e+10*n,r)}function Yl(i,e,t,n){for(var r=Math.min(Ua,Math.max(3,u.lives)),s=0;s<r;s++)Bh(i+s*t,e,s<u.lives,n);return r}function Lr(i,e){for(var t=String(i);t.length<e;)t="0"+t;return t}function zh(){ze(0,0,ge,60,"rgba(15,16,22,0.9)"),fe("SCORE",10,14,11,"#9aa3b2"),fe(Lr(u.score,6),10,32,20,"#fff");var i=Math.floor((u.day-1)/7)+1;fe(Pr[(u.day-1)%7].slice(0,3)+(i>1?" WK"+i:""),ge/2,14,13,"#ffd23f","center"),fe((u.bonus?"PARTY ":"ORDERS ")+u.stats.delivered+"/"+u.stats.orders,ge/2,33,13,u.stats.missed&&!u.bonus?"#ffb4b4":"#cfd6e3","center"),fe("$"+Ae.bank,ge-86,32,16,"#9cf07a","right"),Pt(ge-76,6,32,30,6,"#2a2e3a"),ze(ge-66,13,4,16,"#fff"),ze(ge-58,13,4,16,"#fff"),Pt(ge-38,6,32,30,6,"#2a2e3a"),fe(Ae.mute?"OFF":"SND",ge-22,21,10,Ae.mute?"#ff8a8a":"#fff","center"),Yl(18,50,20,u.lifeFlash>0?.82+.3*Math.abs(Math.sin(u.lifeFlash*14)):.82),Fh(126,51,7),fe(u.bonus?"FREE":"x"+u.pizzas,138,51,15,u.bonus?"#9cf07a":u.pizzas===0?"#ff5964":u.pizzas<=2?"#ffd23f":"#fff"),fe("HOT",190,51,11,"#ff9f1c"),ze(216,45,168,12,"#2a2e3a");var e=u.heat>60?"#ff5a1f":u.heat>25?"#ff9f1c":"#5a8dd6";ze(218,47,164*u.heat/100,8,e),fe("TIP x"+(1+u.heat/100).toFixed(1),ge-10,51,12,"#fff","right")}function kh(){var i=Wt(u.bannerT,0,1);if(le.globalAlpha=i,ze(0,268,ge,u.bonus?156:180,"rgba(15,16,22,0.82)"),fe("WEEK "+Vl(u.day)+"  -  "+u.hood.name+(u.dusk?"  -  EVENING":""),ge/2,290,13,"#9cf07a","center"),u.bonus)fe("PIZZA PARTY!",ge/2,328,34,"#ffd23f","center","#000"),fe("BONUS ROUND  -  EVERY HOUSE ORDERED",ge/2,366,14,"#fff","center"),fe("Free pizza. Double tips. Nothing in the way.",ge/2,398,13,"#9cf07a","center");else{fe(Pr[(u.day-1)%7],ge/2,326,34,"#ffd23f","center","#000"),fe(u.stats.orders+" ORDERS  -  DELIVER AT LEAST HALF",ge/2,364,14,"#fff","center");var e=Math.min(Ua,Math.max(3,u.lives));fe("LIVES",ge/2-e*11-12,399,13,"#cfd6e3","right"),Yl(ge/2-e*11+10,397,22,1),fe(u.V.perkShort,ge/2,430,12,"#5ad1ff","center")}le.globalAlpha=1}function Hh(){le.globalAlpha=Wt(u.hintT,0,1),ze(0,ht-74,ge,74,"rgba(15,16,22,0.82)"),u.isTouch?(fe("DRAG to steer  -  higher = faster",ge/2,ht-52,14,"#fff","center"),fe("TAP left or right side to THROW",ge/2,ht-28,14,"#ffd23f","center")):(fe("ARROWS steer  -  higher = faster",ge/2,ht-52,14,"#fff","center"),fe("Z throw left   X throw right   SPACE auto",ge/2,ht-28,14,"#ffd23f","center")),le.globalAlpha=1}function Gh(){for(var i=He.VH-He.bottom-(u.hintT>0?148:72),e=[[-1,8,u.flashL],[1,ge-128,u.flashR]],t=0;t<2;t++){var n=e[t][0],r=e[t][1],s=Wt(e[t][2]*4,0,1);Pt(r,i,120,56,14,"rgba(15,16,22,"+(.38+.2*s).toFixed(2)+")"),le.strokeStyle="rgba(255,210,63,"+(.45+.55*s).toFixed(2)+")",le.lineWidth=2,le.strokeRect(r+3,i+3,114,50);var a=n<0?r+22:r+98;Oa(a+n*12,i+28,a-n*6,i+16,a-n*6,i+40,"#ffd23f"),fe("THROW",n<0?r+76:r+44,i+21,13,"#fff","center"),fe(n<0?"LEFT":"RIGHT",n<0?r+76:r+44,i+38,13,"#ffd23f","center")}}function Vh(){var i,e;for(i=0;i<u.parts.length;i++){var t=u.parts[i];le.globalAlpha=Wt(1-t.t/t.life,0,1),ze(t.x,t.y,t.s,t.s,t.col)}if(le.globalAlpha=1,u.state==="play"||u.state==="pause"){for(i=0;i<u.obs.length;i++){var n=u.obs[i];n.y<u.cam-60||n.y>u.cam+1300||(n.type==="dcar"&&n.st===1?(e=u.project(n.x,n.y,40),fe("!",e.x,e.y,18,"#ffd23f","center","#000")):n.type==="dog"&&(n.st===1||n.st===2)&&n.t%.6<.3?(e=u.project(n.x,n.y,34),fe("GRR",e.x,e.y,11,"#fff","center","#000")):n.type==="dog"&&n.st===4?(e=u.project(n.x,n.y,34),fe("YUM",e.x,e.y,11,"#9cf07a","center","#000")):n.type==="pickup"&&!u.bonus?(e=u.project(n.x,n.y,34),fe("PIZZA",e.x,e.y-Math.sin(n.t*5)*2,11,"#ffd23f","center","#000")):n.type==="life"&&(e=u.project(n.x,n.y,44),fe("+1 LIFE",e.x,e.y-Math.sin(n.t*5)*2,12,"#ff6b7d","center","#000")))}for(i=0;i<u.lots.length;i++){var r=u.lots[i];if(!(!r.cust||r.delivered||r.missed||r.y0<u.cam-260||r.y0>u.cam+1300)){if(r.c.type==="pacer")e=u.project(r.c.x,r.c.y,62),fe("!",e.x,e.y,14,"#ffd23f","center","#000");else if(r.c.type==="quit"&&!r.c.gone&&r.c.wait>=0){e=u.project(r.c.x,r.c.y,62);var s=Wt(r.c.wait/u.T.patience,0,1);ze(e.x-13,e.y-4,26,7,"rgba(15,16,22,0.85)"),ze(e.x-12,e.y-3,24*s,5,s>.4?"#ffd23f":"#ff5964")}}}u.streak>=2&&(e=u.project(Te.x+u.V.w/2+16,u.cam+ht-Te.sy,30),fe("x"+Math.min(u.streak,5),e.x,e.y,15,"#ffd23f","center","#000"))}for(i=0;i<u.pops.length;i++){var a=u.pops[i];e=a.sx!=null?{x:a.sx,y:a.sy+(He.VH-ht)}:u.project(a.wx,a.wy,20),le.globalAlpha=Wt(1.2-a.t,0,1),fe(a.txt,Wt(e.x,70,ge-70),e.y-a.lift-38*a.t,a.size,a.col,"center","#000")}le.globalAlpha=1}function Wh(){var i=u.fps;i&&(Pt(6,66,214,52,8,"rgba(15,16,22,0.8)"),fe(i.now+" fps   avg "+i.avg+"   low "+i.low,14,82,12,"#9cf07a"),fe(i.calls+" draws   "+i.tris+"k triangles",14,102,11,"#cfd6e3"))}function Lt(i,e,t,n,r,s,a){a=a||{};var o=a.disabled?"#3a3d47":a.primary?"#d7263d":"#2f3442";Pt(i,e+4,t,n,10,"rgba(0,0,0,0.45)"),Pt(i,e,t,n,10,o),a.primary&&!a.disabled&&(le.fillStyle="rgba(255,255,255,0.14)",le.fillRect(i+6,e+4,t-12,n/2-4)),fe(r,i+t/2,e+n/2+1,a.size||18,a.disabled?"#8b8f9a":"#fff","center"),a.disabled||u.buttons.push({x:i,y:e+u.uiOy,w:t,h:n,fn:s,key:a.key||""})}function ff(i){ze(-He.ox/He.s-2,-2,He.VW+4,He.VH+4,i)}function Fs(i){ff("rgba(12,13,18,"+i+")")}function pi(i,e){le.save(),le.translate(0,i),u.uiOy=i,e(),le.restore(),u.uiOy=0}function Xh(){var i=Math.sin(u.tGame*2)*4;le.save(),le.translate(ge/2,150+i),le.rotate(-.04),fe("PAYTON",4,4,74,"#7d0013","center"),fe("PAYTON",0,0,74,"#ffd23f","center","#1a0b0b"),fe("PIZZA",4,82,86,"#7d0013","center"),fe("PIZZA",0,78,86,"#ff4d2e","center","#1a0b0b"),le.restore(),Ta(ge/2,292+i,26),fe("HOT. FAST. HAND-DELIVERED.",ge/2,352,15,"#fff","center","#000"),Ae.cont>1&&u.opt.day==null?(Lt(90,378,300,58,"CONTINUE  "+Pr[(Ae.cont-1)%7].slice(0,3)+" (DAY "+Ae.cont+")",function(){Je("ui"),rf()},{primary:!0,size:19,key:"Enter"}),Lt(90,444,300,42,"NEW RUN FROM MONDAY",function(){Je("ui"),vs()},{size:15,key:"KeyN"}),Lt(90,494,300,44,"GARAGE   $"+Ae.bank,function(){Je("ui"),u.garageFrom="title",u.state="garage"},{size:16,key:"KeyG"})):(Lt(90,392,300,62,"START SHIFT",function(){Je("ui"),vs()},{primary:!0,size:24,key:"Enter"}),Lt(90,470,300,52,"GARAGE   $"+Ae.bank,function(){Je("ui"),u.garageFrom="title",u.state="garage"},{key:"KeyG"})),Pt(40,548,400,150,12,"rgba(15,16,22,0.85)"),fe("HOW TO PLAY",ge/2,568,14,"#ffd23f","center"),fe("Pizza on the FRONT DOOR = points",ge/2,592,13,"#fff","center"),fe("Pizza into the customer's HANDS = bonus",ge/2,612,13,"#fff","center"),fe("Gray houses did not order. Mind the windows.",ge/2,632,12,"#cfd6e3","center"),u.isTouch?(fe("DRAG to steer - TAP a side to throw",ge/2,660,13,"#9cf07a","center"),fe("Works with a keyboard too",ge/2,680,11,"#9aa3b2","center")):(fe("ARROWS steer - Z / X throw - SPACE auto",ge/2,660,13,"#9cf07a","center"),fe("P pause - M sound - works on phones too",ge/2,680,11,"#9aa3b2","center")),fe("HIGH SCORE "+Lr(Ae.hi,6)+(Ae.bestDay?"   BEST DAY "+Ae.bestDay:""),ge/2,728,14,"#fff","center","#000"),fe("RIDE: "+Tr[Ae.ride].name,ge/2,754,13,"#ffd23f","center","#000")}function Yh(i,e,t,n){Pt(i+5,e+6,t,n,6,"rgba(0,0,0,0.4)"),ze(i,e,t,n,"#fff8e7"),le.fillStyle="#fff8e7";for(var r=0;r<t;r+=16)le.beginPath(),le.moveTo(i+r,e+n),le.lineTo(i+r+8,e+n+8),le.lineTo(i+r+16,e+n),le.fill()}function Nt(i,e,t,n){fe(i,84,t,15,"#3a2a20"),fe(e,ge-84,t,15,n||"#3a2a20","right")}function ji(i){le.fillStyle="#b9a98f";for(var e=84;e<ge-84;e+=10)le.fillRect(e,i,6,2)}function qh(){var i=u.day%7===0;if(Yh(60,78,360,558),Ta(ge/2,116,13),fe("PAYTON PIZZA",ge/2,154,22,"#b3001b","center"),u.report.bonus){fe("PIZZA PARTY TICKET",ge/2,178,13,"#3a2a20","center"),ji(196),Nt("HOUSES SERVED",u.stats.delivered+" / "+u.stats.orders,226),Nt("  HAND-OFFS",String(u.stats.hand),254,"#b3001b"),Nt("  FRONT DOORS",String(u.stats.door),282),Nt("WINDOWS SMASHED",String(u.stats.smash),310,u.stats.smash?"#b3001b":"#3a2a20"),ji(334),Nt("TIPS (DOUBLE)",u.stats.tips<0?"-$"+-u.stats.tips:"$"+u.stats.tips,362),Nt("PARTY PAY","$"+u.report.pay,390),u.report.perfect&&Nt("EVERY HOUSE SERVED","$"+u.report.perfect,418,"#1f7a3f"),ji(446),Nt("BANK","$"+Ae.bank,474,"#1f7a3f"),Nt("SCORE",Lr(u.score,6),502),fe(u.report.title,ge/2,560,17,"#b3001b","center"),Lt(60,664,170,58,"GARAGE",function(){Je("ui"),u.garageFrom="report",u.state="garage"},{key:"KeyG"}),Lt(250,664,170,58,"NEXT WEEK",function(){Je("ui"),Sc()},{primary:!0,key:"Enter"});return}fe(Pr[(u.day-1)%7]+" SHIFT TICKET",ge/2,178,13,"#3a2a20","center"),ji(196),Nt("ORDERS DELIVERED",u.stats.delivered+" / "+u.stats.orders,222),Nt("  HAND-OFFS",String(u.stats.hand),248,"#b3001b"),Nt("  FRONT DOORS",String(u.stats.door),274),Nt("MISSED ORDERS",String(u.stats.missed),300,u.stats.missed?"#b3001b":"#3a2a20"),Nt("WINDOWS SMASHED",String(u.stats.smash),326,u.stats.smash?"#b3001b":"#3a2a20"),Nt("WIPEOUTS",String(u.stats.crashes),352,u.stats.crashes?"#b3001b":"#3a2a20"),ji(372),Nt("TIPS",u.stats.tips<0?"-$"+-u.stats.tips:"$"+u.stats.tips,398),Nt("SHIFT PAY","$"+u.report.pay,424),u.report.perfect&&Nt("PERFECT SHIFT","$"+u.report.perfect,450,"#1f7a3f"),ji(470),Nt("BANK","$"+Ae.bank,496,"#1f7a3f"),Nt("SCORE",Lr(u.score,6),522),fe("LIVES"+(u.report.healed?"  (+1 FOR FINISHING)":""),84,552,15,"#3a2a20");var e=Math.min(Ua,Math.max(3,u.lives));Yl(ge-84-(e-1)*20-6,550,20,.8),fe(u.report.title,ge/2,596,17,"#b3001b","center"),Lt(60,664,170,58,"GARAGE",function(){Je("ui"),u.garageFrom="report",u.state="garage"},{key:"KeyG"}),Lt(250,664,170,58,i?"BONUS ROUND":"NEXT SHIFT",function(){Je("ui"),Sc()},{primary:!0,size:i?16:18,key:"Enter"})}function Zh(){fe(u.overWhy==="fired"?"YOU'RE FIRED":"WIPED OUT",ge/2,180,46,"#ff4d2e","center","#000"),fe(u.overWhy==="fired"?"Fewer than half the orders got delivered.":"Payton is out of lives.",ge/2,228,14,"#fff","center"),Pt(70,270,340,200,12,"rgba(15,16,22,0.9)"),fe("SCORE",110,306,15,"#9aa3b2"),fe(Lr(u.score,6),370,306,22,"#fff","right"),fe("HIGH SCORE",110,344,15,"#9aa3b2"),fe(Lr(Ae.hi,6),370,344,22,u.newHi?"#ffd23f":"#fff","right"),fe("REACHED",110,382,15,"#9aa3b2"),fe(Pr[(u.day-1)%7].slice(0,3)+" (DAY "+u.day+")",370,382,16,"#fff","right"),fe("BANK",110,420,15,"#9aa3b2"),fe("$"+Ae.bank,370,420,22,"#9cf07a","right"),u.newHi&&fe("NEW HIGH SCORE!",ge/2,452,14,"#ffd23f","center"),u.day>1&&u.opt.day==null?(fe("Continue keeps your day, bank and rides.",ge/2,494,13,"#cfd6e3","center"),fe("Your score starts again from zero.",ge/2,514,13,"#cfd6e3","center"),Lt(90,540,300,62,"CONTINUE  "+Pr[(u.day-1)%7],function(){Je("ui"),rf()},{primary:!0,size:21,key:"Enter"}),Lt(90,616,300,46,"NEW RUN FROM MONDAY",function(){Je("ui"),vs()},{size:15,key:"KeyN"})):(fe("Your bank and rides are kept.",ge/2,500,13,"#cfd6e3","center"),Lt(90,540,300,62,"TRY AGAIN",function(){Je("ui"),vs()},{primary:!0,size:24,key:"Enter"})),Lt(90,u.day>1&&u.opt.day==null?674:618,145,46,"GARAGE",function(){Je("ui"),u.garageFrom="title",u.state="garage"},{size:15,key:"KeyG"}),Lt(245,u.day>1&&u.opt.day==null?674:618,145,46,"TITLE",function(){Je("ui"),Fa()},{size:15,key:"Escape"})}function Kh(){le.fillStyle="#22262f";for(var i=0;i<ht;i+=40)le.fillRect(0,i,ge,2);fe("GARAGE",20,38,30,"#ffd23f"),fe("BANK $"+Ae.bank,ge-20,38,20,"#9cf07a","right");for(var e=0;e<4;e++){var t=Tr[e],n=74+e*158,r=Ae.owned[e],s=Ae.ride===e;Pt(14,n,ge-28,146,12,s?"#333a4d":"#272b37"),s&&(le.strokeStyle="#ffd23f",le.lineWidth=3,le.strokeRect(15.5,n+1.5,ge-31,143)),Pt(26,n+12,112,122,8,"#44464f"),le.fillStyle="#f5d547",le.fillRect(80,n+18,3,22),le.fillRect(80,n+64,3,22),le.fillRect(80,n+108,3,20),u.ridePics?le.drawImage(u.ridePics[e],26,n+12,112,122):(le.save(),le.translate(82,n+73),le.scale(1.7,1.7),Oh(e,0,0,0,1,u.tGame),le.restore()),fe(t.name,152,n+24,18,"#fff"),fe(t.blurb[0],152,n+44,12,"#cfd6e3"),fe(t.blurb[1],152,n+58,12,"#cfd6e3"),fe(t.perkText[0],152,n+74,12,"#5ad1ff"),fe(t.perkText[1],152,n+88,12,"#5ad1ff"),fe("SPEED",152,n+102,11,"#9aa3b2");for(var a=0;a<6;a++)ze(196+a*11,n+97,8,10,a<Math.round((t.spd-.9)*14)?"#ff9f1c":"#3a3f4d");fe("CARRY "+t.cap,280,n+102,11,"#9aa3b2"),(function(o,l){s?Lt(152,n+110,300,30,"RIDING",null,{disabled:!0,size:14}):r?Lt(152,n+110,300,30,"RIDE THIS",function(){Ae.ride=o,u.V=Tr[o],ui(),Je("ui")},{size:15,key:"Digit"+(o+1)}):Ae.bank>=l.price?Lt(152,n+110,300,30,"BUY  $"+l.price,function(){Ae.bank-=l.price,Ae.owned[o]=!0,Ae.ride=o,u.V=Tr[o],ui(),Je("buy")},{primary:!0,size:15,key:"Digit"+(o+1)}):Lt(152,n+110,300,30,"$"+l.price+"  (NEED $"+(l.price-Ae.bank)+" MORE)",null,{disabled:!0,size:13})})(e,t)}Lt(140,726,200,54,"BACK",function(){Je("ui"),u.state=u.garageFrom==="report"?"report":"title",u.state==="title"&&Fa()},{primary:!0,key:"Escape"})}function Jh(){fe("PAUSED",ge/2,300,48,"#ffd23f","center","#000"),Lt(90,370,300,62,"RESUME",function(){u.state="play"},{primary:!0,size:24,key:"Enter"}),Lt(90,448,300,52,"QUIT TO TITLE",function(){ui(),Fa()},{}),Lt(90,516,300,46,"EFFECTS: "+(Ae.low?"LOW":"FULL"),function(){Ae.low=!Ae.low,ui(),Je("ui"),u.setEffects&&u.setEffects(Ae.low)},{size:15,key:"KeyE"})}function $h(){var i=He.s*He.dpr,e=(He.VH-ht)/2,t=He.VH-ht;if(le.setTransform(1,0,0,1,0,0),le.clearRect(0,0,fn.width,fn.height),le.setTransform(i,0,0,i,He.ox*He.dpr,0),u.buttons=[],u.uiOy=0,u.state==="garage"){ff("#1b1e27"),pi(e,Kh);return}Vh(),(u.state==="play"||u.state==="pause")&&(u.isTouch&&u.state==="play"&&Gh(),ze(0,-2,ge,u.hudTop+2,"rgba(15,16,22,0.9)"),pi(u.hudTop,zh),u.bannerT>0?pi(e,kh):u.hintT>0&&pi(t-He.bottom,Hh)),u.state==="title"?(Fs(.5),pi(e,Xh)):u.state==="report"?(Fs(.6),pi(e,qh)):u.state==="over"?(Fs(.7),pi(e,Zh)):u.state==="pause"&&(Fs(.65),pi(e,Jh)),u.opt.fps&&Wh()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ql="170",jh=0,Rc=1,Qh=2,hf=1,df=2,ri=3,Ti=0,dn=1,Xn=2,Si=0,Ar=1,xs=2,Cc=3,Pc=4,ed=5,Oi=100,td=101,nd=102,id=103,rd=104,sd=200,ad=201,od=202,ld=203,Ho=204,Go=205,cd=206,ud=207,fd=208,hd=209,dd=210,pd=211,md=212,gd=213,_d=214,Vo=0,Wo=1,Xo=2,Dr=3,Yo=4,qo=5,Zo=6,Ko=7,pf=0,vd=1,xd=2,Ei=0,Md=1,yd=2,Sd=3,Ed=4,bd=5,Td=6,Ad=7,mf=300,Ir=301,Ur=302,Jo=303,$o=304,Ba=306,jo=1e3,zi=1001,Qo=1002,ln=1003,wd=1004,Os=1005,qn=1006,ja=1007,ki=1008,fi=1009,gf=1010,_f=1011,Ms=1012,Zl=1013,Xi=1014,Zn=1015,Ts=1016,Kl=1017,Jl=1018,Nr=1020,vf=35902,xf=1021,Mf=1022,Hn=1023,yf=1024,Sf=1025,wr=1026,Fr=1027,za=1028,$l=1029,Ef=1030,jl=1031,Ql=1033,ma=33776,ga=33777,_a=33778,va=33779,el=35840,tl=35841,nl=35842,il=35843,rl=36196,sl=37492,al=37496,ol=37808,ll=37809,cl=37810,ul=37811,fl=37812,hl=37813,dl=37814,pl=37815,ml=37816,gl=37817,_l=37818,vl=37819,xl=37820,Ml=37821,xa=36492,yl=36494,Sl=36495,bf=36283,El=36284,bl=36285,Tl=36286,Rd=3200,Cd=3201,Tf=0,Pd=1,yi="",Mn="srgb",kr="srgb-linear",ka="linear",xt="srgb",Qi=7680,Lc=519,Ld=512,Dd=513,Id=514,Af=515,Ud=516,Nd=517,Fd=518,Od=519,Al=35044,Dc="300 es",si=2e3,Aa=2001;class Hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,wl=180/Math.PI;function li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function rn(i,e,t){return Math.max(e,Math.min(t,i))}function Bd(i,e){return(i%e+e)%e}function eo(i,e,t){return(1-t)*i+t*e}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,r,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],d=n[2],m=n[5],_=n[8],x=r[0],g=r[3],p=r[6],A=r[1],b=r[4],M=r[7],U=r[2],C=r[5],P=r[8];return s[0]=a*x+o*A+l*U,s[3]=a*g+o*b+l*C,s[6]=a*p+o*M+l*P,s[1]=c*x+f*A+h*U,s[4]=c*g+f*b+h*C,s[7]=c*p+f*M+h*P,s[2]=d*x+m*A+_*U,s[5]=d*g+m*b+_*C,s[8]=d*p+m*M+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*s*f+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,m=c*s-a*l,_=t*h+n*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-f*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(f*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new Qe;function wf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zd(){const i=wa("canvas");return i.style.display="block",i}const Ic={};function os(i){i in Ic||(Ic[i]=!0,console.warn(i))}function kd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Hd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lt={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(i.r=Rr(i.r),i.g=Rr(i.g),i.b=Rr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?ka:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Uc=[.64,.33,.3,.6,.15,.06],Nc=[.2126,.7152,.0722],Fc=[.3127,.329],Oc=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt.define({[kr]:{primaries:Uc,whitePoint:Fc,transfer:ka,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:Nc,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:Uc,whitePoint:Fc,transfer:xt,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:Nc,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let er;class Vd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=wa("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wd=0;class Rf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(no(r[a].image)):s.push(no(r[a]))}else s=no(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xd=0;class sn extends Hr{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=zi,r=zi,s=qn,a=ki,o=Hn,l=fi,c=sn.DEFAULT_ANISOTROPY,f=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=li(),this.name="",this.source=new Rf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=mf;sn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],_=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(m+1)/2,U=(p+1)/2,C=(f+d)/4,P=(h+x)/4,D=(_+g)/4;return b>M&&b>U?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=C/n,s=P/n):M>U?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=C/r,s=D/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=P/s,r=D/s),this.set(n,r,s,t),this}let A=Math.sqrt((g-_)*(g-_)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(h-x)/A,this.z=(d-f)/A,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yd extends Hr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Yd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cf extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qd extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],f=n[r+2],h=n[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==d||c!==m||f!==_){let g=1-o;const p=l*d+c*m+f*_+h*x,A=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const U=Math.sqrt(b),C=Math.atan2(U,p*A);g=Math.sin(g*C)/U,o=Math.sin(o*C)/U}const M=o*A;if(l=l*g+d*M,c=c*g+m*M,f=f*g+_*M,h=h*g+x*M,g===1-o){const U=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=U,c*=U,f*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],f=n[r+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+f*h+l*m-c*d,e[t+1]=l*_+f*d+c*h-o*m,e[t+2]=c*_+f*m+o*d-l*h,e[t+3]=f*_-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(r/2),h=o(s/2),d=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h-d*m*_;break;case"YXZ":this._x=d*f*h+c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h+d*m*_;break;case"ZXY":this._x=d*f*h-c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h-d*m*_;break;case"ZYX":this._x=d*f*h-c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h+d*m*_;break;case"YZX":this._x=d*f*h+c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h-d*m*_;break;case"XZY":this._x=d*f*h-c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-r*o,this._w=a*f-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),h=Math.sin((1-t)*f)/c,d=Math.sin(t*f)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),f=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*f,this.y=n+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new I,zc=new Gr;class Ki{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(s,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),zs.subVectors(this.max,Zr),tr.subVectors(e.a,Zr),nr.subVectors(e.b,Zr),ir.subVectors(e.c,Zr),mi.subVectors(nr,tr),gi.subVectors(ir,nr),Ci.subVectors(tr,ir);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ci.z,Ci.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ci.z,0,-Ci.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ci.y,Ci.x,0];return!ro(t,tr,nr,ir,zs)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,tr,nr,ir,zs))?!1:(ks.crossVectors(mi,gi),t=[ks.x,ks.y,ks.z],ro(t,tr,nr,ir,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new I,new I,new I,new I,new I,new I,new I,new I],Un=new I,Bs=new Ki,tr=new I,nr=new I,ir=new I,mi=new I,gi=new I,Ci=new I,Zr=new I,zs=new I,ks=new I,Pi=new I;function ro(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Pi.fromArray(i,s);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),f=n.dot(Pi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Zd=new Ki,Kr=new I,so=new I;class As{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const t=Kr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Kr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(so)),this.expandByPoint(Kr.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new I,ao=new I,Hs=new I,_i=new I,oo=new I,Gs=new I,lo=new I;class Kd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ao.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(ao);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Hs),o=_i.dot(this.direction),l=-_i.dot(Hs),c=_i.lengthSq(),f=Math.abs(1-a*a);let h,d,m,_;if(f>0)if(h=a*l-o,d=a*o-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const x=1/f;h*=x,d*=x,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ao).addScaledVector(Hs,d),m}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),r=ei.dot(ei)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,s){oo.subVectors(t,e),Gs.subVectors(n,e),lo.crossVectors(oo,Gs);let a=this.direction.dot(lo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const l=o*this.direction.dot(Gs.crossVectors(_i,Gs));if(l<0)return null;const c=o*this.direction.dot(oo.cross(_i));if(c<0||l+c>a)return null;const f=-o*_i.dot(lo);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,a,o,l,c,f,h,d,m,_,x,g){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,f,h,d,m,_,x,g)}set(e,t,n,r,s,a,o,l,c,f,h,d,m,_,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=d,p[3]=m,p[7]=_,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,m=a*h,_=o*f,x=o*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,_=c*f,x=c*h;t[0]=d+x*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=m*o-_,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,_=c*f,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*f,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*f,m=a*h,_=o*f,x=o*h;t[0]=l*f,t[4]=_*c-m,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*f,t[4]=x-d*h,t[8]=_*h+m,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=d*h+x,t[5]=a*f,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*f,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jd,e,$d)}lookAt(e,t,n){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),vi.crossVectors(n,_n),vi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),vi.crossVectors(n,_n)),vi.normalize(),Vs.crossVectors(_n,vi),r[0]=vi.x,r[4]=Vs.x,r[8]=_n.x,r[1]=vi.y,r[5]=Vs.y,r[9]=_n.y,r[2]=vi.z,r[6]=Vs.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],d=n[9],m=n[13],_=n[2],x=n[6],g=n[10],p=n[14],A=n[3],b=n[7],M=n[11],U=n[15],C=r[0],P=r[4],D=r[8],T=r[12],S=r[1],L=r[5],H=r[9],z=r[13],W=r[2],Z=r[6],Y=r[10],ee=r[14],X=r[3],pe=r[7],Se=r[11],Pe=r[15];return s[0]=a*C+o*S+l*W+c*X,s[4]=a*P+o*L+l*Z+c*pe,s[8]=a*D+o*H+l*Y+c*Se,s[12]=a*T+o*z+l*ee+c*Pe,s[1]=f*C+h*S+d*W+m*X,s[5]=f*P+h*L+d*Z+m*pe,s[9]=f*D+h*H+d*Y+m*Se,s[13]=f*T+h*z+d*ee+m*Pe,s[2]=_*C+x*S+g*W+p*X,s[6]=_*P+x*L+g*Z+p*pe,s[10]=_*D+x*H+g*Y+p*Se,s[14]=_*T+x*z+g*ee+p*Pe,s[3]=A*C+b*S+M*W+U*X,s[7]=A*P+b*L+M*Z+U*pe,s[11]=A*D+b*H+M*Y+U*Se,s[15]=A*T+b*z+M*ee+U*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],_=e[3],x=e[7],g=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*m-n*l*m)+x*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*f-s*l*f)+g*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*f-n*c*f)+p*(-r*o*f-t*l*h+t*o*d+r*a*h-n*a*d+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],_=e[12],x=e[13],g=e[14],p=e[15],A=h*g*c-x*d*c+x*l*m-o*g*m-h*l*p+o*d*p,b=_*d*c-f*g*c-_*l*m+a*g*m+f*l*p-a*d*p,M=f*x*c-_*h*c+_*o*m-a*x*m-f*o*p+a*h*p,U=_*h*l-f*x*l-_*o*d+a*x*d+f*o*g-a*h*g,C=t*A+n*b+r*M+s*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=A*P,e[1]=(x*d*s-h*g*s-x*r*m+n*g*m+h*r*p-n*d*p)*P,e[2]=(o*g*s-x*l*s+x*r*c-n*g*c-o*r*p+n*l*p)*P,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*m-n*l*m)*P,e[4]=b*P,e[5]=(f*g*s-_*d*s+_*r*m-t*g*m-f*r*p+t*d*p)*P,e[6]=(_*l*s-a*g*s-_*r*c+t*g*c+a*r*p-t*l*p)*P,e[7]=(a*d*s-f*l*s+f*r*c-t*d*c-a*r*m+t*l*m)*P,e[8]=M*P,e[9]=(_*h*s-f*x*s-_*n*m+t*x*m+f*n*p-t*h*p)*P,e[10]=(a*x*s-_*o*s+_*n*c-t*x*c-a*n*p+t*o*p)*P,e[11]=(f*o*s-a*h*s-f*n*c+t*h*c+a*n*m-t*o*m)*P,e[12]=U*P,e[13]=(f*x*r-_*h*r+_*n*d-t*x*d-f*n*g+t*h*g)*P,e[14]=(_*o*r-a*x*r-_*n*l+t*x*l+a*n*g-t*o*g)*P,e[15]=(a*h*r-f*o*r+f*n*l-t*h*l-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+n,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,h=o+o,d=s*c,m=s*f,_=s*h,x=a*f,g=a*h,p=o*h,A=l*c,b=l*f,M=l*h,U=n.x,C=n.y,P=n.z;return r[0]=(1-(x+p))*U,r[1]=(m+M)*U,r[2]=(_-b)*U,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(d+p))*C,r[6]=(g+A)*C,r[7]=0,r[8]=(_+b)*P,r[9]=(g-A)*P,r[10]=(1-(d+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=rr.set(r[0],r[1],r[2]).length();const a=rr.set(r[4],r[5],r[6]).length(),o=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,f=1/a,h=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=si){const l=this.elements,c=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let m,_;if(o===si)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Aa)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=si){const l=this.elements,c=1/(t-e),f=1/(n-r),h=1/(a-s),d=(t+e)*c,m=(n+r)*f;let _,x;if(o===si)_=(a+s)*h,x=-2*h;else if(o===Aa)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rr=new I,Nn=new vt,Jd=new I(0,0,0),$d=new I(1,1,1),vi=new I,Vs=new I,_n=new I,kc=new vt,Hc=new Gr;class Kn{constructor(e=0,t=0,n=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Pf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jd=0;const Gc=new I,sr=new Gr,ti=new vt,Ws=new I,Jr=new I,Qd=new I,ep=new Gr,Vc=new I(1,0,0),Wc=new I(0,1,0),Xc=new I(0,0,1),Yc={type:"added"},tp={type:"removed"},ar={type:"childadded",child:null},co={type:"childremoved",child:null};class Yt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new I,t=new Kn,n=new Gr,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Qe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Jr,Ws,this.up):ti.lookAt(Ws,Jr,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(ti),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tp),co.child=e,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,Qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new I(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new I,ni=new I,uo=new I,ii=new I,or=new I,lr=new I,qc=new I,fo=new I,ho=new I,po=new I,mo=new Dt,go=new Dt,_o=new Dt;class Pn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Fn.subVectors(r,t),ni.subVectors(n,t),uo.subVectors(e,t);const a=Fn.dot(Fn),o=Fn.dot(ni),l=Fn.dot(uo),c=ni.dot(ni),f=ni.dot(uo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(e,t),go.fromBufferAttribute(e,n),_o.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(mo,s.x),a.addScaledVector(go,s.y),a.addScaledVector(_o,s.z),a}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),ni.subVectors(e,t),Fn.cross(ni).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Fn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;or.subVectors(r,n),lr.subVectors(s,n),fo.subVectors(e,n);const l=or.dot(fo),c=lr.dot(fo);if(l<=0&&c<=0)return t.copy(n);ho.subVectors(e,r);const f=or.dot(ho),h=lr.dot(ho);if(f>=0&&h<=f)return t.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(or,a);po.subVectors(e,s);const m=or.dot(po),_=lr.dot(po);if(_>=0&&m<=_)return t.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(lr,o);const g=f*_-m*h;if(g<=0&&h-f>=0&&m-_>=0)return qc.subVectors(s,r),o=(h-f)/(h-f+(m-_)),t.copy(r).addScaledVector(qc,o);const p=1/(g+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(or,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=Bd(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=vo(a,s,e+1/3),this.g=vo(a,s,e),this.b=vo(a,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=Lf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return lt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(rn(Qt.r*255,0,255))*65536+Math.round(rn(Qt.g*255,0,255))*256+Math.round(rn(Qt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Mn){lt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Xs);const n=eo(xi.h,Xs.h,t),r=eo(xi.s,Xs.s,t),s=eo(xi.l,Xs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new nt;nt.NAMES=Lf;let np=0;class Vr extends Hr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=li(),this.name="",this.blending=Ar,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Go,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kt extends Vr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new I,Ys=new ce;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}}class Df extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class If extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ip=0;const Tn=new vt,xo=new Yt,cr=new I,vn=new Ki,$r=new Ki,Vt=new I;class mn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wf(e)?If:Df)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ut(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$r.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(vn.min,$r.min),vn.expandByPoint(Vt),Vt.addVectors(vn.max,$r.max),vn.expandByPoint(Vt)):(vn.expandByPoint($r.min),vn.expandByPoint($r.max))}vn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Vt.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(e,c),Vt.add(cr)),r=Math.max(r,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;const c=new I,f=new I,h=new I,d=new ce,m=new ce,_=new ce,x=new I,g=new I;function p(D,T,S){c.fromBufferAttribute(n,D),f.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,D),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,S),f.sub(c),h.sub(c),m.sub(d),_.sub(d);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(L),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(L),o[D].add(x),o[T].add(x),o[S].add(x),l[D].add(g),l[T].add(g),l[S].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,T=A.length;D<T;++D){const S=A[D],L=S.start,H=S.count;for(let z=L,W=L+H;z<W;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new I,M=new I,U=new I,C=new I;function P(D){U.fromBufferAttribute(r,D),C.copy(U);const T=o[D];b.copy(T),b.sub(U.multiplyScalar(U.dot(T))).normalize(),M.crossVectors(C,T);const L=M.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,L)}for(let D=0,T=A.length;D<T;++D){const S=A[D],L=S.start,H=S.count;for(let z=L,W=L+H;z<W;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,f=new I,h=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(f),l.add(f),c.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let m=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*f;for(let p=0;p<f;p++)d[_++]=c[m++]}return new pn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new vt,Li=new Kd,qs=new As,Kc=new I,Zs=new I,Ks=new I,Js=new I,Mo=new I,$s=new I,Jc=new I,js=new I;class At extends Yt{constructor(e=new mn,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){$s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(Mo.fromBufferAttribute(h,e),a?$s.addScaledVector(Mo,f):$s.addScaledVector(Mo.sub(t),f))}t.add($s)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(qs.containsPoint(Li.origin)===!1&&(Li.intersectSphere(qs,Kc)===null||Li.origin.distanceToSquared(Kc)>(e.far-e.near)**2))&&(Zc.copy(s).invert(),Li.copy(e.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const g=d[_],p=a[g.materialIndex],A=Math.max(g.start,m.start),b=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=A,U=b;M<U;M+=3){const C=o.getX(M),P=o.getX(M+1),D=o.getX(M+2);r=Qs(this,p,e,n,c,f,h,C,P,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){const A=o.getX(g),b=o.getX(g+1),M=o.getX(g+2);r=Qs(this,a,e,n,c,f,h,A,b,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const g=d[_],p=a[g.materialIndex],A=Math.max(g.start,m.start),b=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=A,U=b;M<U;M+=3){const C=M,P=M+1,D=M+2;r=Qs(this,p,e,n,c,f,h,C,P,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){const A=g,b=g+1,M=g+2;r=Qs(this,a,e,n,c,f,h,A,b,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function rp(i,e,t,n,r,s,a,o){let l;if(e.side===dn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Ti,o),l===null)return null;js.copy(o),js.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:i}}function Qs(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Zs),i.getVertexPosition(l,Ks),i.getVertexPosition(c,Js);const f=rp(i,e,t,n,Zs,Ks,Js,Jc);if(f){const h=new I;Pn.getBarycoord(Jc,Zs,Ks,Js,h),r&&(f.uv=Pn.getInterpolatedAttribute(r,o,l,c,h,new ce)),s&&(f.uv1=Pn.getInterpolatedAttribute(s,o,l,c,h,new ce)),a&&(f.normal=Pn.getInterpolatedAttribute(a,o,l,c,h,new I),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Pn.getNormal(Zs,Ks,Js,d.normal),f.face=d,f.barycoord=h}return f}class Ji extends mn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(f,3)),this.setAttribute("uv",new Ut(h,2));function _(x,g,p,A,b,M,U,C,P,D,T){const S=M/P,L=U/D,H=M/2,z=U/2,W=C/2,Z=P+1,Y=D+1;let ee=0,X=0;const pe=new I;for(let Se=0;Se<Y;Se++){const Pe=Se*L-z;for(let Ze=0;Ze<Z;Ze++){const dt=Ze*S-H;pe[x]=dt*A,pe[g]=Pe*b,pe[p]=W,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[g]=0,pe[p]=C>0?1:-1,f.push(pe.x,pe.y,pe.z),h.push(Ze/P),h.push(1-Se/D),ee+=1}}for(let Se=0;Se<D;Se++)for(let Pe=0;Pe<P;Pe++){const Ze=d+Pe+Z*Se,dt=d+Pe+Z*(Se+1),$=d+(Pe+1)+Z*(Se+1),ae=d+(Pe+1)+Z*Se;l.push(Ze,dt,ae),l.push(dt,$,ae),X+=6}o.addGroup(m,X,T),m+=X,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function on(i){const e={};for(let t=0;t<i.length;t++){const n=Or(i[t]);for(const r in n)e[r]=n[r]}return e}function sp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const ap={clone:Or,merge:on};var op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Vr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=op,this.fragmentShader=lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nf extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new I,$c=new ce,jc=new ce;class yn extends Nf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,$c,jc),t.subVectors(jc,$c)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ur=-90,fr=1;class cp extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(ur,fr,e,t);r.layers=this.layers,this.add(r);const s=new yn(ur,fr,e,t);s.layers=this.layers,this.add(s);const a=new yn(ur,fr,e,t);a.layers=this.layers,this.add(a);const o=new yn(ur,fr,e,t);o.layers=this.layers,this.add(o);const l=new yn(ur,fr,e,t);l.layers=this.layers,this.add(l);const c=new yn(ur,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(h,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ff extends sn{constructor(e,t,n,r,s,a,o,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,n,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class up extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ff(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ji(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Si});s.uniforms.tEquirect.value=t;const a=new At(r,s),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=qn),new cp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const yo=new I,fp=new I,hp=new Qe;class Ni{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=yo.subVectors(n,t).cross(fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hp.getNormalMatrix(e),r=this.coplanarPoint(yo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new As,ea=new I;class ec{constructor(e=new Ni,t=new Ni,n=new Ni,r=new Ni,s=new Ni,a=new Ni){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],m=r[8],_=r[9],x=r[10],g=r[11],p=r[12],A=r[13],b=r[14],M=r[15];if(n[0].setComponents(l-s,d-c,g-m,M-p).normalize(),n[1].setComponents(l+s,d+c,g+m,M+p).normalize(),n[2].setComponents(l+a,d+f,g+_,M+A).normalize(),n[3].setComponents(l-a,d-f,g-_,M-A).normalize(),n[4].setComponents(l-o,d-h,g-x,M-b).normalize(),t===si)n[5].setComponents(l+o,d+h,g+x,M+b).normalize();else if(t===Aa)n[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ea.x=r.normal.x>0?e.max.x:e.min.x,ea.y=r.normal.y>0?e.max.y:e.min.y,ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Of(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function dp(i){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],x=h[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const x=h[m];i.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Gn extends mn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=t/l,m=[],_=[],x=[],g=[];for(let p=0;p<f;p++){const A=p*d-a;for(let b=0;b<c;b++){const M=b*h-s;_.push(M,-A,0),x.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const b=A+c*p,M=A+c*(p+1),U=A+1+c*(p+1),C=A+1+c*p;m.push(b,M,C),m.push(M,U,C)}this.setIndex(m),this.setAttribute("position",new Ut(_,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.widthSegments,e.heightSegments)}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
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
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
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
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Op=`#define PI 3.141592653589793
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
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zp=`vec3 transformedNormal = objectNormal;
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
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
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
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
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
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
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
#endif`,h0=`struct PhysicalMaterial {
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
}`,d0=`
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E0=`#if defined( USE_POINTS_UV )
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
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
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
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
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
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j0=`float getShadowMask() {
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
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,ym=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,km=`#define TOON
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
}`,Hm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:_p,alphatest_fragment:vp,alphatest_pars_fragment:xp,aomap_fragment:Mp,aomap_pars_fragment:yp,batching_pars_vertex:Sp,batching_vertex:Ep,begin_vertex:bp,beginnormal_vertex:Tp,bsdfs:Ap,iridescence_fragment:wp,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Dp,color_fragment:Ip,color_pars_fragment:Up,color_pars_vertex:Np,color_vertex:Fp,common:Op,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:zp,displacementmap_pars_vertex:kp,displacementmap_vertex:Hp,emissivemap_fragment:Gp,emissivemap_pars_fragment:Vp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:Yp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Zp,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:a0,envmap_vertex:Jp,fog_vertex:$p,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:e0,gradientmap_pars_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:r0,lights_pars_begin:s0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:u0,lights_physical_fragment:f0,lights_physical_pars_fragment:h0,lights_fragment_begin:d0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:x0,map_fragment:M0,map_pars_fragment:y0,map_particle_fragment:S0,map_particle_pars_fragment:E0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:T0,morphinstance_vertex:A0,morphcolor_vertex:w0,morphnormal_vertex:R0,morphtarget_pars_vertex:C0,morphtarget_vertex:P0,normal_fragment_begin:L0,normal_fragment_maps:D0,normal_pars_fragment:I0,normal_pars_vertex:U0,normal_vertex:N0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:B0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:k0,opaque_fragment:H0,packing:G0,premultiplied_alpha_fragment:V0,project_vertex:W0,dithering_fragment:X0,dithering_pars_fragment:Y0,roughnessmap_fragment:q0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:K0,shadowmap_pars_vertex:J0,shadowmap_vertex:$0,shadowmask_pars_fragment:j0,skinbase_vertex:Q0,skinning_pars_vertex:em,skinning_vertex:tm,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:rm,tonemapping_fragment:sm,tonemapping_pars_fragment:am,transmission_fragment:om,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:um,uv_vertex:fm,worldpos_vertex:hm,background_vert:dm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:_m,cube_frag:vm,depth_vert:xm,depth_frag:Mm,distanceRGBA_vert:ym,distanceRGBA_frag:Sm,equirect_vert:Em,equirect_frag:bm,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:wm,meshbasic_frag:Rm,meshlambert_vert:Cm,meshlambert_frag:Pm,meshmatcap_vert:Lm,meshmatcap_frag:Dm,meshnormal_vert:Im,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:Fm,meshphysical_vert:Om,meshphysical_frag:Bm,meshtoon_vert:zm,meshtoon_frag:km,points_vert:Hm,points_frag:Gm,shadow_vert:Vm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:Ym},me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Wn={basic:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:on([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:on([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new nt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:on([me.points,me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:on([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:on([me.common,me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:on([me.sprite,me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:on([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:on([me.lights,me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Wn.physical={uniforms:on([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ta={r:0,b:0,g:0},Ii=new Kn,qm=new vt;function Zm(i,e,t,n,r,s,a){const o=new nt(0);let l=s===!0?0:1,c,f,h=null,d=0,m=null;function _(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function x(A){let b=!1;const M=_(A);M===null?p(o,l):M&&M.isColor&&(p(M,1),b=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(A,b){const M=_(b);M&&(M.isCubeTexture||M.mapping===Ba)?(f===void 0&&(f=new At(new Ji(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Or(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ii.copy(b.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(qm.makeRotationFromEuler(Ii)),f.material.toneMapped=lt.getTransfer(M.colorSpace)!==xt,(h!==M||d!==M.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,m=i.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new At(new Gn(2,2),new Ai({name:"BackgroundMaterial",uniforms:Or(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=lt.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,b){A.getRGB(ta,Uf(i)),n.buffers.color.setClear(ta.r,ta.g,ta.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(o,l)},render:x,addToRenderList:g}}function Km(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,L,H,z,W){let Z=!1;const Y=h(z,H,L);s!==Y&&(s=Y,c(s.object)),Z=m(S,z,H,W),Z&&_(S,z,H,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(S,L,H,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function f(S){return i.deleteVertexArray(S)}function h(S,L,H){const z=H.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let Z=W[L.id];Z===void 0&&(Z={},W[L.id]=Z);let Y=Z[z];return Y===void 0&&(Y=d(l()),Z[z]=Y),Y}function d(S){const L=[],H=[],z=[];for(let W=0;W<t;W++)L[W]=0,H[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:z,object:S,attributes:{},index:null}}function m(S,L,H,z){const W=s.attributes,Z=L.attributes;let Y=0;const ee=H.getAttributes();for(const X in ee)if(ee[X].location>=0){const Se=W[X];let Pe=Z[X];if(Pe===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Pe=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Pe=S.instanceColor)),Se===void 0||Se.attribute!==Pe||Pe&&Se.data!==Pe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function _(S,L,H,z){const W={},Z=L.attributes;let Y=0;const ee=H.getAttributes();for(const X in ee)if(ee[X].location>=0){let Se=Z[X];Se===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor));const Pe={};Pe.attribute=Se,Se&&Se.data&&(Pe.data=Se.data),W[X]=Pe,Y++}s.attributes=W,s.attributesNum=Y,s.index=z}function x(){const S=s.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){const H=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;H[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),W[S]!==L&&(i.vertexAttribDivisor(S,L),W[S]=L)}function A(){const S=s.newAttributes,L=s.enabledAttributes;for(let H=0,z=L.length;H<z;H++)L[H]!==S[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function b(S,L,H,z,W,Z,Y){Y===!0?i.vertexAttribIPointer(S,L,H,W,Z):i.vertexAttribPointer(S,L,H,z,W,Z)}function M(S,L,H,z){x();const W=z.attributes,Z=H.getAttributes(),Y=L.defaultAttributeValues;for(const ee in Z){const X=Z[ee];if(X.location>=0){let pe=W[ee];if(pe===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const Se=pe.normalized,Pe=pe.itemSize,Ze=e.get(pe);if(Ze===void 0)continue;const dt=Ze.buffer,$=Ze.type,ae=Ze.bytesPerElement,Le=$===i.INT||$===i.UNSIGNED_INT||pe.gpuType===Zl;if(pe.isInterleavedBufferAttribute){const ue=pe.data,Be=ue.stride,Ye=pe.offset;if(ue.isInstancedInterleavedBuffer){for(let We=0;We<X.locationSize;We++)p(X.location+We,ue.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let We=0;We<X.locationSize;We++)g(X.location+We);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let We=0;We<X.locationSize;We++)b(X.location+We,Pe/X.locationSize,$,Se,Be*ae,(Ye+Pe/X.locationSize*We)*ae,Le)}else{if(pe.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)p(X.location+ue,pe.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ue=0;ue<X.locationSize;ue++)g(X.location+ue);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let ue=0;ue<X.locationSize;ue++)b(X.location+ue,Pe/X.locationSize,$,Se,Pe*ae,Pe/X.locationSize*ue*ae,Le)}}else if(Y!==void 0){const Se=Y[ee];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(X.location,Se);break;case 3:i.vertexAttrib3fv(X.location,Se);break;case 4:i.vertexAttrib4fv(X.location,Se);break;default:i.vertexAttrib1fv(X.location,Se)}}}}A()}function U(){D();for(const S in n){const L=n[S];for(const H in L){const z=L[H];for(const W in z)f(z[W].object),delete z[W];delete L[H]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const H in L){const z=L[H];for(const W in z)f(z[W].object),delete z[W];delete L[H]}delete n[S.id]}function P(S){for(const L in n){const H=n[L];if(H[S.id]===void 0)continue;const z=H[S.id];for(const W in z)f(z[W].object),delete z[W];delete H[S.id]}}function D(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:A}}function Jm(i,e,t){let n;function r(c){n=c}function s(c,f){i.drawArrays(n,c,f),t.update(f,n,1)}function a(c,f,h){h!==0&&(i.drawArraysInstanced(n,c,f,h),t.update(f,n,h))}function o(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=f[_];t.update(m,n,1)}function l(c,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],f[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x]*d[x];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $m(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Hn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const D=P===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==fi&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Zn&&!D)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:U,maxSamples:C}}function jm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ni,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const A=s?0:n,b=A*4;let M=p.clippingState||null;l.value=M,M=f(_,d,b,m);for(let U=0;U!==b;++U)M[U]=t[U];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,m,_){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const p=m+x*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,M=m;b!==x;++b,M+=4)a.copy(h[b]).applyMatrix4(A,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Qm(i){let e=new WeakMap;function t(a,o){return o===Jo?a.mapping=Ir:o===$o&&(a.mapping=Ur),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jo||o===$o)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new up(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bf extends Nf{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yr=4,Qc=[.125,.215,.35,.446,.526,.582],Bi=20,So=new Bf,eu=new nt;let Eo=null,bo=0,To=0,Ao=!1;const Fi=(1+Math.sqrt(5))/2,hr=1/Fi,tu=[new I(-Fi,hr,0),new I(Fi,hr,0),new I(-hr,0,Fi),new I(hr,0,Fi),new I(0,Fi,-hr),new I(0,Fi,hr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,bo,To),this._renderer.xr.enabled=Ao,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ts,format:Hn,colorSpace:kr,depthBuffer:!1},r=iu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(s)),this._blurMaterial=tg(s,e,t)}return r}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,r){const o=new yn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(eu),f.toneMapping=Ei,f.autoClear=!1;const m=new Kt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new At(new Ji,m);let x=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,x=!0):(m.color.copy(eu),x=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;na(r,A*b,p>2?b:0,b,b),f.setRenderTarget(r),x&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ir||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;na(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,So)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=tu[(r-s-1)%tu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new At(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Bi-1),x=s/_,g=isFinite(s)?1+Math.floor(f*x):Bi;g>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const p=[];let A=0;for(let P=0;P<Bi;++P){const D=P/x,T=Math.exp(-D*D/2);p.push(T),P===0?A+=T:P<g&&(A+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/A;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;const M=this._sizeLods[r],U=3*M*(r>b-yr?r-b+yr:0),C=4*(this._cubeSize-M);na(t,U,C,3*M,2*M),l.setRenderTarget(t),l.render(h,So)}}function eg(i){const e=[],t=[],n=[];let r=i;const s=i-yr+1+Qc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-yr?l=Qc[a-i+yr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,_=6,x=3,g=2,p=1,A=new Float32Array(x*_*m),b=new Float32Array(g*_*m),M=new Float32Array(p*_*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,D=C>2?0:-1,T=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];A.set(T,x*_*C),b.set(d,g*_*C);const S=[C,C,C,C,C,C];M.set(S,p*_*C)}const U=new mn;U.setAttribute("position",new pn(A,x)),U.setAttribute("uv",new pn(b,g)),U.setAttribute("faceIndex",new pn(M,p)),e.push(U),r>yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function iu(i,e,t){const n=new Yi(i,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function tg(i,e,t){const n=new Float32Array(Bi),r=new I(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ru(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function su(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function ng(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jo||l===$o,f=l===Ir||l===Ur;if(c||f){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new nu(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new nu(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ig(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rg(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const x=m[_];for(let g=0,p=x.length;g<p;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let b=0,M=A.length;b<M;b+=3){const U=A[b+0],C=A[b+1],P=A[b+2];d.push(U,C,C,P,P,U)}}else if(_!==void 0){const A=_.array;x=_.version;for(let b=0,M=A.length/3-1;b<M;b+=3){const U=b+0,C=b+1,P=b+2;d.push(U,C,C,P,P,U)}}else return;const g=new(wf(d)?If:Df)(d,1);g.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function sg(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*a),t.update(m,n,1)}function c(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,d*a,_),t.update(m,n,_))}function f(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];t.update(g,n,1)}function h(d,m,_,x){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,m[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,x,0,_);let p=0;for(let A=0;A<_;A++)p+=m[A]*x[A];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function ag(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function og(i,e,t){const n=new WeakMap,r=new Dt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let U=o.attributes.position.count*M,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const P=new Float32Array(U*C*4*h),D=new Cf(P,U,C,h);D.type=Zn,D.needsUpdate=!0;const T=M*4;for(let L=0;L<h;L++){const H=p[L],z=A[L],W=b[L],Z=U*C*4*L;for(let Y=0;Y<H.count;Y++){const ee=Y*T;_===!0&&(r.fromBufferAttribute(H,Y),P[Z+ee+0]=r.x,P[Z+ee+1]=r.y,P[Z+ee+2]=r.z,P[Z+ee+3]=0),x===!0&&(r.fromBufferAttribute(z,Y),P[Z+ee+4]=r.x,P[Z+ee+5]=r.y,P[Z+ee+6]=r.z,P[Z+ee+7]=0),g===!0&&(r.fromBufferAttribute(W,Y),P[Z+ee+8]=r.x,P[Z+ee+9]=r.y,P[Z+ee+10]=r.z,P[Z+ee+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:D,size:new ce(U,C)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function lg(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class zf extends sn{constructor(e,t,n,r,s,a,o,l,c,f=wr){if(f!==wr&&f!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===wr&&(n=Xi),n===void 0&&f===Fr&&(n=Nr),super(null,r,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kf=new sn,au=new zf(1,1),Hf=new Cf,Gf=new qd,Vf=new Ff,ou=[],lu=[],cu=new Float32Array(16),uu=new Float32Array(9),fu=new Float32Array(4);function Wr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ou[r];if(s===void 0&&(s=new Float32Array(r),ou[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ha(i,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function dg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;fu.set(n),i.uniformMatrix2fv(this.addr,!1,fu),Gt(t,n)}}function pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;uu.set(n),i.uniformMatrix3fv(this.addr,!1,uu),Gt(t,n)}}function mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;cu.set(n),i.uniformMatrix4fv(this.addr,!1,cu),Gt(t,n)}}function gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function Mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function bg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(au.compareFunction=Af,s=au):s=kf,t.setTexture2D(e||s,r)}function Tg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gf,r)}function Ag(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vf,r)}function wg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hf,r)}function Rg(i){switch(i){case 5126:return cg;case 35664:return ug;case 35665:return fg;case 35666:return hg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return xg;case 5125:return Mg;case 36294:return yg;case 36295:return Sg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return wg}}function Cg(i,e){i.uniform1fv(this.addr,e)}function Pg(i,e){const t=Wr(e,this.size,2);i.uniform2fv(this.addr,t)}function Lg(i,e){const t=Wr(e,this.size,3);i.uniform3fv(this.addr,t)}function Dg(i,e){const t=Wr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ig(i,e){const t=Wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ug(i,e){const t=Wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ng(i,e){const t=Wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fg(i,e){i.uniform1iv(this.addr,e)}function Og(i,e){i.uniform2iv(this.addr,e)}function Bg(i,e){i.uniform3iv(this.addr,e)}function zg(i,e){i.uniform4iv(this.addr,e)}function kg(i,e){i.uniform1uiv(this.addr,e)}function Hg(i,e){i.uniform2uiv(this.addr,e)}function Gg(i,e){i.uniform3uiv(this.addr,e)}function Vg(i,e){i.uniform4uiv(this.addr,e)}function Wg(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||kf,s[a])}function Xg(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gf,s[a])}function Yg(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vf,s[a])}function qg(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hf,s[a])}function Zg(i){switch(i){case 5126:return Cg;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ig;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Hg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}class Kg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}}class Jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zg(t.type)}}class $g{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function hu(i,e){i.seq.push(e),i.map[e.id]=e}function jg(i,e,t){const n=i.name,r=n.length;for(wo.lastIndex=0;;){const s=wo.exec(n),a=wo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){hu(t,c===void 0?new Kg(o,i,e):new Jg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new $g(o),hu(t,h)),t=h}}}class Ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);jg(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function du(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Qg=37297;let e_=0;function t_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const pu=new Qe;function n_(i){lt._getMatrix(pu,lt.workingColorSpace,i);const e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case ka:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+t_(i.getShaderSource(e),a)}else return r}function i_(i,e){const t=n_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r_(i,e){let t;switch(e){case Md:t="Linear";break;case yd:t="Reinhard";break;case Sd:t="Cineon";break;case Ed:t="ACESFilmic";break;case Td:t="AgX";break;case Ad:t="Neutral";break;case bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ia=new I;function s_(){lt.getLuminanceCoefficients(ia);const i=ia.x.toFixed(4),e=ia.y.toFixed(4),t=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function o_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ls(i){return i!==""}function gu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(c_,f_)}const u_=new Map;function f_(i,e){let t=tt[e];if(t===void 0){const n=u_.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(i){return i.replace(h_,d_)}function d_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function p_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===df?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function m_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ir:case Ur:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function __(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pf:e="ENVMAP_BLENDING_MULTIPLY";break;case vd:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function v_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function x_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=p_(t),c=m_(t),f=g_(t),h=__(t),d=v_(t),m=a_(t),_=o_(s),x=r.createProgram();let g,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ls).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(g=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ei?r_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,i_("linearToOutputTexel",t.outputColorSpace),s_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=Rl(a),a=gu(a,t),a=_u(a,t),o=Rl(o),o=gu(o,t),o=_u(o,t),a=vu(a),o=vu(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=A+g+a,M=A+p+o,U=du(r,r.VERTEX_SHADER,b),C=du(r,r.FRAGMENT_SHADER,M);r.attachShader(x,U),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(L){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(U).trim(),W=r.getShaderInfoLog(C).trim();let Z=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,U,C);else{const ee=mu(r,U,"vertex"),X=mu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ee+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||W==="")&&(Y=!1);Y&&(L.diagnostics={runnable:Z,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:W,prefix:p}})}r.deleteShader(U),r.deleteShader(C),D=new Ma(r,x),T=l_(r,x)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Qg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=C,this}let M_=0;class y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new S_(e),t.set(e,n)),n}}class S_{constructor(e){this.id=M_++,this.code=e,this.usedTimes=0}}function E_(i,e,t,n,r,s,a){const o=new Pf,l=new y_,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,S,L,H,z){const W=H.fog,Z=z.geometry,Y=T.isMeshStandardMaterial?H.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||Y),X=ee&&ee.mapping===Ba?ee.image.height:null,pe=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const Se=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pe=Se!==void 0?Se.length:0;let Ze=0;Z.morphAttributes.position!==void 0&&(Ze=1),Z.morphAttributes.normal!==void 0&&(Ze=2),Z.morphAttributes.color!==void 0&&(Ze=3);let dt,$,ae,Le;if(pe){const gt=Wn[pe];dt=gt.vertexShader,$=gt.fragmentShader}else dt=T.vertexShader,$=T.fragmentShader,l.update(T),ae=l.getVertexShaderID(T),Le=l.getFragmentShaderID(T);const ue=i.getRenderTarget(),Be=i.state.buffers.depth.getReversed(),Ye=z.isInstancedMesh===!0,We=z.isBatchedMesh===!0,ot=!!T.map,Q=!!T.matcap,se=!!ee,R=!!T.aoMap,Fe=!!T.lightMap,ie=!!T.bumpMap,we=!!T.normalMap,he=!!T.displacementMap,Ge=!!T.emissiveMap,Ee=!!T.metalnessMap,w=!!T.roughnessMap,y=T.anisotropy>0,k=T.clearcoat>0,K=T.dispersion>0,te=T.iridescence>0,J=T.sheen>0,De=T.transmission>0,_e=y&&!!T.anisotropyMap,be=k&&!!T.clearcoatMap,st=k&&!!T.clearcoatNormalMap,re=k&&!!T.clearcoatRoughnessMap,Re=te&&!!T.iridescenceMap,Ve=te&&!!T.iridescenceThicknessMap,Xe=J&&!!T.sheenColorMap,Ce=J&&!!T.sheenRoughnessMap,at=!!T.specularMap,et=!!T.specularColorMap,yt=!!T.specularIntensityMap,N=De&&!!T.transmissionMap,ve=De&&!!T.thicknessMap,q=!!T.gradientMap,j=!!T.alphaMap,ye=T.alphaTest>0,xe=!!T.alphaHash,$e=!!T.extensions;let Rt=Ei;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Rt=i.toneMapping);const $t={shaderID:pe,shaderType:T.type,shaderName:T.name,vertexShader:dt,fragmentShader:$,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:We,batchingColor:We&&z._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&z.instanceColor!==null,instancingMorph:Ye&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:kr,alphaToCoverage:!!T.alphaToCoverage,map:ot,matcap:Q,envMap:se,envMapMode:se&&ee.mapping,envMapCubeUVHeight:X,aoMap:R,lightMap:Fe,bumpMap:ie,normalMap:we,displacementMap:d&&he,emissiveMap:Ge,normalMapObjectSpace:we&&T.normalMapType===Pd,normalMapTangentSpace:we&&T.normalMapType===Tf,metalnessMap:Ee,roughnessMap:w,anisotropy:y,anisotropyMap:_e,clearcoat:k,clearcoatMap:be,clearcoatNormalMap:st,clearcoatRoughnessMap:re,dispersion:K,iridescence:te,iridescenceMap:Re,iridescenceThicknessMap:Ve,sheen:J,sheenColorMap:Xe,sheenRoughnessMap:Ce,specularMap:at,specularColorMap:et,specularIntensityMap:yt,transmission:De,transmissionMap:N,thicknessMap:ve,gradientMap:q,opaque:T.transparent===!1&&T.blending===Ar&&T.alphaToCoverage===!1,alphaMap:j,alphaTest:ye,alphaHash:xe,combine:T.combine,mapUv:ot&&x(T.map.channel),aoMapUv:R&&x(T.aoMap.channel),lightMapUv:Fe&&x(T.lightMap.channel),bumpMapUv:ie&&x(T.bumpMap.channel),normalMapUv:we&&x(T.normalMap.channel),displacementMapUv:he&&x(T.displacementMap.channel),emissiveMapUv:Ge&&x(T.emissiveMap.channel),metalnessMapUv:Ee&&x(T.metalnessMap.channel),roughnessMapUv:w&&x(T.roughnessMap.channel),anisotropyMapUv:_e&&x(T.anisotropyMap.channel),clearcoatMapUv:be&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(T.sheenRoughnessMap.channel),specularMapUv:at&&x(T.specularMap.channel),specularColorMapUv:et&&x(T.specularColorMap.channel),specularIntensityMapUv:yt&&x(T.specularIntensityMap.channel),transmissionMapUv:N&&x(T.transmissionMap.channel),thicknessMapUv:ve&&x(T.thicknessMap.channel),alphaMapUv:j&&x(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(we||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(ot||j),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Be,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:ot&&T.map.isVideoTexture===!0&&lt.getTransfer(T.map.colorSpace)===xt,decodeVideoTextureEmissive:Ge&&T.emissiveMap.isVideoTexture===!0&&lt.getTransfer(T.emissiveMap.colorSpace)===xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xn,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$e&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&T.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function p(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)S.push(L),S.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(A(S,T),b(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function A(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function b(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function M(T){const S=_[T.type];let L;if(S){const H=Wn[S];L=ap.clone(H.uniforms)}else L=T.uniforms;return L}function U(T,S){let L;for(let H=0,z=f.length;H<z;H++){const W=f[H];if(W.cacheKey===S){L=W,++L.usedTimes;break}}return L===void 0&&(L=new x_(i,S,T,s),f.push(L)),L}function C(T){if(--T.usedTimes===0){const S=f.indexOf(T);f[S]=f[f.length-1],f.pop(),T.destroy()}}function P(T){l.remove(T)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:U,releaseProgram:C,releaseShaderCache:P,programs:f,dispose:D}}function b_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function T_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,m,_,x,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function o(h,d,m,_,x,g){const p=a(h,d,m,_,x,g);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(h,d,m,_,x,g){const p=a(h,d,m,_,x,g);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||T_),n.length>1&&n.sort(d||Mu),r.length>1&&r.sort(d||Mu)}function f(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function A_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new yu,i.set(n,[a])):r>=s.length?(a=new yu,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function w_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new nt};break;case"SpotLight":t={position:new I,direction:new I,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function R_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let C_=0;function P_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L_(i){const e=new w_,t=R_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new vt,a=new vt;function o(c){let f=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,_=0,x=0,g=0,p=0,A=0,b=0,M=0,U=0,C=0,P=0;c.sort(P_);for(let T=0,S=c.length;T<S;T++){const L=c[T],H=L.color,z=L.intensity,W=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=H.r*z,h+=H.g*z,d+=H.b*z;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],z);P++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=L.shadow.matrix,A++}n.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(H).multiplyScalar(z),Y.distance=W,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[x]=Y;const ee=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,ee.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[x]=ee.matrix,L.castShadow){const X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Z,M++}x++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(H).multiplyScalar(z),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=Y,g++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const ee=L.shadow,X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=L.shadow.matrix,b++}n.point[_]=Y,_++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(z),Y.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=Y,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==m||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==A||D.numPointShadows!==b||D.numSpotShadows!==M||D.numSpotMaps!==U||D.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,D.directionalLength=m,D.pointLength=_,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=A,D.numPointShadows=b,D.numSpotShadows=M,D.numSpotMaps=U,D.numLightProbes=P,n.version=C_++)}function l(c,f){let h=0,d=0,m=0,_=0,x=0;const g=f.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const b=c[p];if(b.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(b.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(b.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Su(i){const e=new L_(i),t=[],n=[];function r(f){c.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function D_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Su(i),e.set(r,[o])):s>=a.length?(o=new Su(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class I_ extends Vr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U_ extends Vr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const N_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F_=`uniform sampler2D shadow_pass;
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
}`;function O_(i,e,t){let n=new ec;const r=new ce,s=new ce,a=new Dt,o=new I_({depthPacking:Cd}),l=new U_,c={},f=t.maxTextureSize,h={[Ti]:dn,[dn]:Ti,[Xn]:Xn},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:N_,fragmentShader:F_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new mn;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new At(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let p=this.type;this.render=function(C,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Si),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=p!==ri&&this.type===ri,W=p===ri&&this.type!==ri;for(let Z=0,Y=C.length;Z<Y;Z++){const ee=C[Z],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const pe=X.getFrameExtents();if(r.multiply(pe),s.copy(X.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/pe.x),r.x=s.x*pe.x,X.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/pe.y),r.y=s.y*pe.y,X.mapSize.y=s.y)),X.map===null||z===!0||W===!0){const Pe=this.type!==ri?{minFilter:ln,magFilter:ln}:{};X.map!==null&&X.map.dispose(),X.map=new Yi(r.x,r.y,Pe),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const Se=X.getViewportCount();for(let Pe=0;Pe<Se;Pe++){const Ze=X.getViewport(Pe);a.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),H.viewport(a),X.updateMatrices(ee,Pe),n=X.getFrustum(),M(P,D,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===ri&&A(X,D),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,S,L)};function A(C,P){const D=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Yi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,D,d,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,D,m,x,null)}function b(C,P,D,T){let S=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const H=S.uuid,z=P.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let Z=W[z];Z===void 0&&(Z=S.clone(),W[z]=Z,P.addEventListener("dispose",U)),S=Z}if(S.visible=P.visible,S.wireframe=P.wireframe,T===ri?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=D}return S}function M(C,P,D,T,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ri)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const z=e.update(C),W=C.material;if(Array.isArray(W)){const Z=z.groups;for(let Y=0,ee=Z.length;Y<ee;Y++){const X=Z[Y],pe=W[X.materialIndex];if(pe&&pe.visible){const Se=b(C,pe,T,S);C.onBeforeShadow(i,C,P,D,z,Se,X),i.renderBufferDirect(D,null,z,Se,C,X),C.onAfterShadow(i,C,P,D,z,Se,X)}}}else if(W.visible){const Z=b(C,W,T,S);C.onBeforeShadow(i,C,P,D,z,Z,null),i.renderBufferDirect(D,null,z,Z,C,null),C.onAfterShadow(i,C,P,D,z,Z,null)}}const H=C.children;for(let z=0,W=H.length;z<W;z++)M(H[z],P,D,T,S)}function U(C){C.target.removeEventListener("dispose",U);for(const D in c){const T=c[D],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const B_={[Vo]:Wo,[Xo]:Zo,[Yo]:Ko,[Dr]:qo,[Wo]:Vo,[Zo]:Xo,[Ko]:Yo,[qo]:Dr};function z_(i,e){function t(){let N=!1;const ve=new Dt;let q=null;const j=new Dt(0,0,0,0);return{setMask:function(ye){q!==ye&&!N&&(i.colorMask(ye,ye,ye,ye),q=ye)},setLocked:function(ye){N=ye},setClear:function(ye,xe,$e,Rt,$t){$t===!0&&(ye*=Rt,xe*=Rt,$e*=Rt),ve.set(ye,xe,$e,Rt),j.equals(ve)===!1&&(i.clearColor(ye,xe,$e,Rt),j.copy(ve))},reset:function(){N=!1,q=null,j.set(-1,0,0,0)}}}function n(){let N=!1,ve=!1,q=null,j=null,ye=null;return{setReversed:function(xe){if(ve!==xe){const $e=e.get("EXT_clip_control");ve?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const Rt=ye;ye=null,this.setClear(Rt)}ve=xe},getReversed:function(){return ve},setTest:function(xe){xe?ue(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(xe){q!==xe&&!N&&(i.depthMask(xe),q=xe)},setFunc:function(xe){if(ve&&(xe=B_[xe]),j!==xe){switch(xe){case Vo:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=xe}},setLocked:function(xe){N=xe},setClear:function(xe){ye!==xe&&(ve&&(xe=1-xe),i.clearDepth(xe),ye=xe)},reset:function(){N=!1,q=null,j=null,ye=null,ve=!1}}}function r(){let N=!1,ve=null,q=null,j=null,ye=null,xe=null,$e=null,Rt=null,$t=null;return{setTest:function(gt){N||(gt?ue(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(gt){ve!==gt&&!N&&(i.stencilMask(gt),ve=gt)},setFunc:function(gt,Dn,$n){(q!==gt||j!==Dn||ye!==$n)&&(i.stencilFunc(gt,Dn,$n),q=gt,j=Dn,ye=$n)},setOp:function(gt,Dn,$n){(xe!==gt||$e!==Dn||Rt!==$n)&&(i.stencilOp(gt,Dn,$n),xe=gt,$e=Dn,Rt=$n)},setLocked:function(gt){N=gt},setClear:function(gt){$t!==gt&&(i.clearStencil(gt),$t=gt)},reset:function(){N=!1,ve=null,q=null,j=null,ye=null,xe=null,$e=null,Rt=null,$t=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,m=[],_=null,x=!1,g=null,p=null,A=null,b=null,M=null,U=null,C=null,P=new nt(0,0,0),D=0,T=!1,S=null,L=null,H=null,z=null,W=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ee=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=ee>=2);let pe=null,Se={};const Pe=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),dt=new Dt().fromArray(Pe),$=new Dt().fromArray(Ze);function ae(N,ve,q,j){const ye=new Uint8Array(4),xe=i.createTexture();i.bindTexture(N,xe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<q;$e++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ve+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return xe}const Le={};Le[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(Dr),ie(!1),we(Rc),ue(i.CULL_FACE),R(Si);function ue(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function Be(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function Ye(N,ve){return h[N]!==ve?(i.bindFramebuffer(N,ve),h[N]=ve,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function We(N,ve){let q=m,j=!1;if(N){q=d.get(ve),q===void 0&&(q=[],d.set(ve,q));const ye=N.textures;if(q.length!==ye.length||q[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,$e=ye.length;xe<$e;xe++)q[xe]=i.COLOR_ATTACHMENT0+xe;q.length=ye.length,j=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,j=!0);j&&i.drawBuffers(q)}function ot(N){return _!==N?(i.useProgram(N),_=N,!0):!1}const Q={[Oi]:i.FUNC_ADD,[td]:i.FUNC_SUBTRACT,[nd]:i.FUNC_REVERSE_SUBTRACT};Q[id]=i.MIN,Q[rd]=i.MAX;const se={[sd]:i.ZERO,[ad]:i.ONE,[od]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[dd]:i.SRC_ALPHA_SATURATE,[fd]:i.DST_COLOR,[cd]:i.DST_ALPHA,[ld]:i.ONE_MINUS_SRC_COLOR,[Go]:i.ONE_MINUS_SRC_ALPHA,[hd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[pd]:i.CONSTANT_COLOR,[md]:i.ONE_MINUS_CONSTANT_COLOR,[gd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function R(N,ve,q,j,ye,xe,$e,Rt,$t,gt){if(N===Si){x===!0&&(Be(i.BLEND),x=!1);return}if(x===!1&&(ue(i.BLEND),x=!0),N!==ed){if(N!==g||gt!==T){if((p!==Oi||M!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,M=Oi),gt)switch(N){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,b=null,U=null,C=null,P.set(0,0,0),D=0,g=N,T=gt}return}ye=ye||ve,xe=xe||q,$e=$e||j,(ve!==p||ye!==M)&&(i.blendEquationSeparate(Q[ve],Q[ye]),p=ve,M=ye),(q!==A||j!==b||xe!==U||$e!==C)&&(i.blendFuncSeparate(se[q],se[j],se[xe],se[$e]),A=q,b=j,U=xe,C=$e),(Rt.equals(P)===!1||$t!==D)&&(i.blendColor(Rt.r,Rt.g,Rt.b,$t),P.copy(Rt),D=$t),g=N,T=!1}function Fe(N,ve){N.side===Xn?Be(i.CULL_FACE):ue(i.CULL_FACE);let q=N.side===dn;ve&&(q=!q),ie(q),N.blending===Ar&&N.transparent===!1?R(Si):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const j=N.stencilWrite;o.setTest(j),j&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function we(N){N!==jh?(ue(i.CULL_FACE),N!==L&&(N===Rc?i.cullFace(i.BACK):N===Qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),L=N}function he(N){N!==H&&(Y&&i.lineWidth(N),H=N)}function Ge(N,ve,q){N?(ue(i.POLYGON_OFFSET_FILL),(z!==ve||W!==q)&&(i.polygonOffset(ve,q),z=ve,W=q)):Be(i.POLYGON_OFFSET_FILL)}function Ee(N){N?ue(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+Z-1),pe!==N&&(i.activeTexture(N),pe=N)}function y(N,ve,q){q===void 0&&(pe===null?q=i.TEXTURE0+Z-1:q=pe);let j=Se[q];j===void 0&&(j={type:void 0,texture:void 0},Se[q]=j),(j.type!==N||j.texture!==ve)&&(pe!==q&&(i.activeTexture(q),pe=q),i.bindTexture(N,ve||Le[N]),j.type=N,j.texture=ve)}function k(){const N=Se[pe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(N){dt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),dt.copy(N))}function Ce(N){$.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$.copy(N))}function at(N,ve){let q=c.get(ve);q===void 0&&(q=new WeakMap,c.set(ve,q));let j=q.get(N);j===void 0&&(j=i.getUniformBlockIndex(ve,N.name),q.set(N,j))}function et(N,ve){const j=c.get(ve).get(N);l.get(ve)!==j&&(i.uniformBlockBinding(ve,j,N.__bindingPointIndex),l.set(ve,j))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},pe=null,Se={},h={},d=new WeakMap,m=[],_=null,x=!1,g=null,p=null,A=null,b=null,M=null,U=null,C=null,P=new nt(0,0,0),D=0,T=!1,S=null,L=null,H=null,z=null,W=null,dt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Be,bindFramebuffer:Ye,drawBuffers:We,useProgram:ot,setBlending:R,setMaterial:Fe,setFlipSided:ie,setCullFace:we,setLineWidth:he,setPolygonOffset:Ge,setScissorTest:Ee,activeTexture:w,bindTexture:y,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:Re,texImage3D:Ve,updateUBOMapping:at,uniformBlockBinding:et,texStorage2D:st,texStorage3D:re,texSubImage2D:J,texSubImage3D:De,compressedTexSubImage2D:_e,compressedTexSubImage3D:be,scissor:Xe,viewport:Ce,reset:yt}}function Eu(i,e,t,n){const r=k_(n);switch(t){case xf:return i*e;case yf:return i*e;case Sf:return i*e*2;case za:return i*e/r.components*r.byteLength;case $l:return i*e/r.components*r.byteLength;case Ef:return i*e*2/r.components*r.byteLength;case jl:return i*e*2/r.components*r.byteLength;case Mf:return i*e*3/r.components*r.byteLength;case Hn:return i*e*4/r.components*r.byteLength;case Ql:return i*e*4/r.components*r.byteLength;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:case il:return Math.max(i,16)*Math.max(e,8)/4;case el:case nl:return Math.max(i,8)*Math.max(e,8)/2;case rl:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xa:case yl:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bf:case El:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bl:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function k_(i){switch(i){case fi:case gf:return{byteLength:1,components:1};case Ms:case _f:case Ts:return{byteLength:2,components:1};case Kl:case Jl:return{byteLength:2,components:4};case Xi:case Zl:case Zn:return{byteLength:4,components:1};case vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function H_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,y){return m?new OffscreenCanvas(w,y):wa("canvas")}function x(w,y,k){let K=1;const te=Ee(w);if((te.width>k||te.height>k)&&(K=k/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(K*te.width),De=Math.floor(K*te.height);h===void 0&&(h=_(J,De));const _e=y?_(J,De):h;return _e.width=J,_e.height=De,_e.getContext("2d").drawImage(w,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+De+")."),_e}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,y,k,K,te=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=y;if(y===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),y===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),y===i.RGBA){const De=te?ka:lt.getTransfer(K);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=De===xt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(w,y){let k;return w?y===null||y===Xi||y===Nr?k=i.DEPTH24_STENCIL8:y===Zn?k=i.DEPTH32F_STENCIL8:y===Ms&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xi||y===Nr?k=i.DEPTH_COMPONENT24:y===Zn?k=i.DEPTH_COMPONENT32F:y===Ms&&(k=i.DEPTH_COMPONENT16),k}function U(w,y){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==ln&&w.minFilter!==qn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function C(w){const y=w.target;y.removeEventListener("dispose",C),D(y),y.isVideoTexture&&f.delete(y)}function P(w){const y=w.target;y.removeEventListener("dispose",P),S(y)}function D(w){const y=n.get(w);if(y.__webglInit===void 0)return;const k=w.source,K=d.get(k);if(K){const te=K[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(w),Object.keys(K).length===0&&d.delete(k)}n.remove(w)}function T(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const k=w.source,K=d.get(k);delete K[y.__cacheKey],a.memory.textures--}function S(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let te=0;te<y.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(y.__webglFramebuffer[K][te]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=w.textures;for(let K=0,te=k.length;K<te;K++){const J=n.get(k[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(w)}let L=0;function H(){L=0}function z(){const w=L;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w}function W(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function Z(w,y){const k=n.get(w);if(w.isVideoTexture&&he(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,w,y);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function Y(w,y){const k=n.get(w);if(w.version>0&&k.__version!==w.version){$(k,w,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function ee(w,y){const k=n.get(w);if(w.version>0&&k.__version!==w.version){$(k,w,y);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function X(w,y){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ae(k,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const pe={[jo]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},Se={[ln]:i.NEAREST,[wd]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[ja]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},Pe={[Ld]:i.NEVER,[Od]:i.ALWAYS,[Dd]:i.LESS,[Af]:i.LEQUAL,[Id]:i.EQUAL,[Fd]:i.GEQUAL,[Ud]:i.GREATER,[Nd]:i.NOTEQUAL};function Ze(w,y){if(y.type===Zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===qn||y.magFilter===ja||y.magFilter===Os||y.magFilter===ki||y.minFilter===qn||y.minFilter===ja||y.minFilter===Os||y.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,pe[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,pe[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,pe[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Se[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Se[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ln||y.minFilter!==Os&&y.minFilter!==ki||y.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function dt(w,y){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",C));const K=y.source;let te=d.get(K);te===void 0&&(te={},d.set(K,te));const J=W(y);if(J!==w.__cacheKey){te[J]===void 0&&(te[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[J].usedTimes++;const De=te[w.__cacheKey];De!==void 0&&(te[w.__cacheKey].usedTimes--,De.usedTimes===0&&T(y)),w.__cacheKey=J,w.__webglTexture=te[J].texture}return k}function $(w,y,k){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const te=dt(w,y),J=y.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+k);const De=n.get(J);if(J.version!==De.__version||te===!0){t.activeTexture(i.TEXTURE0+k);const _e=lt.getPrimaries(lt.workingColorSpace),be=y.colorSpace===yi?null:lt.getPrimaries(y.colorSpace),st=y.colorSpace===yi||_e===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let re=x(y.image,!1,r.maxTextureSize);re=Ge(y,re);const Re=s.convert(y.format,y.colorSpace),Ve=s.convert(y.type);let Xe=b(y.internalFormat,Re,Ve,y.colorSpace,y.isVideoTexture);Ze(K,y);let Ce;const at=y.mipmaps,et=y.isVideoTexture!==!0,yt=De.__version===void 0||te===!0,N=J.dataReady,ve=U(y,re);if(y.isDepthTexture)Xe=M(y.format===Fr,y.type),yt&&(et?t.texStorage2D(i.TEXTURE_2D,1,Xe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Xe,re.width,re.height,0,Re,Ve,null));else if(y.isDataTexture)if(at.length>0){et&&yt&&t.texStorage2D(i.TEXTURE_2D,ve,Xe,at[0].width,at[0].height);for(let q=0,j=at.length;q<j;q++)Ce=at[q],et?N&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Ce.width,Ce.height,Re,Ve,Ce.data):t.texImage2D(i.TEXTURE_2D,q,Xe,Ce.width,Ce.height,0,Re,Ve,Ce.data);y.generateMipmaps=!1}else et?(yt&&t.texStorage2D(i.TEXTURE_2D,ve,Xe,re.width,re.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,Re,Ve,re.data)):t.texImage2D(i.TEXTURE_2D,0,Xe,re.width,re.height,0,Re,Ve,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){et&&yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Xe,at[0].width,at[0].height,re.depth);for(let q=0,j=at.length;q<j;q++)if(Ce=at[q],y.format!==Hn)if(Re!==null)if(et){if(N)if(y.layerUpdates.size>0){const ye=Eu(Ce.width,Ce.height,y.format,y.type);for(const xe of y.layerUpdates){const $e=Ce.data.subarray(xe*ye/Ce.data.BYTES_PER_ELEMENT,(xe+1)*ye/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,xe,Ce.width,Ce.height,1,Re,$e)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ce.width,Ce.height,re.depth,Re,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Xe,Ce.width,Ce.height,re.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ce.width,Ce.height,re.depth,Re,Ve,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Xe,Ce.width,Ce.height,re.depth,0,Re,Ve,Ce.data)}else{et&&yt&&t.texStorage2D(i.TEXTURE_2D,ve,Xe,at[0].width,at[0].height);for(let q=0,j=at.length;q<j;q++)Ce=at[q],y.format!==Hn?Re!==null?et?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Xe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?N&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Ce.width,Ce.height,Re,Ve,Ce.data):t.texImage2D(i.TEXTURE_2D,q,Xe,Ce.width,Ce.height,0,Re,Ve,Ce.data)}else if(y.isDataArrayTexture)if(et){if(yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Xe,re.width,re.height,re.depth),N)if(y.layerUpdates.size>0){const q=Eu(re.width,re.height,y.format,y.type);for(const j of y.layerUpdates){const ye=re.data.subarray(j*q/re.data.BYTES_PER_ELEMENT,(j+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,Re,Ve,ye)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Re,Ve,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,re.width,re.height,re.depth,0,Re,Ve,re.data);else if(y.isData3DTexture)et?(yt&&t.texStorage3D(i.TEXTURE_3D,ve,Xe,re.width,re.height,re.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Re,Ve,re.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,re.width,re.height,re.depth,0,Re,Ve,re.data);else if(y.isFramebufferTexture){if(yt)if(et)t.texStorage2D(i.TEXTURE_2D,ve,Xe,re.width,re.height);else{let q=re.width,j=re.height;for(let ye=0;ye<ve;ye++)t.texImage2D(i.TEXTURE_2D,ye,Xe,q,j,0,Re,Ve,null),q>>=1,j>>=1}}else if(at.length>0){if(et&&yt){const q=Ee(at[0]);t.texStorage2D(i.TEXTURE_2D,ve,Xe,q.width,q.height)}for(let q=0,j=at.length;q<j;q++)Ce=at[q],et?N&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Re,Ve,Ce):t.texImage2D(i.TEXTURE_2D,q,Xe,Re,Ve,Ce);y.generateMipmaps=!1}else if(et){if(yt){const q=Ee(re);t.texStorage2D(i.TEXTURE_2D,ve,Xe,q.width,q.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Ve,re)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Re,Ve,re);g(y)&&p(K),De.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ae(w,y,k){if(y.image.length!==6)return;const K=dt(w,y),te=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);const J=n.get(te);if(te.version!==J.__version||K===!0){t.activeTexture(i.TEXTURE0+k);const De=lt.getPrimaries(lt.workingColorSpace),_e=y.colorSpace===yi?null:lt.getPrimaries(y.colorSpace),be=y.colorSpace===yi||De===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const st=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,Re=[];for(let j=0;j<6;j++)!st&&!re?Re[j]=x(y.image[j],!0,r.maxCubemapSize):Re[j]=re?y.image[j].image:y.image[j],Re[j]=Ge(y,Re[j]);const Ve=Re[0],Xe=s.convert(y.format,y.colorSpace),Ce=s.convert(y.type),at=b(y.internalFormat,Xe,Ce,y.colorSpace),et=y.isVideoTexture!==!0,yt=J.__version===void 0||K===!0,N=te.dataReady;let ve=U(y,Ve);Ze(i.TEXTURE_CUBE_MAP,y);let q;if(st){et&&yt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,at,Ve.width,Ve.height);for(let j=0;j<6;j++){q=Re[j].mipmaps;for(let ye=0;ye<q.length;ye++){const xe=q[ye];y.format!==Hn?Xe!==null?et?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,0,0,xe.width,xe.height,Xe,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,at,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,0,0,xe.width,xe.height,Xe,Ce,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,at,xe.width,xe.height,0,Xe,Ce,xe.data)}}}else{if(q=y.mipmaps,et&&yt){q.length>0&&ve++;const j=Ee(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,at,j.width,j.height)}for(let j=0;j<6;j++)if(re){et?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Re[j].width,Re[j].height,Xe,Ce,Re[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,at,Re[j].width,Re[j].height,0,Xe,Ce,Re[j].data);for(let ye=0;ye<q.length;ye++){const $e=q[ye].image[j].image;et?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,0,0,$e.width,$e.height,Xe,Ce,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,at,$e.width,$e.height,0,Xe,Ce,$e.data)}}else{et?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Xe,Ce,Re[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,at,Xe,Ce,Re[j]);for(let ye=0;ye<q.length;ye++){const xe=q[ye];et?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,0,0,Xe,Ce,xe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,at,Xe,Ce,xe.image[j])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),J.__version=te.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Le(w,y,k,K,te,J){const De=s.convert(k.format,k.colorSpace),_e=s.convert(k.type),be=b(k.internalFormat,De,_e,k.colorSpace),st=n.get(y),re=n.get(k);if(re.__renderTarget=y,!st.__hasExternalTextures){const Re=Math.max(1,y.width>>J),Ve=Math.max(1,y.height>>J);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,J,be,Re,Ve,y.depth,0,De,_e,null):t.texImage2D(te,J,be,Re,Ve,0,De,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),we(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,re.__webglTexture,0,ie(y)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,re.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(w,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const K=y.depthTexture,te=K&&K.isDepthTexture?K.type:null,J=M(y.stencilBuffer,te),De=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=ie(y);we(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,J,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,w)}else{const K=y.textures;for(let te=0;te<K.length;te++){const J=K[te],De=s.convert(J.format,J.colorSpace),_e=s.convert(J.type),be=b(J.internalFormat,De,_e,J.colorSpace),st=ie(y);k&&we(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,be,y.width,y.height):we(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,be,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,be,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const te=K.__webglTexture,J=ie(y);if(y.depthTexture.format===wr)we(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(y.depthTexture.format===Fr)we(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ye(w){const y=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=K}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Be(y.__webglFramebuffer,w)}else if(k){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),ue(y.__webglDepthbuffer[K],w,!1);else{const te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ue(y.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(w,y,k){const K=n.get(w);y!==void 0&&Le(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ye(w)}function ot(w){const y=w.texture,k=n.get(w),K=n.get(y);w.addEventListener("dispose",P);const te=w.textures,J=w.isWebGLCubeRenderTarget===!0,De=te.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,a.memory.textures++),J){k.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[_e]=[];for(let be=0;be<y.mipmaps.length;be++)k.__webglFramebuffer[_e][be]=i.createFramebuffer()}else k.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let _e=0;_e<y.mipmaps.length;_e++)k.__webglFramebuffer[_e]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(De)for(let _e=0,be=te.length;_e<be;_e++){const st=n.get(te[_e]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&we(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let _e=0;_e<te.length;_e++){const be=te[_e];k.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[_e]);const st=s.convert(be.format,be.colorSpace),re=s.convert(be.type),Re=b(be.internalFormat,st,re,be.colorSpace,w.isXRRenderTarget===!0),Ve=ie(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Re,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,k.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,y);for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)Le(k.__webglFramebuffer[_e][be],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be);else Le(k.__webglFramebuffer[_e],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let _e=0,be=te.length;_e<be;_e++){const st=te[_e],re=n.get(st);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),Ze(i.TEXTURE_2D,st),Le(k.__webglFramebuffer,w,st,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),g(st)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,K.__webglTexture),Ze(_e,y),y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)Le(k.__webglFramebuffer[be],w,y,i.COLOR_ATTACHMENT0,_e,be);else Le(k.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,_e,0);g(y)&&p(_e),t.unbindTexture()}w.depthBuffer&&Ye(w)}function Q(w){const y=w.textures;for(let k=0,K=y.length;k<K;k++){const te=y[k];if(g(te)){const J=A(w),De=n.get(te).__webglTexture;t.bindTexture(J,De),p(J),t.unbindTexture()}}}const se=[],R=[];function Fe(w){if(w.samples>0){if(we(w)===!1){const y=w.textures,k=w.width,K=w.height;let te=i.COLOR_BUFFER_BIT;const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(w),_e=y.length>1;if(_e)for(let be=0;be<y.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let be=0;be<y.length;be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[be]);const st=n.get(y[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,te,i.NEAREST),l===!0&&(se.length=0,R.length=0,se.push(i.COLOR_ATTACHMENT0+be),w.depthBuffer&&w.resolveDepthBuffer===!1&&(se.push(J),R.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let be=0;be<y.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,De.__webglColorRenderbuffer[be]);const st=n.get(y[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ie(w){return Math.min(r.maxSamples,w.samples)}function we(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function he(w){const y=a.render.frame;f.get(w)!==y&&(f.set(w,y),w.update())}function Ge(w,y){const k=w.colorSpace,K=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==kr&&k!==yi&&(lt.getTransfer(k)===xt?(K!==Hn||te!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=We,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=we}function G_(i,e){function t(n,r=yi){let s;const a=lt.getTransfer(r);if(n===fi)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gf)return i.BYTE;if(n===_f)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===xf)return i.ALPHA;if(n===Mf)return i.RGB;if(n===Hn)return i.RGBA;if(n===yf)return i.LUMINANCE;if(n===Sf)return i.LUMINANCE_ALPHA;if(n===wr)return i.DEPTH_COMPONENT;if(n===Fr)return i.DEPTH_STENCIL;if(n===za)return i.RED;if(n===$l)return i.RED_INTEGER;if(n===Ef)return i.RG;if(n===jl)return i.RG_INTEGER;if(n===Ql)return i.RGBA_INTEGER;if(n===ma||n===ga||n===_a||n===va)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===el)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===sl||n===al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===rl||n===sl)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===al)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===ll||n===cl||n===ul||n===fl||n===hl||n===dl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===Ml)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ol)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===yl||n===Sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xa)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bf||n===El||n===bl||n===Tl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===El)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class V_ extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zt extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W_={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y_=`
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

}`;class q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ai({vertexShader:X_,fragmentShader:Y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z_ extends Hr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,_=null;const x=new q_,g=t.getContextAttributes();let p=null,A=null;const b=[],M=[],U=new ce;let C=null;const P=new yn;P.viewport=new Dt;const D=new yn;D.viewport=new Dt;const T=[P,D],S=new V_;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=b[$];return ae===void 0&&(ae=new Ro,b[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=b[$];return ae===void 0&&(ae=new Ro,b[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=b[$];return ae===void 0&&(ae=new Ro,b[$]=ae),ae.getHandSpace()};function z($){const ae=M.indexOf($.inputSource);if(ae===-1)return;const Le=b[ae];Le!==void 0&&(Le.update($.inputSource,$.frame,c||a),Le.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let $=0;$<b.length;$++){const ae=M[$];ae!==null&&(M[$]=null,b[$].disconnect(ae))}L=null,H=null,x.reset(),e.setRenderTarget(p),m=null,d=null,h=null,r=null,A=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Yi(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ae=null,Le=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?Fr:wr,Le=g.stencil?Nr:Xi);const Be={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Yi(d.textureWidth,d.textureHeight,{format:Hn,type:fi,depthTexture:new zf(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),dt.setContext(r),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z($){for(let ae=0;ae<$.removed.length;ae++){const Le=$.removed[ae],ue=M.indexOf(Le);ue>=0&&(M[ue]=null,b[ue].disconnect(Le))}for(let ae=0;ae<$.added.length;ae++){const Le=$.added[ae];let ue=M.indexOf(Le);if(ue===-1){for(let Ye=0;Ye<b.length;Ye++)if(Ye>=M.length){M.push(Le),ue=Ye;break}else if(M[Ye]===null){M[Ye]=Le,ue=Ye;break}if(ue===-1)break}const Be=b[ue];Be&&Be.connect(Le)}}const Y=new I,ee=new I;function X($,ae,Le){Y.setFromMatrixPosition(ae.matrixWorld),ee.setFromMatrixPosition(Le.matrixWorld);const ue=Y.distanceTo(ee),Be=ae.projectionMatrix.elements,Ye=Le.projectionMatrix.elements,We=Be[14]/(Be[10]-1),ot=Be[14]/(Be[10]+1),Q=(Be[9]+1)/Be[5],se=(Be[9]-1)/Be[5],R=(Be[8]-1)/Be[0],Fe=(Ye[8]+1)/Ye[0],ie=We*R,we=We*Fe,he=ue/(-R+Fe),Ge=he*-R;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ge),$.translateZ(he),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Be[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ee=We+he,w=ot+he,y=ie-Ge,k=we+(ue-Ge),K=Q*ot/w*Ee,te=se*ot/w*Ee;$.projectionMatrix.makePerspective(y,k,K,te,Ee,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pe($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ae=$.near,Le=$.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(Le=x.depthFar)),S.near=D.near=P.near=ae,S.far=D.far=P.far=Le,(L!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far),P.layers.mask=$.layers.mask|2,D.layers.mask=$.layers.mask|4,S.layers.mask=P.layers.mask|D.layers.mask;const ue=$.parent,Be=S.cameras;pe(S,ue);for(let Ye=0;Ye<Be.length;Ye++)pe(Be[Ye],ue);Be.length===2?X(S,P,D):S.projectionMatrix.copy(P.projectionMatrix),Se($,S,ue)};function Se($,ae,Le){Le===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(Le.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Pe=null;function Ze($,ae){if(f=ae.getViewerPose(c||a),_=ae,f!==null){const Le=f.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let ue=!1;Le.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Ye=0;Ye<Le.length;Ye++){const We=Le[Ye];let ot=null;if(m!==null)ot=m.getViewport(We);else{const se=h.getViewSubImage(d,We);ot=se.viewport,Ye===0&&(e.setRenderTargetTextures(A,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(A))}let Q=T[Ye];Q===void 0&&(Q=new yn,Q.layers.enable(Ye),Q.viewport=new Dt,T[Ye]=Q),Q.matrix.fromArray(We.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(We.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ot.x,ot.y,ot.width,ot.height),Ye===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(Q)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ye=h.getDepthInformation(Le[0]);Ye&&Ye.isValid&&Ye.texture&&x.init(e,Ye,r.renderState)}}for(let Le=0;Le<b.length;Le++){const ue=M[Le],Be=b[Le];ue!==null&&Be!==void 0&&Be.update(ue,ae,c||a)}Pe&&Pe($,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const dt=new Of;dt.setAnimationLoop(Ze),this.setAnimationLoop=function($){Pe=$},this.dispose=function(){}}}const Ui=new Kn,K_=new vt;function J_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Uf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,A,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),f(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,A,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const A=e.get(p),b=A.envMap,M=A.envMapRotation;b&&(g.envMap.value=b,Ui.copy(M),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),g.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(Ui)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,A,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const M=b.program;n.uniformBlockBinding(A,M)}function c(A,b){let M=r[A.id];M===void 0&&(_(A),M=f(A),r[A.id]=M,A.addEventListener("dispose",g));const U=b.program;n.updateUBOMapping(A,U);const C=e.render.frame;s[A.id]!==C&&(d(A),s[A.id]=C)}function f(A){const b=h();A.__bindingPointIndex=b;const M=i.createBuffer(),U=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,U,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const b=r[A.id],M=A.uniforms,U=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,P=M.length;C<P;C++){const D=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,S=D.length;T<S;T++){const L=D[T];if(m(L,C,T,U)===!0){const H=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Z=0;Z<z.length;Z++){const Y=z[Z],ee=x(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,H+W,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,b,M,U){const C=A.value,P=b+"_"+M;if(U[P]===void 0)return typeof C=="number"||typeof C=="boolean"?U[P]=C:U[P]=C.clone(),!0;{const D=U[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return U[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(A){const b=A.uniforms;let M=0;const U=16;for(let P=0,D=b.length;P<D;P++){const T=Array.isArray(b[P])?b[P]:[b[P]];for(let S=0,L=T.length;S<L;S++){const H=T[S],z=Array.isArray(H.value)?H.value:[H.value];for(let W=0,Z=z.length;W<Z;W++){const Y=z[W],ee=x(Y),X=M%U,pe=X%ee.boundary,Se=X+pe;M+=pe,Se!==0&&U-Se<ee.storage&&(M+=U-Se),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=ee.storage}}}const C=M%U;return C>0&&(M+=U-C),A.__size=M,A.__cache={},this}function x(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function g(A){const b=A.target;b.removeEventListener("dispose",g);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class j_{constructor(e={}){const{canvas:t=zd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=Ei,this.toneMappingExposure=1;const M=this;let U=!1,C=0,P=0,D=null,T=-1,S=null;const L=new Dt,H=new Dt;let z=null;const W=new nt(0);let Z=0,Y=t.width,ee=t.height,X=1,pe=null,Se=null;const Pe=new Dt(0,0,Y,ee),Ze=new Dt(0,0,Y,ee);let dt=!1;const $=new ec;let ae=!1,Le=!1;const ue=new vt,Be=new vt,Ye=new I,We=new Dt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function se(){return D===null?X:1}let R=n;function Fe(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ql}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",xe,!1),R===null){const F="webgl2";if(R=Fe(F,E),R===null)throw Fe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ie,we,he,Ge,Ee,w,y,k,K,te,J,De,_e,be,st,re,Re,Ve,Xe,Ce,at,et,yt,N;function ve(){ie=new ig(R),ie.init(),et=new G_(R,ie),we=new $m(R,ie,e,et),he=new z_(R,ie),we.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),Ge=new ag(R),Ee=new b_,w=new H_(R,ie,he,Ee,we,et,Ge),y=new Qm(M),k=new ng(M),K=new dp(R),yt=new Km(R,K),te=new rg(R,K,Ge,yt),J=new lg(R,te,K,Ge),Xe=new og(R,we,w),re=new jm(Ee),De=new E_(M,y,k,ie,we,yt,re),_e=new J_(M,Ee),be=new A_,st=new D_(ie),Ve=new Zm(M,y,k,he,J,m,l),Re=new O_(M,J,we),N=new $_(R,Ge,we,he),Ce=new Jm(R,ie,Ge),at=new sg(R,ie,Ge),Ge.programs=De.programs,M.capabilities=we,M.extensions=ie,M.properties=Ee,M.renderLists=be,M.shadowMap=Re,M.state=he,M.info=Ge}ve();const q=new Z_(M,R);this.xr=q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(Y,ee,!1))},this.getSize=function(E){return E.set(Y,ee)},this.setSize=function(E,F,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,ee=F,t.width=Math.floor(E*X),t.height=Math.floor(F*X),G===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Y*X,ee*X).floor()},this.setDrawingBufferSize=function(E,F,G){Y=E,ee=F,X=G,t.width=Math.floor(E*G),t.height=Math.floor(F*G),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Pe)},this.setViewport=function(E,F,G,V){E.isVector4?Pe.set(E.x,E.y,E.z,E.w):Pe.set(E,F,G,V),he.viewport(L.copy(Pe).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Ze)},this.setScissor=function(E,F,G,V){E.isVector4?Ze.set(E.x,E.y,E.z,E.w):Ze.set(E,F,G,V),he.scissor(H.copy(Ze).multiplyScalar(X).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(E){he.setScissorTest(dt=E)},this.setOpaqueSort=function(E){pe=E},this.setTransparentSort=function(E){Se=E},this.getClearColor=function(E){return E.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(E=!0,F=!0,G=!0){let V=0;if(E){let O=!1;if(D!==null){const oe=D.texture.format;O=oe===Ql||oe===jl||oe===$l}if(O){const oe=D.texture.type,Me=oe===fi||oe===Xi||oe===Ms||oe===Nr||oe===Kl||oe===Jl,Ie=Ve.getClearColor(),Ue=Ve.getClearAlpha(),qe=Ie.r,je=Ie.g,Ne=Ie.b;Me?(_[0]=qe,_[1]=je,_[2]=Ne,_[3]=Ue,R.clearBufferuiv(R.COLOR,0,_)):(x[0]=qe,x[1]=je,x[2]=Ne,x[3]=Ue,R.clearBufferiv(R.COLOR,0,x))}else V|=R.COLOR_BUFFER_BIT}F&&(V|=R.DEPTH_BUFFER_BIT),G&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),be.dispose(),st.dispose(),Ee.dispose(),y.dispose(),k.dispose(),J.dispose(),yt.dispose(),N.dispose(),De.dispose(),q.dispose(),q.removeEventListener("sessionstart",uc),q.removeEventListener("sessionend",fc),wi.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const E=Ge.autoReset,F=Re.enabled,G=Re.autoUpdate,V=Re.needsUpdate,O=Re.type;ve(),Ge.autoReset=E,Re.enabled=F,Re.autoUpdate=G,Re.needsUpdate=V,Re.type=O}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $e(E){const F=E.target;F.removeEventListener("dispose",$e),Rt(F)}function Rt(E){$t(E),Ee.remove(E)}function $t(E){const F=Ee.get(E).programs;F!==void 0&&(F.forEach(function(G){De.releaseProgram(G)}),E.isShaderMaterial&&De.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,G,V,O,oe){F===null&&(F=ot);const Me=O.isMesh&&O.matrixWorld.determinant()<0,Ie=mh(E,F,G,V,O);he.setMaterial(V,Me);let Ue=G.index,qe=1;if(V.wireframe===!0){if(Ue=te.getWireframeAttribute(G),Ue===void 0)return;qe=2}const je=G.drawRange,Ne=G.attributes.position;let ct=je.start*qe,St=(je.start+je.count)*qe;oe!==null&&(ct=Math.max(ct,oe.start*qe),St=Math.min(St,(oe.start+oe.count)*qe)),Ue!==null?(ct=Math.max(ct,0),St=Math.min(St,Ue.count)):Ne!=null&&(ct=Math.max(ct,0),St=Math.min(St,Ne.count));const Et=St-ct;if(Et<0||Et===1/0)return;yt.setup(O,V,Ie,G,Ue);let cn,pt=Ce;if(Ue!==null&&(cn=K.get(Ue),pt=at,pt.setIndex(cn)),O.isMesh)V.wireframe===!0?(he.setLineWidth(V.wireframeLinewidth*se()),pt.setMode(R.LINES)):pt.setMode(R.TRIANGLES);else if(O.isLine){let Oe=V.linewidth;Oe===void 0&&(Oe=1),he.setLineWidth(Oe*se()),O.isLineSegments?pt.setMode(R.LINES):O.isLineLoop?pt.setMode(R.LINE_LOOP):pt.setMode(R.LINE_STRIP)}else O.isPoints?pt.setMode(R.POINTS):O.isSprite&&pt.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)pt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))pt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Oe=O._multiDrawStarts,jn=O._multiDrawCounts,mt=O._multiDrawCount,In=Ue?K.get(Ue).bytesPerElement:1,$i=Ee.get(V).currentProgram.getUniforms();for(let gn=0;gn<mt;gn++)$i.setValue(R,"_gl_DrawID",gn),pt.render(Oe[gn]/In,jn[gn])}else if(O.isInstancedMesh)pt.renderInstances(ct,Et,O.count);else if(G.isInstancedBufferGeometry){const Oe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,jn=Math.min(G.instanceCount,Oe);pt.renderInstances(ct,Et,jn)}else pt.render(ct,Et)};function gt(E,F,G){E.transparent===!0&&E.side===Xn&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,Ds(E,F,G),E.side=Ti,E.needsUpdate=!0,Ds(E,F,G),E.side=Xn):Ds(E,F,G)}this.compile=function(E,F,G=null){G===null&&(G=E),p=st.get(G),p.init(F),b.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let Me=0;Me<oe.length;Me++){const Ie=oe[Me];gt(Ie,G,O),V.add(Ie)}else gt(oe,G,O),V.add(oe)}),b.pop(),p=null,V},this.compileAsync=function(E,F,G=null){const V=this.compile(E,F,G);return new Promise(O=>{function oe(){if(V.forEach(function(Me){Ee.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){O(E);return}setTimeout(oe,10)}ie.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Dn=null;function $n(E){Dn&&Dn(E)}function uc(){wi.stop()}function fc(){wi.start()}const wi=new Of;wi.setAnimationLoop($n),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(E){Dn=E,q.setAnimationLoop(E),E===null?wi.stop():wi.start()},q.addEventListener("sessionstart",uc),q.addEventListener("sessionend",fc),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,F,D),p=st.get(E,b.length),p.init(F),b.push(p),Be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(Be),Le=this.localClippingEnabled,ae=re.init(this.clippingPlanes,Le),g=be.get(E,A.length),g.init(),A.push(g),q.enabled===!0&&q.isPresenting===!0){const oe=M.xr.getDepthSensingMesh();oe!==null&&Za(oe,F,-1/0,M.sortObjects)}Za(E,F,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(pe,Se),Q=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Q&&Ve.addToRenderList(g,E),this.info.render.frame++,ae===!0&&re.beginShadows();const G=p.state.shadowsArray;Re.render(G,E,F),ae===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){const oe=F.cameras;if(O.length>0)for(let Me=0,Ie=oe.length;Me<Ie;Me++){const Ue=oe[Me];dc(V,O,E,Ue)}Q&&Ve.render(E);for(let Me=0,Ie=oe.length;Me<Ie;Me++){const Ue=oe[Me];hc(g,E,Ue,Ue.viewport)}}else O.length>0&&dc(V,O,E,F),Q&&Ve.render(E),hc(g,E,F);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(M,E,F),yt.resetDefaultState(),T=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],ae===!0&&re.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function Za(E,F,G,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){V&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Be);const Me=J.update(E),Ie=E.material;Ie.visible&&g.push(E,Me,Ie,G,We.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const Me=J.update(E),Ie=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),We.copy(Me.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(Be)),Array.isArray(Ie)){const Ue=Me.groups;for(let qe=0,je=Ue.length;qe<je;qe++){const Ne=Ue[qe],ct=Ie[Ne.materialIndex];ct&&ct.visible&&g.push(E,Me,ct,G,We.z,Ne)}}else Ie.visible&&g.push(E,Me,Ie,G,We.z,null)}}const oe=E.children;for(let Me=0,Ie=oe.length;Me<Ie;Me++)Za(oe[Me],F,G,V)}function hc(E,F,G,V){const O=E.opaque,oe=E.transmissive,Me=E.transparent;p.setupLightsView(G),ae===!0&&re.setGlobalState(M.clippingPlanes,G),V&&he.viewport(L.copy(V)),O.length>0&&Ls(O,F,G),oe.length>0&&Ls(oe,F,G),Me.length>0&&Ls(Me,F,G),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function dc(E,F,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Yi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Ts:fi,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[V.id],Me=V.viewport||L;oe.setSize(Me.z,Me.w);const Ie=M.getRenderTarget();M.setRenderTarget(oe),M.getClearColor(W),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),Q&&Ve.render(G);const Ue=M.toneMapping;M.toneMapping=Ei;const qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ae===!0&&re.setGlobalState(M.clippingPlanes,V),Ls(E,G,V),w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe),ie.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ne=0,ct=F.length;Ne<ct;Ne++){const St=F[Ne],Et=St.object,cn=St.geometry,pt=St.material,Oe=St.group;if(pt.side===Xn&&Et.layers.test(V.layers)){const jn=pt.side;pt.side=dn,pt.needsUpdate=!0,pc(Et,G,V,cn,pt,Oe),pt.side=jn,pt.needsUpdate=!0,je=!0}}je===!0&&(w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe))}M.setRenderTarget(Ie),M.setClearColor(W,Z),qe!==void 0&&(V.viewport=qe),M.toneMapping=Ue}function Ls(E,F,G){const V=F.isScene===!0?F.overrideMaterial:null;for(let O=0,oe=E.length;O<oe;O++){const Me=E[O],Ie=Me.object,Ue=Me.geometry,qe=V===null?Me.material:V,je=Me.group;Ie.layers.test(G.layers)&&pc(Ie,F,G,Ue,qe,je)}}function pc(E,F,G,V,O,oe){E.onBeforeRender(M,F,G,V,O,oe),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(M,F,G,V,E,oe),O.transparent===!0&&O.side===Xn&&O.forceSinglePass===!1?(O.side=dn,O.needsUpdate=!0,M.renderBufferDirect(G,F,V,O,E,oe),O.side=Ti,O.needsUpdate=!0,M.renderBufferDirect(G,F,V,O,E,oe),O.side=Xn):M.renderBufferDirect(G,F,V,O,E,oe),E.onAfterRender(M,F,G,V,O,oe)}function Ds(E,F,G){F.isScene!==!0&&(F=ot);const V=Ee.get(E),O=p.state.lights,oe=p.state.shadowsArray,Me=O.state.version,Ie=De.getParameters(E,O.state,oe,F,G),Ue=De.getProgramCacheKey(Ie);let qe=V.programs;V.environment=E.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(E.isMeshStandardMaterial?k:y).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",$e),qe=new Map,V.programs=qe);let je=qe.get(Ue);if(je!==void 0){if(V.currentProgram===je&&V.lightsStateVersion===Me)return gc(E,Ie),je}else Ie.uniforms=De.getUniforms(E),E.onBeforeCompile(Ie,M),je=De.acquireProgram(Ie,Ue),qe.set(Ue,je),V.uniforms=Ie.uniforms;const Ne=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=re.uniform),gc(E,Ie),V.needsLights=_h(E),V.lightsStateVersion=Me,V.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=je,V.uniformsList=null,je}function mc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ma.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function gc(E,F){const G=Ee.get(E);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function mh(E,F,G,V,O){F.isScene!==!0&&(F=ot),w.resetTextureUnits();const oe=F.fog,Me=V.isMeshStandardMaterial?F.environment:null,Ie=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:kr,Ue=(V.isMeshStandardMaterial?k:y).get(V.envMap||Me),qe=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,je=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!G.morphAttributes.position,ct=!!G.morphAttributes.normal,St=!!G.morphAttributes.color;let Et=Ei;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Et=M.toneMapping);const cn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=cn!==void 0?cn.length:0,Oe=Ee.get(V),jn=p.state.lights;if(ae===!0&&(Le===!0||E!==S)){const bn=E===S&&V.id===T;re.setState(V,E,bn)}let mt=!1;V.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==jn.state.version||Oe.outputColorSpace!==Ie||O.isBatchedMesh&&Oe.batching===!1||!O.isBatchedMesh&&Oe.batching===!0||O.isBatchedMesh&&Oe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Oe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Oe.instancing===!1||!O.isInstancedMesh&&Oe.instancing===!0||O.isSkinnedMesh&&Oe.skinning===!1||!O.isSkinnedMesh&&Oe.skinning===!0||O.isInstancedMesh&&Oe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Oe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Oe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Oe.instancingMorph===!1&&O.morphTexture!==null||Oe.envMap!==Ue||V.fog===!0&&Oe.fog!==oe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==re.numPlanes||Oe.numIntersection!==re.numIntersection)||Oe.vertexAlphas!==qe||Oe.vertexTangents!==je||Oe.morphTargets!==Ne||Oe.morphNormals!==ct||Oe.morphColors!==St||Oe.toneMapping!==Et||Oe.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,Oe.__version=V.version);let In=Oe.currentProgram;mt===!0&&(In=Ds(V,F,O));let $i=!1,gn=!1,Xr=!1;const bt=In.getUniforms(),Vn=Oe.uniforms;if(he.useProgram(In.program)&&($i=!0,gn=!0,Xr=!0),V.id!==T&&(T=V.id,gn=!0),$i||S!==E){he.buffers.depth.getReversed()?(ue.copy(E.projectionMatrix),Hd(ue),Gd(ue),bt.setValue(R,"projectionMatrix",ue)):bt.setValue(R,"projectionMatrix",E.projectionMatrix),bt.setValue(R,"viewMatrix",E.matrixWorldInverse);const hi=bt.map.cameraPosition;hi!==void 0&&hi.setValue(R,Ye.setFromMatrixPosition(E.matrixWorld)),we.logarithmicDepthBuffer&&bt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&bt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,gn=!0,Xr=!0)}if(O.isSkinnedMesh){bt.setOptional(R,O,"bindMatrix"),bt.setOptional(R,O,"bindMatrixInverse");const bn=O.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),bt.setValue(R,"boneTexture",bn.boneTexture,w))}O.isBatchedMesh&&(bt.setOptional(R,O,"batchingTexture"),bt.setValue(R,"batchingTexture",O._matricesTexture,w),bt.setOptional(R,O,"batchingIdTexture"),bt.setValue(R,"batchingIdTexture",O._indirectTexture,w),bt.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&bt.setValue(R,"batchingColorTexture",O._colorsTexture,w));const Yr=G.morphAttributes;if((Yr.position!==void 0||Yr.normal!==void 0||Yr.color!==void 0)&&Xe.update(O,G,In),(gn||Oe.receiveShadow!==O.receiveShadow)&&(Oe.receiveShadow=O.receiveShadow,bt.setValue(R,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Vn.envMap.value=Ue,Vn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(Vn.envMapIntensity.value=F.environmentIntensity),gn&&(bt.setValue(R,"toneMappingExposure",M.toneMappingExposure),Oe.needsLights&&gh(Vn,Xr),oe&&V.fog===!0&&_e.refreshFogUniforms(Vn,oe),_e.refreshMaterialUniforms(Vn,V,X,ee,p.state.transmissionRenderTarget[E.id]),Ma.upload(R,mc(Oe),Vn,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ma.upload(R,mc(Oe),Vn,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&bt.setValue(R,"center",O.center),bt.setValue(R,"modelViewMatrix",O.modelViewMatrix),bt.setValue(R,"normalMatrix",O.normalMatrix),bt.setValue(R,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const bn=V.uniformsGroups;for(let hi=0,di=bn.length;hi<di;hi++){const _c=bn[hi];N.update(_c,In),N.bind(_c,In)}}return In}function gh(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function _h(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,F,G){Ee.get(E.texture).__webglTexture=F,Ee.get(E.depthTexture).__webglTexture=G;const V=Ee.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const G=Ee.get(E);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,G=0){D=E,C=F,P=G;let V=!0,O=null,oe=!1,Me=!1;if(E){const Ue=Ee.get(E);if(Ue.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(Ue.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(Ue.__hasExternalTextures)w.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ne=E.depthTexture;if(Ue.__boundDepthTexture!==Ne){if(Ne!==null&&Ee.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const qe=E.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Me=!0);const je=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[F])?O=je[F][G]:O=je[F],oe=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?O=Ee.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?O=je[G]:O=je,L.copy(E.viewport),H.copy(E.scissor),z=E.scissorTest}else L.copy(Pe).multiplyScalar(X).floor(),H.copy(Ze).multiplyScalar(X).floor(),z=dt;if(he.bindFramebuffer(R.FRAMEBUFFER,O)&&V&&he.drawBuffers(E,O),he.viewport(L),he.scissor(H),he.setScissorTest(z),oe){const Ue=Ee.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ue.__webglTexture,G)}else if(Me){const Ue=Ee.get(E.texture),qe=F||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ue.__webglTexture,G||0,qe)}T=-1},this.readRenderTargetPixels=function(E,F,G,V,O,oe,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie){he.bindFramebuffer(R.FRAMEBUFFER,Ie);try{const Ue=E.texture,qe=Ue.format,je=Ue.type;if(!we.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&G>=0&&G<=E.height-O&&R.readPixels(F,G,V,O,et.convert(qe),et.convert(je),oe)}finally{const Ue=D!==null?Ee.get(D).__webglFramebuffer:null;he.bindFramebuffer(R.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,F,G,V,O,oe,Me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie){const Ue=E.texture,qe=Ue.format,je=Ue.type;if(!we.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-V&&G>=0&&G<=E.height-O){he.bindFramebuffer(R.FRAMEBUFFER,Ie);const Ne=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ne),R.bufferData(R.PIXEL_PACK_BUFFER,oe.byteLength,R.STREAM_READ),R.readPixels(F,G,V,O,et.convert(qe),et.convert(je),0);const ct=D!==null?Ee.get(D).__webglFramebuffer:null;he.bindFramebuffer(R.FRAMEBUFFER,ct);const St=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await kd(R,St,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ne),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,oe),R.deleteBuffer(Ne),R.deleteSync(St),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,G=0){E.isTexture!==!0&&(os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-G),O=Math.floor(E.image.width*V),oe=Math.floor(E.image.height*V),Me=F!==null?F.x:0,Ie=F!==null?F.y:0;w.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,Me,Ie,O,oe),he.unbindTexture()},this.copyTextureToTexture=function(E,F,G=null,V=null,O=0){E.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let oe,Me,Ie,Ue,qe,je,Ne,ct,St;const Et=E.isCompressedTexture?E.mipmaps[O]:E.image;G!==null?(oe=G.max.x-G.min.x,Me=G.max.y-G.min.y,Ie=G.isBox3?G.max.z-G.min.z:1,Ue=G.min.x,qe=G.min.y,je=G.isBox3?G.min.z:0):(oe=Et.width,Me=Et.height,Ie=Et.depth||1,Ue=0,qe=0,je=0),V!==null?(Ne=V.x,ct=V.y,St=V.z):(Ne=0,ct=0,St=0);const cn=et.convert(F.format),pt=et.convert(F.type);let Oe;F.isData3DTexture?(w.setTexture3D(F,0),Oe=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(w.setTexture2DArray(F,0),Oe=R.TEXTURE_2D_ARRAY):(w.setTexture2D(F,0),Oe=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const jn=R.getParameter(R.UNPACK_ROW_LENGTH),mt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),In=R.getParameter(R.UNPACK_SKIP_PIXELS),$i=R.getParameter(R.UNPACK_SKIP_ROWS),gn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Et.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Et.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,je);const Xr=E.isDataArrayTexture||E.isData3DTexture,bt=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Vn=Ee.get(E),Yr=Ee.get(F),bn=Ee.get(Vn.__renderTarget),hi=Ee.get(Yr.__renderTarget);he.bindFramebuffer(R.READ_FRAMEBUFFER,bn.__webglFramebuffer),he.bindFramebuffer(R.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let di=0;di<Ie;di++)Xr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(E).__webglTexture,O,je+di),E.isDepthTexture?(bt&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(F).__webglTexture,O,St+di),R.blitFramebuffer(Ue,qe,oe,Me,Ne,ct,oe,Me,R.DEPTH_BUFFER_BIT,R.NEAREST)):bt?R.copyTexSubImage3D(Oe,O,Ne,ct,St+di,Ue,qe,oe,Me):R.copyTexSubImage2D(Oe,O,Ne,ct,St+di,Ue,qe,oe,Me);he.bindFramebuffer(R.READ_FRAMEBUFFER,null),he.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else bt?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Oe,O,Ne,ct,St,oe,Me,Ie,cn,pt,Et.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(Oe,O,Ne,ct,St,oe,Me,Ie,cn,Et.data):R.texSubImage3D(Oe,O,Ne,ct,St,oe,Me,Ie,cn,pt,Et):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,O,Ne,ct,oe,Me,cn,pt,Et.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,O,Ne,ct,Et.width,Et.height,cn,Et.data):R.texSubImage2D(R.TEXTURE_2D,O,Ne,ct,oe,Me,cn,pt,Et);R.pixelStorei(R.UNPACK_ROW_LENGTH,jn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,mt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,In),R.pixelStorei(R.UNPACK_SKIP_ROWS,$i),R.pixelStorei(R.UNPACK_SKIP_IMAGES,gn),O===0&&F.generateMipmaps&&R.generateMipmap(Oe),he.unbindTexture()},this.copyTextureToTexture3D=function(E,F,G=null,V=null,O=0){return E.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,G,V,O)},this.initRenderTarget=function(E){Ee.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,he.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}class nc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=n}clone(){return new nc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wf extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Q_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Al,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new I;class Ra{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ra(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ca extends Vr{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let dr;const jr=new I,pr=new I,mr=new I,gr=new ce,Qr=new ce,Xf=new vt,ra=new I,es=new I,sa=new I,bu=new ce,Co=new ce,Tu=new ce;class Cl extends Yt{constructor(e=new Ca){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new mn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Q_(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Ra(n,3,0,!1)),dr.setAttribute("uv",new Ra(n,2,3,!1))}this.geometry=dr,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),Xf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;aa(ra.set(-.5,-.5,0),mr,a,pr,r,s),aa(es.set(.5,-.5,0),mr,a,pr,r,s),aa(sa.set(.5,.5,0),mr,a,pr,r,s),bu.set(0,0),Co.set(1,0),Tu.set(1,1);let o=e.ray.intersectTriangle(ra,es,sa,!1,jr);if(o===null&&(aa(es.set(-.5,.5,0),mr,a,pr,r,s),Co.set(0,1),o=e.ray.intersectTriangle(ra,sa,es,!1,jr),o===null))return;const l=e.ray.origin.distanceTo(jr);l<e.near||l>e.far||t.push({distance:l,point:jr.clone(),uv:Pn.getInterpolation(jr,ra,es,sa,bu,Co,Tu,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function aa(i,e,t,n,r,s){gr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Qr.x=s*gr.x-r*gr.y,Qr.y=r*gr.x+s*gr.y):Qr.copy(gr),i.copy(e),i.x+=Qr.x,i.y+=Qr.y,i.applyMatrix4(Xf)}class Yf extends sn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=ln,f=ln,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Au extends pn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _r=new vt,wu=new vt,oa=[],Ru=new Ki,ev=new vt,ts=new At,ns=new As;class Pl extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Au(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ev)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),Ru.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(Ru)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),ns.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),e.ray.intersectsSphere(ns)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_r),wu.multiplyMatrices(n,_r),ts.matrixWorld=wu,ts.raycast(e,oa);for(let a=0,o=oa.length;a<o;a++){const l=oa[a];l.instanceId=s,l.object=this,t.push(l)}oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Au(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yf(new Float32Array(r*this.count),r,this.count,za,Zn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class tv extends sn{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const f=n[r],d=n[r+1]-f,m=(a-f)/d;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ce:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,r=[],s=[],a=[],o=new I,l=new vt;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(rn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(rn(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ic extends Jn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*f-m*h+this.aX,c=d*h+m*f+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nv extends ic{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function rc(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,f,h){let d=(a-s)/c-(o-s)/(c+f)+(o-a)/f,m=(o-a)/f-(l-a)/(f+h)+(l-o)/h;d*=f,m*=f,r(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const la=new I,Po=new rc,Lo=new rc,Do=new rc;class iv extends Jn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,f;this.closed||o>0?c=r[(o-1)%s]:(la.subVectors(r[0],r[1]).add(r[0]),c=la);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:(la.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=la),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),m),x=Math.pow(h.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(f),m);x<1e-4&&(x=1),_<1e-4&&(_=x),g<1e-4&&(g=x),Po.initNonuniformCatmullRom(c.x,h.x,d.x,f.x,_,x,g),Lo.initNonuniformCatmullRom(c.y,h.y,d.y,f.y,_,x,g),Do.initNonuniformCatmullRom(c.z,h.z,d.z,f.z,_,x,g)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(c.x,h.x,d.x,f.x,this.tension),Lo.initCatmullRom(c.y,h.y,d.y,f.y,this.tension),Do.initCatmullRom(c.z,h.z,d.z,f.z,this.tension));return n.set(Po.calc(l),Lo.calc(l),Do.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cu(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function rv(i,e){const t=1-i;return t*t*e}function sv(i,e){return 2*(1-i)*i*e}function av(i,e){return i*i*e}function ps(i,e,t,n){return rv(i,e)+sv(i,t)+av(i,n)}function ov(i,e){const t=1-i;return t*t*t*e}function lv(i,e){const t=1-i;return 3*t*t*i*e}function cv(i,e){return 3*(1-i)*i*i*e}function uv(i,e){return i*i*i*e}function ms(i,e,t,n,r){return ov(i,e)+lv(i,t)+cv(i,n)+uv(i,r)}class qf extends Jn{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ms(e,r.x,s.x,a.x,o.x),ms(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fv extends Jn{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ms(e,r.x,s.x,a.x,o.x),ms(e,r.y,s.y,a.y,o.y),ms(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zf extends Jn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hv extends Jn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kf extends Jn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ps(e,r.x,s.x,a.x),ps(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dv extends Jn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ps(e,r.x,s.x,a.x),ps(e,r.y,s.y,a.y),ps(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jf extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],f=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Cu(o,l.x,c.x,f.x,h.x),Cu(o,l.y,c.y,f.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ce().fromArray(r))}return this}}var Ll=Object.freeze({__proto__:null,ArcCurve:nv,CatmullRomCurve3:iv,CubicBezierCurve:qf,CubicBezierCurve3:fv,EllipseCurve:ic,LineCurve:Zf,LineCurve3:hv,QuadraticBezierCurve:Kf,QuadraticBezierCurve3:dv,SplineCurve:Jf});class pv extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const f=l[c];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Ll[r.type]().fromJSON(r))}return this}}class Pu extends pv{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zf(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Kf(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new qf(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Jf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,t+f,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new ic(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ga extends mn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],m=[];let _=0;const x=[],g=n/2;let p=0;A(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(f),this.setAttribute("position",new Ut(h,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(m,2));function A(){const M=new I,U=new I;let C=0;const P=(t-e)/n;for(let D=0;D<=s;D++){const T=[],S=D/s,L=S*(t-e)+e;for(let H=0;H<=r;H++){const z=H/r,W=z*l+o,Z=Math.sin(W),Y=Math.cos(W);U.x=L*Z,U.y=-S*n+g,U.z=L*Y,h.push(U.x,U.y,U.z),M.set(Z,P,Y).normalize(),d.push(M.x,M.y,M.z),m.push(z,1-S),T.push(_++)}x.push(T)}for(let D=0;D<r;D++)for(let T=0;T<s;T++){const S=x[T][D],L=x[T+1][D],H=x[T+1][D+1],z=x[T][D+1];(e>0||T!==0)&&(f.push(S,L,z),C+=3),(t>0||T!==s-1)&&(f.push(L,H,z),C+=3)}c.addGroup(p,C,0),p+=C}function b(M){const U=_,C=new ce,P=new I;let D=0;const T=M===!0?e:t,S=M===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,g*S,0),d.push(0,S,0),m.push(.5,.5),_++;const L=_;for(let H=0;H<=r;H++){const W=H/r*l+o,Z=Math.cos(W),Y=Math.sin(W);P.x=T*Y,P.y=g*S,P.z=T*Z,h.push(P.x,P.y,P.z),d.push(0,S,0),C.x=Z*.5+.5,C.y=Y*.5*S+.5,m.push(C.x,C.y),_++}for(let H=0;H<r;H++){const z=U+H,W=L+H;M===!0?f.push(W,W+1,z):f.push(W+1,W,z),D+=3}c.addGroup(p,D,M===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Va extends Ga{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Va(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends mn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),f(),this.setAttribute("position",new Ut(s,3)),this.setAttribute("normal",new Ut(s.slice(),3)),this.setAttribute("uv",new Ut(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const b=new I,M=new I,U=new I;for(let C=0;C<t.length;C+=3)m(t[C+0],b),m(t[C+1],M),m(t[C+2],U),l(b,M,U,A)}function l(A,b,M,U){const C=U+1,P=[];for(let D=0;D<=C;D++){P[D]=[];const T=A.clone().lerp(M,D/C),S=b.clone().lerp(M,D/C),L=C-D;for(let H=0;H<=L;H++)H===0&&D===C?P[D][H]=T:P[D][H]=T.clone().lerp(S,H/L)}for(let D=0;D<C;D++)for(let T=0;T<2*(C-D)-1;T++){const S=Math.floor(T/2);T%2===0?(d(P[D][S+1]),d(P[D+1][S]),d(P[D][S])):(d(P[D][S+1]),d(P[D+1][S+1]),d(P[D+1][S]))}}function c(A){const b=new I;for(let M=0;M<s.length;M+=3)b.x=s[M+0],b.y=s[M+1],b.z=s[M+2],b.normalize().multiplyScalar(A),s[M+0]=b.x,s[M+1]=b.y,s[M+2]=b.z}function f(){const A=new I;for(let b=0;b<s.length;b+=3){A.x=s[b+0],A.y=s[b+1],A.z=s[b+2];const M=g(A)/2/Math.PI+.5,U=p(A)/Math.PI+.5;a.push(M,1-U)}_(),h()}function h(){for(let A=0;A<a.length;A+=6){const b=a[A+0],M=a[A+2],U=a[A+4],C=Math.max(b,M,U),P=Math.min(b,M,U);C>.9&&P<.1&&(b<.2&&(a[A+0]+=1),M<.2&&(a[A+2]+=1),U<.2&&(a[A+4]+=1))}}function d(A){s.push(A.x,A.y,A.z)}function m(A,b){const M=A*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function _(){const A=new I,b=new I,M=new I,U=new I,C=new ce,P=new ce,D=new ce;for(let T=0,S=0;T<s.length;T+=9,S+=6){A.set(s[T+0],s[T+1],s[T+2]),b.set(s[T+3],s[T+4],s[T+5]),M.set(s[T+6],s[T+7],s[T+8]),C.set(a[S+0],a[S+1]),P.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),U.copy(A).add(b).add(M).divideScalar(3);const L=g(U);x(C,S+0,A,L),x(P,S+2,b,L),x(D,S+4,M,L)}}function x(A,b,M,U){U<0&&A.x===1&&(a[b]=A.x-1),M.x===0&&M.z===0&&(a[b]=U/2/Math.PI+.5)}function g(A){return Math.atan2(A.z,-A.x)}function p(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.vertices,e.indices,e.radius,e.details)}}class Wa extends Pu{constructor(e){super(e),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Pu().fromJSON(r))}return this}}const mv={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=$f(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,f,h,d,m;if(n&&(s=Mv(i,e,s,t)),i.length>80*t){o=c=i[0],l=f=i[1];for(let _=t;_<r;_+=t)h=i[_],d=i[_+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>f&&(f=d);m=Math.max(c-o,f-l),m=m!==0?32767/m:0}return ys(s,a,t,o,l,m,0),a}};function $f(i,e,t,n,r){let s,a;if(r===Lv(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Lu(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Lu(s,i[s],i[s+1],a);return a&&Xa(a,a.next)&&(Es(a),a=a.next),a}function qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xa(t,t.next)||wt(t.prev,t,t.next)===0)){if(Es(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ys(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Tv(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?_v(i,n,r,s):gv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Es(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vv(qi(i),e,t),ys(i,e,t,n,r,s,2)):a===2&&xv(i,e,t,n,r,s):ys(qi(i),e,t,n,r,s,1);break}}}function gv(i){const e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,f=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=f&&_.x<=d&&_.y>=h&&_.y<=m&&Sr(r,o,s,l,a,c,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function _v(i,e,t,n){const r=i.prev,s=i,a=i.next;if(wt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,f=r.y,h=s.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,_=f<h?f<d?f:d:h<d?h:d,x=o>l?o>c?o:c:l>c?l:c,g=f>h?f>d?f:d:h>d?h:d,p=Dl(m,_,e,t,n),A=Dl(x,g,e,t,n);let b=i.prevZ,M=i.nextZ;for(;b&&b.z>=p&&M&&M.z<=A;){if(b.x>=m&&b.x<=x&&b.y>=_&&b.y<=g&&b!==r&&b!==a&&Sr(o,f,l,h,c,d,b.x,b.y)&&wt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=m&&M.x<=x&&M.y>=_&&M.y<=g&&M!==r&&M!==a&&Sr(o,f,l,h,c,d,M.x,M.y)&&wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=m&&b.x<=x&&b.y>=_&&b.y<=g&&b!==r&&b!==a&&Sr(o,f,l,h,c,d,b.x,b.y)&&wt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=A;){if(M.x>=m&&M.x<=x&&M.y>=_&&M.y<=g&&M!==r&&M!==a&&Sr(o,f,l,h,c,d,M.x,M.y)&&wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vv(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Xa(r,s)&&jf(r,n,n.next,s)&&Ss(r,s)&&Ss(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Es(n),Es(n.next),n=i=s),n=n.next}while(n!==i);return qi(n)}function xv(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rv(a,o)){let l=Qf(a,o);a=qi(a,a.next),l=qi(l,l.next),ys(a,e,t,n,r,s,0),ys(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Mv(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=$f(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(wv(c));for(r.sort(yv),s=0;s<r.length;s++)t=Sv(r[s],t);return t}function yv(i,e){return i.x-e.x}function Sv(i,e){const t=Ev(i,e);if(!t)return e;const n=Qf(t,i);return qi(n,n.next),qi(t,t.next)}function Ev(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let f=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Sr(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),Ss(t,i)&&(h<f||h===f&&(t.x>r.x||t.x===r.x&&bv(r,t)))&&(r=t,f=h)),t=t.next;while(t!==o);return r}function bv(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function Tv(i,e,t,n){let r=i;do r.z===0&&(r.z=Dl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Av(r)}function Av(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function Dl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Sr(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Rv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cv(i,e)&&(Ss(i,e)&&Ss(e,i)&&Pv(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||Xa(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xa(i,e){return i.x===e.x&&i.y===e.y}function jf(i,e,t,n){const r=ua(wt(i,e,t)),s=ua(wt(i,e,n)),a=ua(wt(t,n,i)),o=ua(wt(t,n,e));return!!(r!==s&&a!==o||r===0&&ca(i,t,e)||s===0&&ca(i,n,e)||a===0&&ca(t,i,n)||o===0&&ca(t,e,n))}function ca(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ua(i){return i>0?1:i<0?-1:0}function Cv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ss(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function Pv(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qf(i,e){const t=new Il(i.i,i.x,i.y),n=new Il(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Lu(i,e,t,n){const r=new Il(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Il(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lv(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class gs{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return gs.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Du(e),Iu(n,e);let a=e.length;t.forEach(Du);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Iu(n,t[l]);const o=mv.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Du(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Iu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ws extends mn{constructor(e=new Wa([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ut(r,3)),this.setAttribute("uv",new Ut(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Dv;let b,M=!1,U,C,P,D;p&&(b=p.getSpacedPoints(f),M=!0,d=!1,U=p.computeFrenetFrames(f,!1),C=new I,P=new I,D=new I),d||(g=0,m=0,_=0,x=0);const T=o.extractPoints(c);let S=T.shape;const L=T.holes;if(!gs.isClockWise(S)){S=S.reverse();for(let Q=0,se=L.length;Q<se;Q++){const R=L[Q];gs.isClockWise(R)&&(L[Q]=R.reverse())}}const z=gs.triangulateShape(S,L),W=S;for(let Q=0,se=L.length;Q<se;Q++){const R=L[Q];S=S.concat(R)}function Z(Q,se,R){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(se,R)}const Y=S.length,ee=z.length;function X(Q,se,R){let Fe,ie,we;const he=Q.x-se.x,Ge=Q.y-se.y,Ee=R.x-Q.x,w=R.y-Q.y,y=he*he+Ge*Ge,k=he*w-Ge*Ee;if(Math.abs(k)>Number.EPSILON){const K=Math.sqrt(y),te=Math.sqrt(Ee*Ee+w*w),J=se.x-Ge/K,De=se.y+he/K,_e=R.x-w/te,be=R.y+Ee/te,st=((_e-J)*w-(be-De)*Ee)/(he*w-Ge*Ee);Fe=J+he*st-Q.x,ie=De+Ge*st-Q.y;const re=Fe*Fe+ie*ie;if(re<=2)return new ce(Fe,ie);we=Math.sqrt(re/2)}else{let K=!1;he>Number.EPSILON?Ee>Number.EPSILON&&(K=!0):he<-Number.EPSILON?Ee<-Number.EPSILON&&(K=!0):Math.sign(Ge)===Math.sign(w)&&(K=!0),K?(Fe=-Ge,ie=he,we=Math.sqrt(y)):(Fe=he,ie=Ge,we=Math.sqrt(y/2))}return new ce(Fe/we,ie/we)}const pe=[];for(let Q=0,se=W.length,R=se-1,Fe=Q+1;Q<se;Q++,R++,Fe++)R===se&&(R=0),Fe===se&&(Fe=0),pe[Q]=X(W[Q],W[R],W[Fe]);const Se=[];let Pe,Ze=pe.concat();for(let Q=0,se=L.length;Q<se;Q++){const R=L[Q];Pe=[];for(let Fe=0,ie=R.length,we=ie-1,he=Fe+1;Fe<ie;Fe++,we++,he++)we===ie&&(we=0),he===ie&&(he=0),Pe[Fe]=X(R[Fe],R[we],R[he]);Se.push(Pe),Ze=Ze.concat(Pe)}for(let Q=0;Q<g;Q++){const se=Q/g,R=m*Math.cos(se*Math.PI/2),Fe=_*Math.sin(se*Math.PI/2)+x;for(let ie=0,we=W.length;ie<we;ie++){const he=Z(W[ie],pe[ie],Fe);ue(he.x,he.y,-R)}for(let ie=0,we=L.length;ie<we;ie++){const he=L[ie];Pe=Se[ie];for(let Ge=0,Ee=he.length;Ge<Ee;Ge++){const w=Z(he[Ge],Pe[Ge],Fe);ue(w.x,w.y,-R)}}}const dt=_+x;for(let Q=0;Q<Y;Q++){const se=d?Z(S[Q],Ze[Q],dt):S[Q];M?(P.copy(U.normals[0]).multiplyScalar(se.x),C.copy(U.binormals[0]).multiplyScalar(se.y),D.copy(b[0]).add(P).add(C),ue(D.x,D.y,D.z)):ue(se.x,se.y,0)}for(let Q=1;Q<=f;Q++)for(let se=0;se<Y;se++){const R=d?Z(S[se],Ze[se],dt):S[se];M?(P.copy(U.normals[Q]).multiplyScalar(R.x),C.copy(U.binormals[Q]).multiplyScalar(R.y),D.copy(b[Q]).add(P).add(C),ue(D.x,D.y,D.z)):ue(R.x,R.y,h/f*Q)}for(let Q=g-1;Q>=0;Q--){const se=Q/g,R=m*Math.cos(se*Math.PI/2),Fe=_*Math.sin(se*Math.PI/2)+x;for(let ie=0,we=W.length;ie<we;ie++){const he=Z(W[ie],pe[ie],Fe);ue(he.x,he.y,h+R)}for(let ie=0,we=L.length;ie<we;ie++){const he=L[ie];Pe=Se[ie];for(let Ge=0,Ee=he.length;Ge<Ee;Ge++){const w=Z(he[Ge],Pe[Ge],Fe);M?ue(w.x,w.y+b[f-1].y,b[f-1].x+R):ue(w.x,w.y,h+R)}}}$(),ae();function $(){const Q=r.length/3;if(d){let se=0,R=Y*se;for(let Fe=0;Fe<ee;Fe++){const ie=z[Fe];Be(ie[2]+R,ie[1]+R,ie[0]+R)}se=f+g*2,R=Y*se;for(let Fe=0;Fe<ee;Fe++){const ie=z[Fe];Be(ie[0]+R,ie[1]+R,ie[2]+R)}}else{for(let se=0;se<ee;se++){const R=z[se];Be(R[2],R[1],R[0])}for(let se=0;se<ee;se++){const R=z[se];Be(R[0]+Y*f,R[1]+Y*f,R[2]+Y*f)}}n.addGroup(Q,r.length/3-Q,0)}function ae(){const Q=r.length/3;let se=0;Le(W,se),se+=W.length;for(let R=0,Fe=L.length;R<Fe;R++){const ie=L[R];Le(ie,se),se+=ie.length}n.addGroup(Q,r.length/3-Q,1)}function Le(Q,se){let R=Q.length;for(;--R>=0;){const Fe=R;let ie=R-1;ie<0&&(ie=Q.length-1);for(let we=0,he=f+g*2;we<he;we++){const Ge=Y*we,Ee=Y*(we+1),w=se+Fe+Ge,y=se+ie+Ge,k=se+ie+Ee,K=se+Fe+Ee;Ye(w,y,k,K)}}}function ue(Q,se,R){l.push(Q),l.push(se),l.push(R)}function Be(Q,se,R){We(Q),We(se),We(R);const Fe=r.length/3,ie=A.generateTopUV(n,r,Fe-3,Fe-2,Fe-1);ot(ie[0]),ot(ie[1]),ot(ie[2])}function Ye(Q,se,R,Fe){We(Q),We(se),We(Fe),We(se),We(R),We(Fe);const ie=r.length/3,we=A.generateSideWallUV(n,r,ie-6,ie-3,ie-2,ie-1);ot(we[0]),ot(we[1]),ot(we[3]),ot(we[1]),ot(we[2]),ot(we[3])}function We(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function ot(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Iv(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ll[r.type]().fromJSON(r)),new ws(n,e.options)}}const Dv={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],f=e[r*3+1];return[new ce(s,a),new ce(o,l),new ce(c,f)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],f=e[n*3+1],h=e[n*3+2],d=e[r*3],m=e[r*3+1],_=e[r*3+2],x=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(o-f)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-h),new ce(d,1-_),new ce(x,1-p)]:[new ce(o,1-l),new ce(f,1-h),new ce(m,1-_),new ce(g,1-p)]}};function Iv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ya extends sc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ya(e.radius,e.detail)}}class Zi extends mn{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],f=[];let h=e;const d=(t-e)/r,m=new I,_=new ce;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){const p=s+g/n*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,f.push(_.x,_.y)}h+=d}for(let x=0;x<r;x++){const g=x*(n+1);for(let p=0;p<n;p++){const A=p+g,b=A,M=A+n+1,U=A+n+2,C=A+1;o.push(b,M,C),o.push(M,U,C)}}this.setIndex(o),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ac extends mn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new I,d=new I,m=[],_=[],x=[],g=[];for(let p=0;p<=n;p++){const A=[],b=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let U=0;U<=t;U++){const C=U/t;h.x=-e*Math.cos(r+C*s)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+b*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(C+M,1-b),A.push(c++)}f.push(A)}for(let p=0;p<n;p++)for(let A=0;A<t;A++){const b=f[p][A+1],M=f[p][A],U=f[p+1][A],C=f[p+1][A+1];(p!==0||a>0)&&m.push(b,M,C),(p!==n-1||l<Math.PI)&&m.push(M,U,C)}this.setIndex(m),this.setAttribute("position",new Ut(_,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uu extends Vr{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new nt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tf,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class eh extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class th extends eh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Io=new vt,Nu=new I,Fu=new I;class Uv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fu),t.updateMatrixWorld(),Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nv extends Uv{constructor(){super(new Bf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nh extends eh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Nv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);const is=new I;function An(i,e,t,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;is.copy(e),is[n]=0,is.normalize();const c=.5*a/(a+o),f=1-is.angleTo(i)/l;return Math.sign(is[t])===1?f*c:o/(a+o)+c+c*(1-f)}class Fv extends Ji{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(s),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,_=new I,x=.5/r;for(let g=0,p=0;g<f.length;g+=3,p+=2)switch(o.fromArray(f,g),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),f[g+0]=c.x*Math.sign(o.x)+l.x*s,f[g+1]=c.y*Math.sign(o.y)+l.y*s,f[g+2]=c.z*Math.sign(o.z)+l.z*s,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/m)){case 0:_.set(1,0,0),d[p+0]=An(_,l,"z","y",s,n),d[p+1]=1-An(_,l,"y","z",s,t);break;case 1:_.set(-1,0,0),d[p+0]=1-An(_,l,"z","y",s,n),d[p+1]=1-An(_,l,"y","z",s,t);break;case 2:_.set(0,1,0),d[p+0]=1-An(_,l,"x","z",s,e),d[p+1]=An(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),d[p+0]=1-An(_,l,"x","z",s,e),d[p+1]=1-An(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),d[p+0]=1-An(_,l,"x","y",s,e),d[p+1]=1-An(_,l,"y","x",s,t);break;case 5:_.set(0,0,-1),d[p+0]=An(_,l,"x","y",s,e),d[p+1]=1-An(_,l,"y","x",s,t);break}}}function Ov(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new mn;let c=0;for(let f=0;f<i.length;++f){const h=i[f];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,f),c+=m}}if(t){let f=0;const h=[];for(let d=0;d<i.length;++d){const m=i[d].index;for(let _=0;_<m.count;++_)h.push(m.getX(_)+f);f+=i[d].attributes.position.count}l.setIndex(h)}for(const f in s){const h=Ou(s[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(const f in a){const h=a[f][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let d=0;d<h;++d){const m=[];for(let x=0;x<a[f].length;++x)m.push(a[f][x][d]);const _=Ou(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(_)}}return l}function Ou(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const f=i[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*t}const a=new e(s),o=new pn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const h=l/t;for(let d=0,m=f.count;d<m;d++)for(let _=0;_<t;_++){const x=f.getComponent(d,_);o.setComponent(d+h,_,x)}}else a.set(f.array,l);l+=f.count*t}return r!==void 0&&(o.gpuType=r),o}const Er="#e3202e",rs="#fff1d0",wn="#2c3040",Uo="#3d6ea8",Rs="#ffc933",ih="#d08a35",oc="#d7263d";function v(i,e,t,n,r){i.index&&(i=i.toNonIndexed());for(var s=i.attributes.position.count,a=new Float32Array(s*3),o=new nt(e),l=0;l<s;l++)a[l*3]=o.r,a[l*3+1]=o.g,a[l*3+2]=o.b;return i.setAttribute("color",new pn(a,3)),t=t||[0,0,0],n=n||[0,0,0],r=r||[1,1,1],i.applyMatrix4(new vt().compose(new I(t[0],t[1],t[2]),new Gr().setFromEuler(new Kn(n[0],n[1],n[2])),new I(r[0],r[1],r[2]))),i}function B(i,e,t,n,r){return n=n??.08,new Fv(i,e,t,r||1,Math.min(n,i/2-.004,e/2-.004,t/2-.004))}function de(i,e,t,n){return new Ga(n??i,i,e,t||12)}function Cn(i){return new Ya(i,1)}function rt(i){return Ov(i,!1)}var ft=Math.PI/2;function Bv(){var i=new Wa;i.moveTo(-.52,.45),i.lineTo(.52,.45),i.lineTo(0,-.62),i.closePath();var e=new ws(i,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:1}),t=function(n,r){return v(de(.12,.24,10),oc,[n,r,0],[ft,0,0])};return rt([v(e,Rs,[0,0,-.06]),v(B(1.22,.24,.3,.1),ih,[0,.53,0]),t(-.2,.2),t(.2,.14),t(0,-.16)])}function rh(){return rt([v(B(.62,.1,.62,.03),"#f1dbb0"),v(B(.5,.03,.5,.01),oc,[0,.055,0]),v(de(.14,.03,10),Rs,[0,.062,0])])}function zv(){for(var i=[],e=0;e<3;e++)i.push(v(B(.9,.14,.9,.04),"#f1dbb0",[e*.06-.06,.09+e*.16,.06-e*.06],[0,e*.25,0])),i.push(v(B(.9,.05,.3,.02),ih,[e*.06-.06,.17+e*.16,.06-e*.06-.3],[0,e*.25,0]));return i.push(v(de(.26,.04,12),oc,[.06,.5,-.06])),i.push(v(de(.13,.05,10),Rs,[.06,.505,-.06])),rt(i)}function kv(){return rt([v(de(.42,.02,12),"#c5384a"),v(B(.5,.04,.5,.02),"#e8b04a",[0,.02,0],[0,.5,0]),v(de(.18,.05,10),Rs,[.08,.03,.05])])}var bi=[2.15,0,-2.15];function ne(i,e,t){return new Ji(i,e,t)}function zt(i){return new Ya(i,0)}function xn(i,e,t){return new Va(i,e,t||8)}var _t="#ffffff",Br="#9ad8ff";function Hv(i){Br=i||"#9ad8ff"}function lc(i,e,t){var n=bi[e.slot],r,s;for(i.push(v(B(.16,2.3,1.56,.04),_t,[.05,1.15,n])),i.push(v(B(.2,2.05,1.24,.04),e.door,[.09,1.03,n])),i.push(v(ne(.04,.5,.7),"#cfeaff",[.2,1.62,n])),i.push(v(zt(.07),"#ffd23f",[.2,1.05,n-.4])),i.push(v(zt(.09),"#fff6c9",[.14,2.3,n+.98])),t?t==="city"&&i.push(v(ne(.5,.14,1.6),"#8d8f96",[.3,.07,n])):i.push(v(B(1.05,.22,2.1,.06),e.porch,[.52,.11,n])),i.push(v(B(.56,.05,1.1,.02),e.mat,[.6,.235,n])),i.push(v(ne(.68,.07,.7),t==="city"?"#c9c7c0":t?"#e9d7a3":"#d8d2c0",[1.38,.035,n])),i.push(v(ne(.09,.8,.09),"#f4f6fa",[1.5,.4,n+1.4])),i.push(v(B(.26,.24,.44,.08),e.cust?"#2f6fd6":"#8d939e",[1.5,.86,n+1.4])),r=0;r<3;r++)if(r!==e.slot){var a=bi[r];if(i.push(v(B(.14,1.4,1.5,.04),_t,[.04,1.75,a])),i.push(v(B(.18,1.1,1.2,.03),Br,[.07,1.75,a])),i.push(v(ne(.2,1.1,.05),_t,[.08,1.75,a])),i.push(v(ne(.08,1.3,.3),e.roof2,[.05,1.75,a-.93])),i.push(v(ne(.08,1.3,.3),e.roof2,[.05,1.75,a+.93])),e.cust)for(i.push(v(ne(.34,.2,1.4),"#8a5a35",[.24,.92,a])),s=-1;s<=1;s++)i.push(v(zt(.15),s?"#ff6fae":"#ffd23f",[.26,1.1,a+s*.42]))}}function Gv(i){var e=[],t,n=i.variant|0,r=n===1?4.3:3;e.push(v(B(4.1,r,6.5,.16),i.wall,[-2.05,r/2,0])),e.push(v(ne(4.16,.28,6.56),"#a9a59a",[-2.05,.14,0]));var s=new Wa;if(s.moveTo(-4.25,0),s.lineTo(.1,0),s.lineTo(-2.07,1.55),s.closePath(),e.push(v(new ws(s,{depth:6.8,bevelEnabled:!1}),i.roof,[0,r-.02,-3.4])),e.push(v(B(.3,.16,6.95,.05),i.roof2,[-2.07,r+1.53,0])),e.push(v(ne(.16,.14,6.84),_t,[.06,r+.03,0])),e.push(v(B(.55,1,.55,.06),"#8a4a33",[-3.15,r+1.2,1.9])),e.push(v(ne(.66,.12,.66),"#5d3323",[-3.15,r+1.74,1.9])),n===0){var a=bi[(i.slot+1)%3];e.push(v(B(1.1,.8,1.2,.06),i.wall,[-.85,r+.62,a])),e.push(v(ne(.06,.5,.7),Br,[-.29,r+.66,a])),e.push(v(B(1.3,.14,1.44,.04),i.roof2,[-.85,r+1.08,a]))}else if(n===1)for(e.push(v(ne(.1,.1,6.5),_t,[.04,2.72,0])),t=0;t<3;t++)e.push(v(ne(.1,1,1.2),_t,[.04,3.42,bi[t]])),e.push(v(ne(.12,.8,1),Br,[.06,3.42,bi[t]]));else e.push(v(B(2.6,2.3,1.95,.08),i.wall,[-2.7,1.15,4.3])),e.push(v(B(2.8,.16,2.15,.05),i.roof2,[-2.7,2.38,4.3])),e.push(v(ne(.08,1.8,1.6),"#f4f6fa",[-1.38,.9,4.3])),e.push(v(ne(.09,.05,1.6),"#c9ced6",[-1.37,.7,4.3])),e.push(v(ne(.09,.05,1.6),"#c9ced6",[-1.37,1.3,4.3]));return lc(e,i,!1),e.push(v(ne(5.5,.06,1.5),"#b9b5a8",[-1.05,.03,4.3])),rt(e)}function Vv(i){var e=[],t,n=bi[i.slot];for(e.push(v(B(4.1,3,6.5,.16),i.wall,[-2.05,1.5,0])),e.push(v(B(4.5,.2,6.9,.06),_t,[-2.05,3.08,0])),t=0;t<5;t++)e.push(v(ne(.84,.07,6.7),t%2?_t:i.roof,[-3.73+t*.84,3.21,0]));return e.push(v(B(.9,.5,.9,.06),"#d9dde4",[-3,3.5,-2])),e.push(v(de(.3,.06,8),"#aab2bd",[-3,3.77,-2])),e.push(v(ne(1.5,.2,6.5),"#c9a36b",[.75,.1,0])),e.push(v(ne(1.5,.21,.05),"#a9844f",[.75,.1,-1.1])),e.push(v(ne(1.5,.21,.05),"#a9844f",[.75,.1,1.1])),lc(e,i,!0),i.cust&&(e.push(v(B(.1,1.9,.5,.05),"#3ec1d3",[.16,.98,n+1.15],[0,0,-.1])),e.push(v(B(.1,1.7,.46,.05),"#ff7a59",[.2,.9,n-1.12],[0,0,-.14]))),e.push(v(ne(5.5,.06,1.5),"#e3d2a2",[-1.05,.03,4.3])),rt(e)}function Wv(i){var e=[],t,n,r=i.variant|0,s=[5.4,6.8,8.2][r];for(e.push(v(B(4.1,s,6.5,.1),i.wall,[-2.05,s/2,0])),e.push(v(ne(4.3,.3,6.7),i.roof2,[-2.05,s+.15,0])),e.push(v(ne(3.7,.06,6.1),"#6b6f7a",[-2.05,s+.31,0])),e.push(v(ne(.12,.42,6.3),i.roof,[.05,2.78,0])),n=0;3.7+n*1.4<s-.5;n++)for(t=0;t<3;t++)e.push(v(ne(.1,1,1.2),_t,[.04,3.7+n*1.4,bi[t]])),e.push(v(ne(.12,.8,1),Br,[.06,3.7+n*1.4,bi[t]]));if(e.push(v(B(.9,.5,.9,.06),"#d9dde4",[-3,s+.58,-2.2])),e.push(v(de(.3,.06,8),"#aab2bd",[-3,s+.86,-2.2])),r===2)for(e.push(v(de(.7,1.2,10),"#8a5a35",[-1.6,s+1.5,1.8])),e.push(v(xn(.8,.5,10),"#5d3323",[-1.6,s+2.35,1.8])),t=0;t<4;t++)e.push(v(ne(.08,.6,.08),"#4a4f5c",[-1.6+(t%2?.45:-.45),s+.6,1.8+(t<2?.45:-.45)]));else r===1?e.push(v(ne(1.3,.2,1.8),Br,[-1.7,s+.42,1.6])):(e.push(v(ne(1.6,.3,.5),"#8a5a35",[-1.6,s+.46,2.2])),e.push(v(zt(.35),"#35b84e",[-2,s+.8,2.2])),e.push(v(zt(.3),"#4fd063",[-1.2,s+.78,2.2])));return lc(e,i,"city"),rt(e)}function Xv(i){var e=[],t;if(i.hood==="city")if(i.tree?(e.push(v(B(1,.4,1,.06),"#8d8f96",[.9,.2,-4.4])),e.push(v(de(.12,1.6,6),"#7d5a36",[.9,1.1,-4.4])),e.push(v(Cn(.85),"#3fae5a",[.9,2.4,-4.4]))):(e.push(v(ne(.4,.08,1.5),"#8a5a35",[.6,.45,-4.4])),e.push(v(ne(.08,.5,1.5),"#8a5a35",[.42,.7,-4.4])),e.push(v(ne(.3,.4,.08),"#4a4f5c",[.6,.2,-5])),e.push(v(ne(.3,.4,.08),"#4a4f5c",[.6,.2,-3.8]))),i.prop===1)e.push(v(B(.45,.9,.45,.05),"#2f6fd6",[1.1,.45,3.9])),e.push(v(ne(.3,.25,.04),"#ffffff",[1.33,.6,3.9]));else if(i.prop===2)for(t=0;t<3;t++)e.push(v(ne(.05,.6,.05),"#aab2bd",[1.1,.3,3.5+t*.4])),e.push(v(ne(.05,.05,.4),"#aab2bd",[1.1,.6,3.5+t*.4]));else i.prop===3&&(e.push(v(de(.4,.06,10),_t,[.9,.75,4])),e.push(v(de(.05,.75,6),"#4a4f5c",[.9,.38,4])),e.push(v(de(.16,.45,8),"#d7263d",[.9,.22,4.6])),e.push(v(de(.16,.45,8),"#d7263d",[.9,.22,3.4])));else if(i.hood==="snow"){if(i.tree?(e.push(v(de(.16,1,6),"#7d5a36",[-2.3,.5,-4.35])),e.push(v(xn(1.15,1.5,8),"#2c8f52",[-2.3,1.6,-4.35])),e.push(v(xn(.9,1.3,8),"#34a05c",[-2.3,2.5,-4.35])),e.push(v(xn(.62,1.1,8),"#f4f8ff",[-2.3,3.3,-4.35])),e.push(v(xn(.95,.3,8),"#f4f8ff",[-2.3,2.05,-4.35]))):(e.push(v(zt(.8),"#ffffff",[-1.3,.2,-4.4],null,[1.4,.6,1])),e.push(v(zt(.5),"#e6eef8",[-.3,.15,-4.6],null,[1.2,.6,1]))),i.prop===1)e.push(v(Cn(.42),_t,[.9,.4,-4.3])),e.push(v(Cn(.3),_t,[.9,.98,-4.3])),e.push(v(xn(.06,.26,5),"#ff7a1a",[1.12,1,-4.3],[0,0,-ft])),e.push(v(de(.2,.2,8),"#22242c",[.9,1.32,-4.3]));else if(i.prop===2)e.push(v(ne(.5,.08,1.1),"#d7263d",[.9,.2,-4.3])),e.push(v(ne(.06,.12,1.2),"#8a5a35",[.7,.08,-4.3])),e.push(v(ne(.06,.12,1.2),"#8a5a35",[1.1,.08,-4.3]));else if(i.prop===3)for(t=0;t<5;t++)e.push(v(de(.14,1,6),t%2?"#8a5a35":"#a67c4d",[.9,.14+(t>2?.26:0),-4.6+(t>2?(t-3)*.3+.15:t*.3)],[0,0,ft]))}else if(i.hood==="beach"){if(i.tree){for(t=0;t<4;t++)e.push(v(de(.2-t*.02,.85,6),t%2?"#b98f5e":"#a67c4d",[-2.3+t*.14,.42+t*.8,-4.35]));for(t=0;t<6;t++)e.push(v(ne(1.7,.06,.46),t%2?"#2fae5a":"#3cc46b",[-1.75+Math.cos(t*1.047)*.8,3.45,-4.35+Math.sin(t*1.047)*.8],[0,-t*1.047,-.38]));e.push(v(zt(.16),"#6b4a2b",[-1.65,3.4,-4.25])),e.push(v(zt(.16),"#6b4a2b",[-1.85,3.38,-4.5]))}else for(t=0;t<4;t++)e.push(v(xn(.16,.7,5),"#9bbf5a",[-1.4+t*.42,.35,-4.4+t%2*.3]));i.prop===1?(e.push(v(de(.04,1.7,5),_t,[.85,.85,-4.3])),e.push(v(xn(.95,.42,8),"#ff5a5f",[.85,1.75,-4.3])),e.push(v(xn(.5,.25,8),_t,[.85,1.9,-4.3])),e.push(v(ne(.7,.04,1.3),"#3ec1d3",[.8,.03,-3.75]))):i.prop===2?(e.push(v(de(.45,.3,8),"#e6cf8f",[.9,.15,-4.3])),e.push(v(de(.26,.3,8),"#e6cf8f",[.9,.45,-4.3])),e.push(v(xn(.16,.3,6),"#ff5a5f",[.9,.75,-4.3]))):i.prop===3&&(e.push(v(B(.5,1.8,.1,.05),"#ffd23f",[.7,.85,-4.3],[.12,.3,0])),e.push(v(B(.5,1.6,.1,.05),"#ff7a59",[1.15,.75,-4.1],[-.1,-.3,0])))}else{if(i.tree===1?(e.push(v(de(.2,2,7),"#9a6b3f",[-2.3,1,-4.35])),e.push(v(Cn(1.15),"#35b84e",[-2.3,2.8,-4.35])),e.push(v(zt(.8),"#4fd063",[-1.85,3.55,-4.1]))):i.tree===2?(e.push(v(de(.16,1,6),"#7d5a36",[-2.3,.5,-4.35])),e.push(v(xn(1.15,1.5,8),"#2f9e55",[-2.3,1.6,-4.35])),e.push(v(xn(.9,1.3,8),"#37b061",[-2.3,2.5,-4.35])),e.push(v(xn(.62,1.1,8),"#43c06e",[-2.3,3.3,-4.35]))):i.tree===3?(e.push(v(de(.18,1.8,7),"#8a5a3c",[-2.3,.9,-4.35])),e.push(v(Cn(1.05),"#ff9ec4",[-2.3,2.6,-4.35])),e.push(v(zt(.7),"#ffc4dc",[-2.7,3.2,-4.6]))):(e.push(v(Cn(.62),"#35b84e",[-1.2,.45,-4.4],null,[1.3,.85,1])),e.push(v(zt(.42),i.cust?"#ff6fae":"#7fae6a",[-.2,.32,-4.5]))),i.fence)for(e.push(v(ne(4.6,.07,.06),_t,[-1.6,.5,-5.1])),e.push(v(ne(4.6,.07,.06),_t,[-1.6,.26,-5.1])),t=0;t<5;t++)e.push(v(ne(.1,.7,.1),_t,[-3.8+t*1.1,.35,-5.1]));if(i.prop===1)for(t=0;t<2;t++)e.push(v(ne(.03,.5,.03),"#ff8fb1",[.8+t*.4,.25,-4.3+t*.3])),e.push(v(zt(.17),"#ff6fa3",[.8+t*.4,.58,-4.3+t*.3])),e.push(v(ne(.05,.3,.05),"#ff6fa3",[.92+t*.4,.78,-4.3+t*.3]));else i.prop===2?(e.push(v(de(.72,.2,12),"#ff7a59",[.9,.1,-4.3])),e.push(v(de(.6,.21,12),"#4db8ff",[.9,.1,-4.3]))):i.prop===3&&(e.push(v(de(.1,.6,6),"#b9bcc4",[.9,.3,-4.3])),e.push(v(de(.2,.1,10,.42),"#c9ccd4",[.9,.65,-4.3])),e.push(v(de(.34,.04,10),"#7fd4ff",[.9,.7,-4.3])))}return i.lamp&&(e.push(v(de(.07,3.4,6),"#4a4f5c",[1.6,1.7,-5])),e.push(v(ne(.7,.07,.07),"#4a4f5c",[1.9,3.36,-5])),e.push(v(B(.36,.13,.22,.04),"#fff6c9",[2.2,3.3,-5]))),e.length||e.push(v(ne(.01,.01,.01),"#5fd14e",[0,-1,0])),rt(e)}function Yv(){return rt([v(B(.2,1.1,1.2,.03),"#15161c"),v(B(.22,.06,1,.01),"#cfe9ff",[0,.1,0],[.5,0,0]),v(B(.22,.06,.7,.01),"#cfe9ff",[0,-.15,.1],[-.7,0,0])])}function qa(i,e,t,n){return rt([v(B(.3,.62,.5,.08),n||"#34425e",[0,.31,0]),v(B(.38,.62,.64,.12),i,[0,.92,0]),v(B(.5,.5,.52,.16,2),e,[0,1.5,0]),v(B(.52,.22,.56,.1),t,[-.03,1.75,0]),v(B(.03,.1,.08,.01),"#1c1c24",[.255,1.52,.12]),v(B(.03,.1,.08,.01),"#1c1c24",[.255,1.52,-.12])])}function qv(i){return rt([v(B(.56,.16,.16,.06),i,[.36,0,.4]),v(B(.56,.16,.16,.06),i,[.36,0,-.4])])}function Zv(i){return v(B(.66,.17,.17,.06),i,[.5,0,0])}function sh(i,e){for(var t=[v(B(1.75,.62,3.5,.24,2),i,[0,.62,0]),v(B(1.5,.6,1.8,.24,2),"#bfe6ff",[0,1.14,.15]),v(B(1.56,.12,1.86,.05),i,[0,1.46,.15]),v(B(1.8,.2,.26,.07),wn,[0,.42,-1.72]),v(B(1.8,.2,.26,.07),wn,[0,.42,1.72]),v(B(.34,.18,.08,.03),"#fff6c9",[-.55,.72,-1.76]),v(B(.34,.18,.08,.03),"#fff6c9",[.55,.72,-1.76]),v(B(.3,.16,.08,.03),"#ff3b30",[-.58,.72,1.76]),v(B(.3,.16,.08,.03),"#ff3b30",[.58,.72,1.76])],n=-1;n<=1;n+=2)for(var r=-1;r<=1;r+=2)t.push(v(de(.36,.3,12),"#22242c",[n*.82,.36,r*1.08],[0,0,ft]));return rt(t)}function Kv(){return rt([v(de(.3,.8,10,.36),"#7c8794",[0,.56,0]),v(de(.4,.12,10),"#5a6169",[0,1,0])])}function Jv(){return rt([v(de(.2,.62,9),"#e63946",[0,.47,0]),v(Cn(.21),"#e63946",[0,.8,0]),v(de(.09,.56,7),"#ffd23f",[0,.55,0],[0,0,ft])])}function $v(){return rt([v(new Va(.26,.72,10),"#ff7a1a",[0,.4,0]),v(B(.62,.07,.62,.02),"#ff7a1a",[0,.035,0]),v(de(.165,.13,10,.125),"#ffffff",[0,.42,0])])}function jv(){return rt([v(de(.62,.02,14),"#24252b",[0,.01,0],null,[1,1,.6]),v(de(.42,.02,12),"#101116",[.03,.02,.02],null,[1,1,.55])])}function Qv(i){return rt([v(B(.42,.42,.9,.14),i,[0,.5,0]),v(B(.4,.4,.42,.13),i,[0,.78,-.52]),v(B(.2,.18,.2,.06),"#2b1a0e",[0,.7,-.78]),v(B(.1,.22,.12,.03),"#2b1a0e",[-.17,1.02,-.5]),v(B(.1,.22,.12,.03),"#2b1a0e",[.17,1.02,-.5]),v(B(.1,.1,.4,.03),i,[0,.72,.55],[.6,0,0]),v(B(.12,.3,.12,.03),i,[-.14,.15,-.3]),v(B(.12,.3,.12,.03),i,[.14,.15,-.3]),v(B(.12,.3,.12,.03),i,[-.14,.15,.3]),v(B(.12,.3,.12,.03),i,[.14,.15,.3])])}function ex(){for(var i=[v(B(.36,.06,1.1,.03),"#22252e",[0,.14,0])],e=-1;e<=1;e+=2)for(var t=-1;t<=1;t+=2)i.push(v(de(.07,.08,8),"#ffd23f",[e*.14,.07,t*.38],[0,0,ft]));return rt(i)}function tx(){var i=new Wa;i.moveTo(0,-.42),i.bezierCurveTo(-.7,.05,-.5,.55,0,.22),i.bezierCurveTo(.5,.55,.7,.05,0,-.42);var e=new ws(i,{depth:.2,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1,curveSegments:8});return rt([v(e,"#ff3b4e",[0,0,-.1]),v(Cn(.09),"#ffd0d6",[-.18,.2,.17])])}function nx(){return rt([v(de(.78,.02,16),"#3f9be0",[0,.012,0],null,[1,1,.6]),v(de(.45,.02,12),"#8fd3ff",[-.12,.022,-.05],null,[1,1,.5])])}function ix(i){return rt([v(Cn(.34),i,[0,.34,0]),v(de(.345,.1,14),"#ffffff",[0,.34,0])])}function rx(){for(var i=[v(B(.12,1,.5,.03),"#f4f6fa",[-1.45,.5,0]),v(B(.12,1,.5,.03),"#f4f6fa",[1.45,.5,0]),v(B(.3,.08,.7,.02),"#8a92a3",[-1.45,.04,0]),v(B(.3,.08,.7,.02),"#8a92a3",[1.45,.04,0]),v(Cn(.12),"#ffb000",[-1.45,1.1,0]),v(Cn(.12),"#ffb000",[1.45,1.1,0])],e=0;e<8;e++)i.push(v(B(.4,.3,.1,.02),e%2?"#ffffff":"#ff7a1a",[-1.4+e*.4,.82,0])),i.push(v(B(.4,.22,.1,.02),e%2?"#ff7a1a":"#ffffff",[-1.4+e*.4,.42,0]));return rt(i)}function sx(){return rt([v(de(1.4,.04,14),"#f1dea6",[0,.02,0],null,[1,1,.8]),v(de(.9,.05,10),"#e6cf8f",[.3,.03,.2],null,[1,1,.6]),v(ne(.9,.05,.06),"#d9bf7a",[-.4,.045,-.35]),v(ne(.7,.05,.06),"#d9bf7a",[.2,.05,.55]),v(ne(.6,.05,.06),"#d9bf7a",[-.5,.045,.3])])}function ax(i,e){return rt([qa(i,"#d9a577","#e6c35c","#2f8fbf"),v(B(2.3,.1,.52,.05),e,[.05,1,.45]),v(ne(2,.11,.08),_t,[.05,1,.45]),v(B(.5,.16,.16,.06),"#d9a577",[.1,1.08,.3])])}function ox(i){for(var e=[v(B(1.2,.45,2,.12),"#f7f3e8",[0,.55,0]),v(B(1,.5,.5,.08),i,[0,.95,.35]),v(B(1.1,.35,.3,.06),"#f7f3e8",[0,.9,-.75]),v(B(1.3,.1,2,.04),i,[0,1.9,0]),v(ne(1.32,.11,.42),_t,[0,1.9,.5]),v(ne(1.32,.11,.42),_t,[0,1.9,-.5]),v(de(.16,.8,6),"#3d7fd9",[.3,1,.95]),v(zt(.12),_t,[.3,1.45,.95])],t=-1;t<=1;t+=2)for(var n=-1;n<=1;n+=2)e.push(v(ne(.06,1.1,.06),"#d9dde4",[t*.56,1.32,n*.86])),e.push(v(de(.24,.2,10),"#22242c",[t*.62,.24,n*.7],[0,0,ft]));return rt(e)}function lx(){return rt([sh("#ffcc1f"),v(B(.6,.2,.26,.05),_t,[0,1.62,.15]),v(ne(1.78,.14,1.2),"#1c1c24",[0,.66,.1])])}function cx(i){for(var e=[v(B(2,1.9,6,.2,2),i,[0,1.3,0]),v(ne(2.04,.62,5.2),"#bfe6ff",[0,1.75,.1]),v(B(1.9,.12,5.7,.05),_t,[0,2.28,0]),v(ne(1.7,.8,.06),"#1c1c24",[0,1.6,-3]),v(ne(1.2,.2,.07),"#ffd23f",[0,2.08,-3]),v(ne(.4,.2,.08),"#fff6c9",[-.65,.75,-3]),v(ne(.4,.2,.08),"#fff6c9",[.65,.75,-3]),v(ne(.5,.26,.08),"#ff3b30",[-.6,.9,3]),v(ne(.5,.26,.08),"#ff3b30",[.6,.9,3])],t=-1;t<=1;t+=2)for(var n=-1;n<=1;n+=2)e.push(v(de(.46,.34,12),"#22242c",[t*.9,.46,n*1.9],[0,0,ft]));return rt(e)}function ux(){return rt([v(de(.7,.02,14),"#ff7a1a",[0,.01,0]),v(de(.55,.03,14),"#0c0d10",[0,.02,0]),v(de(.5,.07,12),"#6b6f7a",[.75,.035,.4]),v(ne(.6,.02,.06),"#4a4f5c",[.75,.075,.4]),v(ne(.06,.02,.6),"#4a4f5c",[.75,.075,.4])])}function fx(){return rt([v(de(1.5,.03,14),"#cfeaff",[0,.015,0],null,[1,1,.83]),v(de(1,.035,12),"#e9f7ff",[-.2,.02,.1],null,[1,1,.7]),v(ne(1.1,.04,.05),_t,[.2,.04,-.4],[0,.5,0]),v(ne(.8,.04,.05),_t,[-.4,.04,.4],[0,.4,0])])}function hx(i){return rt([qa(i,"#f2c9a0","#3b2a1a","#3a5a8c"),v(B(.56,.24,.6,.1),"#d7263d",[0,1.8,0]),v(zt(.14),_t,[0,2.02,0]),v(B(.16,.5,.16,.06),i,[.05,1.3,.42],[0,0,.6]),v(zt(.16),_t,[-.12,1.62,.42])])}function dx(){return v(Cn(.24),_t,[0,0,0])}function px(){return rt([ah("#ff8a1e"),v(B(2.9,1,.3,.08),"#ffd23f",[0,.55,-2.25],[.2,0,0]),v(ne(.3,.3,.6),"#4a4f5c",[-.6,.6,-1.95]),v(ne(.3,.3,.6),"#4a4f5c",[.6,.6,-1.95]),v(de(.14,.2,8),"#ffb000",[0,1.78,-.55]),v(zt(.9),_t,[0,.4,-2.75],null,[1.5,.5,.5])])}function ah(i){for(var e=[v(B(1.8,.62,3.7,.2,2),i,[0,.66,0]),v(B(1.56,.66,1.4,.2,2),"#bfe6ff",[0,1.22,-.55]),v(B(1.62,.12,1.46,.05),i,[0,1.58,-.55]),v(ne(1.5,.3,1.5),wn,[0,1,.95]),v(B(1.84,.2,.26,.07),wn,[0,.44,-1.82]),v(B(1.84,.2,.26,.07),wn,[0,.44,1.82]),v(ne(.34,.18,.08),"#fff6c9",[-.56,.76,-1.86]),v(ne(.34,.18,.08),"#fff6c9",[.56,.76,-1.86]),v(ne(.3,.16,.08),"#ff3b30",[-.6,.76,1.86]),v(ne(.3,.16,.08),"#ff3b30",[.6,.76,1.86])],t=-1;t<=1;t+=2)for(var n=-1;n<=1;n+=2)e.push(v(de(.4,.3,12),"#22242c",[t*.84,.4,n*1.15],[0,0,ft]));return rt(e)}function mx(){var i=rt([v(B(.3,.6,.5,.08),"#2b3350",[0,.3,0]),v(B(.4,.62,.66,.12),"#d7263d",[0,.92,0]),v(B(.5,.5,.52,.16,2),"#f2c9a0",[0,1.5,0]),v(B(.56,.2,.58,.09),"#b3001b",[0,1.76,0]),v(B(.3,.07,.5,.03),"#7d0013",[.36,1.68,0]),v(B(.03,.1,.08,.01),"#1c1c24",[.255,1.5,.12]),v(B(.03,.1,.08,.01),"#1c1c24",[.255,1.5,-.12])]);return i.rotateY(ft),i}function Bu(){return rt([v(B(.62,.5,.5,.08),"#c1121f"),v(B(.34,.3,.04,.02),Rs,[0,.02,.26]),v(B(.64,.08,.52,.03),"#7d0013",[0,.24,0])])}function gx(){return rt([v(B(1.3,.14,.46,.06),"#22252e",[0,.3,0]),v(de(.3,.26,12),"#111318",[-.72,.3,0],[0,0,ft]),v(de(.3,.26,12),"#111318",[.72,.3,0],[0,0,ft]),v(de(.14,.28,10),"#cfd5e0",[-.72,.3,0],[0,0,ft]),v(de(.14,.28,10),"#cfd5e0",[.72,.3,0],[0,0,ft]),v(B(.42,.05,.1,.02),"#4de1ff",[-.3,.26,.24]),v(B(.42,.05,.1,.02),"#4de1ff",[.3,.26,.24]),v(B(.42,.05,.1,.02),"#4de1ff",[-.3,.26,-.24]),v(B(.42,.05,.1,.02),"#4de1ff",[.3,.26,-.24]),v(ne(.44,.03,.36),"#4a505c",[-.3,.385,0]),v(ne(.44,.03,.36),"#4a505c",[.3,.385,0]),v(B(.34,.1,.5,.05),Er,[-.72,.64,0]),v(B(.34,.1,.5,.05),Er,[.72,.64,0]),v(de(.33,.04,14),"#4de1ff",[-.87,.3,0],[0,0,ft]),v(de(.33,.04,14),"#4de1ff",[.87,.3,0],[0,0,ft]),v(de(.2,.05,10),"#111318",[-.88,.3,0],[0,0,ft]),v(de(.2,.05,10),"#111318",[.88,.3,0],[0,0,ft]),v(de(.1,.5,8),"#59616d",[0,.3,0],[ft,0,0])])}function _x(){return rt([v(de(.36,.2,14),"#111318",[0,.36,-.72],[0,0,ft]),v(de(.38,.24,14),"#111318",[0,.38,.7],[0,0,ft]),v(de(.15,.22,10),"#cfd5e0",[0,.36,-.72],[0,0,ft]),v(de(.15,.26,10),"#cfd5e0",[0,.38,.7],[0,0,ft]),v(B(.3,.42,1.3,.12),"#ff7b00",[0,.72,0]),v(B(.28,.16,.56,.06),"#1c1f27",[0,.98,.26]),v(B(.22,.2,.5,.06),"#ffffff",[0,.86,-.62],[.4,0,0]),v(B(.1,.5,.1,.03),"#3a3f4a",[0,.82,-.62],[.35,0,0]),v(B(.9,.07,.08,.03),"#3a3f4a",[0,1.12,-.5]),v(B(.12,.1,.12,.03),"#111318",[-.46,1.12,-.5]),v(B(.12,.1,.12,.03),"#111318",[.46,1.12,-.5]),v(B(.2,.12,.5,.05),"#ff7b00",[0,.84,.8],[-.3,0,0]),v(B(.2,.06,.62,.03),"#ff7b00",[0,.8,-.8],[.25,0,0]),v(ne(.36,.3,.04),"#ffffff",[0,1,-.76]),v(ne(.14,.18,.05),"#111318",[0,1,-.765]),v(B(.34,.3,.42,.05),"#59616d",[0,.5,.05]),v(de(.07,.9,8),"#cfd5e0",[.2,.56,.45],[ft,0,0]),v(de(.1,.24,8),"#3a3f4a",[.2,.58,.98],[ft,0,0]),v(ne(.07,.08,.72),"#3a3f4a",[-.15,.42,.42]),v(ne(.07,.08,.72),"#3a3f4a",[.15,.42,.42])])}function vx(){for(var i=[v(B(1.4,.46,2.7,.2,2),"#2f343c",[0,.5,0]),v(B(1.36,.1,2.5,.04),"#4a515c",[0,.74,0]),v(B(1.16,.4,1.25,.2,2),"#14161b",[0,.92,.18]),v(B(1.1,.08,1.05,.04),"#2a2e35",[0,1.12,.18]),v(B(.05,.03,1.05,.01),"#59616d",[0,.775,-.82]),v(B(1.42,.16,.2,.06),"#1b1e24",[0,.36,-1.3]),v(B(1.42,.16,.2,.06),"#1b1e24",[0,.36,1.3]),v(B(.34,.11,.07,.03),"#f4fbff",[-.44,.58,-1.34]),v(B(.34,.11,.07,.03),"#f4fbff",[.44,.58,-1.34]),v(B(.4,.1,.07,.03),"#ff2e43",[-.42,.6,1.34]),v(B(.4,.1,.07,.03),"#ff2e43",[.42,.6,1.34]),v(B(.1,.1,.16,.03),"#2f343c",[-.76,.84,-.3]),v(B(.1,.1,.16,.03),"#2f343c",[.76,.84,-.3]),v(B(.72,.14,.06,.03),"#0d0e12",[0,.5,-1.36]),v(ne(.76,.02,.07),"#aab2bd",[0,.585,-1.36]),v(ne(.03,.02,.9),"#59616d",[-.32,.775,-.82]),v(ne(.03,.02,.9),"#59616d",[.32,.775,-.82]),v(B(1.2,.05,.16,.02),"#1b1e24",[0,.8,1.24]),v(ne(.06,.1,1.9),"#1b1e24",[-.71,.3,0]),v(ne(.06,.1,1.9),"#1b1e24",[.71,.3,0]),v(de(.06,.12,8),"#aab2bd",[-.4,.28,1.4],[ft,0,0]),v(de(.06,.12,8),"#aab2bd",[.4,.28,1.4],[ft,0,0]),v(ne(1.18,.4,.05),"#2f343c",[0,.92,.2])],e=-1;e<=1;e+=2)for(var t=-1;t<=1;t+=2)i.push(v(de(.3,.26,14),"#15171c",[e*.64,.3,t*.86],[0,0,ft])),i.push(v(de(.17,.28,10),"#9aa3b0",[e*.64,.3,t*.86],[0,0,ft]));return rt(i)}function xx(){for(var i=[v(B(1.9,.8,3.8,.3,3),Er,[0,.74,0]),v(B(1.94,.17,3.4,.06),rs,[0,.6,0]),v(B(1.86,1.3,2.35,.32,3),Er,[0,1.62,.68]),v(B(1.8,1,1.4,.34,3),Er,[0,1.46,-.9]),v(B(1.5,.62,.12,.05),Uo,[0,1.6,-1.585],[-.16,0,0]),v(B(.08,.5,.8,.04),Uo,[-.88,1.62,-.95]),v(B(.08,.5,.8,.04),Uo,[.88,1.62,-.95]),v(B(1.98,.28,.32,.1),wn,[0,.46,-1.86]),v(B(1.98,.28,.32,.1),wn,[0,.46,1.86]),v(B(.4,.22,.1,.05),"#fff6c9",[-.6,.9,-1.88]),v(B(.4,.22,.1,.05),"#fff6c9",[.6,.9,-1.88]),v(B(.56,.14,.08,.04),wn,[0,.9,-1.89]),v(B(.24,.42,.1,.05),"#ff8a1e",[-.74,1.12,1.87]),v(B(.24,.42,.1,.05),"#ff8a1e",[.74,1.12,1.87]),v(B(.56,.22,.05,.02),"#f4f6fa",[0,.82,1.9]),v(B(.16,.26,.12,.04),wn,[-1.03,1.52,-1.4]),v(B(.16,.26,.12,.04),wn,[1.03,1.52,-1.4]),v(B(1,.12,.56,.05),wn,[0,2.31,.55]),v(de(.07,.5,8),wn,[0,2.58,.55]),v(ne(1.84,.12,.06),rs,[0,1.13,-1.61]),v(ne(.03,.1,2.2),rs,[-.94,2.06,.7]),v(ne(.03,.1,2.2),rs,[.94,2.06,.7]),v(ne(.03,1,.03),"#a3101c",[-.955,1.3,-.25]),v(ne(.03,1,.03),"#a3101c",[.955,1.3,-.25]),v(B(1.5,.05,1.9,.02),rs,[0,2.285,.72]),v(ne(.03,1.1,.02),"#a3101c",[0,1.5,1.86])],e=-1;e<=1;e+=2)for(var t=-1;t<=1;t+=2)i.push(v(de(.44,.36,16),"#20222a",[e*.86,.44,t*1.15],[0,0,ft])),i.push(v(de(.24,.38,12),"#cfd5e0",[e*.86,.44,t*1.15],[0,0,ft])),i.push(v(de(.1,.4,8),Er,[e*.86,.44,t*1.15],[0,0,ft]));return rt(i)}function Mx(){for(var i=[v(B(5.6,4.2,7.4,.2),"#b3001b",[0,2.1,0]),v(B(6,.4,7.8,.1),"#7d0013",[0,4.3,0]),v(B(.2,2.4,1.4,.04),"#3d6ea8",[-2.82,1.3,-1.6]),v(B(.2,2.2,1.2,.04),"#fff8e7",[-2.82,1.1,1.4])],e=0;e<6;e++)i.push(v(B(1.2,.14,1.2,.03),e%2?"#ffffff":"#d7263d",[-3.3,3,-3+e*1.2],[0,0,.5]));for(i.push(v(ne(.16,2.6,3.4),"#fff8e7",[-2.8,1.4,-1.6])),i.push(v(ne(.2,2.2,3),"#3d6ea8",[-2.82,1.4,-1.6])),i.push(v(ne(.22,2.2,.08),"#fff8e7",[-2.83,1.4,-1.6])),i.push(v(ne(.22,.5,1),"#3d6ea8",[-2.83,1.75,1.4])),i.push(v(zt(.08),"#ffd23f",[-2.95,1.05,1])),e=-1;e<=1;e+=2)i.push(v(de(.26,.42,8),"#c58d4e",[-3.15,.21,1.4+e*1])),i.push(v(zt(.42),"#35b84e",[-3.15,.78,1.4+e*1]));return i.push(v(B(.8,1.3,.8,.06),"#fff8e7",[1.8,5.1,-2.6])),i.push(v(ne(.9,.16,.9),"#d7263d",[1.8,5.5,-2.6])),i.push(v(B(1.1,.5,.9,.06),"#d9dde4",[1.6,4.75,2.6])),rt(i)}function Cs(i,e){var t=document.createElement("canvas");return t.width=i,t.height=e,t}function Ps(i){var e=new tv(i);return e.colorSpace=Mn,e.anisotropy=4,e}function Cr(i,e,t,n,r,s){i.beginPath(),i.roundRect?i.roundRect(e,t,n,r,s):i.rect(e,t,n,r)}function cc(i,e,t,n){i.fillStyle="#ffc933",i.beginPath(),i.moveTo(e-n,t-n*.8),i.lineTo(e+n,t-n*.8),i.lineTo(e,t+n*1.2),i.closePath(),i.fill(),i.fillStyle="#d08a35",Cr(i,e-n*1.15,t-n*1.05,n*2.3,n*.42,n*.2),i.fill(),i.fillStyle="#d7263d",[[-.35,-.3,.2],[.35,-.35,.18],[0,.3,.16]].forEach(function(r){i.beginPath(),i.arc(e+r[0]*n,t+r[1]*n,r[2]*n,0,7),i.fill()})}function yx(){var i=Cs(256,256),e=i.getContext("2d");return e.fillStyle="#fff1d0",e.beginPath(),e.arc(128,128,122,0,7),e.fill(),e.lineWidth=10,e.strokeStyle="#b3001b",e.beginPath(),e.arc(128,128,112,0,7),e.stroke(),cc(e,128,138,44),e.fillStyle="#b3001b",e.textAlign="center",e.textBaseline="middle",e.font="900 40px system-ui, Arial, sans-serif",e.fillText("PAYTON",128,62),e.font="900 30px system-ui, Arial, sans-serif",e.fillText("PIZZA",128,216),Ps(i)}function Ul(){var i=Cs(128,128),e=i.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);return t.addColorStop(0,"rgba(255,220,120,0.95)"),t.addColorStop(.4,"rgba(255,170,40,0.4)"),t.addColorStop(1,"rgba(255,150,20,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ps(i)}function Sx(i){var e=Cs(128,128),t=e.getContext("2d");return t.lineCap="round",t.lineJoin="round",i==="order"?(t.fillStyle="rgba(0,0,0,0.25)",Cr(t,14,18,104,100,26),t.fill(),t.fillStyle="#ffffff",Cr(t,10,10,104,100,26),t.fill(),t.strokeStyle="#ffd23f",t.lineWidth=6,Cr(t,13,13,98,94,23),t.stroke(),cc(t,62,62,30)):(t.fillStyle=i==="done"?"#1f9d55":"#c1121f",t.beginPath(),t.arc(64,64,50,0,7),t.fill(),t.strokeStyle="#fff",t.lineWidth=14,t.beginPath(),i==="done"?(t.moveTo(40,64),t.lineTo(58,82),t.lineTo(90,46)):(t.moveTo(44,44),t.lineTo(84,84),t.moveTo(84,44),t.lineTo(44,84)),t.stroke()),Ps(e)}function Ex(){for(var i=Cs(352,32),e=i.getContext("2d"),t=0;t<22;t++)for(var n=0;n<2;n++)e.fillStyle=(t+n)%2?"#111":"#fff",e.fillRect(t*16,n*16,16,16);var r=Ps(i);return r.magFilter=ln,r}function bx(){var i=Cs(512,256),e=i.getContext("2d");return e.fillStyle="#fff8e7",Cr(e,0,0,512,256,28),e.fill(),e.strokeStyle="#b3001b",e.lineWidth=12,Cr(e,8,8,496,240,22),e.stroke(),cc(e,86,132,52),e.fillStyle="#b3001b",e.textAlign="center",e.textBaseline="middle",e.font="900 86px system-ui, Arial, sans-serif",e.fillText("PAYTON",320,88),e.font="900 86px system-ui, Arial, sans-serif",e.fillText("PIZZA",320,178),Ps(i)}var Sn=function(i){return(i-ge/2)/hn},En=function(i){return-i/hn},Pa={suburb:{haze:"#cdeaff",grass:"#5fd14e",road:"#565b6e",walk:"#e3ddcb",dash:"#f5d547",under:"#9fd68a",ocean:!1,walls:["#f4ead2","#e6f0f7","#fbe3c7","#e4efd8","#f7dfe4","#fff6e6"],dull:["#cfcabb","#c9cfd3","#d3c8be"],porch:"#c58d4e"},beach:{haze:"#bfeeff",grass:"#f1dea6",road:"#6c7181",walk:"#c9a36b",dash:"#ffffff",under:"#ffe9b0",ocean:!0,walls:["#ffd9c2","#c9f0ea","#fff3b8","#d7e3ff","#ffd1e1","#ffffff"],dull:["#e3ddd0","#d6dde0","#e0d6cc"],porch:"#c9a36b"},city:{haze:"#d6e4f1",grass:"#b9b7b0",road:"#4b4f5c",walk:"#d2cfc6",dash:"#f5d547",under:"#c9c7c0",ocean:!1,walls:["#b5533c","#9c4a3a","#c96f4a","#d9c7a8","#a45a52","#c98f6a"],dull:["#8b8580","#7f858c","#948a80"],porch:"#8d8f96"},snow:{haze:"#e6f2ff",grass:"#f2f7fd",road:"#69707d",walk:"#dfe7f0",dash:"#ffffff",under:"#dfeaff",ocean:!1,walls:["#b5764a","#8f5b3c","#c9895b","#a3472e","#d9b38c","#7d5a44"],dull:["#8f8a84","#9aa0a6","#877f78"],porch:"#8a5a35"}},kt=Pa.suburb,Nl="",zu={suburb:"#f6b98e",beach:"#ffb98f",city:"#f0b59c",snow:"#f6c6b6"},oh=null,ku=[],Bn=null,ss=57*Math.PI/180,Fl=60,Tx=11.8,Ax=-.6,Jt=null,Ct,kn,Ln,nn,_s,xr,br,Rn,ya,Ol,Bl,cs,Ot={D:38,h:33,g:18,foot:1,far:60,ahead:55},lh=null,La=[],us=new Map,No=0,Hu={},fa=[],Da={},zn=null,zl=[],Hi,ch=[],kl=null,fs=null,ha=new I,zr=new vt;function Ke(i,e){return Hu[i]||(Hu[i]=e())}function it(i,e,t){var n=new At(i,e||Ln);return n.castShadow=t!==!1,n}function wx(){try{Jt=new j_({canvas:Ju,antialias:!0,powerPreference:"high-performance"})}catch{return Jt=null,u.webgl=!1,!1}u.webgl=!0;var i=u.opt.shadows!==0;Jt.shadowMap.enabled=i,Jt.shadowMap.type=df,Ct=new Wf,Ct.background=new nt(kt.haze),Ct.fog=new nc(kt.haze,40,60),kn=new yn(Fl,1,1,300);var e=new Yf(new Uint8Array([160,218,255]),3,1,za);e.minFilter=e.magFilter=ln,e.needsUpdate=!0,Ln=new Uu({vertexColors:!0,gradientMap:e}),_s=new th("#ffffff",kt.under,1.5),Ct.add(_s),nn=new nh("#fff3d0",2.9),nn.castShadow=i,nn.shadow.mapSize.set(1024,2048),Object.assign(nn.shadow.camera,{left:-22,right:22,top:30,bottom:-30,near:1,far:90}),nn.shadow.bias=-8e-4,nn.shadow.normalBias=.05,Ct.add(nn,nn.target),xr=new Zt,Ct.add(xr);var t=150,n=function(g,p,A,b){var M=new Gn(g,t);M.rotateX(-Math.PI/2);var U=new At(M,p);return U.position.set(A,b,0),U.receiveShadow=!0,xr.add(U),U},r=function(g){return new Uu({color:g,gradientMap:e})};ya=r(kt.grass),Ol=r(kt.road),Bl=r(kt.walk);var s=(Hl-Oo)/hn,a=(Oo-Sa)/hn,o=(Gl-Sa)/hn/2;n(80,ya,-45.5,0),n(80,ya,o+40,0),n(s,Ol,0,0);for(var l=-1;l<=1;l+=2){var c=new At(B(a,.16,t,.04),Bl);c.position.set(l*(s/2+a/2),.08,0),c.receiveShadow=!0,xr.add(c)}cs=new Zt,cs.add(n(70,new Kt({color:"#3fb8e6"}),-51.5,.03),n(.7,new Kt({color:"#ffffff"}),-16.4,.04),n(2.2,new Kt({color:"#8fdcf5"}),-17.8,.035)),cs.visible=!1,xr.add(cs);var f=new Gn(.2,1.7);f.rotateX(-Math.PI/2),br=new Pl(f,new Kt({color:"#f5d547"}),40);for(var h=0;h<40;h++)zr.makeTranslation(0,.02,8-h*3.5),br.setMatrixAt(h,zr);br.frustumCulled=!1,Ct.add(br),Rn=new Zt,Ct.add(Rn),["order","done","missed"].forEach(function(g){Da[g]=new Ca({map:Sx(g),depthTest:!1,fog:!1})});var d=Ke("pie",rh);for(h=0;h<14;h++){var m=it(d);m.visible=!1,Ct.add(m),zl.push(m)}for(Hi=new Pl(Ke("splat",kv),Ln,40),Hi.count=0,Hi.frustumCulled=!1,Ct.add(Hi),h=0;h<2;h++){var _=new At(new Zi(.46,.68,28),new Kt({color:"#fff",transparent:!0,opacity:.4,depthTest:!1,fog:!1}));_.rotation.x=-Math.PI/2,_.renderOrder=5,_.visible=!1,Ct.add(_),ch.push(_)}oh=new Ca({map:Ul(),color:"#ffe2a0",blending:xs,depthWrite:!1,transparent:!0,fog:!1,opacity:.8});var x=new Gn(1,1);return x.rotateX(-Math.PI/2),Bn=new At(x,new Kt({map:Ul(),blending:xs,depthWrite:!1,transparent:!0,fog:!1})),Bn.visible=!1,Bn.renderOrder=3,Ct.add(Bn),Px(),Lx(),u.setEffects=Gu,Gu(!!Ae.low),He.onResize=Ia,Ia(),u.project=Cx,!0}function Gu(i){u.low=!!i;var e=!u.low&&u.opt.shadows!==0;Jt.shadowMap.enabled=e,nn.castShadow=e,Ct.traverse(function(t){t.material&&(t.material.needsUpdate=!0)}),Nl="",Ia()}function Rx(){var i=[],e=new Wf,t=zn.userData,n;e.background=new nt("#44464f"),e.add(new th("#ffffff","#8a8f9c",1.7));var r=new nh("#fff3d0",2.6);r.position.set(-3,6,-2),e.add(r);var s=new yn(32,112/122,.1,60);for(Jt.setPixelRatio(1),Jt.setSize(224,244,!1),n=0;n<4;n++){var a=t.rides[n],o=a.visible,l=[6.8,7.4,6.6,9.4][n],c=[1.4,1.5,.6,1.6][n];e.add(a),a.visible=!0,a.rotation.set(0,0,0),a.position.set(0,0,0),s.position.set(-l*.6,l*.5+c,-l*.66),s.lookAt(0,c,0),Jt.render(e,s);var f=document.createElement("canvas");f.width=224,f.height=244,f.getContext("2d").drawImage(Ju,0,0),i.push(f),zn.add(a),a.visible=o}Ia(),Jt.render(Ct,kn),u.ridePics=i}function Ia(){if(Jt){Jt.setPixelRatio(u.low?Math.min(He.dpr,1.25):He.dpr),Jt.setSize(He.cw,He.ch,!1);var i=He.cw/He.ch,e=Fl/2*Math.PI/180;kn.aspect=i,kn.fov=Fl,kn.updateProjectionMatrix(),Ot.D=Math.min(Math.max(Tx/(Math.tan(e)*i),31),50),Ot.h=Ot.D*Math.sin(ss),Ot.g=Ot.D*Math.cos(ss),Ot.foot=Ax-Ot.h/Math.tan(ss+e),Ot.ahead=Ot.foot+Ot.h/Math.tan(ss-e),Ot.far=Ot.h/Math.sin(ss-e),Ct.fog.near=Ot.far*.76,Ct.fog.far=Ot.far*1.04}}function Cx(i,e,t){return ha.set(Sn(i),(t||0)/hn,En(e)).project(kn),{x:((ha.x*.5+.5)*He.cw-He.ox)/He.s,y:(-ha.y*.5+.5)*He.ch/He.s,vis:ha.z<1}}function Px(){zn=new Zt,Ct.add(zn);var i="#f2c9a0",e=[],t,n=function(z,W){var Z=new Zt,Y=it(Ke("payton",mx));return Z.add(Y),Z.position.set(0,z,W),Z},r=function(z,W){var Z=it(Ke("arm",function(){return Zv(i)}),Ln,!1);return Z.position.set(0,z,W),Z.visible=!1,Z},s=new Zt;s.add(it(Ke("hover",gx))),s.add(n(.37,0));var a=it(Ke("bag",Bu));a.position.set(0,1.2,.5),s.add(a),s.userData.arm=r(1.42,0),s.add(s.userData.arm);var o=new Zt;o.add(it(Ke("bike",_x)));var l=n(.55,.05);o.add(l);var c=it(Ke("bag",Bu));c.position.set(0,1.25,.72),o.add(c),o.userData.arm=r(1.6,.05),o.add(o.userData.arm);var f=new Zt;f.add(it(Ke("bimmer",vx))),f.userData.arm=r(.95,.1),f.add(f.userData.arm);var h=new Zt,d=it(Ke("van",xx));h.add(d);for(var m=new Kt({map:yx(),transparent:!0}),_=-1;_<=1;_+=2){var x=new At(new Gn(1.12,1.12),m);x.position.set(_*.94,1.66,.72),x.rotation.y=_*Math.PI/2,h.add(x)}var g=new At(new Gn(1,1),m);g.position.set(0,1.68,1.865),h.add(g);var p=new Zt;p.position.set(0,3.6,.55);var A=new Kt({vertexColors:!0}),b=new At(Ke("slice",Bv),A);b.scale.set(1.15,1.15,1.7),b.castShadow=!0;var M=new Pl(new ac(.06,8,6),new Kt,15),U=[[-.62,.68],[.62,.68],[0,-.74]];for(t=0;t<15;t++){var C=Math.floor(t/5),P=t%5/5,D=U[C],T=U[(C+1)%3];zr.makeTranslation((D[0]+(T[0]-D[0])*P)*1.15,(D[1]+(T[1]-D[1])*P)*1.15,0),M.setMatrixAt(t,zr),M.setColorAt(t,new nt("#fff"))}var S=new Cl(new Ca({map:Ul(),blending:xs,depthWrite:!1,transparent:!0,fog:!1}));for(S.scale.setScalar(3.6),p.add(b,M,S),h.add(p),h.userData={arm:r(1.5,-.95),sign:p,signMat:A,bulbs:M,halo:S},h.add(h.userData.arm),s.scale.setScalar(1.35),o.scale.setScalar(1.3),f.scale.setScalar(1.12),h.scale.setScalar(.9),e=[s,o,f,h],t=0;t<4;t++)e[t].visible=!1,zn.add(e[t]);var L=new At(new Zi(.92,1,40),new Kt({color:"#5ad1ff",transparent:!0,opacity:.65,depthWrite:!1,side:Xn}));L.rotation.x=-Math.PI/2,L.position.y=.2,zn.add(L);var H=new At(new Zi(.86,1,36),new Kt({color:"#ffffff",transparent:!0,opacity:.4,depthWrite:!1}));H.rotation.x=-Math.PI/2,H.position.y=.05,zn.add(H),zn.userData={rides:e,ring:L,spot:H,px:0,lean:0,bulbT:0,bulbStep:0}}function Lx(){var i=(Hl-Oo)/hn,e=new Gn(i,i*32/352*2.2);e.rotateX(-Math.PI/2),kl=new At(e,new Kt({map:Ex()})),Ct.add(kl),fs=new Zt;var t=it(Ke("shop",Mx));t.receiveShadow=!0,fs.add(t);var n=new Gn(5.2,2.6);n.rotateX(-Math.PI/2);var r=new At(n,new Kt({map:bx()}));r.position.set(0,4.56,0),fs.add(r),Ct.add(fs)}function Dx(){var i=u.hood?u.hood.key:"suburb",e=!!u.dusk,t=i+(e?"|dusk":"")+(u.low?"|low":"");if(t!==Nl){Nl=t,kt=Pa[i]||Pa.suburb;var n=e?zu[i]||zu.suburb:kt.haze;Ct.background.set(n),Ct.fog.color.set(n),_s.groundColor.set(kt.under),_s.color.set(e?"#ffd2b8":"#ffffff"),_s.intensity=e?1.05:1.5,nn.color.set(e?"#ff9a5c":"#fff3d0"),nn.intensity=e?2.3:2.9,ya.color.set(kt.grass),Ol.color.set(kt.road),Bl.color.set(kt.walk),br.material.color.set(kt.dash),cs.visible=kt.ocean}}function Ix(){var i;for(lh=u.lots,Dx();Rn.children.length;)Rn.remove(Rn.children[0]);for(i=0;i<fa.length;i++)fa[i].dispose();fa=[],La=[],us.clear();var e=u.hood&&Pa[u.hood.key]?u.hood.key:"suburb",t=e==="beach",n=e==="city",r=e==="snow",s=!!u.dusk,a={};for(ku=[],i=0;i<u.lots.length;i++){var o=u.lots[i],l=o.side<0,c={l:o,house:null,yard:null,person:null,arms:null,box:null,marker:null,wins:[]},f=i>>1,h=function(b,M){return Math.floor(o.ph*b)%M},d={slot:o.slot,cust:o.cust,variant:h(5,3),roof:o.roof[0],roof2:o.roof[1],wall:o.cust?kt.walls[h(7,kt.walls.length)]:kt.dull[h(7,kt.dull.length)],door:o.cust?t?"#1f9bb3":n?"#2d6a4f":"#c2262c":"#5a4634",porch:o.cust?kt.porch:"#9d9d97",mat:o.cust?"#ffd23f":"#8b8b86"},m={hood:e,cust:o.cust,tree:t||r?h(3.7,3)?1:0:n?h(3.7,2):h(3.7,4),fence:e==="suburb"&&h(11,3)===0,lamp:(f+(l?0:2))%4===0,prop:h(13,5)};m.prop>3&&(m.prop=0);var _=[d.roof,d.cust,d.slot,d.variant,d.wall].join("|"),x=a[_];if(x||(Hv(s?o.cust?"#ffe08a":"#4f5d7a":null),r&&(d.roof2=d.roof,d.roof=o.cust?"#f6f9ff":"#e3e9f1"),x=a[_]=t?Vv(d):n?Wv(d):Gv(d),fa.push(x)),c.house=it(x),c.house.receiveShadow=!0,c.house.position.set(Sn(l?ai:oi),0,En(o.y0+105)),c.yard=it(Ke(["y",e,m.cust&&!m.tree?1:0,m.tree,m.fence,m.lamp,m.prop].join("|"),function(){return Xv(m)})),c.yard.position.copy(c.house.position),l||(c.house.scale.x=-1,c.yard.scale.x=-1),Rn.add(c.house,c.yard),s&&!u.low&&m.lamp){var g=new Cl(oh);g.scale.setScalar(3.4),g.position.set(c.house.position.x+(l?2.2:-2.2),3.3,c.house.position.z-5),Rn.add(g),ku.push({s:g,y0:o.y0})}if(o.cust){var p=o.c,A="p|"+p.shirt+p.skin+p.hair;c.person=new Zt,c.person.add(it(Ke(A,Ux(p)))),c.arms=it(Ke("a|"+p.skin,Nx(p.skin)),Ln,!1),c.arms.position.set(0,1.1,0),c.person.add(c.arms),c.box=it(Ke("pie",rh),Ln,!1),c.box.position.set(.78,1.12,0),c.box.visible=!1,c.person.add(c.box),c.person.scale.setScalar(1.25),Rn.add(c.person),c.marker=new Cl(Da.order),c.marker.scale.setScalar(1.9),c.marker.renderOrder=4,Rn.add(c.marker)}La.push(c)}kl.position.set(0,.03,En(u.finishY)),fs.position.set(Sn(416),0,En(u.finishY+115))}function Ux(i){return function(){return qa(i.shirt,i.skin,i.hair)}}function Nx(i){return function(){return qv(i)}}function Fx(i){for(var e=u.cam-340,t=u.cam+Ot.ahead*hn+140,n=0;n<La.length;n++){var r=La[n],s=r.l,a=s.y0>e&&s.y0<t;r.house.visible=a,r.yard.visible=a;for(var o=0;o<s.wins.length;o++){var l=s.wins[o];if(l.broken&&!r.wins[o]){var c=it(Ke("broken",Yv),Ln,!1);c.position.set(Sn(s.side<0?ai:oi)-s.side*.08,1.75,En(l.y)),Rn.add(c),r.wins[o]=c}r.wins[o]&&(r.wins[o].visible=a)}if(r.person){var f=s.c,h=f.gone&&f.goneT>.45&&!s.delivered;if(r.person.visible=a&&!h,r.marker.visible=a,!!a){var d=s.side<0?ai:oi,m=f.happy>0?Math.abs(Math.sin(f.happy*12))*.45:0,_=Math.abs(f.x-d)<20?.22:0;r.person.position.set(Sn(f.x),_+m,En(f.y));var x=s.side<0?0:Math.PI;s.missed?(r.person.rotation.y=x+Math.PI,r.arms.rotation.z=-1.35,r.box.visible=!1):s.delivered?(r.person.rotation.y=x,r.arms.rotation.z=.05,r.box.visible=!0):f.gone?(r.person.rotation.y=x+Math.PI,r.arms.rotation.z=-1.35,r.box.visible=!1):f.type==="quit"?(r.person.rotation.y=x+Math.sin(i*6+f.ph)*.25,r.arms.rotation.z=-.9,r.box.visible=!1):(r.person.rotation.y=x,r.arms.rotation.z=.45+Math.sin(i*9+f.ph)*.35,r.box.visible=!1);var g=s.delivered?"done":s.missed?"missed":"order";r.marker.material!==Da[g]&&(r.marker.material=Da[g]),r.marker.position.set(Sn(s.side<0?ai:oi)+s.side*1.6,5.4+(g==="order"?Math.sin(i*4+s.ph)*.2:0),En(s.doorY)),r.marker.scale.setScalar(g==="order"?1.9:1.5)}}}}function Ox(i){var e=i.type,t=new Zt,n;if(e==="can")t.add(it(Ke("can",Kv)));else if(e==="hydrant")t.add(it(Ke("hydrant",Jv)));else if(e==="cone")t.add(it(Ke("cone",$v)));else if(e==="pothole")t.add(it(Ke("pothole",jv),Ln,!1));else if(e==="puddle")t.add(it(Ke("puddle",nx),Ln,!1));else if(e==="barrier")t.add(it(Ke("barrier",rx)));else if(e==="sand")t.add(it(Ke("sand",sx),Ln,!1));else if(e==="surfer")t.add(it(Ke("surfer|"+i.col+i.board,function(){return ax(i.col,i.board)}))),t.rotation.y=i.side>0?Math.PI:0;else if(e==="taxi")n=it(Ke("taxi",lx)),n.scale.setScalar(.74),t.add(n);else if(e==="bus")n=it(Ke("bus|"+i.col,function(){return cx(i.col)})),n.scale.setScalar(.74),t.add(n);else if(e==="manhole")t.add(it(Ke("manhole",ux),Ln,!1));else if(e==="ice")t.add(it(Ke("ice",fx),Ln,!1));else if(e==="kid")n=it(Ke("kid|"+i.col,function(){return hx(i.col)})),n.scale.setScalar(.78),t.add(n),t.rotation.y=i.side>0?Math.PI:0;else if(e==="snowball")t.add(it(Ke("snowball",dx)));else if(e==="plow")n=it(Ke("plow",px)),n.scale.setScalar(.78),t.add(n),t.rotation.y=Math.PI;else if(e==="cart")n=it(Ke("cart|"+i.col,function(){return ox(i.col)})),n.scale.setScalar(.92),t.add(n);else if(e==="ball")t.add(it(Ke("ball|"+i.col,function(){return ix(i.col)})));else if(e==="life"){n=it(Ke("heart",tx)),n.scale.setScalar(1.25),n.position.y=.9,t.add(n),t.userData.spin=n;var r=new At(Ke("pickupRing",function(){return new Zi(.75,.95,24)}),Vx);r.rotation.x=-Math.PI/2,r.position.y=.04,t.add(r),t.userData.ring=r}else if(e==="dog")t.add(it(Ke("dog|"+i.col,function(){return Qv(i.col)})));else if(e==="carD"||e==="carU"||e==="dcar"){var s=i.col.charCodeAt(2)%3===0;n=it(Ke((s?"truck|":"car|")+i.col,function(){return s?ah(i.col):sh(i.col)})),n.scale.setScalar(.74),t.add(n),t.rotation.y=e==="carD"?Math.PI:e==="dcar"?i.side<0?Math.PI/2:-Math.PI/2:0}else if(e==="skater")t.add(it(Ke("board",ex))),n=it(Ke("p|"+i.col+"#f2c9a0#3b2a1a",function(){return qa(i.col,"#f2c9a0","#3b2a1a")})),n.rotation.y=-Math.PI/2,n.position.y=.17,n.scale.setScalar(.95),t.add(n);else if(e==="pickup"){t.add(it(Ke("pickup",zv)));var a=new At(Ke("pickupRing",function(){return new Zi(.75,.95,24)}),Gx);a.rotation.x=-Math.PI/2,a.position.y=.04,t.add(a),t.userData.ring=a}return Rn.add(t),{g:t,stamp:0}}function Bx(){var i=u.cam-120,e=u.cam+Ot.ahead*hn+160,t;for(No++,t=0;t<u.obs.length;t++){var n=u.obs[t];if(!(n.y<i||n.y>e)){var r=us.get(n);r||(r=Ox(n),us.set(n,r)),r.stamp=No;var s=r.g,a=0;if(n.out)a=.4+Math.sin(Math.min(1,n.t*1.6)*Math.PI)*1.6,s.rotation.x=n.t*9,s.rotation.z=n.t*6;else if(n.type==="life")s.userData.spin.rotation.y=n.t*2.4,s.userData.spin.position.y=.9+Math.sin(n.t*4)*.15,s.userData.ring.scale.setScalar(1+Math.sin(n.t*5)*.1);else if(n.type==="ball")a=n.st===1?Math.abs(Math.sin(n.t*7))*.5:0,s.rotation.z=-n.side*n.t*(n.st===1?5:0);else if(n.type==="pickup")a=.15+Math.abs(Math.sin(n.t*2.5))*.25,s.rotation.y=n.t*1.5,s.userData.ring&&(s.userData.ring.position.y=.04-a,s.userData.ring.scale.setScalar(1+Math.sin(n.t*5)*.08));else if(n.type==="dog"){var o=function(c,f){return Math.atan2(-c,f)},l=n.side<0?120:360;n.st===1||n.st===2?s.rotation.y=o(Te.x-n.x,u.cam+ht-Te.sy-n.y+(n.st===2?60:0)):n.st===3?s.rotation.y=o(n.gx-n.x,n.gy-n.y):n.st===4?s.rotation.y+=Math.sin(n.t*16)*.04:n.st===5&&Math.abs(l-n.x)>2?s.rotation.y=o(l-n.x,0):s.rotation.y=n.side<0?-Math.PI/2:Math.PI/2,a=n.st===2||n.st===3?Math.abs(Math.sin(n.t*20))*.12:n.st===1?Math.abs(Math.sin(n.t*9))*.06:0}else n.type==="skater"?s.rotation.y=Math.PI+Math.cos(n.t*3)*.2:n.type==="surfer"?a=n.st===1?Math.abs(Math.sin(n.t*9))*.07:0:n.type==="snowball"?(a=.9+Math.sin(Math.min(1,Math.abs(n.x-(n.side<0?122:358))/236)*Math.PI)*.7,s.rotation.x=n.t*8):n.type==="cart"&&(s.rotation.y=-Math.cos(n.t*.9+n.ph)*.18);s.position.set(Sn(n.x),a,En(n.y))}}us.forEach(function(c,f){c.stamp!==No&&(Rn.remove(c.g),us.delete(f))})}function zx(i,e){var t=zn.userData,n=(u.state==="play"||u.state==="pause")&&!(u.inv>0&&Math.floor(u.inv*14)%2===0);if(zn.visible=n,!n){t.px=Te.x,Bn.visible=!1;return}var r=u.cam+ht-Te.sy,s=e>0?(Te.x-t.px)/e:0;t.px=Te.x,t.lean+=(Math.max(-.3,Math.min(.3,-s*.0016))-t.lean)*Math.min(1,e*10),zn.position.set(Sn(Te.x),0,En(r));for(var a=0;a<4;a++)t.rides[a].visible=a===u.ride;var o=t.rides[u.ride];o.rotation.y=t.lean,o.rotation.z=u.ride<2?t.lean*.9:t.lean*.2,o.position.y=u.ride===0?.06+Math.sin(i*7)*.03:Math.abs(Math.sin(i*13))*.02;var l=o.userData.arm;if(l.visible=u.throwAnim>0,l.visible&&(l.scale.x=u.throwDir),u.ride===3){var c=o.userData,f=.88+.12*Math.sin(i*5);if(c.signMat.color.setScalar(f),c.halo.material.opacity=.45*f,c.sign.rotation.z=-t.lean*.5,t.bulbT+=e,t.bulbT>.11){t.bulbT=0,t.bulbStep++;for(var h=0;h<15;h++)c.bulbs.setColorAt(h,(h+t.bulbStep)%3===0?kx:Hx);c.bulbs.instanceColor.needsUpdate=!0}}if(Bn.visible=n&&!!u.dusk&&!u.low,Bn.visible){var d=u.ride===3;Bn.material.color.set(d?"#ff9a3c":"#fff1c4"),Bn.material.opacity=d?.5+.08*Math.sin(i*5):.38,Bn.scale.set(d?9:4.2,1,d?11:7.5),Bn.position.set(Sn(Te.x),.06,En(r)-(d?1.5:4.2))}t.spot.visible=u.shieldLeft<=0&&u.ride<2,t.spot.visible&&t.spot.scale.setScalar(1.25),t.ring.visible=u.shieldLeft>0,t.ring.visible&&t.ring.scale.set(u.V.w/hn*.5+.55,u.V.h/hn*.5+.55,1)}var kx=new nt("#fffbe0"),Hx=new nt("#ff8a1e"),Gx=new Kt({color:"#ffd23f",transparent:!0,opacity:.7,depthWrite:!1}),Vx=new Kt({color:"#ff6b7d",transparent:!0,opacity:.8,depthWrite:!1}),Wx={hand:["#ffd23f",.95,1.25],dog:["#ff9f1c",.95,1.2],door:["#7dff8a",.9,1.1],window:["#ff5964",.75,1],wall:["#ffffff",.32,.9]};function Xx(i){var e,t=u.state==="play"||u.state==="pause";for(e=0;e<zl.length;e++){var n=t?u.pies[e]:null,r=zl[e];if(r.visible=!!n,!!n){var s=Math.min(1,n.d/185);r.position.set(Sn(n.x),1.15+Math.sin(s*Math.PI)*.7-s*.5,En(n.y)),r.rotation.y=n.rot}}var a=Math.min(u.decals.length,40);for(e=0;e<a;e++){var o=u.decals[u.decals.length-a+e];zr.makeTranslation(Sn(o.x),Math.abs(Sn(o.x))>Hl/hn-ge/2/hn?.18:.02,En(o.y)),Hi.setMatrixAt(e,zr)}for(Hi.count=a,Hi.instanceMatrix.needsUpdate=!0,e=0;e<2;e++){var l=ch[e],c=e?1:-1;if(u.state!=="play"||u.pizzas<=0){l.visible=!1;continue}var f=uf(c);if(f.hit==="far"){l.visible=!1;continue}var h=Wx[f.hit],d=f.hit==="hand"||f.hit==="door"||f.hit==="dog"?1+Math.sin(i*16)*.1:1;l.visible=!0,l.position.set(Sn(f.x)-c*.75,.35,En(f.y)),l.material.color.set(h[0]),l.material.opacity=h[1],l.scale.setScalar(h[2]*d)}}function Yx(i){var e=nn.shadow.camera,t=(e.top-e.bottom)/nn.shadow.mapSize.y,n=t/.905,r=Math.round((i-Ot.ahead/2+3)/n)*n;nn.position.set(0,34,r+16),nn.target.position.set(0,0,r),nn.target.updateMatrixWorld()}var Vu=0;function qx(){if(Jt){if(u.state==="garage"){u.ridePics||Rx();return}var i=u.tGame,e=Math.max(0,Math.min(.1,i-Vu));Vu=i,u.lots!==lh&&Ix(),Fx(i),Bx(),zx(i,e),Xx(i);var t=-(u.cam/hn+Ot.foot),n=u.shake>0?u.shake*2:0;kn.position.set(Mc(-1,1)*.22*n,Ot.h,t+Mc(-1,1)*.22*n),kn.lookAt(kn.position.x,0,kn.position.z-Ot.g),xr.position.z=t-55,br.position.z=-Math.floor((u.cam-160)/70)*3.5,Yx(t),Jt.render(Ct,kn)}}function uh(){return Jt?{calls:Jt.info.render.calls,tris:Jt.info.render.triangles}:{calls:0,tris:0}}const Zx=16,Kx=450;function Jx(i,e,t){return{sx:i,sy:e,lx:i,ly:e,t0:t,steering:!1}}function $x(i,e,t){var n={dx:0,dy:0};return i.steering?(n.dx=e-i.lx,n.dy=t-i.ly):Math.hypot(e-i.sx,t-i.sy)>Zx&&(i.steering=!0),i.lx=e,i.ly=t,n}function jx(i,e){return!i.steering&&e-i.t0<=Kx}function Qx(i){return ju(i.clientX,i.clientY)}function fh(i){return i<He.cw/2?-1:1}function e1(i){for(var e=u.buttons.length-1;e>=0;e--){var t=u.buttons[e];if(i.x>=t.x&&i.x<=t.x+t.w&&i.y>=t.y&&i.y<=t.y+t.h)return t.fn&&t.fn(),!0}return!1}function hh(){Ae.mute=!Ae.mute,ui(),Ae.mute||Je("ui")}var bs=null,Gi=null;fn.addEventListener("pointerdown",function(i){i.preventDefault(),tf();try{fn.focus()}catch{}i.pointerType==="touch"&&(u.isTouch=!0);var e=Qx(i);if(u.state!=="play"){e1(e);return}if(e.y-u.hudTop<42&&e.x>ge-78){e.x>ge-40?hh():u.state="pause";return}if(bs!==null){Vi(fh(i.clientX));return}bs=i.pointerId,Gi=Jx(i.clientX,i.clientY,performance.now());try{fn.setPointerCapture(i.pointerId)}catch{}});fn.addEventListener("pointermove",function(i){if(!(i.pointerId!==bs||!Gi||u.state!=="play")){i.preventDefault();var e=$x(Gi,i.clientX,i.clientY);Te.tx+=e.dx/He.s*1.35,Te.ty+=e.dy/He.s*1.15}});function dh(i){i.pointerId===bs&&(Gi&&u.state==="play"&&i.type==="pointerup"&&jx(Gi,performance.now())&&Vi(fh(Gi.sx)),bs=null,Gi=null)}fn.addEventListener("pointerup",dh);fn.addEventListener("pointercancel",dh);fn.addEventListener("contextmenu",function(i){i.preventDefault()});window.addEventListener("keydown",function(i){var e=i.code;if((e.indexOf("Arrow")===0||e==="Space")&&i.preventDefault(),tf(),!i.repeat){if(u.keys[e]=!0,e==="KeyM"){hh();return}if(u.state==="play"){e==="KeyZ"||e==="KeyA"||e==="KeyQ"?Vi(-1):e==="KeyX"||e==="KeyD"||e==="KeyE"?Vi(1):e==="Space"?Lh():e==="KeyP"||e==="Escape"?u.state="pause":e==="KeyF"&&(u.opt.fps=!u.opt.fps);return}if(u.state==="pause"&&(e==="KeyP"||e==="Escape"||e==="Space")){u.state="play";return}for(var t=e==="Space"||e==="NumpadEnter"?"Enter":e,n=0;n<u.buttons.length;n++)if(u.buttons[n].key===t&&u.buttons[n].fn){u.buttons[n].fn();return}}});window.addEventListener("keyup",function(i){u.keys[i.code]=!1});window.addEventListener("blur",function(){u.keys={},u.state==="play"&&(u.state="pause")});document.addEventListener("visibilitychange",function(){document.hidden&&u.state==="play"&&(u.state="pause")});(function(){var i=new URLSearchParams(location.search),e=function(t){var n=parseInt(i.get(t),10);return isFinite(n)?n:null};e("seed")!=null&&(u.opt.seed=e("seed")),e("day")!=null&&(u.opt.day=Math.max(1,e("day"))),i.get("bonus")==="1"&&(u.opt.bonus=!0,u.opt.day==null&&(u.opt.day=7)),e("ride")!=null&&(u.opt.ride=Math.max(0,Math.min(3,e("ride")))),i.get("fps")==="1"&&(u.opt.fps=!0),i.get("shadows")==="0"&&(u.opt.shadows=0)})();u.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0;window.addEventListener("resize",$u);$u();Th();wx();var Wu=0,vr=0,en={t:0,n:0,total:0,frames:0,low:1/0,warm:0};function t1(i){if(en.warm+=i,!(en.warm<3)&&(en.t+=i,en.n++,en.total+=i,en.frames++,en.t>=1)){var e=en.n/en.t,t=uh();en.low=Math.min(en.low,e),en.t=0,en.n=0,u.fps={now:Math.round(e),avg:Math.round(en.frames/en.total),low:Math.round(en.low),calls:t.calls,tris:Math.round(t.tris/1e3)}}}function ph(i){var e=(i-Wu)/1e3||0;Wu=i,e>.25&&(e=.25),document.hidden||t1(e),vr+=e;try{var t=0;if(Math.abs(vr-qr)<.004)Tc(qr),vr=0,t=1;else for(;vr>=qr&&t<5;)Tc(qr),vr-=qr,t++;t===5&&(vr=0),qx(),$h()}catch(n){window.console&&console.error(n)}requestAnimationFrame(ph)}Fa();window.__pp={get state(){return u.state},get score(){return u.score},get day(){return u.day},get lives(){return u.lives},get step(){return u.step},get webgl(){return!!u.webgl},get fps(){return u.fps},get draws(){return uh().calls},get stats(){return u.stats?Object.assign({},u.stats):null},get pizzas(){return u.pizzas},get x(){return Te.x},get tx(){return Te.tx},get bonus(){return!!u.bonus},get ride(){return u.ride},spot:function(i,e,t){var n=t==="top"?0:t==="bottom"?He.VH-800:(He.VH-800)/2;return{x:He.ox+i*He.s,y:(e+n)*He.s}},units:ju,version:"0.4.0"};requestAnimationFrame(ph);
