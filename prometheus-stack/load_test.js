import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const res = http.get('http://54.242.230.19/nginx_status');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  sleep(1);
}
