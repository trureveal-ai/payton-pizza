import { describe, it, expect, beforeEach } from 'vitest';
import { DOG_ALERT, DOG_CHASE, DOG_JUMP, H, MAX_LIVES, START_LIVES, STEP, VEH } from '../../src/config.js';
import { G, P } from '../../src/state.js';
import { save } from '../../src/save.js';
import { tune } from '../../src/tuning.js';
import { HOODS, hoodOf, weekOf } from '../../src/hoods.js';
import { mk } from '../../src/world.js';
import { aimAt, continueRun, dogOn, endShift, nextShift, startRun, throwPizza, update } from '../../src/game.js';

function start(day, ride, seed) {
  Object.assign(save, { bank: 0, owned: [true, true, true, true], ride: ride || 0, hi: 0, bestDay: 0, cont: 1, mute: true });
  G.opt = { seed: seed == null ? 1001 : seed, ride: ride || 0 }; G.keys = {};
  startRun(day);
}
const py = () => G.cam + H - P.sy;
const steps = (n) => { for (let i = 0; i < n && G.state === 'play'; i++) update(STEP); };
// put one thing right in front of the ride, with the street otherwise empty
function meet(type, more) {
  G.obs = [];
  const o = Object.assign(mk(type, P.x, py() + 40), more || {});
  G.obs.push(o); steps(40);
  return o;
}

describe('the difficulty curve', () => {
  it('never gets easier from one day to the next, and levels off', () => {
    for (let d = 1; d < 30; d++) {
      const a = tune(d), b = tune(d + 1);
      for (const k of ['speed', 'lots', 'order', 'side', 'road', 'ball', 'barrier']) expect(b[k]).toBeGreaterThanOrEqual(a[k]);
      expect(b.carDown).toBeLessThanOrEqual(a.carDown);
      // a neighborhood's own obstacles never ease off within its week, or the next time it comes round
      const sameWeek = a.hood === b.hood, c = tune(d + 7 * HOODS.length);
      for (const k of ['dog', 'dcar', 'sand', 'surfer']) { if (sameWeek) expect(b[k]).toBeGreaterThanOrEqual(a[k]); expect(c[k]).toBeGreaterThanOrEqual(a[k]); }
    }
    expect(tune(60).speed).toBe(tune(200).speed);
  });
  it('Monday is gentle: no dogs, backing cars, balls, barriers or skaters, and pizza is easy to find', () => {
    const t = tune(1);
    expect([t.dog, t.dcar, t.ball, t.barrier]).toEqual([0, 0, 0, 0]);
    expect(t.skater).toBeNull();
    expect(t.pickupEvery).toBe(2);
  });
  it('Saturday is slower and thinner than it was in v0.2.0', () => {
    const t = tune(6);
    expect(t.speed).toBeLessThan(250);          // was 250
    expect(t.road).toBeLessThan(0.31);          // was 0.31
    expect(t.dog).toBeLessThan(0.24);           // was 0.24
    expect(t.carDown).toBeGreaterThan(2.4);     // was 2.4
  });
});

describe('lives', () => {
  beforeEach(() => start(1, 0));
  it('a run starts with three and a crash costs one', () => {
    expect(G.lives).toBe(START_LIVES);
    meet('carD');
    expect(G.lives).toBe(START_LIVES - 1);
    expect(G.state).toBe('play');
  });
  it('an extra-life pickup adds a life, up to five, then pays points instead', () => {
    meet('life'); expect(G.lives).toBe(4);
    meet('life'); expect(G.lives).toBe(MAX_LIVES);
    const before = G.score; meet('life');
    expect(G.lives).toBe(MAX_LIVES); expect(G.score).toBe(before + 250);
  });
  it('every street has one or two extra lives on it, in the same place each time', () => {
    for (const day of [1, 4, 9]) {
      start(day, 0, 4242); const a = G.obs.filter(o => o.type === 'life').map(o => [o.x, o.y]);
      start(day, 0, 4242); const b = G.obs.filter(o => o.type === 'life').map(o => [o.x, o.y]);
      expect(a.length).toBeGreaterThanOrEqual(1); expect(a.length).toBeLessThanOrEqual(2);
      expect(a).toEqual(b);
    }
  });
  it('lives carry into the next shift, and finishing a shift gives one back up to three', () => {
    meet('carD'); meet('life'); meet('life'); meet('life');            // 2, then 5
    G.inv = 0; G.stats.delivered = G.stats.orders; endShift(); nextShift();
    expect(G.day).toBe(2); expect(G.lives).toBe(5);
    G.inv = 0; meet('carD'); G.inv = 0; meet('carD'); G.inv = 0; meet('carD'); G.inv = 0; meet('carD');   // down to 1
    expect(G.lives).toBe(1);
    G.stats.delivered = G.stats.orders; endShift();
    expect(G.lives).toBe(2);
  });
});

