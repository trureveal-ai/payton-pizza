import { describe, it, expect } from 'vitest';
import { buildShift, lotAt } from '../../src/world.js';
import { G } from '../../src/state.js';
import { LOT, LOT0, HY0, HY1 } from '../../src/config.js';
import { tune } from '../../src/tuning.js';

describe('building a shift', () => {
  for (const day of [1, 3, 7, 14]) {
    it(`day ${day}: has enough orders and a finish line past the last house`, () => {
      const orders = buildShift(day);
      const pairs = tune(day).lots;
      expect(G.lots.length).toBe(pairs * 2);
      expect(orders).toBeGreaterThanOrEqual(12);
      expect(orders).toBe(G.lots.filter(l => l.cust).length);
      expect(G.finishY).toBe(LOT0 + pairs * LOT + 240);
    });
  }

  it('every house has one door and two windows that do not overlap', () => {
    buildShift(5);
    for (const l of G.lots) {
      const spots = [l.doorY, ...l.wins.map(w => w.y)].map(y => y - l.y0).sort((a, b) => a - b);
      expect(spots).toEqual([62, 105, 148]);
      for (const s of spots) { expect(s).toBeGreaterThan(HY0); expect(s).toBeLessThan(HY1); }
    }
  });

  it('customers stand on their own lot, on the road side of the house', () => {
    buildShift(7);
    for (const l of G.lots.filter(x => x.cust)) {
      expect(l.c.y).toBeGreaterThan(l.y0);
      expect(l.c.y).toBeLessThan(l.y0 + LOT);
      if (l.side < 0) expect(l.c.x).toBeGreaterThan(96); else expect(l.c.x).toBeLessThan(384);
    }
  });

  it('lotAt finds the lot for a spot on the street', () => {
    buildShift(1);
    expect(lotAt(-1, LOT0 - 1)).toBeNull();
    expect(lotAt(-1, LOT0 + 10)).toBe(G.lots[0]);
    expect(lotAt(1, LOT0 + 10)).toBe(G.lots[1]);
    expect(lotAt(1, LOT0 + LOT + 10)).toBe(G.lots[3]);
    expect(lotAt(-1, LOT0 + LOT * 1000)).toBeNull();
  });

  it('later days have dogs and driveway cars; day 1 has neither', () => {
    for (let i = 0; i < 10; i++) { buildShift(1); expect(G.obs.some(o => ['dog', 'dcar', 'ball', 'barrier'].includes(o.type))).toBe(false); }
    let dogs = 0, cars = 0;
    for (let i = 0; i < 20; i++) { buildShift(7); dogs += G.obs.filter(o => o.type === 'dog').length; cars += G.obs.filter(o => o.type === 'dcar').length; }
    expect(dogs).toBeGreaterThan(0);
    expect(cars).toBeGreaterThan(0);
  });
});
