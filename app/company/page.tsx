import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Compass, FileCheck2, HeartHandshake, Scale, ShieldCheck } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Company",
  description: "About BillBring and the product principles behind the platform.",
};

export default function CompanyPage() {
  return (
    <>
      <InternalHero
        eyebrow="Company"
        title={<>Building a clearer financial <span className="text-brand-500">operating experience.</span></>}
        copy="BillBring brings payments, bills, collections, payouts and financial services together through one consistent product language."
        image="/images/home/8.png"
        imageAlt="BillBring financial ecosystem across retailers, merchants and digital payments"
        points={["One ecosystem", "Partner-led growth", "Trust-first operations"]}
      />

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <SectionHeading eyebrow="Product principles" title={<>Less fragmentation. <span className="text-brand-500">More clarity.</span></>} copy="The product system is shaped around four principles that keep complex financial journeys understandable." align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard icon={Compass} title="Clarity" copy="Make complex financial journeys easier for people to understand and operate." />
            <FeatureCard icon={Building2} title="Platform thinking" copy="Build one connected system rather than a loose set of unrelated services." />
            <FeatureCard icon={ShieldCheck} title="Trust" copy="Treat transparent states, deliberate actions and security-minded UX as product fundamentals." />
            <FeatureCard icon={HeartHandshake} title="Partnership" copy="Design the platform around the retailers, merchants, enterprises and customers who rely on it." />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white dark:border-white/[.09] dark:bg-[#0b1118]" data-reveal="left">
            <div className="relative aspect-[16/9]"><Image src="/images/home/6.png" alt="BillBring business partnership" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
            <div className="p-7"><p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">Partnership at the center</p><h2 className="mt-3 text-3xl font-black tracking-[-.045em]">Grow through connected distribution.</h2><p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">BillBring is designed around the people and businesses who put financial services into customers&apos; hands.</p></div>
          </article>
          <article className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white dark:border-white/[.09] dark:bg-[#0b1118]" data-reveal="right">
            <div className="relative aspect-[16/9] bg-black"><Image src="/images/home/7.png" alt="BillBring security and trust" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" /></div>
            <div className="p-7"><p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">Trust by design</p><h2 className="mt-3 text-3xl font-black tracking-[-.045em]">Security is part of the product language.</h2><p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">Permissions, confirmations, transparent states and protected access should feel consistent everywhere.</p></div>
          </article>
          <article className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white dark:border-white/[.09] dark:bg-[#0b1118] lg:col-span-2" data-reveal="scale">
            <div className="grid items-center lg:grid-cols-[1.08fr_.92fr]">
              <div className="relative min-h-[260px] lg:min-h-[360px]"><Image src="/images/home/24.png" alt="BillBring helping businesses focus on growth" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
              <div className="p-7 sm:p-9 lg:p-10"><p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">Built for growth</p><h2 className="mt-3 text-3xl font-black tracking-[-.045em]">Let the platform absorb the operational noise.</h2><p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">The company vision is simple: make financial operations feel less fragmented so partners can spend more time serving customers and growing the business.</p></div>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-28 pt-20 sm:pb-36 sm:pt-28">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[30px] bg-[#06101a] p-8 text-white shadow-[0_36px_90px_-58px_rgba(0,0,0,.75)] sm:p-10 lg:p-12" data-reveal="scale">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(18,175,124,.18),transparent_30%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-300">Governance-ready structure</p>
                <h2 className="mt-5 text-[clamp(2.4rem,4.5vw,4.6rem)] font-black leading-[.96] tracking-[-.06em]">Trust deserves a clear place in the product.</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Policy and compliance content should be easy to locate, version and understand. BillBring&apos;s information architecture reserves a clear home for approved company disclosures.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <article id="privacy" className="scroll-mt-32 rounded-[20px] border border-white/[.10] bg-white/[.045] p-5"><ShieldCheck className="h-5 w-5 text-brand-400"/><h3 className="mt-5 text-sm font-black">Privacy & data</h3><p className="mt-2 text-xs leading-5 text-slate-400">A dedicated location for approved privacy and data-handling documentation.</p></article>
                <article id="terms" className="scroll-mt-32 rounded-[20px] border border-white/[.10] bg-white/[.045] p-5"><FileCheck2 className="h-5 w-5 text-brand-400"/><h3 className="mt-5 text-sm font-black">Terms & disclosures</h3><p className="mt-2 text-xs leading-5 text-slate-400">Keep commercial and user-facing terms structured and easy to revisit.</p></article>
                <article id="compliance" className="scroll-mt-32 rounded-[20px] border border-white/[.10] bg-white/[.045] p-5"><Scale className="h-5 w-5 text-brand-400"/><h3 className="mt-5 text-sm font-black">Compliance</h3><p className="mt-2 text-xs leading-5 text-slate-400">Surface only verified regulatory, policy and compliance information.</p></article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
