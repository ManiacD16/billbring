import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { productGroups, products } from "@/data/products";

const links = [
  ["Solutions", "/solutions"],
  ["Developers", "/developers"],
  ["Company", "/company"],
  ["Pricing", "/pricing"],
  ["Support", "/support"],
  ["Partner", "/partner"],
] as const;

export function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden bg-ink-950 pb-7 pt-10 text-white dark:bg-[#061129]">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[46px] border-brand-500/[.10]" />
      <div className="section-shell relative">
        <div className="grid gap-10 border-b border-white/[.10] py-10 sm:py-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-brand-300">BillBring financial infrastructure</p>
            <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(3rem,6vw,6.6rem)] font-semibold leading-[.84] tracking-[-.075em]">A simpler way to bring money journeys together.</h2>
          </div>
          <div className="lg:justify-self-end">
            <Link href="/partner" className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:-translate-y-1 hover:bg-brand-400">Become a Partner <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/[.10] py-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <Image src="/brand/billbring-white.svg" alt="BillBring" width={184} height={41} className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">One connected platform for collections, payouts, bill payments, transfers and financial services.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {links.map(([label, href]) => <Link key={href} href={href} className="rounded-full border border-white/[.10] px-3 py-2 text-[10px] font-semibold text-slate-300 transition hover:border-brand-400/[.35] hover:text-brand-300">{label}</Link>)}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {productGroups.map((group) => (
              <div key={group}>
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[.15em] text-slate-500">{group}</p>
                <div className="space-y-2.5">
                  {products.filter((product) => product.group === group).map((product) => <Link key={product.slug} href={`/products/${product.slug}`} className="block w-fit text-[12px] font-medium leading-5 text-slate-400 transition hover:text-brand-300">{product.name}</Link>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BillBring. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/company#privacy" className="transition hover:text-slate-300">Privacy</Link>
            <Link href="/company#terms" className="transition hover:text-slate-300">Terms</Link>
            <a href="#main-content" className="group inline-flex items-center gap-2 font-semibold text-slate-400 transition hover:text-brand-300">Back to top <span className="grid h-7 w-7 place-items-center rounded-full border border-white/[.10]"><ArrowUp className="h-3 w-3 transition group-hover:-translate-y-0.5" /></span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
