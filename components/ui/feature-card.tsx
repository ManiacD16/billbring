import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function FeatureCard({ icon: Icon, title, copy, id, className }: { icon: LucideIcon; title: string; copy: string; id?: string; className?: string }) {
  return (
    <article id={id} data-reveal className={cn("card-sheen interactive-lift group relative min-h-[280px] scroll-mt-32 overflow-hidden rounded-[30px] border border-slate-200/[.80] bg-white p-6 shadow-card dark:border-white/[.10] dark:bg-ink-900/[.60]", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(18,175,124,.11),transparent_40%)] opacity-[.00] transition-opacity duration-500 group-hover:opacity-[1]" />
      <Icon className="absolute -right-8 -top-8 h-40 w-40 rotate-12 stroke-[.52] text-brand-500/[.075] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-4 group-hover:scale-[1.08]" aria-hidden="true" />
      <div className="relative flex h-full flex-col">
        <span className="icon-tile h-12 w-12 text-brand-600 transition duration-500 group-hover:-rotate-3 group-hover:scale-105 dark:text-brand-300"><Icon className="h-5 w-5" /></span>
        <h3 className="mt-auto pt-20 text-[21px] font-black leading-tight tracking-[-.035em]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{copy}</p>
        <span className="mt-7 block h-px w-full origin-left scale-x-[.16] bg-gradient-to-r from-brand-500/[.55] to-transparent transition-transform duration-700 group-hover:scale-x-100" />
      </div>
    </article>
  );
}
