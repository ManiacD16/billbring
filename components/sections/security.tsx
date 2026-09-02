import { Eye, Fingerprint, KeyRound, LockKeyhole, ScanLine, ShieldCheck, Siren } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const points = [
  [Fingerprint, "Identity-aware access", "Keep sensitive journeys deliberate with authentication-oriented product patterns."],
  [KeyRound, "Protected integrations", "Design APIs and operational access around clear permission boundaries."],
  [Eye, "Visible transaction state", "Reduce ambiguity with understandable statuses, receipts and operational history."],
  [Siren, "Exception awareness", "Surface issues clearly so operators know what needs attention."],
  [ScanLine, "Audit-minded flows", "Keep important actions traceable through structured platform journeys."],
  [ShieldCheck, "Security by design", "Treat trust as a core product layer rather than a decorative badge."],
];

export function Security() {
  return (
    <section className="section-transition py-28 sm:py-36 lg:py-40">
      <div className="section-shell grid items-start gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
        <div className="lg:sticky lg:top-32">
          <SectionHeading eyebrow="Trust layer" title={<>Security designed into <span className="text-brand-500">every journey.</span></>} copy="billbring's interface language is built to make financial operations feel controlled, understandable and deliberate across every service." />
          <div data-reveal="scale" className="relative mt-10 aspect-[1.2/1] max-w-[520px] overflow-hidden rounded-[32px] bg-ink-950 p-8 text-white shadow-lift">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(18,175,124,.22),transparent_34%)]" />
            <div className="absolute inset-[14%] rounded-full border border-brand-400/[.15] animate-pulse-ring" />
            <div className="absolute inset-[25%] rounded-full border border-dashed border-white/[.10] animate-orbit" />
            <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[30px] border border-white/[.10] bg-white/[.055] shadow-[0_0_70px_-18px_rgba(18,175,124,.65)] backdrop-blur"><ShieldCheck className="h-12 w-12 text-brand-400" /></div>
            <div className="animate-scan [--scan-distance:210px] absolute left-[16%] right-[16%] top-[18%] h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" />
            <span className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/[.10] bg-white/[.04] px-3 py-1.5 text-[9px] font-black uppercase tracking-[.13em] text-slate-300"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Protected state</span>
            <span className="absolute bottom-7 right-7 grid h-10 w-10 place-items-center rounded-xl border border-white/[.10] bg-white/[.04]"><LockKeyhole className="h-4 w-4 text-brand-300" /></span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2" data-reveal-stagger>
          {points.map(([Icon, title, copy], index) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <article key={String(title)} className={`card-sheen group relative min-h-[275px] overflow-hidden rounded-[28px] border border-slate-200/[.80] bg-white p-6 shadow-card transition duration-500 hover:-translate-y-1.5 hover:border-brand-500/[.20] hover:shadow-soft dark:border-white/[.10] dark:bg-ink-900/[.60] ${index === 0 || index === 5 ? 'sm:col-span-2 sm:min-h-[250px]' : ''}`}>
                <I className="absolute -right-5 -top-4 h-36 w-36 rotate-12 stroke-[.7] text-brand-500/[.08] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6" />
                <div className="relative z-10 max-w-[460px]"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-500/[.10] transition duration-500 group-hover:-rotate-3 group-hover:scale-105"><I className="h-5 w-5 text-brand-500" /></span><p className="mt-7 text-[10px] font-black uppercase tracking-[.17em] text-slate-400">0{index+1} · Control</p><h3 className="mt-2 text-xl font-black tracking-[-.025em]">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{String(copy)}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
