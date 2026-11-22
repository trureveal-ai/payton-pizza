import { describe, it, expect } from 'vitest';
import { VEH, SWL, SWR, RANGE, WALL_L, WALL_R } from '../../src/config.js';
import { clamp } from '../../src/util.js';

describe('rides', () => {
  it('there are four, the first is free, and prices rise', () => {
    expect(VEH.length).toBe(4);
    expect(VEH[0].price).toBe(0);
    for (let i = 1; i < VEH.length; i++) expect(VEH[i].price).toBeGreaterThan(VEH[i - 1].price);
  });
  it('each ride carries more pizza than the one before', () => {
    for (let i = 1; i < VEH.length; i++) expect(VEH[i].cap).toBeGreaterThan(VEH[i - 1].cap);
  });
  it('every ride fits between the lawns with room to steer', () => {
    for (const v of VEH) expect(SWR - SWL - v.w).toBeGreaterThan(150);
  });
});

describe('throwing', () => {
  it('a pizza thrown from the middle of the road can reach both sides', () => {
    const mid = (SWL + SWR) / 2;
    expect(mid - WALL_L).toBeLessThan(RANGE);
    expect(WALL_R - mid).toBeLessThan(RANGE);
  });
  it('a pizza thrown from the far sidewalk cannot reach the other side', () => {
    expect(SWR - 10 - WALL_L).toBeGreaterThan(RANGE);
  });
});

describe('clamp', () => {
  it('keeps a number inside its limits', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(50, 0, 10)).toBe(10);
  });
});
