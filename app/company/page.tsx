import type { Metadata } from "next";
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

      <section className="pb-28 pt-10 sm:pb-36">
        <div className="section-shell">
          <div className="noise relative overflow-hidden rounded-[36px] bg-ink-950 p-8 text-white shadow-lift sm:p-10 lg:p-12" data-reveal="scale">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(18,175,124,.18),transparent_30%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-300">Governance-ready structure</p>
                <h2 className="mt-5 text-[clamp(2.4rem,4.5vw,4.6rem)] font-black leading-[.96] tracking-[-.06em]">Trust deserves a clear place in the product.</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Policy and compliance content should be easy to locate, version and understand. BillBring&apos;s information architecture reserves a clear home for approved company disclosures.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <article id="privacy" className="scroll-mt-32 rounded-[24px] border border-white/[.10] bg-white/[.045] p-5"><ShieldCheck className="h-5 w-5 text-brand-400"/><h3 className="mt-5 text-sm font-black">Privacy & data</h3><p className="mt-2 text-xs leading-5 text-slate-400">A dedicated location for approved privacy and data-handling documentation.</p></article>
                <article id="terms" className="scroll-mt-32 rounded-[24px] border border-white/[.10] bg-white/[.045] p-5"><FileCheck2 className="h-5 w-5 text-brand-400"/><h3 className="mt-5 text-sm font-black">Terms & disclosures</h3><p className="mt-2 text-xs leading-5 text-slate-400">Keep commercial and user-facing terms structured and easy to revisit.</p></article>
                <article id="compliance" className="scroll-mt-32 rounded-[24px] border border-white/[.10] bg-white/[.045] p-5"><Scale className="h-5 w-5 text-brand-400"/><h3 className="mt-5 text-sm font-black">Compliance</h3><p className="mt-2 text-xs leading-5 text-slate-400">Surface only verified regulatory, policy and compliance information.</p></article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
