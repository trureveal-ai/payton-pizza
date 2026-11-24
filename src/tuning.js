// Every number that changes with the day lives here, so the difficulty curve can be read and tuned in
// one place. Day 1 is Monday of the first week. The curve was softened in v0.3.0: Cam found day 6
// "very difficult", and the automatic player could not finish a street after day 2.
import { hoodOf, weekOf } from './hoods.js';

function ramp(base, perDay, d, cap) { return Math.min(base + perDay * d, cap); }

// The numbers that follow the day keep climbing from week to week. The obstacles that belong to a
// neighborhood are switched on only there; `n` is the day of the week (1 to 7), so a neighborhood's
// own obstacles start gently on its Monday.
export function tune(d) {
  var hood = hoodOf(d).key, suburb = hood === 'suburb', beach = hood === 'beach', n = (d - 1) % 7 + 1, wk = weekOf(d);
  return {
    hood: hood,
    speed: Math.min(160 + 9 * (d - 1), 280),          // how fast the street scrolls (was 185 + 13 a day, up to 320)
    lots: Math.min(26 + 2 * d, 44),                   // pairs of houses (was 30 + 3 a day, up to 48)
    order: ramp(0.34, 0.02, d, 0.5),                  // chance a house ordered
    side: ramp(0.14, 0.025, d, 0.45),                 // a bin or hydrant on each sidewalk, per lot
    road: ramp(0.08, 0.022, d, 0.36),                 // a cone, pothole or puddle on the road, per lot
    dog: suburb && d >= 3 ? ramp(0.03, 0.018, d - 2, 0.22) : 0, // suburb: dogs, from the first Wednesday
    dcar: d >= 4 ? ramp(0.03, 0.015, d - 3, 0.18) * (suburb ? 1 : 0.4) : 0, // cars backing out, from the first Thursday; mostly a suburb thing
    sand: beach ? ramp(0.1, 0.02, n, 0.24) : 0,       // beach town: a sand drift on the road, per lot
    surfer: beach ? ramp(0.03, 0.014, n + 2 * (wk - 2), 0.16) : 0, // beach town: a surfer carrying a board across the street
    cart: beach ? [Math.max(4.5, 9 - 0.5 * n), Math.max(8, 13 - 0.5 * n)] : null, // beach town: seconds between golf carts
    ball: d >= 3 ? ramp(0.03, 0.01, d - 2, 0.14) : 0, // a ball rolling across the street
    barrier: d >= 5 ? ramp(0.03, 0.008, d - 5, 0.1) : 0, // a roadwork barrier across one lane
    carDown: Math.max(2.0, 5.2 - 0.25 * d),           // seconds between oncoming cars, at least
    carUp: Math.max(3.0, 7 - 0.3 * d),                // seconds between slow cars ahead, at least
    skater: d >= 4 ? [Math.max(3.5, 10 - 0.5 * d), Math.max(7, 14 - 0.5 * d)] : null,
    pacer: ramp(0.06, 0.05, d, 0.4),                  // customers who pace
    quitter: d >= 2 ? ramp(0.04, 0.03, d, 0.22) : 0,  // customers who give up and go inside
    curb: 0.15,                                       // customers who walk out to the curb
    patience: Math.max(1.7, 2.6 - 0.05 * d),          // seconds a quitter waits once you are close
    pickupEvery: d <= 2 ? 2 : 3,                      // a pizza pickup every this many lots
    lives: d >= 3 ? 2 : 1                             // extra-life pickups on the street (the second is a coin toss)
  };
}
