"use client";

import { useEffect } from "react";

const CLEANUP_VERSION =
  "billbring-sw-cleanup-v1";

export function ServiceWorkerCleanup() {
  useEffect(() => {
    let cancelled = false;

    async function cleanup() {
      try {
        /*
         * -------------------------------------------------------
         * REMOVE LEGACY SERVICE WORKERS
         * -------------------------------------------------------
         */
        if ("serviceWorker" in navigator) {
          const registrations =
            await navigator.serviceWorker.getRegistrations();

          await Promise.all(
            registrations.map(
              (registration) =>
                registration.unregister(),
            ),
          );
        }

        /*
         * -------------------------------------------------------
         * REMOVE LEGACY CACHE STORAGE
         * -------------------------------------------------------
         */
        if ("caches" in window) {
          const cacheNames =
            await window.caches.keys();

          await Promise.all(
            cacheNames.map((cacheName) =>
              window.caches.delete(cacheName),
            ),
          );
        }

        if (cancelled) return;

        /*
         * If an old service worker still controls this exact page,
         * reload once after unregistering it.
         */
        if (
          "serviceWorker" in navigator &&
          navigator.serviceWorker.controller &&
          sessionStorage.getItem(
            CLEANUP_VERSION,
          ) !== "done"
        ) {
          sessionStorage.setItem(
            CLEANUP_VERSION,
            "done",
          );

          window.location.reload();
          return;
        }

        sessionStorage.setItem(
          CLEANUP_VERSION,
          "done",
        );
      } catch (error) {
        console.warn(
          "Legacy service worker cleanup failed:",
          error,
        );
      }
    }

    void cleanup();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}