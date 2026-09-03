"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { getProductImage } from "@/data/product-images";

export function ProductCard({ product, index, featured = false }: { product: Product; index: number; featured?: boolean }) {
  const Icon = product.icon;
  const image = getProductImage(product.slug);

  return (
    <article className={`group relative h-full overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_24px_70px_-50px_rgba(8,18,37,.5)] transition duration-500 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-[0_32px_82px_-48px_rgba(8,18,37,.55)] dark:border-white/[.09] dark:bg-[#0b1118] ${featured ? "min-h-[500px]" : "min-h-[450px]"}`}>
      <div className={`relative overflow-hidden bg-slate-100 dark:bg-black ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <Image src={image} alt={`${product.name} by billbring`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-contain transition duration-700 group-hover:scale-[1.025]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.14em] text-white backdrop-blur-md">{String(index + 1).padStart(2, "0")} · {product.group}</span>
      </div>

      <div className="flex min-h-[220px] flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300"><Icon className={`h-5 w-5 ${product.accent}`} /></span>
          <span className="text-right text-[9px] font-black uppercase tracking-[.13em] text-slate-400">{product.category}</span>
        </div>
        <h3 className="mt-6 text-[26px] font-black leading-[1.02] tracking-[-.045em] text-ink-950 dark:text-white">{product.name}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{product.blurb}</p>
        <Link href={`/products/${product.slug}`} aria-label={`Explore ${product.name}`} className="mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-black text-ink-950 dark:text-white">
          Explore product <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500/[.10] text-brand-700 transition duration-300 group-hover:bg-brand-600 group-hover:text-white dark:text-brand-300"><ArrowUpRight className="h-3.5 w-3.5" /></span>
        </Link>
      </div>
    </article>
  );
}
