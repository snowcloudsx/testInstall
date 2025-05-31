self.addEventListener("install", (e) => {
  console.log("Service Worker installed");
  e.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./main.js",
        "./manifest.json",
        "./icons/icon-192x192.png",
        "./icons/icon-512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
