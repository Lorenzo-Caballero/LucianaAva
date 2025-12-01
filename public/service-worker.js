const CACHE_NAME = "video-cache-v2";
const VIDEO_URL = "/teatro-video.mp4";

// Instalar SW y pre-descargar el video
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.add(VIDEO_URL);
    })
  );

  self.skipWaiting(); // Activar inmediatamente
});

// Activación: borra caches viejos
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Interceptar requests y servir desde cache
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Controla solo el video
  if (url.pathname === VIDEO_URL) {
    event.respondWith(
      caches.match(VIDEO_URL).then(cached => {
        if (cached) {
          return cached; // Usa el video ya guardado
        }

        // Si no está cacheado, descargar y guardar
        return fetch(event.request).then(response => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(VIDEO_URL, response.clone());
            return response;
          });
        });
      })
    );
  }
});
