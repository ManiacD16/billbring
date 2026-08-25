import type { Metadata } from "next";
import { ArrowRight, HelpCircle, Mail, MessageSquareText, ShieldQuestion } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { FeatureCard } from "@/components/ui/feature-card";

export const metadata: Metadata = {
  title: "Support",
  description: "BillBring support and contact experience.",
};

export default function SupportPage() {
  return (
    <>
      <InternalHero
        eyebrow="Support"
        title={<>Get the right help, <span className="text-brand-500">without the runaround.</span></>}
        copy="Use this page to connect customers, merchants, retailers and developers to the correct BillBring support channel."
        cta={false}
      />
      <section className="section-transition pb-20 sm:pb-28">
        <div className="section-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard icon={HelpCircle} title="Product help" copy="Guide users to service-specific support and common issue resolution." />
          <FeatureCard icon={MessageSquareText} title="Business support" copy="Route merchant, retailer and partner questions to the right operating team." />
          <FeatureCard icon={Mail} title="Contact" copy="Publish your verified support email, phone and operating hours here." />
          <FeatureCard id="grievance" icon={ShieldQuestion} title="Grievance" copy="Use a clear escalation path for complaints and regulated support requirements." />
        </div>
      </section>

      <section className="pb-28 sm:pb-36">
        <div className="section-shell">
          <div className="noise relative overflow-hidden rounded-[34px] bg-ink-950 p-8 text-white shadow-lift sm:p-10 lg:p-12" data-reveal="scale">
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
