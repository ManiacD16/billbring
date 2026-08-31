import type { Metadata } from "next";
import Image from "next/image";
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
        image="/images/home/12.png"
        imageAlt="BillBring connected payment and financial services platform"
        points={["Payments & collections", "Money movement", "Financial services"]}
        cta={false}
      />
      <ProductGrid compact />

      <section className="border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          {[
            { image: "/images/home/26.png", title: "Snap, track and save", copy: "Bring capture, visibility and action together in a business-friendly operating flow." },
            { image: "/images/home/27.png", title: "From receipts to automation", copy: "Use structured financial data to reduce manual work around everyday business operations." },
          ].map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white dark:border-white/[.09] dark:bg-[#0b1118]">
              <div className="relative aspect-[16/9]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
              <div className="p-6 sm:p-7"><p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">Business automation</p><h2 className="mt-3 text-2xl font-black tracking-[-.04em]">{item.title}</h2><p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
