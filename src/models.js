// 3D shapes for everything on the street, each built in code from boxes, cylinders and balls and
// merged into one mesh per object. Sizes are in metres (20 game units = 1 m).
// Phase 2 keeps these simple; their finished look comes in later phases.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const RED = '#e3202e', CREAM = '#fff1d0', DARK = '#2c3040', GLASS = '#3d6ea8';
export const CHEESE = '#ffc933', CRUST = '#d08a35', PEP = '#d7263d';

// ---------- helpers ----------
export function part(g, color, pos, rot, scl) {
  if (g.index) g = g.toNonIndexed();
  var n = g.attributes.position.count, arr = new Float32Array(n * 3), c = new THREE.Color(color);
  for (var i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  pos = pos || [0, 0, 0]; rot = rot || [0, 0, 0]; scl = scl || [1, 1, 1];
  g.applyMatrix4(new THREE.Matrix4().compose(
    new THREE.Vector3(pos[0], pos[1], pos[2]),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(rot[0], rot[1], rot[2])),
    new THREE.Vector3(scl[0], scl[1], scl[2])));
  return g;
}
// Rounded corners cost triangles, so small parts get one bevel step and only hero parts get more.
export function box(w, h, d, r, seg) {
  r = r == null ? 0.08 : r;
  return new RoundedBoxGeometry(w, h, d, seg || 1, Math.min(r, w / 2 - 0.004, h / 2 - 0.004, d / 2 - 0.004));
}
export function cyl(r, h, seg, r2) { return new THREE.CylinderGeometry(r2 == null ? r : r2, r, h, seg || 12); }
export function ball(r) { return new THREE.IcosahedronGeometry(r, 1); }
export function merge(parts) { return mergeGeometries(parts, false); }
var HALF = Math.PI / 2;

// ---------- pizza ----------
export function sliceGeo() {
  var sh = new THREE.Shape();
  sh.moveTo(-0.52, 0.45); sh.lineTo(0.52, 0.45); sh.lineTo(0, -0.62); sh.closePath();
  var ex = new THREE.ExtrudeGeometry(sh, { depth: 0.12, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 1 });
  var pep = function (x, y) { return part(cyl(0.12, 0.24, 10), PEP, [x, y, 0], [HALF, 0, 0]); };
  return merge([part(ex, CHEESE, [0, 0, -0.06]), part(box(1.22, 0.24, 0.3, 0.1), CRUST, [0, 0.53, 0]), pep(-0.2, 0.2), pep(0.2, 0.14), pep(0, -0.16)]);
}
export function pizzaBoxGeo() {
  return merge([part(box(0.62, 0.1, 0.62, 0.03), '#f1dbb0'), part(box(0.5, 0.03, 0.5, 0.01), PEP, [0, 0.055, 0]), part(cyl(0.14, 0.03, 10), CHEESE, [0, 0.062, 0])]);
}
export function pickupGeo() {
  var p = [];
  for (var i = 0; i < 3; i++) {
    p.push(part(box(0.9, 0.14, 0.9, 0.04), '#f1dbb0', [i * 0.06 - 0.06, 0.09 + i * 0.16, 0.06 - i * 0.06], [0, i * 0.25, 0]));
    p.push(part(box(0.9, 0.05, 0.3, 0.02), CRUST, [i * 0.06 - 0.06, 0.17 + i * 0.16, 0.06 - i * 0.06 - 0.3], [0, i * 0.25, 0]));
  }
  p.push(part(cyl(0.26, 0.04, 12), PEP, [0.06, 0.5, -0.06]));
  p.push(part(cyl(0.13, 0.05, 10), CHEESE, [0.06, 0.505, -0.06]));
  return merge(p);
}
export function splatGeo() {
  return merge([part(cyl(0.42, 0.02, 12), '#c5384a'), part(box(0.5, 0.04, 0.5, 0.02), '#e8b04a', [0, 0.02, 0], [0, 0.5, 0]), part(cyl(0.18, 0.05, 10), CHEESE, [0.08, 0.03, 0.05])]);
}

// ---------- houses ----------
// Built for the left side of the street: the front wall is at x = 0 and the house runs back along -x.
// The right side uses the same shape mirrored. `slot` is which of three places along the front has
// the door; the other two have windows. The roof has no overhang at the front, so a camera looking
// down can still see the door. +z is down the street (toward the camera), so the driveway end of a
// lot is +z and the garden end is -z.
export var SLOT_Z = [2.15, 0, -2.15];
export function bx(w, h, d) { return new THREE.BoxGeometry(w, h, d); }           // a plain box: 12 triangles, for small parts
export function blob(r) { return new THREE.IcosahedronGeometry(r, 0); }          // a rough ball: 20 triangles
function cone(r, h, seg) { return new THREE.ConeGeometry(r, h, seg || 8); }
var WHITE = '#ffffff', PANE = '#9ad8ff';
// the colour of window glass for the houses built next: sky blue by day, lit or dark in the evening
export function panes(color) { PANE = color || '#9ad8ff'; }

