import { describe, it, expect } from 'vitest';
import { DEAD_PX, TAP_MS, isTap, touchMove, touchStart } from '../../src/touch.js';

describe('telling a tap from a drag', () => {
  it('a touch that does not move is a tap', () => {
    const t = touchStart(100, 400, 0);
    expect(isTap(t, 120)).toBe(true);
  });
  it('a thumb that rolls a few pixels still taps, and does not steer (the fault in v0.1.0)', () => {
    const t = touchStart(100, 400, 0);
    let steered = 0;
    for (const [x, y] of [[104, 402], [109, 405], [111, 407], [108, 404]]) { const d = touchMove(t, x, y); steered += Math.abs(d.dx) + Math.abs(d.dy); }
    expect(steered).toBe(0);
    expect(isTap(t, 180)).toBe(true);
  });
  it('wiggling inside the dead zone never adds up to a drag', () => {
    const t = touchStart(100, 400, 0);
    for (let i = 0; i < 40; i++) touchMove(t, 100 + (i % 2 ? 6 : -6), 400);
    expect(isTap(t, 300)).toBe(true);
  });
  it('a real drag steers and is not a tap', () => {
    const t = touchStart(100, 400, 0);
    touchMove(t, 100 + DEAD_PX + 4, 400);                 // leaves the dead zone
    const d = touchMove(t, 100 + DEAD_PX + 34, 410);      // from here on, movement steers
    expect(d.dx).toBe(30); expect(d.dy).toBe(10);
    expect(isTap(t, 100)).toBe(false);
  });
  it('leaving the dead zone does not make the ride jump', () => {
    const t = touchStart(100, 400, 0);
    const d = touchMove(t, 100 + DEAD_PX + 60, 400);      // one big first move
    expect(d.dx).toBe(0);
  });
  it('a long press is not a tap', () => {
    const t = touchStart(100, 400, 0);
    expect(isTap(t, TAP_MS + 1)).toBe(false);
  });
});
