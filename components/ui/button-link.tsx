import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function ButtonLink({ href, children, variant = "primary", className }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "dark"; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-[15px] px-5 py-3 text-[13px] font-black tracking-[-.01em] transition-[transform,box-shadow,border-color,background-color,color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-[.985]",
        variant === "primary" && "border border-brand-600/[.20] bg-brand-600 text-white shadow-[0_18px_46px_-24px_rgba(10,150,106,.85)] hover:-translate-y-1 hover:bg-brand-700 hover:shadow-[0_26px_64px_-24px_rgba(10,150,106,.9)]",
        variant === "secondary" && "border border-slate-200/[.90] bg-white/[.82] text-ink-950 shadow-sm backdrop-blur hover:-translate-y-1 hover:border-brand-500/[.35] hover:bg-brand-50/[.90] hover:shadow-[0_18px_44px_-30px_rgba(8,18,37,.3)] dark:border-white/[.10] dark:bg-white/[.05] dark:text-white dark:hover:bg-white/[.08]",
        variant === "dark" && "border border-white/[.60] bg-white text-ink-950 shadow-lg hover:-translate-y-1 hover:bg-brand-50",
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-[125%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[.22] to-transparent transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-[125%]" aria-hidden="true" />
      <span className="relative">{children}</span>
      <span className="relative grid h-6 w-6 place-items-center rounded-full bg-black/[.07] dark:bg-white/[.10] transition-transform duration-500 group-hover:rotate-6">
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
