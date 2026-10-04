/// <reference lib="webworker" />
const CACHE_NAME = 'gen-alpha-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
];

const sw = self;

sw.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  void sw.skipWaiting();
});

sw.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  void sw.clients.claim();
});

sw.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET and API/WebSocket requests so a missing server cannot stall the app shell.
  if (request.method !== 'GET' || request.url.includes('/auth') || request.url.includes('/game') || request.url.includes('/chat') || request.url.includes('/progress') || request.url.includes('socket.io')) {
    return;
  }

  const url = new URL(request.url);
  const networkFirst = request.mode === 'navigate' || url.pathname.endsWith('.js') || url.pathname.endsWith('.html') || url.pathname.endsWith('.css');

  if (networkFirst) {
    event.respondWith(
      fetch(request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          void caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      }).catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          void caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      });
      return cached ?? fetchPromise;
    })
  );
});
