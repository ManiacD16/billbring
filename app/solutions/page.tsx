import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Code2, Store, WalletCards, Workflow, Waypoints } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Solutions",
  description: "billbring solutions for retailers, merchants and enterprises.",
};

const audiences = [
  {
    id: "retailers",
    icon: Store,
    eyebrow: "Retail network",
    title: "Retailers / Agents",
    copy: "A service-rich operating surface for assisted financial journeys, bill payments, recharge, AEPS, DMT, travel and more.",
    items: ["Assisted services", "Customer-facing journeys", "One operator experience"],
    image: "/images/home/3.png",
  },
  {
    id: "merchants",
    icon: Building2,
    eyebrow: "Business operations",
    title: "Merchants / Businesses",
    copy: "A connected collection, payout and settlement experience designed to keep day-to-day financial operations easy to understand.",
    items: ["Collections", "Payout visibility", "Operational reporting"],
    image: "/images/home/4.png",
  },
  {
    id: "enterprise",
    icon: Code2,
    eyebrow: "Embedded finance",
    title: "Enterprises",
    copy: "API-first infrastructure patterns for organizations that want to embed multiple financial services into their own products.",
    items: ["APIs & events", "Shared conventions", "Scale-ready journeys"],
    image: "/images/home/14.png",
  },
];

const useCases = [
  { image: "/images/home/9.png", title: "Everything a retailer needs", copy: "Assisted payments, financial services and day-to-day customer operations in one environment." },
  { image: "/images/home/10.png", title: "Assisted payments at the counter", copy: "Give agents and merchants a clear way to accept and manage everyday customer payments." },
  { image: "/images/home/15.png", title: "Accept payments anywhere", copy: "A connected merchant acceptance experience across QR, gateway and in-person journeys." },
  { image: "/images/home/16.png", title: "Smart POS for business", copy: "Bring payment acceptance, billing and operating visibility together at the point of sale." },
  { image: "/images/home/17.png", title: "Built for fast-moving commerce", copy: "Keep delivery, collections and settlements visible when the business never stops moving." },
];

export default function SolutionsPage() {
  return (
    <>
      <InternalHero
        eyebrow="Solutions"
        title={<>One platform, shaped around <span className="text-brand-500">your business.</span></>}
        copy="Whether you serve customers at a counter, operate a growing business or embed financial services through APIs, billbring gives you a consistent foundation."
        image="/images/home/11.png"
        imageAlt="billbring connected financial ecosystem for retailers, merchants and enterprises"
        points={["Retailer operations", "Merchant payments", "Embedded finance"]}
      />

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <SectionHeading eyebrow="Choose your path" title={<>Built for the way <span className="text-brand-500">you operate.</span></>} align="center" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3" data-reveal-stagger>
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <article id={audience.id} key={audience.id} className="group scroll-mt-32 overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_24px_68px_-48px_rgba(8,18,37,.48)] transition duration-500 hover:-translate-y-1 hover:border-brand-500/25 dark:border-white/[.09] dark:bg-[#0b1118]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-black">
                    <Image src={audience.image} alt={audience.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300"><Icon className="h-5 w-5" /></span>
                      <span className="text-[9px] font-black uppercase tracking-[.15em] text-brand-600 dark:text-brand-300">{audience.eyebrow}</span>
                    </div>
                    <h2 className="mt-6 text-[28px] font-black leading-[1.02] tracking-[-.045em] text-ink-950 dark:text-white">{audience.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">{audience.copy}</p>
                    <div className="mt-6 grid gap-2.5">{audience.items.map((item) => <div key={item} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"><span className="h-1.5 w-1.5 rounded-full bg-brand-500" />{item}</div>)}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Real operating contexts" title={<>Designed for the places where <span className="text-brand-500">money actually moves.</span></>} copy="Use cases stay visually grounded in the retailer, merchant and service environments billbring is built to support." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[24px] border border-slate-200/80 bg-white dark:border-white/[.09] dark:bg-[#0b1118]">
                <div className="relative aspect-[16/9]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" /></div>
                <div className="p-5"><h3 className="text-lg font-black tracking-[-.03em]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.copy}</p></div>
              </article>
            ))}
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
