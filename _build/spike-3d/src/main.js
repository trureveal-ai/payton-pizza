// Payton Pizza 3D spike. Throwaway test page: a code-built pizza van on an endless street,
// camera behind and above, with a frame-rate readout. No scoring, lives or crashes.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const $ = (id) => document.getElementById(id);
const canvas = $('c');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
} catch (e) {
  $('err').style.display = 'flex';
  throw e;
}
const PIXEL_RATIO = Math.min(window.devicePixelRatio || 1, 2);
renderer.setPixelRatio(PIXEL_RATIO);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// ---------- sizes (metres) ----------
const RW = 3;            // half the road width (narrower than the 2D game so a tall phone screen shows both sides)
const SW = 1.2;          // sidewalk width
const EDGE = RW + SW;    // how far left/right the van may go
const WALL = 5.7;        // house fronts
const LOT = 10.5;        // one lot along the street
const NROWS = 13;        // lots kept alive ahead of the van
const BASE_SPEED = 14.4; // van speed in m/s (game: 185 px/s x van 1.2)
const DOOR_Z = [-1.9, 0, 1.9];

const rnd = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------- palette: bright and saturated ----------
const RED = '#e3202e', CREAM = '#fff1d0', DARK = '#2c3040', GLASS = '#3d6ea8';
const CHEESE = '#ffc933', CRUST = '#d08a35', PEP = '#d7263d';
const ROOFS = ['#ff5a36', '#2f8fff', '#9a5cff', '#ffab0f', '#18b8a8', '#ff4f9e'];
const WALLS = ['#fff3dc', '#dff1ff', '#ffe2ee', '#e3f9e1', '#fff6b8'];
const SKIN = ['#f2c9a0', '#d9a577', '#a8703f', '#7a4a26', '#ffdcb8'];
const SHIRT = ['#ffffff', '#ffd23f', '#5ad1ff', '#9cf07a', '#ff9f6b', '#d6a5ff'];
const HAIR = ['#3b2a1a', '#111111', '#b5651d', '#e6c35c', '#888888'];
const CARCOL = ['#2e86ff', '#27c46a', '#ffcf1f', '#a85cff', '#ff8a1f', '#f4f6fa'];

// ---------- geometry helpers: every model is built from simple shapes and merged into one mesh ----------
function part(g, color, pos = [0, 0, 0], rot = [0, 0, 0], scl = [1, 1, 1]) {
  if (g.index) g = g.toNonIndexed();
  const n = g.attributes.position.count, arr = new Float32Array(n * 3), c = new THREE.Color(color);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  g.applyMatrix4(new THREE.Matrix4().compose(
    new THREE.Vector3(...pos), new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot)), new THREE.Vector3(...scl)));
  return g;
}
const box = (w, h, d, r = 0.1, seg = 1) => new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2 - 0.005, h / 2 - 0.005, d / 2 - 0.005));
const cyl = (r, h, seg = 14, r2 = r) => new THREE.CylinderGeometry(r2, r, h, seg);
const ball = (r) => new THREE.IcosahedronGeometry(r, 1);
const merge = (parts) => mergeGeometries(parts, false);

const grad = new THREE.DataTexture(new Uint8Array([155, 215, 255]), 3, 1, THREE.RedFormat);
grad.minFilter = grad.magFilter = THREE.NearestFilter;
grad.needsUpdate = true;
const toon = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: grad });
const glow = new THREE.MeshBasicMaterial({ vertexColors: true });

const scene = new THREE.Scene();
scene.fog = new THREE.Fog('#d8f1ff', 55, 150);
const camera = new THREE.PerspectiveCamera(60, 1, 0.5, 700);

// ---------- sky, light ----------
const skyGeo = new THREE.SphereGeometry(500, 20, 10);
skyGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(skyGeo.attributes.position.count * 3), 3));
const sky = new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
scene.add(sky);
function paintSky(top, horizon) {
  const p = skyGeo.attributes.position, c = skyGeo.attributes.color, a = new THREE.Color(horizon), b = new THREE.Color(top), t = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    t.copy(a).lerp(b, clamp(p.getY(i) / 260, 0, 1) ** 0.7);
    c.setXYZ(i, t.r, t.g, t.b);
  }
  c.needsUpdate = true;
}
const hemi = new THREE.HemisphereLight('#ffffff', '#8fd07a', 1.5);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#fff3d0', 3.0);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
Object.assign(sun.shadow.camera, { left: -22, right: 22, top: 30, bottom: -16, near: 1, far: 80 });
sun.shadow.bias = -0.0006;
sun.shadow.normalBias = 0.04;
scene.add(sun, sun.target);

