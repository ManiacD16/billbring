import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="pb-12 pt-14 sm:pb-16 sm:pt-20">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[30px] border border-white/[.08] bg-[#06101a] text-white shadow-[0_40px_100px_-58px_rgba(0,0,0,.8)]" data-reveal>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(18,175,124,.18),transparent_32%),linear-gradient(90deg,rgba(2,12,23,.98)_0%,rgba(2,12,23,.92)_48%,rgba(2,12,23,.28)_100%)]" />
          <div className="absolute right-0 top-0 h-full w-full opacity-35 lg:w-[48%] lg:opacity-90">
            <Image src="/images/home/6.png" alt="billbring partnership and connected financial services" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-contain object-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101a] via-[#06101a]/90 to-[#06101a]/25 lg:via-[#06101a]/75" />

          <div className="relative grid min-h-[360px] items-center px-7 py-12 sm:px-10 lg:grid-cols-[.68fr_.32fr] lg:px-14 lg:py-16">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-300">Company</p>
              <h2 className="mt-5 max-w-[14ch] font-display text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[.9] tracking-[-.065em]">Let&apos;s Build the Future of Digital Finance</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Partner with billbring and be part of a growing financial technology ecosystem.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/partner" className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-brand-500 px-5 py-3 text-sm font-black text-[#041008] transition hover:-translate-y-0.5 hover:brightness-105">Partner With Us <ArrowUpRight className="h-4 w-4" /></Link>
                <Link href="/support" className="inline-flex min-h-12 items-center rounded-xl border border-white/[.14] bg-white/[.05] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/[.09]">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
