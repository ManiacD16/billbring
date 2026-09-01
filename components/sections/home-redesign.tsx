"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleDollarSign,
  CreditCard,
  FileCheck2,
  Fingerprint,
  Headphones,
  Landmark,
  LockKeyhole,
  Plane,
  QrCode,
  ReceiptText,
  Rocket,
  ShieldCheck,
  Smartphone,
  UserPlus,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const trustPoints = [
  { icon: ShieldCheck, title: "Secure", copy: "Transactions" },
  { icon: LockKeyhole, title: "Reliable", copy: "Platform" },
  { icon: Headphones, title: "24x7", copy: "Support" },
] as const;

const retailerPoints = ["High Commission", "Multiple Services", "Real-time Settlements", "24x7 Support"];
const merchantPoints = ["Easy Integration", "Secure Payments", "Multiple Payment Options", "Instant Settlements"];

const services: Array<{
  title: string;
  copy: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  tone: "green" | "blue" | "orange";
}> = [
  { title: "DMT", copy: "Domestic Money Transfer", href: "/products/bringdmt", icon: CircleDollarSign, tone: "green" },
  { title: "AEPS", copy: "Aadhaar Enabled Payment System", href: "/products/bringaeps", icon: Fingerprint, tone: "blue" },
  { title: "BBPS", copy: "Bharat Bill Payment System", href: "/products/billbring", icon: ReceiptText, tone: "blue" },
  { title: "MATM", copy: "Micro ATM Services", href: "/products/bringaeps", icon: CreditCard, tone: "green" },
  { title: "Recharge", copy: "Mobile, DTH, Data Recharge", href: "/products/billbring", icon: Smartphone, tone: "green" },
  { title: "Bill Payment", copy: "Electricity, Water, Gas & more", href: "/products/billbring", icon: FileCheck2, tone: "green" },
  { title: "Payment Gateway", copy: "Accept payments online securely", href: "/products/paybring", icon: CreditCard, tone: "blue" },
  { title: "UPI / QR", copy: "Collect payments using UPI & QR", href: "/products/paybring", icon: QrCode, tone: "orange" },
  { title: "Wallet", copy: "Digital Wallet Solutions", href: "/products/bringwallet", icon: WalletCards, tone: "blue" },
  { title: "CMS", copy: "Cash Management System", href: "/products/bringpayout", icon: Landmark, tone: "blue" },
  { title: "Travel", copy: "Flight, Bus, Hotel Bookings", href: "/products/bringtravel", icon: Plane, tone: "orange" },
  { title: "Insurance", copy: "Life, Health, Motor & more", href: "/products/bringinsure", icon: ShieldCheck, tone: "blue" },
];

const steps = [
  { number: "01", title: "Register", copy: "Create your account in minutes", icon: UserPlus, tone: "green" },
  { number: "02", title: "Complete KYC", copy: "Verify your details securely", icon: FileCheck2, tone: "green" },
  { number: "03", title: "Activate Account", copy: "Get access to all services", icon: Rocket, tone: "blue" },
  { number: "04", title: "Start Transacting", copy: "Serve customers and grow your business", icon: BarChart3, tone: "blue" },
] as const;

const whyPoints = ["Best Commission & Offers", "100% Secure & Reliable", "Advanced Technology", "Dedicated Support Team"];
const partners = ["SBI", "ICICI Bank", "HDFC BANK", "AXIS BANK", "airtel payments bank", "paytm payments bank", "kotak", "IDFC FIRST Bank"];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease },
};