// ---------- ground: grass, road, sidewalks, centre dashes ----------
const ground = new THREE.Group();
scene.add(ground);
function flat(w, len, color, x, y) {
  const g = new THREE.PlaneGeometry(w, len); g.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(g, new THREE.MeshToonMaterial({ color, gradientMap: grad }));
  m.position.set(x, y, 0); m.receiveShadow = true; ground.add(m); return m;
}
const GLEN = 330;
const grassL = flat(120, GLEN, '#5fd14e', -(EDGE + 60), 0);
const grassR = flat(120, GLEN, '#5fd14e', EDGE + 60, 0);
flat(RW * 2, GLEN, '#565b6e', 0, 0);
for (const s of [-1, 1]) {
  const m = new THREE.Mesh(part(box(SW, 0.16, GLEN, 0.04), '#e9e3d2'), toon);
  m.position.set(s * (RW + SW / 2), 0.08, 0); m.receiveShadow = true; ground.add(m);
}
const DASH = 3.75, NDASH = 84;
const dashGeo = new THREE.PlaneGeometry(0.22, 1.9); dashGeo.rotateX(-Math.PI / 2);
const dashes = new THREE.InstancedMesh(dashGeo, new THREE.MeshBasicMaterial({ color: '#ffe46b' }), NDASH);
{
  const m = new THREE.Matrix4();
  for (let i = 0; i < NDASH; i++) { m.makeTranslation(0, 0.02, 30 - i * DASH); dashes.setMatrixAt(i, m); }
}
dashes.frustumCulled = false;
scene.add(dashes);

// ---------- pizza slice (the order marker and the van's sign share it) ----------
function sliceParts() {
  const sh = new THREE.Shape();
  sh.moveTo(-0.52, 0.45); sh.lineTo(0.52, 0.45); sh.lineTo(0, -0.62); sh.closePath();
  const ex = new THREE.ExtrudeGeometry(sh, { depth: 0.12, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2 });
  const pep = (x, y) => part(cyl(0.12, 0.24), PEP, [x, y, 0], [Math.PI / 2, 0, 0]);
  return [part(ex, CHEESE, [0, 0, -0.06]), part(box(1.22, 0.24, 0.3, 0.11), CRUST, [0, 0.53, 0]),
    pep(-0.2, 0.2), pep(0.2, 0.14), pep(0, -0.16)];
}
const sliceGeo = merge(sliceParts());

// ---------- houses: 9 ready-made variants, each a single mesh ----------
function houseGeo(v) {
  const roof = ROOFS[v % ROOFS.length], wall = WALLS[v % WALLS.length], dz = DOOR_Z[v % 3], p = [];
  p.push(part(box(5, 3.3, 6.5, 0.22, 2), wall, [-2.5, 1.65, 0]));
  const tri = new THREE.Shape();
  tri.moveTo(-3.75, 0); tri.lineTo(3.75, 0); tri.lineTo(0, 2.2); tri.closePath();
  p.push(part(new THREE.ExtrudeGeometry(tri, { depth: 5.5, bevelEnabled: true, bevelSize: 0.1, bevelThickness: 0.1, bevelSegments: 1 }),
    roof, [-5.25, 3.15, 0], [0, Math.PI / 2, 0]));
  p.push(part(box(0.7, 1.4, 0.7, 0.08), '#c9573f', [-3.6, 4.5, 1.7]));
  p.push(part(box(0.84, 0.2, 0.84, 0.06), '#8f3526', [-3.6, 5.25, 1.7]));
  // door, frame, porch, awning, walkway
  p.push(part(box(0.14, 2.15, 1.3, 0.05), '#ffffff', [0.02, 1.2, dz]));
  p.push(part(box(0.16, 1.9, 1.0, 0.05), v % 2 ? '#c2262c' : '#2f6fd6', [0.07, 1.15, dz]));
  p.push(part(ball(0.07), '#ffd23f', [0.17, 1.15, dz + 0.32]));
  p.push(part(box(1.3, 0.24, 2.0, 0.08), '#c58d4e', [0.65, 0.12, dz]));
  p.push(part(box(1.0, 0.16, 1.8, 0.07), roof, [0.45, 2.5, dz], [0, 0, -0.22]));
  p.push(part(box(WALL - EDGE, 0.08, 1.0, 0.03), '#e9e3d2', [(WALL - EDGE) / 2, 0.04, dz]));
  // two windows in the other two slots
  for (const z of DOOR_Z) if (z !== dz) {
    p.push(part(box(0.12, 1.35, 1.45, 0.06), '#ffffff', [0.02, 1.9, z]));
    p.push(part(box(0.14, 1.05, 1.15, 0.05), '#8fdcff', [0.05, 1.9, z]));
    p.push(part(box(0.3, 0.14, 1.6, 0.05), roof, [0.12, 1.2, z]));
  }
  // driveway, mailbox, bush, tree
  p.push(part(box(WALL - EDGE, 0.07, 2.2, 0.03), '#cfcabb', [(WALL - EDGE) / 2, 0.035, 4.25]));
  p.push(part(box(0.1, 0.9, 0.1, 0.03), '#f4f6fa', [1.45, 0.45, dz + 1.25]));
  p.push(part(box(0.3, 0.26, 0.5, 0.1), '#2f6fd6', [1.45, 0.95, dz + 1.25]));
  p.push(part(ball(0.55), '#2fae48', [0.55, 0.4, dz > 0 ? -2.6 : 2.9], [0, 0, 0], [1, 0.8, 1.2]));
  if (v % 2 === 0) {
    p.push(part(cyl(0.22, 2.2, 8), '#9a6b3f', [-1.4, 1.1, -4.4]));
    p.push(part(ball(1.35), '#35b84e', [-1.4, 3.0, -4.4]));
    p.push(part(ball(0.95), '#4fd063', [-0.9, 3.9, -4.1]));
  } else {
    p.push(part(ball(0.7), '#35b84e', [-0.6, 0.5, -4.3], [0, 0, 0], [1.3, 0.85, 1]));
    p.push(part(ball(0.5), '#ff6fae', [0.4, 0.38, -4.1]));
  }
  return merge(p);
}
const HOUSES = [];
for (let v = 0; v < 9; v++) HOUSES.push(houseGeo(v));