describe('Continue', () => {
  it('picks up from the day the run reached, with the score back at zero and three lives', () => {
    start(1, 0);
    G.stats.delivered = G.stats.orders; endShift(); nextShift();
    G.stats.delivered = G.stats.orders; endShift(); nextShift();
    expect(G.day).toBe(3); expect(save.cont).toBe(3);
    G.score = 4321; G.lives = 1; save.bank = 77;
    meet('carD'); expect(G.state).toBe('over');
    continueRun();
    expect(G.state).toBe('play'); expect(G.day).toBe(3);
    expect(G.score).toBe(0); expect(G.lives).toBe(START_LIVES); expect(G.continued).toBe(true);
    expect(save.bank).toBe(77);
  });
  it('a new run starts on Monday', () => {
    start(1, 0); save.cont = 5; startRun();
    expect(G.day).toBe(1); expect(G.continued).toBe(false);
  });
  it('continuing a day plays the same street as arriving there', () => {
    start(4, 0); const a = JSON.stringify(G.lots.map(l => [l.cust, l.slot]));
    start(1, 0); G.day = 3; G.stats.delivered = G.stats.orders; G.opt = { ride: 0 }; G.runSeed = null; endShift(); nextShift();
    expect(G.day).toBe(4);
    G.opt = { ride: 0 }; startRun(4); const b = JSON.stringify(G.lots.map(l => [l.cust, l.slot]));
    start(4, 0); G.opt = { ride: 0 }; startRun(4);
    expect(JSON.stringify(G.lots.map(l => [l.cust, l.slot]))).toBe(b);
    expect(a.length).toBeGreaterThan(10);
  });
});

describe('ride perks: each ride shrugs off what the ones before it do, and more', () => {
  const hurts = (ride, type, more) => { start(5, ride); G.shieldLeft = 0; meet(type, more); return G.lives < START_LIVES; };
  it('each ride keeps the perks of the one before', () => {
    for (let i = 1; i < VEH.length; i++) for (const p of VEH[i - 1].perk) expect(VEH[i].perk).toContain(p);
    expect(VEH[0].perk).toEqual([]);
  });
  it('hoverboard: everything hurts', () => {
    for (const t of ['pothole', 'cone', 'can', 'dog', 'skater', 'carD', 'barrier', 'hydrant']) expect(hurts(0, t, t === 'skater' ? { bx: P.x } : {})).toBe(true);
  });
  it('dirt bike: rides over potholes, nothing else', () => {
    expect(hurts(1, 'pothole')).toBe(false);
    expect(hurts(1, 'cone')).toBe(true);
  });
  it('Bimmer: also knocks cones and bins aside, but dogs and skaters still hurt', () => {
    expect(hurts(2, 'pothole')).toBe(false);
    expect(hurts(2, 'cone')).toBe(false);
    expect(hurts(2, 'can')).toBe(false);
    expect(hurts(2, 'dog')).toBe(true);
  });
  it('van: also shrugs off dogs and skaters', () => {
    expect(hurts(3, 'dog')).toBe(false);
    expect(hurts(3, 'skater', { bx: 280 })).toBe(false);
  });
  it('traffic, barriers and hydrants hurt every ride', () => {
    for (let ride = 0; ride < 4; ride++) for (const t of ['carD', 'carU', 'dcar', 'barrier', 'hydrant']) expect(hurts(ride, t)).toBe(true);
  });
  it('a knocked-aside hazard flies off and scores a few points', () => {
    start(5, 2); G.shieldLeft = 0; const before = G.score;
    const o = meet('cone');
    expect(o.out).toBe(true); expect(G.stats.bonks).toBe(1); expect(G.score).toBe(before + 10);
    steps(200); expect(G.obs).not.toContain(o);
  });
});

