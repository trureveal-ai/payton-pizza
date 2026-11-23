import { test, expect } from '@playwright/test';

// A spot in the game's 480-wide overlay to a spot on the page. Menus are centred in the window.
const spot = (page, x, y, anchor) => page.evaluate(([a, b, c]) => window.__pp.spot(a, b, c), [x, y, anchor || 'mid']);
const ready = (page) => expect.poll(() => page.evaluate(() => window.__pp && window.__pp.state)).toBe('title');

test('opens on the title screen with no errors, and the 3D street is drawing', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto('/');
  await ready(page);
  await page.waitForTimeout(800);
  // both canvases fill the window
  const vp = page.viewportSize();
  for (const id of ['#gl', '#g']) {
    const box = await page.locator(id).boundingBox();
    expect(Math.round(box.width)).toBe(vp.width); expect(Math.round(box.height)).toBe(vp.height);
  }
  // the overlay has been drawn on: a blank canvas compresses to almost nothing
  const size = await page.evaluate(() => document.getElementById('g').toDataURL().length);
  expect(size).toBeGreaterThan(20000);
  const s = await page.evaluate(() => ({ webgl: window.__pp.webgl, draws: window.__pp.draws }));
  expect(s.webgl).toBe(true);
  expect(s.draws).toBeGreaterThan(10);
  expect(errors).toEqual([]);
});

test('a shift starts and plays', async ({ page, isMobile }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto('/?seed=1001');
  await ready(page);
  if (isMobile) { const p = await spot(page, 240, 420); await page.touchscreen.tap(p.x, p.y); }
  else await page.keyboard.press('Enter');
  await expect.poll(() => page.evaluate(() => window.__pp.state)).toBe('play');
  // throw a few pizzas each way
  const vp = page.viewportSize();
  for (let i = 0; i < 4; i++) {
    if (isMobile) await page.touchscreen.tap(i % 2 ? vp.width * 0.2 : vp.width * 0.8, vp.height * 0.6);
    else await page.keyboard.press(i % 2 ? 'KeyZ' : 'KeyX');
    await page.waitForTimeout(350);
  }
  const s = await page.evaluate(() => ({ state: window.__pp.state, lives: window.__pp.lives, day: window.__pp.day, step: window.__pp.step, version: window.__pp.version }));
  expect(['play', 'over']).toContain(s.state);
  expect(s.day).toBe(1);
  expect(s.step).toBeGreaterThan(10);
  expect(s.version).toMatch(/^\d+\.\d+\.\d+$/);
  expect(errors).toEqual([]);
});

test('a tap that slips a few pixels still throws, and does not steer (phone)', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'touch only');
  await page.goto('/?seed=1001');
  await ready(page);
  const p = await spot(page, 240, 420); await page.touchscreen.tap(p.x, p.y);
  await expect.poll(() => page.evaluate(() => window.__pp.state)).toBe('play');
  await page.waitForTimeout(600);
  const vp = page.viewportSize(), before = await page.evaluate(() => ({ pizzas: window.__pp.pizzas, x: window.__pp.x }));
  // one finger goes down, rolls 9 pixels and lifts: v0.1.0 treated this as a drag
  // (sent in one go, so a slow test machine cannot turn the tap into a long press)
  await page.evaluate(([x, y]) => {
    const c = document.getElementById('g');
    const ev = (type, dx, dy) => c.dispatchEvent(new PointerEvent(type, { pointerId: 7, pointerType: 'touch', clientX: x + dx, clientY: y + dy, bubbles: true, cancelable: true }));
    ev('pointerdown', 0, 0); ev('pointermove', 5, 4); ev('pointermove', 7, 6); ev('pointerup', 7, 6);
  }, [vp.width * 0.8, vp.height * 0.6]);
  await page.waitForTimeout(150);
  const after = await page.evaluate(() => ({ pizzas: window.__pp.pizzas, tx: window.__pp.tx }));
  expect(after.pizzas).toBe(before.pizzas - 1);
  expect(after.tx).toBe(280);   // the ride's target has not moved from where a shift starts
});

test('the garage opens and goes back (keyboard)', async ({ page, isMobile }) => {
  test.skip(isMobile, 'keyboard only');
  await page.goto('/');
  await ready(page);
  await page.keyboard.press('KeyG');
  await expect.poll(() => page.evaluate(() => window.__pp.state)).toBe('garage');
  await page.keyboard.press('Escape');
  await expect.poll(() => page.evaluate(() => window.__pp.state)).toBe('title');
});

test('Continue on the title screen picks up from the saved day; a new run starts on Monday', async ({ page, isMobile }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem('payton-pizza-v1')) localStorage.setItem('payton-pizza-v1', JSON.stringify({ bank: 30, owned: [true, false, false, false], ride: 0, hi: 900, bestDay: 4, cont: 4, mute: true }));
  });
  await page.goto('/');
  await ready(page);
  if (isMobile) { const p = await spot(page, 240, 407); await page.touchscreen.tap(p.x, p.y); }
  else await page.keyboard.press('Enter');
  await expect.poll(() => page.evaluate(() => window.__pp.state)).toBe('play');
  expect(await page.evaluate(() => ({ day: window.__pp.day, score: window.__pp.score, lives: window.__pp.lives }))).toEqual({ day: 4, score: 0, lives: 3 });
  // back to the title, then a new run
  await page.reload();
  await ready(page);
  if (isMobile) { const p = await spot(page, 240, 465); await page.touchscreen.tap(p.x, p.y); }
  else await page.keyboard.press('KeyN');
  await expect.poll(() => page.evaluate(() => window.__pp.state)).toBe('play');
  expect(await page.evaluate(() => window.__pp.day)).toBe(1);
});