// ---------- customers: blocky people, one body mesh plus one waving arm ----------
const PEOPLE = [];
for (let i = 0; i < 6; i++) {
  const skin = SKIN[i % SKIN.length], shirt = SHIRT[i], hair = HAIR[i % HAIR.length];
  const body = merge([
    part(box(0.3, 0.62, 0.5, 0.08), '#34425e', [0, 0.31, 0]),
    part(box(0.38, 0.62, 0.64, 0.13), shirt, [0, 0.92, 0]),
    part(box(0.5, 0.5, 0.52, 0.17, 2), skin, [0, 1.5, 0]),
    part(box(0.52, 0.22, 0.56, 0.1), hair, [-0.03, 1.75, 0]),
    part(box(0.03, 0.1, 0.08, 0.01), '#1c1c24', [0.255, 1.52, 0.12]),
    part(box(0.03, 0.1, 0.08, 0.01), '#1c1c24', [0.255, 1.52, -0.12]),
    part(box(0.17, 0.56, 0.17, 0.07), shirt, [0, 0.9, -0.41])
  ]);
  const arm = part(box(0.17, 0.6, 0.17, 0.07), skin, [0, 0.3, 0]);
  PEOPLE.push({ body, arm });
}

// ---------- the street: rows of lots that are moved ahead once the van has passed them ----------
const rows = [];
function makeSlot(side) {
  const g = new THREE.Group();
  g.rotation.y = side > 0 ? Math.PI : 0;
  const house = new THREE.Mesh(HOUSES[0], toon);
  house.castShadow = house.receiveShadow = true;
  const cust = new THREE.Group();
  const body = new THREE.Mesh(PEOPLE[0].body, toon); body.castShadow = true;
  const arm = new THREE.Mesh(PEOPLE[0].arm, toon); arm.position.set(0, 1.12, 0.42);
  cust.add(body, arm); cust.scale.setScalar(1.3);
  const marker = new THREE.Mesh(sliceGeo, glow); marker.scale.setScalar(1.25);
  g.add(house, cust, marker);
  scene.add(g);
  return { side, g, house, cust, body, arm, marker, has: false, done: false, dz: 0, jump: 0, ph: 0 };
}
function dress(slot, allowCust) {
  const v = (Math.random() * HOUSES.length) | 0, ppl = pick(PEOPLE);
  slot.house.geometry = HOUSES[v];
  slot.dz = DOOR_Z[v % 3];
  slot.has = allowCust && Math.random() < 0.45;
  slot.done = false; slot.jump = 0; slot.ph = rnd(0, 6);
  slot.body.geometry = ppl.body; slot.arm.geometry = ppl.arm;
  slot.cust.position.set(1.05, 0.24, slot.dz);
  slot.cust.visible = slot.has;
  slot.marker.visible = slot.has;
  slot.marker.position.set(1.05, 4.3, slot.dz);
}
for (let i = 0; i < NROWS; i++) {
  const row = { z: 8 - i * LOT, slots: [makeSlot(-1), makeSlot(1)] };
  for (const s of row.slots) { dress(s, i > 1); s.g.position.set(s.side * WALL, 0, row.z); }
  rows.push(row);
}

// ---------- props on the sidewalks and road (instanced: one draw per kind) ----------
function props(geo, count, placeX) {
  const mesh = new THREE.InstancedMesh(geo, toon, count), items = [], m = new THREE.Matrix4();
  mesh.castShadow = true; mesh.frustumCulled = false;
  for (let i = 0; i < count; i++) items.push({ x: placeX(), z: -rnd(0, NROWS * LOT) });
  const put = (i) => { m.makeTranslation(items[i].x, 0, items[i].z); mesh.setMatrixAt(i, m); };
  for (let i = 0; i < count; i++) put(i);
  scene.add(mesh);
  return { mesh, items, put, placeX };
}
const canGeo = merge([part(cyl(0.3, 0.8, 12, 0.36), '#2f9e62', [0, 0.56, 0]), part(cyl(0.4, 0.12, 12), '#267f4f', [0, 1.0, 0])]);
const hydGeo = merge([part(cyl(0.2, 0.62, 10), '#ff3b30', [0, 0.47, 0]), part(ball(0.21), '#ff3b30', [0, 0.8, 0]),
  part(cyl(0.09, 0.56, 8), '#ffd23f', [0, 0.55, 0], [0, 0, Math.PI / 2])]);
