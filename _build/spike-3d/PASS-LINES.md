# 3D spike: pass/fail lines (written before the test page was built, 2026-11-22)

Question: should Payton Pizza be drawn in 3D (Three.js, models built in code) instead of 2D canvas?

The test page is a throwaway. It has no scoring, lives or crashes. It shows a code-built red pizza van with a
giant light-up slice sign driving an endless street of houses, customers, traffic and props, with the camera
behind and above, plus a frame-rate readout.

## Decided by the numbers (Cam's iPhone, read off the on-screen readout)
- S5-a speed: after 30 seconds of driving at normal load, with shadows on, the readout shows an average of
  55 frames a second or more and a low of 45 or more. The page prints PASS or FAIL itself.
- S5-b headroom: with Stress at +150 extra moving objects, the average stays at 45 or more.
- S5-c fallback: if S5-a fails with shadows on but passes with shadows off, the result is "3D works with
  simple shadows", not a fail.

## Decided by Cam
- S5-d look: Cam says this is a look he wants for the game, knowing people will be blocky.
- S5-e controls: with the camera behind the van, Cam can steer by dragging and can land pizzas at doors by
  tapping a side. He picks the camera he prefers (Chase, High or Top-down).

## Checked in the workspace before Cam sees it
- S5-f the page loads with no errors in a desktop-size and a phone-size test browser, and the van, street,
  houses, customers and sign are all on screen.
- S5-g download size: the whole page is 250 KB or less when compressed (gzip), so installing to a phone
  and offline play stay quick.

## What a pass means
All of S5-a, S5-d and S5-e pass (S5-c counts for S5-a): go 3D, and the plan is rewritten around it before
Phase 2. Anything else: stay 2D and take the same style as far as flat drawing allows.

## Not tested here
Sound, scoring, saving, the leaderboard, other rides, Android phones, and how long a full 3D art pass takes.