// what every house front has: door, porch, mat, walkway, mailbox, and a window in the other two slots
function frontParts(p, o, deck) {
  var zs = SLOT_Z[o.slot], i, k;
  p.push(part(box(0.16, 2.3, 1.56, 0.04), WHITE, [0.05, 1.15, zs]));
  p.push(part(box(0.2, 2.05, 1.24, 0.04), o.door, [0.09, 1.03, zs]));
  p.push(part(bx(0.04, 0.5, 0.7), '#cfeaff', [0.2, 1.62, zs]));
  p.push(part(blob(0.07), '#ffd23f', [0.2, 1.05, zs - 0.4]));
  p.push(part(blob(0.09), '#fff6c9', [0.14, 2.3, zs + 0.98]));
  if (!deck) p.push(part(box(1.05, 0.22, 2.1, 0.06), o.porch, [0.52, 0.11, zs]));
  else if (deck === 'city') p.push(part(bx(0.5, 0.14, 1.6), '#8d8f96', [0.3, 0.07, zs]));
  p.push(part(box(0.56, 0.05, 1.1, 0.02), o.mat, [0.6, 0.235, zs]));
  p.push(part(bx(0.68, 0.07, 0.7), deck === 'city' ? '#c9c7c0' : deck ? '#e9d7a3' : '#d8d2c0', [1.38, 0.035, zs]));
  p.push(part(bx(0.09, 0.8, 0.09), '#f4f6fa', [1.5, 0.4, zs + 1.4]));
  p.push(part(box(0.26, 0.24, 0.44, 0.08), o.cust ? '#2f6fd6' : '#8d939e', [1.5, 0.86, zs + 1.4]));
  for (i = 0; i < 3; i++) if (i !== o.slot) {
    var z = SLOT_Z[i];
    p.push(part(box(0.14, 1.4, 1.5, 0.04), WHITE, [0.04, 1.75, z]));
    p.push(part(box(0.18, 1.1, 1.2, 0.03), PANE, [0.07, 1.75, z]));
    p.push(part(bx(0.2, 1.1, 0.05), WHITE, [0.08, 1.75, z]));
    p.push(part(bx(0.08, 1.3, 0.3), o.roof2, [0.05, 1.75, z - 0.93])); p.push(part(bx(0.08, 1.3, 0.3), o.roof2, [0.05, 1.75, z + 0.93]));
    if (o.cust) {   // a window box in bloom: houses that ordered look lived in
      p.push(part(bx(0.34, 0.2, 1.4), '#8a5a35', [0.24, 0.92, z]));
      for (k = -1; k <= 1; k++) p.push(part(blob(0.15), k ? '#ff6fae' : '#ffd23f', [0.26, 1.1, z + k * 0.42]));
    }
  }
}
// The suburb. variant 0: a dormer on the roof; 1: two storeys; 2: a garage at the driveway end.
export function houseGeo(o) {
  var p = [], i, v = o.variant | 0, hh = v === 1 ? 4.3 : 3.0;
  p.push(part(box(4.1, hh, 6.5, 0.16), o.wall, [-2.05, hh / 2, 0]));
  p.push(part(bx(4.16, 0.28, 6.56), '#a9a59a', [-2.05, 0.14, 0]));
  var tri = new THREE.Shape();
  tri.moveTo(-4.25, 0); tri.lineTo(0.1, 0); tri.lineTo(-2.07, 1.55); tri.closePath();
  p.push(part(new THREE.ExtrudeGeometry(tri, { depth: 6.8, bevelEnabled: false }), o.roof, [0, hh - 0.02, -3.4]));
  p.push(part(box(0.3, 0.16, 6.95, 0.05), o.roof2, [-2.07, hh + 1.53, 0]));
  p.push(part(bx(0.16, 0.14, 6.84), WHITE, [0.06, hh + 0.03, 0]));
  p.push(part(box(0.55, 1.0, 0.55, 0.06), '#8a4a33', [-3.15, hh + 1.2, 1.9])); p.push(part(bx(0.66, 0.12, 0.66), '#5d3323', [-3.15, hh + 1.74, 1.9]));
  if (v === 0) {
    var dz = SLOT_Z[(o.slot + 1) % 3];
    p.push(part(box(1.1, 0.8, 1.2, 0.06), o.wall, [-0.85, hh + 0.62, dz]));
    p.push(part(bx(0.06, 0.5, 0.7), PANE, [-0.29, hh + 0.66, dz]));
    p.push(part(box(1.3, 0.14, 1.44, 0.04), o.roof2, [-0.85, hh + 1.08, dz]));
  } else if (v === 1) {
    p.push(part(bx(0.1, 0.1, 6.5), WHITE, [0.04, 2.72, 0]));
    for (i = 0; i < 3; i++) { p.push(part(bx(0.1, 1.0, 1.2), WHITE, [0.04, 3.42, SLOT_Z[i]])); p.push(part(bx(0.12, 0.8, 1.0), PANE, [0.06, 3.42, SLOT_Z[i]])); }
  } else {
    p.push(part(box(2.6, 2.3, 1.95, 0.08), o.wall, [-2.7, 1.15, 4.3]));
    p.push(part(box(2.8, 0.16, 2.15, 0.05), o.roof2, [-2.7, 2.38, 4.3]));
    p.push(part(bx(0.08, 1.8, 1.6), '#f4f6fa', [-1.38, 0.9, 4.3]));
    p.push(part(bx(0.09, 0.05, 1.6), '#c9ced6', [-1.37, 0.7, 4.3])); p.push(part(bx(0.09, 0.05, 1.6), '#c9ced6', [-1.37, 1.3, 4.3]));
  }
  frontParts(p, o, false);
  p.push(part(bx(5.5, 0.06, 1.5), '#b9b5a8', [-1.05, 0.03, 4.3]));
  return merge(p);
}
// The beach town: a flat roof under striped awning boards, a wooden deck along the whole front.
export function beachHouseGeo(o) {
  var p = [], i, zs = SLOT_Z[o.slot];
  p.push(part(box(4.1, 3.0, 6.5, 0.16), o.wall, [-2.05, 1.5, 0]));
  p.push(part(box(4.5, 0.2, 6.9, 0.06), WHITE, [-2.05, 3.08, 0]));
  for (i = 0; i < 5; i++) p.push(part(bx(0.84, 0.07, 6.7), i % 2 ? WHITE : o.roof, [-3.73 + i * 0.84, 3.21, 0]));
  p.push(part(box(0.9, 0.5, 0.9, 0.06), '#d9dde4', [-3.0, 3.5, -2.0])); p.push(part(cyl(0.3, 0.06, 8), '#aab2bd', [-3.0, 3.77, -2.0]));   // air conditioner
  p.push(part(bx(1.5, 0.2, 6.5), '#c9a36b', [0.75, 0.1, 0])); p.push(part(bx(1.5, 0.21, 0.05), '#a9844f', [0.75, 0.1, -1.1])); p.push(part(bx(1.5, 0.21, 0.05), '#a9844f', [0.75, 0.1, 1.1]));
  frontParts(p, o, true);
  if (o.cust) {   // boards by the door
    p.push(part(box(0.1, 1.9, 0.5, 0.05), '#3ec1d3', [0.16, 0.98, zs + 1.15], [0, 0, -0.1])); p.push(part(box(0.1, 1.7, 0.46, 0.05), '#ff7a59', [0.2, 0.9, zs - 1.12], [0, 0, -0.14]));
  }
  p.push(part(bx(5.5, 0.06, 1.5), '#e3d2a2', [-1.05, 0.03, 4.3]));
  return merge(p);
}
// Downtown: a flat-roofed block of two, three or four storeys with a parapet, a sign band over the
// ground floor, and something different on each roof.
export function cityHouseGeo(o) {
  var p = [], i, f, v = o.variant | 0, hh = [5.4, 6.8, 8.2][v];
  p.push(part(box(4.1, hh, 6.5, 0.1), o.wall, [-2.05, hh / 2, 0]));
  p.push(part(bx(4.3, 0.3, 6.7), o.roof2, [-2.05, hh + 0.15, 0])); p.push(part(bx(3.7, 0.06, 6.1), '#6b6f7a', [-2.05, hh + 0.31, 0]));
  p.push(part(bx(0.12, 0.42, 6.3), o.roof, [0.05, 2.78, 0]));
  for (f = 0; 3.7 + f * 1.4 < hh - 0.5; f++) for (i = 0; i < 3; i++) {
    p.push(part(bx(0.1, 1.0, 1.2), WHITE, [0.04, 3.7 + f * 1.4, SLOT_Z[i]])); p.push(part(bx(0.12, 0.8, 1.0), PANE, [0.06, 3.7 + f * 1.4, SLOT_Z[i]]));
  }
  p.push(part(box(0.9, 0.5, 0.9, 0.06), '#d9dde4', [-3.0, hh + 0.58, -2.2])); p.push(part(cyl(0.3, 0.06, 8), '#aab2bd', [-3.0, hh + 0.86, -2.2]));
  if (v === 2) {   // a water tank on legs
    p.push(part(cyl(0.7, 1.2, 10), '#8a5a35', [-1.6, hh + 1.5, 1.8])); p.push(part(cone(0.8, 0.5, 10), '#5d3323', [-1.6, hh + 2.35, 1.8]));
    for (i = 0; i < 4; i++) p.push(part(bx(0.08, 0.6, 0.08), '#4a4f5c', [-1.6 + (i % 2 ? 0.45 : -0.45), hh + 0.6, 1.8 + (i < 2 ? 0.45 : -0.45)]));
  } else if (v === 1) p.push(part(bx(1.3, 0.2, 1.8), PANE, [-1.7, hh + 0.42, 1.6]));   // a skylight
  else { p.push(part(bx(1.6, 0.3, 0.5), '#8a5a35', [-1.6, hh + 0.46, 2.2])); p.push(part(blob(0.35), '#35b84e', [-2.0, hh + 0.8, 2.2])); p.push(part(blob(0.3), '#4fd063', [-1.2, hh + 0.78, 2.2])); }   // a roof garden
  frontParts(p, o, 'city');
  return merge(p);
}
// What stands in a yard. Kept apart from the house so the few yard layouts can be shared by every house.
// tree: 0 bushes, 1 round tree, 2 pine, 3 blossom tree (beach: 0 beach grass, otherwise a palm).
// prop: 1 flamingos, 2 paddling pool, 3 bird bath (beach: 1 umbrella and towel, 2 sandcastle, 3 boards in the sand).
export function yardGeo(o) {
  var p = [], j;
  if (o.hood === 'city') {   // tree: 1 a street tree in a planter, 0 a bench. prop: 1 a newspaper box, 2 a bike rack, 3 a cafe table
    if (o.tree) { p.push(part(box(1.0, 0.4, 1.0, 0.06), '#8d8f96', [0.9, 0.2, -4.4])); p.push(part(cyl(0.12, 1.6, 6), '#7d5a36', [0.9, 1.1, -4.4])); p.push(part(ball(0.85), '#3fae5a', [0.9, 2.4, -4.4])); }
    else { p.push(part(bx(0.4, 0.08, 1.5), '#8a5a35', [0.6, 0.45, -4.4])); p.push(part(bx(0.08, 0.5, 1.5), '#8a5a35', [0.42, 0.7, -4.4])); p.push(part(bx(0.3, 0.4, 0.08), '#4a4f5c', [0.6, 0.2, -5.0])); p.push(part(bx(0.3, 0.4, 0.08), '#4a4f5c', [0.6, 0.2, -3.8])); }
    if (o.prop === 1) { p.push(part(box(0.45, 0.9, 0.45, 0.05), '#2f6fd6', [1.1, 0.45, 3.9])); p.push(part(bx(0.3, 0.25, 0.04), '#ffffff', [1.33, 0.6, 3.9])); }
    else if (o.prop === 2) for (j = 0; j < 3; j++) { p.push(part(bx(0.05, 0.6, 0.05), '#aab2bd', [1.1, 0.3, 3.5 + j * 0.4])); p.push(part(bx(0.05, 0.05, 0.4), '#aab2bd', [1.1, 0.6, 3.5 + j * 0.4])); }
    else if (o.prop === 3) { p.push(part(cyl(0.4, 0.06, 10), WHITE, [0.9, 0.75, 4.0])); p.push(part(cyl(0.05, 0.75, 6), '#4a4f5c', [0.9, 0.38, 4.0])); p.push(part(cyl(0.16, 0.45, 8), '#d7263d', [0.9, 0.22, 4.6])); p.push(part(cyl(0.16, 0.45, 8), '#d7263d', [0.9, 0.22, 3.4])); }
  } else if (o.hood === 'snow') {   // tree: a pine with snow on it, or a snowdrift. prop: 1 a snowman, 2 a sled, 3 a woodpile
    if (o.tree) {
      p.push(part(cyl(0.16, 1.0, 6), '#7d5a36', [-2.3, 0.5, -4.35]));
      p.push(part(cone(1.15, 1.5, 8), '#2c8f52', [-2.3, 1.6, -4.35])); p.push(part(cone(0.9, 1.3, 8), '#34a05c', [-2.3, 2.5, -4.35])); p.push(part(cone(0.62, 1.1, 8), '#f4f8ff', [-2.3, 3.3, -4.35]));
      p.push(part(cone(0.95, 0.3, 8), '#f4f8ff', [-2.3, 2.05, -4.35]));
    } else { p.push(part(blob(0.8), '#ffffff', [-1.3, 0.2, -4.4], null, [1.4, 0.6, 1])); p.push(part(blob(0.5), '#e6eef8', [-0.3, 0.15, -4.6], null, [1.2, 0.6, 1])); }
    if (o.prop === 1) { p.push(part(ball(0.42), WHITE, [0.9, 0.4, -4.3])); p.push(part(ball(0.3), WHITE, [0.9, 0.98, -4.3])); p.push(part(cone(0.06, 0.26, 5), '#ff7a1a', [1.12, 1.0, -4.3], [0, 0, -HALF])); p.push(part(cyl(0.2, 0.2, 8), '#22242c', [0.9, 1.32, -4.3])); }
    else if (o.prop === 2) { p.push(part(bx(0.5, 0.08, 1.1), '#d7263d', [0.9, 0.2, -4.3])); p.push(part(bx(0.06, 0.12, 1.2), '#8a5a35', [0.7, 0.08, -4.3])); p.push(part(bx(0.06, 0.12, 1.2), '#8a5a35', [1.1, 0.08, -4.3])); }
    else if (o.prop === 3) for (j = 0; j < 5; j++) p.push(part(cyl(0.14, 1.0, 6), j % 2 ? '#8a5a35' : '#a67c4d', [0.9, 0.14 + (j > 2 ? 0.26 : 0), -4.6 + (j > 2 ? (j - 3) * 0.3 + 0.15 : j * 0.3)], [0, 0, HALF]));
  } else if (o.hood === 'beach') {
    if (o.tree) {
      for (j = 0; j < 4; j++) p.push(part(cyl(0.2 - j * 0.02, 0.85, 6), j % 2 ? '#b98f5e' : '#a67c4d', [-2.3 + j * 0.14, 0.42 + j * 0.8, -4.35]));
      for (j = 0; j < 6; j++) p.push(part(bx(1.7, 0.06, 0.46), j % 2 ? '#2fae5a' : '#3cc46b', [-1.75 + Math.cos(j * 1.047) * 0.8, 3.45, -4.35 + Math.sin(j * 1.047) * 0.8], [0, -j * 1.047, -0.38]));
      p.push(part(blob(0.16), '#6b4a2b', [-1.65, 3.4, -4.25])); p.push(part(blob(0.16), '#6b4a2b', [-1.85, 3.38, -4.5]));
    } else for (j = 0; j < 4; j++) p.push(part(cone(0.16, 0.7, 5), '#9bbf5a', [-1.4 + j * 0.42, 0.35, -4.4 + (j % 2) * 0.3]));
    if (o.prop === 1) {
      p.push(part(cyl(0.04, 1.7, 5), WHITE, [0.85, 0.85, -4.3])); p.push(part(cone(0.95, 0.42, 8), '#ff5a5f', [0.85, 1.75, -4.3])); p.push(part(cone(0.5, 0.25, 8), WHITE, [0.85, 1.9, -4.3]));
      p.push(part(bx(0.7, 0.04, 1.3), '#3ec1d3', [0.8, 0.03, -3.75]));
    } else if (o.prop === 2) {
      p.push(part(cyl(0.45, 0.3, 8), '#e6cf8f', [0.9, 0.15, -4.3])); p.push(part(cyl(0.26, 0.3, 8), '#e6cf8f', [0.9, 0.45, -4.3])); p.push(part(cone(0.16, 0.3, 6), '#ff5a5f', [0.9, 0.75, -4.3]));
    } else if (o.prop === 3) {
      p.push(part(box(0.5, 1.8, 0.1, 0.05), '#ffd23f', [0.7, 0.85, -4.3], [0.12, 0.3, 0])); p.push(part(box(0.5, 1.6, 0.1, 0.05), '#ff7a59', [1.15, 0.75, -4.1], [-0.1, -0.3, 0]));
    }
  } else {
    if (o.tree === 1) {
      p.push(part(cyl(0.2, 2.0, 7), '#9a6b3f', [-2.3, 1.0, -4.35])); p.push(part(ball(1.15), '#35b84e', [-2.3, 2.8, -4.35])); p.push(part(blob(0.8), '#4fd063', [-1.85, 3.55, -4.1]));
    } else if (o.tree === 2) {
      p.push(part(cyl(0.16, 1.0, 6), '#7d5a36', [-2.3, 0.5, -4.35]));
      p.push(part(cone(1.15, 1.5, 8), '#2f9e55', [-2.3, 1.6, -4.35])); p.push(part(cone(0.9, 1.3, 8), '#37b061', [-2.3, 2.5, -4.35])); p.push(part(cone(0.62, 1.1, 8), '#43c06e', [-2.3, 3.3, -4.35]));
    } else if (o.tree === 3) {
      p.push(part(cyl(0.18, 1.8, 7), '#8a5a3c', [-2.3, 0.9, -4.35])); p.push(part(ball(1.05), '#ff9ec4', [-2.3, 2.6, -4.35])); p.push(part(blob(0.7), '#ffc4dc', [-2.7, 3.2, -4.6]));
    } else {
      p.push(part(ball(0.62), '#35b84e', [-1.2, 0.45, -4.4], null, [1.3, 0.85, 1])); p.push(part(blob(0.42), o.cust ? '#ff6fae' : '#7fae6a', [-0.2, 0.32, -4.5]));
    }
    if (o.fence) {
      p.push(part(bx(4.6, 0.07, 0.06), WHITE, [-1.6, 0.5, -5.1])); p.push(part(bx(4.6, 0.07, 0.06), WHITE, [-1.6, 0.26, -5.1]));
      for (j = 0; j < 5; j++) p.push(part(bx(0.1, 0.7, 0.1), WHITE, [-3.8 + j * 1.1, 0.35, -5.1]));
    }
    if (o.prop === 1) for (j = 0; j < 2; j++) {
      p.push(part(bx(0.03, 0.5, 0.03), '#ff8fb1', [0.8 + j * 0.4, 0.25, -4.3 + j * 0.3])); p.push(part(blob(0.17), '#ff6fa3', [0.8 + j * 0.4, 0.58, -4.3 + j * 0.3]));
      p.push(part(bx(0.05, 0.3, 0.05), '#ff6fa3', [0.92 + j * 0.4, 0.78, -4.3 + j * 0.3]));
    } else if (o.prop === 2) {
      p.push(part(cyl(0.72, 0.2, 12), '#ff7a59', [0.9, 0.1, -4.3])); p.push(part(cyl(0.6, 0.21, 12), '#4db8ff', [0.9, 0.1, -4.3]));
    } else if (o.prop === 3) {
      p.push(part(cyl(0.1, 0.6, 6), '#b9bcc4', [0.9, 0.3, -4.3])); p.push(part(cyl(0.2, 0.1, 10, 0.42), '#c9ccd4', [0.9, 0.65, -4.3])); p.push(part(cyl(0.34, 0.04, 10), '#7fd4ff', [0.9, 0.7, -4.3]));
    }
  }
  if (o.lamp) {
    p.push(part(cyl(0.07, 3.4, 6), '#4a4f5c', [1.6, 1.7, -5.0])); p.push(part(bx(0.7, 0.07, 0.07), '#4a4f5c', [1.9, 3.36, -5.0])); p.push(part(box(0.36, 0.13, 0.22, 0.04), '#fff6c9', [2.2, 3.3, -5.0]));
  }
  if (!p.length) p.push(part(bx(0.01, 0.01, 0.01), '#5fd14e', [0, -1, 0]));
  return merge(p);
}
export function brokenWindowGeo() {
  return merge([part(box(0.2, 1.1, 1.2, 0.03), '#15161c'), part(box(0.22, 0.06, 1.0, 0.01), '#cfe9ff', [0, 0.1, 0], [0.5, 0, 0]),
    part(box(0.22, 0.06, 0.7, 0.01), '#cfe9ff', [0, -0.15, 0.1], [-0.7, 0, 0])]);
}

