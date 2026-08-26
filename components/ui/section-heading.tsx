import { cn } from "@/lib/cn";

export function SectionHeading({ eyebrow, title, copy, align = "left", className }: { eyebrow: string; title: React.ReactNode; copy?: string; align?: "left" | "center"; className?: string }) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)} data-reveal>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className={cn("display-title mt-6", align === "center" && "mx-auto")}>{title}</h2>
      {copy && <p className={cn("section-copy mt-6 max-w-2xl", align === "center" && "mx-auto")}>{copy}</p>}
    </div>
  );
}
