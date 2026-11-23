import { describe, it, expect } from 'vitest';
import { rand, seed, shiftSeed } from '../../src/rng.js';
import { buildShift } from '../../src/world.js';
import { G } from '../../src/state.js';

const street = () => JSON.stringify({ lots: G.lots.map(l => [l.side, l.cust, l.slot, l.c && [l.c.type, Math.round(l.c.x), Math.round(l.c.y)]]), obs: G.obs.map(o => [o.type, Math.round(o.x), Math.round(o.y)]) });

describe('seeded random numbers', () => {
  it('the same seed gives the same numbers, and a different seed does not', () => {
    seed(42); const a = [rand(), rand(), rand()];
    seed(42); const b = [rand(), rand(), rand()];
    seed(43); const c = [rand(), rand(), rand()];
    expect(a).toEqual(b);
    expect(a).not.toEqual(c);
    for (const n of a) { expect(n).toBeGreaterThanOrEqual(0); expect(n).toBeLessThan(1); }
  });
  it('spreads evenly enough between 0 and 1', () => {
    seed(7); let sum = 0; const n = 20000;
    for (let i = 0; i < n; i++) sum += rand();
    expect(sum / n).toBeGreaterThan(0.49); expect(sum / n).toBeLessThan(0.51);
  });
  it('every day of the game has its own fixed seed', () => {
    const seeds = new Set();
    for (let d = 1; d <= 60; d++) { expect(shiftSeed(d)).toBe(shiftSeed(d)); seeds.add(shiftSeed(d)); }
    expect(seeds.size).toBe(60);
  });
});

describe('seeded streets', () => {
  it('the same seed builds exactly the same street', () => {
    seed(1001); buildShift(4); const a = street();
    seed(1001); buildShift(4); const b = street();
    expect(a).toBe(b);
  });
  it('a different seed builds a different street', () => {
    seed(1001); buildShift(4); const a = street();
    seed(1002); buildShift(4); const b = street();
    expect(a).not.toBe(b);
  });
});