// ---------- people (facing +x) ----------
export function personGeo(shirt, skin, hair, pants) {
  return merge([
    part(box(0.3, 0.62, 0.5, 0.08), pants || '#34425e', [0, 0.31, 0]),
    part(box(0.38, 0.62, 0.64, 0.12), shirt, [0, 0.92, 0]),
    part(box(0.5, 0.5, 0.52, 0.16, 2), skin, [0, 1.5, 0]),
    part(box(0.52, 0.22, 0.56, 0.1), hair, [-0.03, 1.75, 0]),
    part(box(0.03, 0.1, 0.08, 0.01), '#1c1c24', [0.255, 1.52, 0.12]),
    part(box(0.03, 0.1, 0.08, 0.01), '#1c1c24', [0.255, 1.52, -0.12])
  ]);
}
// both arms, reaching forward from the shoulders; the mesh turns about its origin to wave
export function armsGeo(skin) {
  return merge([part(box(0.56, 0.16, 0.16, 0.06), skin, [0.36, 0, 0.4]), part(box(0.56, 0.16, 0.16, 0.06), skin, [0.36, 0, -0.4])]);
}
// one arm reaching out along +x from the shoulder (flip its mesh to throw the other way)
export function oneArmGeo(skin) { return part(box(0.66, 0.17, 0.17, 0.06), skin, [0.5, 0, 0]); }

