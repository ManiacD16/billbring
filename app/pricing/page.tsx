import type { Metadata } from "next";
import { CheckCircle2, Layers3, Sparkles } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Talk to BillBring about pricing for your products and transaction volumes.",
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
        copy="BillBring spans multiple financial products and operating models. Your commercial plan can reflect the services, transaction volumes and support model your business requires."
      />
      <section className="pb-32">
        <div className="section-shell">
          <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[38px] border border-slate-200/[.80] bg-white shadow-lift dark:border-white/[.10] dark:bg-ink-900 lg:grid-cols-[.72fr_1.28fr]" data-reveal="scale">
            <div className="noise relative overflow-hidden bg-ink-950 p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(18,175,124,.2),transparent_32%)]" />
              <div className="relative">
                <Sparkles className="h-5 w-5 text-brand-400" />
                <p className="mt-7 text-[10px] font-black uppercase tracking-[.17em] text-brand-300">Commercial model</p>
                <h2 className="mt-4 text-4xl font-black leading-[.98] tracking-[-.055em]">Built around your operating reality.</h2>
                <p className="mt-5 text-sm leading-7 text-slate-300">Start with the products, volumes and operational requirements that matter to your business. The commercial structure can follow that shape.</p>
              </div>
              <Layers3 className="absolute -bottom-10 -right-10 h-44 w-44 stroke-[.5] text-brand-400/[.07]" aria-hidden="true" />
            </div>

            <div className="p-8 sm:p-10">
              <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Custom commercial plan</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-.045em]">Let&apos;s size your BillBring stack.</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">A useful pricing conversation starts with context. These inputs help define the right commercial model.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {pricingInputs.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200/[.80] bg-slate-50/[.60] p-3.5 text-sm font-bold dark:border-white/[.10] dark:bg-white/[.035]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />{item}
                  </div>
                ))}
              </div>
              <div className="mt-9"><ButtonLink href="/support">Request pricing</ButtonLink></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
