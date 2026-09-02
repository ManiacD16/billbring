import { Building2, Code2, Store } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

const solutions = [
  { icon: Store, title: "Retailers / Agents", kicker: "Serve more customers", copy: "Offer multiple financial services through one simple operating experience.", items: ["Bill payment & recharge", "AEPS & DMT", "Travel & insurance"], href: "/solutions#retailers", tone: "from-emerald-500/[.20] via-brand-500/[.06] to-transparent", stat: "01" },
  { icon: Building2, title: "Merchants / Businesses", kicker: "Move money clearly", copy: "Accept payments, manage collections and keep payouts visible from one platform.", items: ["Payment collection", "Payouts & settlement", "POS & wallet services"], href: "/solutions#merchants", tone: "from-blue-500/[.20] via-cyan-400/[.06] to-transparent", stat: "02" },
  { icon: Code2, title: "Enterprises", kicker: "Embed at scale", copy: "Connect financial capabilities to your products with API-first infrastructure.", items: ["APIs & webhooks", "Bulk operations", "Reporting & reconciliation"], href: "/solutions#enterprise", tone: "from-violet-500/[.20] via-indigo-400/[.06] to-transparent", stat: "03" },
];

export function Solutions() {
  return (
    <section className="section-transition py-28 sm:py-36 lg:py-40">
      <div className="section-shell">
        <SectionHeading eyebrow="Built for your business" title={<>Built around how <span className="text-brand-500">you operate.</span></>} copy="Different businesses need different journeys. billbring keeps the platform coherent while adapting the experience around your operating model." align="center" />
        <div className="mt-16 grid gap-5 lg:grid-cols-3" data-reveal-stagger>
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <article key={solution.title} className="card-sheen group relative min-h-[440px] sm:min-h-[470px] overflow-hidden rounded-[32px] border border-slate-200/[.80] bg-white p-7 shadow-card transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:border-brand-500/[.20] hover:shadow-lift dark:border-white/[.10] dark:bg-ink-900/[.65] sm:p-8">
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.tone} opacity-[.80]`} />
                <div className="absolute -right-16 top-10 h-56 w-56 rotate-12 rounded-[44px] border border-white/[.70] bg-white/[.30] p-8 backdrop-blur transition duration-700 group-hover:translate-x-[-10px] group-hover:translate-y-[-8px] group-hover:rotate-6 dark:border-white/[.10] dark:bg-white/[.04]"><Icon className="h-full w-full stroke-[.65] text-ink-700/[.12] dark:text-white/[.08]" /></div>
                <div className="absolute right-7 top-7 text-[11px] font-black tracking-[.18em] text-slate-400">{solution.stat}</div>
                <div className="relative z-10 flex h-full max-w-full flex-col sm:max-w-[79%]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/[.70] bg-white/[.75] shadow-sm backdrop-blur transition duration-500 group-hover:-rotate-3 group-hover:scale-105 dark:border-white/[.10] dark:bg-white/[.06]"><Icon className="h-5 w-5 text-brand-500" /></div>
                  <p className="mt-10 text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">{solution.kicker}</p>
                  <h3 className="mt-3 text-[30px] font-black leading-[1.03] tracking-[-.045em]">{solution.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{solution.copy}</p>
                  <ul className="mt-7 space-y-3 text-sm font-bold">{solution.items.map((item) => <li key={item} className="flex items-center gap-2.5"><span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500/[.10]"><span className="h-1.5 w-1.5 rounded-full bg-brand-500" /></span>{item}</li>)}</ul>
                  <div className="mt-auto pt-9"><ButtonLink href={solution.href} variant="secondary">Explore solution</ButtonLink></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
