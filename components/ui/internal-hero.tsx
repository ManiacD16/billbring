import { ArrowDownRight, Layers3 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export function InternalHero({ eyebrow, title, copy, cta = true }: { eyebrow: string; title: React.ReactNode; copy: string; cta?: boolean }) {
  return (
    <section className={`section-transition relative overflow-hidden ${cta ? "pb-24 pt-16 sm:pb-32 sm:pt-24" : "pb-16 pt-16 sm:pb-20 sm:pt-24"}`}>
      <div className="brand-grid absolute inset-0 -z-10 opacity-60" />
      <div className="absolute right-[-10%] top-[-18%] -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-500/[.12] blur-[120px]" />
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end lg:gap-16">
          <div data-reveal>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h1 className="mt-6 max-w-[12ch] font-display text-[clamp(3.6rem,7vw,7.2rem)] font-semibold leading-[.84] tracking-[-.075em] text-ink-950 dark:text-white text-balance">{title}</h1>
          </div>

          <div className="lg:border-l lg:border-ink-900/[.10] lg:pl-10 dark:lg:border-white/[.10]" data-reveal="right">
            <div className="flex items-center justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-500/[.12] text-brand-700 dark:text-brand-300"><Layers3 className="h-5 w-5" /></span>
              <span className="font-display text-4xl font-semibold tracking-[-.06em] text-ink-900/[.14] dark:text-white/[.14]">BB</span>
            </div>
            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[var(--muted)] sm:text-[18px]">{copy}</p>
            {cta && <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/partner">Become a Partner</ButtonLink><ButtonLink href="/support" variant="secondary">Talk to our team</ButtonLink></div>}
            {!cta && <div className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-[var(--muted)]">Continue below <ArrowDownRight className="h-4 w-4" /></div>}
          </div>
        </div>
      </div>
    </section>
  );
}
