"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Building2,
  Check,
  CircleDollarSign,
  Code2,
  Fingerprint,
  Globe2,
  Landmark,
  MoveRight,
  Network,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Store,
  WalletCards,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { productGroups, products } from "@/data/products";

const ease = [0.22, 1, 0.36, 1] as const;

const groupMeta = {
  "Accept Money": {
    index: "01",
    label: "Accept money",
    copy: "Collections, cards, bills, POS and assisted payment journeys in one connected layer.",
    icon: CircleDollarSign,
  },
  "Move Money": {
    index: "02",
    label: "Move money",
    copy: "Payout and transfer workflows with clear states, beneficiaries and settlement visibility.",
    icon: MoveRight,
  },
  "Financial Services": {
    index: "03",
    label: "Financial services",
    copy: "Wallet, AEPS and credit journeys that extend what your business can offer customers.",
    icon: WalletCards,
  },
  "Expand Your Offering": {
    index: "04",
    label: "Expand your offering",
    copy: "Travel and insurance experiences that sit naturally beside your core payment services.",
    icon: Globe2,
  },
} as const;

const flow = [
  { number: "01", title: "Connect", copy: "Choose the services and APIs that fit your operating model." },
  { number: "02", title: "Launch", copy: "Bring payment and financial journeys into one consistent experience." },
  { number: "03", title: "Operate", copy: "Track transaction states, collections, payouts and service activity." },
  { number: "04", title: "Expand", copy: "Add new capabilities without rebuilding the whole financial stack." },
];

const audiences = [
  {
    icon: Store,
    title: "Retailers & agents",
    copy: "Serve more everyday financial needs from one simple operating interface.",
    href: "/solutions#retailers",
  },
  {
    icon: Building2,
    title: "Merchants & businesses",
    copy: "Collect, pay out and understand money movement without fragmented workflows.",
    href: "/solutions#merchants",
  },
  {
    icon: Network,
    title: "Platforms & enterprises",
    copy: "Compose financial capabilities through an API-first layer built to scale with you.",
    href: "/solutions#enterprise",
  },
];

const checks = [
  "One product language across 19 capabilities",
  "Clear transaction states and operational visibility",
  "API-first architecture for product teams",
  "Designed for partner, merchant and enterprise journeys",
];

function PaymentOrbit() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[1/1.03] w-full max-w-[690px]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full border border-ink-900/[.08] dark:border-white/[.09]" />
      <div className="absolute inset-[19%] rounded-full border border-dashed border-brand-500/[.24]" />
      <div className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/[.10] blur-[42px]" />

      <motion.div
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[7%]"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-500 shadow-[0_0_0_8px_rgba(18,175,124,.10)]" />
        <span className="absolute bottom-[8%] right-[7%] h-2.5 w-2.5 rounded-full bg-ink-900 dark:bg-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.28, duration: 0.9, ease }}
        className="editorial-card absolute left-[17%] top-[6%] w-[66%] rounded-[2.1rem] p-5 sm:p-6"
      >
        <div className="flex items-center justify-between gap-3 border-b border-ink-900/[.08] pb-4 dark:border-white/[.08]">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-900 text-white dark:bg-white dark:text-ink-950">
              <WalletCards className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[var(--muted)]">BillBring network</p>
              <p className="mt-0.5 text-sm font-semibold">Unified financial layer</p>
            </div>
          </div>
          <span className="h-2.5 w-2.5 rounded-full bg-brand-500 shadow-[0_0_0_6px_rgba(18,175,124,.10)]" />
        </div>

        <div className="grid grid-cols-2 gap-2.5 pt-4">
          {[
            ["Collect", "BBPS · POS", ReceiptText],
            ["Move", "Payout · DMT", Landmark],
            ["Verify", "AEPS", Fingerprint],
            ["Build", "API-first", Code2],
          ].map(([title, caption, Icon], index) => {
            const I = Icon as typeof ReceiptText;
            return (
              <motion.div
                key={String(title)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46 + index * 0.07, duration: 0.5, ease }}
                className="rounded-[1.35rem] border border-ink-900/[.08] bg-[var(--surface-muted)] p-3.5 dark:border-white/[.08]"
              >
                <I className="h-4 w-4 text-brand-500" />
                <p className="mt-7 text-sm font-semibold">{String(title)}</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[.1em] text-[var(--muted)]">{String(caption)}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24, y: 16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.65, duration: 0.7, ease }}
        className="editorial-card absolute bottom-[60%] left-[3%] rounded-[1.4rem] px-4 py-3.5"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white"><Check className="h-4 w-4" /></span>
          <div><p className="text-[9px] font-bold uppercase tracking-[.13em] text-[var(--muted)]">Status</p><p className="mt-0.5 text-xs font-semibold">Transaction complete</p></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.78, duration: 0.72, ease }}
        className="editorial-card absolute right-[1%] top-[0%] rounded-[1.4rem] px-4 py-3"
      >
        <div className="flex items-center gap-2.5 text-xs font-semibold"><Zap className="h-4 w-4 text-brand-500" /> API event received</div>
      </motion.div>
    </div>
  );
}

