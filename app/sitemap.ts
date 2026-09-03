import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.billbring.com";
  const staticRoutes = ["", "/products", "/solutions", "/partner", "/company", "/resources", "/support", "/login"];

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...products.map((product) => ({ url: `${baseUrl}/products/${product.slug}`, lastModified: new Date() })),
  ];
}
