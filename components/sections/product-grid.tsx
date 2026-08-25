"use client";

import { LayoutGrid, Pause, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import { products, productGroups } from "@/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";

const layoutSpans = [4,2,2,2,2,3,3,2,4,2,2,2,4,2,2,2,2,3,3] as const;

export function ProductGrid({ compact = false }: { compact?: boolean }) {
  const [paused, setPaused] = useState(false);
  return (
    <section id="products" className={compact ? "section-transition relative overflow-hidden pb-28 pt-4 sm:pb-36 lg:pb-40" : "section-transition relative overflow-hidden py-28 sm:py-36 lg:py-40"}>
      <div className="pointer-events-none absolute inset-x-0 top-[12%] -z-10 h-[620px] bg-[radial-gradient(circle_at_50%_20%,rgba(18,175,124,.08),transparent_60%)]" />
      <div className="section-shell">
        {!compact ? (
          <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_.85fr]">
            <SectionHeading
              eyebrow="Our products"
              title={<>19 capabilities. <span className="text-brand-500">One connected platform.</span></>}
              copy="Collect, move, manage and extend money through a product system designed to feel coherent from the first transaction to the last reconciliation."
            />
            <div data-reveal="right" className="lg:justify-self-end">
              <div className="premium-surface max-w-xl rounded-[26px] p-4 sm:p-5">
                <div className="relative flex items-center gap-3">
                  <span className="icon-tile h-10 w-10 text-brand-700 dark:text-brand-300"><LayoutGrid className="h-4 w-4" /></span>
                  <div><p className="text-[10px] font-black uppercase tracking-[.15em] text-slate-400">Platform map</p><p className="mt-1 text-sm font-bold">4 operating layers · 19 products & services</p></div>
                </div>
                <div className="relative mt-4 flex flex-wrap gap-2">{productGroups.map((group) => <span key={group} className="rounded-full border border-slate-200 bg-white/[.65] px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-slate-300">{group}</span>)}</div>
              </div>
            </div>
          </div>
        ) : (
          <div data-reveal className="premium-surface flex flex-col gap-4 rounded-[26px] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="relative flex items-center gap-3"><span className="icon-tile h-10 w-10 text-brand-700 dark:text-brand-300"><LayoutGrid className="h-4 w-4" /></span><div><p className="text-[10px] font-black uppercase tracking-[.15em] text-slate-400">Browse portfolio</p><p className="mt-1 text-sm font-bold">19 standalone products & capabilities</p></div></div>
            <div className="relative flex flex-wrap gap-2">{productGroups.map((group) => <span key={group} className="rounded-full border border-slate-200 bg-white/[.65] px-3 py-1.5 text-[10px] font-bold text-slate-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-slate-300">{group}</span>)}</div>
          </div>
        )}

        <div className={compact ? "mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-6" : "mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-6"} data-reveal-stagger>
          {products.map((product, index) => {
            const span = layoutSpans[index] ?? 2;
            const spanClass = span === 4 ? "xl:col-span-4" : span === 3 ? "xl:col-span-3" : "xl:col-span-2";
            return <div key={product.slug} className={spanClass}><ProductCard product={product} index={index} featured={span >= 3} /></div>;
          })}
        </div>

        {!compact && <div data-reveal className="group/marquee marquee-wrap marquee-mask mt-12 flex items-center gap-4 overflow-hidden border-y border-slate-200/[.70] py-4 dark:border-white/[.10]">
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className="relative z-10 ml-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-brand-500/[.35] hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-white/[.10] dark:bg-ink-900 dark:text-slate-300"
            aria-label={paused ? "Resume product ticker" : "Pause product ticker"}
            aria-pressed={paused}
          >
            {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
          <div className="min-w-0 flex-1 overflow-hidden">
            <div aria-hidden="true" className="animate-marquee flex w-max items-center gap-7 pr-7" style={{ animationPlayState: paused ? "paused" : "running" }}>
              {[...products, ...products].map((product, index) => (
                <div key={`${product.slug}-${index}`} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[.15em] text-slate-400">
                  <Sparkles className="h-3.5 w-3.5 text-brand-500" /> {product.name}
                </div>
              ))}
            </div>
          </div>
        </div>}
      </div>
    </section>
  );
}