export function HomeRedesign() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-8 sm:pb-28 sm:pt-12 lg:min-h-[calc(100svh-88px)] lg:pb-24 lg:pt-16">
        <div className="brand-grid absolute inset-0 -z-10 opacity-70" />
        <div className="absolute -right-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-500/[.13] blur-[120px]" />
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-8">
          <div className="max-w-[790px]">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease }} className="inline-flex items-center gap-2 rounded-full border border-ink-900/[.10] bg-white/[.58] px-3 py-2 text-[10px] font-bold uppercase tracking-[.15em] text-ink-900 backdrop-blur dark:border-white/[.10] dark:bg-white/[.04] dark:text-white">
              <Sparkles className="h-3.5 w-3.5 text-brand-500" /> One platform. Every financial service.
            </motion.div>

            <h1 className="mt-7 max-w-[12ch] font-display text-[clamp(3.8rem,8.3vw,8.25rem)] font-semibold leading-[.82] tracking-[-.035em] text-ink-950 dark:text-white">
              <span className="block overflow-hidden pb-[.14em]"><motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ delay: 0.05, duration: 0.82, ease }}>Bring every</motion.span></span>
              <span className="block overflow-hidden pb-[.08em] leading-[.82]"><motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ delay: 0.12, duration: 0.82, ease }}>payment into</motion.span></span>
              <span className="block overflow-hidden pb-[.08em]"><motion.span className="block text-brand-500" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ delay: 0.19, duration: 0.82, ease }}>one flow.</motion.span></span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.62, ease }} className="mt-7 max-w-[640px] text-[17px] leading-8 text-[var(--muted)] sm:text-[19px]">
              BillBring connects collections, payouts, bill payments, transfers and financial services in one clear operating layer for growing businesses.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42, duration: 0.62, ease }} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/partner">Become a Partner</ButtonLink>
              <ButtonLink href="/products" variant="secondary">Explore all products</ButtonLink>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.7 }} className="mt-10 grid max-w-[650px] grid-cols-2 gap-x-5 gap-y-5 border-t border-ink-900/[.10] pt-6 text-sm dark:border-white/[.10] sm:grid-cols-4">
              {[["19", "capabilities"], ["04", "product groups"], ["API", "first by design"], ["01", "connected layer"]].map(([value, label]) => (
                <div key={label}><p className="font-display text-2xl font-semibold tracking-[-.05em] text-ink-950 dark:text-white">{value}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-[var(--muted)]">{label}</p></div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.975, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.9, ease }}>
            <PaymentOrbit />
          </motion.div>
        </div>

        <a href="#platform" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-bold uppercase tracking-[.16em] text-[var(--muted)] lg:flex">
          Explore the platform <span className="grid h-8 w-8 place-items-center rounded-full border border-ink-900/[.12] dark:border-white/[.12]"><ArrowDownRight className="h-3.5 w-3.5" /></span>
        </a>
      </section>

      <section id="platform" className="section-space section-transition">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:self-start" data-reveal>
              <p className="eyebrow">The BillBring system</p>
              <h2 className="mt-5 max-w-[9ch] font-display text-[clamp(3rem,5.2vw,5.6rem)] font-semibold leading-[.9] tracking-[-.065em] text-ink-950 dark:text-white">One system, many money journeys.</h2>
              <p className="section-copy mt-6 max-w-md">A simpler architecture for accepting, moving and extending financial services without making customers or operations teams jump between disconnected systems.</p>
              <Link href="/products" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-950 dark:text-white"><span className="link-underline">See all 19 capabilities</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {productGroups.map((group) => {
                const meta = groupMeta[group];
                const Icon = meta.icon;
                const groupProducts = products.filter((product) => product.group === group);
                return (
                  <article key={group} data-reveal className="editorial-card group min-h-[430px] rounded-[2rem] p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-500/[.12] text-brand-600 dark:text-brand-300"><Icon className="h-5 w-5" /></span>
                      <span className="font-display text-4xl font-semibold tracking-[-.06em] text-ink-900/[.16] dark:text-white/[.15]">{meta.index}</span>
                    </div>
                    <h3 className="mt-16 font-display text-[2rem] font-semibold leading-[.95] tracking-[-.05em]">{meta.label}</h3>
                    <p className="mt-4 max-w-[42ch] text-sm leading-6 text-[var(--muted)]">{meta.copy}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {groupProducts.map((product) => (
                        <Link key={product.slug} href={`/products/${product.slug}`} className="rounded-full border border-ink-900/[.10] px-3 py-2 text-[10px] font-semibold transition hover:border-brand-500/[.45] hover:bg-brand-500/[.08] dark:border-white/[.10]">{product.name}</Link>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-ink-950 text-white dark:bg-[#071329]" id="how-it-works">
        <div className="section-shell">
          <div className="grid gap-8 border-b border-white/[.10] pb-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div data-reveal>
              <p className="eyebrow !text-brand-300">From integration to operation</p>
              <h2 className="mt-5 max-w-[11ch] font-display text-[clamp(3rem,5.5vw,5.9rem)] font-semibold leading-[.88] tracking-[-.065em]">A cleaner path from connection to scale.</h2>
            </div>
            <p data-reveal="right" className="max-w-xl text-[16px] leading-7 text-slate-300 lg:justify-self-end">BillBring is designed so product, operations and partner teams can reason about the same financial flow without translating between disconnected tools.</p>
          </div>

          <div className="grid lg:grid-cols-4">
            {flow.map((item, index) => (
              <article key={item.number} data-reveal className="relative border-b border-white/[.10] py-8 lg:min-h-[320px] lg:border-b-0 lg:border-r lg:px-7 lg:py-10 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0">
                <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[.18em] text-brand-300">Step {item.number}</span>{index < flow.length - 1 && <ArrowRight className="hidden h-4 w-4 text-white/[.20] lg:block" />}</div>
                <h3 className="mt-16 font-display text-4xl font-semibold tracking-[-.055em]">{item.title}</h3>
                <p className="mt-4 max-w-[30ch] text-sm leading-6 text-slate-400">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-transition">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
            <div data-reveal>
              <p className="eyebrow">Built for different operating models</p>
              <h2 className="mt-5 max-w-[9ch] font-display text-[clamp(3rem,5vw,5.4rem)] font-semibold leading-[.9] tracking-[-.065em]">Same platform. Different scale.</h2>
              <p className="section-copy mt-6 max-w-md">Keep the experience coherent whether BillBring is used by a local operator, a growing merchant network or an enterprise product team.</p>
            </div>

            <div className="space-y-3">
              {audiences.map(({ icon: Icon, title, copy, href }, index) => (
                <Link key={title} href={href} data-reveal className="editorial-card group grid min-h-[168px] gap-5 rounded-[1.75rem] p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-500/[.12] text-brand-600 dark:text-brand-300"><Icon className="h-5 w-5" /></span>
                  <div><p className="text-[9px] font-bold uppercase tracking-[.15em] text-[var(--muted)]">0{index + 1} · Audience</p><h3 className="mt-2 font-display text-2xl font-semibold tracking-[-.045em]">{title}</h3><p className="mt-2 max-w-[52ch] text-sm leading-6 text-[var(--muted)]">{copy}</p></div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/[.10] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-brand-500/[.4] group-hover:bg-brand-500 group-hover:text-white dark:border-white/[.10]"><ArrowUpRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-transition">
        <div className="section-shell">
          <div className="overflow-hidden rounded-[2.4rem] bg-[#0a1730] text-white shadow-[0_32px_100px_-56px_rgba(10,23,48,.8)]">
            <div className="grid lg:grid-cols-[.84fr_1.16fr]">
              <div className="border-b border-white/[.10] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12" data-reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[.12] px-3 py-2 text-[10px] font-bold uppercase tracking-[.15em] text-brand-300"><Braces className="h-3.5 w-3.5" /> API-first platform</span>
                <h2 className="mt-8 max-w-[9ch] font-display text-[clamp(3rem,5vw,5.2rem)] font-semibold leading-[.88] tracking-[-.065em]">Build the financial layer into your product.</h2>
                <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-300">Connect services with a developer-minded architecture, then keep operational states visible after the API call leaves your application.</p>
                <div className="mt-8"><ButtonLink href="/developers" variant="dark">Explore developers</ButtonLink></div>
              </div>

              <div className="relative p-5 sm:p-8 lg:p-10" data-reveal="right">
                <div className="rounded-[1.7rem] border border-white/[.10] bg-[#071329] p-4 sm:p-6">
                  <div className="flex items-center justify-between border-b border-white/[.08] pb-4"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-white/[.18]"/><span className="h-2.5 w-2.5 rounded-full bg-white/[.18]"/><span className="h-2.5 w-2.5 rounded-full bg-brand-500"/></div><span className="text-[9px] font-bold uppercase tracking-[.14em] text-slate-500">billbring / payouts</span></div>
                  <pre className="overflow-x-auto py-6 text-[11px] leading-7 text-slate-300 sm:text-[12px]"><code>{`POST /v1/payouts\n{\n  \"amount\": 9200,\n  \"currency\": \"INR\",\n  \"beneficiary\": \"merchant_1024\"\n}\n\n200 OK\n{ \"status\": \"PROCESSING\" }`}</code></pre>
                  <div className="grid gap-2 border-t border-white/[.08] pt-4 sm:grid-cols-3">
                    {["Request accepted", "Status tracked", "Event delivered"].map((item, index) => <div key={item} className="rounded-xl bg-white/[.035] p-3"><p className="text-[9px] font-bold text-brand-300">0{index + 1}</p><p className="mt-2 text-[10px] font-semibold text-slate-300">{item}</p></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-transition">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:items-center">
          <div data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/[.10] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-brand-700 dark:text-brand-300"><ShieldCheck className="h-3.5 w-3.5" /> Built for operational clarity</div>
            <h2 className="mt-6 max-w-[10ch] font-display text-[clamp(3rem,5vw,5.4rem)] font-semibold leading-[.9] tracking-[-.065em]">Less switching. More control.</h2>
            <p className="section-copy mt-6 max-w-xl">The experience is designed around the full lifecycle of money movement, not just the moment a payment button is clicked.</p>
          </div>
          <div className="editorial-card rounded-[2rem] p-6 sm:p-8" data-reveal="right">
            <div className="space-y-2">
              {checks.map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-ink-900/[.08] py-4 last:border-b-0 dark:border-white/[.08]">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-white"><Check className="h-3.5 w-3.5" /></span>
                  <p className="text-sm font-semibold">{item}</p>
                  <span className="text-[9px] font-bold uppercase tracking-[.12em] text-[var(--muted)]">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 pt-6 sm:pb-12">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-500 px-6 py-12 text-ink-950 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[38px] border-ink-950/[.06]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div data-reveal>
                <p className="text-[10px] font-bold uppercase tracking-[.18em]">Ready to connect the stack?</p>
                <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(3.2rem,6vw,6.4rem)] font-semibold leading-[.84] tracking-[-.075em]">Bring your next financial journey into one platform.</h2>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end" data-reveal="right">
                <Link href="/partner" className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1">Become a Partner <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                <Link href="/support" className="inline-flex min-h-14 items-center rounded-full border border-ink-950/[.18] px-6 py-3 text-sm font-semibold transition hover:bg-white/[.28]">Talk to our team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
