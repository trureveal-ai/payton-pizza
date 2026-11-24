# Roadmap

Payton Pizza is built in thirteen phases (0 to 12). Each phase ships as a version with a git tag, a GitHub Release, a CHANGELOG entry and a GitHub milestone, and the next phase starts only after its gate passes. The full plan is in the [build plan doc](https://claude.ai/artifact/QdqqfSduUsuQ2hvMBt4WAs).

The game is going 3D. v0.1.0 is the 2D game; from v0.2.0 it is drawn in 3D with Three.js. The 2D version is kept (see "The 2D version" below).

| Version | Phase | Scope | Gate | Runs on | Status |
| --- | --- | --- | --- | --- | --- |
| — | 0 | Groundwork and spikes | Spikes pass, or the plan changes with Cam's OK | Nothing | Done 2026-11-22 |
| v0.1.0 | 1 | Repo and walking skeleton (2D) | CI passes, release published, beta plays like the prototype on phone and PC | Beta | Released 2026-11-22; Cam played it on his phone 2026-11-23 |
| v0.2.0 | 2 | 3D core and controls: seeded streets, a 3D street in simple shapes, one fixed camera, wider street and view, forgiving tap-to-throw, front-door deliveries made reachable, the Bimmer | Replays are deterministic; smooth on Cam's phone; Cam approves the camera, the street width and the controls | Beta | Released 2026-11-23 after Cam's review on his iPhone |
| v0.3.0 | 3 | Deeper gameplay: lives made clearer with Continue and extra-life pickups, ride perks, new customers, bonus round, more hazards, tuning | Cam approves the difficulty after a full week of shifts, and each ride feels worth its price | Beta | Released 2026-11-23; Cam played it on beta and approved the difficulty, the dogs and the bonus round |
| v0.4.0 | 4 | Suburb, rides and the beach town: finished look for today's suburb, its props, traffic and shop, and all four rides; neighborhoods that change by week on a four-week cycle; the beach town with its own obstacles; day and dusk | Smooth on Cam's phone in both neighborhoods; Cam approves the look, and the beach town's obstacles feel fair | Beta | Planned |
| v0.5.0 | 5 | Downtown and the snowy mountain town, each with its own look and obstacles; difficulty check across the four weeks | Cam approves both neighborhoods and the frame rate holds | Beta | Planned |
| v0.6.0 | 6 | New rides in the garage, chosen by Cam at the start of the phase | Cam approves the list and each new ride feels worth its price | Beta | Planned |
| v0.7.0 | 7 | Characters and polish: Payton, customers, effects, menus, tutorial, settings | Cam approves the characters and the menus | Beta | Planned |
| v0.8.0 | 8 | Music and sound | Cam approves the sound on his phone | Beta | Planned |
| v0.9.0 | 9 | Personal bests and install on phone | Installed, played offline, old saves intact | Beta | Planned |
| v0.10.0 | 10 | Shared leaderboard | Two devices see each other's scores; fake scores refused | Beta | Planned |
| v0.11.0 | 11 | Invitation group leaderboards | A second person joins from a link and both scores show | Beta | Planned |
| v1.0.0 | 12 | First live release | Smoke test passes on phone and PC; Cam gives the go-ahead | Live | Planned |

## Decisions (2026-11-22)

- **Hosting:** public repo, GitHub Pages. Live at `/payton-pizza/`, beta at `/payton-pizza/beta/`.
- **Launch scope:** shared leaderboard, personal best board, invitation group leaderboards, install on phone, music and richer sound. No custom web address at launch.
- **3D:** the game is drawn in 3D with Three.js, every model built in code, no image or model files. Decided after a test page held 60 frames a second on Cam's iPhone with shadows on and 150 extra moving objects.
- **Look:** bright and chunky, in the spirit of Subway Surfers, across the whole game.
- **The van:** inspired by a toy pizza van Cam's son Payton played with. An original small red delivery van with a round Payton Pizza badge and a giant light-up slice sign. No face, and no marks or artwork from the toy.
- **Camera:** one fixed view. Steep like a top-down view, tilted enough to show front doors, and it never turns. Wide enough to watch a pizza land.
- **Street:** wider than the 3D test page.
- **The black car:** "Gun-Metal Black Bimmer", no badge or logo (arrives in v0.2.0).
- **Leaderboard service:** Cloudflare Workers with D1, chosen in Phase 0. The live proof of it runs at the start of the shared-leaderboard phase, now Phase 10 (Cam's OK, 2026-11-22).
- **Names on boards:** three-letter initials. No accounts, emails, ads or tracking.
- **Pages deploy:** the `gh-pages` branch, written only by workflows.

## Decisions (2026-11-23, from Cam's playtest of the 2D beta)

- **Tap to throw:** taps often registered as drags, and it was hard to know where to tap. In the 3D build a short touch always throws, steering starts only after a larger movement, and the left and right tap zones are shown. Throw buttons become a settings option if tap-anywhere still misfires.
- **Lives:** made clearer on screen. They already carry between shifts. Extra-life pickups are added to the street.
- **Continue:** when a run ends, the player can continue from the start of the day they reached. The score resets to zero on a continue so the leaderboards stay fair. Bank and rides are kept.
- **Ride perks, each ride keeping the ones below it:** hoverboard none; dirt bike rides over potholes; Gun-Metal Black Bimmer also knocks cones and trash cans aside (and, added in Phase 3, balls); Payton Pizza van also shrugs off dogs and skaters. Traffic and cars backing out hurt every ride.
- **Phases:** the gameplay work is split in two (Phases 2 and 3), which made eleven phases at the time (thirteen since the evening of 2026-11-23).

## Decisions (2026-11-23, from Cam's playtest of the Phase 3 beta)

- **Dogs:** he likes dogs chasing but not that they shadowed the ride, and wanted a way to stop them. After trying a first version (a short dash, then a straight line) he asked for this instead: the dog jumps out from the side, chases and catches up unless you throw a pizza; close enough alongside, the pizza can hit it; either way the dog goes to a pizza and eats. Running a dog over stays the van's perk.
- **Perks:** he asked for a short description of each ride's perks. The garage cards and the shift banner now spell them out.
- **Continue:** works as he expected, and he likes that the bank is not affected. Kept as built.
- **Difficulty:** Wednesday to Sunday is "just right"; Sunday is left alone. The balls stay as they are.
- **Bonus round:** he likes that it is brief, all timing, with few obstacles and a chance at maximum points and dollars. Kept as built.

## Decisions (2026-11-23, evening: neighborhoods and rides)

- **Neighborhoods ("worlds"):** four, one per week, then the cycle repeats while the difficulty keeps climbing: suburb, beach town, downtown, snowy mountain town. Each has its own look and its own obstacles. The suburb and the beach town are Phase 4; downtown and the snowy town are Phase 5 (issues #65, #67, #68, #69, #70).
- **More rides in the garage:** after the neighborhoods, in Phase 6. Cam asked for suggestions; which rides and how many is his choice at the start of that phase (issues #64, #71).
- **Phases:** these two additions make thirteen phases (0 to 12). Characters and polish, music, personal bests and the boards each move two phases later; v1.0.0 is Phase 12.

## Decisions (2026-11-23, late: Phase 4 review)

- **Beach town:** Cam likes it.
- **Camera:** a little lower, for a little more detail. Now 57 degrees down (was 62).
- **Roadwork barriers:** they make it more challenging; they stay for now.
- **Camera at 57 degrees:** approved ("This is how it's supposed to be"). No stutter on his phone; the evening shifts and the details "look so good".
- **Speed:** "moving a little too fast", so the street was slowed a little (150 + 7 a day up to 250).

## The 2D version

The 2D game is kept in case it is wanted later:

- Release tag `v0.1.0` and branch `classic-2d` hold the 2D game as released.
- `docs/history/prototype-2026-11-22.html` is the original single-file prototype.

## Notes carried between phases

- **From Phase 3:** every number that changes with the day is in `src/tuning.js`, and `npm run measure` shows what a change does. The automatic player steers worse than a person, so its results show direction only. A pizza in flight marks its house as taken, which is why an aiming ring goes out after a throw. The garage's ride pictures are still 2D (Phase 4).
- **From Phase 2:** the street kept the 2D game's sizes (8 m road), which is a third wider than the 3D test page, and Cam approved the width. On his iPhone the game averaged 60 frames a second with one-second lows of 46 to 49. Aiming rings promise slightly less than the rules allow, so a lit ring always delivers. The recorded test streets must be re-recorded (`npm run record`) whenever a rule changes on purpose, which Phase 3 did.
- **From the 3D test (branch `spike-3d`, page at `/payton-pizza/spike-3d/`):** one merged mesh per house and instanced props kept the scene under 100 draws. Rounded corners are costly, so keep corner detail low on small parts. Looking straight down hides front doors and the van's badge. On the test page, hand-offs were easy to land but front-door deliveries were not, and the view was too narrow to watch a pizza land.
- **For Phase 8:** on iPhone, audio resumes a moment after the first tap. Wait for the resume before scheduling the first sound.