function CheckList({ items, tone = "green" }: { items: string[]; tone?: "green" | "blue" }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-[12px] font-semibold text-[#40506a] dark:text-slate-300 sm:text-[13px]">
          <span className={tone === "green" ? "grid h-4 w-4 place-items-center rounded-full bg-[#0f9a56]/10 text-[#0f9a56]" : "grid h-4 w-4 place-items-center rounded-full bg-[#2666d7]/10 text-[#2666d7]"}>
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function HomeRedesign() {
  return (
    <div className="home-reference-page bg-[#fbfdfc] text-[#10213f] dark:bg-[#06101a] dark:text-white">
      <section className="home-reference-hero relative overflow-hidden border-b border-[#10213f]/[.05] dark:border-white/[.05]">
        <div className="home-city-lines pointer-events-none absolute inset-x-0 bottom-0 h-[42%] opacity-55 dark:opacity-20" />
        <div className="mx-auto grid min-h-[520px] w-full max-w-[1360px] items-center gap-8 px-5 py-12 sm:px-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-2 lg:px-10 lg:py-16 xl:min-h-[600px]">
          <motion.div {...fadeUp} className="relative z-10 max-w-[560px]">
            <h1 className="font-display text-[clamp(2.55rem,5vw,4.65rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-[#10213f] dark:text-white">
              Bringing Bills and
              <span className="block text-[#11995a] dark:text-[#54e394]">Payments Together</span>
              Seamlessly
            </h1>
            <p className="mt-5 max-w-[440px] text-[14px] font-medium leading-7 text-[#516078] dark:text-slate-300 sm:text-[16px]">
              One platform for all your financial services and payment solutions.
            </p>

            <div className="mt-8 grid max-w-[455px] grid-cols-3 gap-3 sm:gap-5">
              {trustPoints.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="flex min-w-0 flex-col items-center gap-1.5 text-center sm:flex-row sm:gap-2.5 sm:text-left">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#11995a]/20 bg-white text-[#11995a] shadow-[0_8px_24px_-18px_rgba(17,153,90,.55)] dark:bg-white/[.04] dark:text-[#54e394]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <strong className="block text-[10px] font-extrabold text-[#10213f] dark:text-white sm:text-[11px]">{title}</strong>
                    <span className="block break-words text-[8px] leading-3 text-[#7c8798] dark:text-slate-400 sm:text-[10px]">{copy}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="relative z-[1] -mx-3 lg:-mr-14 lg:ml-0"
          >
            <div className="hero-dashboard-vignette relative mx-auto aspect-[1.5/1] w-full max-w-[790px]">
              <Image
                src="/images/home/2.png"
                alt="BillBring dashboard on desktop and mobile"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-1 pb-12 sm:pb-16">
        <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <div className="relative grid gap-4 lg:grid-cols-2">
            <motion.article {...fadeUp} className="home-audience-card overflow-hidden rounded-[18px] border border-[#11995a]/15 bg-white shadow-[0_26px_80px_-58px_rgba(16,33,63,.38)] dark:border-[#54e394]/12 dark:bg-[#0b1622]">
              <div className="grid min-h-[300px] sm:grid-cols-[0.92fr_1.08fr]">
                <div className="p-6 sm:p-8">
                  <p className="text-[10px] font-black uppercase tracking-[.12em] text-[#11995a] dark:text-[#54e394]">I&apos;M A</p>
                  <h2 className="mt-1 text-[22px] font-extrabold tracking-[-.02em] text-[#11995a] dark:text-[#54e394] sm:text-[26px]">Retailer / Distributor</h2>
                  <p className="mt-3 text-[12px] leading-5 text-[#5a687e] dark:text-slate-300 sm:text-[13px]">Join BillBring and offer DMT, AEPS, BBPS, Recharge, Bill Payment and many more financial services.</p>
                  <CheckList items={retailerPoints} />
                </div>
                <div className="relative min-h-[250px] sm:min-h-full">
                  <Image src="/images/home/3.png" alt="BillBring retailer and distributor solution" fill sizes="(max-width: 640px) 100vw, 44vw" className="audience-image object-cover object-center" />
                </div>
              </div>
              <div className="px-5 pb-5 sm:px-7 sm:pb-6">
                <Link href="/partner" className="group flex h-11 w-full items-center justify-center gap-2 rounded-[7px] bg-[linear-gradient(90deg,#0a8b52,#13a962)] text-[12px] font-bold text-white transition hover:brightness-105">
                  Join BillBring <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>

            <motion.article {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="home-audience-card overflow-hidden rounded-[18px] border border-[#326de5]/14 bg-white shadow-[0_26px_80px_-58px_rgba(16,33,63,.38)] dark:border-[#6a96ff]/12 dark:bg-[#0b1622]">
              <div className="grid min-h-[300px] sm:grid-cols-[0.92fr_1.08fr]">
                <div className="p-6 sm:p-8">
                  <p className="text-[10px] font-black uppercase tracking-[.12em] text-[#2465d8] dark:text-[#6d9cff]">I&apos;M A</p>
                  <h2 className="mt-1 text-[22px] font-extrabold tracking-[-.02em] text-[#2465d8] dark:text-[#6d9cff] sm:text-[26px]">Merchant / Business</h2>
                  <p className="mt-3 text-[12px] leading-5 text-[#5a687e] dark:text-slate-300 sm:text-[13px]">Accept payments online with PayBring Payment Gateway and grow your business.</p>
                  <CheckList items={merchantPoints} tone="blue" />
                </div>
                <div className="relative min-h-[250px] sm:min-h-full">
                  <Image src="/images/home/4.png" alt="PayBring merchant payment gateway" fill sizes="(max-width: 640px) 100vw, 44vw" className="audience-image object-cover object-center" />
                </div>
              </div>
              <div className="px-5 pb-5 sm:px-7 sm:pb-6">
                <Link href="/products/paybring" className="group flex h-11 w-full items-center justify-center gap-2 rounded-[7px] bg-[linear-gradient(90deg,#1759dd,#2372ee)] text-[12px] font-bold text-white transition hover:brightness-105">
                  Go to PayBring <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>

            <span className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#10213f]/10 bg-white text-[12px] font-black text-[#10213f] shadow-md lg:grid dark:border-white/10 dark:bg-[#0b1622] dark:text-white">OR</span>
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-18">
        <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-[28px] font-extrabold tracking-[-.03em] text-[#10213f] dark:text-white sm:text-[32px]">Our Services</h2>
            <p className="mt-1 text-[12px] text-[#66748c] dark:text-slate-400">Complete Financial Solutions for Every Need</p>
          </motion.div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {services.map(({ title, copy, href, icon: Icon, tone }) => {
              const toneClasses = tone === "green" ? "text-[#11995a] bg-[#11995a]/8" : tone === "orange" ? "text-[#ee9b3b] bg-[#ee9b3b]/9" : "text-[#3068d8] bg-[#3068d8]/8";
              return (
                <motion.div key={title} {...fadeUp}>
                  <Link href={href} className="service-reference-tile group flex min-h-[92px] items-center gap-3 rounded-[12px] border border-[#10213f]/[.075] bg-white p-3.5 transition hover:-translate-y-1 hover:border-[#11995a]/25 hover:shadow-[0_18px_40px_-32px_rgba(16,33,63,.4)] dark:border-white/[.08] dark:bg-[#0b1622]">
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${toneClasses}`}><Icon className="h-5 w-5" /></span>
                    <span className="min-w-0">
                      <strong className="block text-[11px] font-extrabold leading-4 text-[#10213f] dark:text-white">{title}</strong>
                      <span className="mt-0.5 block text-[8.5px] leading-3 text-[#6b778b] dark:text-slate-400 sm:text-[9px]">{copy}</span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-[28px] font-extrabold tracking-[-.03em] text-[#10213f] dark:text-white sm:text-[32px]">How It Works</h2>
            <p className="mt-1 text-[12px] text-[#66748c] dark:text-slate-400">Simple Steps to Start Your Journey</p>
          </motion.div>

          <div className="relative mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <div className="absolute left-[11%] right-[11%] top-8 hidden border-t border-dashed border-[#5d7eb1]/25 lg:block" aria-hidden="true" />
            {steps.map(({ number, title, copy, icon: Icon, tone }) => (
              <motion.div key={number} {...fadeUp} className="relative text-center">
                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#10213f]/10 bg-white shadow-[0_12px_30px_-24px_rgba(16,33,63,.45)] dark:border-white/10 dark:bg-[#0b1622]">
                  <Icon className={tone === "green" ? "h-6 w-6 text-[#11995a]" : "h-6 w-6 text-[#2c67d8]"} />
                  <span className={tone === "green" ? "absolute -right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-[#11995a] text-[8px] font-black text-white" : "absolute -right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-[#2c67d8] text-[8px] font-black text-white"}>{number}</span>
                </div>
                <h3 className="mt-4 text-[12px] font-extrabold text-[#10213f] dark:text-white">{title}</h3>
                <p className="mx-auto mt-1 max-w-[160px] text-[10px] leading-4 text-[#748096] dark:text-slate-400">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-18">
        <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="overflow-hidden rounded-[18px] border border-[#2f6ad8]/10 bg-[linear-gradient(115deg,#f3f8ff_0%,#fbfdfc_46%,#f1fbf7_100%)] p-6 dark:border-white/[.08] dark:bg-[linear-gradient(115deg,#0a1524_0%,#0a1720_48%,#091910_100%)] sm:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[.14em] text-[#11995a] dark:text-[#54e394]">WHY CHOOSE BILLBRING?</p>
                <h2 className="mt-3 max-w-[320px] text-[27px] font-extrabold leading-[1.13] tracking-[-.03em] text-[#10213f] dark:text-white sm:text-[32px]">One Platform. Unlimited Possibilities.</h2>
                <p className="mt-4 max-w-[360px] text-[12px] leading-6 text-[#5e6b80] dark:text-slate-300">We empower retailers, distributors and merchants with technology, services and support to grow their business.</p>
                <CheckList items={whyPoints} />
                <div className="relative mt-5 h-[150px] w-[180px] sm:h-[175px] sm:w-[210px]">
                  <Image src="/images/home/7.png" alt="Secure BillBring platform" fill sizes="210px" className="object-contain" />
                </div>
              </div>

              <div>
                <h3 className="text-[24px] font-extrabold leading-[1.18] tracking-[-.03em] text-[#10213f] dark:text-white sm:text-[28px]">Powerful Dashboard for<br className="hidden sm:block" /> Smarter Business</h3>
                <p className="mt-3 max-w-[390px] text-[12px] leading-6 text-[#5e6b80] dark:text-slate-300">Manage transactions, track performance, check reports and grow your business all from one dashboard.</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 sm:max-w-[310px]">
                  <Link href="/products/billbring" className="flex h-10 items-center justify-center rounded-[7px] bg-[#11995a] px-4 text-[11px] font-bold text-white transition hover:brightness-105">Explore BillBring</Link>
                  <Link href="/products/paybring" className="flex h-10 items-center justify-center rounded-[7px] border border-[#10213f]/20 bg-white px-4 text-[11px] font-bold text-[#10213f] transition hover:border-[#11995a]/40 dark:border-white/15 dark:bg-white/[.04] dark:text-white">Explore PayBring</Link>
                </div>
                <div className="relative mt-6 aspect-[1.55/1] w-full max-w-[620px]">
                  <Image src="/images/home/5.png" alt="BillBring business dashboard analytics" fill sizes="(max-width: 1024px) 100vw, 50vw" className="dashboard-feature-image object-cover object-center" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-8 sm:pb-10">
        <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-extrabold text-[#11995a] dark:text-[#54e394]">Our Banking &amp; Technology Partners</p>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
            {partners.map((partner) => (
              <div key={partner} className="grid min-h-[58px] place-items-center rounded-[8px] border border-[#10213f]/[.07] bg-white px-3 text-center text-[11px] font-extrabold tracking-[-.02em] text-[#24406a] shadow-[0_10px_24px_-24px_rgba(16,33,63,.4)] dark:border-white/[.07] dark:bg-[#0b1622] dark:text-slate-200">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 pt-2 sm:pb-12">
        <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[17px] bg-[linear-gradient(100deg,#071f47_0%,#082b58_48%,#075d4a_100%)] px-6 py-8 text-white sm:px-9 sm:py-10 lg:min-h-[190px] lg:px-12">
            <div className="relative z-10 max-w-[520px]">
              <h2 className="text-[28px] font-extrabold tracking-[-.03em] sm:text-[34px]">Let&apos;s Grow Together</h2>
              <p className="mt-2 text-[12px] text-white/72 sm:text-[13px]">Join thousands of retailers and merchants who trust BillBring and PayBring</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/partner" className="flex h-10 items-center rounded-[7px] bg-[#11995a] px-5 text-[11px] font-bold text-white transition hover:brightness-110">Join BillBring</Link>
                <Link href="/products/paybring" className="flex h-10 items-center rounded-[7px] bg-[#2465d8] px-5 text-[11px] font-bold text-white transition hover:brightness-110">Go to PayBring</Link>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-[-18%] right-[-4%] hidden h-[128%] w-[58%] lg:block">
              <Image src="/images/home/6.png" alt="" fill sizes="55vw" className="object-contain object-right-bottom" aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#17a969]/20 blur-3xl" aria-hidden="true" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}