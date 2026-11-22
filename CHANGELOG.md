# Changelog

All notable changes to Payton Pizza are recorded here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versions: [Semantic Versioning](https://semver.org). Each phase of the build plan ships as a version; see [ROADMAP.md](ROADMAP.md).

## [Unreleased]

Planned for v0.2.0 (Phase 2): seeded streets, the Gun-Metal Black Bimmer, new customer types, a bonus round, a tuning pass, a tutorial and a settings screen.

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
