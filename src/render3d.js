// The 3D street. It reads the game's state every frame and draws it; it never changes the rules.
// One fixed camera looks steeply down the street from behind. It never turns, and the street
// always stays centred, so steering only ever moves the ride.
import * as THREE from 'three';
import { H, RDL, RDR, SWL, SWR, UNIT, W, WALL_L, WALL_R } from './config.js';
import { G, P } from './state.js';
import { glc, view } from './canvas.js';
import { aimAt } from './game.js';
import { vrnd } from './util.js';
import * as M from './models.js';

var X = function (x) { return (x - W / 2) / UNIT; };
var Z = function (wy) { return -wy / UNIT; };
var HAZE = '#cdeaff';
var PITCH = 62 * Math.PI / 180, VFOV = 60, HALF_W = 11.8, BOTTOM = -0.6;

var renderer = null, scene, camera, toon, sun, ground, dashes, world;
var cam = { D: 38, h: 33, g: 18, foot: 1, far: 60, ahead: 55 };
var lotsRef = null, lotObjs = [], obsMap = new Map(), stamp = 0;
var geoCache = {}, markerMat = {}, player = null, pies = [], decals, aims = [], finish = null, shop = null;
var v3 = new THREE.Vector3(), m4 = new THREE.Matrix4();

function cached(key, make) { return geoCache[key] || (geoCache[key] = make()); }
function mesh(geo, mat, shadow) { var m = new THREE.Mesh(geo, mat || toon); m.castShadow = shadow !== false; return m; }

// ---------- set-up ----------
export function init3d() {
  try {
    renderer = new THREE.WebGLRenderer({ canvas: glc, antialias: true, powerPreference: 'high-performance' });
  } catch (e) { renderer = null; G.webgl = false; return false; }
  G.webgl = true;
  var shadows = G.opt.shadows !== 0;
  renderer.shadowMap.enabled = shadows;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  scene = new THREE.Scene();
  scene.background = new THREE.Color(HAZE);
  scene.fog = new THREE.Fog(HAZE, 40, 60);
  camera = new THREE.PerspectiveCamera(VFOV, 1, 1, 300);

  var grad = new THREE.DataTexture(new Uint8Array([160, 218, 255]), 3, 1, THREE.RedFormat);
  grad.minFilter = grad.magFilter = THREE.NearestFilter; grad.needsUpdate = true;
  toon = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: grad });

  scene.add(new THREE.HemisphereLight('#ffffff', '#9fd68a', 1.5));
  // The sun shines from behind the camera with no sideways lean, so shadows fall up the street
  // and can be kept perfectly steady as the camera moves (see placeSun).
  sun = new THREE.DirectionalLight('#fff3d0', 2.9);
  sun.castShadow = shadows;
  sun.shadow.mapSize.set(1024, 2048);
  Object.assign(sun.shadow.camera, { left: -22, right: 22, top: 30, bottom: -30, near: 1, far: 90 });
  sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.05;
  scene.add(sun, sun.target);

  // ground: grass, road, sidewalks. It slides along with the camera.
  ground = new THREE.Group(); scene.add(ground);
  var LEN = 150, flat = function (w, color, x, y) {
    var g = new THREE.PlaneGeometry(w, LEN); g.rotateX(-Math.PI / 2);
    var m = new THREE.Mesh(g, new THREE.MeshToonMaterial({ color: color, gradientMap: grad }));
    m.position.set(x, y, 0); m.receiveShadow = true; ground.add(m);
  };
  var rw = (RDR - RDL) / UNIT, sw = (RDL - SWL) / UNIT, edge = (SWR - SWL) / UNIT / 2;
  flat(80, '#5fd14e', -(edge + 40), 0); flat(80, '#5fd14e', edge + 40, 0); flat(rw, '#565b6e', 0, 0);
  for (var s = -1; s <= 1; s += 2) {
    var sm = mesh(M.part(M.box(sw, 0.16, LEN, 0.04), '#e3ddcb'), toon, false);
    sm.position.set(s * (rw / 2 + sw / 2), 0.08, 0); sm.receiveShadow = true; ground.add(sm);
  }
  var dg = new THREE.PlaneGeometry(0.2, 1.7); dg.rotateX(-Math.PI / 2);
  dashes = new THREE.InstancedMesh(dg, new THREE.MeshBasicMaterial({ color: '#f5d547' }), 40);
  for (var i = 0; i < 40; i++) { m4.makeTranslation(0, 0.02, 8 - i * 3.5); dashes.setMatrixAt(i, m4); }
  dashes.frustumCulled = false; scene.add(dashes);

  world = new THREE.Group(); scene.add(world);   // everything rebuilt for each street

  ['order', 'done', 'missed'].forEach(function (k) { markerMat[k] = new THREE.SpriteMaterial({ map: M.markerTexture(k), depthTest: false, fog: false }); });

  // pizzas in the air, splats on the ground, aiming marks
  var pg = cached('pie', M.pizzaBoxGeo);
  for (i = 0; i < 14; i++) { var pm = mesh(pg); pm.visible = false; scene.add(pm); pies.push(pm); }
  decals = new THREE.InstancedMesh(cached('splat', M.splatGeo), toon, 40); decals.count = 0; decals.frustumCulled = false; scene.add(decals);
  for (i = 0; i < 2; i++) {
    var ring = new THREE.Mesh(new THREE.RingGeometry(0.46, 0.68, 28), new THREE.MeshBasicMaterial({ color: '#fff', transparent: true, opacity: 0.4, depthTest: false, fog: false }));
    ring.rotation.x = -Math.PI / 2; ring.renderOrder = 5; ring.visible = false; scene.add(ring); aims.push(ring);
  }

  buildPlayer();
  buildFinish();
  view.onResize = resize3d; resize3d();
  G.project = project;
  return true;
}