// ---------- traffic and hazards ----------
export function carGeo(color, glass) {
  var p = [part(box(1.75, 0.62, 3.5, 0.24, 2), color, [0, 0.62, 0]), part(box(1.5, 0.6, 1.8, 0.24, 2), glass || '#bfe6ff', [0, 1.14, 0.15]),
    part(box(1.56, 0.12, 1.86, 0.05), color, [0, 1.46, 0.15]),
    part(box(1.8, 0.2, 0.26, 0.07), DARK, [0, 0.42, -1.72]), part(box(1.8, 0.2, 0.26, 0.07), DARK, [0, 0.42, 1.72]),
    part(box(0.34, 0.18, 0.08, 0.03), '#fff6c9', [-0.55, 0.72, -1.76]), part(box(0.34, 0.18, 0.08, 0.03), '#fff6c9', [0.55, 0.72, -1.76]),
    part(box(0.3, 0.16, 0.08, 0.03), '#ff3b30', [-0.58, 0.72, 1.76]), part(box(0.3, 0.16, 0.08, 0.03), '#ff3b30', [0.58, 0.72, 1.76])];
  for (var a = -1; a <= 1; a += 2) for (var b = -1; b <= 1; b += 2) p.push(part(cyl(0.36, 0.3, 12), '#22242c', [a * 0.82, 0.36, b * 1.08], [0, 0, HALF]));
  return merge(p);
}
export function canGeo() { return merge([part(cyl(0.3, 0.8, 10, 0.36), '#7c8794', [0, 0.56, 0]), part(cyl(0.4, 0.12, 10), '#5a6169', [0, 1.0, 0])]); }
export function hydrantGeo() {
  return merge([part(cyl(0.2, 0.62, 9), '#e63946', [0, 0.47, 0]), part(ball(0.21), '#e63946', [0, 0.8, 0]), part(cyl(0.09, 0.56, 7), '#ffd23f', [0, 0.55, 0], [0, 0, HALF])]);
}
export function coneGeo() {
  return merge([part(new THREE.ConeGeometry(0.26, 0.72, 10), '#ff7a1a', [0, 0.4, 0]), part(box(0.62, 0.07, 0.62, 0.02), '#ff7a1a', [0, 0.035, 0]),
    part(cyl(0.165, 0.13, 10, 0.125), '#ffffff', [0, 0.42, 0])]);
}
export function potholeGeo() {
  return merge([part(cyl(0.62, 0.02, 14), '#24252b', [0, 0.01, 0], null, [1, 1, 0.6]), part(cyl(0.42, 0.02, 12), '#101116', [0.03, 0.02, 0.02], null, [1, 1, 0.55])]);
}
// a dog, nose toward -z (up the street); it turns to face where it runs
export function dogGeo(col) {
  return merge([part(box(0.42, 0.42, 0.9, 0.14), col, [0, 0.5, 0]), part(box(0.4, 0.4, 0.42, 0.13), col, [0, 0.78, -0.52]),
    part(box(0.2, 0.18, 0.2, 0.06), '#2b1a0e', [0, 0.7, -0.78]), part(box(0.1, 0.22, 0.12, 0.03), '#2b1a0e', [-0.17, 1.02, -0.5]),
    part(box(0.1, 0.22, 0.12, 0.03), '#2b1a0e', [0.17, 1.02, -0.5]), part(box(0.1, 0.1, 0.4, 0.03), col, [0, 0.72, 0.55], [0.6, 0, 0]),
    part(box(0.12, 0.3, 0.12, 0.03), col, [-0.14, 0.15, -0.3]), part(box(0.12, 0.3, 0.12, 0.03), col, [0.14, 0.15, -0.3]),
    part(box(0.12, 0.3, 0.12, 0.03), col, [-0.14, 0.15, 0.3]), part(box(0.12, 0.3, 0.12, 0.03), col, [0.14, 0.15, 0.3])]);
}
export function skateboardGeo() {
  var p = [part(box(0.36, 0.06, 1.1, 0.03), '#22252e', [0, 0.14, 0])];
  for (var a = -1; a <= 1; a += 2) for (var b = -1; b <= 1; b += 2) p.push(part(cyl(0.07, 0.08, 8), '#ffd23f', [a * 0.14, 0.07, b * 0.38], [0, 0, HALF]));
  return merge(p);
}

