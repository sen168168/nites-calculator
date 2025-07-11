self.addEventListener("install", () => {
  console.log("Service Worker installed");
});


const CACHE_NAME = "nites-calculator-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/calculator.js",
  "/manifest.json",
  "web-app-manifest-192x192.png",
  "web-app-manifest-512x512.png"
];

// Install service worker and cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

// Serve cached content when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
