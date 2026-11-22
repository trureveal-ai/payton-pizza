# Roadmap

Payton Pizza is built in nine phases. Each phase ships as a version with a git tag, a GitHub Release, a CHANGELOG entry and a GitHub milestone, and the next phase starts only after its gate passes. The full plan is in the [build plan doc](https://claude.ai/artifact/QdqqfSduUsuQ2hvMBt4WAs).

| Version | Phase | Scope | Gate | Runs on | Status |
| --- | --- | --- | --- | --- | --- |
| — | 0 | Groundwork and spikes | Spikes pass, or the plan changes with Cam's OK | Nothing | Done 2026-11-22 |
| v0.1.0 | 1 | Repo and walking skeleton | CI passes, release published, beta plays like the prototype on phone and PC | Beta | Released 2026-11-22, awaiting Cam's check |
| v0.2.0 | 2 | Gameplay core: seeded streets, Bimmer, new customers, bonus round, tuning, tutorial, settings | Replays are deterministic; Cam approves the difficulty | Beta | Planned |
| v0.3.0 | 3 | Art and feel | Smooth on Cam's phone; Cam approves the look | Beta | Planned |
| v0.4.0 | 4 | Music and sound | Cam approves the sound on his phone | Beta | Planned |
| v0.5.0 | 5 | Personal bests and install on phone | Installed, played offline, old saves intact | Beta | Planned |
| v0.6.0 | 6 | Shared leaderboard | Two devices see each other's scores; fake scores refused | Beta | Planned |
| v0.7.0 | 7 | Invitation group leaderboards | A second person joins from a link and both scores show | Beta | Planned |
| v1.0.0 | 8 | First live release | Smoke test passes on phone and PC; Cam gives the go-ahead | Live | Planned |

## Decisions (2026-11-22)

- **Hosting:** public repo, GitHub Pages. Live at `/payton-pizza/`, beta at `/payton-pizza/beta/`.
- **Launch scope:** shared leaderboard, personal best board, invitation group leaderboards, install on phone, music and richer sound. No custom web address at launch.
- **Art:** polished code-drawn art, no image files.
- **The black car:** "Gun-Metal Black Bimmer", no badge or logo (arrives in v0.2.0).
- **Leaderboard service:** Cloudflare Workers with D1, chosen in Phase 0. The live proof of it runs at the start of Phase 6 (Cam's OK, 2026-11-22).
- **Names on boards:** three-letter initials. No accounts, emails, ads or tracking.
- **Pages deploy:** the `gh-pages` branch, written only by the deploy workflow.

## Notes carried between phases

- **For Phase 2:** the game uses `Math.random` and real frame times. Seeded streets need a seeded random source and a fixed time step. The five test streets are specified in the build-plan summary.
- **For Phase 4:** on iPhone, audio resumes a moment after the first tap. Wait for the resume before scheduling the first sound.
