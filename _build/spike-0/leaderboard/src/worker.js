// Payton Pizza leaderboard spike: save a score, read the top ten, refuse impossible scores.
const ALLOWED = ['https://trureveal-ai.github.io', 'http://localhost:8788', 'http://127.0.0.1:8788'];
const BLOCKED = new Set(['ASS', 'FUK', 'FUC', 'SEX', 'KKK', 'FAG', 'NIG', 'CUM', 'TIT', 'DIK', 'DIC', 'COK', 'JEW', 'GAY', 'WTF', 'POO', 'PEE']);
const MAX_PER_SECOND = 400;     // no run can score faster than this
const MAX_PER_SHIFT = 60000;    // or more than this in one shift
const MIN_SECONDS_PER_SHIFT = 20;
const PER_DEVICE_PER_HOUR = 10;

function cors(req) {
  const o = req.headers.get('Origin');
  const h = { 'Vary': 'Origin' };
  if (o && ALLOWED.includes(o)) {
    h['Access-Control-Allow-Origin'] = o;
    h['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS';
    h['Access-Control-Allow-Headers'] = 'Content-Type';
  }
  return h;
}
const json = (req, status, body) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...cors(req) } });

export function check(b) {
  if (!b || typeof b !== 'object') return 'bad body';
  const { initials, score, shifts, seconds, device } = b;
  if (typeof initials !== 'string' || !/^[A-Z]{3}$/.test(initials)) return 'initials must be three letters A-Z';
  if (BLOCKED.has(initials)) return 'those initials are not allowed';
  for (const n of [score, shifts, seconds]) if (!Number.isInteger(n) || n < 0) return 'numbers must be whole and not negative';
  if (typeof device !== 'string' || !/^[a-z0-9-]{8,64}$/.test(device)) return 'bad device id';
  if (shifts < 1 || shifts > 500) return 'bad shift count';
  if (seconds < shifts * MIN_SECONDS_PER_SHIFT) return 'run was too short for that many shifts';
  if (score > seconds * MAX_PER_SECOND) return 'score is higher than the game can produce in that time';
  if (score > shifts * MAX_PER_SHIFT) return 'score is higher than the game can produce in that many shifts';
  return null;
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(req) });
    if (req.method === 'GET' && url.pathname === '/top') {
      const { results } = await env.DB.prepare('SELECT initials, score, shifts, created_at FROM scores ORDER BY score DESC, created_at ASC LIMIT 10').all();
      return json(req, 200, { top: results });
    }
    if (req.method === 'POST' && url.pathname === '/scores') {
      let b; try { b = await req.json(); } catch { return json(req, 400, { error: 'bad json' }); }
      const why = check(b);
      if (why) return json(req, 422, { error: why });
      const now = Date.now();
      const recent = await env.DB.prepare('SELECT COUNT(*) AS n FROM scores WHERE device = ? AND created_at > ?').bind(b.device, now - 3600000).first();
      if (recent.n >= PER_DEVICE_PER_HOUR) return json(req, 429, { error: 'too many scores from this device, try later' });
      await env.DB.prepare('INSERT INTO scores (initials, score, shifts, seconds, device, created_at) VALUES (?,?,?,?,?,?)').bind(b.initials, b.score, b.shifts, b.seconds, b.device, now).run();
      const rank = await env.DB.prepare('SELECT COUNT(*) AS n FROM scores WHERE score > ?').bind(b.score).first();
      return json(req, 201, { ok: true, rank: rank.n + 1 });
    }
    return json(req, 404, { error: 'not found' });
  }
};