// ---------- new in v0.3.0: extra life, puddle, ball, roadwork barrier ----------
export function heartGeo() {
  var sh = new THREE.Shape();
  sh.moveTo(0, -0.42);
  sh.bezierCurveTo(-0.7, 0.05, -0.5, 0.55, 0, 0.22);
  sh.bezierCurveTo(0.5, 0.55, 0.7, 0.05, 0, -0.42);
  var g = new THREE.ExtrudeGeometry(sh, { depth: 0.2, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 1, curveSegments: 8 });
  return merge([part(g, '#ff3b4e', [0, 0, -0.1]), part(ball(0.09), '#ffd0d6', [-0.18, 0.2, 0.17])]);
}
export function puddleGeo() {
  return merge([part(cyl(0.78, 0.02, 16), '#3f9be0', [0, 0.012, 0], null, [1, 1, 0.6]), part(cyl(0.45, 0.02, 12), '#8fd3ff', [-0.12, 0.022, -0.05], null, [1, 1, 0.5])]);
}
export function ballGeo(col) {
  return merge([part(ball(0.34), col, [0, 0.34, 0]), part(cyl(0.345, 0.1, 14), '#ffffff', [0, 0.34, 0])]);
}
// a striped board across one lane (3.2 m wide)
export function barrierGeo() {
  var p = [part(box(0.12, 1.0, 0.5, 0.03), '#f4f6fa', [-1.45, 0.5, 0]), part(box(0.12, 1.0, 0.5, 0.03), '#f4f6fa', [1.45, 0.5, 0]),
    part(box(0.3, 0.08, 0.7, 0.02), '#8a92a3', [-1.45, 0.04, 0]), part(box(0.3, 0.08, 0.7, 0.02), '#8a92a3', [1.45, 0.04, 0]),
    part(ball(0.12), '#ffb000', [-1.45, 1.1, 0]), part(ball(0.12), '#ffb000', [1.45, 1.1, 0])];
  for (var i = 0; i < 8; i++) {
    p.push(part(box(0.4, 0.3, 0.1, 0.02), i % 2 ? '#ffffff' : '#ff7a1a', [-1.4 + i * 0.4, 0.82, 0]));
    p.push(part(box(0.4, 0.22, 0.1, 0.02), i % 2 ? '#ff7a1a' : '#ffffff', [-1.4 + i * 0.4, 0.42, 0]));
  }
  return merge(p);
}

// ---------- beach town ----------
export function sandGeo() {
  return merge([part(cyl(1.4, 0.04, 14), '#f1dea6', [0, 0.02, 0], null, [1, 1, 0.8]), part(cyl(0.9, 0.05, 10), '#e6cf8f', [0.3, 0.03, 0.2], null, [1, 1, 0.6]),
    part(bx(0.9, 0.05, 0.06), '#d9bf7a', [-0.4, 0.045, -0.35]), part(bx(0.7, 0.05, 0.06), '#d9bf7a', [0.2, 0.05, 0.55]), part(bx(0.6, 0.05, 0.06), '#d9bf7a', [-0.5, 0.045, 0.3])]);
}
// a surfer walking along +x with a board under one arm
export function surferGeo(shirt, board) {
  return merge([personGeo(shirt, '#d9a577', '#e6c35c', '#2f8fbf'), part(box(2.3, 0.1, 0.52, 0.05), board, [0.05, 1.0, 0.45]), part(bx(2.0, 0.11, 0.08), WHITE, [0.05, 1.0, 0.45]),
    part(box(0.5, 0.16, 0.16, 0.06), '#d9a577', [0.1, 1.08, 0.3])]);
}
// a golf cart, nose toward -z, with a striped canopy
export function cartGeo(col) {
  var p = [part(box(1.2, 0.45, 2.0, 0.12), '#f7f3e8', [0, 0.55, 0]), part(box(1.0, 0.5, 0.5, 0.08), col, [0, 0.95, 0.35]), part(box(1.1, 0.35, 0.3, 0.06), '#f7f3e8', [0, 0.9, -0.75]),
    part(box(1.3, 0.1, 2.0, 0.04), col, [0, 1.9, 0]), part(bx(1.32, 0.11, 0.42), WHITE, [0, 1.9, 0.5]), part(bx(1.32, 0.11, 0.42), WHITE, [0, 1.9, -0.5]),
    part(cyl(0.16, 0.8, 6), '#3d7fd9', [0.3, 1.0, 0.95]), part(blob(0.12), WHITE, [0.3, 1.45, 0.95])];
  for (var a = -1; a <= 1; a += 2) for (var b = -1; b <= 1; b += 2) { p.push(part(bx(0.06, 1.1, 0.06), '#d9dde4', [a * 0.56, 1.32, b * 0.86])); p.push(part(cyl(0.24, 0.2, 10), '#22242c', [a * 0.62, 0.24, b * 0.7], [0, 0, HALF])); }
  return merge(p);
}
// ---------- downtown ----------
export function taxiGeo() {
  return merge([carGeo('#ffcc1f'), part(box(0.6, 0.2, 0.26, 0.05), WHITE, [0, 1.62, 0.15]), part(bx(1.78, 0.14, 1.2), '#1c1c24', [0, 0.66, 0.1])]);
}
// a city bus, nose toward -z
export function busGeo(col) {
  var p = [part(box(2.0, 1.9, 6.0, 0.2, 2), col, [0, 1.3, 0]), part(bx(2.04, 0.62, 5.2), '#bfe6ff', [0, 1.75, 0.1]), part(box(1.9, 0.12, 5.7, 0.05), WHITE, [0, 2.28, 0]),
    part(bx(1.7, 0.8, 0.06), '#1c1c24', [0, 1.6, -3.0]), part(bx(1.2, 0.2, 0.07), '#ffd23f', [0, 2.08, -3.0]),
    part(bx(0.4, 0.2, 0.08), '#fff6c9', [-0.65, 0.75, -3.0]), part(bx(0.4, 0.2, 0.08), '#fff6c9', [0.65, 0.75, -3.0]),
    part(bx(0.5, 0.26, 0.08), '#ff3b30', [-0.6, 0.9, 3.0]), part(bx(0.5, 0.26, 0.08), '#ff3b30', [0.6, 0.9, 3.0])];
  for (var a = -1; a <= 1; a += 2) for (var b = -1; b <= 1; b += 2) p.push(part(cyl(0.46, 0.34, 12), '#22242c', [a * 0.9, 0.46, b * 1.9], [0, 0, HALF]));
  return merge(p);
}
export function manholeGeo() {
  return merge([part(cyl(0.7, 0.02, 14), '#ff7a1a', [0, 0.01, 0]), part(cyl(0.55, 0.03, 14), '#0c0d10', [0, 0.02, 0]), part(cyl(0.5, 0.07, 12), '#6b6f7a', [0.75, 0.035, 0.4]),
    part(bx(0.6, 0.02, 0.06), '#4a4f5c', [0.75, 0.075, 0.4]), part(bx(0.06, 0.02, 0.6), '#4a4f5c', [0.75, 0.075, 0.4])]);
}
// ---------- snowy town ----------
export function iceGeo() {
  return merge([part(cyl(1.5, 0.03, 14), '#cfeaff', [0, 0.015, 0], null, [1, 1, 0.83]), part(cyl(1.0, 0.035, 12), '#e9f7ff', [-0.2, 0.02, 0.1], null, [1, 1, 0.7]),
    part(bx(1.1, 0.04, 0.05), WHITE, [0.2, 0.04, -0.4], [0, 0.5, 0]), part(bx(0.8, 0.04, 0.05), WHITE, [-0.4, 0.04, 0.4], [0, 0.4, 0])]);
}
// a kid in a bobble hat, facing +x, with an arm back to throw
export function kidGeo(coat) {
  return merge([personGeo(coat, '#f2c9a0', '#3b2a1a', '#3a5a8c'), part(box(0.56, 0.24, 0.6, 0.1), '#d7263d', [0, 1.8, 0]), part(blob(0.14), WHITE, [0, 2.02, 0]),
    part(box(0.16, 0.5, 0.16, 0.06), coat, [0.05, 1.3, 0.42], [0, 0, 0.6]), part(blob(0.16), WHITE, [-0.12, 1.62, 0.42])]);
}
export function snowballGeo() { return part(ball(0.24), WHITE, [0, 0, 0]); }
// a snowplow, nose toward -z: an orange truck with a wide yellow blade and a beacon
export function plowGeo() {
  return merge([truckGeo('#ff8a1e'), part(box(2.9, 1.0, 0.3, 0.08), '#ffd23f', [0, 0.55, -2.25], [0.2, 0, 0]), part(bx(0.3, 0.3, 0.6), '#4a4f5c', [-0.6, 0.6, -1.95]), part(bx(0.3, 0.3, 0.6), '#4a4f5c', [0.6, 0.6, -1.95]),
    part(cyl(0.14, 0.2, 8), '#ffb000', [0, 1.78, -0.55]), part(blob(0.9), WHITE, [0, 0.4, -2.75], null, [1.5, 0.5, 0.5])]);
}

