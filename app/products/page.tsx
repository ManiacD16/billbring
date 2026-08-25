import type { Metadata } from "next";
import { ProductGrid } from "@/components/sections/product-grid";
import { InternalHero } from "@/components/ui/internal-hero";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore all 19 BillBring products and financial service capabilities in one connected platform.",
};

export default function ProductsPage() {
  return (
    <>
      <InternalHero
        eyebrow="Products"
        title={<>19 capabilities. <span className="text-brand-500">One connected platform.</span></>}
        copy="Explore the complete BillBring product and service portfolio for payments, collections, payouts, remittance, assisted banking, transfers, POS, wallet, travel, insurance and loans."
        cta={false}
      />
      <ProductGrid compact />
      <FinalCta />
    </>
  );
}
