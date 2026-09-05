import Image from "next/image";
import { ArrowUpRight, Images, Sparkles } from "lucide-react";
import type { Product } from "@/data/products";
import { getProductDetail } from "@/data/product-details";

type ProductMediaGalleryProps = {
  product: Product;
  images: string[];
};

function getCardClass(index: number, total: number) {
  if (total === 1) {
    return "md:col-span-2 lg:col-span-12 aspect-[16/10] sm:aspect-[16/8] lg:aspect-[16/7]";
  }

  if (index === 0) {
    return "md:col-span-2 lg:col-span-8 aspect-[16/11] lg:aspect-[16/10]";
  }

  if (index === 1) {
    return "lg:col-span-4 aspect-[4/3] lg:aspect-[4/5]";
  }

  if (total === 3) {
    return "md:col-span-2 lg:col-span-12 aspect-[16/9] lg:aspect-[16/6]";
  }

  if (total === 4 && index >= 2) {
    return "md:col-span-1 lg:col-span-6 aspect-[16/10]";
  }

  if (total > 5 && index === 5) {
    return "md:col-span-2 lg:col-span-12 aspect-[16/9] lg:aspect-[16/6]";
  }

  return "md:col-span-1 lg:col-span-4 aspect-[4/3]";
}

export function ProductMediaGallery({ product, images }: ProductMediaGalleryProps) {
  const detail = getProductDetail(product.slug);

  if (images.length === 0 || !detail) return null;

  return (
    <section className="section-transition product-media-section relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="product-media-art pointer-events-none absolute inset-0" />

      <div className="section-shell relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white/75 px-3.5 py-2 text-[10px] font-black uppercase tracking-[.16em] text-brand-700 shadow-sm backdrop-blur dark:bg-[#07110d]/75 dark:text-brand-300">
              <Images className="h-3.5 w-3.5" /> Product in action
            </div>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,4.3vw,4.7rem)] font-semibold leading-[.95] tracking-[-.058em] text-ink-950 dark:text-white text-balance">
              {detail.overviewTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-[1.02rem]">
              {detail.capabilitiesIntro}
            </p>
          </div>

          <div className="hidden items-center gap-2 pb-2 text-[10px] font-black uppercase tracking-[.15em] text-slate-400 lg:flex">
            <Sparkles className="h-3.5 w-3.5 text-brand-500" /> Real use-case visuals
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {images.map((src, index) => {
            const capability = detail.capabilities[index % detail.capabilities.length];
            const useCase = detail.useCases[index % detail.useCases.length];
            const isFeatured = index === 0;

            return (
              <figure
                key={src}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                className={`group/product-shot product-shot-card card-sheen relative isolate overflow-hidden rounded-[30px] border border-slate-200/80 bg-[#eaf3ee] shadow-[0_28px_80px_-50px_rgba(8,18,37,.45)] dark:border-white/[.09] dark:bg-[#07110d] ${getCardClass(index, images.length)}`}
              >
                <Image
                  src={src}
                  alt={`${product.name} — ${useCase}`}
                  fill
                  sizes={isFeatured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                  className="object-cover transition duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover/product-shot:scale-[1.055]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[.72] via-black/[.15] to-black/[.05]" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover/product-shot:opacity-100 [background:radial-gradient(circle_at_72%_20%,rgba(255,255,255,.20),transparent_28%)]" />
                <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-brand-300 via-brand-500 to-transparent transition-transform duration-700 group-hover/product-shot:scale-y-100" />

                <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">
                  <span className="max-w-[70%] rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.14em] text-white backdrop-blur-md">
                    {useCase}
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-black/25 text-[10px] font-black text-white backdrop-blur-md transition duration-500 group-hover/product-shot:rotate-6 group-hover/product-shot:bg-brand-500/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <figcaption className="absolute inset-x-5 bottom-5 z-[1] sm:inset-x-6 sm:bottom-6">
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.15em] text-white/75">
                    <Sparkles className="h-3.5 w-3.5 text-brand-300" />
                    {product.name}
                  </div>

                  <h3 className={`mt-2 max-w-[26ch] font-black text-white ${isFeatured ? "text-[clamp(1.7rem,2.7vw,2.7rem)] leading-[1.02] tracking-[-.05em]" : "text-[1.08rem] leading-[1.08] tracking-[-.035em] sm:text-[1.25rem]"}`}>
                    {capability.title}
                  </h3>

                  <p className={`mt-2 max-w-[46ch] text-white/[.78] ${isFeatured ? "text-sm leading-6 sm:text-[0.95rem] sm:leading-7" : "line-clamp-2 text-[0.82rem] leading-5"}`}>
                    {capability.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[9px] font-black uppercase tracking-[.14em] text-white/[.85] opacity-80 transition duration-300 group-hover/product-shot:translate-x-1 group-hover/product-shot:opacity-100">
                    Explore the experience <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
