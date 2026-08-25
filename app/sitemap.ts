import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.billbring.com";
  const staticRoutes = ["", "/products", "/solutions", "/developers", "/company", "/pricing", "/support", "/partner"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : .7 })),
    ...products.map((product) => ({ url: `${base}/products/${product.slug}`, changeFrequency: "monthly" as const, priority: .8 })),
  ];
}
