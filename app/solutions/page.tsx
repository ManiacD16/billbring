import type { Metadata } from "next";
import { Building2, Code2, Store, WalletCards, Workflow, Waypoints } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Solutions",
  description: "BillBring solutions for retailers, merchants and enterprises.",
};

const audiences = [
  {
    id: "retailers",
    icon: Store,
    eyebrow: "Retail network",
    title: "Retailers / Agents",
    copy: "A service-rich operating surface for assisted financial journeys, bill payments, recharge, AEPS, DMT, travel and more.",
    items: ["Assisted services", "Customer-facing journeys", "One operator experience"],
  },
  {
    id: "merchants",
    icon: Building2,
    eyebrow: "Business operations",
    title: "Merchants / Businesses",
    copy: "A connected collection, payout and settlement experience designed to keep day-to-day financial operations easy to understand.",
    items: ["Collections", "Payout visibility", "Operational reporting"],
  },
  {
    id: "enterprise",
    icon: Code2,
    eyebrow: "Embedded finance",
    title: "Enterprises",
    copy: "API-first infrastructure patterns for organizations that want to embed multiple financial services into their own products.",
    items: ["APIs & events", "Shared conventions", "Scale-ready journeys"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <InternalHero
        eyebrow="Solutions"
        title={<>One platform, shaped around <span className="text-brand-500">your business.</span></>}
        copy="Whether you serve customers at a counter, operate a growing business or embed financial services through APIs, BillBring gives you a consistent foundation."
      />

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <SectionHeading eyebrow="Choose your path" title={<>Built for the way <span className="text-brand-500">you operate.</span></>} align="center" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3" data-reveal-stagger>
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <article id={audience.id} key={audience.id} className="interactive-lift group relative min-h-[410px] scroll-mt-32 overflow-hidden rounded-[32px] border border-slate-200/[.80] bg-white p-7 shadow-card dark:border-white/[.10] dark:bg-ink-900/[.60] sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_14%,rgba(18,175,124,.09),transparent_42%)] opacity-[.70]" />
                  <Icon className="absolute -right-10 top-12 h-48 w-48 rotate-6 stroke-[.5] text-brand-500/[.07] transition duration-700 group-hover:rotate-0 group-hover:scale-105" aria-hidden="true" />
                  <div className="relative flex h-full max-w-[88%] flex-col">
                    <div className="flex items-center justify-between gap-4"><span className="icon-tile h-12 w-12 text-brand-600 dark:text-brand-300"><Icon className="h-5 w-5" /></span><span className="text-[10px] font-black tracking-[.17em] text-slate-300 dark:text-slate-600">0{index + 1}</span></div>
                    <p className="mt-10 text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">{audience.eyebrow}</p>
                    <h2 className="mt-3 text-[30px] font-black leading-[1.02] tracking-[-.045em]">{audience.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">{audience.copy}</p>
                    <div className="mt-auto grid gap-2 pt-7">{audience.items.map((item) => <div key={item} className="flex items-center gap-2 text-xs font-bold"><span className="h-1.5 w-1.5 rounded-full bg-brand-500" />{item}</div>)}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="grid gap-4 md:grid-cols-3">
            <FeatureCard icon={WalletCards} title="Connected services" copy="Move between products without turning the platform into a collection of disconnected microsites." />
            <FeatureCard icon={Workflow} title="Consistent workflows" copy="Use the same interaction language for statuses, confirmations, balances and financial operations." />
            <FeatureCard icon={Waypoints} title="Scalable journeys" copy="Let retailers, businesses and enterprises access the right capability without cluttering the experience." />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
