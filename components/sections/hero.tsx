"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  CreditCard,
  QrCode,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

const ease = [0.22, 1, 0.36, 1] as const;

function DashboardHeroVisual() {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 90, damping: 20 });
  const y = useSpring(my, { stiffness: 90, damping: 20 });
  const phoneX = useSpring(useTransform(mx, (v) => v * 1.45), { stiffness: 80, damping: 18 });
  const phoneY = useSpring(useTransform(my, (v) => v * 1.45), { stiffness: 80, damping: 18 });

  return (
    <div
      className="relative mx-auto aspect-[1.04/1] w-full max-w-[760px]"
      onPointerMove={(event) => {
        if (reduced) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set((event.clientX - rect.left - rect.width / 2) / 34);
        my.set((event.clientY - rect.top - rect.height / 2) / 34);
      }}
      onPointerLeave={() => { mx.set(0); my.set(0); }}
      aria-hidden="true"
    >
      <div className="absolute inset-[10%] rounded-full bg-brand-500/[.14] blur-[90px] dark:bg-brand-500/[.10]" />
      <div className="absolute left-[14%] top-[5%] h-[72%] w-[72%] rounded-full border border-brand-500/[.10] animate-pulse-ring" />
      <div className="absolute left-[20%] top-[11%] h-[60%] w-[60%] rounded-full border border-dashed border-brand-500/[.15] animate-orbit" />

      <motion.div
        style={{ x, y }}
        className="premium-surface absolute left-[1%] top-[7%] w-[92%] sm:w-[85%] rounded-[30px] p-3 shadow-[0_55px_120px_-56px_rgba(8,18,37,.58)] sm:p-5"
      >
        <div className="flex gap-3">
          <aside className="hidden w-[23%] rounded-[21px] bg-ink-950 p-4 text-white sm:block">
            <div className="mb-6 flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-brand-500/[.15]"><WalletCards className="h-4 w-4 text-brand-400" /></div>
              <span className="text-sm font-extrabold">billbring</span>
            </div>
            {['Overview','Transactions','Settlements','Services','Payouts','Reports'].map((item, i) => (
              <div key={item} className={`mb-1.5 flex items-center justify-between rounded-lg px-2.5 py-2 text-[9px] font-semibold ${i === 0 ? 'bg-brand-600 text-white' : 'text-slate-400'}`}>
                {item}{i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
              </div>
            ))}
            <div className="mt-6 rounded-xl border border-white/[.10] bg-white/[.04] p-3"><p className="text-[8px] uppercase tracking-[.13em] text-slate-500">System</p><div className="mt-2 flex items-center gap-2 text-[9px] font-bold text-brand-300"><span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_0_4px_rgba(59,197,154,.08)]" /> Unified service layer</div></div>
          </aside>

          <div className="flex-1 p-1 sm:p-2">
            <div className="flex items-center justify-between">
              <div><p className="text-[9px] font-bold uppercase tracking-[.12em] text-slate-400">Command center</p><p className="mt-1 text-sm font-black text-ink-950 dark:text-white sm:text-base">Business overview</p></div>
              <div className="flex items-center gap-2"><span className="hidden rounded-full bg-brand-500/[.10] px-2.5 py-1 text-[8px] font-extrabold text-brand-600 sm:inline-flex">Preview</span><div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-500/[.20] to-cyan-400/[.10]" /></div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[['Transactions','24,58,920'],['Collected','₹ 12.45Cr'],['Payouts','₹ 8.75Cr'],['Retailers','25,680']].map(([key,value], index) => (
                <motion.div key={key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .52 + index * .06, duration: .45 }} className="rounded-xl border border-slate-100 bg-slate-50/[.80] p-2.5 dark:border-white/[.05] dark:bg-white/[.03]">
                  <p className="text-[7px] font-semibold uppercase tracking-[.08em] text-slate-400">{key}</p><p className="mt-1 text-[11px] font-black text-ink-950 dark:text-white sm:text-sm">{value}</p><p className="mt-1 flex items-center gap-1 text-[7px] font-extrabold text-brand-500"><TrendingUp className="h-2.5 w-2.5" /> demo trend</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-[1.35fr_.65fr]">
              <div className="rounded-2xl border border-slate-100 p-3 dark:border-white/[.05]">
                <div className="mb-3 flex items-center justify-between"><p className="text-[9px] font-extrabold">Transaction overview</p><span className="text-[7px] text-slate-400">This year</span></div>
                <svg viewBox="0 0 350 120" className="w-full overflow-visible" aria-hidden="true">
                  <defs><linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#12AF7C" stopOpacity=".28"/><stop offset="100%" stopColor="#12AF7C" stopOpacity="0"/></linearGradient></defs>
                  <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} d="M4 94 C45 70,63 82,98 58 S160 70,192 42 S244 51,270 28 S318 34,346 10 L346 118 L4 118Z" fill="url(#heroChartFill)"/>
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: .65, duration: 1.2, ease }} d="M4 94 C45 70,63 82,98 58 S160 70,192 42 S244 51,270 28 S318 34,346 10" fill="none" stroke="#12AF7C" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="rounded-2xl border border-slate-100 p-3 dark:border-white/[.05]"><p className="text-[9px] font-extrabold">Top services</p>{['AEPS','DMT','BBPS','UPI / QR'].map((service,index)=><div key={service} className="mt-3 flex items-center justify-between text-[8px]"><span>{service}</span><span className="font-extrabold text-slate-400">{[32,27,21,18][index]}%</span></div>)}</div>
            </div>
          </div>
        </div>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: .72, duration: 1.1, ease }} className="absolute -bottom-px left-8 right-8 h-px origin-left bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
      </motion.div>

      <motion.div style={{ x: phoneX, y: phoneY }} className="absolute bottom-[1%] right-[0%] w-[28%] min-w-[112px] sm:min-w-[138px] rounded-[28px] border-[6px] border-ink-950 bg-white p-2 shadow-[0_42px_82px_-38px_rgba(8,18,37,.65)] dark:bg-ink-800">
        <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-ink-950 dark:bg-white/[.20]" />
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-700 p-3 text-white"><p className="text-[7px] font-bold uppercase tracking-[.08em] opacity-[.70]">Wallet balance</p><p className="mt-1 text-sm font-black sm:text-base">₹ 1,25,430</p><div className="mt-2 flex items-center gap-1 text-[7px] font-bold text-white/[.75]"><TrendingUp className="h-2.5 w-2.5" /> +8.4% this month</div></div>
        <p className="mt-3 text-[8px] font-black uppercase tracking-[.08em]">Quick services</p>
        <div className="mt-2 grid grid-cols-3 gap-1.5">{['AEPS','DMT','BBPS','QR','Travel','Loans'].map((service)=><div key={service} className="rounded-lg bg-slate-50 py-2 text-center text-[6.5px] font-bold text-ink-950 dark:bg-white/[.05] dark:text-white">{service}</div>)}</div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -20, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: .72, duration: .72, ease }} className="premium-surface animate-float-soft absolute bottom-[14%] left-0 rounded-[20px] p-3.5 shadow-card">
        <div className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/[.10]"><CheckCircle2 className="h-4 w-4 text-brand-500" /></span><div><p className="text-[8px] font-bold uppercase tracking-[.08em] text-slate-400">Payment received</p><p className="mt-0.5 text-xs font-black">₹ 9,200</p></div></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .86, duration: .65, ease }} className="premium-surface absolute right-[16%] top-[0%] hidden rounded-[18px] px-3.5 py-3 sm:block">
        <div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-500/[.10] text-blue-600"><QrCode className="h-4 w-4" /></span><div><p className="text-[7px] font-bold uppercase tracking-[.08em] text-slate-400">Collection</p><p className="text-[10px] font-black">QR · Instant</p></div></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .96, duration: .65, ease }} className="premium-surface absolute bottom-[3%] left-[24%] hidden rounded-[18px] px-3.5 py-3 md:block">
        <div className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-brand-500" /><span className="text-[9px] font-extrabold">Settlement ready</span><ArrowUpRight className="h-3 w-3 text-brand-500" /></div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="section-transition relative overflow-hidden pb-24 pt-12 sm:pb-32 sm:pt-16 lg:min-h-[900px] lg:pt-20">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_24%,rgba(18,175,124,.14),transparent_30%),radial-gradient(circle_at_18%_32%,rgba(26,46,89,.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_76%_24%,rgba(18,175,124,.14),transparent_28%),radial-gradient(circle_at_18%_20%,rgba(41,67,113,.24),transparent_28%)]" />
      <div className="grid-fade absolute inset-0 -z-10" />
      <div className="absolute left-[-10%] top-[38%] -z-10 h-64 w-64 rounded-full border border-brand-500/[.10]" data-parallax="44" />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-3">
        <div className="relative z-10 max-w-[690px]">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, ease }} className="flex items-center gap-3">
            <span className="eyebrow">One platform. Every financial service.</span>
            <span className="hidden h-px w-16 bg-gradient-to-r from-brand-500/[.70] to-transparent sm:block" />
          </motion.div>

          <h1 className="mt-7 text-[clamp(3.35rem,6.4vw,6.15rem)] font-black leading-[.9] tracking-[-0.07em] text-ink-950 dark:text-white">
            <span className="block overflow-hidden pb-[.08em]"><motion.span className="block" initial={{ y: "115%" }} animate={{ y: 0 }} transition={{ delay: .05, duration: .78, ease }}>Bringing Bills</motion.span></span>
            <span className="block overflow-hidden pb-[.08em]"><motion.span className="block" initial={{ y: "115%" }} animate={{ y: 0 }} transition={{ delay: .12, duration: .78, ease }}>& Payments</motion.span></span>
            <span className="block overflow-hidden pb-[.08em]"><motion.span className="block text-brand-500" initial={{ y: "115%" }} animate={{ y: 0 }} transition={{ delay: .19, duration: .78, ease }}>Together, Seamlessly.</motion.span></span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .34, duration: .65, ease }} className="mt-7 max-w-[590px] text-[17px] leading-8 text-slate-600 dark:text-slate-300 sm:text-[19px]">
            A unified platform to manage bill payments, collections, recharges and digital payments — all in one place.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .42, duration: .65, ease }} className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/partner">Become a Partner</ButtonLink><ButtonLink href="#products" variant="secondary">Explore Products</ButtonLink></motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55, duration: .7 }} className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-[12px] font-extrabold text-ink-900 dark:text-slate-200">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-500" /> Secure</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-500" /> Reliable</span>
            <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-brand-500" /> Scalable</span>
            <span className="flex items-center gap-2"><Code2 className="h-4 w-4 text-brand-500" /> API-First</span>
          </motion.div>

          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .62 }} href="/developers" className="group mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-brand-700 dark:text-brand-400"><span className="link-underline">Explore APIs</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></motion.a>
        </div>

        <motion.div initial={{ opacity: 0, scale: .975, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: .22, duration: .88, ease }}><p className="sr-only">Illustrative billbring dashboard preview showing payments, services and operational visibility.</p><DashboardHeroVisual /></motion.div>
      </div>

      <motion.a href="#products" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-black uppercase tracking-[.18em] text-slate-400 lg:flex">
        Scroll to explore <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 dark:border-white/[.10]"><ArrowDownRight className="h-3.5 w-3.5" /></span>
      </motion.a>
      <Sparkles className="absolute left-[48%] top-[9%] h-5 w-5 text-brand-500/[.25]" aria-hidden="true" />
    </section>
  );
}
