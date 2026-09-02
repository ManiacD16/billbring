"use client";

// import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Blocks, Braces, CreditCard, Landmark, Plane, WalletCards, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const nodes = [
  { label: "Accept money", icon: CreditCard, angle: -24, x: "12%", y: "12%" },
  { label: "Move money", icon: Landmark, angle: 15, x: "72%", y: "9%" },
  { label: "Financial services", icon: WalletCards, angle: -12, x: "78%", y: "69%" },
  { label: "Lifestyle services", icon: Plane, angle: 10, x: "4%", y: "72%" },
];

const orbitDots = [
  { left: "90%", top: "50%" },
  { left: "84.775%", top: "69.5%" },
  { left: "71.5%", top: "83.775%" },
  { left: "50%", top: "90%" },
  { left: "28.5%", top: "83.775%" },
  { left: "15.225%", top: "69.5%" },
  { left: "10%", top: "50%" },
  { left: "15.225%", top: "30.5%" },
  { left: "28.5%", top: "16.225%" },
  { left: "50%", top: "10%" },
  { left: "71.5%", top: "16.225%" },
  { left: "84.775%", top: "30.5%" },
  { left: "78%", top: "50%" },
  { left: "69.775%", top: "69.5%" },
  { left: "50%", top: "78%" },
  { left: "29.79%", top: "69.5%" },
  { left: "22%", top: "50%" },
  { left: "29.79%", top: "30.5%" },
  { left: "50%", top: "22%" },
  { left: "69.775%", top: "30.5%" },
  { left: "65%", top: "50%" },
  { left: "50%", top: "65%" },
  { left: "35%", top: "50%" },
  { left: "50%", top: "35%" },
] as const;

export function Ecosystem() {
  return (
    <section className="section-transition relative overflow-hidden py-28 sm:py-36 lg:py-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(180deg,transparent,rgba(18,175,124,.04),transparent)]" />
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Connected ecosystem" title={<>One connection. <span className="text-brand-500">Every financial service.</span></>} copy="billbring behaves like infrastructure, not a folder of disconnected utilities. Products share one visual language, one operating rhythm and one path to action." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2" data-reveal-stagger>
            {[[Blocks, "19 capabilities"], [Braces, "API-first"], [WalletCards, "One operating layer"], [ArrowUpRight, "Connected journeys"]].map(([Icon, label]) => { const I = Icon as typeof Blocks; return <div key={String(label)} className="premium-surface flex items-center gap-3 rounded-2xl p-3.5"><span className="icon-tile relative h-9 w-9 text-brand-600 dark:text-brand-300"><I className="h-4 w-4" /></span><span className="relative text-sm font-extrabold">{String(label)}</span></div>; })}
          </div>
        </div>

        <div className="sm:hidden" data-reveal="scale">
          <div className="premium-surface relative mx-auto max-w-md overflow-hidden rounded-[32px] p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(18,175,124,.12),transparent_45%)]" />
            <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-[26px] border border-brand-500/[.15] bg-white/[.75] shadow-card dark:border-white/[.10] dark:bg-white/[.04]">
              <Image src="/brand/billbring-mark.svg" alt="" width={52} height={52} className="h-12 w-12 dark:hidden" />
              <Image src="/brand/billbring-mark-white.svg" alt="" width={52} height={52} className="hidden h-12 w-12 dark:block" />
            </div>
            <p className="relative mt-3 text-center text-[9px] font-black uppercase tracking-[.17em] text-slate-400">billbring core</p>
            <div className="relative mx-auto my-4 h-6 w-px bg-gradient-to-b from-brand-500/[.50] to-transparent" />
            <div className="relative grid grid-cols-2 gap-3">
              {nodes.map((node) => { const Icon = node.icon; return <div key={node.label} className="rounded-[20px] border border-slate-200/[.80] bg-white/[.70] p-4 text-center dark:border-white/[.10] dark:bg-white/[.04]"><span className="icon-tile mx-auto h-10 w-10 text-brand-600 dark:text-brand-300"><Icon className="h-[18px] w-[18px]" /></span><p className="mt-3 text-xs font-black leading-4">{node.label}</p></div>; })}
            </div>
          </div>
        </div>

        <div
          className="relative mx-auto hidden aspect-square w-full max-w-[660px] overflow-hidden rounded-[40px] sm:block lg:max-w-[700px]"
          data-reveal="scale"
        >
          {/* orbit background */}
          <div className="absolute inset-[10%] rounded-full border border-brand-500/[.12]" />
          <div className="absolute inset-[22%] rounded-full border border-dashed border-brand-500/[.16]" />
          <div className="absolute inset-[35%] rounded-full border border-slate-300/[.70] dark:border-white/[.08]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[62%] -translate-x-1/2 -translate-y-1/2 bg-slate-300/[.6] dark:bg-white/[.08]" />
          <div className="absolute left-1/2 top-1/2 h-[62%] w-px -translate-x-1/2 -translate-y-1/2 bg-slate-300/[.6] dark:bg-white/[.08]" />

          {/* orbit dots */}
          {orbitDots.map((dot, index) => (
            <span
              key={`orbit-dot-${index}`}
              aria-hidden="true"
              className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/[.35]"
              style={{
                left: dot.left,
                top: dot.top,
              }}
            />
          ))}

          {/* center */}
          <div className="absolute left-1/2 top-1/2 z-10 h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-[34px] border border-slate-200 bg-white/90 shadow-[0_25px_55px_-28px_rgba(8,18,37,.25)] backdrop-blur dark:border-white/[.08] dark:bg-ink-900/90">
            <div className="grid h-full place-items-center rounded-[30px] border border-slate-200/70 bg-[radial-gradient(circle_at_30%_25%,rgba(18,175,124,.08),transparent_50%)] dark:border-white/[.06]">
              <>
                <Image
                  src="/brand/billbring-mark.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 dark:hidden"
                />

                <Image
                  src="/brand/billbring-mark-white.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="hidden h-14 w-14 dark:block"
                />
              </>
            </div>
          </div>

          {/* aligned orbit cards */}
          <div className="absolute left-[10%] top-[31%] z-20 w-[210px] -rotate-[23deg] lg:w-[220px]">
            <div className="orbit-pill">
              <span className="orbit-pill__icon">
                <CreditCard className="h-4 w-4 text-brand-700 dark:text-brand-300" />
              </span>
              <span className="orbit-pill__label">Accept money</span>
            </div>
          </div>

          <div className="absolute right-[8%] top-[27%] z-20 w-[235px] rotate-[14deg] lg:w-[250px]">
            <div className="orbit-pill">
              <span className="orbit-pill__icon">
                <Landmark className="h-4 w-4 text-brand-700 dark:text-brand-300" />
              </span>
              <span className="orbit-pill__label">Move money</span>
            </div>
          </div>

          <div className="absolute right-[7%] bottom-[11%] z-20 w-[250px] rotate-[-10deg] lg:w-[270px]">
            <div className="orbit-pill">
              <span className="orbit-pill__icon">
                <ShieldCheck className="h-4 w-4 text-brand-700 dark:text-brand-300" />
              </span>
              <span className="orbit-pill__label">Financial services</span>
            </div>
          </div>

          <div className="absolute left-[8%] bottom-[13%] z-20 w-[225px] rotate-[10deg] lg:w-[240px]">
            <div className="orbit-pill">
              <span className="orbit-pill__icon">
                <Plane className="h-4 w-4 text-brand-700 dark:text-brand-300" />
              </span>
              <span className="orbit-pill__label">Lifestyle services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