const coneGeo = merge([part(new THREE.ConeGeometry(0.26, 0.72, 12), '#ff7a1a', [0, 0.4, 0]), part(box(0.62, 0.07, 0.62, 0.03), '#ff7a1a', [0, 0.035, 0]),
  part(cyl(0.165, 0.13, 12, 0.125), '#ffffff', [0, 0.42, 0])]);
const PROPS = [
  props(canGeo, 8, () => pick([-1, 1]) * (RW + 0.7 + rnd(-0.15, 0.15))),
  props(hydGeo, 6, () => pick([-1, 1]) * (RW + 0.45)),
  props(coneGeo, 6, () => rnd(-2.2, 2.2))
];

// ---------- traffic ----------
function carGeo(color) {
  const p = [part(box(1.75, 0.62, 3.5, 0.26, 2), color, [0, 0.62, 0]), part(box(1.5, 0.6, 1.8, 0.26, 2), '#bfe6ff', [0, 1.14, 0.15]),
    part(box(1.56, 0.12, 1.86, 0.06), color, [0, 1.46, 0.15]),
    part(box(1.8, 0.2, 0.26, 0.08), DARK, [0, 0.42, -1.72]), part(box(1.8, 0.2, 0.26, 0.08), DARK, [0, 0.42, 1.72]),
    part(box(0.34, 0.18, 0.08, 0.04), '#fff6c9', [-0.55, 0.72, -1.76]), part(box(0.34, 0.18, 0.08, 0.04), '#fff6c9', [0.55, 0.72, -1.76]),
    part(box(0.3, 0.16, 0.08, 0.04), '#ff3b30', [-0.58, 0.72, 1.76]), part(box(0.3, 0.16, 0.08, 0.04), '#ff3b30', [0.58, 0.72, 1.76])];
  for (const x of [-0.82, 0.82]) for (const z of [-1.08, 1.08]) p.push(part(cyl(0.36, 0.3, 14), '#22242c', [x, 0.36, z], [0, 0, Math.PI / 2]));
  return merge(p);
}
const CARGEOS = CARCOL.map(carGeo);
const cars = [];
for (let i = 0; i < 5; i++) {
  const mesh = new THREE.Mesh(pick(CARGEOS), toon);
  mesh.castShadow = true;
  const oncoming = i < 3;
  mesh.rotation.y = oncoming ? Math.PI : 0;
  mesh.position.set(oncoming ? -1.5 : 1.5, 0, -40 - i * 34 - rnd(0, 12));
  scene.add(mesh);
  cars.push({ mesh, v: oncoming ? 7 : -6 });
}

// ---------- clouds ----------
const clouds = new THREE.Group();
{
  const mat = new THREE.MeshBasicMaterial({ color: '#ffffff', fog: false });
  for (let i = 0; i < 8; i++) {
    const g = merge([part(ball(5), '#fff', [0, 0, 0], [0, 0, 0], [1.6, 0.7, 1]), part(ball(4), '#fff', [5, -0.6, 1], [0, 0, 0], [1.4, 0.7, 1]),
      part(ball(3.5), '#fff', [-5.5, -0.8, -1], [0, 0, 0], [1.4, 0.7, 1])]);
    const m = new THREE.Mesh(g, mat);
    m.position.set(rnd(-150, 150), rnd(38, 75), -rnd(150, 330));
    m.scale.setScalar(rnd(1.2, 2.4));
    clouds.add(m);
  }
}
scene.add(clouds);

