import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [["About Us", "/company"], ["Careers", "/company#careers"], ["Blog", "/developers"], ["Contact Us", "/support"]],
  },
  {
    title: "Retailer",
    links: [["Become a Retailer", "/partner"], ["Benefits", "/solutions"], ["Services", "/products"], ["Support", "/support"]],
  },
  {
    title: "Distributor",
    links: [["Become a Distributor", "/partner"], ["Benefits", "/solutions"], ["Resources", "/developers"], ["Support", "/support"]],
  },
  {
    title: "Merchant",
    links: [["PayBring Gateway", "/products/paybring"], ["Features", "/products/paybring"], ["Pricing", "/pricing"], ["Developers", "/developers"]],
  },
  {
    title: "Support",
    links: [["Help Center", "/support"], ["Terms & Conditions", "/company#terms"], ["Privacy Policy", "/company#privacy"], ["Grievance Redressal", "/support"]],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#061b38] pb-7 pt-11 text-white dark:bg-[#02060b]">
      <div className="mx-auto w-full max-w-[1260px] px-5 sm:px-7 lg:px-8">
        <div className="grid gap-10 border-b border-white/[.10] pb-10 lg:grid-cols-[1.15fr_2.6fr]">
          <div>
            <Image src="/brand/billbring-white.svg" alt="BillBring" width={180} height={40} className="h-9 w-auto" />
            <p className="mt-4 max-w-[260px] text-[11px] leading-5 text-slate-300">Bringing Bills and Payments<br />Together Seamlessly</p>
            <div className="mt-5 flex gap-2" aria-label="Social media">
              {['f', '𝕏', 'in', '▶'].map((item) => (
                <span key={item} className="grid h-8 w-8 place-items-center rounded-full border border-white/15 text-[10px] font-bold text-white/80">{item}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 xl:grid-cols-6">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[8px] font-black uppercase tracking-[.12em] text-slate-400">{column.title}</p>
                <div className="mt-4 space-y-2.5">
                  {column.links.map(([label, href]) => (
                    <Link key={`${column.title}-${label}`} href={href} className="block w-fit text-[10px] font-medium text-slate-300 transition hover:text-[#54e394]">{label}</Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <p className="text-[8px] font-black uppercase tracking-[.12em] text-slate-400">Contact Us</p>
              <div className="mt-4 space-y-3 text-[10px] text-slate-300">
                <a href="tel:18001234567" className="flex items-center gap-2 transition hover:text-[#54e394]"><Phone className="h-3.5 w-3.5" /> 1800 123 4567</a>
                <a href="https://wa.me/917000012345" className="flex items-center gap-2 transition hover:text-[#54e394]"><MessageCircle className="h-3.5 w-3.5" /> 70000 12345</a>
                <a href="mailto:support@billbring.com" className="flex items-center gap-2 transition hover:text-[#54e394]"><Mail className="h-3.5 w-3.5" /> support@billbring.com</a>
              </div>
            </div>
          </div>
        </div>

        <p className="pt-6 text-center text-[9px] text-slate-400">© 2024 BillBring.com | All rights reserved.</p>
      </div>
    </footer>
  );
}
