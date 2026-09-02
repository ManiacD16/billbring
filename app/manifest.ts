import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "billbring",
    short_name: "billbring",
    description: "Bringing bills and payments together, seamlessly.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f5ef",
    theme_color: "#12AF7C",
    icons: [{ src: "/brand/billbring-mark.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
