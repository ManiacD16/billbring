import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Gauge, Layers3, Route, ShieldCheck, Sparkles } from "lucide-react";
import { FinalCta } from "@/components/sections/final-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { FeatureCard } from "@/components/ui/feature-card";
import { ProductVisual } from "@/components/ui/product-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/data/products";

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
  [Layers3, "One operating layer", "Keep product actions and service state within a consistent BillBring experience."],
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

  return (
    <>
      <section className="section-transition relative overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_24%,rgba(18,175,124,.14),transparent_31%),radial-gradient(circle_at_18%_20%,rgba(26,46,89,.08),transparent_27%)] dark:bg-[radial-gradient(circle_at_76%_24%,rgba(18,175,124,.12),transparent_28%),radial-gradient(circle_at_18%_20%,rgba(41,67,113,.24),transparent_28%)]" />
        <div className="grid-fade absolute inset-0 -z-10" />

        <div className="section-shell grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
          <div data-reveal="left">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="eyebrow">{product.category}</span>
              <span className="h-px w-9 bg-brand-500/[.35]" aria-hidden="true" />
              <span className="text-[10px] font-black uppercase tracking-[.16em] text-slate-400">
                Product {String(productIndex + 1).padStart(2, "0")} / 19
              </span>
            </div>

            <h1 className="mt-7 max-w-[12ch] text-balance text-[clamp(3rem,12.5vw,6.5rem)] font-black leading-[.9] tracking-[-.068em] text-ink-950 dark:text-white sm:text-[clamp(3.5rem,7vw,6.5rem)]">
              {product.name}
            </h1>
            <p className="mt-7 max-w-xl text-[16px] leading-7 text-slate-600 dark:text-slate-300 sm:text-[18px] sm:leading-8">
              {product.blurb}
            </p>

            <div className="group relative mt-8 h-[270px] overflow-hidden rounded-[30px] border border-slate-200/[.80] bg-white/[.72] shadow-card dark:border-white/[.10] dark:bg-ink-900/[.55] lg:hidden" aria-hidden="true">
              <div className="absolute left-5 top-5 z-10 max-w-[45%]">
                <span className="icon-tile grid h-11 w-11 place-items-center text-brand-600 dark:text-brand-300">
                  <Icon className={`h-5 w-5 ${product.accent}`} />
                </span>
                <p className="mt-4 text-[9px] font-black uppercase tracking-[.14em] text-slate-400">Product flow</p>
                <p className="mt-1 text-sm font-black leading-5 text-ink-950 dark:text-white">{product.name}</p>
              </div>
              <ProductVisual product={product} />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2" data-reveal-stagger>
              {product.bullets.map((bullet) => (
                <div key={bullet} className="interactive-lift flex min-h-14 items-center gap-3 rounded-2xl border border-slate-200/[.80] bg-white/[.70] p-3.5 text-sm font-bold shadow-[0_12px_34px_-30px_rgba(8,18,37,.32)] backdrop-blur dark:border-white/[.10] dark:bg-white/[.035]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500/[.10]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-300" />
                  </span>
                  {bullet}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/partner">Activate this service</ButtonLink>
              <ButtonLink href="/developers" variant="secondary">View API integration</ButtonLink>
            </div>
          </div>

          <div data-reveal="right" className="group relative hidden min-h-[570px] overflow-hidden rounded-[38px] border border-slate-200/[.80] bg-white shadow-lift dark:border-white/[.10] dark:bg-ink-900/[.60] lg:block">
            <ProductVisual product={product} large />
            <div className="absolute inset-x-9 bottom-9 top-20 rounded-[30px] border border-slate-200/[.80] bg-white/[.8] p-7 shadow-card backdrop-blur-xl dark:border-white/[.10] dark:bg-ink-950/[.78]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="icon-tile grid h-12 w-12 place-items-center text-brand-600 dark:text-brand-300">
                    <Icon className={`h-6 w-6 ${product.accent}`} />
                  </span>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[.13em] text-slate-400">Product workspace</p>
                    <p className="mt-1 text-lg font-black tracking-[-.02em]">{product.name} Control Center</p>
                  </div>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-brand-500/[.10] px-3 py-1.5 text-[9px] font-black uppercase tracking-[.12em] text-brand-700 dark:text-brand-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Preview
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/[.05]">
                  <p className="text-[9px] font-black uppercase tracking-[.11em] text-slate-400">Service state</p>
                  <p className="mt-2 text-2xl font-black">Active</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/[.05]">
                  <p className="text-[9px] font-black uppercase tracking-[.11em] text-slate-400">Workflow</p>
                  <p className="mt-2 text-2xl font-black text-brand-600 dark:text-brand-300">Ready</p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl bg-slate-50 p-4 dark:bg-white/[.05]">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span>Recent activity</span>
                  <span className="text-brand-600 dark:text-brand-300">Interface preview</span>
                </div>
                <div className="mt-4 space-y-2">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="group/row flex items-center justify-between rounded-xl bg-white p-3 text-xs transition duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:bg-ink-900">
                      <span>Example event #{index}</span>
                      <span className="flex items-center gap-1.5 font-black text-brand-600 dark:text-brand-300">
                        Success <ArrowUpRight className="h-3 w-3 transition-transform group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-transition bg-slate-50/[.50] py-24 dark:bg-white/[.015] sm:py-32">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Product architecture"
            title={<>Built to feel <span className="text-brand-500">simple in motion.</span></>}
            copy={`${product.name} follows the same BillBring product principles: clear state, contextual actions, trustworthy feedback and integration-ready architecture.`}
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4" data-reveal-stagger>
            {architecture.map(([icon, title, copy]) => (
              <FeatureCard key={title} icon={icon} title={title} copy={copy} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-transition py-24 sm:py-32">
        <div className="section-shell">
          <div className="noise relative overflow-hidden rounded-[36px] bg-ink-950 p-8 text-white shadow-lift sm:p-12 lg:p-14" data-reveal="scale">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(18,175,124,.18),transparent_30%)]" />
            <div className="absolute -right-12 bottom-[-40%] h-72 w-72 rounded-full border border-white/[.05]" aria-hidden="true" />
            <div className="relative max-w-4xl">
              <Sparkles className="h-6 w-6 text-brand-400" />
              <h2 className="mt-7 text-balance text-[clamp(2.5rem,5vw,5rem)] font-black leading-[.96] tracking-[-.06em]">
                {product.name} gets stronger inside the whole BillBring ecosystem.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
                Cross-service navigation, shared operational patterns and one brand system help customers understand more services without relearning the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
