# Changelog

All notable changes to Payton Pizza are recorded here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versions: [Semantic Versioning](https://semver.org). Each phase of the build plan ships as a version; see [ROADMAP.md](ROADMAP.md).

## [Unreleased]

Planned for v0.3.0 (Phase 3, deeper gameplay): clearer lives, Continue from the day you reached, extra-life pickups, ride perks, new customer types, a bonus round, more hazards and a tuning pass.

## [0.2.0] - 2026-11-23 — 3D core and controls

The game moves from a 2D canvas to a 3D street with one fixed camera, and throwing gets easier to control.

### Added
- The street is drawn in 3D with Three.js: houses, customers, order badges, traffic, hazards, the four rides, pizzas in flight and the finish. Every shape is built in code.
- One fixed camera that looks steeply down the street and never turns. The whole street, lawn to lawn, stays in view.
- Seeded streets: a given day has the same street and the same traffic for every player.
- Aiming marks: a ring on each side shows where a pizza thrown now would land, green over a door and gold over a customer.
- Tap zones shown in the bottom corners on touch screens.
- A frame-rate readout (`?fps=1`, or the F key) and testing switches (`?seed`, `?day`, `?ride`, `?shadows=0`).
- The five test streets as recorded inputs that the unit tests replay (`npm run record` re-records them).
- 35 more unit tests (49 in all) and a browser test for a tap that slips.

### Changed
- The rules advance in fixed steps of 1/60 s, whatever the screen's speed.
- The game fills the whole window. The HUD sits at the top and menus are centred.
- The black car is now the Gun-Metal Black Bimmer, repainted gun-metal black with no badge or logo.
- Front doors and hand-offs are bigger targets: a pizza may land 21 units from the middle of a door (was 16) and 16 from a customer (was 13).
- Traffic appears further up the street, beyond the 3D view, so cars no longer pop in.
- The roadmap is now eleven phases (0 to 10): the game goes 3D, and the gameplay work is split across Phases 2 and 3. The 2D game is kept at the `v0.1.0` tag and on the `classic-2d` branch.
- The 3D test page at `/spike-3d/` is retired. Its sources stay on the `spike-3d` branch.

### Fixed
- The sign on the shop's roof read sideways.
- A tap that rolled a few pixels was treated as a drag: the ride twitched and no pizza was thrown. A touch now has to move more than 16 pixels before it steers, and a short touch that stays inside that always throws.

### Not changed, on purpose
- Scoring, tips, prices, lives, shift length and difficulty. Those are tuned in v0.3.0.
- The garage's ride pictures are still the 2D ones.

## [0.1.0] - 2026-11-22 — Repo and walking skeleton

The prototype moves into version control and starts deploying itself. It plays exactly as it did before.

### Added
- The prototype as the first commit, kept at `docs/history/prototype-2026-11-22.html`.
- Vite build, ESLint, 14 unit tests (Vitest) and browser tests at desktop and phone sizes (Playwright).
- CI on every pull request and on `main`.
- A release workflow that tags and publishes a GitHub Release when `VERSION` changes.
- A deploy workflow that publishes `main` to the beta address and keeps a "coming soon" page at the live address.
- README, ROADMAP, LICENSE, a development guide and release notes.
- A page icon.
- A read-only `window.__pp` peek (state, score, day, lives, version) for automated tests.

### Changed
- The single script is now eleven modules under `src/`. Values that change during play live on one shared object.

### Not changed, on purpose
- Gameplay, art, sound, prices and difficulty. Nine recorded runs replayed against the prototype end on an identical frame.
- The black car is still named Midnight Coupe. Its new name and paint arrive in v0.2.0.
