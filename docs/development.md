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
- `gh-pages` is written only by workflows.
- `spike-0` holds the Phase 0 scratch work. `spike-3d` keeps the sources of the 3D test page, whose published copy was removed at v0.2.0. `classic-2d` keeps the 2D game as released in v0.1.0.

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

### Seeds, fixed steps and the recorded test streets

The rules draw every random number from `src/rng.js` and advance in fixed steps of 1/60 s, so a seed plus a list of inputs always plays out the same way. Drawing code must use `vrnd` (or `Math.random`), never `rnd`, so that what is on screen cannot change how a street plays.

`tests/tools/sim.js` plays the rules with no screen. `tests/fixtures/streets.json` holds recorded inputs and results for the five test streets (T5 once per ride), each as a normal run and as a full-length run that rides through hazards. `tests/unit/streets.test.js` replays them.

If a rule changes on purpose, the recordings no longer match. Run `npm run record`, check the printed results make sense, commit the new fixture and say so in the changelog.

### Testing switches

Add these to the page address. None of them is saved.

| Switch | What it does |
| --- | --- |
| `?seed=1001` | Plays that street instead of the day's own |
| `?day=14` | Starts on that day |
| `?ride=3` | Rides that ride (0 hoverboard, 1 dirt bike, 2 Bimmer, 3 van) without owning it |
| `?fps=1` | Shows the frame-rate readout (the F key toggles it) |
| `?shadows=0` | Turns shadows off |

The browser tests give Chromium a software renderer for WebGL, so they prove the 3D street draws but say nothing about frame rate. Frame rate is judged on a real phone with `?fps=1`.

## Where things are deployed

| Built from | Published at |
| --- | --- |
| `main` | https://trureveal-ai.github.io/payton-pizza/beta/ |
| `site/coming-soon/` (until v1.0.0) | https://trureveal-ai.github.io/payton-pizza/ |

Rollback: re-run the Deploy workflow from the previous good commit.

## Code map

| File | Job |
| --- | --- |
| `src/main.js` | Entry point and the fixed-step loop |
| `src/state.js` | `G`, the shared object for everything that changes during play |
| `src/config.js` | Fixed numbers: rides, street geometry, landing sizes, step length, palettes |
| `src/rng.js` | Seeded random numbers and each day's street seed |
| `src/world.js` | Builds a street for a shift |
| `src/game.js` | Rules and the per-step update |
| `src/render3d.js` | The 3D street and its fixed camera (Three.js). Reads the state, never changes it |
| `src/models.js` | 3D shapes, each built in code and merged into one mesh |
| `src/render.js` | The overlay: HUD, menus, pop-up words |
| `src/input.js` | Touch, mouse, keyboard |
| `src/touch.js` | Tells a tap from a drag |
| `src/audio.js` | Sound effects |
| `src/save.js` | Progress saved on the device |
| `src/canvas.js`, `src/util.js` | The two canvases and how the overlay sits in the window; small helpers |
