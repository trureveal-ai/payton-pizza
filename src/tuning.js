// Every number that changes with the day lives here, so the difficulty curve can be read and tuned in
// one place. Day 1 is Monday of the first week. The curve was softened in v0.3.0: Cam found day 6
// "very difficult", and the automatic player could not finish a street after day 2.
import { HOODS, hoodOf, weekOf } from './hoods.js';

function ramp(base, perDay, d, cap) { return Math.min(base + perDay * d, cap); }
// seconds between two of something that comes on a timer: a shortest and a longest wait, each half a second less per step
function gap(lo, hi, lvl, loMin, hiMin) { return [Math.max(loMin, lo - 0.5 * lvl), Math.max(hiMin, hi - 0.5 * lvl)]; }

// How the game gets harder (Cam, 2026-11-24: obstacles do the stepping up, not speed):
//   - The street has ONE speed per town. It changes only when the town does, and stays put from the
//     second time round the four towns.
//   - Week 1 is the learning week: the everyday obstacles (bins, cones, traffic, barriers) arrive day by
//     day, as they always have. After that the everyday street takes one step up each week (`b`) and
//     holds it from Monday to Sunday; it is as busy as it gets from week 5, the second time on Maple Street.
//   - Within a week only that town's own obstacles ramp up, on the day of the week (`n`, 1 to 7). Each
//     time a town comes round again its obstacles start further up the ramp (`h`); they level off the
//     third time.
export const TOWN_SPEED = [170, 195, 220, 240], TOP_SPEED = 250;

export function tune(d) {
  var hood = hoodOf(d).key, suburb = hood === 'suburb', beach = hood === 'beach', city = hood === 'city', snow = hood === 'snow';
  var n = (d - 1) % 7 + 1, wk = weekOf(d), round = Math.min(Math.floor((wk - 1) / HOODS.length), 2);
  var b = wk === 1 ? d : Math.min(6.5 + 2 * (wk - 1), 14);   // how busy the everyday street is, on the old day scale
  var h = n + 3 * round;                                        // how far up its ramp a town's own obstacles are
  var own = h - 2;                                              // the suburb's dogs and balls wait for the first Wednesday
  return {
    hood: hood,
    // How fast the street scrolls. Slowed twice at Cam's ask (v0.2.0 was 185 + 13 a day up to 320, v0.3.0
    // 160 + 9 up to 280, v0.4.0 150 + 7 up to 250), then made one speed per town in v0.5.0.
    speed: wk <= TOWN_SPEED.length ? TOWN_SPEED[wk - 1] : TOP_SPEED,
    lots: Math.round(Math.min(26 + 2 * b, 44)),       // pairs of houses
    order: ramp(0.34, 0.02, b, 0.5),                  // chance a house ordered
    side: ramp(0.14, 0.025, b, 0.45),                 // a bin or hydrant on each sidewalk, per lot
    road: ramp(0.08, 0.022, b, 0.36),                 // a cone, pothole or puddle on the road, per lot
    barrier: b >= 5 ? ramp(0.03, 0.008, b - 5, 0.1) : 0, // a roadwork barrier across one lane
    carDown: Math.max(2.0, 5.2 - 0.25 * b),           // seconds between oncoming cars, at least
    carUp: Math.max(3.0, 7 - 0.3 * b),                // seconds between slow cars ahead, at least
    skater: b >= 4 ? [Math.max(3.5, 10 - 0.5 * b), Math.max(7, 14 - 0.5 * b)] : null,
    // suburb: dogs, balls and cars backing out
    dog: suburb && own >= 1 ? ramp(0.03, 0.018, own, 0.22) : 0,
    dcar: suburb ? (h >= 4 ? ramp(0.03, 0.015, h - 3, 0.18) : 0) : city ? 0 : 0.4 * ramp(0.03, 0.015, b - 3, 0.18), // a few at the beach and in the snow too
    ball: suburb ? (own >= 1 ? ramp(0.03, 0.01, own, 0.14) : 0) : beach ? ramp(0.07, 0.01, h, 0.14) : 0, // a ball rolling across the street (a beach ball at the beach)
    // beach town
    sand: beach ? ramp(0.1, 0.02, h, 0.3) : 0,        // a sand drift on the road, per lot
    surfer: beach ? ramp(0.02, 0.01, h, 0.12) : 0,   // a surfer carrying a board across the street
    cart: beach ? gap(12, 16, h, 6, 10) : null,       // seconds between golf carts
    // downtown
    taxi: city ? ramp(0.08, 0.018, h, 0.24) : 0,      // a taxi parked at the curb that pulls out as you come up
    manhole: city ? ramp(0.08, 0.018, h, 0.24) : 0,   // an open manhole in the road
    bus: city ? gap(8, 12, h, 4.5, 7.5) : null,           // seconds between buses, which stop and start
    // snowy town
    ice: snow ? ramp(0.12, 0.024, h, 0.34) : 0,        // a patch of ice on the road
    kid: snow ? ramp(0.07, 0.018, h, 0.26) : 0,       // a kid at the curb with a snowball
    plow: snow ? gap(8, 12, h, 4, 7) : null,          // seconds between snowplows coming down the street
    // customers
    pacer: ramp(0.06, 0.05, b, 0.4),                  // customers who pace
    quitter: b >= 2 ? ramp(0.04, 0.03, b, 0.22) : 0,  // customers who give up and go inside
    curb: 0.15,                                       // customers who walk out to the curb
    patience: Math.max(1.7, 2.6 - 0.05 * b - 0.1 * round), // seconds a quitter waits once you are close
    pickupEvery: d <= 2 ? 2 : 3,                      // a pizza pickup every this many lots
    lives: d >= 3 ? 2 : 1                             // extra-life pickups on the street (the second is a coin toss)
  };
}