// ---------- the van: an original small red delivery van with a giant light-up slice sign ----------
function badgeTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = '#fff1d0'; x.beginPath(); x.arc(128, 128, 122, 0, 7); x.fill();
  x.lineWidth = 10; x.strokeStyle = '#b3001b'; x.beginPath(); x.arc(128, 128, 112, 0, 7); x.stroke();
  x.fillStyle = '#ffc933'; x.beginPath(); x.moveTo(84, 104); x.lineTo(172, 104); x.lineTo(128, 190); x.closePath(); x.fill();
  x.fillStyle = '#d08a35'; x.beginPath();
  if (x.roundRect) x.roundRect(76, 92, 104, 20, 10); else x.rect(76, 92, 104, 20);
  x.fill();
  x.fillStyle = '#d7263d';
  for (const [px, py, r] of [[112, 128, 9], [144, 126, 8], [128, 156, 7]]) { x.beginPath(); x.arc(px, py, r, 0, 7); x.fill(); }
  x.fillStyle = '#b3001b'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = '900 40px system-ui, Arial, sans-serif'; x.fillText('PAYTON', 128, 62);
  x.font = '900 30px system-ui, Arial, sans-serif'; x.fillText('PIZZA', 128, 216);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function glowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'), g = x.createRadialGradient(64, 64, 4, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,220,120,0.95)'); g.addColorStop(0.4, 'rgba(255,170,40,0.4)'); g.addColorStop(1, 'rgba(255,150,20,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const van = new THREE.Group();
scene.add(van);
const vanBody = new THREE.Mesh(merge([
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
]), toon);
vanBody.castShadow = true;
van.add(vanBody);
const wheelGeo = merge([part(cyl(0.44, 0.36, 18), '#20222a', [0, 0, 0], [0, 0, Math.PI / 2]),
  part(cyl(0.24, 0.38, 14), '#cfd5e0', [0, 0, 0], [0, 0, Math.PI / 2]), part(box(0.4, 0.1, 0.34, 0.03), '#8a92a3')]);
const wheels = [];
for (const x of [-0.86, 0.86]) for (const z of [-1.15, 1.15]) {
  const w = new THREE.Mesh(wheelGeo, toon); w.position.set(x, 0.44, z); w.castShadow = true; van.add(w); wheels.push(w);
}
const badgeMat = new THREE.MeshBasicMaterial({ map: badgeTexture(), transparent: true });
for (const s of [-1, 1]) {
  const b = new THREE.Mesh(new THREE.PlaneGeometry(1.12, 1.12), badgeMat);
  b.position.set(s * 0.94, 1.66, 0.72); b.rotation.y = s * Math.PI / 2; van.add(b);
}
{
  const b = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.0), badgeMat);
  b.position.set(0, 1.68, 1.865); van.add(b);
}
// the sign: big slice, chasing bulbs, soft glow
const sign = new THREE.Group();
sign.position.set(0, 3.6, 0.55);
const SIGN = 1.15;
const signMat = new THREE.MeshBasicMaterial({ vertexColors: true });
const signSlice = new THREE.Mesh(sliceGeo, signMat); signSlice.scale.set(SIGN, SIGN, 1.7); signSlice.castShadow = true;
const NBULB = 15;
const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshBasicMaterial(), NBULB);
{
  const pts = [[-0.62, 0.68], [0.62, 0.68], [0, -0.74]], m = new THREE.Matrix4();
  for (let i = 0; i < NBULB; i++) {
    const e = Math.floor(i / 5), t = (i % 5) / 5, a = pts[e], b = pts[(e + 1) % 3];
    m.makeTranslation((a[0] + (b[0] - a[0]) * t) * SIGN, (a[1] + (b[1] - a[1]) * t) * SIGN, 0);
    bulbs.setMatrixAt(i, m); bulbs.setColorAt(i, new THREE.Color('#fff'));
  }
}
const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
halo.scale.setScalar(3.6);
const signLight = new THREE.PointLight('#ffb030', 0, 18, 1.5);
sign.add(signSlice, bulbs, halo, signLight);
van.add(sign);
const blob = new THREE.Mesh(new THREE.CircleGeometry(1, 20), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.25, depthWrite: false }));
blob.rotation.x = -Math.PI / 2; blob.scale.set(1.3, 2.3, 1); blob.position.y = 0.03; blob.visible = false;
van.add(blob);

// ---------- pizza boxes in flight ----------
const pizzaGeo = merge([part(box(0.62, 0.1, 0.62, 0.03), '#f1dbb0'), part(box(0.5, 0.03, 0.5, 0.01), PEP, [0, 0.055, 0]), part(cyl(0.14, 0.03, 12), CHEESE, [0, 0.062, 0])]);
const pies = [];
for (let i = 0; i < 8; i++) {
  const m = new THREE.Mesh(pizzaGeo, toon); m.visible = false; m.castShadow = true; scene.add(m);
  pies.push({ m, live: false, side: 1, vx: 0, vy: 0, vz: 0, d: 0 });
}

// ---------- stress objects (extra separately drawn, moving meshes) ----------
const stress = new THREE.Group();
scene.add(stress);
const STRESS = [0, 150, 400];
function setStress(n) {
  while (stress.children.length > n) stress.remove(stress.children[stress.children.length - 1]);
  while (stress.children.length < n) {
    const m = new THREE.Mesh(pizzaGeo, toon);
    m.position.set(pick([-1, 1]) * rnd(5, 14), rnd(5, 11), -rnd(4, 80));
    m.userData.ph = rnd(0, 6); m.userData.y = m.position.y; m.castShadow = true;
    stress.add(m);
  }
}

