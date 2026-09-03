import type { Metadata } from "next";
import Image from "next/image";
import {
  Accessibility,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Waypoints,
} from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Company",
  description:
    "About billbring, our vision, mission and the principles behind our connected financial technology ecosystem.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    copy: "Building modern technology for the evolving financial ecosystem.",
  },
  {
    icon: Target,
    title: "Reliability",
    copy: "Providing stable and dependable platforms for everyday transactions.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    copy: "Keeping security and trust at the heart of our technology.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    copy: "Making financial services available through a connected digital network.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    copy: "Growing together with our customers, businesses and ecosystem partners.",
  },
] as const;

const ecosystem = [
  "Retailers",
  "Distributors",
  "Businesses",
  "FinTechs",
  "Financial Institutions",
] as const;

export default function CompanyPage() {
  return (
    <>
      <InternalHero
        eyebrow="Company"
        title={
          <>
            Simplifying Financial Services{" "}
            <span className="text-brand-500">Through Technology.</span>
          </>
        }
        copy="billbring is a FinTech platform connecting businesses, retailers, distributors and financial institutions through simple, secure and technology-driven financial solutions."
        image="/images/home/35.png"
        imageAlt="billbring financial services ecosystem for retailers and businesses"
        points={["Payments", "Banking Services", "Digital Financial Solutions"]}
        cta={false}
      />

      <section
        id="about"
        className="section-transition scroll-mt-28 py-20 sm:py-28 lg:py-32"
      >
        <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center xl:gap-16">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">
              About billbring
            </p>
            <h2 className="mt-4 text-[clamp(2.6rem,4.8vw,4.8rem)] font-black leading-[.96] tracking-[-.06em]">
              One connected ecosystem for payments, banking and digital financial solutions.
            </h2>
            <p className="mt-7 max-w-xl text-[16px] leading-8 text-slate-600 dark:text-slate-300">
              We bring payments, banking services and digital financial solutions together on one connected ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Payments", "Banking", "Financial Services"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm dark:border-white/[.09] dark:bg-white/[.04] dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <figure className="group relative min-h-[360px] overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-100 shadow-[0_28px_80px_-42px_rgba(15,23,42,.34)] dark:border-white/[.09] dark:bg-[#0b1118] sm:min-h-[440px] lg:min-h-[520px]">
            <Image
              src="/images/home/8.png"
              alt="billbring connected payment and financial services platform"
              fill
              priority={false}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06101a]/75 via-[#06101a]/5 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-300">
                Connected by design
              </p>
              <p className="mt-2 max-w-lg text-lg font-black leading-snug tracking-[-.025em] sm:text-xl">
                One technology ecosystem connecting everyday financial services with business growth.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id="vision-mission"
        className="scroll-mt-28 border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28"
      >
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_.9fr] lg:items-stretch">
          <div className="grid gap-5">
            <article className="rounded-[28px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118] sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">
                Our Vision
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-.045em] sm:text-4xl">
                Bringing Bills and Payments Together Seamlessly.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
                To make digital financial services simpler, more accessible and easier to use for businesses and communities.
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118] sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">
                Our Mission
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-.045em] sm:text-4xl">
                Reliable technology for connected financial services.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
                To build reliable technology that connects payments, banking and financial services while helping our partners grow their businesses.
              </p>
            </article>
          </div>

          <figure className="group relative min-h-[420px] overflow-hidden rounded-[30px] border border-slate-200/80 bg-[#07131c] dark:border-white/[.09] lg:min-h-full">
            <Image
              src="/images/home/6.png"
              alt="Digital partnership and trust within the billbring ecosystem"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06101a]/90 via-[#06101a]/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-300">
                Technology + Partnership
              </p>
              <p className="mt-3 max-w-md text-2xl font-black leading-tight tracking-[-.04em]">
                Built to connect businesses, partners and financial services with trust at the core.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">
              What We Stand For
            </p>
            <h2 className="mt-4 text-[clamp(2.6rem,4.8vw,4.8rem)] font-black leading-[.96] tracking-[-.06em]">
              Technology, trust and growth in one ecosystem.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {values.map(({ icon: Icon, title, copy }) => (
              <article
                key={title}
                className="rounded-[24px] border border-slate-200/80 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 dark:border-white/[.09] dark:bg-[#0b1118]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {copy}
                </p>
              </article>
            ))}
          </div>

          <figure className="group relative mt-6 min-h-[330px] overflow-hidden rounded-[30px] border border-slate-200/80 dark:border-white/[.09] sm:min-h-[520px]">
            <Image
              src="/images/home/31.png"
              alt="billbring technology helping businesses operate and grow"
              fill
              sizes="100vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02] rounded-[30px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06101a]/88 via-[#06101a]/46 to-transparent" />
            <figcaption className="absolute inset-y-0 left-44 flex max-w-xl flex-col justify-end p-7 text-white sm:p-10">
              <div className="mt-3 bg-[#687487]/80 border border-cyan-200/80 px-2 py-1 rounded-md text-2xl font-black leading-tight tracking-[-.04em] sm:text-3xl">
                <p className="text-[16px] font-black uppercase tracking-[.18em] text-brand-300 ">
                  Built for business growth
                </p>
              </div>
              <div className="mt-3 bg-[#12af7c]/60 border border-slate-200/80 px-2 py-1 rounded-md text-2xl font-black leading-tight tracking-[-.04em] sm:text-3xl">
                <p className="mt-3 text-2xl font-black leading-tight tracking-[-.04em] sm:text-3xl">
                  {/* <span className="box-decoration-clone bg-[#12af7c]/60 px-2 py-1 text-black"> */}
                  Connected technology that helps partners operate, serve customers and grow with confidence.
                  {/* </span> */}
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-white/[.015] sm:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[.84fr_1.16fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300">
                <Waypoints className="h-5 w-5" />
              </span>
              <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">
                Our Ecosystem
              </p>
            </div>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4rem)] font-black leading-[.98] tracking-[-.055em]">
              One platform. Connected opportunities.
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-4 text-lg font-black sm:text-xl">
              {ecosystem.map((item, index) => (
                <span key={item} className="flex items-center gap-3">
                  <span>{item}</span>
                  {index < ecosystem.length - 1 && (
                    <span className="text-brand-500">→</span>
                  )}
                </span>
              ))}
            </div>

            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              From assisted financial services to digital payments and business integrations, billbring connects the participants of the financial ecosystem through one technology platform.
            </p>
          </div>

          <figure className="group relative min-h-[360px] overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-42px_rgba(15,23,42,.34)] dark:border-white/[.09] dark:bg-[#0b1118] sm:min-h-[450px]">
            <Image
              src="/images/home/34.png"
              alt="billbring ecosystem services including payments, banking, recharge, travel and insurance"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </figure>
        </div>
      </section>

      <section className="section-transition py-20 sm:py-28">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          <article
            id="leadership"
            className="scroll-mt-28 rounded-[26px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118]"
          >
            <p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">
              Leadership
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-[-.04em]">
              Leadership information
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
              This section is reserved for approved leadership information.
            </p>
          </article>

          <article
            id="careers"
            className="scroll-mt-28 rounded-[26px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118]"
          >
            <p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">
              Careers
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-[-.04em]">
              Careers information
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
              This section is reserved for approved careers information.
            </p>
          </article>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[30px] bg-[#06101a] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(18,175,124,.18),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-300">
                  Company
                </p>
                <h2 className="mt-5 text-[clamp(2.6rem,4.8vw,4.8rem)] font-black leading-[.96] tracking-[-.06em]">
                  Let&apos;s Build the Future of Digital Finance
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                  Partner with billbring and be part of a growing financial technology ecosystem.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/partner" variant="dark">
                  Partner With Us
                </ButtonLink>
                <ButtonLink href="/support" variant="secondary">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
