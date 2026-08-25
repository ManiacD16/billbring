import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export function FinalCta() {
  return (
    <section className="pb-28 pt-10 sm:pb-36">
      <div className="section-shell">
        <div className="noise relative overflow-hidden rounded-[38px] bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 px-6 py-14 text-white shadow-[0_52px_120px_-48px_rgba(18,175,124,.72)] sm:px-10 sm:py-20 lg:px-14 lg:py-20" data-reveal="scale">
          <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/[.10]"/><div className="absolute -right-4 -top-16 h-72 w-72 rounded-full border border-white/[.10]"/><div className="absolute bottom-[-40%] left-[42%] h-96 w-96 rounded-full bg-cyan-400/[.10] blur-3xl" />
          <Image src="/brand/billbring-mark-white.svg" alt="" width={280} height={280} className="absolute bottom-[-95px] right-8 h-64 w-64 rotate-12 opacity-[.08]" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-4xl"><p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.19em] text-white/[.65]"><Sparkles className="h-3.5 w-3.5" /> Ready when you are</p><h2 className="mt-6 text-[clamp(2.8rem,5.5vw,5.6rem)] font-black leading-[.92] tracking-[-.065em]">Bring every payment into one connected platform.</h2><p className="mt-6 max-w-2xl text-[16px] leading-7 text-white/[.85] sm:text-lg">Launch collections, bill payments, payouts and financial services through one coherent BillBring experience.</p></div>
            <div className="flex flex-col gap-3 lg:min-w-[220px]"><ButtonLink href="/partner" variant="dark">Become a Partner</ButtonLink><ButtonLink href="/support" className="border-white/[.20] bg-white/[.10] text-white hover:bg-white/[.15]" variant="secondary">Talk to Our Team</ButtonLink><a href="/developers" className="mt-2 inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[.12em] text-white/[.65] transition hover:text-white">Explore APIs <ArrowUpRight className="h-3.5 w-3.5" /></a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
