import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function ButtonLink({ href, children, variant = "primary", className }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "dark"; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-5 py-3 text-[13px] font-semibold tracking-[-.01em] transition-[transform,background-color,border-color,color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-[.985]",
        variant === "primary" && "border border-brand-500 bg-brand-500 text-ink-950 shadow-[0_18px_42px_-28px_rgba(18,175,124,.9)] hover:-translate-y-1 hover:bg-brand-400",
        variant === "secondary" && "border border-ink-900/[.12] bg-[var(--surface-strong)] text-ink-950 hover:-translate-y-1 hover:border-brand-500/[.45] hover:bg-brand-500/[.06] dark:border-white/[.12] dark:text-white",
        variant === "dark" && "border border-white bg-white text-ink-950 hover:-translate-y-1 hover:bg-brand-100",
        className,
      )}
    >
      <span>{children}</span>
      <span className="grid h-7 w-7 place-items-center rounded-full bg-black/[.06] transition-transform duration-300 group-hover:rotate-6 dark:bg-white/[.10]">
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
