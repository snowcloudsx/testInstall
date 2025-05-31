self.addEventListener("install", (e) => {
  console.log("Service Worker installed");
  e.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./main.js",
        "./manifest.json",
        "./settings_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"

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
