import { cn } from "@/lib/cn";

export function SectionHeading({ eyebrow, title, copy, align = "left", className }: { eyebrow: string; title: React.ReactNode; copy?: string; align?: "left" | "center"; className?: string }) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)} data-reveal>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-500/[.65]" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
        {align === "center" && <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-500/[.65]" aria-hidden="true" />}
      </div>
      <h2 className={cn("display-title mt-6", align === "center" && "mx-auto")}>{title}</h2>
      {copy && <p className={cn("section-copy mt-6 max-w-2xl text-pretty", align === "center" && "mx-auto")}>{copy}</p>}
    </div>
  );
}
