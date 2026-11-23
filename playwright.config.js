import { defineConfig } from '@playwright/test';

// PW_CHROME lets a machine without Playwright's own browsers use an installed Chrome.
// The 3D street needs WebGL; these switches give a test browser a software renderer when it has no graphics chip.
const gl = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
const launchOptions = process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME, args: ['--no-sandbox', ...gl] } : { args: gl };

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 45000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: { baseURL: 'http://localhost:4173', browserName: 'chromium', launchOptions },
  webServer: { command: 'npm run preview', url: 'http://localhost:4173', reuseExistingServer: !process.env.CI, timeout: 30000 },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1280, height: 800 } } },
    { name: 'phone', use: { viewport: { width: 390, height: 760 }, hasTouch: true, isMobile: true, deviceScaleFactor: 3 } }
  ]
});
