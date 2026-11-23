import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { STREETS, replay } from '../tools/sim.js';

// The five test streets from the build plan (T5 once per ride). Each has recorded inputs that must
// always play out to the same result. If a rule changes on purpose, run `npm run record`.
const fixtures = JSON.parse(readFileSync(new URL('../fixtures/streets.json', import.meta.url), 'utf8'));

describe('recorded test streets replay to the same result', () => {
  for (const st of STREETS) {
    const f = fixtures[st.id];
    it(`${st.id} ${st.note}: a normal run`, () => {
      expect(replay(st, f.play.events, false)).toEqual(f.play.result);
    });
    it(`${st.id} ${st.note}: the whole street, start to finish`, () => {
      const r = replay(st, f.full.events, true);
      expect(r).toEqual(f.full.result);
      expect(r.crashes).toBe(0);
      expect(['report', 'over']).toContain(r.end);
      expect(r.delivered + r.missed).toBe(r.orders);   // every order was either delivered or missed by the end
    });
  }
  it('replaying twice gives the same result both times', () => {
    const st = STREETS[3], f = fixtures[st.id];
    expect(replay(st, f.full.events, true)).toEqual(replay(st, f.full.events, true));
  });
  it('the recordings include both hand-offs and front-door deliveries', () => {
    let hand = 0, door = 0;
    for (const st of STREETS) { hand += fixtures[st.id].full.result.hand; door += fixtures[st.id].full.result.door; }
    expect(hand).toBeGreaterThan(10); expect(door).toBeGreaterThan(10);
  });
  it('different inputs on the same street give a different result', () => {
    const st = STREETS[0];
    expect(replay(st, [], false)).not.toEqual(fixtures[st.id].play.result);
  });
});
