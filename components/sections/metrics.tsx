import { Activity, Braces, ShieldCheck, Waypoints } from "lucide-react";

const items = [
  { icon: Activity, title: "Always-on operations", copy: "Built for continuously moving payment and service workflows." },
  { icon: Waypoints, title: "One connected layer", copy: "Collections, payouts, bills and services in one operating experience." },
  { icon: Braces, title: "API-first by design", copy: "Developer-minded architecture for modern integrations." },
  { icon: ShieldCheck, title: "Trust at the core", copy: "Clear, security-conscious states across financial journeys." },
];

export function Metrics() {
  return (
    <section className="pb-10 pt-2 sm:pb-14">
      <div className="section-shell">
        <div className="premium-surface grid overflow-hidden rounded-[30px] md:grid-cols-2 xl:grid-cols-4" data-reveal="scale">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group relative min-h-[185px] p-6 sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(18,175,124,.09),transparent_38%)] opacity-[.00] transition-opacity duration-500 group-hover:opacity-[1]" />
                <span className="absolute right-5 top-5 text-[9px] font-black tracking-[.16em] text-slate-300 dark:text-slate-600">0{index + 1}</span>
                <div className="relative flex gap-4 xl:block">
                  <span className="icon-tile h-11 w-11 shrink-0 text-brand-700 transition duration-500 group-hover:-rotate-3 group-hover:scale-105 dark:text-brand-300"><Icon className="h-5 w-5" /></span>
                  <div><h3 className="mt-0 text-base font-black tracking-[-.025em] xl:mt-5">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.copy}</p></div>
                </div>
                {index < items.length - 1 && <div className="absolute bottom-0 right-0 top-0 hidden w-px bg-slate-200/[.80] dark:bg-white/[.10] xl:block" />}
                {index < 2 && <div className="absolute bottom-0 left-0 right-0 hidden h-px bg-slate-200/[.80] dark:bg-white/[.10] md:block xl:hidden" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
