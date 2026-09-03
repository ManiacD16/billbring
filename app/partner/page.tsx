import type { Metadata } from "next";
import { Building2, CheckCircle2, Landmark, Layers3, ShoppingCart, Waypoints } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { PartnerApplicationForm } from "@/components/sections/partner-application-form";

export const metadata: Metadata = {
  title: "Partners",
  description: "Connect, integrate and scale with billbring payment and financial service APIs.",
};

const partnerTypes = [
  { icon: Landmark, title: "Banks & Financial Institutions", copy: "Integrate payment, payout, DMT, BBPS and other financial services into your digital platforms." },
  { icon: Building2, title: "Enterprises & Corporates", copy: "Simplify collections, payouts, UPI payments and financial operations through API integration." },
  { icon: Layers3, title: "FinTech Companies", copy: "Add payment and financial services to your existing fintech products with ready-to-integrate APIs." },
  { icon: Waypoints, title: "Platforms & Aggregators", copy: "Embed financial services into your marketplace, SaaS platform, application or digital ecosystem." },
  { icon: ShoppingCart, title: "E-commerce & Digital Businesses", copy: "Enable seamless payment collection, vendor payouts and settlements." },
] as const;

const integrationSteps = [
  ["01", "Tell Us Your Requirement", "Share your business model, use case and required APIs."],
  ["02", "API & Commercial Discussion", "Our team recommends the appropriate integration and partnership model."],
  ["03", "Integration & Testing", "Access API documentation, credentials and sandbox/testing environment."],
  ["04", "Go Live", "Complete required technical, compliance and commercial processes."],
  ["05", "Scale Your Business", "Start offering financial services through your platform and scale with billbring."],
] as const;

export default function PartnerPage() {
  return (
    <>
      <InternalHero
        eyebrow="Partners"
        title={<>Power Your Business With <span className="text-brand-500">billbring APIs.</span></>}
        copy="Connect. Integrate. Scale. Give your business access to powerful payment and financial service APIs through a single technology ecosystem."
        image="/images/home/6.png"
        imageAlt="billbring business and API partnership ecosystem"
        points={["Connect", "Integrate", "Scale"]}
        cta={false}
      />

      <PartnerApplicationForm />

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Who Can Partner With Us?</p>
            <h2 className="mt-4 text-[clamp(2.6rem,4.8vw,4.8rem)] font-black leading-[.96] tracking-[-.06em]">Built for businesses that want financial services inside their digital ecosystem.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {partnerTypes.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_22px_58px_-45px_rgba(8,18,37,.42)] dark:border-white/[.09] dark:bg-[#0b1118]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-6 text-lg font-black tracking-[-.035em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Our API Solutions</p>
            <h2 className="mt-4 text-[clamp(2.5rem,4.4vw,4.4rem)] font-black leading-[.97] tracking-[-.055em]">One Integration. Multiple Services.</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Payment & UPI", "Payouts", "DMT & Remittance", "BBPS", "Recharge", "AEPS", "Wallet"].map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 dark:border-white/[.09] dark:bg-white/[.04] dark:text-slate-200">{item}</span>)}
            </div>
          </div>
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118] sm:p-8">
            <p className="text-[10px] font-black uppercase tracking-[.15em] text-slate-400">Why billbring?</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Scalable API Infrastructure", "Real-Time Transactions", "Secure & Reliable Technology", "Developer-Friendly Integration", "Dedicated Technical Support"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">How B2B Integration Works</p>
            <h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.5rem)] font-black leading-[.97] tracking-[-.055em]">A clear path from requirement to scale.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {integrationSteps.map(([number, title, copy]) => (
              <article key={number} className="rounded-[24px] border border-slate-200/80 bg-white p-6 dark:border-white/[.09] dark:bg-[#0b1118]">
                <span className="text-3xl font-black text-brand-500">{number}</span>
                <h3 className="mt-6 text-lg font-black tracking-[-.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[30px] bg-[#06101a] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(18,175,124,.20),transparent_34%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div><p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-300">Ready to Integrate?</p><h2 className="mt-5 text-[clamp(2.5rem,4.6vw,4.8rem)] font-black leading-[.96] tracking-[-.06em]">Build smarter financial solutions with billbring.</h2></div>
              <div className="flex flex-wrap gap-3"><ButtonLink href="/support" variant="dark">Talk to Our Team</ButtonLink><ButtonLink href="/resources#api-documentation" variant="secondary">Explore API Documentation</ButtonLink></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
