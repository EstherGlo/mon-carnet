/* ============================================================
   Service Worker — Cache pour fonctionnement hors-ligne
   Version : v8 (mise à jour auto)
   ============================================================ */

const CACHE_NAME = "carnet-esther-v8";

const FICHIERS_A_CACHER = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icon.svg",
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
  // Force le nouveau SW à prendre le relais immédiatement
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

/* Interception des requêtes :
   - On essaie d'abord le RÉSEAU (pour avoir la dernière version)
   - Si pas de réseau, on sert le CACHE
*/
self.addEventListener("fetch", (event) => {
  // Ne pas intercepter les requêtes non-GET
  if (event.request.method !== "GET") return;
    // Ne pas intercepter les requêtes OneSignal (laisser OneSignal gérer)
  if (event.request.url.includes("/onesignal/")) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Met à jour le cache avec la nouvelle version
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Pas de réseau → on sert depuis le cache
        return caches.match(event.request);
      })
  );
});