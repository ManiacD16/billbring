import { Layers3, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export function InternalHero({ eyebrow, title, copy, cta = true }: { eyebrow: string; title: React.ReactNode; copy: string; cta?: boolean }) {
  return (
    <section className={`section-transition relative overflow-hidden pt-20 sm:pt-28 ${cta ? "pb-24 sm:pb-32 lg:pb-36" : "pb-14 sm:pb-20 lg:pb-24"}`}>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_24%,rgba(18,175,124,.14),transparent_30%),radial-gradient(circle_at_18%_16%,rgba(26,46,89,.08),transparent_28%)] dark:bg-[radial-gradient(circle_at_72%_24%,rgba(18,175,124,.14),transparent_28%),radial-gradient(circle_at_18%_16%,rgba(41,67,113,.22),transparent_25%)]" />
      <div className="grid-fade absolute inset-0 -z-10" />
      <div className="absolute right-[8%] top-[18%] -z-10 h-60 w-60 rounded-full border border-brand-500/[.10]" data-parallax="34" />
      <div className="section-shell">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_360px]">
          <div className="max-w-5xl" data-reveal>
            <div className="flex items-center gap-3"><span className="eyebrow">{eyebrow}</span><span className="h-px w-12 bg-gradient-to-r from-brand-500/[.55] to-transparent" /></div>
            <h1 className="mt-7 max-w-[16ch] text-[clamp(3rem,6vw,6.1rem)] font-black leading-[.92] tracking-[-.068em] text-ink-950 dark:text-white text-balance">{title}</h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-8 tracking-[-.012em] text-slate-600 dark:text-slate-300 sm:text-[19px]">{copy}</p>
            {cta && <div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="/partner">Become a Partner</ButtonLink><ButtonLink href="/support" variant="secondary">Talk to Our Team</ButtonLink></div>}
          </div>
          <div data-reveal="right" className="hidden lg:block">
            <div className="premium-surface relative overflow-hidden rounded-[30px] p-6">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/[.10] blur-2xl" />
              <div className="relative flex items-center justify-between"><span className="icon-tile h-11 w-11 text-brand-600 dark:text-brand-300"><Layers3 className="h-5 w-5" /></span><Sparkles className="h-4 w-4 text-brand-500/[.45]" /></div>
              <p className="relative mt-8 text-[10px] font-black uppercase tracking-[.17em] text-slate-400">BillBring platform</p>
              <p className="relative mt-2 text-lg font-black leading-6 tracking-[-.03em]">One operating language across 19 financial capabilities.</p>
              <div className="relative mt-6 flex flex-wrap gap-2">{["Pay","Move","Manage","Grow"].map((item)=><span key={item} className="rounded-full border border-brand-500/[.10] bg-brand-500/[.10] px-2.5 py-1 text-[9px] font-black uppercase tracking-[.1em] text-brand-700 dark:text-brand-300">{item}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
