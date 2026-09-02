import { Boxes, Braces, Headphones, ShieldCheck, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  [Boxes,"One platform","Reduce fragmentation by bringing multiple financial journeys into one consistent experience."],
  [Zap,"Fast operations","Keep key transaction states, services and actions visible where teams need them."],
  [Braces,"API-first","Make integration a product pillar rather than an afterthought."],
  [ShieldCheck,"Trust by design","Use clear states, confirmations and permission-aware product patterns."],
  [Headphones,"Support-ready","Give customers and operators a cleaner path to understand and resolve issues."],
];

export function Whybillbring() {
  return (
    <section className="section-transition py-28 sm:py-36 lg:py-40">
      <div className="section-shell">
        <SectionHeading eyebrow="Why billbring" title={<>Designed to make complexity <span className="text-brand-500">feel simple.</span></>} copy="The best financial infrastructure disappears into a clear operating experience. billbring is designed around that principle." align="center" />
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-6" data-reveal-stagger>
          {items.map(([Icon,title,copy], index)=>{
            const I=Icon as typeof Boxes;
            const span = index < 2 ? "xl:col-span-3" : "xl:col-span-2";
            return <article key={String(title)} className={`card-sheen group relative min-h-[330px] overflow-hidden rounded-[30px] border border-slate-200/[.80] bg-white p-7 shadow-card transition duration-500 hover:-translate-y-1.5 hover:border-brand-500/[.20] hover:shadow-lift dark:border-white/[.10] dark:bg-ink-900/[.60] ${span}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(18,175,124,.09),transparent_36%)] opacity-[.00] transition-opacity duration-500 group-hover:opacity-[1]" />
              <I className="absolute -right-8 top-8 h-40 w-40 stroke-[.6] text-brand-500/[.08] transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110"/>
              <div className="relative flex h-full flex-col"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/[.10] transition duration-500 group-hover:-rotate-3 group-hover:scale-105"><I className="h-5 w-5 text-brand-500"/></span><p className="mt-12 text-[10px] font-black uppercase tracking-[.17em] text-slate-400">0{index+1} · Principle</p><h3 className="mt-2 text-[25px] font-black tracking-[-.04em]">{String(title)}</h3><p className="mt-4 max-w-[42ch] text-sm leading-6 text-slate-500 dark:text-slate-400">{String(copy)}</p><div className="mt-auto pt-8"><span className="block h-px w-full origin-left scale-x-[.18] bg-brand-500/[.45] transition-transform duration-700 group-hover:scale-x-100" /></div></div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
