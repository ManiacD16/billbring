import Image from "next/image";
import { RouteOff, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="section-transition relative overflow-hidden pb-28 pt-24 sm:pb-36 sm:pt-32">
      <div className="grid-fade absolute inset-0 -z-10" />
      <div className="section-shell">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div data-reveal="left">
            <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300"><Sparkles className="h-3.5 w-3.5" /> 404 · Route not found</p>
            <h1 className="mt-6 text-balance text-[clamp(3rem,6vw,5.8rem)] font-black leading-[.92] tracking-[-.064em] text-ink-950 dark:text-white">This route moved outside the payment flow.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">Return to billbring and continue exploring the connected financial platform.</p>
            <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/">Back to homepage</ButtonLink><ButtonLink href="/products" variant="secondary">Explore products</ButtonLink></div>
          </div>
          <div data-reveal="scale" className="noise relative min-h-[360px] overflow-hidden rounded-[36px] bg-ink-950 text-white shadow-lift sm:min-h-[430px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_42%,rgba(18,175,124,.2),transparent_32%)]" />
            <div className="absolute inset-[15%] rounded-full border border-white/[.06]" />
            <div className="absolute inset-[27%] rounded-full border border-dashed border-brand-400/[.20] animate-orbit" />
            <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[30px] border border-white/[.10] bg-white/[.05] backdrop-blur"><RouteOff className="h-11 w-11 text-brand-300" /></div>
            <Image src="/brand/billbring-mark-white.svg" alt="" width={190} height={190} className="absolute -bottom-12 -right-10 h-48 w-48 rotate-12 opacity-[.055]" />
            <p className="absolute bottom-7 left-7 text-[9px] font-black uppercase tracking-[.16em] text-white/[.45]">Reconnect to billbring</p>
          </div>
        </div>
      </div>
    </section>
  );
}
