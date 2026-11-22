import subprocess, time, sys
from playwright.sync_api import sync_playwright
srv = subprocess.Popen([sys.executable, '-m', 'http.server', '8788', '--directory', '/home/claude/spike0/site'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
U = 'http://localhost:8788/spike-0/'
try:
    with sync_playwright() as p:
        import tempfile
        ctx = p.chromium.launch_persistent_context(tempfile.mkdtemp(), executable_path='/usr/bin/google-chrome', args=['--no-sandbox'], viewport={'width': 390, 'height': 800})
        b = ctx
        pg = ctx.new_page(); errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto(U); pg.wait_for_function("window.__swReady===true", timeout=15000)
        pg.reload(); pg.wait_for_timeout(500)
        ctrl = pg.evaluate("!!navigator.serviceWorker.controller")
        print('S3-a', 'PASS' if ctrl else 'FAIL', 'service worker registered and controls the page:', ctrl)
        cdp = ctx.new_cdp_session(pg)
        inst = cdp.send('Page.getInstallabilityErrors')
        print('S3-c', 'PASS' if not inst.get('installabilityErrors') else 'FAIL', 'installability errors:', inst.get('installabilityErrors'))
        srv.terminate(); srv.wait()   # the web server is now gone: only the offline copy can answer
        ctx.set_offline(True)
        pg.reload(); pg.wait_for_timeout(600)
        t = pg.title(); ok = pg.inner_text('#sw')
        print('S3-b', 'PASS' if 'Phase 0' in t and 'ready' in ok else 'FAIL', 'reload with the server stopped: title=%r, offline copy=%r' % (t, ok))
        pg.click('#beep'); pg.wait_for_timeout(200); print('sound button:', pg.inner_text('#snd'))
        pg.screenshot(path='/home/claude/spike0/spike3.png', full_page=True)
        print('page errors:', errs)
        b.close()
finally:
    srv.terminate()
