/*
 * billbring legacy service-worker cleanup.
 *
 * The current website does not use offline caching.
 * This file exists only to replace/unregister any previously
 * registered service worker that may still be serving stale
 * Turbopack/Next.js chunks.
 */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      /*
       * Remove every cache created by an older version of the site.
       */
      const cacheNames = await caches.keys();

      await Promise.all(
        cacheNames.map((cacheName) =>
          caches.delete(cacheName),
        ),
      );

      /*
       * Find currently open billbring tabs.
       */
      const openClients =
        await self.clients.matchAll({
          type: "window",
          includeUncontrolled: true,
        });

      /*
       * This project no longer needs a service worker.
       */
      await self.registration.unregister();

      /*
       * Reload open pages once so they receive fresh
       * Next.js/Turbopack JavaScript.
       */
      await Promise.all(
        openClients.map(async (client) => {
          try {
            await client.navigate(client.url);
          } catch {
            // Ignore tabs that can no longer be navigated.
          }
        }),
      );
    })(),
  );
});

/*
 * Deliberately do not cache requests.
 */
self.addEventListener("fetch", () => {});