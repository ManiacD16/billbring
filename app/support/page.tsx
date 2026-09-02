import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, HelpCircle, Mail, MessageSquareText, ShieldQuestion } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { FeatureCard } from "@/components/ui/feature-card";

export const metadata: Metadata = {
  title: "Support",
  description: "billbring support and contact experience.",
};

export default function SupportPage() {
  return (
    <>
      <InternalHero
        eyebrow="Support"
        title={<>Get the right help, <span className="text-brand-500">without the runaround.</span></>}
        copy="Connect customers, merchants, retailers and developers to the correct billbring support channel with the context needed to resolve issues faster."
        image="/images/home/33.png"
        imageAlt="billbring 24x7 AI-assisted customer support experience"
        points={["24×7 assistance", "Context-aware routing", "Clear escalation"]}
        cta={false}
      />

      <section className="section-transition py-20 sm:py-28">
        <div className="section-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard icon={HelpCircle} title="Product help" copy="Guide users to service-specific support and common issue resolution." />
          <FeatureCard icon={MessageSquareText} title="Business support" copy="Route merchant, retailer and partner questions to the right operating team." />
          <FeatureCard icon={Mail} title="Contact" copy="Publish your verified support email, phone and operating hours here." />
          <FeatureCard id="grievance" icon={ShieldQuestion} title="Grievance" copy="Use a clear escalation path for complaints and regulated support requirements." />
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white dark:border-white/[.09] dark:bg-[#0b1118]" data-reveal="left">
            <div className="relative aspect-[16/9]"><Image src="/images/home/30.png" alt="billbring always-on business support" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
            <div className="p-7 sm:p-8"><p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Always-on support</p><h2 className="mt-3 text-3xl font-black tracking-[-.045em]">Help should be available where the work happens.</h2><p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">Give operators a clear route from a question to the correct support flow without leaving the billbring experience.</p></div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white dark:border-white/[.09] dark:bg-[#0b1118]" data-reveal="right">
            <div className="relative aspect-[16/9] bg-black"><Image src="/images/home/7.png" alt="billbring secure support and grievance handling" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-contain" /></div>
            <div className="p-7 sm:p-8"><p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Protected escalation</p><h2 className="mt-3 text-3xl font-black tracking-[-.045em]">Sensitive issues need a deliberate path.</h2><p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">Grievance and security-related requests should be easy to identify, protect and route to the right team.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          {[
            { image: "/images/home/29.png", title: "Let AI handle the busy work", copy: "Automate repetitive support and operating tasks while keeping people in control of the important decisions." },
            { image: "/images/home/32.png", title: "An assistant inside the workflow", copy: "Surface answers, status and next actions close to the dashboard where business users already work." },
          ].map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white dark:border-white/[.09] dark:bg-[#0b1118]">
              <div className="relative aspect-[16/9]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
              <div className="p-6"><h3 className="text-xl font-black tracking-[-.035em]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[30px] bg-[#06101a] p-8 text-white shadow-[0_36px_90px_-58px_rgba(0,0,0,.75)] sm:p-10 lg:p-12" data-reveal="scale">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(18,175,124,.18),transparent_32%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl"><p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-300">Support routing</p><h2 className="mt-5 text-[clamp(2.4rem,4vw,4.2rem)] font-black leading-[.98] tracking-[-.055em]">Good support starts with the right context.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">Product, transaction state and user type should travel with the support request so the next team can act without making the customer repeat the story.</p></div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/[.10] bg-white/[.045] px-4 py-3 text-xs font-black text-slate-300">Issue <ArrowRight className="h-4 w-4 text-brand-400"/> Context <ArrowRight className="h-4 w-4 text-brand-400"/> Right team</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
