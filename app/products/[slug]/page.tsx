import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Gauge, Layers3, Route, ShieldCheck, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import { getProductImage } from "@/data/product-images";
import { ButtonLink } from "@/components/ui/button-link";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FinalCta } from "@/components/sections/final-cta";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.category}`,
    description: product.blurb,
  };
}

const architecture = [
  [Layers3, "One operating layer", "Keep product actions and service state within a consistent billbring experience."],
  [Gauge, "Clear performance state", "Present what happened, what is pending and what requires attention without ambiguity."],
  [Route, "Guided workflows", "Shape complex financial journeys into clean, understandable product paths."],
  [ShieldCheck, "Trust-minded UI", "Use deliberate confirmations, receipts, permissions and visible transaction outcomes."],
] as const;

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const Icon = product.icon;
  const productIndex = products.findIndex((item) => item.slug === slug);
  const productImage = getProductImage(slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-[#f7fbf9] py-14 dark:border-white/[.08] dark:bg-[#05090d] sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(18,175,124,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(18,175,124,.05)_1px,transparent_1px)] [background-size:52px_52px] dark:opacity-20" />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-500/[.13] blur-[120px]" />

        <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[.86fr_1.14fr] lg:gap-14">
          <div data-reveal="left">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/[.07] px-3.5 py-2 text-[10px] font-black uppercase tracking-[.15em] text-brand-700 dark:text-brand-300"><Icon className="h-3.5 w-3.5" /> {product.category}</span>
              <span className="text-[9px] font-black uppercase tracking-[.15em] text-slate-400">Product {String(productIndex + 1).padStart(2, "0")} / 19</span>
            </div>

            <h1 className="mt-6 max-w-[11ch] font-display text-[clamp(3.2rem,6.6vw,6.8rem)] font-semibold leading-[.89] tracking-[-.07em] text-ink-950 dark:text-white text-balance">{product.name}</h1>
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-slate-600 dark:text-slate-300 sm:text-[18px]">{product.blurb}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {product.bullets.map((bullet) => (
                <div key={bullet} className="flex min-h-12 items-center gap-3 rounded-[16px] border border-slate-200/80 bg-white/75 px-3.5 py-3 text-xs font-bold text-slate-700 shadow-[0_14px_38px_-34px_rgba(8,18,37,.4)] backdrop-blur dark:border-white/[.09] dark:bg-white/[.035] dark:text-slate-200">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" /> {bullet}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/partner">Activate this service</ButtonLink>
              <ButtonLink href="/developers" variant="secondary">View API integration</ButtonLink>
            </div>
          </div>

          <div data-reveal="right" className="relative">
            <div className="absolute -inset-5 rounded-[2.25rem] bg-brand-500/[.08] blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-3 shadow-[0_34px_90px_-52px_rgba(8,18,37,.55)] dark:border-white/[.10] dark:bg-[#0b1118] sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-black">
                <Image src={productImage} alt={`${product.name} billbring service experience`} fill priority sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-[16px] border border-white/15 bg-black/40 px-4 py-3 text-white backdrop-blur-md">
                  <div><p className="text-[9px] font-black uppercase tracking-[.14em] text-brand-300">billbring service</p><p className="mt-1 text-sm font-black">{product.name}</p></div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black">Connected <ArrowUpRight className="h-3.5 w-3.5 text-brand-400" /></span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 px-2 pb-2 pt-4">
                <div><p className="text-[9px] font-black uppercase tracking-[.14em] text-slate-400">Operating category</p><p className="mt-1 text-sm font-black text-ink-950 dark:text-white">{product.group}</p></div>
                <span className="rounded-full bg-brand-500/[.09] px-3 py-1.5 text-[9px] font-black uppercase tracking-[.12em] text-brand-700 dark:text-brand-300">Ready to integrate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Product architecture"
            title={<>Built to feel <span className="text-brand-500">simple in motion.</span></>}
            copy={`${product.name} follows the same billbring product principles: clear state, contextual actions, trustworthy feedback and integration-ready architecture.`}
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4" data-reveal-stagger>
            {architecture.map(([icon, title, copy]) => <FeatureCard key={title} icon={icon} title={title} copy={copy} />)}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
          <div data-reveal="left">
            <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300"><Sparkles className="h-3.5 w-3.5" /> Inside the ecosystem</p>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2.7rem,4.8vw,5rem)] font-black leading-[.95] tracking-[-.06em]">{product.name} gets stronger inside the whole billbring network.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">Cross-service navigation, shared operational patterns and one brand system help customers understand more services without relearning the platform.</p>
          </div>
          <div data-reveal="right" className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-3 dark:border-white/[.09] dark:bg-[#0b1118]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-black"><Image src="/images/home/11.png" alt="billbring connected financial services ecosystem" fill sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover" /></div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
