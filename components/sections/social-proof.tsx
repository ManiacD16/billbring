import { Building2, CheckCircle2, Code2, Store, UsersRound } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const audiences = [
  [Store, "Retailers / Agents", "Move quickly across assisted financial-service journeys without losing context."],
  [Building2, "Merchants / Businesses", "Keep collections, payouts and operating visibility in one coherent workspace."],
  [Code2, "Product & Engineering", "Integrate financial capabilities through a consistent API-first layer."],
  [UsersRound, "Operations teams", "See status, exceptions and next actions in the same visual language."],
];

export function SocialProof() {
  return (
    <section className="section-transition py-28 sm:py-36 lg:py-40">
      <div className="section-shell">
        <SectionHeading eyebrow="Designed for real operations" title={<>Every team sees the <span className="text-brand-500">next move.</span></>} copy="billbring brings customer-facing services, engineering integrations and operational states into one shared product language." align="center" />
        <div className="mt-16 grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <article data-reveal="left" className="noise relative overflow-hidden rounded-[36px] bg-ink-950 p-8 text-white shadow-lift sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(18,175,124,.2),transparent_32%)]" />
            <div className="absolute right-[-8%] top-[26%] h-72 w-72 rounded-full border border-white/[.045]" />
            <div className="relative max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-300">Operational confidence</p>
              <h3 className="mt-5 text-[clamp(2.3rem,4vw,4rem)] font-black leading-[.98] tracking-[-.055em]">Clarity is a feature when money is moving.</h3>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">A financial interface should make state, ownership and the next action obvious. billbring&apos;s design system is shaped around that operating reality.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">{["Clear transaction states","Understandable handoffs","Traceable outcomes","Consistent interaction patterns"].map((item)=><div key={item} className="flex items-center gap-2 rounded-2xl border border-white/[.10] bg-white/[.04] p-3 text-xs font-bold text-slate-300"><CheckCircle2 className="h-4 w-4 text-brand-400" />{item}</div>)}</div>
            </div>
          </article>
          <div className="grid gap-5 sm:grid-cols-2" data-reveal-stagger>
            {audiences.map(([Icon,title,copy])=>{const I=Icon as typeof Store;return <article key={String(title)} className="interactive-lift group relative overflow-hidden rounded-[30px] border border-slate-200/[.80] bg-white p-6 shadow-card dark:border-white/[.10] dark:bg-ink-900/[.60]"><I className="absolute -right-5 -top-5 h-28 w-28 stroke-[.6] text-brand-500/[.075] transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110"/><span className="icon-tile h-11 w-11 text-brand-600 dark:text-brand-300"><I className="h-5 w-5"/></span><h3 className="mt-8 text-lg font-black tracking-[-.03em]">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{String(copy)}</p></article>})}
          </div>
        </div>
      </div>
    </section>
  );
}