describe('new hazards', () => {
  it('a puddle costs no life but makes the ride slide', () => {
    start(2, 0); meet('puddle');
    expect(G.lives).toBe(START_LIVES);
    expect(G.stats.crashes).toBe(0);
    start(2, 0); G.obs = []; G.obs.push(mk('puddle', P.x, py() + 12)); steps(6);
    expect(G.slip).toBeGreaterThan(0);
  });
  it('a ball waits on the lawn, then rolls across the street when you get close', () => {
    start(3, 0); G.obs = [];
    const b = Object.assign(mk('ball', 120, py() + 900), { side: -1 }); G.obs.push(b);
    steps(30); expect(b.x).toBe(120);
    steps(400);
    expect(b.x > 120 || !G.obs.includes(b)).toBe(true);
  });
});

describe('new customers', () => {
  function only(type) {   // a street with one customer of this type, a little way ahead on the right
    start(3, 0); G.obs = [];
    for (const l of G.lots) { l.cust = false; l.c = null; }
    const l = G.lots.find(x => x.side > 0 && x.y0 > py() + 500);
    l.cust = true;
    l.c = { type, x: 384 - 11, y: l.doorY, by: l.doorY, hx: 373, cx: 359, ph: 0, happy: 0, wait: -1, gone: false, skin: '#fff', shirt: '#fff', hair: '#000' };
    G.stats.orders = 1; return l;
  }
  it('one walks out to the curb as you approach', () => {
    const l = only('curb');
    expect(l.c.x).toBe(373);
    steps(240);
    expect(l.c.x).toBeLessThan(365);
  });
  it('one gives up and goes inside if you are slow; the front door still counts, a hand-off does not', () => {
    const l = only('quit');
    P.ty = 650; let guard = 0;
    while (!l.c.gone && guard++ < 2000) update(STEP);
    expect(l.c.gone).toBe(true); expect(l.delivered).toBe(false); expect(l.missed).toBe(false);
    guard = 0; let hit = '';
    while (G.state === 'play' && !l.delivered && !l.missed && guard++ < 2000) {
      const a = aimAt(1); if (a.hit === 'hand' || a.hit === 'door') { hit = a.hit; throwPizza(1); }
      update(STEP);
    }
    expect(hit).toBe('door'); expect(l.delivered).toBe(true); expect(G.stats.door).toBe(1); expect(G.stats.hand).toBe(0);
  });
  it('catching the impatient one in time pays half as much again', () => {
    const tipFor = (type) => {
      const l = only(type); l.c.wait = 99; P.x = P.tx = 330; steps(4);   // patient for the test, and ride close
      let guard = 0;
      while (G.state === 'play' && !l.delivered && !l.missed && guard++ < 3000) { G.heat = 100; G.streak = 0; if (aimAt(1).hit === 'hand') throwPizza(1); update(STEP); }
      expect(l.delivered).toBe(true); expect(G.stats.hand).toBe(1);
      return G.score;
    };
    expect(tipFor('quit')).toBe(tipFor('porch') * 1.5);
  });
});

describe('throwing', () => {
  it('once a pizza is on its way to a house, the aiming ring goes out for that house', () => {
    start(1, 0, 1001); let guard = 0;
    while (G.state === 'play' && guard++ < 6000) {
      const a = aimAt(1);
      if (a.hit === 'door' || a.hit === 'hand') { throwPizza(1); expect(aimAt(1).lot).not.toBe(a.lot); return; }
      update(STEP);
    }
    throw new Error('never found a house to aim at');
  });
  it('a pizza pickup fills the bag', () => {
    start(1, 0); G.pizzas = 1; meet('pickup');
    expect(G.pizzas).toBe(VEH[0].cap);
  });
});

