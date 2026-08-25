import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";

export const metadata: Metadata = {
  title: "Become a Partner",
  description: "Start a BillBring partnership conversation.",
};

const fitSignals = [
  "Retailer / agent network",
  "Merchant collection needs",
  "Enterprise integration",
  "Multiple financial services",
  "Developer / API requirements",
];

const fields = [
  { label: "Full name", name: "name", placeholder: "Your name", type: "text", autoComplete: "name" },
  { label: "Company", name: "company", placeholder: "Company name", type: "text", autoComplete: "organization" },
  { label: "Work email", name: "email", placeholder: "name@company.com", type: "email", autoComplete: "email" },
  { label: "Phone", name: "phone", placeholder: "+91", type: "tel", autoComplete: "tel" },
] as const;

export default function PartnerPage() {
  return (
    <>
      <InternalHero
        eyebrow="Partnership"
        title={<>Bring more financial services to <span className="text-brand-500">your customers.</span></>}
        copy="Tell BillBring about your business, operating model and the products you want to offer. The right partnership conversation starts with context."
        cta={false}
      />
      <section className="pb-32">
        <div className="section-shell grid gap-6 lg:grid-cols-[.72fr_1.28fr]">
          <div data-reveal="left" className="noise relative overflow-hidden rounded-[36px] bg-ink-950 p-8 text-white shadow-lift sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(18,175,124,.2),transparent_34%)]" />
            <div className="relative">
              <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.17em] text-brand-300"><Sparkles className="h-3.5 w-3.5" /> Partnership fit</p>
              <h2 className="mt-5 text-[clamp(2.4rem,4vw,4rem)] font-black leading-[.98] tracking-[-.055em]">A better first conversation starts with context.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">Share how your business operates and which financial journeys matter most. That gives the conversation a useful starting point.</p>
              <div className="mt-9 space-y-4">{fitSignals.map((item) => <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-300"><span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500/[.10]"><CheckCircle2 className="h-4 w-4 text-brand-400" /></span>{item}</div>)}</div>
            </div>
          </div>

          <form data-reveal="right" className="premium-surface rounded-[36px] p-7 sm:p-9 lg:p-10" aria-labelledby="partner-form-title">
            <div className="relative flex items-start justify-between gap-4">
              <div><p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Start a conversation</p><h2 id="partner-form-title" className="mt-3 text-3xl font-black tracking-[-.045em]">Tell us what you want to build.</h2></div>
              <span className="hidden rounded-full border border-slate-200 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.12em] text-slate-400 dark:border-white/[.10] sm:inline-flex">One short form</span>
            </div>
            <div className="relative mt-8 grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field.name} className="block">
                  <span className="mb-2.5 block text-xs font-black">{field.label}</span>
                  <input name={field.name} type={field.type} autoComplete={field.autoComplete} required className="h-[52px] w-full rounded-2xl border border-slate-200 bg-white/[.60] px-4 text-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/[.08] dark:border-white/[.10] dark:bg-white/[.035]" placeholder={field.placeholder} />
                </label>
              ))}
            </div>
            <label className="relative mt-5 block">
              <span className="mb-2.5 block text-xs font-black">What do you want to build with BillBring?</span>
              <textarea name="message" rows={6} required className="w-full resize-none rounded-2xl border border-slate-200 bg-white/[.60] p-4 text-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/[.08] dark:border-white/[.10] dark:bg-white/[.035]" placeholder="Tell us about your business, products, expected use case and integration needs..." />
            </label>
            <button type="button" className="group relative mt-6 h-[52px] overflow-hidden rounded-2xl bg-brand-600 px-6 text-sm font-black text-white shadow-glow transition duration-500 hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              <span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/[.20] to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              <span className="relative inline-flex items-center gap-2">Start partnership conversation <ArrowUpRight className="h-4 w-4" /></span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