function resize3d() {
  if (!renderer) return;
  renderer.setPixelRatio(view.dpr);
  renderer.setSize(view.cw, view.ch, false);
  var asp = view.cw / view.ch, half = VFOV / 2 * Math.PI / 180;
  camera.aspect = asp; camera.fov = VFOV; camera.updateProjectionMatrix();
  // far enough back that the whole street, lawn to lawn, fits across the screen where the player rides
  cam.D = Math.min(Math.max(HALF_W / (Math.tan(half) * asp), 31), 50);
  cam.h = cam.D * Math.sin(PITCH); cam.g = cam.D * Math.cos(PITCH);
  cam.foot = BOTTOM - cam.h / Math.tan(PITCH + half);   // metres up the street from G.cam to the spot under the camera
  cam.ahead = cam.foot + cam.h / Math.tan(PITCH - half); // how far up the street the top of the screen reaches
  cam.far = cam.h / Math.sin(PITCH - half);
  scene.fog.near = cam.far * 0.76; scene.fog.far = cam.far * 1.04;
}

// a spot on the street (game units; `up` is height in game units) as overlay units
function project(x, wy, up) {
  v3.set(X(x), (up || 0) / UNIT, Z(wy)).project(camera);
  return { x: ((v3.x * 0.5 + 0.5) * view.cw - view.ox) / view.s, y: (-v3.y * 0.5 + 0.5) * view.ch / view.s, vis: v3.z < 1 };
}