describe('the bonus round', () => {
  it('the testing switch goes straight to it', () => {
    start(1, 0); G.opt.bonus = true; G.opt.day = 7; startRun();
    expect(G.bonus).toBe(true); expect(G.state).toBe('play'); expect(G.obs.length).toBe(0);
  });
  it('comes after Sunday, every house ordered, nothing is in the way, and pizza never runs out', () => {
    start(7, 0);
    G.stats.delivered = G.stats.orders; endShift();
    expect(G.state).toBe('report');
    nextShift();
    expect(G.bonus).toBe(true); expect(G.day).toBe(7); expect(G.state).toBe('play');
    expect(G.lots.every(l => l.cust)).toBe(true);
    expect(G.lots.every(l => ['porch', 'yard', 'curb'].includes(l.c.type))).toBe(true);
    expect(G.obs.length).toBe(0);
    const had = G.pizzas; throwPizza(1); expect(G.pizzas).toBe(had);
    steps(600);
    expect(G.obs.length).toBe(0);                  // no traffic turns up either
    expect(G.lives).toBe(START_LIVES);
  });
  it('missing houses there cannot get you fired, and Monday of the next week follows', () => {
    start(7, 0); G.stats.delivered = G.stats.orders; endShift(); nextShift();
    let guard = 0; while (G.state === 'play' && guard++ < 20000) update(STEP);
    expect(G.state).toBe('report'); expect(G.report.bonus).toBe(true); expect(G.stats.delivered).toBe(0);
    nextShift();
    expect(G.bonus).toBe(false); expect(G.day).toBe(8);
  });
  it('deliveries there pay double', () => {
    const scoreFor = (bonus) => {
      start(7, 0); if (bonus) { G.stats.delivered = G.stats.orders; endShift(); nextShift(); G.score = 0; }
      let guard = 0;
      while (G.state === 'play' && G.stats.door === 0 && guard++ < 20000) { G.heat = 100; G.streak = 0; G.obs = []; G.pizzas = 5; const s = guard % 2 ? 1 : -1; if (G.stats.hand === 0 && aimAt(s).hit === 'door') throwPizza(s); update(STEP); if (G.stats.hand) return null; }
      return G.score;
    };
    const a = scoreFor(false), b = scoreFor(true);
    if (a != null && b != null) expect(b).toBe(a * 2);
  });
});