// ---------- settings ----------
const CAMS = [
  { name: 'Chase', back: 8.5, up: 7.2, ahead: 10, lookY: 1 },
  { name: 'High', back: 7, up: 12.5, ahead: 8, lookY: 0 },
  { name: 'Top-down', back: -7, up: 30, ahead: 7.4, lookY: 0 }
];
const S = { cam: 0, dusk: false, shadows: true, stress: 0 };
function applyTime() {
  if (S.dusk) {
    paintSky('#2b2a72', '#ff9c63'); scene.fog.color.set('#f2a37a');
    hemi.color.set('#b9a8ff'); hemi.groundColor.set('#5a6aa0'); hemi.intensity = 0.95;
    sun.color.set('#ffb070'); sun.intensity = 1.5; signLight.intensity = 60; halo.scale.setScalar(6);
    grassL.material.color.set('#4aa857'); grassR.material.color.set('#4aa857');
  } else {
    paintSky('#39a7ff', '#d8f1ff'); scene.fog.color.set('#d8f1ff');
    hemi.color.set('#ffffff'); hemi.groundColor.set('#8fd07a'); hemi.intensity = 1.5;
    sun.color.set('#fff3d0'); sun.intensity = 3.0; signLight.intensity = 0; halo.scale.setScalar(3.6);
    grassL.material.color.set('#5fd14e'); grassR.material.color.set('#5fd14e');
  }
}
function applyShadows() { sun.castShadow = S.shadows; blob.visible = !S.shadows; }
function labels() {
  $('bCam').textContent = 'Camera: ' + CAMS[S.cam].name;
  $('bTime').textContent = 'Time: ' + (S.dusk ? 'Dusk' : 'Day');
  $('bShadow').textContent = 'Shadows: ' + (S.shadows ? 'On' : 'Off');
  $('bStress').textContent = 'Stress: ' + (STRESS[S.stress] ? '+' + STRESS[S.stress] : 'Off');
}
$('bCam').onclick = () => { S.cam = (S.cam + 1) % CAMS.length; labels(); meter.reset(); };
$('bTime').onclick = () => { S.dusk = !S.dusk; applyTime(); labels(); meter.reset(); };
$('bShadow').onclick = () => { S.shadows = !S.shadows; applyShadows(); labels(); meter.reset(); };
$('bStress').onclick = () => { S.stress = (S.stress + 1) % STRESS.length; setStress(STRESS[S.stress]); labels(); meter.reset(); };

// ---------- input: same scheme as the 2D game ----------
const P = { x: 1.5, tx: 1.5, off: 2, toff: 2 };   // across the street; how far ahead of the camera anchor
const OFF_MIN = -1, OFF_MAX = 6;
const keys = {};
let steerId = null, drag = null;
canvas.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  if (steerId !== null) { throwPizza(e.clientX < innerWidth / 2 ? -1 : 1); return; }   // second finger = instant throw
  steerId = e.pointerId;
  drag = { sx: e.clientX, lx: e.clientX, ly: e.clientY, t: performance.now(), moved: 0 };
  try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* older browsers */ }
});
canvas.addEventListener('pointermove', (e) => {
  if (e.pointerId !== steerId || !drag) return;
  e.preventDefault();
  const dx = e.clientX - drag.lx, dy = e.clientY - drag.ly;
  drag.moved += Math.abs(dx) + Math.abs(dy); drag.lx = e.clientX; drag.ly = e.clientY;
  if (drag.moved > 8) {
    P.tx = clamp(P.tx + dx / Math.min(innerWidth, 560) * 15, -EDGE + 1, EDGE - 1);
    P.toff = clamp(P.toff - dy / innerHeight * 14, OFF_MIN, OFF_MAX);
  }
});
function endPtr(e) {
  if (e.pointerId !== steerId) return;
  if (drag && e.type === 'pointerup' && drag.moved < 10 && performance.now() - drag.t < 350) throwPizza(drag.sx < innerWidth / 2 ? -1 : 1);
  steerId = null; drag = null;
}
canvas.addEventListener('pointerup', endPtr);
canvas.addEventListener('pointercancel', endPtr);
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
addEventListener('keydown', (e) => {
  const c = e.code;
  if (c.startsWith('Arrow') || c === 'Space') e.preventDefault();
  if (e.repeat) return;
  keys[c] = true;
  if (c === 'KeyZ' || c === 'KeyA' || c === 'KeyQ') throwPizza(-1);
  else if (c === 'KeyX' || c === 'KeyD' || c === 'KeyE') throwPizza(1);
  else if (c === 'Space') smartThrow();
  else if (c === 'KeyC') $('bCam').click();
});
addEventListener('keyup', (e) => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });

// ---------- throwing and delivering (just enough to judge aiming) ----------
let camZ = 0, speed = BASE_SPEED, throwCd = 0, time = 0;
const stats = { thrown: 0, hand: 0, door: 0, miss: 0 };
const pops = [];
function pop(pos, text, color) {
  const el = document.createElement('div');
  el.className = 'pop'; el.textContent = text; el.style.color = color;
  document.body.appendChild(el);
  pops.push({ el, pos: pos.clone(), t: 0 });
}
function throwPizza(side) {
  if (throwCd > 0) return;
  const p = pies.find((q) => !q.live); if (!p) return;
  throwCd = 0.2; stats.thrown++;
  p.live = true; p.side = side; p.d = 0;
  p.m.position.set(van.position.x + side * 1.0, 1.5, van.position.z);
  p.vx = side * 19; p.vy = 2.6; p.vz = -speed;
  p.m.visible = true;
}
function slotDoorZ(row, s) { return row.z + (s.side > 0 ? -s.dz : s.dz); }
function smartThrow() {
  let best = null, bd = 1e9;
  for (const row of rows) for (const s of row.slots) {
    if (!s.has || s.done) continue;
    const ahead = van.position.z - slotDoorZ(row, s);
    if (ahead < -2 || ahead > 13) continue;
    const dd = Math.abs(ahead - 3);
    if (dd < bd) { bd = dd; best = s; }
  }
  throwPizza(best ? best.side : (P.x < 0 ? -1 : 1));
}
function resolvePie(p) {
  const pos = p.m.position, atWall = Math.abs(pos.x) >= WALL - 0.1;
  for (const row of rows) for (const s of row.slots) {
    if (s.side !== p.side || !s.has || s.done) continue;
    const dz = pos.z - slotDoorZ(row, s), cx = s.side * (WALL - 1.05);
    if (Math.abs(dz) < 0.85 && Math.abs(pos.x - cx) < 0.7) { deliver(s, true, pos); return true; }
    if (atWall && Math.abs(dz) < 0.95) { deliver(s, false, pos); return true; }
  }
  if (atWall) { stats.miss++; pop(pos, 'THUNK', '#dfe4ec'); return true; }
  if (pos.y <= 0.08 || p.d > 11) { stats.miss++; pop(pos, 'SPLAT', '#dfe4ec'); return true; }
  return false;
}
function deliver(s, hand, pos) {
  s.done = true; s.jump = 1.2; s.marker.visible = false;
  if (hand) { stats.hand++; pop(pos, 'HAND-OFF! +250', '#ffd23f'); } else { stats.door++; pop(pos, 'FRONT DOOR +100', '#9cf07a'); }
}

