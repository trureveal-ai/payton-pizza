// Tells a tap (throw a pizza) from a drag (steer). Kept free of the page so it can be tested.
// A thumb tap rolls a few pixels, so movement inside the dead zone is ignored: it neither
// steers nor stops the touch counting as a tap.
export const DEAD_PX = 16;   // real screen pixels
export const TAP_MS = 450;

export function touchStart(x, y, t) { return { sx: x, sy: y, lx: x, ly: y, t0: t, steering: false }; }

// Returns how far to steer for this movement, in pixels. Zero until the touch leaves the dead zone;
// after that, only movement from that point on counts, so the ride never jumps.
export function touchMove(st, x, y) {
  var out = { dx: 0, dy: 0 };
  if (st.steering) { out.dx = x - st.lx; out.dy = y - st.ly; }
  else if (Math.hypot(x - st.sx, y - st.sy) > DEAD_PX) st.steering = true;
  st.lx = x; st.ly = y;
  return out;
}
export function isTap(st, t) { return !st.steering && t - st.t0 <= TAP_MS; }
