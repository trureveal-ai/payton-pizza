// Writes tests/fixtures/streets.json: for each test street, the inputs an automatic player made and
// what happened. Run `npm run record` only when the rules change on purpose, and say so in the changelog.
import { writeFileSync } from 'node:fs';
import { STREETS, record, replay } from './sim.js';

const out = {};
for (const st of STREETS) {
  out[st.id] = { note: st.note, seed: st.seed, day: st.day, ride: st.ride };
  // 'play' is a normal run, which usually ends in a crash; 'full' rides through hazards to the end of the street
  for (const mode of ['play', 'full']) {
    const ghost = mode === 'full', r = record(st, ghost), again = replay(st, r.events, ghost);
    if (JSON.stringify(again) !== JSON.stringify(r.result)) throw new Error(st.id + ' ' + mode + ': the replay did not match the recording');
    out[st.id][mode] = { result: r.result, events: r.events };
    const x = r.result;
    console.log(`${st.id} ${mode} (${st.note}): ${x.end}${x.why ? ' (' + x.why + ')' : ''}, ${x.steps} steps, score ${x.score}, ` +
      `${x.delivered}/${x.orders} delivered (${x.hand} hand-offs, ${x.door} doors), ${x.missed} missed, ${x.smash} windows, ${x.crashes} crashes`);
  }
}
writeFileSync(new URL('../fixtures/streets.json', import.meta.url), JSON.stringify(out) + '\n');
