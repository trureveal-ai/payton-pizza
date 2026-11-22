import hashlib, sys
from playwright.sync_api import sync_playwright
URL='file:///home/claude/payton-pizza/index.html'
INIT = """
(() => {
  let s = %d >>> 0;
  Math.random = function(){ s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  let now = 0, cbs = [];
  window.requestAnimationFrame = cb => { cbs.push(cb); return cbs.length; };
  performance.now = () => now;
  window.__step = n => { for (let i = 0; i < n; i++) { now += 1000/60; const c = cbs; cbs = []; for (const f of c) f(now); } };
  document.hasFocus = () => true;
})();
"""
# recorded inputs: (frame, action, key)
SCRIPT=[(40,'press','Enter')]
keys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown']
f=200;i=0
while f<2300:
    k=keys[(i*7+3)%4]
    SCRIPT.append((f,'down',k)); SCRIPT.append((f+25+(i%3)*10,'up',k))
    SCRIPT.append((f+12,'press','KeyZ' if i%2 else 'KeyX'))
    f+=70;i+=1
SCRIPT.sort(key=lambda x:x[0])
def run(seed):
    with sync_playwright() as p:
        b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
        pg=b.new_page(viewport={'width':480,'height':800},device_scale_factor=1)
        errs=[]
        pg.on('pageerror',lambda e: errs.append(str(e)))
        pg.add_init_script(INIT % seed)
        pg.goto(URL)
        frame=0
        for (at,act,key) in SCRIPT:
            if at>frame: pg.evaluate("n=>window.__step(n)",at-frame); frame=at
            if act=='press': pg.keyboard.press(key)
            elif act=='down': pg.keyboard.down(key)
            else: pg.keyboard.up(key)
        pg.evaluate("n=>window.__step(n)",2400-frame)
        data=pg.evaluate("document.getElementById('g').toDataURL()")
        pg.screenshot(path=f'final-{seed}-{run.n}.png'); run.n+=1
        b.close()
        return hashlib.sha256(data.encode()).hexdigest()[:16], errs
run.n=0
a=run(12345); b=run(12345); c=run(999)
print('seed 12345 run 1:',a); print('seed 12345 run 2:',b); print('seed 999:',c)
print('S4-a', 'PASS' if a[0]==b[0] and not a[1] else 'FAIL'); print('S4-b','PASS' if a[0]!=c[0] else 'FAIL')
