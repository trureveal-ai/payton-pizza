// Fixed numbers and tables: screen size, rides, street geometry, palettes.
export const W = 480, H = 800;

// `perk` lists the hazards a ride shrugs off. Each ride keeps the perks of the ones before it.
export const VEH = [
 {name:'HOVERBOARD',price:0,spd:1.0,steer:290,cap:8,w:28,h:22,tip:1,heat:1,shield:0,perk:[],blurb:['Free. Wobbly. Yours.','Small and easy to dodge with.'],perkText:['PERKS: none.','Every hazard wipes you out.'],perkShort:'NO PERKS ON THE HOVERBOARD'},
 {name:'DIRT BIKE',price:150,spd:1.14,steer:390,cap:10,w:16,h:38,tip:1,heat:1,shield:0,perk:['pothole'],blurb:['Faster, sharper steering.','Carries 10 pizzas.'],perkText:['PERK: rides over potholes.',''],perkShort:'PERK: RIDES OVER POTHOLES'},
 {name:'GUN-METAL BLACK BIMMER',price:450,spd:1.28,steer:340,cap:12,w:26,h:50,tip:1.2,heat:1,shield:1,perk:['pothole','cone','can','ball','snowball'],blurb:['Fast. Shrugs off 1 crash','per shift. Tips x1.2.'],perkText:['PERKS: rides over potholes. Knocks','cones, bins and balls aside.'],perkShort:'PERKS: POTHOLES, CONES, BINS, BALLS'},
 {name:'PAYTON PIZZA VAN',price:1000,spd:1.2,steer:300,cap:16,w:30,h:58,tip:1.5,heat:0.55,shield:1,perk:['pothole','cone','can','ball','snowball','dog','skater'],blurb:['Oven on board: pizzas stay','hot. Tips x1.5. 16 pizzas.'],perkText:['PERKS: all of the Bimmer\'s. Dogs','and skaters bounce off too.'],perkShort:'PERKS: ALL THE BIMMER\'S + DOGS, SKATERS'}
];
export const START_LIVES=3,MAX_LIVES=5;
// A dog barks when the ride is DOG_ALERT away, jumps out from the side at DOG_JUMP, then runs alongside,
// closing in at DOG_RUN units a second, for up to DOG_CHASE seconds. A pizza that hits it, or lands on the
// ground within DOG_SMELL of it, ends the chase: it goes to that pizza and eats.
export const DOG_ALERT=320,DOG_JUMP=130,DOG_RUN=52,DOG_CHASE=3.2,DOG_SMELL=300;

export const SWL=130,RDL=160,RDR=320,SWR=350;      // sidewalk / road edges
export const WALL_L=96,WALL_R=384;                 // house fronts
export const LOT=210,HY0=40,HY1=170,LOT0=560;      // lot length, house span in lot, first lot
export const YMIN=330,YMAX=650,RANGE=185;
export const DOOR_HALF=21,HAND_R=16,WIN_HALF=13;   // how close a pizza must land: front door, customer, window
export const PIE_SPEED=410;                        // sideways speed of a thrown pizza
export const AHEAD=1250;                           // how far up the street traffic appears (beyond the 3D view)
export const STEP=1/60;                            // the rules always advance in steps of this many seconds
export const UNIT=20;                              // game units per metre in the 3D view
export const DAYS=['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
export const ROOFS=[['#e4572e','#b8431f'],['#3d7fd9','#2c5fa8'],['#8b5cf6','#6d43d0'],['#f2a007','#c27e00'],['#2aa198','#1c7a73'],['#e0559b','#b23c78']];
export const DULL=[['#7b808c','#5f646f'],['#8a8478','#6c675d'],['#6f7a78','#56605e']];
export const SKIN=['#f2c9a0','#d9a577','#a8703f','#7a4a26','#ffdcb8'];
export const SHIRT=['#ffffff','#ffd23f','#5ad1ff','#9cf07a','#ff9f6b','#d6a5ff'];
export const CARCOL=['#c0392b','#2e86c1','#27ae60','#d4ac0d','#8e44ad','#e67e22','#ecf0f1'];
