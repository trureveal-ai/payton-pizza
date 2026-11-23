// Every number that changes with the day lives here, so the difficulty curve can be read and tuned in
// one place. Day 1 is Monday of the first week. The curve was softened in v0.3.0: Cam found day 6
// "very difficult", and the automatic player could not finish a street after day 2.
function ramp(base, perDay, d, cap) { return Math.min(base + perDay * d, cap); }

export function tune(d) {
  return {
    speed: Math.min(160 + 9 * (d - 1), 280),          // how fast the street scrolls (was 185 + 13 a day, up to 320)
    lots: Math.min(26 + 2 * d, 44),                   // pairs of houses (was 30 + 3 a day, up to 48)
    order: ramp(0.34, 0.02, d, 0.5),                  // chance a house ordered
    side: ramp(0.14, 0.025, d, 0.45),                 // a bin or hydrant on each sidewalk, per lot
    road: ramp(0.08, 0.022, d, 0.36),                 // a cone, pothole or puddle on the road, per lot
    dog: d >= 3 ? ramp(0.03, 0.018, d - 2, 0.22) : 0, // dogs from Wednesday (was Tuesday)
    dcar: d >= 4 ? ramp(0.03, 0.015, d - 3, 0.18) : 0, // cars backing out from Thursday (was Wednesday)
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
