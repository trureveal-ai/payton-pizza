// Neighborhoods. The street changes each week: week 1 is the first one here, week 2 the next, and
// after the last one the cycle starts again while the difficulty keeps climbing (see tuning.js).
// Each neighborhood has its own look (render3d.js) and its own obstacles (tuning.js, world.js).
export const HOODS = [
  { key: 'suburb', name: 'MAPLE STREET', line: 'Dogs, balls and cars backing out.' },
  { key: 'beach', name: 'BEACH TOWN', line: 'Sand drifts, surfers and golf carts.' },
  { key: 'city', name: 'DOWNTOWN', line: 'Taxis pulling out, buses that stop, open manholes.' },
  { key: 'snow', name: 'FROSTY PEAK', line: 'Ice, snowballs and the snowplow.' }
];
export function weekOf(d) { return Math.floor((d - 1) / 7) + 1; }
export function hoodOf(d) { return HOODS[(weekOf(d) - 1) % HOODS.length]; }
