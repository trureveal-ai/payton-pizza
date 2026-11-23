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
// down can still see the door.
export var SLOT_Z = [2.15, 0, -2.15];
export function houseGeo(o) {
  var p = [], zs = SLOT_Z[o.slot], i;
  p.push(part(box(4.1, 3.0, 6.5, 0.16), o.wall, [-2.05, 1.5, 0]));
  var tri = new THREE.Shape();
  tri.moveTo(-4.25, 0); tri.lineTo(0.1, 0); tri.lineTo(-2.07, 1.55); tri.closePath();
  p.push(part(new THREE.ExtrudeGeometry(tri, { depth: 6.8, bevelEnabled: false }), o.roof, [0, 2.98, -3.4]));
  p.push(part(box(0.3, 0.16, 6.95, 0.05), o.roof2, [-2.07, 4.55, 0]));
  p.push(part(box(0.55, 1.0, 0.55, 0.06), '#7b3f2a', [-3.15, 4.2, 1.9]));
  // door, porch, mat, walkway
  p.push(part(box(0.16, 2.3, 1.56, 0.04), '#ffffff', [0.05, 1.15, zs]));
  p.push(part(box(0.2, 2.05, 1.24, 0.04), o.door, [0.09, 1.03, zs]));
  p.push(part(ball(0.07), '#ffd23f', [0.2, 1.05, zs - 0.4]));
  p.push(part(box(1.05, 0.22, 2.1, 0.06), o.porch, [0.52, 0.11, zs]));
  p.push(part(box(0.56, 0.05, 1.1, 0.02), o.mat, [0.6, 0.235, zs]));
  p.push(part(box(0.68, 0.07, 0.7, 0.02), '#d8d2c0', [1.38, 0.035, zs]));
  // windows
  for (i = 0; i < 3; i++) if (i !== o.slot) {
    p.push(part(box(0.14, 1.4, 1.5, 0.04), '#ffffff', [0.04, 1.75, SLOT_Z[i]]));
    p.push(part(box(0.18, 1.1, 1.2, 0.03), '#9ad8ff', [0.07, 1.75, SLOT_Z[i]]));
  }
  // driveway, mailbox, garden
  p.push(part(box(5.5, 0.06, 1.5, 0.02), '#b9b5a8', [-1.05, 0.03, 4.3]));
  p.push(part(box(0.09, 0.8, 0.09, 0.02), '#f4f6fa', [1.5, 0.4, zs + 1.4]));
  p.push(part(box(0.26, 0.24, 0.44, 0.08), o.cust ? '#2f6fd6' : '#8d939e', [1.5, 0.86, zs + 1.4]));
  if (o.tree) {
    p.push(part(cyl(0.2, 2.0, 7), '#9a6b3f', [-2.3, 1.0, -4.35]));
    p.push(part(ball(1.15), '#35b84e', [-2.3, 2.8, -4.35]));
    p.push(part(ball(0.8), '#4fd063', [-1.85, 3.55, -4.1]));
  } else {
    p.push(part(ball(0.62), '#35b84e', [-1.2, 0.45, -4.4], null, [1.3, 0.85, 1]));
    p.push(part(ball(0.42), o.cust ? '#ff6fae' : '#7fae6a', [-0.2, 0.32, -4.5]));
  }
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
    part(box(0.42, 0.05, 0.1, 0.02), '#4de1ff', [-0.3, 0.26, -0.24]), part(box(0.42, 0.05, 0.1, 0.02), '#4de1ff', [0.3, 0.26, -0.24])
  ]);
}
export function bikeGeo() {
  return merge([
    part(cyl(0.36, 0.2, 14), '#111318', [0, 0.36, -0.72], [0, 0, HALF]), part(cyl(0.38, 0.24, 14), '#111318', [0, 0.38, 0.7], [0, 0, HALF]),
    part(cyl(0.15, 0.22, 10), '#cfd5e0', [0, 0.36, -0.72], [0, 0, HALF]), part(cyl(0.15, 0.26, 10), '#cfd5e0', [0, 0.38, 0.7], [0, 0, HALF]),
    part(box(0.3, 0.42, 1.3, 0.12), '#ff7b00', [0, 0.72, 0]), part(box(0.28, 0.16, 0.56, 0.06), '#1c1f27', [0, 0.98, 0.26]),
    part(box(0.22, 0.2, 0.5, 0.06), '#ffffff', [0, 0.86, -0.62], [0.4, 0, 0]), part(box(0.1, 0.5, 0.1, 0.03), '#3a3f4a', [0, 0.82, -0.62], [0.35, 0, 0]),
    part(box(0.9, 0.07, 0.08, 0.03), '#3a3f4a', [0, 1.12, -0.5]), part(box(0.12, 0.1, 0.12, 0.03), '#111318', [-0.46, 1.12, -0.5]), part(box(0.12, 0.1, 0.12, 0.03), '#111318', [0.46, 1.12, -0.5]),
    part(box(0.2, 0.12, 0.5, 0.05), '#ff7b00', [0, 0.84, 0.8], [-0.3, 0, 0])
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
    part(box(0.1, 0.1, 0.16, 0.03), '#2f343c', [-0.76, 0.84, -0.3]), part(box(0.1, 0.1, 0.16, 0.03), '#2f343c', [0.76, 0.84, -0.3])
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
    part(box(1.0, 0.12, 0.56, 0.05), DARK, [0, 2.31, 0.55]), part(cyl(0.07, 0.5, 8), DARK, [0, 2.58, 0.55])
  ];
  for (var a = -1; a <= 1; a += 2) for (var b = -1; b <= 1; b += 2) {
    p.push(part(cyl(0.44, 0.36, 16), '#20222a', [a * 0.86, 0.44, b * 1.15], [0, 0, HALF]));
    p.push(part(cyl(0.24, 0.38, 12), '#cfd5e0', [a * 0.86, 0.44, b * 1.15], [0, 0, HALF]));
  }
  return merge(p);
}

// ---------- the shop at the end of the street ----------
export function shopGeo() {
  var p = [part(box(5.6, 4.2, 7.4, 0.2), '#b3001b', [0, 2.1, 0]), part(box(6.0, 0.4, 7.8, 0.1), '#7d0013', [0, 4.3, 0]),
    part(box(0.2, 2.4, 1.4, 0.04), '#3d6ea8', [-2.82, 1.3, -1.6]), part(box(0.2, 2.2, 1.2, 0.04), '#fff8e7', [-2.82, 1.1, 1.4])];
  for (var i = 0; i < 6; i++) p.push(part(box(1.2, 0.14, 1.2, 0.03), i % 2 ? '#ffffff' : '#d7263d', [-3.3, 3.0, -3.0 + i * 1.2], [0, 0, 0.5]));
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