// a pickup truck, for variety in traffic
export function truckGeo(color) {
  var p = [part(box(1.8, 0.62, 3.7, 0.2, 2), color, [0, 0.66, 0]), part(box(1.56, 0.66, 1.4, 0.2, 2), '#bfe6ff', [0, 1.22, -0.55]), part(box(1.62, 0.12, 1.46, 0.05), color, [0, 1.58, -0.55]),
    part(bx(1.5, 0.3, 1.5), DARK, [0, 1.0, 0.95]), part(box(1.84, 0.2, 0.26, 0.07), DARK, [0, 0.44, -1.82]), part(box(1.84, 0.2, 0.26, 0.07), DARK, [0, 0.44, 1.82]),
    part(bx(0.34, 0.18, 0.08), '#fff6c9', [-0.56, 0.76, -1.86]), part(bx(0.34, 0.18, 0.08), '#fff6c9', [0.56, 0.76, -1.86]),
    part(bx(0.3, 0.16, 0.08), '#ff3b30', [-0.6, 0.76, 1.86]), part(bx(0.3, 0.16, 0.08), '#ff3b30', [0.6, 0.76, 1.86])];
  for (var a = -1; a <= 1; a += 2) for (var b = -1; b <= 1; b += 2) p.push(part(cyl(0.4, 0.3, 12), '#22242c', [a * 0.84, 0.4, b * 1.15], [0, 0, HALF]));
  return merge(p);
}

