import type { Metadata } from "next";
import { BookOpen, Braces, CheckCircle2, FileText, HelpCircle, NotebookTabs } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Resources",
  description: "billbring insights, guides, API documentation information and frequently asked questions.",
};

const blogs = [
  ["The Future of Digital Payments in India", "Digital payments are transforming the way businesses and customers manage everyday transactions. From UPI and QR payments to payment gateways and digital collections, technology is making payments faster, simpler and more accessible."],
  ["How FinTech Is Driving Financial Inclusion", "Financial technology is helping businesses and communities access essential financial services more easily. Digital banking, AEPS, DMT and assisted financial services are creating new opportunities across India's growing digital economy."],
  ["Why Businesses Need Integrated Payment Solutions", "Managing multiple payment and financial services through separate systems can make business operations complicated. An integrated technology platform can simplify collections, payouts, transactions and reporting."],
  ["Understanding UPI & Digital Payment Collection", "UPI has changed the way businesses collect payments. Fast transactions, simple customer experiences and easy integration make digital payment solutions an important part of modern business operations."],
] as const;

const guides = [
  ["Digital Payments Guide", "Understand the basics of UPI, QR, payment gateways, collections and digital payment solutions."],
  ["Retailer Business Guide", "Learn how retailers can offer financial and digital services to customers while creating additional business opportunities."],
  ["Distributor Growth Guide", "Discover how technology can help distributors manage retailer networks, transactions, commissions and business operations."],
  ["FinTech API Integration Guide", "Learn how businesses and platforms can integrate payment, payout and financial services using APIs."],
] as const;

const apis = [
  ["Payment API", "Payment collection and processing"],
  ["UPI API", "UPI payment solutions"],
  ["Payout API", "Vendor and merchant payouts"],
  ["DMT API", "Domestic money transfer"],
  ["BBPS API", "Bill payment services"],
  ["Recharge API", "Mobile and DTH recharge"],
  ["AEPS API", "Aadhaar-enabled banking services"],
  ["Wallet API", "Digital wallet services"],
] as const;

const faqs = [
  ["What is billbring?", "billbring is a FinTech platform providing digital payment and financial service solutions for retailers, distributors, merchants, businesses and B2B partners."],
  ["Who can use billbring?", "Our solutions are designed for retailers, distributors, merchants, enterprises, fintech companies and eligible business partners."],
  ["What services does billbring provide?", "Our ecosystem includes payment gateway, UPI, payouts, DMT, AEPS, BBPS, recharge, POS, wallet, travel, insurance and credit solutions."],
  ["Can businesses integrate billbring APIs?", "Yes. Businesses, fintech companies, enterprises, platforms and eligible financial institutions can explore B2B API integration opportunities."],
  ["How can I become a billbring partner?", "Submit your business and partnership requirements through our Partner With Us section, and our team will contact you."],
  ["How can retailers join billbring?", "Retailers can register through the retailer onboarding process, complete the required verification and activate their account."],
] as const;

export default function ResourcesPage() {
  return (
    <>
      <InternalHero
        eyebrow="Resources"
        title={<>Knowledge That Helps Your <span className="text-brand-500">Business Grow.</span></>}
        copy="Explore useful insights, guides and resources covering digital payments, FinTech, financial inclusion and billbring solutions."
        image="/images/home/13.png"
        imageAlt="billbring resources and financial technology knowledge"
        points={["Blog", "Guides", "API Documentation"]}
        cta={false}
      />

      <section id="blog" className="section-transition scroll-mt-28 py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300"><NotebookTabs className="h-5 w-5" /></span><div><p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Blog</p><h2 className="mt-1 text-3xl font-black tracking-[-.045em]">Insights on digital finance.</h2></div></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {blogs.map(([title, copy]) => <article key={title} className="rounded-[26px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118]"><FileText className="h-5 w-5 text-brand-500" /><h3 className="mt-6 text-2xl font-black tracking-[-.04em]">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">{copy}</p><span className="mt-6 inline-flex text-xs font-black text-brand-600 dark:text-brand-300">Read Article →</span></article>)}
          </div>
        </div>
      </section>

      <section id="guides" className="scroll-mt-28 border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell">
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300"><BookOpen className="h-5 w-5" /></span><div><p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Guides</p><h2 className="mt-1 text-3xl font-black tracking-[-.045em]">Practical guides for your business.</h2></div></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {guides.map(([title, copy]) => <article key={title} className="rounded-[24px] border border-slate-200/80 bg-white p-6 dark:border-white/[.09] dark:bg-[#0b1118]"><h3 className="text-xl font-black tracking-[-.035em]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{copy}</p><span className="mt-6 inline-flex text-xs font-black text-brand-600 dark:text-brand-300">Explore Guide →</span></article>)}
          </div>
        </div>
      </section>

      <section id="api-documentation" className="section-transition scroll-mt-28 py-20 sm:py-28 lg:py-32">
        <div className="section-shell grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300"><Braces className="h-5 w-5" /></span><p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">API Documentation</p></div>
            <h2 className="mt-5 text-[clamp(2.6rem,4.8vw,4.8rem)] font-black leading-[.96] tracking-[-.06em]">Build With billbring</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">Integrate billbring&apos;s payment and financial service solutions into your applications, platforms and business systems.</p>
            {/* <div className="mt-7 rounded-[22px] border border-amber-300/40 bg-amber-50 p-5 text-sm leading-6 text-amber-900 dark:border-amber-300/15 dark:bg-amber-300/[.06] dark:text-amber-100">
              API documentation is coming soon. No dummy API credentials or unapproved technical specifications are published here.
            </div> */}
          </div>
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118] sm:p-8">
            <p className="text-[10px] font-black uppercase tracking-[.16em] text-slate-400">Available APIs</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {apis.map(([name, copy]) => <div key={name} className="rounded-[18px] border border-slate-200/80 p-4 dark:border-white/[.09]"><div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-500" /><h3 className="text-sm font-black">{name}</h3></div><p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{copy}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-28 border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300"><HelpCircle className="h-5 w-5" /></span><p className="mt-5 text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">FAQs</p><h2 className="mt-4 text-[clamp(2.6rem,4.8vw,4.8rem)] font-black leading-[.96] tracking-[-.06em]">Frequently Asked Questions</h2></div>
          <div className="space-y-3">
            {faqs.map(([question, answer]) => <details key={question} className="group rounded-[20px] border border-slate-200/80 bg-white p-5 open:border-brand-500/25 dark:border-white/[.09] dark:bg-[#0b1118]"><summary className="cursor-pointer list-none text-sm font-black">{question}</summary><p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell"><div className="rounded-[30px] bg-[#06101a] p-8 text-white sm:p-10 lg:p-12"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-300">Need a partnership conversation?</p><h2 className="mt-5 text-[clamp(2.5rem,4.5vw,4.6rem)] font-black leading-[.97] tracking-[-.055em]">Build smarter financial solutions with billbring.</h2></div><ButtonLink href="/partner" variant="dark">Become an API Partner</ButtonLink></div></div></div>
      </section>
    </>
  );
}
