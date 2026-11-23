// Prints how the automatic player fares on each day, averaged over several streets. It is a rough,
// repeatable yardstick for comparing difficulty before and after a tuning change; it is not a
// substitute for a person playing. Run with `npm run measure`.
import { G } from '../../src/state.js';
import { record } from './sim.js';

const RIDE_FOR_DAY = (d) => (d <= 2 ? 0 : d <= 4 ? 1 : d <= 7 ? 2 : 3);   // a typical player's ride by that day
const days = [1, 2, 3, 4, 5, 6, 7, 10, 14], SEEDS = 12;
console.log('day ride  finished  street%  delivered%  crashes  hand  door  secs');
for (const day of days) {
  const ride = RIDE_FOR_DAY(day);
  let fin = 0, street = 0, del = 0, crashes = 0, hand = 0, door = 0, secs = 0;
  for (let s = 0; s < SEEDS; s++) {
    const r = record({ seed: 5000 + day * 100 + s, day, ride }).result;
    fin += r.end === 'report' ? 1 : 0;
    street += Math.min(1, (r.cam + 800 - 590) / G.finishY);
    del += r.delivered / r.orders; crashes += r.crashes; hand += r.hand; door += r.door; secs += r.steps / 60;
  }
  const a = (v, n = 0) => (v / SEEDS).toFixed(n).padStart(6);
  console.log(String(day).padStart(3), String(ride).padStart(4), `${String(fin).padStart(6)}/${SEEDS}`, a(street * 100), a(del * 100) + '   ', a(crashes, 1), a(hand, 1), a(door, 1), a(secs));
}
