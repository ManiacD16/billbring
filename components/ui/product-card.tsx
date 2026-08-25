"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { MouseEvent } from "react";
import type { Product } from "@/data/products";
import { ProductVisual } from "@/components/ui/product-visual";
import { cn } from "@/lib/cn";

export function ProductCard({ product, index, featured = false }: { product: Product; index: number; featured?: boolean }) {
  const reduced = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const rotateXRaw = useTransform(my, [0, 100], [2.2, -2.2]);
  const rotateYRaw = useTransform(mx, [0, 100], [-2.2, 2.2]);
  const rotateX = useSpring(rotateXRaw, { stiffness: 150, damping: 24 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 150, damping: 24 });
  const Icon = product.icon;

  const move = (event: MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set(((event.clientX - rect.left) / rect.width) * 100);
    my.set(((event.clientY - rect.top) / rect.height) * 100);
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <motion.article
      onMouseMove={move}
      onMouseLeave={() => { mx.set(50); my.set(50); }}
      style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
      className={cn(
        "card-sheen group relative min-h-[360px] overflow-hidden rounded-[32px] border border-slate-200/[.80] bg-white p-6 shadow-card transition-[box-shadow,border-color] duration-500 hover:border-brand-500/[.25] hover:shadow-lift dark:border-white/[.10] dark:bg-ink-900/[.65]",
        featured && "min-h-[408px]",
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[.00] transition-opacity duration-500 group-hover:opacity-[1]" style={{ background: "radial-gradient(400px circle at var(--spot-x, 72%) var(--spot-y, 28%), rgba(18,175,124,.115), transparent 58%)" }} />
      <ProductVisual product={product} large={featured} />
      <div className="relative z-10 flex h-full max-w-[82%] flex-col sm:max-w-[72%]">
        <div className="flex items-center gap-3">
          <span className="icon-tile h-11 w-11 text-brand-600 transition duration-500 group-hover:-rotate-3 group-hover:scale-105 dark:text-brand-300"><Icon className={cn("h-5 w-5", product.accent)} /></span>
          <span className="text-[10px] font-black uppercase tracking-[.2em] text-slate-400">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className={cn("mt-8 max-w-[16ch] font-black leading-[1.01] tracking-[-.05em] text-ink-950 dark:text-white", featured ? "text-[30px] sm:text-[36px]" : "text-[26px] sm:text-[28px]")}>{product.name}</h3>
        <p className="mt-2 text-[10px] font-black uppercase tracking-[.12em] text-slate-400">{product.category}</p>
        <p className="mt-5 line-clamp-3 max-w-[39ch] text-sm leading-6 text-slate-600 dark:text-slate-300">{product.blurb}</p>
        <Link href={`/products/${product.slug}`} aria-label={`Explore ${product.name}`} className="mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-black text-ink-950 outline-none dark:text-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4">
          <span className="link-underline">Explore product</span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500/[.10] text-brand-700 transition duration-500 group-hover:rotate-12 group-hover:bg-brand-600 group-hover:text-white dark:text-brand-300"><ArrowUpRight className="h-3.5 w-3.5" /></span>
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-cyan-400 to-transparent transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />
    </motion.article>
  );
}
