const CACHE = 'n5-v55';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './conjugate.js',
  './pos.js',
  './srs.js',
  './fonts/noto-sans-jp.woff2',
  './fonts/outfit.woff2',
  './fonts/shippori-mincho-b1.woff2',
  './data/kanji.js',
  './data/vocab.js',
  './data/grammar.js',
  './data/basics.js',
  './data/concepts.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/fuji-banner.png',
  './assets/sun.png',
  './assets/moon.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isAsset = /\.(js|css|html|json)$/.test(url.pathname) || req.mode === 'navigate';

  // Self-hosted fonts (.woff2) are precached, so they fall through to the
  // cache-first branch below and paint instantly on every load.
  if (isAsset) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(c => c || caches.match('./index.html')))
    );
  } else {
    e.respondWith(caches.match(req).then(c => c || fetch(req)));
  }
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
