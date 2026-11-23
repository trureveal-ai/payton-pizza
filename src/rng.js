// Seeded random numbers for the game rules. The same seed always gives the same street
// and the same traffic, which is what makes shared leaderboards fair and replays testable.
var s = 1;
export function seed(n) { s = (n >>> 0) || 1; }
export function rand() { // mulberry32
  s = (s + 0x6D2B79F5) >>> 0;
  var t = s;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
// Every player gets the same street for a given day of the game.
export var STREET_SET = 20261123;
export function shiftSeed(day) {
  var h = (STREET_SET ^ Math.imul(day + 1, 0x9E3779B1)) >>> 0;
  h = Math.imul(h ^ (h >>> 16), 0x85EBCA6B) >>> 0;
  h = Math.imul(h ^ (h >>> 13), 0xC2B2AE35) >>> 0;
  return (h ^ (h >>> 16)) >>> 0 || 1;
}
