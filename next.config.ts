import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  async headers() {
    return [
      /*
       * Never allow an old service-worker cleanup script
       * to remain cached.
       */
      {
        source: "/sw.js",

        headers: [
          {
            key: "Cache-Control",
            value:
              "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
          {
            key: "Service-Worker-Allowed",
            value: "/",
          },
        ],
      },

      /*
       * HTML must always be allowed to receive the latest
       * server-rendered application shell.
       */
      {
        source: "/",

        headers: [
          {
            key: "Cache-Control",
            value:
              "no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;