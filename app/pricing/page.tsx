import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Talk to billbring about pricing for your products and transaction volumes.",
};

const pricingInputs = [
  "Products you need",
  "Expected transaction volumes",
  "Integration model",
  "Retailer / merchant footprint",
  "Support requirements",
  "Settlement & operational needs",
];

export default function PricingPage() {
  return (
    <>
      <InternalHero
        eyebrow="Pricing"
        title={<>Pricing built around what <span className="text-brand-500">you actually use.</span></>}
        copy="billbring spans multiple financial products and operating models. Your commercial plan can reflect the services, transaction volumes and support model your business requires."
        image="/images/home/31.png"
        imageAlt="billbring business team reviewing expense and financial insights"
        points={["Usage-aligned", "Business-specific", "Scale-ready"]}
      />

      <section className="py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="grid overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_32px_82px_-54px_rgba(8,18,37,.5)] dark:border-white/[.09] dark:bg-[#0b1118] lg:grid-cols-[.9fr_1.1fr]" data-reveal="scale">
            <div className="relative min-h-[380px] overflow-hidden bg-[#06101a] lg:min-h-[560px]">
              <Image src="/images/home/28.png" alt="billbring AI-powered financial control" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-contain" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101a]/95 via-[#06101a]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.17em] text-brand-300"><Sparkles className="h-3.5 w-3.5" /> Commercial model</p>
                <h2 className="mt-4 max-w-[12ch] text-[clamp(2.2rem,4vw,4rem)] font-black leading-[.98] tracking-[-.055em]">Built around your operating reality.</h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">Start with the products, volumes and operational requirements that matter to your business. The commercial structure can follow that shape.</p>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Custom commercial plan</p>
              <h3 className="mt-4 text-4xl font-black tracking-[-.05em] text-ink-950 dark:text-white">Let&apos;s size your billbring stack.</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">A useful pricing conversation starts with context. These inputs help define the right commercial model.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {pricingInputs.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[18px] border border-slate-200/80 bg-[#f7fbf9] p-4 text-sm font-bold text-slate-700 dark:border-white/[.09] dark:bg-white/[.035] dark:text-slate-200">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />{item}
                  </div>
                ))}
              </div>
              <div className="mt-9"><ButtonLink href="/support">Request pricing</ButtonLink></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell">
          <div className="max-w-2xl"><p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Visibility before commitment</p><h2 className="mt-4 text-[clamp(2.7rem,4.6vw,4.8rem)] font-black leading-[.96] tracking-[-.055em]">Commercial decisions work better with clearer operating data.</h2><p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">Use transaction, expense and performance context to shape the service mix and commercial model around how the business actually operates.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { image: "/images/home/21.png", title: "Unified visibility" },
              { image: "/images/home/22.png", title: "Smarter spending" },
              { image: "/images/home/23.png", title: "Savings intelligence" },
              { image: "/images/home/25.png", title: "Connected expense operations" },
            ].map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[22px] border border-slate-200/80 bg-white dark:border-white/[.09] dark:bg-[#0b1118]">
                <div className="relative aspect-[16/10]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain" /></div>
                <div className="p-4"><p className="text-sm font-black tracking-[-.02em]">{item.title}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
