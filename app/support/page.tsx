import type { Metadata } from "next";
import { HelpCircle, HeartHandshake } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact billbring for partnership and business requirements, or explore frequently asked questions.",
};

export default function SupportPage() {
  return (
    <>
      <InternalHero
        eyebrow="Contact"
        title={<>Let&apos;s Build the Future of <span className="text-brand-500">Digital Finance.</span></>}
        copy="Partner with billbring and be part of a growing financial technology ecosystem."
        image="/images/home/6.png"
        imageAlt="billbring business partnership"
        points={["Business Requirements", "Partnership", "FAQs"]}
        cta={false}
      />
      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          <article className="rounded-[28px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118] sm:p-9">
            <HeartHandshake className="h-6 w-6 text-brand-500" />
            <h2 className="mt-6 text-3xl font-black tracking-[-.045em]">Partner With Us</h2>
            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">Submit your business and partnership requirements through our Partner With Us section, and our team will contact you.</p>
            <div className="mt-7"><ButtonLink href="/partner">Partner With Us</ButtonLink></div>
          </article>
          <article className="rounded-[28px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118] sm:p-9">
            <HelpCircle className="h-6 w-6 text-brand-500" />
            <h2 className="mt-6 text-3xl font-black tracking-[-.045em]">Frequently Asked Questions</h2>
            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">Find answers about billbring, eligible users, services, API integrations, partnerships and retailer onboarding.</p>
            <div className="mt-7"><ButtonLink href="/resources#faqs" variant="secondary">View FAQs</ButtonLink></div>
          </article>
        </div>
      </section>
    </>
  );
}