// ---------- frame-rate meter ----------
const meter = {
  t0: 0, frames: 0, secT: 0, secN: 0, low: Infinity, last: 0, total: 0, done: null,
  reset() { this.t0 = 0; this.frames = 0; this.secT = 0; this.secN = 0; this.low = Infinity; this.total = 0; this.done = null;
    const r = $('result'); r.className = ''; r.textContent = 'Measuring… keep driving for 30 seconds'; },
  tick(dtReal) {
    this.t0 += dtReal;
    if (this.t0 < 3) return;                      // skip the first 3 seconds (start-up hitches)
    this.total += dtReal; this.frames++; this.secT += dtReal; this.secN++;
    if (this.secT >= 1) { this.last = this.secN / this.secT; this.low = Math.min(this.low, this.last); this.secT = 0; this.secN = 0; }
    if (!this.done && this.total >= 30) {
      const avg = this.frames / this.total, low = this.low;
      const ok = STRESS[S.stress] ? avg >= 45 : (avg >= 55 && low >= 45);
      this.done = { avg, low, ok };
      const r = $('result');
      r.className = ok ? 'pass' : 'fail';
      r.textContent = `30-second result: average ${avg.toFixed(0)} · low ${low.toFixed(0)} · ${ok ? 'PASS' : 'FAIL'}` +
        ` (${CAMS[S.cam].name}, ${S.dusk ? 'dusk' : 'day'}, shadows ${S.shadows ? 'on' : 'off'}, stress ${STRESS[S.stress] ? '+' + STRESS[S.stress] : 'off'})`;
    }
  }
};

// ---------- resize ----------
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.fov = w < h ? 75 : 55;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();
applyTime(); applyShadows(); labels();
setTimeout(() => { $('hint').style.opacity = 0; }, 8000);