describe('dogs', () => {
  // an empty street with one dog waiting at the left curb, a little way ahead
  function dog(ride, x) {
    start(5, ride || 0); G.obs = []; G.shieldLeft = 0;
    for (const l of G.lots) { l.cust = false; l.c = null; }
    const o = Object.assign(mk('dog', 114, py() + 420), { side: -1 }); G.obs.push(o);
    P.x = P.tx = x || 200;
    return o;
  }
  // step until f() is true, keeping traffic off the street so only the dog matters
  const until = (f, max) => { let n = 0; while (G.state === 'play' && !f() && n++ < (max || 3000)) { G.obs = G.obs.filter(q => q.type === 'dog'); update(STEP); } };
  it('it barks first, then jumps out from the side and runs alongside, closing in', () => {
    const o = dog(0, 300); until(() => o.st === 1);
    expect(o.y - py()).toBeLessThanOrEqual(DOG_ALERT); expect(o.x).toBe(114);
    until(() => o.st === 2);
    expect(o.y - py()).toBeLessThanOrEqual(DOG_JUMP);
    steps(90);                                             // a second and a half later...
    expect(Math.abs(o.y - (py() - 14))).toBeLessThan(8);   // ...it is level with the ride, just behind
    const gap = P.x - o.x; steps(30);
    expect(P.x - o.x).toBeLessThan(gap);                   // and still closing
    expect(G.lives).toBe(START_LIVES);
  });
  it('it catches you if you do nothing, bites once, and then gives up', () => {
    const o = dog(); until(() => G.lives < START_LIVES);
    expect(G.lives).toBe(START_LIVES - 1); expect(o.st).toBe(5);
    let n = 0; until(() => n++ > 200);                     // long after the bite has worn off, it leaves you alone
    expect(G.inv).toBeLessThanOrEqual(0); expect(G.lives).toBe(START_LIVES - 1);
  });
  it('it wears out if you keep away from it for long enough', () => {
    const o = dog(0, 330); until(() => o.st === 5);
    expect(G.lives).toBe(START_LIVES); expect(o.ct).toBeGreaterThanOrEqual(DOG_CHASE);
  });
  it('a pizza thrown at it when it is alongside hits it, and it stops to eat', () => {
    const o = dog(0, 300); until(() => aimAt(-1).hit === 'dog');   // the aiming ring is on the dog
    expect(dogOn(-1)).toBe(o); expect(dogOn(1)).toBeNull(); expect(aimAt(1).hit).not.toBe('dog');
    const had = G.pizzas, score = G.score;
    throwPizza(-1); until(() => o.st >= 3, 60);
    expect(o.st).toBeGreaterThanOrEqual(3); expect(G.pizzas).toBe(had - 1); expect(G.score).toBe(score + 25); expect(G.stats.fed).toBe(1);
    until(() => o.st === 4, 30); const at = [o.x, o.y];
    P.x = P.tx = 150; until(() => !G.obs.includes(o));     // it stays with its pizza and cannot hurt you
    expect([o.x, o.y]).toEqual(at); expect(G.lives).toBe(START_LIVES);
  });
  it('a pizza that lands on the ground nearby draws it away while it is still up the street', () => {
    const o = dog(0, 300); until(() => o.st === 1);
    throwPizza(-1); until(() => o.st >= 3, 120);           // no house ordered, so the pizza hits a wall or the lawn
    expect(o.st).toBe(3); expect(G.stats.fed).toBe(1);
    const spot = [o.gx, o.gy]; until(() => o.st === 4, 300);
    expect([o.x, o.y]).toEqual(spot);
    until(() => !G.obs.includes(o)); expect(G.lives).toBe(START_LIVES);
  });
  it('a pizza does nothing to a dog that has not seen you', () => {
    const o = dog(); o.y += 200; throwPizza(-1); steps(40);   // the pizza has landed; the dog is still too far off to care
    expect(G.pies.length).toBe(0); expect(o.st).toBe(0); expect(G.stats.fed).toBe(0);
  });
  it('a delivered pizza is not the dog\'s: it keeps coming', () => {
    const o = dog(0, 300); until(() => o.st === 1);
    const l = G.lots.find(x => x.side < 0 && Math.abs(x.doorY - o.y) < 400 && x.y0 > py());
    l.cust = true; l.c = { type: 'porch', x: 107, y: l.doorY, by: l.doorY, hx: 107, cx: 121, ph: 0, happy: 0, wait: -1, gone: false };
    until(() => aimAt(-1).hit === 'door' || aimAt(-1).hit === 'hand' || o.st !== 1, 400);
    if (o.st === 1) { throwPizza(-1); until(() => l.delivered, 120); expect(l.delivered).toBe(true); expect(o.st).toBeLessThan(3); }
  });
  it('the van still bounces dogs off without a pizza', () => {
    const o = dog(3); until(() => o.out || G.lives < START_LIVES);
    expect(o.out).toBe(true); expect(G.lives).toBe(START_LIVES);
  });
});

describe('neighborhoods', () => {
  it('change each week and come round again', () => {
    expect(hoodOf(1).key).toBe('suburb'); expect(hoodOf(7).key).toBe('suburb');
    expect(hoodOf(8).key).toBe('beach'); expect(hoodOf(14).key).toBe('beach');
    expect(hoodOf(7 * HOODS.length + 1).key).toBe('suburb');
    expect(weekOf(1)).toBe(1); expect(weekOf(8)).toBe(2); expect(weekOf(15)).toBe(3);
  });
  it('each has its own obstacles: no sand, surfers or carts in the suburb, no dogs at the beach', () => {
    for (let d = 1; d <= 7; d++) { const t = tune(d); expect([t.sand, t.surfer, t.cart]).toEqual([0, 0, null]); }
    for (let d = 8; d <= 14; d++) { const t = tune(d); expect(t.dog).toBe(0); expect(t.sand).toBeGreaterThan(0); expect(t.surfer).toBeGreaterThan(0); expect(t.cart).not.toBeNull(); }
    start(5, 0, 77); expect(G.hood.key).toBe('suburb'); expect(G.obs.some(o => ['sand', 'surfer', 'cart'].includes(o.type))).toBe(false);
    let sand = 0, surfers = 0;
    for (let seed = 1; seed <= 6; seed++) { start(11, 0, seed); expect(G.hood.key).toBe('beach'); expect(G.obs.some(o => o.type === 'dog')).toBe(false); sand += G.obs.filter(o => o.type === 'sand').length; surfers += G.obs.filter(o => o.type === 'surfer').length; }
    expect(sand).toBeGreaterThan(6); expect(surfers).toBeGreaterThan(3);
  });
  it('a beach street is the same every time for the same day', () => {
    start(9, 0, 31); const a = JSON.stringify(G.obs.map(o => [o.type, o.x, o.y]));
    start(9, 0, 31); expect(JSON.stringify(G.obs.map(o => [o.type, o.x, o.y]))).toBe(a);
  });
});

