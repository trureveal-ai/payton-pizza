// Plays the game's rules with no screen: a seed, a day, a ride and a list of inputs go in, and
// what happened comes out. Used by the test-street recordings and by the unit tests.
import { STEP } from '../../src/config.js';
import { G, P } from '../../src/state.js';
import { save } from '../../src/save.js';
import { aimAt, startRun, throwPizza, update } from '../../src/game.js';

export const STREETS = [
  { id: 'T1', note: 'Monday, hoverboard (shortest)', seed: 1001, day: 1, ride: 0 },
  { id: 'T2', note: 'Day 14, pizza van (longest)', seed: 1002, day: 14, ride: 3 },
  { id: 'T3', note: 'Saturday, dirt bike (most hazards)', seed: 1003, day: 6, ride: 1 },
  { id: 'T4', note: 'Wednesday, Bimmer (every hazard and customer type)', seed: 1004, day: 3, ride: 2 },
  { id: 'T5a', note: 'Sunday, hoverboard', seed: 1005, day: 7, ride: 0 },
  { id: 'T5b', note: 'Sunday, dirt bike', seed: 1005, day: 7, ride: 1 },
  { id: 'T5c', note: 'Sunday, Bimmer', seed: 1005, day: 7, ride: 2 },
  { id: 'T5d', note: 'Sunday, pizza van', seed: 1005, day: 7, ride: 3 }
];

// `ghost` lets a recording ride through hazards unharmed, so it covers the whole street to its end.
function begin(street, ghost) {
  Object.assign(save, { bank: 0, owned: [true, true, true, true], ride: street.ride, hi: 0, bestDay: 0, mute: true });
  G.opt = { seed: street.seed, day: street.day, ride: street.ride, ghost: !!ghost };
  G.keys = {}; G.tGame = 0;
  startRun();
}
function result() {
  var s = G.stats;
  return { end: G.state, why: G.state === 'over' ? G.overWhy : '', steps: G.step, score: G.score, lives: G.lives,
    orders: s.orders, delivered: s.delivered, hand: s.hand, door: s.door, missed: s.missed, smash: s.smash, crashes: s.crashes, bonks: s.bonks,
    x: Math.round(P.x * 1000) / 1000, cam: Math.round(G.cam * 1000) / 1000 };
}
function apply(e) {
  if (e[1] === 'x') P.tx = e[2];
  else if (e[1] === 'y') P.ty = e[2];
  else if (e[1] === 't') throwPizza(e[2]);
}

// Replays recorded inputs. Each input is [step, kind, value]: 'x' and 'y' steer, 't' throws left (-1) or right (1).
export function replay(street, events, ghost) {
  begin(street, ghost);
  var i = 0, guard = 0;
  while (G.state === 'play' && guard++ < 60000) {
    while (i < events.length && events[i][0] <= G.step) apply(events[i++]);
    update(STEP);
  }
  return result();
}

// A simple automatic player. It works out when each hazard will reach it, moves to the lane with the
// least danger, collects pizza when low and throws when the aiming mark says a pizza would land.
// It is only here to produce inputs worth recording; it is not part of the game.
export function record(street, ghost) {
  begin(street, ghost);
  var events = [[0, 'y', 650]], guard = 0, lanes = [], lastX = null, k;
  for (k = 138; k <= 342; k += 12) lanes.push(k);
  P.ty = 650;   // ride at the slowest speed, which leaves the most time to dodge
  var danger = function (lx, py, rate) {
    var cost = Math.abs(lx - 240) * 0.004, lo = Math.min(lx, P.x), hi = Math.max(lx, P.x);
    for (var j = 0; j < G.obs.length; j++) {
      var q = G.obs[j], ahead = q.y - py, closing = G.speed - q.vy;
      if (q.out) continue;
      if (q.type === 'dog') {   // it runs alongside, so keep away from its side of the street
        if ((q.st === 1 || q.st === 2) && G.V.perk.indexOf('dog') < 0) cost += Math.max(0, 1 - Math.abs(q.x - lx) / 170) * 3;
        continue;
      }
      if (ahead < -70 || closing <= 5) continue;
      var t = Math.max(0, ahead - 45) / closing;
      if (t > 2.5) continue;
      var ox = q.x, need = (q.w + G.V.w) / 2 + 12;
      if (q.type === 'pickup') { if (G.pizzas <= G.V.cap - 3 && Math.abs(ox - lx) < 10) cost -= 0.5; continue; }
      if (q.type === 'life') { if (Math.abs(ox - lx) < 10) cost -= 0.8; continue; }
      if (q.type === 'kid') continue;
      if (q.type === 'puddle' || q.type === 'sand' || q.type === 'ice') { if (Math.abs(ox - lx) < need) cost += 0.4 / (t + 0.1); continue; }
      if (G.V.perk.indexOf(q.type) >= 0) continue;                               // this ride shrugs it off
      if (q.type === 'ball') { ox = q.st === 1 ? q.x - q.side * 95 * t : 240; need += q.st === 1 ? 14 : 70; }
      if (q.type === 'surfer') { ox = q.st === 1 ? q.x - q.side * 70 * t : q.x - q.side * 70 * Math.max(0, t - Math.max(0, ahead - 430) / G.speed); need += 16; }
      if (q.type === 'snowball') { ox = q.x + q.vx * t; need += 12; }
      if (q.type === 'taxi' && q.st < 3) { ox = q.st === 0 ? q.x : (q.side < 0 ? 205 : 275); need += q.st === 0 ? 28 : 8; }
      if (q.type === 'bus') need += 6;
      if (q.type === 'cart') { ox = 240 + Math.sin((q.t + t) * 0.9 + q.ph) * 42; need += 12; }
      if (q.type === 'dcar' && q.st < 3) { ox = 240; need += 90; }
      else if (q.type === 'skater') need += 10;
      if (Math.abs(ox - lx) < need) cost += 4 / (t + 0.1);                       // it will be in this lane
      else if (ox > lo - need && ox < hi + need && Math.abs(ox - P.x) / rate + 0.2 > t) cost += 6 / (t + 0.1);   // it is in the way of getting there
    }
    return cost;
  };
  while (G.state === 'play' && guard++ < 60000) {
    var py = G.cam + 800 - P.sy, rate = G.V.steer * 1.5;
    var best = lastX == null ? 240 : lastX, bestCost = danger(best, py, rate) - 0.4;   // stay put unless another lane is clearly safer
    for (k = 0; k < lanes.length; k++) { var c = danger(lanes[k], py, rate); if (c < bestCost) { bestCost = c; best = lanes[k]; } }
    if (best !== lastX) { events.push([G.step, 'x', best]); P.tx = best; lastX = best; }
    if (G.throwCd <= 0 && G.pizzas > 0) for (var side = -1; side <= 1; side += 2) {
      var a = aimAt(side);
      // an order in reach, or a dog alongside to feed
      if (a.hit === 'hand' || a.hit === 'door' || (a.hit === 'dog' && G.V.perk.indexOf('dog') < 0)) { events.push([G.step, 't', side]); throwPizza(side); break; }
    }
    update(STEP);
  }
  return { events: events, result: result() };
}