// ---------- the player ----------
function buildPlayer() {
  player = new THREE.Group(); scene.add(player);
  var skin = '#f2c9a0', rides = [], i;
  var payton = function (y, z) { var g = new THREE.Group(), b = mesh(cached('payton', M.paytonGeo)); g.add(b); g.position.set(0, y, z); return g; };
  var arm = function (y, z) { var a = mesh(cached('arm', function () { return M.oneArmGeo(skin); }), toon, false); a.position.set(0, y, z); a.visible = false; return a; };
  // 0 hoverboard
  var r0 = new THREE.Group(); r0.add(mesh(cached('hover', M.hoverGeo)));
  r0.add(payton(0.37, 0)); var bag0 = mesh(cached('bag', M.bagGeo)); bag0.position.set(0, 1.2, 0.5); r0.add(bag0);
  r0.userData.arm = arm(1.42, 0); r0.add(r0.userData.arm);
  // 1 dirt bike
  var r1 = new THREE.Group(); r1.add(mesh(cached('bike', M.bikeGeo)));
  var p1 = payton(0.55, 0.05); r1.add(p1); var bag1 = mesh(cached('bag', M.bagGeo)); bag1.position.set(0, 1.25, 0.72); r1.add(bag1);
  r1.userData.arm = arm(1.6, 0.05); r1.add(r1.userData.arm);
  // 2 the Bimmer
  var r2 = new THREE.Group(); r2.add(mesh(cached('bimmer', M.bimmerGeo)));
  r2.userData.arm = arm(0.95, 0.1); r2.add(r2.userData.arm);
  // 3 the van, with its badges and the light-up slice sign
  var r3 = new THREE.Group(), body = mesh(cached('van', M.vanGeo)); r3.add(body);
  var badge = new THREE.MeshBasicMaterial({ map: M.badgeTexture(), transparent: true });
  for (var s = -1; s <= 1; s += 2) { var b = new THREE.Mesh(new THREE.PlaneGeometry(1.12, 1.12), badge); b.position.set(s * 0.94, 1.66, 0.72); b.rotation.y = s * Math.PI / 2; r3.add(b); }
  var rb = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.0), badge); rb.position.set(0, 1.68, 1.865); r3.add(rb);
  var sign = new THREE.Group(); sign.position.set(0, 3.6, 0.55);
  var signMat = new THREE.MeshBasicMaterial({ vertexColors: true });
  var sl = new THREE.Mesh(cached('slice', M.sliceGeo), signMat); sl.scale.set(1.15, 1.15, 1.7); sl.castShadow = true;
  var bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshBasicMaterial(), 15);
  var pts = [[-0.62, 0.68], [0.62, 0.68], [0, -0.74]];
  for (i = 0; i < 15; i++) {
    var e = Math.floor(i / 5), t = (i % 5) / 5, a = pts[e], c = pts[(e + 1) % 3];
    m4.makeTranslation((a[0] + (c[0] - a[0]) * t) * 1.15, (a[1] + (c[1] - a[1]) * t) * 1.15, 0);
    bulbs.setMatrixAt(i, m4); bulbs.setColorAt(i, new THREE.Color('#fff'));
  }
  var halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: M.glowTexture(), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
  halo.scale.setScalar(3.6);
  sign.add(sl, bulbs, halo); r3.add(sign);
  r3.userData = { arm: arm(1.5, -0.95), sign: sign, signMat: signMat, bulbs: bulbs, halo: halo };
  r3.add(r3.userData.arm);
  r0.scale.setScalar(1.35); r1.scale.setScalar(1.3); r2.scale.setScalar(1.12); r3.scale.setScalar(0.9);
  rides = [r0, r1, r2, r3];
  for (i = 0; i < 4; i++) { rides[i].visible = false; player.add(rides[i]); }
  // the bumper that saves you from one crash
  var ring = new THREE.Mesh(new THREE.RingGeometry(0.92, 1.0, 40), new THREE.MeshBasicMaterial({ color: '#5ad1ff', transparent: true, opacity: 0.65, depthWrite: false, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.2; player.add(ring);
  // a faint ring on the ground so the small rides are easy to find from above
  var spot = new THREE.Mesh(new THREE.RingGeometry(0.86, 1.0, 36), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.4, depthWrite: false }));
  spot.rotation.x = -Math.PI / 2; spot.position.y = 0.05; player.add(spot);
  player.userData = { rides: rides, ring: ring, spot: spot, px: 0, lean: 0, bulbT: 0, bulbStep: 0 };
}

function buildFinish() {
  var w = (RDR - RDL) / UNIT, g = new THREE.PlaneGeometry(w, w * 32 / 352 * 2.2); g.rotateX(-Math.PI / 2);
  finish = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: M.checkerTexture() })); scene.add(finish);
  shop = new THREE.Group();
  var b = mesh(cached('shop', M.shopGeo)); b.receiveShadow = true; shop.add(b);
  var sg = new THREE.PlaneGeometry(6.4, 3.2); sg.rotateX(-Math.PI / 2);
  var sign = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ map: M.shopSignTexture() })); sign.position.set(0, 4.56, 0); sign.rotation.y = -Math.PI / 2; shop.add(sign);
  scene.add(shop);
}

