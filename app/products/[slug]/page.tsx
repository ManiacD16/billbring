import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import { getProductDetail } from "@/data/product-details";
import { getProductImage } from "@/data/product-images";
import { ButtonLink } from "@/components/ui/button-link";
import { FinalCta } from "@/components/sections/final-cta";
import { ProductDetails } from "@/components/sections/product-details";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};

  const detail = getProductDetail(slug);

  return {
    title: `${product.name} — ${product.category}`,
    description: detail?.overview[0] ?? product.blurb,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const detail = getProductDetail(slug);
  if (!detail) notFound();

  const Icon = product.icon;
  const productIndex = products.findIndex((item) => item.slug === slug);
  const productImage = getProductImage(slug);
  const relatedProducts = products.filter((item) => item.group === product.group && item.slug !== product.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-[#f7fbf9] py-14 dark:border-white/[.08] dark:bg-[#05090d] sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(18,175,124,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(18,175,124,.05)_1px,transparent_1px)] [background-size:52px_52px] dark:opacity-20" />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-500/[.13] blur-[120px]" />

        <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-14">
          <div data-reveal="left">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/[.07] px-3.5 py-2 text-[10px] font-black uppercase tracking-[.15em] text-brand-700 dark:text-brand-300"><Icon className="h-3.5 w-3.5" /> {product.category}</span>
              <span className="text-[9px] font-black uppercase tracking-[.15em] text-slate-400">Product {String(productIndex + 1).padStart(2, "0")} / {products.length}</span>
            </div>

            <h1 className="mt-6 max-w-[11ch] font-display text-[clamp(3.2rem,6.6vw,6.8rem)] font-semibold leading-[.89] tracking-[-.07em] text-ink-950 dark:text-white text-balance">{product.name}</h1>
            <p className="mt-3 text-[11px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">{product.group}</p>
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-slate-600 dark:text-slate-300 sm:text-[18px]">{product.blurb}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/partner">Become a Partner</ButtonLink>
              <ButtonLink href="/resources#api-documentation" variant="secondary">Explore API Documentation</ButtonLink>
            </div>
          </div>

          <div data-reveal="right" className="relative">
            <div className="absolute -inset-5 rounded-[2.25rem] bg-brand-500/[.08] blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-3 shadow-[0_34px_90px_-52px_rgba(8,18,37,.55)] dark:border-white/[.10] dark:bg-[#0b1118] sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-slate-100 dark:bg-black">
                <Image src={productImage} alt={`${product.name} by billbring`} fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-contain" />
              </div>
              <div className="flex items-center gap-3 px-2 pb-2 pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/[.10] text-brand-700 dark:text-brand-300"><CheckCircle2 className="h-4 w-4" /></span>
                <div><p className="text-[9px] font-black uppercase tracking-[.15em] text-slate-400">billbring product</p><p className="mt-1 text-sm font-black text-ink-950 dark:text-white">{product.category}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductDetails product={product} detail={detail} />

      {relatedProducts.length > 0 && (
        <section className="section-transition py-20 sm:py-28">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">{product.group}</p>
              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4.2rem)] font-black leading-[.98] tracking-[-.055em]">Explore related billbring products.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => {
                const RelatedIcon = item.icon;
                return (
                  <Link key={item.slug} href={`/products/${item.slug}`} className="group rounded-[24px] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 dark:border-white/[.09] dark:bg-[#0b1118]">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300"><RelatedIcon className="h-5 w-5" /></span>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-brand-500" />
                    </div>
                    <h3 className="mt-6 text-xl font-black tracking-[-.035em]">{item.name}</h3>
                    <p className="mt-2 text-[10px] font-black uppercase tracking-[.13em] text-brand-600 dark:text-brand-300">{item.category}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.blurb}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}
