import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Sparkles } from "lucide-react";
import { products } from "@/data/products";

const columns = [
  { title: "Solutions", links: [["Retailers", "/solutions#retailers"], ["Merchants", "/solutions#merchants"], ["Enterprises", "/solutions#enterprise"], ["Partners", "/partner"]] },
  { title: "Developers", links: [["Documentation", "/developers"], ["API Reference", "/developers#api"], ["Sandbox", "/developers#sandbox"], ["Webhooks", "/developers#webhooks"]] },
  { title: "Company", links: [["About", "/company"], ["Pricing", "/pricing"], ["Contact", "/support"], ["Become a Partner", "/partner"]] },
  { title: "Legal", links: [["Privacy", "/company#privacy"], ["Terms", "/company#terms"], ["Grievance", "/support#grievance"], ["Compliance", "/company#compliance"]] },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[.06] bg-[#06101e] pb-8 pt-20 text-white sm:pt-24">
      <div className="absolute left-[-8%] top-[-28%] h-96 w-96 rounded-full bg-brand-500/[.10] blur-[100px]" />
      <div className="absolute right-[-6%] top-[18%] h-80 w-80 rounded-full border border-white/[.035]" />
      <div className="section-shell relative">
        <div className="grid gap-10 border-b border-white/[.10] pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em] text-brand-300"><Sparkles className="h-3.5 w-3.5" /> One platform. Every financial service.</p><h2 className="mt-5 max-w-[900px] text-[clamp(2.6rem,5.5vw,5.7rem)] font-black leading-[.92] tracking-[-.065em]">Bringing bills & payments together, seamlessly.</h2></div>
          <Link href="/partner" className="group inline-flex h-14 items-center gap-3 rounded-2xl bg-white px-5 text-sm font-black text-ink-950 shadow-[0_18px_52px_-26px_rgba(255,255,255,.55)] transition duration-500 hover:-translate-y-1 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#06101e]">Become a Partner <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
        </div>

        <div className="grid gap-12 py-12 xl:grid-cols-[.72fr_1.28fr]">
          <div>
            <Image src="/brand/billbring-white.svg" alt="BillBring" width={172} height={38} className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">A unified platform to manage bill payments, collections, recharges and digital payments — all in one place.</p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/[.10] bg-white/[.035] px-3 py-2 text-[10px] font-black uppercase tracking-[.13em] text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Connected financial infrastructure</div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[.18em] text-slate-500">Products · 19 capabilities</p>
            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => <Link key={product.slug} href={`/products/${product.slug}`} className="group flex items-center gap-3 text-sm font-bold text-slate-300 transition hover:text-white"><span className="w-5 text-[9px] font-black text-slate-600 transition group-hover:text-brand-400">{String(index+1).padStart(2,"0")}</span><span className="link-underline">{product.name}</span></Link>)}
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-t border-white/[.10] py-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => <div key={column.title}><p className="mb-4 text-[10px] font-black uppercase tracking-[.17em] text-slate-500">{column.title}</p><div className="space-y-3">{column.links.map(([label, href]) => <Link key={href} href={href} className="block w-fit text-sm font-semibold text-slate-400 transition hover:text-brand-300">{label}</Link>)}</div></div>)}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[.10] pt-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} BillBring. All rights reserved.</p><div className="flex items-center gap-5"><p>Designed for clarity · Built for financial operations</p><a href="#main-content" className="group inline-flex items-center gap-2 font-bold text-slate-400 transition hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06101e]">Back to top <span className="grid h-7 w-7 place-items-center rounded-full border border-white/[.10] transition group-hover:-translate-y-0.5 group-hover:border-brand-400/[.30]"><ArrowUp className="h-3 w-3" /></span></a></div></div>
      </div>
    </footer>
  );
}
