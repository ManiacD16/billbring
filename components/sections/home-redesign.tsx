"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Check,
  CircleCheck,
  CreditCard,
  FileCheck2,
  Fingerprint,
  Gauge,
  Landmark,
  Plane,
  QrCode,
  ReceiptText,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  UserPlus,
  WalletCards,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const heroBenefits = [
  { icon: Zap, title: "Fast Setup", copy: "Go live quickly" },
  { icon: Gauge, title: "Real-time View", copy: "Track every flow" },
  { icon: ShieldCheck, title: "Secure by Design", copy: "Protected operations" },
  { icon: CircleCheck, title: "Reliable Support", copy: "Help when needed" },
];

const heroMetrics = [
  ["19+", "Financial capabilities"],
  ["1", "Connected platform"],
  ["24×7", "Business support"],
  ["API", "Integration ready"],
  ["100%", "Operational visibility"],
];

const services = [
  { title: "DMT", copy: "Domestic Money Transfer", icon: Banknote, href: "/products/domestic-money-transfer" },
  { title: "AEPS", copy: "Aadhaar Enabled Payments", icon: Fingerprint, href: "/products/aeps" },
  { title: "BBPS", copy: "Bharat Bill Payment", icon: ReceiptText, href: "/products/bbps-bill-payment-recharge" },
  { title: "Micro ATM", copy: "Assisted cash services", icon: Landmark, href: "/products/bringaeps" },
  { title: "Recharge", copy: "Mobile, DTH & data", icon: Smartphone, href: "/products/bbps-bill-payment-recharge" },
  { title: "Bill Payment", copy: "Utilities and more", icon: FileCheck2, href: "/products/billbring" },
  { title: "Payment Gateway", copy: "Accept payments online", icon: CreditCard, href: "/products/payment-gateway-collection" },
  { title: "UPI / QR", copy: "Collect with UPI & QR", icon: QrCode, href: "/products/paybring" },
  { title: "Wallet", copy: "Connected digital wallet", icon: WalletCards, href: "/products/wallet" },
  { title: "POS / mPOS", copy: "In-person acceptance", icon: ShoppingBag, href: "/products/pos-mpos" },
  { title: "Travel", copy: "Flights, hotels & more", icon: Plane, href: "/products/bringtravel" },
  { title: "Insurance", copy: "Protection products", icon: ShieldCheck, href: "/products/bringinsure" },
];

const steps = [
  { number: "01", title: "Register", copy: "Create your BillBring account.", icon: UserPlus },
  { number: "02", title: "Complete KYC", copy: "Verify business details securely.", icon: FileCheck2 },
  { number: "03", title: "Activate Account", copy: "Choose services and integrations.", icon: Rocket },
  { number: "04", title: "Start Transacting", copy: "Serve customers and grow.", icon: Gauge },
];

const retailerPoints = ["High commission opportunities", "Multiple financial services", "Real-time settlements", "24×7 support"];
const merchantPoints = ["Easy integration", "Secure payment acceptance", "Multiple payment options", "Fast settlement visibility"];
const partnerNames = ["SBI", "ICICI Bank", "HDFC Bank", "Axis Bank", "Airtel Payments Bank", "Paytm", "Kotak", "IDFC FIRST Bank"];

const ecosystemStories = [
  {
    image: "/images/home/8.png",
    eyebrow: "Unified ecosystem",
    title: "A growing financial ecosystem",
    copy: "BillBring and PayBring connect assisted retail, merchant collections and everyday financial services in one operating layer.",
    href: "/products",
    variant: "feature" as const,
  },
  {
    image: "/images/home/9.png",
    eyebrow: "Retail network",
    title: "Everything a retailer needs",
    copy: "Give stores one interface for assisted services, devices and everyday customer transactions.",
    href: "/solutions",
    variant: "compact" as const,
  },
  {
    image: "/images/home/10.png",
    eyebrow: "Assisted commerce",
    title: "Built to serve customers faster",
    copy: "Equip distributors and retailers with connected tools for payments, collections and service delivery.",
    href: "/partner",
    variant: "compact" as const,
  },
  {
    image: "/images/home/11.png",
    eyebrow: "Connected infrastructure",
    title: "One BillBring hub across the business",
    copy: "Bring payments, banking rails, merchant tools and operational visibility into a single connected experience.",
    href: "/products/billbring",
    variant: "wide" as const,
  },
];