// ---------- Payton and the rides (noses toward -z, which is up the street) ----------
// Payton faces -z here, so his own shape is turned a quarter turn from the customers'.
export function paytonGeo() {
  var g = merge([
    part(box(0.3, 0.6, 0.5, 0.08), '#2b3350', [0, 0.3, 0]),
    part(box(0.4, 0.62, 0.66, 0.12), '#d7263d', [0, 0.92, 0]),
    part(box(0.5, 0.5, 0.52, 0.16, 2), '#f2c9a0', [0, 1.5, 0]),
    part(box(0.56, 0.2, 0.58, 0.09), '#b3001b', [0, 1.76, 0]),
    part(box(0.3, 0.07, 0.5, 0.03), '#7d0013', [0.36, 1.68, 0]),
    part(box(0.03, 0.1, 0.08, 0.01), '#1c1c24', [0.255, 1.5, 0.12]),
    part(box(0.03, 0.1, 0.08, 0.01), '#1c1c24', [0.255, 1.5, -0.12])
  ]);
  g.rotateY(HALF);
  return g;
}
export function bagGeo() {
  return merge([part(box(0.62, 0.5, 0.5, 0.08), '#c1121f'), part(box(0.34, 0.3, 0.04, 0.02), CHEESE, [0, 0.02, 0.26]), part(box(0.64, 0.08, 0.52, 0.03), '#7d0013', [0, 0.24, 0])]);
}
export function hoverGeo() {
  return merge([
    part(box(1.3, 0.14, 0.46, 0.06), '#22252e', [0, 0.3, 0]),
    part(cyl(0.3, 0.26, 12), '#111318', [-0.72, 0.3, 0], [0, 0, HALF]), part(cyl(0.3, 0.26, 12), '#111318', [0.72, 0.3, 0], [0, 0, HALF]),
    part(cyl(0.14, 0.28, 10), '#cfd5e0', [-0.72, 0.3, 0], [0, 0, HALF]), part(cyl(0.14, 0.28, 10), '#cfd5e0', [0.72, 0.3, 0], [0, 0, HALF]),
    part(box(0.42, 0.05, 0.1, 0.02), '#4de1ff', [-0.3, 0.26, 0.24]), part(box(0.42, 0.05, 0.1, 0.02), '#4de1ff', [0.3, 0.26, 0.24]),
    part(box(0.42, 0.05, 0.1, 0.02), '#4de1ff', [-0.3, 0.26, -0.24]), part(box(0.42, 0.05, 0.1, 0.02), '#4de1ff', [0.3, 0.26, -0.24]),
    // foot pads, fenders, a ring of light on each wheel, the hinge in the middle
    part(bx(0.44, 0.03, 0.36), '#4a505c', [-0.3, 0.385, 0]), part(bx(0.44, 0.03, 0.36), '#4a505c', [0.3, 0.385, 0]),
    part(box(0.34, 0.1, 0.5, 0.05), RED, [-0.72, 0.64, 0]), part(box(0.34, 0.1, 0.5, 0.05), RED, [0.72, 0.64, 0]),
    part(cyl(0.33, 0.04, 14), '#4de1ff', [-0.87, 0.3, 0], [0, 0, HALF]), part(cyl(0.33, 0.04, 14), '#4de1ff', [0.87, 0.3, 0], [0, 0, HALF]),
    part(cyl(0.2, 0.05, 10), '#111318', [-0.88, 0.3, 0], [0, 0, HALF]), part(cyl(0.2, 0.05, 10), '#111318', [0.88, 0.3, 0], [0, 0, HALF]),
    part(cyl(0.1, 0.5, 8), '#59616d', [0, 0.3, 0], [HALF, 0, 0])
  ]);
}
export function bikeGeo() {
  return merge([
    part(cyl(0.36, 0.2, 14), '#111318', [0, 0.36, -0.72], [0, 0, HALF]), part(cyl(0.38, 0.24, 14), '#111318', [0, 0.38, 0.7], [0, 0, HALF]),
    part(cyl(0.15, 0.22, 10), '#cfd5e0', [0, 0.36, -0.72], [0, 0, HALF]), part(cyl(0.15, 0.26, 10), '#cfd5e0', [0, 0.38, 0.7], [0, 0, HALF]),
    part(box(0.3, 0.42, 1.3, 0.12), '#ff7b00', [0, 0.72, 0]), part(box(0.28, 0.16, 0.56, 0.06), '#1c1f27', [0, 0.98, 0.26]),
    part(box(0.22, 0.2, 0.5, 0.06), '#ffffff', [0, 0.86, -0.62], [0.4, 0, 0]), part(box(0.1, 0.5, 0.1, 0.03), '#3a3f4a', [0, 0.82, -0.62], [0.35, 0, 0]),
    part(box(0.9, 0.07, 0.08, 0.03), '#3a3f4a', [0, 1.12, -0.5]), part(box(0.12, 0.1, 0.12, 0.03), '#111318', [-0.46, 1.12, -0.5]), part(box(0.12, 0.1, 0.12, 0.03), '#111318', [0.46, 1.12, -0.5]),
    part(box(0.2, 0.12, 0.5, 0.05), '#ff7b00', [0, 0.84, 0.8], [-0.3, 0, 0]),
    // front fender, number plate, engine, exhaust, swingarm
    part(box(0.2, 0.06, 0.62, 0.03), '#ff7b00', [0, 0.8, -0.8], [0.25, 0, 0]),
    part(bx(0.36, 0.3, 0.04), '#ffffff', [0, 1.0, -0.76]), part(bx(0.14, 0.18, 0.05), '#111318', [0, 1.0, -0.765]),
    part(box(0.34, 0.3, 0.42, 0.05), '#59616d', [0, 0.5, 0.05]),
    part(cyl(0.07, 0.9, 8), '#cfd5e0', [0.2, 0.56, 0.45], [HALF, 0, 0]), part(cyl(0.1, 0.24, 8), '#3a3f4a', [0.2, 0.58, 0.98], [HALF, 0, 0]),
    part(bx(0.07, 0.08, 0.72), '#3a3f4a', [-0.15, 0.42, 0.42]), part(bx(0.07, 0.08, 0.72), '#3a3f4a', [0.15, 0.42, 0.42])
  ]);
}
// The Gun-Metal Black Bimmer: a low dark sedan, no badge or logo anywhere.
export function bimmerGeo() {
  var p = [
    part(box(1.4, 0.46, 2.7, 0.2, 2), '#2f343c', [0, 0.5, 0]),
    part(box(1.36, 0.1, 2.5, 0.04), '#4a515c', [0, 0.74, 0]),
    part(box(1.16, 0.4, 1.25, 0.2, 2), '#14161b', [0, 0.92, 0.18]),
    part(box(1.1, 0.08, 1.05, 0.04), '#2a2e35', [0, 1.12, 0.18]),
    part(box(0.05, 0.03, 1.05, 0.01), '#59616d', [0, 0.775, -0.82]),
    part(box(1.42, 0.16, 0.2, 0.06), '#1b1e24', [0, 0.36, -1.3]), part(box(1.42, 0.16, 0.2, 0.06), '#1b1e24', [0, 0.36, 1.3]),
    part(box(0.34, 0.11, 0.07, 0.03), '#f4fbff', [-0.44, 0.58, -1.34]), part(box(0.34, 0.11, 0.07, 0.03), '#f4fbff', [0.44, 0.58, -1.34]),
    part(box(0.4, 0.1, 0.07, 0.03), '#ff2e43', [-0.42, 0.6, 1.34]), part(box(0.4, 0.1, 0.07, 0.03), '#ff2e43', [0.42, 0.6, 1.34]),
    part(box(0.1, 0.1, 0.16, 0.03), '#2f343c', [-0.76, 0.84, -0.3]), part(box(0.1, 0.1, 0.16, 0.03), '#2f343c', [0.76, 0.84, -0.3]),
    // a wide grille under a bright strip, creases on the hood, a lip on the trunk, skirts, twin tailpipes
    part(box(0.72, 0.14, 0.06, 0.03), '#0d0e12', [0, 0.5, -1.36]), part(bx(0.76, 0.02, 0.07), '#aab2bd', [0, 0.585, -1.36]),
    part(bx(0.03, 0.02, 0.9), '#59616d', [-0.32, 0.775, -0.82]), part(bx(0.03, 0.02, 0.9), '#59616d', [0.32, 0.775, -0.82]),
    part(box(1.2, 0.05, 0.16, 0.02), '#1b1e24', [0, 0.8, 1.24]),
    part(bx(0.06, 0.1, 1.9), '#1b1e24', [-0.71, 0.3, 0]), part(bx(0.06, 0.1, 1.9), '#1b1e24', [0.71, 0.3, 0]),
    part(cyl(0.06, 0.12, 8), '#aab2bd', [-0.4, 0.28, 1.4], [HALF, 0, 0]), part(cyl(0.06, 0.12, 8), '#aab2bd', [0.4, 0.28, 1.4], [HALF, 0, 0]),
    part(bx(1.18, 0.4, 0.05), '#2f343c', [0, 0.92, 0.2])
  ];
  for (var a = -1; a <= 1; a += 2) for (var b = -1; b <= 1; b += 2) {
    p.push(part(cyl(0.3, 0.26, 14), '#15171c', [a * 0.64, 0.3, b * 0.86], [0, 0, HALF]));
    p.push(part(cyl(0.17, 0.28, 10), '#9aa3b0', [a * 0.64, 0.3, b * 0.86], [0, 0, HALF]));
  }
  return merge(p);
}
// The Payton Pizza van: an original small red delivery van. Built at 1.9 m wide and scaled down by the caller.
export function vanGeo() {
  var p = [
    part(box(1.9, 0.8, 3.8, 0.3, 3), RED, [0, 0.74, 0]),
    part(box(1.94, 0.17, 3.4, 0.06), CREAM, [0, 0.6, 0]),
    part(box(1.86, 1.3, 2.35, 0.32, 3), RED, [0, 1.62, 0.68]),
    part(box(1.8, 1.0, 1.4, 0.34, 3), RED, [0, 1.46, -0.9]),
    part(box(1.5, 0.62, 0.12, 0.05), GLASS, [0, 1.6, -1.585], [-0.16, 0, 0]),
    part(box(0.08, 0.5, 0.8, 0.04), GLASS, [-0.88, 1.62, -0.95]), part(box(0.08, 0.5, 0.8, 0.04), GLASS, [0.88, 1.62, -0.95]),
    part(box(1.98, 0.28, 0.32, 0.1), DARK, [0, 0.46, -1.86]), part(box(1.98, 0.28, 0.32, 0.1), DARK, [0, 0.46, 1.86]),
    part(box(0.4, 0.22, 0.1, 0.05), '#fff6c9', [-0.6, 0.9, -1.88]), part(box(0.4, 0.22, 0.1, 0.05), '#fff6c9', [0.6, 0.9, -1.88]),
    part(box(0.56, 0.14, 0.08, 0.04), DARK, [0, 0.9, -1.89]),
    part(box(0.24, 0.42, 0.1, 0.05), '#ff8a1e', [-0.74, 1.12, 1.87]), part(box(0.24, 0.42, 0.1, 0.05), '#ff8a1e', [0.74, 1.12, 1.87]),
    part(box(0.56, 0.22, 0.05, 0.02), '#f4f6fa', [0, 0.82, 1.9]),
    part(box(0.16, 0.26, 0.12, 0.04), DARK, [-1.03, 1.52, -1.4]), part(box(0.16, 0.26, 0.12, 0.04), DARK, [1.03, 1.52, -1.4]),
    part(box(1.0, 0.12, 0.56, 0.05), DARK, [0, 2.31, 0.55]), part(cyl(0.07, 0.5, 8), DARK, [0, 2.58, 0.55]),
    // a cream band across the nose and along the top of each side, door lines, a cream roof panel
    part(bx(1.84, 0.12, 0.06), CREAM, [0, 1.13, -1.61]),
    part(bx(0.03, 0.1, 2.2), CREAM, [-0.94, 2.06, 0.7]), part(bx(0.03, 0.1, 2.2), CREAM, [0.94, 2.06, 0.7]),
    part(bx(0.03, 1.0, 0.03), '#a3101c', [-0.955, 1.3, -0.25]), part(bx(0.03, 1.0, 0.03), '#a3101c', [0.955, 1.3, -0.25]),
    part(box(1.5, 0.05, 1.9, 0.02), CREAM, [0, 2.285, 0.72]), part(bx(0.03, 1.1, 0.02), '#a3101c', [0, 1.5, 1.86])
  ];
  for (var a = -1; a <= 1; a += 2) for (var b = -1; b <= 1; b += 2) {
    p.push(part(cyl(0.44, 0.36, 16), '#20222a', [a * 0.86, 0.44, b * 1.15], [0, 0, HALF]));
    p.push(part(cyl(0.24, 0.38, 12), '#cfd5e0', [a * 0.86, 0.44, b * 1.15], [0, 0, HALF]));
    p.push(part(cyl(0.1, 0.4, 8), RED, [a * 0.86, 0.44, b * 1.15], [0, 0, HALF]));
  }
  return merge(p);
}