// ---------- the street: one object per house, customer and order badge ----------
function rebuildStreet() {
  var i;
  lotsRef = G.lots;
  while (world.children.length) world.remove(world.children[0]);
  lotObjs = []; obsMap.clear();
  for (i = 0; i < G.lots.length; i++) {
    var l = G.lots[i], left = l.side < 0, o = { l: l, house: null, person: null, arms: null, box: null, marker: null, wins: [] };
    var tree = l.ph > 2.6, key = 'h|' + l.roof[0] + '|' + (l.cust ? 1 : 0) + '|' + l.slot + '|' + (tree ? 1 : 0);
    o.house = mesh(cached(key, houseMaker(l, tree)));
    o.house.receiveShadow = true;
    o.house.position.set(X(left ? WALL_L : WALL_R), 0, Z(l.y0 + 105));
    if (!left) o.house.scale.x = -1;
    world.add(o.house);
    if (l.cust) {
      var c = l.c, pk = 'p|' + c.shirt + c.skin + c.hair;
      o.person = new THREE.Group();
      o.person.add(mesh(cached(pk, personMaker(c))));
      o.arms = mesh(cached('a|' + c.skin, armsMaker(c.skin)), toon, false); o.arms.position.set(0, 1.1, 0); o.person.add(o.arms);
      o.box = mesh(cached('pie', M.pizzaBoxGeo), toon, false); o.box.position.set(0.78, 1.12, 0); o.box.visible = false; o.person.add(o.box);
      o.person.scale.setScalar(1.25);
      world.add(o.person);
      o.marker = new THREE.Sprite(markerMat.order); o.marker.scale.setScalar(1.9); o.marker.renderOrder = 4;
      world.add(o.marker);
    }
    lotObjs.push(o);
  }
  finish.position.set(0, 0.03, Z(G.finishY));
  shop.position.set(X(416), 0, Z(G.finishY + 115));
}
function houseMaker(l, tree) {
  return function () {
    return M.houseGeo({ slot: l.slot, cust: l.cust, tree: tree, roof: l.roof[0], roof2: l.roof[1],
      wall: l.cust ? '#f4ead2' : '#cfcabb', door: l.cust ? '#c2262c' : '#5a4634', porch: l.cust ? '#c58d4e' : '#9d9d97', mat: l.cust ? '#ffd23f' : '#8b8b86' });
  };
}
function personMaker(c) { return function () { return M.personGeo(c.shirt, c.skin, c.hair); }; }
function armsMaker(skin) { return function () { return M.armsGeo(skin); }; }

function syncLots(t) {
  var lo = G.cam - 340, hi = G.cam + cam.ahead * UNIT + 140;
  for (var i = 0; i < lotObjs.length; i++) {
    var o = lotObjs[i], l = o.l, on = l.y0 > lo && l.y0 < hi;
    o.house.visible = on;
    for (var k = 0; k < l.wins.length; k++) {
      var w = l.wins[k];
      if (w.broken && !o.wins[k]) {
        var bm = mesh(cached('broken', M.brokenWindowGeo), toon, false);
        bm.position.set(X(l.side < 0 ? WALL_L : WALL_R) - l.side * 0.08, 1.75, Z(w.y)); world.add(bm); o.wins[k] = bm;
      }
      if (o.wins[k]) o.wins[k].visible = on;
    }
    if (!o.person) continue;
    o.person.visible = on; o.marker.visible = on;
    if (!on) continue;
    var c = l.c, hop = c.happy > 0 ? Math.abs(Math.sin(c.happy * 12)) * 0.45 : 0, porch = c.type === 'porch' ? 0.22 : 0;
    o.person.position.set(X(c.x), porch + hop, Z(c.y));
    var faceRoad = l.side < 0 ? 0 : Math.PI;
    if (l.missed) { o.person.rotation.y = faceRoad + Math.PI; o.arms.rotation.z = -1.35; o.box.visible = false; }
    else if (l.delivered) { o.person.rotation.y = faceRoad; o.arms.rotation.z = 0.05; o.box.visible = true; }
    else { o.person.rotation.y = faceRoad; o.arms.rotation.z = 0.45 + Math.sin(t * 9 + c.ph) * 0.35; o.box.visible = false; }
    var mk = l.delivered ? 'done' : l.missed ? 'missed' : 'order';
    if (o.marker.material !== markerMat[mk]) o.marker.material = markerMat[mk];
    o.marker.position.set(X(l.side < 0 ? WALL_L : WALL_R) + l.side * 1.6, 5.4 + (mk === 'order' ? Math.sin(t * 4 + l.ph) * 0.2 : 0), Z(l.doorY));
    o.marker.scale.setScalar(mk === 'order' ? 1.9 : 1.5);
  }
}

