import { describe, it, expect } from 'vitest';
import { DOOR_HALF, HAND_R, STEP, VEH, WIN_HALF } from '../../src/config.js';
import { G, P } from '../../src/state.js';
import { save } from '../../src/save.js';
import { aimAt, startRun, throwPizza, update } from '../../src/game.js';

function start(seed, day, ride) {
  Object.assign(save, { bank: 0, owned: [true, true, true, true], ride: ride || 0, hi: 0, bestDay: 0, mute: true });
  G.opt = { seed, day: day || 1, ride: ride || 0, ghost: true }; G.keys = {};
  startRun();
}

describe('rides', () => {
  it('the black car is the Gun-Metal Black Bimmer', () => {
    expect(VEH[2].name).toBe('GUN-METAL BLACK BIMMER');
    expect(VEH.map(v => v.name)).not.toContain('MIDNIGHT COUPE');
  });
});

describe('landing a pizza', () => {
  it('a door is a bigger target than a window, and the two never overlap', () => {
    expect(DOOR_HALF).toBeGreaterThan(WIN_HALF);
    expect(DOOR_HALF + WIN_HALF).toBeLessThan(43);   // doors and windows sit 43 units apart
    expect(HAND_R).toBeGreaterThanOrEqual(16);
  });
  it('the aiming mark tells the truth: a pizza thrown when it says "door" or "hand" is delivered', () => {
    let thrown = 0, landed = 0;
    for (const [seed, day] of [[1001, 1], [1002, 5], [1003, 9], [1004, 3]]) {
      start(seed, day, 0);
      G.opt.ghost = true;   // nothing can end the run while a pizza is in the air
      let guard = 0;
      while (G.state === 'play' && guard++ < 20000) {
        const before = G.stats.delivered, side = guard % 2 ? -1 : 1, a = aimAt(side);
        if ((a.hit === 'door' || a.hit === 'hand') && G.pies.length === 0 && G.throwCd <= 0) {
          G.pizzas = 5; throwPizza(side); thrown++;
          for (let i = 0; i < 40 && G.pies.length && G.state === 'play'; i++) update(STEP);
          if (G.stats.delivered > before) landed++;
        } else update(STEP);
      }
    }
    expect(thrown).toBeGreaterThan(100);
    expect(landed).toBe(thrown);
  });
  it('a pizza thrown from the far side of the street falls short', () => {
    start(1001, 1, 0);
    P.x = P.tx = 330; for (let i = 0; i < 30; i++) update(STEP);
    expect(aimAt(-1).hit).toBe('far');
    expect(aimAt(1).hit).not.toBe('far');
  });
});

describe('fixed steps', () => {
  it('the step counter counts every step of play', () => {
    start(1003, 2, 1);
    for (let i = 0; i < 100; i++) update(STEP);
    expect(G.step).toBe(100);
  });
});