const connectedUseCases = [
  { image: "/images/home/12.png", title: "Secure digital collections", copy: "Accept, track and reconcile digital payments from one workspace." },
  { image: "/images/home/13.png", title: "Unified transaction rails", copy: "Connect payment and banking capabilities through a single operating layer." },
  { image: "/images/home/14.png", title: "Merchant operations", copy: "Manage payments, settlement visibility and service access with confidence." },
  { image: "/images/home/15.png", title: "Accept payments anywhere", copy: "Give businesses flexible ways to collect with QR and connected payment tools." },
  { image: "/images/home/16.png", title: "Smart POS for business", copy: "Bring billing, acceptance and business insights together at the counter." },
  { image: "/images/home/17.png", title: "Powering delivery commerce", copy: "Make collection and settlement easier for fast-moving local businesses." },
];

const aiOperations = [
  {
    image: "/images/home/18.png",
    eyebrow: "AI expense control",
    title: "Automate the busy work",
    copy: "Capture receipts, organize spend and keep approvals moving without turning finance into a manual follow-up loop.",
    stat: "Less manual work",
  },
  {
    image: "/images/home/20.png",
    eyebrow: "Settlement intelligence",
    title: "Reconcile with confidence",
    copy: "Bring exceptions, settlement status and operational visibility into one clearer workflow for finance teams.",
    stat: "Cleaner reconciliation",
  },
  {
    image: "/images/home/23.png",
    eyebrow: "Live finance insights",
    title: "See the signal sooner",
    copy: "Surface useful patterns from day-to-day activity so teams can act before small issues become bigger ones.",
    stat: "Faster decisions",
  },
];

const intelligenceSignals = [
  {
    icon: ReceiptText,
    title: "Capture automatically",
    copy: "Bring receipts, spend and transaction activity into one cleaner operating view.",
  },
  {
    icon: Gauge,
    title: "Understand what changed",
    copy: "See useful trends and exceptions without digging through multiple screens.",
  },
  {
    icon: Sparkles,
    title: "Act on the signal",
    copy: "Turn business activity into clear next steps for finance and operations teams.",
  },
];

const assistantGallery = [
  { image: "/images/home/29.png", title: "Let AI handle the busy work" },
  { image: "/images/home/30.png", title: "Always here for your business" },
  { image: "/images/home/31.png", title: "Smarter expenses, stronger business" },
  { image: "/images/home/32.png", title: "AI support across your workflow" },
  { image: "/images/home/33.png", title: "24×7 intelligent assistance" },
];

function BenefitItem({ icon: Icon, title, copy }: (typeof heroBenefits)[number]) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hero-green/20 bg-hero-green/10 text-hero-green shadow-[0_0_28px_rgba(24,214,72,.10)]">
        <Icon className="h-4 w-4" />
      </span>
      <div className="pt-0.5">
        <p className="text-[12px] font-bold text-ink-950 dark:text-white">{title}</p>
        <p className="mt-1 text-[11px] text-[var(--muted)]">{copy}</p>
      </div>
    </div>
  );
}

function AudienceCard({
  eyebrow,
  title,
  copy,
  points,
  image,
  href,
  button,
  tone,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  points: string[];
  image: string;
  href: string;
  button: string;
  tone: "green" | "blue";
}) {
  const green = tone === "green";

  return (
    <article className="home-card group relative min-h-[360px] overflow-hidden rounded-[1.65rem] p-6 sm:p-7 lg:p-8">
      <div className="relative z-10 max-w-[56%] sm:max-w-[52%]">
        <p className={green ? "text-xs font-bold text-brand-600 dark:text-brand-300" : "text-xs font-bold text-blue-600 dark:text-blue-300"}>{eyebrow}</p>
        <h3 className="mt-1 font-display text-[clamp(1.7rem,2.4vw,2.35rem)] font-semibold leading-tight tracking-[-.045em] text-ink-950 dark:text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy}</p>

        <ul className="mt-5 space-y-2.5">
          {points.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[12px] font-semibold text-ink-900 dark:text-slate-200">
              <Check className={green ? "h-3.5 w-3.5 text-brand-500" : "h-3.5 w-3.5 text-blue-500"} />
              {item}
            </li>
          ))}
        </ul>

        <Link href={href} className={green ? "mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand-600 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-700" : "mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"}>
          {button} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="absolute -bottom-1 -right-10 h-[82%] w-[62%] transition duration-500 group-hover:scale-[1.02] sm:-right-6 sm:w-[58%]">
        <Image src={image} alt="" fill sizes="(max-width: 768px) 58vw, 34vw" className="object-contain object-right-bottom" />
      </div>
    </article>
  );
}

