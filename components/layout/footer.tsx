import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [["About Us", "/company"], ["Careers", "/company#careers"], ["Pricing", "/pricing"], ["Contact Us", "/support"]],
  },
  {
    title: "Retailer",
    links: [["Become a Retailer", "/solutions#retailers"], ["Benefits", "/solutions#retailers"], ["Services", "/products"], ["Support", "/support"]],
  },
  {
    title: "Distributor",
    links: [["Become a Distributor", "/partner"], ["Benefits", "/partner"], ["Resources", "/developers"], ["Support", "/support"]],
  },
  {
    title: "Merchant",
    links: [["PayBring Gateway", "/products/paybring"], ["Collections", "/products/payment-gateway-collection"], ["Payouts", "/products/bringpayout"], ["Developers", "/developers"]],
  },
  {
    title: "Support",
    links: [["Help Center", "/support"], ["Products", "/products"], ["Solutions", "/solutions"], ["Partner Program", "/partner"]],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-8 bg-[#061b38] pb-7 pt-12 text-white dark:bg-[#02060b]">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/[.10] pb-11 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Image src="/brand/billbring-white.svg" alt="BillBring" width={180} height={40} className="h-10 w-auto" />
            <p className="mt-5 max-w-[310px] text-sm leading-7 text-slate-400">Bringing bills and payments together seamlessly with one connected platform for everyday financial services.</p>
            <Link href="/partner" className="group mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-brand-500 px-4 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-400">
              Become a Partner <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-7 gap-y-9 sm:grid-cols-3 xl:grid-cols-5">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[9px] font-black uppercase tracking-[.14em] text-slate-500">{column.title}</p>
                <div className="mt-4 space-y-3">
                  {column.links.map(([label, href]) => <Link key={`${column.title}-${label}`} href={href} className="block w-fit text-[11px] font-medium text-slate-300 transition hover:text-brand-300">{label}</Link>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BillBring. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/company#privacy" className="transition hover:text-slate-300">Privacy Policy</Link>
            <Link href="/company#terms" className="transition hover:text-slate-300">Terms & Conditions</Link>
            <Link href="/support" className="transition hover:text-slate-300">Grievance & Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