// ---------- the shop at the end of the street ----------
export function shopGeo() {
  var p = [part(box(5.6, 4.2, 7.4, 0.2), '#b3001b', [0, 2.1, 0]), part(box(6.0, 0.4, 7.8, 0.1), '#7d0013', [0, 4.3, 0]),
    part(box(0.2, 2.4, 1.4, 0.04), '#3d6ea8', [-2.82, 1.3, -1.6]), part(box(0.2, 2.2, 1.2, 0.04), '#fff8e7', [-2.82, 1.1, 1.4])];
  for (var i = 0; i < 6; i++) p.push(part(box(1.2, 0.14, 1.2, 0.03), i % 2 ? '#ffffff' : '#d7263d', [-3.3, 3.0, -3.0 + i * 1.2], [0, 0, 0.5]));
  // a wide shop window with a cream frame, plants by the door, a flue and an air conditioner on the roof
  p.push(part(bx(0.16, 2.6, 3.4), '#fff8e7', [-2.8, 1.4, -1.6])); p.push(part(bx(0.2, 2.2, 3.0), '#3d6ea8', [-2.82, 1.4, -1.6])); p.push(part(bx(0.22, 2.2, 0.08), '#fff8e7', [-2.83, 1.4, -1.6]));
  p.push(part(bx(0.22, 0.5, 1.0), '#3d6ea8', [-2.83, 1.75, 1.4])); p.push(part(blob(0.08), '#ffd23f', [-2.95, 1.05, 1.0]));
  for (i = -1; i <= 1; i += 2) { p.push(part(cyl(0.26, 0.42, 8), '#c58d4e', [-3.15, 0.21, 1.4 + i * 1.0])); p.push(part(blob(0.42), '#35b84e', [-3.15, 0.78, 1.4 + i * 1.0])); }
  p.push(part(box(0.8, 1.3, 0.8, 0.06), '#fff8e7', [1.8, 5.1, -2.6])); p.push(part(bx(0.9, 0.16, 0.9), '#d7263d', [1.8, 5.5, -2.6])); p.push(part(box(1.1, 0.5, 0.9, 0.06), '#d9dde4', [1.6, 4.75, 2.6]));
  return merge(p);
}

// ---------- pictures drawn on a canvas (still code, no image files) ----------
function canvas(w, h) { var c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function tex(c) { var t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }
function rrect(x, a, b, w, h, r) { x.beginPath(); if (x.roundRect) x.roundRect(a, b, w, h, r); else x.rect(a, b, w, h); }
function drawSlice(x, cx, cy, s) {
  x.fillStyle = '#ffc933'; x.beginPath(); x.moveTo(cx - s, cy - s * 0.8); x.lineTo(cx + s, cy - s * 0.8); x.lineTo(cx, cy + s * 1.2); x.closePath(); x.fill();
  x.fillStyle = '#d08a35'; rrect(x, cx - s * 1.15, cy - s * 1.05, s * 2.3, s * 0.42, s * 0.2); x.fill();
  x.fillStyle = '#d7263d';
  [[-0.35, -0.3, 0.2], [0.35, -0.35, 0.18], [0, 0.3, 0.16]].forEach(function (q) { x.beginPath(); x.arc(cx + q[0] * s, cy + q[1] * s, q[2] * s, 0, 7); x.fill(); });
}
export function badgeTexture() {
  var c = canvas(256, 256), x = c.getContext('2d');
  x.fillStyle = '#fff1d0'; x.beginPath(); x.arc(128, 128, 122, 0, 7); x.fill();
  x.lineWidth = 10; x.strokeStyle = '#b3001b'; x.beginPath(); x.arc(128, 128, 112, 0, 7); x.stroke();
  drawSlice(x, 128, 138, 44);
  x.fillStyle = '#b3001b'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = '900 40px system-ui, Arial, sans-serif'; x.fillText('PAYTON', 128, 62);
  x.font = '900 30px system-ui, Arial, sans-serif'; x.fillText('PIZZA', 128, 216);
  return tex(c);
}
export function glowTexture() {
  var c = canvas(128, 128), x = c.getContext('2d'), g = x.createRadialGradient(64, 64, 4, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,220,120,0.95)'); g.addColorStop(0.4, 'rgba(255,170,40,0.4)'); g.addColorStop(1, 'rgba(255,150,20,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return tex(c);
}
// the badge that floats over a house: waiting for pizza, delivered, or missed
export function markerTexture(kind) {
  var c = canvas(128, 128), x = c.getContext('2d');
  x.lineCap = 'round'; x.lineJoin = 'round';
  if (kind === 'order') {
    x.fillStyle = 'rgba(0,0,0,0.25)'; rrect(x, 14, 18, 104, 100, 26); x.fill();
    x.fillStyle = '#ffffff'; rrect(x, 10, 10, 104, 100, 26); x.fill();
    x.strokeStyle = '#ffd23f'; x.lineWidth = 6; rrect(x, 13, 13, 98, 94, 23); x.stroke();
    drawSlice(x, 62, 62, 30);
  } else {
    x.fillStyle = kind === 'done' ? '#1f9d55' : '#c1121f'; x.beginPath(); x.arc(64, 64, 50, 0, 7); x.fill();
    x.strokeStyle = '#fff'; x.lineWidth = 14; x.beginPath();
    if (kind === 'done') { x.moveTo(40, 64); x.lineTo(58, 82); x.lineTo(90, 46); }
    else { x.moveTo(44, 44); x.lineTo(84, 84); x.moveTo(84, 44); x.lineTo(44, 84); }
    x.stroke();
  }
  return tex(c);
}
export function checkerTexture() {
  var c = canvas(352, 32), x = c.getContext('2d');
  for (var i = 0; i < 22; i++) for (var j = 0; j < 2; j++) { x.fillStyle = (i + j) % 2 ? '#111' : '#fff'; x.fillRect(i * 16, j * 16, 16, 16); }
  var t = tex(c); t.magFilter = THREE.NearestFilter; return t;
}
export function shopSignTexture() {
  var c = canvas(512, 256), x = c.getContext('2d');
  x.fillStyle = '#fff8e7'; rrect(x, 0, 0, 512, 256, 28); x.fill();
  x.strokeStyle = '#b3001b'; x.lineWidth = 12; rrect(x, 8, 8, 496, 240, 22); x.stroke();
  drawSlice(x, 86, 132, 52);
  x.fillStyle = '#b3001b'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = '900 86px system-ui, Arial, sans-serif'; x.fillText('PAYTON', 320, 88);
  x.font = '900 86px system-ui, Arial, sans-serif'; x.fillText('PIZZA', 320, 178);
  return tex(c);
}
