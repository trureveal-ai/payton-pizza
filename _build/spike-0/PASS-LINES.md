# Phase 0 spikes: pass/fail lines (written before any spike ran, 2026-11-22)

## Spike 1: phone (Cam's real phone, prototype artifact)
- S1-a PASS if drag-to-steer and tap-to-throw both work.
- S1-b PASS if sound plays after the first tap.
- S1-c PASS if play is smooth (no visible stutter).

## Spike 2: leaderboard service (Cloudflare Workers + D1)
- S2-a save: a valid POST /scores returns 201 and the row is stored.
- S2-b top ten: after 12 valid scores, GET /top returns exactly 10, highest first.
- S2-c refuse: an impossible score returns 422 and is not stored; bad initials return 422; an 11th submission from one device inside an hour returns 429.
- S2-d origin: a browser request from https://trureveal-ai.github.io is allowed by CORS; one from another site is not.
- S2-live: all of the above from a page hosted on GitHub Pages against a deployed Worker. Needs Cam's Cloudflare account.

## Spike 3: install on phone / offline
- S3-a the service worker registers and controls the page.
- S3-b with the network off, a reload still shows the page.
- S3-c Chrome reports no installability errors for the manifest.
- S3-phone: Cam installs it to his home screen and opens it in airplane mode. Needs GitHub Pages turned on.

## Spike 4: repeatable streets
- S4-a same seed + same recorded inputs + fixed time step, run twice in fresh browsers: identical final frame.
- S4-b a different seed gives a different final frame.