describe('beach town obstacles', () => {
  function empty(ride) {
    start(9, ride || 0); G.obs = []; G.shieldLeft = 0;
    for (const l of G.lots) { l.cust = false; l.c = null; }
    P.x = P.tx = 240;
  }
  const alone = (keep, f, max) => { let n = 0; while (G.state === 'play' && !f() && n++ < (max || 3000)) { G.obs = G.obs.filter(q => q.type === keep); update(STEP); } };
  it('sand slows the ride while it is in it, and costs no life', () => {
    empty(); steps(2); const free = G.speed;
    G.obs.push(mk('sand', 240, py() + 30)); alone('sand', () => G.sand > 0);
    update(STEP); expect(G.speed).toBeLessThan(free * 0.7);
    alone('sand', () => G.sand <= 0); update(STEP);
    expect(G.speed).toBeGreaterThan(free * 0.9);
    expect(G.lives).toBe(START_LIVES); expect(G.stats.crashes).toBe(0);
  });
  it('a surfer waits at the curb, then carries the board across when you get close', () => {
    empty(); P.x = P.tx = 150;
    const s = Object.assign(mk('surfer', 358, py() + 900), { side: 1 }); G.obs.push(s);
    alone('surfer', () => s.y - py() < 500); expect(s.x).toBe(358);
    alone('surfer', () => s.st === 1); steps(30); expect(s.x).toBeLessThan(358);
    alone('surfer', () => !G.obs.includes(s)); expect(G.lives).toBe(START_LIVES);   // it reached the far curb and left
  });
  it('a surfer in your way wipes you out on every ride, the van included', () => {
    for (let ride = 0; ride < 4; ride++) {
      empty(ride); const s = Object.assign(mk('surfer', P.x, py() + 40), { side: 1, st: 2 }); G.obs.push(s);
      alone('surfer', () => G.lives < START_LIVES, 120); expect(G.lives).toBe(START_LIVES - 1);
    }
  });
  it('golf carts turn up at the beach, drift from lane to lane, and hurt every ride', () => {
    start(9, 0, 5); let cart = null;
    alone('cart', () => (cart = G.obs.find(o => o.type === 'cart')), 4000); expect(cart).toBeTruthy();
    const xs = []; for (let i = 0; i < 400 && G.obs.includes(cart); i++) { G.opt.ghost = true; update(STEP); xs.push(cart.x); }
    expect(Math.max(...xs) - Math.min(...xs)).toBeGreaterThan(50);
    expect(Math.min(...xs)).toBeGreaterThanOrEqual(198); expect(Math.max(...xs)).toBeLessThanOrEqual(282);
    for (let ride = 0; ride < 4; ride++) {
      empty(ride); const c = Object.assign(mk('cart', 240, py() + 60), { ph: 0, t: 0 }); G.obs.push(c); P.x = P.tx = 240;
      alone('cart', () => G.lives < START_LIVES || !G.obs.includes(c), 600); expect(G.lives).toBe(START_LIVES - 1);
    }
  });
  it('no golf carts in the suburb', () => {
    start(5, 0, 5); G.opt.ghost = true; let seen = false;
    for (let i = 0; i < 2500 && G.state === 'play'; i++) { update(STEP); if (G.obs.some(o => o.type === 'cart')) seen = true; }
    expect(seen).toBe(false);
  });
});
