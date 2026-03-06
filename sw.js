const CACHE_NAME = 'core-system-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method === 'POST') return;
  event.respondWith(
    caches.match(event.request)
      .then(response => {
         return response || fetch(event.request);
      })
  );
});
