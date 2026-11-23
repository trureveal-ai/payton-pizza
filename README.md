# Payton Pizza

An arcade pizza-delivery game for phones and keyboards. Payton rides down the street throwing pizzas: a pizza on the front door scores, and a pizza straight into the customer's hands scores more. Tips buy faster rides, from a hoverboard up to the Payton Pizza van.

**Current version:** 0.2.0 · **Status:** in development, playable on the beta link · [Roadmap](ROADMAP.md)

- **Beta (test copy):** https://trureveal-ai.github.io/payton-pizza/beta/
- **Live:** https://trureveal-ai.github.io/payton-pizza/ (shows "coming soon" until v1.0.0)

## Contents

- [Features](#features)
- [How it works](#how-it-works)
- [What's in this repo](#whats-in-this-repo)
- [Requirements](#requirements)
- [Running and deploying](#running-and-deploying)
- [How to play](#how-to-play)
- [Troubleshooting](#troubleshooting)
- [Versioning and releases](#versioning-and-releases)
- [Changelog](#changelog)
- [Development](#development)
- [Privacy and security](#privacy-and-security)
- [License and credits](#license-and-credits)

## Features

In v0.2.0:

- A 3D street with houses on both sides and one fixed camera. Bright houses ordered; gray houses did not.
- Front-door deliveries, hand-off bonuses with combos, and a heat bar that raises tips.
- Aiming rings that show where a pizza thrown now would land.
- Four rides and a garage: hoverboard, dirt bike, Gun-Metal Black Bimmer, Payton Pizza van.
- Hazards: traffic, trash cans, hydrants, cones, potholes, dogs, skaters, cars backing out of driveways.
- Shifts by weekday that get harder, with a shift ticket at the end of each. Every player gets the same street on a given day.
- Touch controls and keyboard controls.
- Bank, rides and high score saved on the device.

Planned before v1.0.0: a Continue option and extra lives, ride perks, new customers and a bonus round, a finished look for the street, rides and people, music, personal bests, install on phone, a shared leaderboard and invitation group leaderboards. See the [roadmap](ROADMAP.md).

## How it works

The rules are plain JavaScript and the street is drawn in 3D with [Three.js](https://threejs.org). There is no game engine and no server: everything runs in the browser. Every 3D shape is built in code, so there are no image or model files.

```
index.html ── src/main.js ── loop: update(1/60 s) as many times as needed, then draw
                 │
                 ├─ input.js     touch, mouse, keyboard (touch.js tells a tap from a drag)
                 ├─ game.js      rules: shifts, throwing, delivering, crashing
                 ├─ world.js     builds each street from a seed (rng.js)
                 ├─ render3d.js  draws the street in 3D with one fixed camera (models.js holds the shapes)
                 ├─ render.js    draws the HUD, menus and pop-up words on top
                 ├─ audio.js     sound effects made in code
                 ├─ save.js      progress kept on the device
                 └─ state.js     the one shared object (G) the modules read and write
```

A given day always has the same street and the same traffic, for every player. The rules advance in fixed steps, so the same inputs always give the same result.

Pushing to `main` builds the game and publishes it to the beta address. The live address changes only at a live release.

## What's in this repo

| Path | What it holds |
| --- | --- |
| `index.html`, `src/` | The game |
| `tests/unit/` | Unit tests (Vitest) |
| `tests/tools/`, `tests/fixtures/` | A screen-free player and the recorded test streets |
| `tests/e2e/` | Browser tests at desktop and phone sizes (Playwright) |
| `site/coming-soon/` | The page shown at the live address until launch |
| `.github/workflows/` | CI, the release workflow, and the beta deploy |
| `docs/development.md` | How to work on the game |
| `docs/releases/` | Release notes, one file per version |
| `docs/history/` | The original single-file prototype, kept for reference |
| `CHANGELOG.md`, `ROADMAP.md`, `VERSION` | What changed, what's planned, the current version |

## Requirements

- To play: a current phone or desktop browser.
- To build: Node.js 22 and npm.

## Running and deploying

```bash
npm install
npm run dev        # play locally with live reload
npm run build      # build into dist/
npm run preview    # serve the built game at http://localhost:4173
```

Deploying is automatic. Merging to `main` publishes the beta copy. Nothing is deployed by hand.

## How to play

| | Phone | Keyboard |
| --- | --- | --- |
| Steer | Drag | Arrow keys |
| Go faster | Drag up the screen | Up arrow |
| Throw left / right | Tap the left or right side | Z / X |
| Throw toward the nearest order | | Space |
| Pause, sound | Buttons at the top right | P, M |

Deliver at least half the orders in a shift or you're fired. Three crashes end the run. Smashing a window costs you money.

A ring on each side of the street shows where a pizza thrown right now would land. It turns green over a front door and gold over a customer's hands.

## Troubleshooting

- **No sound on an iPhone:** check the ringer switch and volume, then tap the screen once. Phones only allow sound after a tap.
- **A blank blue screen:** the browser could not start 3D drawing (WebGL). Try a current version of Safari or Chrome.
- **Choppy play:** add `?shadows=0` to the address. Add `?fps=1` to see the frame rate.
- **The beta link shows an old version:** reload the page. Deploys take a minute or two after a merge.
- **Progress is gone:** the bank and rides are saved in the browser on one device. Clearing site data or using a private tab starts fresh.

## Versioning and releases

Versions follow [Semantic Versioning](https://semver.org). Each phase of the build plan ships as one minor version.

| Version | Phase | Adds | Runs on | Status |
| --- | --- | --- | --- | --- |
| v0.1.0 | 1 | Repo and walking skeleton (2D) | Beta | Released |
| v0.2.0 | 2 | 3D core and controls | Beta | Released |
| v0.3.0 | 3 | Deeper gameplay | Beta | Planned |
| v0.4.0 | 4 | 3D world and rides | Beta | Planned |
| v0.5.0 | 5 | Characters and polish | Beta | Planned |
| v0.6.0 | 6 | Music and sound | Beta | Planned |
| v0.7.0 | 7 | Personal bests and install on phone | Beta | Planned |
| v0.8.0 | 8 | Shared leaderboard | Beta | Planned |
| v0.9.0 | 9 | Invitation group leaderboards | Beta | Planned |
| v1.0.0 | 10 | First live release | Live | Planned |

The 2D game is kept at the `v0.1.0` tag and on the `classic-2d` branch.

Releases are automatic: when `VERSION` changes on `main`, the release workflow runs the tests, then creates the git tag and the GitHub Release from `docs/releases/v<version>.md`. Nobody tags by hand.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

- **0.2.0:** the game moved to a 3D street with one fixed camera, seeded streets, forgiving tap-to-throw, aiming rings and the Gun-Metal Black Bimmer.
- **0.1.0:** the prototype moved into this repo, split into modules, with tests, CI, automatic releases and a beta deploy.

## Development

```bash
npm run check      # lint, unit tests, build, browser tests
```

See [docs/development.md](docs/development.md).

## Privacy and security

- The game collects nothing. There are no accounts, ads or tracking.
- Progress is stored only in the player's own browser.
- This repo is public. No secrets or service keys are ever committed, and CI blocks them.

## License and credits

Copyright © 2026 Cameron Gonzales. All rights reserved. See [LICENSE](LICENSE).

Payton Pizza is an original game: its name, art, sound, characters and street layout are its own.
