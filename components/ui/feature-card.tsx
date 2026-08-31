import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function FeatureCard({ icon: Icon, title, copy, id, className }: { icon: LucideIcon; title: string; copy: string; id?: string; className?: string }) {
  return (
    <article id={id} data-reveal className={cn("group relative min-h-[235px] scroll-mt-32 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_22px_58px_-45px_rgba(8,18,37,.42)] transition duration-500 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-[0_30px_70px_-42px_rgba(8,18,37,.5)] dark:border-white/[.09] dark:bg-[#0b1118]", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_8%,rgba(18,175,124,.12),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-500/15 bg-brand-500/[.08] text-brand-700 dark:text-brand-300"><Icon className="h-5 w-5" /></span>
        <h3 className="mt-9 text-[20px] font-black leading-tight tracking-[-.035em] text-ink-950 dark:text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{copy}</p>
        <span className="mt-auto block pt-7"><span className="block h-px w-12 bg-brand-500/45 transition-all duration-500 group-hover:w-full" /></span>
      </div>
    </article>
  );
}