// ---------- hazards and traffic ----------
function makeObs(o) {
  var t = o.type, g = new THREE.Group(), m;
  if (t === 'can') g.add(mesh(cached('can', M.canGeo)));
  else if (t === 'hydrant') g.add(mesh(cached('hydrant', M.hydrantGeo)));
  else if (t === 'cone') g.add(mesh(cached('cone', M.coneGeo)));
  else if (t === 'pothole') g.add(mesh(cached('pothole', M.potholeGeo), toon, false));
  else if (t === 'dog') g.add(mesh(cached('dog|' + o.col, function () { return M.dogGeo(o.col); })));
  else if (t === 'carD' || t === 'carU' || t === 'dcar') {
    m = mesh(cached('car|' + o.col, function () { return M.carGeo(o.col); })); m.scale.setScalar(0.74); g.add(m);
    g.rotation.y = t === 'carD' ? Math.PI : t === 'dcar' ? (o.side < 0 ? Math.PI / 2 : -Math.PI / 2) : 0;
  } else if (t === 'skater') {
    g.add(mesh(cached('board', M.skateboardGeo)));
    m = mesh(cached('p|' + o.col + '#f2c9a0#3b2a1a', function () { return M.personGeo(o.col, '#f2c9a0', '#3b2a1a'); }));
    m.rotation.y = -Math.PI / 2; m.position.y = 0.17; m.scale.setScalar(0.95); g.add(m);
  } else if (t === 'pickup') {
    g.add(mesh(cached('pickup', M.pickupGeo)));
    var ring = new THREE.Mesh(cached('pickupRing', function () { return new THREE.RingGeometry(0.75, 0.95, 24); }), pickupRingMat);
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.04; g.add(ring); g.userData.ring = ring;
  }
  world.add(g);
  return { g: g, stamp: 0 };
}
function syncObs() {
  var lo = G.cam - 120, hi = G.cam + cam.ahead * UNIT + 160, i;
  stamp++;
  for (i = 0; i < G.obs.length; i++) {
    var o = G.obs[i];
    if (o.y < lo || o.y > hi) continue;
    var e = obsMap.get(o);
    if (!e) { e = makeObs(o); obsMap.set(o, e); }
    e.stamp = stamp;
    var g = e.g, y = 0;
    if (o.type === 'pickup') { y = 0.15 + Math.abs(Math.sin(o.t * 2.5)) * 0.25; g.rotation.y = o.t * 1.5; if (g.userData.ring) { g.userData.ring.position.y = 0.04 - y; g.userData.ring.scale.setScalar(1 + Math.sin(o.t * 5) * 0.08); } }
    else if (o.type === 'dog') { g.rotation.y = o.st === 1 ? Math.atan2(-(P.x - o.x), 30) : (o.side < 0 ? -Math.PI / 2 : Math.PI / 2); y = o.st === 1 ? Math.abs(Math.sin(o.t * 20)) * 0.12 : 0; }
    else if (o.type === 'skater') g.rotation.y = Math.PI + Math.cos(o.t * 3) * 0.2;
    g.position.set(X(o.x), y, Z(o.y));
  }
  obsMap.forEach(function (e2, key) { if (e2.stamp !== stamp) { world.remove(e2.g); obsMap.delete(key); } });
}

// ---------- everything that moves every frame ----------
function syncPlayer(t, dt) {
  var u = player.userData, show = (G.state === 'play' || G.state === 'pause') && !(G.inv > 0 && Math.floor(G.inv * 14) % 2 === 0);
  player.visible = show;
  if (!show) { u.px = P.x; return; }
  var py = G.cam + H - P.sy, vx = dt > 0 ? (P.x - u.px) / dt : 0; u.px = P.x;
  u.lean += (Math.max(-0.3, Math.min(0.3, -vx * 0.0016)) - u.lean) * Math.min(1, dt * 10);
  player.position.set(X(P.x), 0, Z(py));
  for (var i = 0; i < 4; i++) u.rides[i].visible = i === G.ride;
  var r = u.rides[G.ride];
  r.rotation.y = u.lean; r.rotation.z = G.ride < 2 ? u.lean * 0.9 : u.lean * 0.2;
  r.position.y = G.ride === 0 ? 0.06 + Math.sin(t * 7) * 0.03 : Math.abs(Math.sin(t * 13)) * 0.02;
  var arm = r.userData.arm;
  arm.visible = G.throwAnim > 0;
  if (arm.visible) arm.scale.x = G.throwDir;
  if (G.ride === 3) {
    var d = r.userData, pulse = 0.88 + 0.12 * Math.sin(t * 5);
    d.signMat.color.setScalar(pulse); d.halo.material.opacity = 0.45 * pulse; d.sign.rotation.z = -u.lean * 0.5;
    u.bulbT += dt;
    if (u.bulbT > 0.11) {
      u.bulbT = 0; u.bulbStep++;
      for (var k = 0; k < 15; k++) d.bulbs.setColorAt(k, (k + u.bulbStep) % 3 === 0 ? BULB_ON : BULB_OFF);
      d.bulbs.instanceColor.needsUpdate = true;
    }
  }
  u.spot.visible = G.shieldLeft <= 0 && G.ride < 2;
  if (u.spot.visible) u.spot.scale.setScalar(1.25);
  u.ring.visible = G.shieldLeft > 0;
  if (u.ring.visible) u.ring.scale.set(G.V.w / UNIT * 0.5 + 0.55, G.V.h / UNIT * 0.5 + 0.55, 1);
}
var BULB_ON = new THREE.Color('#fffbe0'), BULB_OFF = new THREE.Color('#ff8a1e');
var pickupRingMat = new THREE.MeshBasicMaterial({ color: '#ffd23f', transparent: true, opacity: 0.7, depthWrite: false });
var AIM = { hand: ['#ffd23f', 0.95, 1.25], door: ['#7dff8a', 0.9, 1.1], window: ['#ff5964', 0.75, 1], wall: ['#ffffff', 0.32, 0.9] };

