import type { Metadata } from "next";
import Image from "next/image";
import { Building2, CheckCircle2, Store, UsersRound, WalletCards } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Solutions for retailers, distributors, merchants, businesses and enterprises from billbring.",
};

const solutions = [
  {
    id: "retailers",
    icon: Store,
    title: "Retailer Solutions",
    heading: "Turn Your Store Into a Digital Service Point",
    copy: "Offer multiple financial and digital services to your customers from one powerful platform.",
    label: "Services",
    items: ["DMT", "AEPS", "Cash Withdrawal", "BBPS", "Recharge", "UPI", "QR", "POS", "Travel", "Insurance"],
    whyTitle: "Why billbring?",
    reasons: ["Multiple earning opportunities", "Easy-to-use dashboard", "Real-time transactions", "Dedicated support"],
    cta: "Become a Retailer",
    href: "/partner",
    image: "/images/home/3.png",
  },
  {
    id: "distributors",
    icon: UsersRound,
    title: "Distributor Solutions",
    heading: "Build & Grow Your Retailer Network",
    copy: "Manage your complete retailer network with powerful tools for onboarding, transactions, commissions and reporting.",
    label: "Features",
    items: ["Retailer Management", "Commission Management", "Transaction Monitoring", "Reports", "Dashboard", "Network Management"],
    whyTitle: "Why billbring?",
    reasons: ["Grow your network", "Manage retailers easily", "Track business performance", "Centralized operations"],
    cta: "Become a Distributor",
    href: "/partner",
    image: "/images/home/9.png",
  },
  {
    id: "merchants",
    icon: WalletCards,
    title: "Merchant Solutions",
    heading: "Accept Payments. Simplify Your Business.",
    copy: "Power your payment collection with PayBring, built for merchants who want simple, secure and scalable payment solutions.",
    label: "Services",
    items: ["Payment Gateway", "UPI", "QR", "Payment Links", "Collections", "Payouts", "Settlements", "API"],
    whyTitle: "Why PayBring?",
    reasons: ["Multiple payment methods", "Easy integration", "Powerful dashboard", "Simplified settlements"],
    cta: "Explore PayBring",
    href: "/products/paybring",
    image: "/images/home/4.png",
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Business & Enterprise Solutions",
    heading: "Financial Technology Built Around Your Business",
    copy: "Connect your business to scalable payment, collection, payout and financial service infrastructure.",
    label: "Solutions",
    items: ["Payment Collection", "Payouts", "UPI", "API Integration", "Wallet", "DMT", "Remittance", "Cash Management"],
    whyTitle: "Built For",
    reasons: ["E-commerce", "Enterprises", "Retail Chains", "Platforms", "Aggregators", "Service Businesses"],
    cta: "Talk to Our Business Team",
    href: "/support",
    image: "/images/home/36.png",
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      <InternalHero
        eyebrow="Solutions"
        title={<>Solutions Built for <span className="text-brand-500">Every Business.</span></>}
        copy="Whether you are a retailer, distributor, merchant or growing business, billbring gives you the technology and financial services to simplify operations and unlock new opportunities."
        image="/images/home/11.png"
        imageAlt="billbring solutions for retailers, distributors, merchants and businesses"
        points={["Retailers", "Distributors", "Businesses"]}
        cta={false}
      />

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell space-y-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <article id={solution.id} key={solution.id} className="scroll-mt-28 overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_28px_82px_-58px_rgba(8,18,37,.5)] dark:border-white/[.09] dark:bg-[#0b1118]">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[290px] bg-slate-100 lg:min-h-[520px] dark:bg-black">
                    <Image src={solution.image} alt={solution.heading} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
                  </div>
                  <div className="flex flex-col p-7 sm:p-9 lg:p-11">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300"><Icon className="h-5 w-5" /></span>
                      <p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">{solution.title}</p>
                    </div>
                    <h2 className="mt-6 max-w-[15ch] text-[clamp(2.2rem,4vw,4rem)] font-black leading-[.97] tracking-[-.055em]">{solution.heading}</h2>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">{solution.copy}</p>

                    <div className="mt-7">
                      <p className="text-[10px] font-black uppercase tracking-[.15em] text-slate-400">{solution.label}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {solution.items.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:border-white/[.09] dark:bg-white/[.04] dark:text-slate-300">{item}</span>)}
                      </div>
                    </div>

                    <div className="mt-7">
                      <p className="text-[10px] font-black uppercase tracking-[.15em] text-slate-400">{solution.whyTitle}</p>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {solution.reasons.map((reason) => <div key={reason} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />{reason}</div>)}
                      </div>
                    </div>

                    <div className="mt-auto pt-9"><ButtonLink href={solution.href}>{solution.cta}</ButtonLink></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
