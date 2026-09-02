import type { Metadata } from "next";
import Image from "next/image";
import { Braces, Cable, KeyRound, RadioTower, ShieldCheck, SquareTerminal } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { FeatureCard } from "@/components/ui/feature-card";
import { ApiSection } from "@/components/sections/api-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Developers",
  description: "Explore the billbring API-first developer experience.",
};

const developerFeatures = [
  { id: "sandbox", icon: SquareTerminal, title: "Sandbox workflow", copy: "Keep the first integration path safe, readable and easy to reason about before production traffic is involved." },
  { id: "webhooks", icon: RadioTower, title: "Realtime events", copy: "Design webhook and status update flows around predictable financial events." },
  { icon: KeyRound, title: "Access boundaries", copy: "Keep credentials and permissions explicit across integration surfaces." },
  { icon: Cable, title: "Integration clarity", copy: "Document the path from first request to production operation with fewer hidden assumptions." },
  { icon: Braces, title: "Consistent resources", copy: "Apply shared conventions across payments, payouts and other service APIs." },
  { icon: ShieldCheck, title: "Security minded", copy: "Treat validation, observability and protected access as first-class developer concerns." },
];

export default function DevelopersPage() {
  return (
    <>
      <InternalHero
        eyebrow="Developers"
        title={<>Build financial experiences without <span className="text-brand-500">the visual complexity.</span></>}
        copy="The billbring developer experience is designed around clear APIs, predictable events and implementation patterns that are easy to reason about."
        image="/images/home/13.png"
        imageAlt="billbring API-connected financial services platform"
        points={["API-first", "Realtime events", "Secure integration"]}
      />
      <ApiSection />

      <section className="border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div data-reveal="left">
            <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Integration context</p>
            <h2 className="mt-4 max-w-[11ch] text-[clamp(2.7rem,4.6vw,4.8rem)] font-black leading-[.96] tracking-[-.055em]">The API should feel like part of the same platform.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">Developers connect to the same payment, collection and operational surfaces that business teams use. The visual and API language should reinforce each other.</p>
          </div>
          <div data-reveal="right" className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-3 shadow-[0_26px_70px_-48px_rgba(8,18,37,.5)] dark:border-white/[.09] dark:bg-[#0b1118]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-black"><Image src="/images/home/12.png" alt="billbring digital payments and integration platform" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" /></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          {[
            { image: "/images/home/18.png", title: "Automation-ready operations", copy: "APIs should support the same business workflows your operators see in the product." },
            { image: "/images/home/20.png", title: "Connected workflow events", copy: "Use predictable events and state changes to keep automated financial flows understandable." },
          ].map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white dark:border-white/[.09] dark:bg-[#0b1118]">
              <div className="relative aspect-[16/9]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
              <div className="p-6"><h3 className="text-xl font-black tracking-[-.035em]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="docs" className="section-transition scroll-mt-28 py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <SectionHeading eyebrow="Developer experience" title={<>A cleaner path from <span className="text-brand-500">sandbox to scale.</span></>} align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {developerFeatures.map((feature) => <FeatureCard key={feature.title} id={feature.id} icon={feature.icon} title={feature.title} copy={feature.copy} />)}
          </div>
        </div>
      </section>
    </>
  );
}