// ---------- main loop ----------
const tmpV = new THREE.Vector3(), bulbOn = new THREE.Color('#fffbe0'), bulbOff = new THREE.Color('#ff8a1e');
let lastT = performance.now(), camX = 0, hudT = 0, prevX = P.x, bulbT = 0, bulbStep = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dtReal = Math.min((now - lastT) / 1000, 0.25); lastT = now;
  if (document.hidden) return;
  const dt = Math.min(dtReal, 0.05);
  time += dt;
  meter.tick(dtReal);
  if (throwCd > 0) throwCd -= dt;

  // steering
  const kx = (keys.ArrowRight ? 1 : 0) - (keys.ArrowLeft ? 1 : 0), ky = (keys.ArrowUp ? 1 : 0) - (keys.ArrowDown ? 1 : 0);
  if (kx || ky) {
    P.x = clamp(P.x + kx * 9 * dt, -EDGE + 1, EDGE - 1); P.off = clamp(P.off + ky * 8 * dt, OFF_MIN, OFF_MAX);
    P.tx = P.x; P.toff = P.off;
  } else {
    P.x += clamp(P.tx - P.x, -15 * dt, 15 * dt); P.off += clamp(P.toff - P.off, -14 * dt, 14 * dt);
  }
  const f = (P.off - OFF_MIN) / (OFF_MAX - OFF_MIN);
  speed = BASE_SPEED * (0.8 + 0.5 * f);
  camZ -= speed * dt;
  const vx = (P.x - prevX) / Math.max(dt, 1e-4); prevX = P.x;

  // van
  van.position.set(P.x, Math.abs(Math.sin(time * 13)) * 0.025, camZ - P.off);
  van.rotation.y += (clamp(-vx * 0.035, -0.32, 0.32) - van.rotation.y) * Math.min(1, dt * 10);
  van.rotation.z = van.rotation.y * 0.25;
  for (const w of wheels) w.rotation.x -= speed * dt / 0.44;
  sign.rotation.z = -van.rotation.y * 0.5 + Math.sin(time * 3) * 0.03;
  const pulse = 0.88 + 0.12 * Math.sin(time * 5);
  signMat.color.setScalar(pulse);
  halo.material.opacity = (S.dusk ? 0.95 : 0.45) * pulse;
  bulbT += dt;
  if (bulbT > 0.11) {
    bulbT = 0; bulbStep++;
    for (let i = 0; i < NBULB; i++) bulbs.setColorAt(i, (i + bulbStep) % 3 === 0 ? bulbOn : bulbOff);
    bulbs.instanceColor.needsUpdate = true;
  }

  // recycle the street behind the van
  for (const row of rows) {
    if (row.z > camZ + 16) {
      row.z -= NROWS * LOT;
      for (const s of row.slots) { dress(s, true); s.g.position.z = row.z; }
    }
    for (const s of row.slots) {
      if (!s.has) continue;
      if (s.jump > 0) s.jump -= dt;
      const hop = s.jump > 0 ? Math.abs(Math.sin(s.jump * 9)) * 0.5 : 0;
      s.cust.position.y = 0.24 + hop;
      s.arm.rotation.x = s.done ? Math.sin(time * 14 + s.ph) * 0.9 : Math.sin(time * 5 + s.ph) * 0.45;
      if (s.marker.visible) { s.marker.position.y = 4.3 + Math.sin(time * 4 + s.ph) * 0.18; s.marker.rotation.y = time * 2.2 + s.ph; }
    }
  }
  for (const pr of PROPS) {
    let dirty = false;
    for (let i = 0; i < pr.items.length; i++) if (pr.items[i].z > camZ + 14) {
      pr.items[i].z -= NROWS * LOT + rnd(0, 6); pr.items[i].x = pr.placeX(); pr.put(i); dirty = true;
    }
    if (dirty) pr.mesh.instanceMatrix.needsUpdate = true;
  }
  for (const c of cars) {
    c.mesh.position.z += c.v * dt;
    if (c.mesh.position.z > camZ + 16) { c.mesh.position.z = camZ - 110 - rnd(0, 50); c.mesh.geometry = pick(CARGEOS); }
  }

  // pizzas in flight
  for (const p of pies) {
    if (!p.live) continue;
    for (let s = 0; s < 3 && p.live; s++) {
      p.vy -= 9 * dt / 3;
      p.m.position.x += p.vx * dt / 3; p.m.position.y += p.vy * dt / 3; p.m.position.z += p.vz * dt / 3;
      p.d += Math.abs(p.vx) * dt / 3;
      if (resolvePie(p)) { p.live = false; p.m.visible = false; }
    }
    p.m.rotation.y += dt * 10;
  }

  // things that follow the camera
  ground.position.z = camZ - 110;
  dashes.position.z = -Math.floor(-camZ / DASH) * DASH;
  sky.position.set(0, 0, camZ);
  clouds.position.z = camZ * 0.985;
  for (const c of clouds.children) if (c.position.z + clouds.position.z > camZ - 120) c.position.z -= 220;
  stress.position.z = camZ;
  for (const m of stress.children) { m.position.y = m.userData.y + Math.sin(time * 3 + m.userData.ph) * 0.8; m.rotation.y = time * 2 + m.userData.ph; m.rotation.x = time + m.userData.ph; }
  sun.position.set(-9, 30, camZ + 14);
  sun.target.position.set(0, 0, camZ - 8);

  // camera
  const C = CAMS[S.cam];
  camX += (P.x * 0.55 - camX) * Math.min(1, dt * 5);
  camera.position.set(camX, C.up, camZ + C.back);
  camera.lookAt(camX * 0.85, C.lookY, camZ - C.ahead);

  renderer.render(scene, camera);

  // pop-up words
  for (let i = pops.length - 1; i >= 0; i--) {
    const p = pops[i]; p.t += dt; p.pos.y += dt * 1.6;
    tmpV.copy(p.pos).project(camera);
    p.el.style.left = ((tmpV.x * 0.5 + 0.5) * innerWidth) + 'px';
    p.el.style.top = ((-tmpV.y * 0.5 + 0.5) * innerHeight) + 'px';
    p.el.style.opacity = tmpV.z > 1 ? 0 : clamp(1.6 - p.t * 1.4, 0, 1);
    if (p.t > 1.2) { p.el.remove(); pops.splice(i, 1); }
  }

  hudT += dtReal;
  if (hudT > 0.25) {
    hudT = 0;
    const info = renderer.info.render, warm = meter.t0 >= 3 && meter.total > 1;
    $('fps').textContent = meter.last ? meter.last.toFixed(0) : '--';
    $('avg').textContent = warm ? (meter.frames / meter.total).toFixed(0) : '--';
    $('low').textContent = warm && isFinite(meter.low) ? meter.low.toFixed(0) : '--';
    $('calls').textContent = info.calls;
    $('tris').textContent = Math.round(info.triangles / 1000) + 'k';
    $('px').textContent = `${Math.round(innerWidth * PIXEL_RATIO)}×${Math.round(innerHeight * PIXEL_RATIO)}`;
  }
}
requestAnimationFrame(frame);

// read-only peek for the workspace check
window.__spike = { get state() { return { camZ, speed, x: P.x, stats: { ...stats }, calls: renderer.info.render.calls, tris: renderer.info.render.triangles, meter: meter.done, fps: meter.last }; } };