function VisualStoryCard({
  image,
  eyebrow,
  title,
  copy,
  href,
  variant,
}: (typeof ecosystemStories)[number]) {
  if (variant === "feature") {
    return (
      <article className="group overflow-hidden rounded-[2rem] border border-ink-900/[.08] bg-[var(--surface-strong)] shadow-[0_32px_90px_-58px_rgba(16,33,63,.42)] transition duration-500 hover:-translate-y-1 hover:border-brand-500/25 dark:border-white/[.09] lg:col-span-7 lg:row-span-2">
        <div className="relative aspect-[2/1] min-h-[260px] overflow-hidden border-b border-ink-900/[.06] bg-[radial-gradient(circle_at_50%_45%,rgba(18,175,124,.14),transparent_58%)] dark:border-white/[.07] dark:bg-[radial-gradient(circle_at_50%_45%,rgba(25,230,83,.12),rgba(9,16,24,.35)_62%)] sm:min-h-[300px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            quality={88}
            className="object-contain p-4 transition duration-700 ease-out group-hover:scale-[1.025] sm:p-6"
          />
        </div>
        <div className="p-6 sm:p-8 lg:p-9">
          <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300">{eyebrow}</p>
          <h3 className="mt-3 max-w-[14ch] font-display text-[clamp(2rem,3vw,3.15rem)] font-semibold leading-[.98] tracking-[-.05em] text-ink-950 dark:text-white">{title}</h3>
          <p className="mt-4 max-w-[650px] text-sm leading-7 text-[var(--muted)] sm:text-[15px]">{copy}</p>
          <Link href={href} className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-brand-700 transition hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-100">
            Explore the ecosystem <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "wide") {
    return (
      <article className="group overflow-hidden rounded-[2rem] border border-ink-900/[.08] bg-[var(--surface-strong)] shadow-[0_28px_80px_-58px_rgba(16,33,63,.38)] dark:border-white/[.09] lg:col-span-12">
        <div className="grid md:grid-cols-[1.1fr_.9fr] md:items-stretch">
          <div className="relative min-h-[260px] overflow-hidden bg-brand-500/[.035] dark:bg-white/[.025] sm:min-h-[320px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              quality={86}
              className="object-contain p-4 transition duration-700 ease-out group-hover:scale-[1.025] sm:p-6"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
            <p className="eyebrow">{eyebrow}</p>
            <h3 className="mt-3 max-w-[12ch] font-display text-[clamp(2rem,3vw,3.2rem)] font-semibold leading-[.98] tracking-[-.05em] text-ink-950 dark:text-white">{title}</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-[15px]">{copy}</p>
            <Link href={href} className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-bold text-brand-700 transition hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-100">
              See how it connects <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-ink-900/[.08] bg-[var(--surface-strong)] shadow-[0_24px_74px_-56px_rgba(16,33,63,.35)] transition duration-500 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-[0_34px_90px_-58px_rgba(18,175,124,.34)] dark:border-white/[.09] lg:col-span-5">
      <div className="grid h-full sm:grid-cols-[.92fr_1.08fr]">
        <div className="relative min-h-[220px] overflow-hidden bg-brand-500/[.035] dark:bg-white/[.025] sm:min-h-[250px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 44vw, 38vw"
            quality={86}
            className="object-contain p-3 transition duration-700 ease-out group-hover:scale-[1.035] sm:p-4"
          />
        </div>
        <div className="flex flex-col p-6 sm:justify-center sm:p-7 lg:p-7">
          <p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">{eyebrow}</p>
          <h3 className="mt-2 font-display text-[1.45rem] font-semibold leading-[1.05] tracking-[-.035em] text-ink-950 dark:text-white sm:text-[1.65rem]">{title}</h3>
          <p className="mt-3 text-xs leading-6 text-[var(--muted)] sm:text-[13px]">{copy}</p>
          <Link href={href} className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-bold text-brand-700 transition hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-100">
            Learn more <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function HomeRedesign() {
  return (
    <>
      <section className="home-hero relative overflow-hidden border-b border-ink-900/[.06] dark:border-white/[.07]">
        <div className="home-hero-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-36 top-2 h-[34rem] w-[34rem] rounded-full bg-hero-green/10 blur-[120px] dark:bg-hero-green/15" />

        <div className="section-shell relative grid min-h-[730px] items-center gap-10 pb-10 pt-10 lg:grid-cols-[.9fr_1.1fr] lg:pb-8 lg:pt-14 xl:min-h-[790px]">
          <div className="relative z-10 max-w-[720px]">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease }} className="inline-flex items-center gap-2 rounded-full border border-hero-green/20 bg-hero-green/[.07] px-4 py-2 text-[11px] font-bold text-brand-700 dark:text-hero-green">
              <Zap className="h-3.5 w-3.5" /> Unified Payments & Financial Services
            </motion.div>

            <h1 className="mt-7 max-w-[11.5ch] font-display text-[clamp(3.6rem,7vw,7.5rem)] font-semibold leading-[.88] tracking-[-.06em] text-ink-950 dark:text-white">
              <motion.span className="block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.72, ease }}>Bringing bills and</motion.span>
              <motion.span className="mt-1 block text-hero-green" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 0.72, ease }}>payments together.</motion.span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26, duration: 0.58, ease }} className="mt-6 max-w-[590px] text-[17px] leading-8 text-[var(--muted)] sm:text-[19px]">
              One platform for collections, payouts, bill payments, recharges and everyday financial services — built for retailers, distributors and growing businesses.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.58, ease }} className="mt-8 flex flex-wrap gap-3">
              <Link href="/partner" className="group inline-flex min-h-14 items-center gap-3 rounded-xl bg-hero-green px-6 text-sm font-bold text-[#041008] shadow-[0_14px_34px_-16px_rgba(24,214,72,.72)] transition hover:-translate-y-0.5 hover:brightness-105">
                Become a Partner <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link href="/products" className="inline-flex min-h-14 items-center gap-3 rounded-xl border border-ink-900/[.12] bg-white/60 px-6 text-sm font-semibold text-ink-950 backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-500/40 dark:border-white/[.12] dark:bg-white/[.04] dark:text-white">
                Explore Services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.44, duration: 0.7 }} className="mt-9 grid max-w-[680px] grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
              {heroBenefits.map((item) => <BenefitItem key={item.title} {...item} />)}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30, scale: .97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: .18, duration: .85, ease }} className="relative z-0 mx-auto w-full max-w-[850px] lg:-mr-8 xl:-mr-12">
            <div className="absolute left-[8%] top-[14%] h-[62%] w-[72%] rounded-full bg-hero-green/[.12] blur-[70px] dark:bg-hero-green/[.16]" />
            <div className="relative aspect-[3/2] w-full">
              <Image src="/images/home/1.png" alt="BillBring payments and expense dashboard across laptop and mobile" fill priority sizes="(max-width: 1024px) 94vw, 58vw" quality={88} className="object-contain drop-shadow-[0_30px_50px_rgba(4,13,22,.18)] dark:drop-shadow-[0_34px_70px_rgba(0,0,0,.42)]" />
            </div>
          </motion.div>

          <div className="hero-metric-strip lg:col-span-2">
            {heroMetrics.map(([value, label], index) => (
              <div key={label} className="relative px-3 py-4 sm:px-5">
                {index > 0 && <span className="absolute left-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-ink-900/[.08] dark:bg-white/[.08] sm:block" />}
                <p className="font-display text-[1.55rem] font-semibold tracking-[-.05em] text-ink-950 dark:text-white">{value}</p>
                <p className="mt-1 text-[11px] font-medium text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space !py-16 sm:!py-20" id="solutions">
        <div className="section-shell">
          <div className="relative grid gap-5 lg:grid-cols-2" data-reveal-stagger>
            <AudienceCard
              eyebrow="I'M A"
              title="Retailer / Distributor"
              copy="Join BillBring and offer DMT, AEPS, BBPS, recharge, bill payment and more financial services from one platform."
              points={retailerPoints}
              image="/images/home/3.png"
              href="/solutions#retailers"
              button="Join BillBring"
              tone="green"
            />
            <AudienceCard
              eyebrow="I'M A"
              title="Merchant / Business"
              copy="Accept payments online with PayBring and manage collection, payout and settlement workflows with confidence."
              points={merchantPoints}
              image="/images/home/4.png"
              href="/solutions#merchants"
              button="Go to PayBring"
              tone="blue"
            />
            <span className="absolute left-1/2 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ink-900/[.08] bg-[var(--surface-strong)] text-xs font-black text-ink-900 shadow-lg dark:border-white/[.10] dark:text-white lg:grid">OR</span>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" id="services">
        <div className="section-shell">
          <div className="text-center" data-reveal>
            <p className="eyebrow">Our Services</p>
            <h2 className="mx-auto mt-3 max-w-[760px] font-display text-[clamp(2.3rem,4vw,4.4rem)] font-semibold leading-[.95] tracking-[-.06em] text-ink-950 dark:text-white">Complete financial solutions for every need.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">A single BillBring layer for the services your customers use every day.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6" data-reveal-stagger>
            {services.map(({ title, copy, icon: Icon, href }) => (
              <Link key={title} href={href} className="service-tile group min-h-[148px] rounded-2xl p-4 sm:p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/[.09] text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:text-brand-300"><Icon className="h-[18px] w-[18px]" /></span>
                <p className="mt-5 text-[13px] font-bold text-ink-950 dark:text-white">{title}</p>
                <p className="mt-1.5 text-[10px] leading-4 text-[var(--muted)]">{copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="section-shell">
          <div className="grid overflow-hidden rounded-[2rem] border border-ink-900/[.08] bg-[var(--surface-strong)] shadow-[0_28px_90px_-60px_rgba(16,33,63,.55)] dark:border-white/[.08] lg:grid-cols-[.72fr_1.28fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12" data-reveal>
              <p className="eyebrow">Business Control Center</p>
              <h2 className="mt-4 max-w-[10ch] font-display text-[clamp(2.5rem,4.4vw,4.6rem)] font-semibold leading-[.92] tracking-[-.06em] text-ink-950 dark:text-white">Everything important, in one view.</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">See collections, transactions, settlements and service activity from a unified BillBring dashboard across desktop and mobile.</p>
              <div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold text-ink-900 dark:text-slate-200">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[.07] px-3 py-2"><Gauge className="h-3.5 w-3.5 text-brand-500" /> Live visibility</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[.07] px-3 py-2"><ShieldCheck className="h-3.5 w-3.5 text-brand-500" /> Secure access</span>
              </div>
            </div>
            <div className="relative min-h-[360px] bg-brand-500/[.035] p-6 dark:bg-white/[.02] sm:min-h-[460px] sm:p-8" data-reveal="right">
              <Image src="/images/home/2.png" alt="BillBring dashboard on desktop and mobile" fill sizes="(max-width: 1024px) 100vw, 58vw" quality={86} className="object-contain p-5 sm:p-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-transition relative overflow-hidden bg-[var(--surface-muted)] py-20 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-500/[.06] blur-[100px] dark:bg-brand-500/[.09]" />
        <div className="pointer-events-none absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-brand-500/[.05] blur-[120px] dark:bg-brand-500/[.08]" />

        <div className="section-shell relative">
          <div className="mx-auto grid max-w-[1260px] gap-7 lg:grid-cols-[1.05fr_.95fr] lg:items-end" data-reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[.07] px-3.5 py-2 text-[10px] font-black uppercase tracking-[.16em] text-brand-700 dark:border-brand-400/20 dark:text-brand-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_14px_rgba(18,175,124,.75)]" />
                BillBring Ecosystem
              </div>
              <h2 className="mt-5 max-w-[13ch] font-display text-[clamp(2.65rem,4.7vw,4.9rem)] font-semibold leading-[.93] tracking-[-.06em] text-ink-950 dark:text-white">
                One connected network. <span className="text-brand-600 dark:text-brand-300">More ways to grow.</span>
              </h2>
            </div>

            <div className="max-w-xl lg:justify-self-end lg:pb-1">
              <p className="text-sm leading-7 text-[var(--muted)] sm:text-[15px] sm:leading-8">
                From the retail counter to digital merchant collections, BillBring connects the people, payment rails and business tools that keep everyday commerce moving.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {["Assisted retail", "Merchant payments", "Connected services"].map((item) => (
                  <span key={item} className="rounded-full border border-ink-900/[.08] bg-[var(--surface-strong)] px-3 py-2 text-[10px] font-bold text-ink-900 shadow-sm dark:border-white/[.08] dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1260px] gap-5 lg:grid-cols-12" data-reveal-stagger>
            {ecosystemStories.map((story) => <VisualStoryCard key={story.image} {...story} />)}
          </div>
        </div>
      </section>

      <section className="section-transition bg-[var(--surface-muted)] py-20 sm:py-24" id="how-it-works">
        <div className="section-shell">
          <div className="text-center" data-reveal>
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-3 font-display text-[clamp(2.3rem,4vw,4rem)] font-semibold tracking-[-.06em] text-ink-950 dark:text-white">Simple steps to start your journey.</h2>
          </div>

          <div className="relative mt-12 grid gap-8 md:grid-cols-4" data-reveal-stagger>
            <div className="absolute left-[12%] right-[12%] top-8 hidden border-t border-dashed border-brand-500/30 md:block" />
            {steps.map(({ number, title, copy, icon: Icon }) => (
              <article key={number} className="relative z-10 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-brand-500/20 bg-[var(--surface-strong)] text-brand-600 shadow-[0_16px_38px_-24px_rgba(18,175,124,.55)] dark:text-brand-300">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="absolute left-[calc(50%+22px)] top-0 grid h-6 w-6 place-items-center rounded-full bg-brand-500 text-[9px] font-black text-white">{number}</span>
                <h3 className="mt-5 text-sm font-bold text-ink-950 dark:text-white">{title}</h3>
                <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-[var(--muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space !py-20 sm:!py-28">
        <div className="section-shell">
          <div className="home-feature-panel overflow-hidden rounded-[2rem]">
            <div className="grid lg:grid-cols-[.82fr_1.18fr]">
              <div className="p-7 sm:p-10 lg:p-12" data-reveal>
                <p className="eyebrow">Why choose BillBring?</p>
                <h2 className="mt-4 max-w-[11ch] font-display text-[clamp(2.5rem,4.5vw,4.8rem)] font-semibold leading-[.92] tracking-[-.06em] text-ink-950 dark:text-white">One platform. Unlimited possibilities.</h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">Empower retailers, distributors and merchants with the technology, services and visibility they need to grow.</p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {["Better commissions & offers", "Secure and reliable", "Advanced technology", "Dedicated support"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-semibold text-ink-900 dark:text-slate-200"><CircleCheck className="h-4 w-4 text-brand-500" /> {item}</div>
                  ))}
                </div>

                <div className="relative mt-8 h-[230px] max-w-[360px]">
                  <Image src="/images/home/7.png" alt="BillBring security shield" fill sizes="360px" quality={82} className="object-contain object-left-bottom" />
                </div>
              </div>

              <div className="relative min-h-[530px] border-t border-ink-900/[.07] bg-brand-500/[.035] p-6 dark:border-white/[.07] dark:bg-white/[.02] sm:p-8 lg:border-l lg:border-t-0 lg:p-10" data-reveal="right">
                <div className="max-w-[520px]">
                  <p className="text-sm font-bold text-ink-950 dark:text-white">Powerful dashboard for smarter business</p>
                  <p className="mt-2 text-xs leading-6 text-[var(--muted)]">Manage transactions, track performance, check reports and stay in control from one connected workspace.</p>
                </div>
                <div className="relative mt-5 aspect-[3/2] w-full">
                  <Image src="/images/home/5.png" alt="BillBring business dashboard" fill sizes="(max-width: 1024px) 90vw, 52vw" quality={86} className="object-contain object-center drop-shadow-[0_30px_50px_rgba(16,33,63,.14)]" />
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/products" className="inline-flex h-11 items-center gap-2 rounded-lg bg-brand-600 px-5 text-xs font-bold text-white transition hover:bg-brand-700">Explore BillBring <ArrowRight className="h-3.5 w-3.5" /></Link>
                  <Link href="/products/paybring" className="inline-flex h-11 items-center gap-2 rounded-lg border border-ink-900/[.12] px-5 text-xs font-bold text-ink-950 transition hover:bg-white/70 dark:border-white/[.12] dark:text-white dark:hover:bg-white/[.05]">Explore PayBring <ArrowUpRight className="h-3.5 w-3.5" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-transition bg-[var(--surface-muted)] py-20 sm:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="eyebrow">Connected Commerce</p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,4.6vw,4.8rem)] font-semibold leading-[.94] tracking-[-.06em] text-ink-950 dark:text-white">Built around real business moments.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">Every BillBring capability is designed to fit naturally into the way retailers, merchants and teams already work.</p>
          </div>

          <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-3" data-reveal-stagger>
            {connectedUseCases.map((item) => (
              <article key={item.image} className="group overflow-hidden rounded-[1.55rem] border border-ink-900/[.08] bg-[var(--surface-strong)] dark:border-white/[.08]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" quality={80} className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-bold text-ink-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space !py-20 sm:!py-28">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/[.08] bg-[#06110b] px-5 py-7 shadow-[0_34px_110px_-64px_rgba(0,0,0,.9)] sm:px-7 sm:py-9 lg:px-10 lg:py-11">
            <div className="pointer-events-none absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-hero-green/[.10] blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-[24rem] w-[24rem] rounded-full bg-emerald-400/[.06] blur-[110px]" />

            <div className="relative grid gap-7 text-white lg:grid-cols-[.92fr_1.08fr] lg:items-end" data-reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-hero-green/25 bg-hero-green/[.08] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-hero-green">
                  <Sparkles className="h-3.5 w-3.5" /> AI-powered operations
                </div>
                <h2 className="mt-5 max-w-[10ch] font-display text-[clamp(2.65rem,4.7vw,4.9rem)] font-semibold leading-[.91] tracking-[-.06em]">
                  Smarter work. Better decisions.
                </h2>
              </div>

              <div className="lg:pb-1 lg:justify-self-end">
                <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-[15px]">
                  Give finance teams a calmer operating layer. BillBring combines automation, settlement visibility and business intelligence so people spend less time chasing activity and more time acting on it.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Receipt capture", "Auto reconciliation", "Live insights"].map((label) => (
                    <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/[.09] bg-white/[.045] px-3 py-2 text-[10px] font-semibold text-slate-200">
                      <Check className="h-3 w-3 text-hero-green" /> {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-12" data-reveal-stagger>
              {aiOperations.map((item, index) => {
                if (index === 0) {
                  return (
                    <article key={item.image} className="group overflow-hidden rounded-[1.8rem] border border-white/[.09] bg-white/[.04] shadow-[0_24px_70px_-48px_rgba(0,0,0,.85)] md:col-span-2 xl:col-span-7 xl:row-span-2">
                      <div className="relative aspect-[16/9] overflow-hidden bg-[#091811] sm:aspect-[16/8.7]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1279px) 100vw, 58vw"
                          quality={88}
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07130d]/55 via-transparent to-transparent" />
                      </div>
                      <div className="grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:p-7">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[.16em] text-hero-green">{item.eyebrow}</p>
                          <h3 className="mt-2 max-w-[18ch] font-display text-[clamp(1.75rem,2.7vw,2.6rem)] font-semibold leading-[1.02] tracking-[-.04em] text-white">{item.title}</h3>
                          <p className="mt-3 max-w-xl text-[13px] leading-6 text-slate-400 sm:text-sm">{item.copy}</p>
                        </div>
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hero-green/20 bg-hero-green/[.08] px-3 py-2 text-[10px] font-bold text-hero-green">
                          <Zap className="h-3.5 w-3.5" /> {item.stat}
                        </span>
                      </div>
                    </article>
                  );
                }

                return (
                  <article key={item.image} className="group overflow-hidden rounded-[1.65rem] border border-white/[.09] bg-white/[.04] shadow-[0_20px_60px_-50px_rgba(0,0,0,.8)] xl:col-span-5">
                    <div className="grid h-full sm:grid-cols-[.95fr_1.05fr] md:grid-cols-1 lg:grid-cols-[.9fr_1.1fr] xl:grid-cols-1 2xl:grid-cols-[.92fr_1.08fr]">
                      <div className="relative min-h-[210px] overflow-hidden bg-[#091811] sm:min-h-[230px] md:min-h-[250px] lg:min-h-[220px] xl:min-h-[205px] 2xl:min-h-[230px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 42vw"
                          quality={86}
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07130d]/45 via-transparent to-transparent" />
                      </div>
                      <div className="flex flex-col justify-center p-5 sm:p-6">
                        <p className="text-[10px] font-black uppercase tracking-[.15em] text-hero-green">{item.eyebrow}</p>
                        <h3 className="mt-2 font-display text-[1.55rem] font-semibold leading-[1.02] tracking-[-.035em] text-white">{item.title}</h3>
                        <p className="mt-3 text-xs leading-6 text-slate-400">{item.copy}</p>
                        <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/[.07] pt-4">
                          <span className="text-[10px] font-bold text-slate-300">{item.stat}</span>
                          <span className="grid h-8 w-8 place-items-center rounded-full bg-hero-green/[.10] text-hero-green transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-transition bg-[var(--surface-muted)] py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-7 xl:grid-cols-[.78fr_1.22fr] xl:items-end" data-reveal>
            <div>
              <p className="eyebrow">Business Intelligence</p>
              <h2 className="mt-4 max-w-[10ch] font-display text-[clamp(2.55rem,4.6vw,4.8rem)] font-semibold leading-[.92] tracking-[-.06em] text-ink-950 dark:text-white">
                See more. Chase less.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base xl:justify-self-end">
              A quieter way to understand what is happening across spend, collections and day-to-day finance. BillBring brings the important signal forward without turning the page into another dashboard wall.
            </p>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-12" data-reveal-stagger>
            <article className="group overflow-hidden rounded-[1.8rem] border border-ink-900/[.08] bg-[var(--surface-strong)] shadow-[0_28px_80px_-58px_rgba(16,33,63,.42)] dark:border-white/[.08] xl:col-span-7">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0a1512]">
                <Image
                  src="/images/home/19.png"
                  alt="BillBring business growth intelligence dashboard"
                  fill
                  sizes="(max-width: 1279px) 100vw, 58vw"
                  quality={88}
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[.16em] text-hero-green">Growth overview</p>
                    <h3 className="mt-2 max-w-[14ch] font-display text-[clamp(1.65rem,3vw,2.7rem)] font-semibold leading-[.98] tracking-[-.04em] text-white">
                      One clear view of the business.
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[10px] font-bold text-white backdrop-blur-md">
                    <Gauge className="h-3.5 w-3.5 text-hero-green" />
                    Live visibility
                  </span>
                </div>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
                <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  Bring collections, expenses and operating activity into a single view that is easier to read, explain and act on.
                </p>
                <Link
                  href="/products/billbring"
                  className="inline-flex w-fit items-center gap-2 text-xs font-bold text-brand-700 transition hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-100"
                >
                  Explore intelligence <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>

            <aside className="grid gap-5 xl:col-span-5">
              <article className="overflow-hidden rounded-[1.8rem] border border-ink-900/[.08] bg-[var(--surface-strong)] shadow-[0_24px_70px_-58px_rgba(16,33,63,.38)] dark:border-white/[.08]">
                <div className="grid sm:grid-cols-[1fr_.95fr] xl:grid-cols-1 2xl:grid-cols-[1fr_.95fr]">
                  <div className="flex flex-col justify-center p-6 sm:p-7">
                    <p className="text-[10px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">Decision layer</p>
                    <h3 className="mt-3 max-w-[12ch] font-display text-[1.8rem] font-semibold leading-[1] tracking-[-.04em] text-ink-950 dark:text-white">
                      Keep the important numbers close.
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      A focused dashboard for the metrics that actually need attention, not another grid of competing widgets.
                    </p>
                  </div>
                  <div className="relative min-h-[230px] overflow-hidden border-t border-ink-900/[.06] bg-[#0a1512] dark:border-white/[.07] sm:border-l sm:border-t-0 xl:border-l-0 xl:border-t 2xl:border-l 2xl:border-t-0">
                    <Image
                      src="/images/home/21.png"
                      alt="BillBring unified business dashboard"
                      fill
                      sizes="(max-width: 1279px) 100vw, 42vw"
                      quality={86}
                      className="object-cover transition duration-700 ease-out hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </article>

              <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
                {intelligenceSignals.map(({ icon: Icon, title, copy }) => (
                  <div
                    key={title}
                    className="rounded-[1.35rem] border border-ink-900/[.08] bg-[var(--surface-strong)] p-5 dark:border-white/[.08]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/[.10] text-brand-600 dark:text-brand-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h4 className="mt-4 text-sm font-bold text-ink-950 dark:text-white">{title}</h4>
                    <p className="mt-2 text-[11px] leading-5 text-[var(--muted)]">{copy}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[1.4rem] border border-ink-900/[.07] bg-[var(--surface-strong)] px-5 py-4 dark:border-white/[.07] sm:px-6">
            <p className="max-w-2xl text-xs leading-6 text-[var(--muted)] sm:text-sm">
              The result is a cleaner decision experience: fewer repeated visuals, less dashboard noise and a clearer path from activity to action.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Capture", "Understand", "Act"].map((item) => (
                <span key={item} className="rounded-full border border-brand-500/15 bg-brand-500/[.06] px-3 py-2 text-[10px] font-bold text-brand-700 dark:text-brand-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space !py-20 sm:!py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/[.10] text-brand-600 dark:text-brand-300"><Sparkles className="h-5 w-5" /></div>
            <p className="eyebrow mt-5">BillBring AI Assistant</p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,4.6vw,4.8rem)] font-semibold leading-[.94] tracking-[-.06em] text-ink-950 dark:text-white">Always available for the work behind the work.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">From repetitive expense handling to quick operational questions, AI can help teams keep everyday finance moving.</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6" data-reveal-stagger>
            {assistantGallery.map((item, index) => (
              <article key={item.image} className={`group overflow-hidden rounded-[1.5rem] border border-ink-900/[.08] bg-[var(--surface-strong)] dark:border-white/[.08] ${index < 2 ? "xl:col-span-3" : "xl:col-span-2"}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill sizes={index < 2 ? "(max-width: 1280px) 100vw, 50vw" : "(max-width: 1280px) 100vw, 33vw"} quality={80} className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <h3 className="text-sm font-bold text-ink-950 dark:text-white">{item.title}</h3>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-500/[.10] text-brand-600 dark:text-brand-300"><ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="section-shell">
          <div className="text-center" data-reveal>
            <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[var(--muted)]">Our Banking & Technology Partners</p>
          </div>
          <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl border border-ink-900/[.08] bg-[var(--surface-strong)] sm:grid-cols-4 lg:grid-cols-8 dark:border-white/[.08]" data-reveal-stagger>
            {partnerNames.map((name) => <div key={name} className="grid min-h-20 place-items-center border-b border-r border-ink-900/[.07] px-3 text-center text-[12px] font-black tracking-[-.02em] text-ink-900 last:border-r-0 dark:border-white/[.07] dark:text-slate-200 sm:[&:nth-child(n+5)]:border-b-0 lg:border-b-0">{name}</div>)}
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-10">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#071d3d] px-7 py-10 text-white shadow-[0_30px_80px_-48px_rgba(4,20,42,.75)] sm:px-10 sm:py-12 lg:min-h-[300px] lg:px-12">
            <div className="absolute inset-y-0 right-0 w-[58%] bg-[radial-gradient(circle_at_center,rgba(18,175,124,.22),transparent_66%)]" />
            <div className="relative z-10 max-w-[560px]" data-reveal>
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-brand-300">Let's grow together</p>
              <h2 className="mt-4 font-display text-[clamp(2.7rem,4.8vw,5rem)] font-semibold leading-[.9] tracking-[-.06em]">Build more business on one connected platform.</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">Join retailers, distributors and merchants using BillBring to simplify everyday financial services.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/partner" className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand-500 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-400">Join BillBring <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/products/paybring" className="inline-flex h-12 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">Go to PayBring <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-12 hidden h-[112%] w-[58%] lg:block" data-reveal="right">
              <Image src="/images/home/6.png" alt="Business partnership handshake" fill sizes="50vw" quality={84} className="object-contain object-right-bottom" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}