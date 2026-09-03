import Image from "next/image";
import Link from "next/link";

const columns = [
  { title: "Products", links: [["Collections & Payments", "/products"], ["Move Money", "/products"], ["Banking & Financial Inclusion", "/products"], ["Business & Financial Services", "/products"]] },
  { title: "Solutions", links: [["Retailer Solutions", "/solutions#retailers"], ["Distributor Solutions", "/solutions#distributors"], ["Merchant Solutions", "/solutions#merchants"], ["Business & Enterprise", "/solutions#enterprise"]] },
  { title: "Partners", links: [["API Partners", "/partner"], ["Our API Solutions", "/partner"], ["B2B Integration", "/partner"], ["Talk to Our Team", "/support"]] },
  { title: "Company", links: [["About billbring", "/company#about"], ["Vision & Mission", "/company#vision-mission"], ["Leadership", "/company#leadership"], ["Careers", "/company#careers"]] },
  { title: "Resources", links: [["Blog", "/resources#blog"], ["Guides", "/resources#guides"], ["API Documentation", "/resources#api-documentation"], ["FAQs", "/resources#faqs"]] },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#061b38] pb-7 pt-11 text-white dark:bg-[#02060b]">
      <div className="mx-auto w-full max-w-[1260px] px-5 sm:px-7 lg:px-8">
        <div className="grid gap-10 border-b border-white/[.10] pb-10 lg:grid-cols-[1.15fr_2.6fr]">
          <div>
            <Image src="/brand/billbring-white.svg" alt="billbring" width={180} height={40} className="h-9 w-auto" />
            <p className="mt-4 max-w-[280px] text-[11px] leading-5 text-slate-300">Bringing Bills and Payments Together Seamlessly.</p>
            <p className="mt-4 max-w-[290px] text-[10px] leading-5 text-slate-400">Payments, banking services and digital financial solutions together on one connected ecosystem.</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 xl:grid-cols-5">
            {columns.map((column) => <div key={column.title}><p className="text-[8px] font-black uppercase tracking-[.12em] text-slate-400">{column.title}</p><div className="mt-4 space-y-2.5">{column.links.map(([label, href]) => <Link key={`${column.title}-${label}`} href={href} className="block w-fit text-[10px] font-medium text-slate-300 transition hover:text-[#54e394]">{label}</Link>)}</div></div>)}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[9px] text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 billbring.com | All rights reserved.</p><div className="flex gap-4"><Link href="/partner" className="hover:text-[#54e394]">Partner With Us</Link><Link href="/support" className="hover:text-[#54e394]">Contact Us</Link></div></div>
      </div>
    </footer>
  );
}
