// public/sw.js

const CACHE_NAME = "version-1";

// Definimos las rutas reales de tu aplicación Next.js
const urlsToCache = [
  "/", // Página principal (Código Secreto)
  "/memoria", // Página Hackeo de Memoria
  "/manifest.json", // Manifest de la PWA
];

// Instalar el Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cacheando rutas de la app...");

      // addAll fallará si alguna ruta devuelve 404
      return cache.addAll(urlsToCache);
    })
  );
});

// Escuchar peticiones para servir desde el caché (Modo Offline)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si el archivo está en caché, lo devuelve.
      // Si no, lo busca en internet.
      return response || fetch(event.request);
    })
  );
});

// Limpiar cachés antiguos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});