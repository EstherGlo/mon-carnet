/* ============================================================
   Service Worker — Cache pour fonctionnement hors-ligne
   ============================================================ */

const CACHE_NAME = "carnet-esther-v1";
const FICHIERS_A_CACHER = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

/* Installation : mise en cache des fichiers */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FICHIERS_A_CACHER);
    })
  );
  self.skipWaiting();
});

/* Activation : nettoyage des anciens caches */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

/* Interception des requêtes : on sert depuis le cache si possible */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});