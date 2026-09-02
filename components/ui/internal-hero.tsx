import Image from "next/image";
import { ArrowDownRight, ArrowRight, CheckCircle2, Layers3 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export function InternalHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  cta = true,
  points = ["Connected services", "Clear operations", "Secure by design"],
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  image: string;
  imageAlt: string;
  cta?: boolean;
  points?: string[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-[#f7fbf9] py-14 dark:border-white/[.08] dark:bg-[#05090d] sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(18,175,124,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(18,175,124,.055)_1px,transparent_1px)] [background-size:52px_52px] dark:opacity-20" />
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-500/[.12] blur-[120px] dark:bg-brand-500/[.16]" />

      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
        <div data-reveal="left" className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/[.07] px-3.5 py-2 text-[10px] font-black uppercase tracking-[.16em] text-brand-700 dark:text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {eyebrow}
          </div>

          <h1 className="mt-6 max-w-[12ch] font-display text-[clamp(3.15rem,6.4vw,6.6rem)] font-semibold leading-[.9] tracking-[-.07em] text-ink-950 dark:text-white text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-8 text-slate-600 dark:text-slate-300 sm:text-[18px]">{copy}</p>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {points.slice(0, 3).map((point) => (
              <span key={point} className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-brand-500" /> {point}
              </span>
            ))}
          </div>

          {cta ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/partner">Become a Partner</ButtonLink>
              <ButtonLink href="/support" variant="secondary">Talk to our team</ButtonLink>
            </div>
          ) : (
            <div className="mt-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.15em] text-slate-500 dark:text-slate-400">
              Continue below <ArrowDownRight className="h-4 w-4" />
            </div>
          )}
        </div>

        <div data-reveal="right" className="relative">
          <div className="absolute -inset-5 rounded-[2.25rem] bg-brand-500/[.08] blur-3xl" />
          <div className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-3 shadow-[0_34px_90px_-52px_rgba(8,18,37,.55)] dark:border-white/[.10] dark:bg-[#0b1118] sm:p-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-slate-100 dark:bg-black">
              <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col gap-3 px-2 pb-2 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/[.12] text-brand-700 dark:text-brand-300"><Layers3 className="h-4 w-4" /></span>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[.15em] text-slate-400">billbring ecosystem</p>
                  <p className="mt-1 text-sm font-black text-ink-950 dark:text-white">One connected operating experience</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.12em] text-slate-500 dark:border-white/[.10] dark:text-slate-300 sm:self-auto">
                Explore <ArrowRight className="h-3.5 w-3.5 text-brand-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
