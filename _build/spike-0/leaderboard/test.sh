#!/bin/bash
# Runs the Worker locally (no Cloudflare account needed) and checks the pass lines.
set -u
cd "$(dirname "$0")"
pkill -f workerd 2>/dev/null; rm -rf .wrangler
npx wrangler d1 execute pp-boards-spike --local --file=schema.sql >/dev/null 2>&1 || { echo "schema failed"; exit 1; }
npx wrangler dev --local --port 8787 > /tmp/wrangler-dev.log 2>&1 &
PID=$!
for i in $(seq 1 60); do curl -s -m 10 -o /dev/null http://127.0.0.1:8787/top && break; sleep 1; done
U=http://127.0.0.1:8787
post(){ curl -s -m 10 -o /tmp/out.json -w '%{http_code}' -X POST $U/scores -H 'Content-Type: application/json' -d "$1"; }
count(){ curl -s -m 10 $U/top | python3 -c "import json,sys;print(len(json.load(sys.stdin)['top']))"; }
ok=1; say(){ echo "$1 $2 ($3)"; [ "$2" = PASS ] || ok=0; }
c=$(post '{"initials":"CAM","score":7070,"shifts":1,"seconds":42,"device":"device-aaaa-0001"}')
[ "$c" = 201 ] && [ "$(count)" = 1 ] && say S2-a PASS "valid score saved, http $c" || say S2-a FAIL "http $c"
for i in $(seq 1 11); do post "{\"initials\":\"PZ$(printf "\\$(printf %o $((64+i)))")\",\"score\":$((1000*i)),\"shifts\":2,\"seconds\":90,\"device\":\"device-bbbb-00$(printf %02d $i)\"}" >/dev/null; done
top=$(curl -s -m 10 $U/top | python3 -c "import json,sys;t=[r['score'] for r in json.load(sys.stdin)['top']];print(len(t), t==sorted(t,reverse=True), t[0], t[-1])")
[ "$top" = "10 True 11000 3000" ] && say S2-b PASS "12 stored, top ten returned highest first: $top" || say S2-b FAIL "$top"
before=$(curl -s -m 10 $U/top | md5sum)
c1=$(post '{"initials":"HAX","score":9999999,"shifts":1,"seconds":30,"device":"device-cccc-0001"}')
c2=$(post '{"initials":"a1!","score":100,"shifts":1,"seconds":30,"device":"device-cccc-0002"}')
c3=$(post '{"initials":"ASS","score":100,"shifts":1,"seconds":30,"device":"device-cccc-0003"}')
after=$(curl -s -m 10 $U/top | md5sum)
for i in $(seq 1 9); do post '{"initials":"CAM","score":50,"shifts":1,"seconds":42,"device":"device-aaaa-0001"}' >/dev/null; done
c4=$(post '{"initials":"CAM","score":50,"shifts":1,"seconds":42,"device":"device-aaaa-0001"}')
[ "$c1" = 422 ] && [ "$c2" = 422 ] && [ "$c3" = 422 ] && [ "$before" = "$after" ] && [ "$c4" = 429 ] && say S2-c PASS "impossible $c1, bad initials $c2, blocked initials $c3, board unchanged, 11th from one device $c4" || say S2-c FAIL "$c1 $c2 $c3 $c4"
g=$(curl -s -m 10 -D - -o /dev/null -X OPTIONS $U/scores -H 'Origin: https://trureveal-ai.github.io' -H 'Access-Control-Request-Method: POST' | grep -i -c 'access-control-allow-origin: https://trureveal-ai.github.io')
b=$(curl -s -m 10 -D - -o /dev/null -X OPTIONS $U/scores -H 'Origin: https://evil.example' -H 'Access-Control-Request-Method: POST' | grep -i -c 'access-control-allow-origin')
[ "$g" = 1 ] && [ "$b" = 0 ] && say S2-d PASS "github.io origin allowed, other origin not" || say S2-d FAIL "$g $b"
pkill -f "wrangler dev" 2>/dev/null; pkill -f workerd 2>/dev/null
[ $ok = 1 ] && echo "ALL LOCAL CHECKS PASS" || echo "SOME CHECKS FAILED"
