import type { Metadata } from "next";
import { ProductGrid } from "@/components/sections/product-grid";
import { InternalHero } from "@/components/ui/internal-hero";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore billbring payment, money movement, banking, financial inclusion and business service products.",
};

export default function ProductsPage() {
  return (
    <>
      <InternalHero
        eyebrow="Products"
        title={<>Payments and financial services in <span className="text-brand-500">one connected ecosystem.</span></>}
        copy="billbring brings payments, banking services and digital financial solutions together for retailers, distributors, merchants and growing businesses."
        image="/images/home/12.png"
        imageAlt="billbring payment and financial services ecosystem"
        points={["Collections & Payments", "Move Money", "Financial Services"]}
        cta={false}
      />
      <ProductGrid compact />
      <FinalCta />
    </>
  );
}
