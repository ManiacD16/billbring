"use client";

import { motion } from "framer-motion";
import { Braces, Cable, CheckCircle2, LockKeyhole, RadioTower, TerminalSquare } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

const codeLines = [
  ["POST", "/v1/payments/collect"],
  ["{", ""],
  ["  \"amount\":", " 2500,"],
  ["  \"currency\":", " \"INR\","],
  ["  \"customer\":", " { \"name\": \"Customer\" }"],
  ["}", ""],
];

export function ApiSection() {
  return (
    <section id="api" className="section-transition scroll-mt-28 py-28 sm:py-36 lg:py-40">
      <div className="section-shell">
        <div className="noise relative overflow-hidden rounded-[38px] bg-ink-950 px-6 py-12 text-white shadow-[0_50px_120px_-52px_rgba(8,18,37,.95)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(18,175,124,.18),transparent_31%),radial-gradient(circle_at_10%_86%,rgba(56,189,248,.10),transparent_26%)]" />
          <div className="absolute inset-0 opacity-[.30] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
            <div data-reveal="left">
              <div className="flex items-center gap-3"><span className="inline-flex rounded-full border border-brand-400/[.25] bg-brand-500/[.10] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[.18em] text-brand-300">Built for developers</span><span className="flex items-center gap-1.5 text-[10px] font-bold text-white/[.45]"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Example request</span></div>
              <h2 className="mt-7 max-w-[12ch] text-[clamp(2.8rem,5vw,5rem)] font-black leading-[.95] tracking-[-.06em]">One API. <span className="text-brand-400">Endless possibilities.</span></h2>
              <p className="mt-6 max-w-xl text-[16px] leading-7 text-slate-300">A developer-minded foundation for connecting collections, payouts and financial services to your product experience.</p>
              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                {[ [Cable,"Fast integration"], [RadioTower,"Realtime events"], [LockKeyhole,"Security-minded"], [Braces,"Scalable APIs"] ].map(([Icon, text]) => {
                  const I = Icon as typeof Cable;
                  return <div key={String(text)} className="group flex items-center gap-3 rounded-2xl border border-white/[.10] bg-white/[.04] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-brand-400/[.25] hover:bg-white/[.065]"><I className="h-4 w-4 text-brand-400"/><span className="text-sm font-bold">{String(text)}</span></div>;
                })}
              </div>
              <div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="/developers" variant="dark">Explore APIs</ButtonLink>
              <ButtonLink href="/developers#docs"  variant="secondary">API Documentation</ButtonLink></div>
            </div>

            <div data-reveal="right" className="relative">
              <div className="absolute -inset-10 rounded-full bg-brand-500/[.10] blur-3xl" />
              <motion.div whileHover={{ y: -4 }} transition={{ duration: .45 }} className="relative overflow-hidden rounded-[28px] border border-white/[.10] bg-[#06101f]/[.92] shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/[.10] px-5 py-4">
                  <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-white/[.22]"/><span className="h-2.5 w-2.5 rounded-full bg-white/[.22]"/><span className="h-2.5 w-2.5 rounded-full bg-brand-500"/></div>
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-slate-500"><TerminalSquare className="h-3.5 w-3.5" /> BillBring API · sample request</div>
                </div>

                <div className="grid min-h-[390px] lg:grid-cols-[1fr_190px]">
                  <div className="relative border-b border-white/[.10] p-5 font-mono text-[11px] leading-7 text-slate-300 sm:p-7 sm:text-[12px] lg:border-b-0 lg:border-r">
                    <div className="absolute left-0 top-0 h-10 w-full bg-gradient-to-b from-brand-500/[.04] to-transparent" />
                    {codeLines.map(([left,right], index) => (
                      <motion.div key={index} initial={{ opacity: .2, x: -4 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .25 + index * .08, duration: .45 }} className="flex min-h-7 items-center">
                        <span className={left === "POST" ? "font-bold text-brand-300" : left.includes('amount') || left.includes('currency') || left.includes('customer') ? "text-brand-300" : "text-slate-400"}>{left}</span><span className="text-amber-200">{right}</span>
                      </motion.div>
                    ))}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .92 }} className="mt-6 rounded-2xl border border-brand-400/[.15] bg-brand-500/[.07] p-4 text-[11px] leading-6">
                      <div className="flex items-center gap-2 font-sans text-[10px] font-black uppercase tracking-[.12em] text-brand-300"><CheckCircle2 className="h-3.5 w-3.5" /> 200 OK</div>
                      <div className="mt-2 text-slate-300">{`{ "status": "SUCCESS" }`}</div>
                    </motion.div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[9px] font-black uppercase tracking-[.14em] text-slate-500">Request flow</p>
                    <div className="mt-6 space-y-5">
                      {["Your product","BillBring API","Payment rail","Success event"].map((item,index) => <div key={item} className="relative flex items-center gap-3"><span className={`grid h-8 w-8 place-items-center rounded-full border text-[10px] font-black ${index === 3 ? 'border-brand-400/[.30] bg-brand-500/[.15] text-brand-300' : 'border-white/[.10] bg-white/[.04] text-slate-400'}`}>{index+1}</span><span className="text-[11px] font-bold text-slate-300">{item}</span>{index < 3 && <span className="absolute left-4 top-8 h-5 w-px bg-white/[.10]" />}</div>)}
                    </div>
                  </div>
                </div>
                <motion.div initial={{ x: "-120%" }} whileInView={{ x: "120%" }} transition={{ duration: 2.4, delay: .5, ease: "easeInOut" }} viewport={{ once: true }} className="pointer-events-none absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-brand-400/[.08] to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
