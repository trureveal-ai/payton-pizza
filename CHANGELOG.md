# Changelog

All notable changes to Payton Pizza are recorded here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versions: [Semantic Versioning](https://semver.org). Each phase of the build plan ships as a version; see [ROADMAP.md](ROADMAP.md).

## [Unreleased]

Planned for v0.5.0 (Phase 5, downtown and the snowy town): the last two neighborhoods of the four-week cycle, each with its own look and obstacles, and a difficulty check across all four weeks. New rides follow in v0.6.0.

## [0.4.0] - 2026-11-24 — Suburb, rides and the beach town

The street now changes by week. Maple Street got its finished look, the beach town arrived with obstacles of its own, the four rides were finished, and Friday to Sunday are played in the evening. Cam played each part on the beta address and approved the camera, the look, the speed and the beach obstacles.

### Added
- **Neighborhoods.** The street changes each week. Week 1 is Maple Street, the suburb; week 2 is the beach town; then the cycle repeats while the difficulty keeps climbing. The banner at the start of a shift names the week and the neighborhood. (`src/hoods.js`; downtown and the snowy town will make it a four-week cycle.)
- **The beach town**, with its own look: pastel houses under striped awning roofs with wooden decks, palm trees, umbrellas, sandcastles, sand in place of lawns, a boardwalk in place of the sidewalk, and the sea behind the houses on the left.
- **Beach town obstacles.** Sand drifts drag the ride down to 60% speed while it is in them and cost no life. Surfers wait at the curb and carry a board across the street when you get close. Golf carts putter up the street, drifting from one lane to the other. Surfers and carts hurt every ride. No dogs at the beach, and few cars backing out.
- **A fuller suburb.** Three house shapes (a dormer, two storeys, a side garage), six wall colours, shutters, window boxes on houses that ordered, round, pine and blossom trees, picket fences, street lamps, flamingos, paddling pools and bird baths. Some traffic is now pickup trucks.
- **Evening shifts.** Friday, Saturday and Sunday (and the bonus round) are played at dusk: warm low light, lights on in the houses that ordered, glowing street lamps, and light on the road ahead of the ride. The Payton Pizza van's sign throws a wide orange pool around it. The rules are the same as by day.
- **Finished rides.** The hoverboard has fenders, foot pads and rings of light on its wheels; the dirt bike a number plate, engine and exhaust; the Bimmer a grille, hood creases, skirts and twin tailpipes; the van cream bands, door lines and a cream roof panel. The garage shows a picture of each real 3D ride.
- **A fuller shop** at the end of the street: a wide window, plants by the door, a flue and an air conditioner on the roof.
- **Low effects**, in the pause menu, for slower phones: no shadows, no evening glows, a softer picture. The choice is remembered on the device.
- 8 more unit tests (93 in all) for neighborhoods and the beach obstacles.

### Changed
- **A little slower.** With the lower camera the street felt "a little too fast" to Cam, so it now starts at 150 and gains 7 a day up to 250 (was 160, 9 a day, up to 280). That is 6% slower on the first Monday and about 12% slower by the second week.
- **The camera sits a little lower** (57 degrees down, was 62), at Cam's ask, so more of the house fronts shows. It still never turns.
- The aiming ring now works out where a pacing customer will be when the pizza arrives, so it lights for them more often and still never promises a delivery that misses.
- Each street's houses are built when the street starts and thrown away when the next one does, so memory does not grow as the weeks go by.
- The recorded test streets were re-recorded (`npm run record`): day 14 is now a beach town street.

## [0.3.0] - 2026-11-23 — Deeper gameplay

Lives that matter, a way back in when a run ends, rides worth buying, more going on in the street, and a week that builds to a bonus round. Cam played it on the beta address through three rounds of changes and approved the difficulty.

### Added
- **Continue.** When a run ends, the game-over screen offers to continue from the start of the day you reached, with three lives. Your bank and rides are kept and your score starts again from zero. The title screen offers the same after you close the game. Starting a new run from Monday replaces the saved day.
- **Extra-life pickups.** Every street has one or two hearts on the road. Lives go up to five; at five, a heart pays 250 points instead.
- **A way to stop a dog.** Throw it a pizza. When the dog is alongside, an orange aiming ring appears on it and a pizza thrown that way hits it. Before that, a pizza that lands on the ground near it draws it away. Either way it goes to the pizza and eats (25 points). A pizza that is delivered is not the dog's. The first dog of a shift says so on screen.
- **Ride perks**, each ride keeping the ones below it, shown in the garage: the dirt bike rides over potholes; the Gun-Metal Black Bimmer also knocks cones, trash cans and balls aside; the Payton Pizza van also shrugs off dogs and skaters. Traffic, cars backing out, hydrants and roadwork barriers hurt every ride.
- **Two new customers.** One walks out to the curb as you approach, which makes the hand-off easier. One is impatient: a timer shows above their head, and when it runs out they go inside. Their front door still counts; a hand-off in time pays half as much again.
- **Three new hazards.** Puddles cost no life but make the ride slide for a moment and cool the pizzas. Balls roll across the street when you get close (from Wednesday). Roadwork barriers block one lane (from Friday).
- **A bonus round after every Sunday**: every house ordered, nothing is in the way, pizzas never run out, tips and points are doubled, and you cannot be fired or lose a life there.
- `src/tuning.js`: every number that changes with the day is in one place.
- `npm run measure`: an automatic player rides a dozen streets per day and prints how it did, so a tuning change can be compared before and after.
- 36 more unit tests (85 in all) and a browser test for Continue.
- `?bonus=1` in the page address starts in the bonus round, for testing.

### Changed
- **Easier, especially early.** Streets are slower and shorter with fewer hazards, and get harder more gradually. Monday has no dogs, backing cars or skaters. Top speed is reached on day 15 (was day 12) and is lower. Skaters start on Thursday (was Wednesday).
- **More pizza.** Rides carry 8, 10, 12 and 16 pizzas (were 6, 8, 10 and 14). A pizza pickup now fills the bag (was +5), and pickups come every second pair of houses on Monday and Tuesday (every third after that).
- **No wasted second pizza.** Once a pizza is on its way to a house, the aiming ring goes out for that house until it lands.
- **Dogs chase from the side.** A dog used to run ahead of the ride and slide sideways to match it for as long as it was on screen. Now it barks as you come up, jumps out from the curb, runs alongside just behind you and closes in. If it reaches you it bites once and gives up; if you keep away for about three seconds it wears out.
- **Perks are spelled out.** Each ride's garage card lists everything it shrugs off, the banner at the start of a shift names your ride's perks, and riding over a pothole shows "SMOOTH!".
- Lives are easier to read: hearts flash when one is lost or gained, the banner at the start of a shift shows them, and the shift ticket has a lives row.
- The recorded test streets were re-recorded (`npm run record`), because the rules changed on purpose.

### Measured with the automatic player (12 streets a day, a typical ride for that day, three lives)

| Day | Streets finished, v0.2.0 | Streets finished, now | Orders delivered, v0.2.0 | Orders delivered, now |
| --- | --- | --- | --- | --- |
| 1 | 8 of 12 | 12 of 12 | 57% | 86% |
| 2 | 1 of 12 | 12 of 12 | 48% | 81% |
| 3 | 0 of 12 | 12 of 12 | 23–40% | 85% |
| 5 | 0 of 12 | 11 of 12 | 23–40% | 83% |
| 7 | 0 of 12 | 12 of 12 | 23–40% | 75% |
| 10 (van) | 0 of 12 | 11 of 12 | 23–40% | 70% |
| 14 (van) | 0 of 12 | 5 of 12 | 23–40% | 55% |

The automatic player steers worse than a person, so these show the direction of the change, not what a player will score. Dogs were what ended most of its runs from Wednesday on: with the old dogs it finished 8 of 12 streets on day 5 and 4 of 12 on day 7.

### Not changed, on purpose
- Prices, tips per delivery, the fired-under-half rule, and one life back for finishing a shift (up to three).
- The look of the street, rides and people. That is v0.4.0 and v0.5.0.

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
