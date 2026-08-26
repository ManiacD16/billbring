import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="pb-10 pt-12 sm:pb-14 sm:pt-16">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-500 px-6 py-12 text-ink-950 sm:px-10 sm:py-16 lg:px-14 lg:py-20" data-reveal>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[34px] border-ink-950/[.06]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.17em]">Build with BillBring</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(3rem,5.6vw,6rem)] font-semibold leading-[.85] tracking-[-.07em]">Bring your next financial journey into one connected platform.</h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/partner" className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1">Become a Partner <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
              <Link href="/support" className="inline-flex min-h-14 items-center rounded-full border border-ink-950/[.18] px-6 py-3 text-sm font-semibold transition hover:bg-white/[.28]">Talk to our team</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
