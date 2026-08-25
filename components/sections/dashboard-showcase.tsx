"use client";

import { motion } from "framer-motion";
import { Activity, Bell, CircleDollarSign, LayoutDashboard, Receipt, Search, WalletCards } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function DashboardShowcase() {
  return (
    <section className="section-transition py-28 sm:py-36 lg:py-40">
      <div className="section-shell">
        <SectionHeading eyebrow="Operate with clarity" title={<>Everything happening across your business. <span className="text-brand-500">At a glance.</span></>} copy="A single command center keeps collections, payouts, settlements, balances and service usage understandable without overwhelming operators." align="center" />
        <div className="relative mt-16 overflow-hidden rounded-[36px] border border-slate-200/[.80] bg-slate-50/[.70] p-3 shadow-lift dark:border-white/[.10] dark:bg-ink-900/[.60] sm:p-5" data-reveal="scale">
          <div className="absolute right-[8%] top-[5%] h-72 w-72 rounded-full bg-brand-500/[.10] blur-3xl" />
          <div className="relative grid min-h-[600px] gap-4 rounded-[28px] bg-white p-4 dark:bg-ink-950 lg:grid-cols-[225px_1fr]">
            <aside className="rounded-[23px] bg-ink-950 p-5 text-white">
              <div className="flex items-center gap-2 text-sm font-black"><span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/[.15]"><LayoutDashboard className="h-4 w-4 text-brand-400" /></span> Operations</div>
              <div className="mt-8 space-y-2">{["Overview","Transactions","Collections","Payouts","Settlements","Reports","API Keys"].map((item,index)=><div key={item} className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-[11px] font-semibold ${index===0?'bg-brand-600 text-white':'text-slate-400 hover:bg-white/[.04]'}`}>{item}{index===0 && <span className="h-1.5 w-1.5 rounded-full bg-white" />}</div>)}</div>
              <div className="mt-8 rounded-2xl border border-white/[.10] bg-white/[.035] p-4"><p className="text-[9px] font-black uppercase tracking-[.13em] text-slate-500">Demo state</p><p className="mt-2 flex items-center gap-2 text-[10px] font-bold text-brand-300"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Interface preview</p></div>
            </aside>

            <div className="p-1 sm:p-4">
              <div className="flex items-center justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Business command center · illustrative UI</p><h3 className="mt-1 text-2xl font-black tracking-[-.035em]">Financial overview</h3></div><div className="flex gap-2"><span className="hidden h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs text-slate-400 dark:border-white/[.10] sm:flex"><Search className="h-3.5 w-3.5" /> Search</span><span className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 dark:border-white/[.10]"><Bell className="h-4 w-4" /></span></div></div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[ [CircleDollarSign,"Collections","₹ 12.45Cr","+12.5%"],[WalletCards,"Payouts","₹ 8.75Cr","+10.4%"],[Receipt,"Transactions","24.58L","+18.5%"],[Activity,"Success rate","99.2%","Stable"]].map(([Icon,label,value,trend], index)=>{const I=Icon as typeof Activity;return <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06, duration: .55 }} key={String(label)} className="group rounded-2xl border border-slate-200 p-4 transition hover:-translate-y-1 hover:border-brand-500/[.20] hover:shadow-card dark:border-white/[.10]"><div className="flex items-center justify-between"><span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-500/[.10]"><I className="h-4 w-4 text-brand-500"/></span><span className="text-[9px] font-black text-brand-500">{String(trend)}</span></div><p className="mt-6 text-[10px] font-bold uppercase tracking-[.1em] text-slate-400">{String(label)}</p><p className="mt-1 text-xl font-black tracking-[-.03em]">{String(value)}</p></motion.div>})}
              </div>

              <div className="mt-4 grid gap-4 xl:grid-cols-[1.42fr_.58fr]">
                <div className="rounded-2xl border border-slate-200 p-5 dark:border-white/[.10]"><div className="flex items-center justify-between"><div><h4 className="text-sm font-black">Transaction activity</h4><p className="mt-1 text-[10px] text-slate-400">Collections and payout volume</p></div><span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[9px] font-bold text-slate-500 dark:bg-white/[.05]">12 months</span></div><svg viewBox="0 0 700 220" className="mt-5 w-full" role="img" aria-label="Illustrative transaction activity trend"><defs><linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#12AF7C" stopOpacity=".28"/><stop offset="1" stopColor="#12AF7C" stopOpacity="0"/></linearGradient></defs><motion.path initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:.35 }} d="M20 175 C90 120 120 155 175 105 S260 130 320 72 S410 108 470 52 S560 88 680 24 L680 210 L20 210Z" fill="url(#dashArea)"/><motion.path initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{ once:true }} transition={{duration:1.15,ease:[0.22,1,0.36,1]}} d="M20 175 C90 120 120 155 175 105 S260 130 320 72 S410 108 470 52 S560 88 680 24" fill="none" stroke="#12AF7C" strokeWidth="5" strokeLinecap="round"/></svg></div>
                <div className="rounded-2xl border border-slate-200 p-5 dark:border-white/[.10]"><h4 className="text-sm font-black">Service mix</h4><p className="mt-1 text-[10px] text-slate-400">Share of platform activity</p><div className="mt-7 space-y-5">{[["Payments",72],["Bills",61],["Payouts",48],["AEPS",35]].map(([label,val], index)=><div key={String(label)}><div className="mb-2 flex justify-between text-[10px] font-bold"><span>{String(label)}</span><span className="text-slate-400">{String(val)}%</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/[.05]"><motion.div initial={{width:0}} whileInView={{width:`${val}%`}} viewport={{once:true}} transition={{delay:.15+index*.08,duration:.7,ease:[0.22,1,0.36,1]}} className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-300"/></div></div>)}</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
