# Development guide

## Ground rules

- The repo is the source of truth. The beta and live sites are copies built from it.
- The live address changes only in phases marked live. Everything else goes to beta.
- One phase at a time, each on its own branch, released as its own version.
- No secrets, service keys or user data in git. `.gitignore` and CI enforce it.
- Never deploy by hand. The workflows do it.

## Branches and releases

- `main` always passes CI. Each phase is built on its own branch (`phase-<n>-<name>`) and merges by pull request.
- Each version has a milestone (`v<x.y.z> — Phase <n>`) with its tasks as issues.
- To release: close the milestone's issues and meet the gate; move the CHANGELOG entries to the new version; update README and ROADMAP; write `docs/releases/v<version>.md` and set `VERSION`; merge to `main`; close the milestone.
- Nobody tags by hand. The Release workflow creates the tag and the GitHub Release.
- `gh-pages` is written only by workflows: Deploy for beta and the coming-soon page, and the `spike-3d` branch's own workflow for its test page.
- `spike-0` holds the Phase 0 scratch work. `spike-3d` holds the 3D test page (scratch). `classic-2d` keeps the 2D game as released in v0.1.0.

## Tests

```bash
npm run lint       # ESLint
npm test           # unit tests (Vitest), made-up data only
npm run build
npm run test:e2e   # browser tests (Playwright) against the built game
npm run check      # all four
```

- Browser tests need Chromium: `npx playwright install chromium`, or set `PW_CHROME=/path/to/chrome` to use an installed one.
- A bug fix comes with a test that fails without it.
- `window.__pp` is a read-only peek the browser tests use. It must never gain a way to change the game.

### Checking that a refactor did not change play

`docs/history/prototype-2026-11-22.html` is the reference. With `Math.random` replaced by a seeded source and `requestAnimationFrame` stepped at a fixed 1/60 s, the same key presses must end on the same frame in both builds. Phase 1 was checked this way over nine runs. Phase 2 builds this into the game and the test suite.

## Where things are deployed

| Built from | Published at |
| --- | --- |
| `main` | https://trureveal-ai.github.io/payton-pizza/beta/ |
| `site/coming-soon/` (until v1.0.0) | https://trureveal-ai.github.io/payton-pizza/ |

Rollback: re-run the Deploy workflow from the previous good commit.

## Code map

| File | Job |
| --- | --- |
| `src/main.js` | Entry point and the frame loop |
| `src/state.js` | `G`, the shared object for everything that changes during play |
| `src/config.js` | Fixed numbers: screen size, rides, street geometry, palettes |
| `src/world.js` | Builds a street for a shift |
| `src/game.js` | Rules and the per-frame update |
| `src/render.js` | All drawing |
| `src/input.js` | Touch, mouse, keyboard |
| `src/audio.js` | Sound effects |
| `src/save.js` | Progress saved on the device |
| `src/canvas.js`, `src/util.js` | The canvas and small helpers |
