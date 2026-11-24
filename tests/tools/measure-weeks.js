// Prints how many times the automatic player gets hit on a whole street, week by week and ride by
// ride. It is the yardstick for "does each week step up from the last?" (Cam, 2026-11-24).
//
// Unlike `npm run measure`, which plays a normal run with three lives, this gives the player spare
// lives so every street is ridden to its end: a run that ends early would hide how hard the rest of
// the street is. Each week's figure is the average over its seven days.
//
// Run with `npm run measure:weeks` (all four rides, eight weeks, eight streets a day; a few minutes),
// or `npm run measure:weeks -- 3 4 12` for the van only, four weeks, twelve streets a day. Add `days`
// to see each day of the week and what did the hitting.
//
// The automatic player steers worse than a person and knows every obstacle's rule by heart, so read
// this as a direction, not a score. A difference of 0.2 between two weeks is within the noise.
import { G } from '../../src/state.js';
import { HOODS } from '../../src/hoods.js';
import { VEH } from '../../src/config.js';
import { record } from './sim.js';

const args = process.argv.slice(2), detail = args.includes('days'), nums = args.filter((a) => a !== 'days');
const rides = (nums[0] || '0,1,2,3').split(',').map(Number), WEEKS = +(nums[1] || 8), SEEDS = +(nums[2] || 8);
const table = [];
for (const ride of rides) {
  const row = [];
  if (detail) console.log(`\n${VEH[ride].name}: hits a street on each day of the week, then what did the hitting`);
  for (let w = 1; w <= WEEKS; w++) {
    let hits = 0, n = 0; const perDay = [], by = {};
    for (let k = 1; k <= 7; k++) {
      const day = (w - 1) * 7 + k; let dayHits = 0;
      for (let s = 0; s < SEEDS; s++) {
        const r = record({ seed: 9000 + day * 100 + s, day, ride, lives: 99 }).result;
        hits += r.crashes; dayHits += r.crashes; n++;
        for (const t in G.stats.by) by[t] = (by[t] || 0) + G.stats.by[t];
      }
      perDay.push((dayHits / SEEDS).toFixed(1));
    }
    row.push(hits / n);
    if (detail) console.log(`  week ${String(w).padStart(2)} ${HOODS[(w - 1) % HOODS.length].key.padEnd(6)} ${perDay.join(' ')}   ` +
      Object.entries(by).sort((a, b) => b[1] - a[1]).slice(0, 6).map((e) => `${e[0]} ${(e[1] / n).toFixed(2)}`).join(', '));
  }
  table.push(row);
}
console.log(`\nHits on a whole street, averaged over each week (${SEEDS} streets a day)`);
console.log('week  town    ' + rides.map((r) => VEH[r].name.split(' ').pop().padStart(10)).join('') + (rides.length > 1 ? '   all rides' : ''));
for (let w = 0; w < WEEKS; w++) {
  const vals = table.map((row) => row[w]);
  console.log(String(w + 1).padStart(4) + '  ' + HOODS[w % HOODS.length].key.padEnd(8) + vals.map((v) => v.toFixed(2).padStart(10)).join('') +
    (rides.length > 1 ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2).padStart(12) : ''));
}