function syncThrown(t) {
  var i, playing = G.state === 'play' || G.state === 'pause';
  for (i = 0; i < pies.length; i++) {
    var p = playing ? G.pies[i] : null, pm = pies[i];
    pm.visible = !!p;
    if (!p) continue;
    var f = Math.min(1, p.d / 185);
    pm.position.set(X(p.x), 1.15 + Math.sin(f * Math.PI) * 0.7 - f * 0.5, Z(p.y)); pm.rotation.y = p.rot;
  }
  var n = Math.min(G.decals.length, 40);
  for (i = 0; i < n; i++) { var d = G.decals[G.decals.length - n + i]; m4.makeTranslation(X(d.x), Math.abs(X(d.x)) > RDR / UNIT - W / 2 / UNIT ? 0.18 : 0.02, Z(d.y)); decals.setMatrixAt(i, m4); }
  decals.count = n; decals.instanceMatrix.needsUpdate = true;
  // aiming marks: where a pizza thrown right now would land on each side
  for (i = 0; i < 2; i++) {
    var ring = aims[i], side = i ? 1 : -1;
    if (G.state !== 'play' || G.pizzas <= 0) { ring.visible = false; continue; }
    var a = aimAt(side);
    if (a.hit === 'far') { ring.visible = false; continue; }
    var look = AIM[a.hit], pulse = a.hit === 'hand' || a.hit === 'door' ? 1 + Math.sin(t * 16) * 0.1 : 1;
    ring.visible = true;
    ring.position.set(X(a.x) - side * 0.75, 0.35, Z(a.y));
    ring.material.color.set(look[0]); ring.material.opacity = look[1]; ring.scale.setScalar(look[2] * pulse);
  }
}

// The sun follows the camera in whole shadow-map steps, so shadows never shimmer as the street scrolls.
function placeSun(cz) {
  var sc = sun.shadow.camera, texel = (sc.top - sc.bottom) / sun.shadow.mapSize.y, step = texel / 0.905;
  var z = Math.round((cz - cam.ahead / 2 + 3) / step) * step;
  sun.position.set(0, 34, z + 16); sun.target.position.set(0, 0, z); sun.target.updateMatrixWorld();
}

var lastT = 0;
export function draw3d() {
  if (!renderer || G.state === 'garage') return;
  var t = G.tGame, dt = Math.max(0, Math.min(0.1, t - lastT)); lastT = t;
  if (G.lots !== lotsRef) rebuildStreet();
  syncLots(t); syncObs(); syncPlayer(t, dt); syncThrown(t);

  var cz = -(G.cam / UNIT + cam.foot), sh = G.shake > 0 ? G.shake * 2 : 0;
  camera.position.set(vrnd(-1, 1) * 0.22 * sh, cam.h, cz + vrnd(-1, 1) * 0.22 * sh);
  camera.lookAt(camera.position.x, 0, camera.position.z - cam.g);
  ground.position.z = cz - 55;
  dashes.position.z = -Math.floor((G.cam - 160) / 70) * 3.5;
  placeSun(cz);
  renderer.render(scene, camera);
}
export function info3d() { return renderer ? { calls: renderer.info.render.calls, tris: renderer.info.render.triangles } : { calls: 0, tris: 0 }; }
