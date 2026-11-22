import { test, expect } from '@playwright/test';

// Canvas spot (in the game's own 480x800 units) to a spot on the page.
async function spot(page, x, y) {
  const b = await page.locator('#g').boundingBox();
  return { x: b.x + (x / 480) * b.width, y: b.y + (y / 800) * b.height };
}

test('opens on the title screen with no errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto('/');
  await expect.poll(() => page.evaluate(() => window.__pp && window.__pp.state)).toBe('title');
  await page.waitForTimeout(500);
  const box = await page.locator('#g').boundingBox();
  expect(box.width / box.height).toBeCloseTo(480 / 800, 1);
  // the canvas has been drawn on: a blank one compresses to almost nothing
  const size = await page.evaluate(() => document.getElementById('g').toDataURL().length);
  expect(size).toBeGreaterThan(20000);
  expect(errors).toEqual([]);
});

test('a shift starts and plays', async ({ page, isMobile }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto('/');
  await expect.poll(() => page.evaluate(() => window.__pp && window.__pp.state)).toBe('title');
  if (isMobile) { const p = await spot(page, 240, 420); await page.touchscreen.tap(p.x, p.y); }
  else await page.keyboard.press('Enter');
  await expect.poll(() => page.evaluate(() => window.__pp.state)).toBe('play');
  // throw a few pizzas each way
  for (let i = 0; i < 4; i++) {
    if (isMobile) { const p = await spot(page, i % 2 ? 80 : 400, 500); await page.touchscreen.tap(p.x, p.y); }
    else await page.keyboard.press(i % 2 ? 'KeyZ' : 'KeyX');
    await page.waitForTimeout(350);
  }
  const s = await page.evaluate(() => ({ state: window.__pp.state, lives: window.__pp.lives, day: window.__pp.day, version: window.__pp.version }));
  expect(['play', 'over']).toContain(s.state);
  expect(s.day).toBe(1);
  expect(s.version).toMatch(/^\d+\.\d+\.\d+$/);
  expect(errors).toEqual([]);
});

test('the garage opens and goes back (keyboard)', async ({ page, isMobile }) => {
  test.skip(isMobile, 'keyboard only');
  await page.goto('/');
  await expect.poll(() => page.evaluate(() => window.__pp && window.__pp.state)).toBe('title');
  await page.keyboard.press('KeyG');
  await expect.poll(() => page.evaluate(() => window.__pp.state)).toBe('garage');
  await page.keyboard.press('Escape');
  await expect.poll(() => page.evaluate(() => window.__pp.state)).toBe('title');
});
