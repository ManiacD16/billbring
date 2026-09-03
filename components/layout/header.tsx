"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  CreditCard,
  Landmark,
  Menu,
  Send,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/cn";

const navigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "Partners", href: "/partner" },
  { label: "Resources", href: "/resources" },
] as const;

const productMenu = [
  {
    group: "Collections & Payments",
    items: [
      { name: "PayBring", description: "Payment Gateway / Collection", href: "/products/paybring" },
      { name: "BringUPI", description: "UPI Payments / Collection", href: "/products/bringupi" },
      { name: "BringQR", description: "UPI / QR Payments", href: "/products/bringqr" },
      { name: "BillBring", description: "BBPS / Bill Payment / Recharge", href: "/products/billbring" },
    ],
  },
  {
    group: "Move Money",
    items: [
      { name: "BringPayout", description: "Vendor & Merchant Payout", href: "/products/bringpayout" },
      { name: "BringRemit", description: "Domestic Money Transfer", href: "/products/bringremit" },
      { name: "BringWallet", description: "Wallet", href: "/products/bringwallet" },
    ],
  },
  {
    group: "Banking & Financial Inclusion",
    items: [
      { name: "BringAEPS", description: "Aadhaar Enabled Payment System", href: "/products/bringaeps" },
      { name: "BringCash", description: "Cash Withdrawal", href: "/products/bringcash" },
      { name: "BringPOS", description: "POS / mPOS", href: "/products/bringpos" },
    ],
  },
  {
    group: "Business & Financial Services",
    items: [
      { name: "BringTravel", description: "Travel", href: "/products/bringtravel" },
      { name: "BringInsure", description: "Insurance", href: "/products/bringinsure" },
      { name: "BringCredit", description: "Loans / Credit Solutions", href: "/products/bringcredit" },
    ],
  },
] as const;

const productGroupIcons = [CreditCard, Send, Landmark, Building2] as const;

const companyMenu = [
  { label: "About billbring", href: "/company#about" },
  { label: "Our Vision & Mission", href: "/company#vision-mission" },
  { label: "Leadership", href: "/company#leadership" },
  { label: "Careers", href: "/company#careers" },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

function HeaderNetworkGraphic({ compact }: { compact: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] transition-opacity duration-500",
        compact ? "opacity-100" : "opacity-90",
      )}
    >
      <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[#16ad67]/[.10] blur-3xl dark:bg-[#34d987]/[.08]" />
      <div className="absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#2f8ee5]/[.09] blur-3xl dark:bg-[#2f8ee5]/[.07]" />

      <svg
        viewBox="0 0 720 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0 hidden h-full w-[52%] min-w-[620px] lg:block"
      >
        <defs>
          <linearGradient id="billbring-header-flow" x1="40" y1="16" x2="690" y2="78" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10A45C" stopOpacity="0" />
            <stop offset="0.38" stopColor="#10A45C" stopOpacity="0.32" />
            <stop offset="1" stopColor="#2F8EE5" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        <path d="M14 69C101 69 117 24 199 24C280 24 299 67 379 67C465 67 500 29 704 29" stroke="url(#billbring-header-flow)" strokeWidth="1.25" />
        <path d="M92 88C159 88 189 48 257 48C329 48 350 86 432 86C500 86 560 57 719 57" stroke="url(#billbring-header-flow)" strokeWidth="0.9" strokeDasharray="4 7" />
        <path d="M168 7V87M326 7V87M486 7V87M638 7V87" stroke="#17305A" strokeOpacity="0.04" />
        <path d="M20 22H718M20 70H718" stroke="#17305A" strokeOpacity="0.035" />
        {[
          [199, 24],
          [379, 67],
          [500, 29],
          [257, 48],
          [432, 86],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="8" fill="#12AF7C" fillOpacity="0.06" />
            <circle cx={cx} cy={cy} r="4.5" stroke="#12AF7C" strokeOpacity="0.25" />
            <circle cx={cx} cy={cy} r="2.2" fill="#12AF7C" fillOpacity="0.85" />
          </g>
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,154,85,.22),rgba(47,142,229,.12),transparent)]" />
    </div>
  );
}

function DropdownGraphic() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#12af7c]/[.09] blur-3xl dark:bg-[#54e394]/[.06]" />
      <svg viewBox="0 0 620 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-0 h-[78px] w-[52%] min-w-[430px] opacity-80 dark:opacity-45">
        <defs>
          <linearGradient id="billbring-dropdown-flow" x1="10" y1="20" x2="600" y2="62" gradientUnits="userSpaceOnUse">
            <stop stopColor="#12AF7C" stopOpacity="0" />
            <stop offset="0.45" stopColor="#12AF7C" stopOpacity="0.35" />
            <stop offset="1" stopColor="#2F8EE5" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        <path d="M8 57C82 57 101 18 171 18C247 18 260 57 333 57C407 57 440 24 610 24" stroke="url(#billbring-dropdown-flow)" strokeWidth="1.2" />
        <path d="M105 72C170 72 196 42 260 42C322 42 344 72 407 72C468 72 515 51 619 51" stroke="url(#billbring-dropdown-flow)" strokeWidth="0.85" strokeDasharray="4 6" />
        {[
          [171, 18],
          [333, 57],
          [440, 24],
          [260, 42],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="7" fill="#12AF7C" fillOpacity="0.08" />
            <circle cx={cx} cy={cy} r="2.4" fill="#12AF7C" fillOpacity="0.85" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function CompanyDropdownGraphic() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute -right-14 -top-16 h-40 w-40 rounded-full bg-[#12af7c]/[.12] blur-3xl dark:bg-[#54e394]/[.08]" />
      <div className="absolute -left-16 bottom-[-72px] h-36 w-36 rounded-full bg-[#2f8ee5]/[.08] blur-3xl dark:bg-[#2f8ee5]/[.06]" />
      <svg
        viewBox="0 0 300 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0 h-[104px] w-full opacity-75 dark:opacity-45"
      >
        <defs>
          <linearGradient id="billbring-company-flow" x1="16" y1="20" x2="290" y2="84" gradientUnits="userSpaceOnUse">
            <stop stopColor="#12AF7C" stopOpacity="0" />
            <stop offset="0.48" stopColor="#12AF7C" stopOpacity="0.34" />
            <stop offset="1" stopColor="#2F8EE5" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path d="M8 76C55 76 62 28 111 28C156 28 168 70 211 70C248 70 258 44 296 44" stroke="url(#billbring-company-flow)" strokeWidth="1.15" />
        <path d="M86 94C120 94 131 62 166 62C202 62 214 91 250 91C266 91 279 84 300 76" stroke="url(#billbring-company-flow)" strokeWidth="0.85" strokeDasharray="4 6" />
        <circle cx="111" cy="28" r="4" fill="#12AF7C" fillOpacity="0.68" />
        <circle cx="211" cy="70" r="4" fill="#12AF7C" fillOpacity="0.52" />
        <circle cx="166" cy="62" r="3" fill="#2F8EE5" fillOpacity="0.42" />
      </svg>
      <div className="absolute inset-x-6 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(18,175,124,.24),transparent)]" />
    </div>
  );
}

function ProductColumnGraphic({ index }: { index: number }) {
  const Icon = productGroupIcons[index];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute right-3 top-3 h-16 w-16 opacity-75 dark:opacity-55">
      <div className="absolute right-0 top-0 grid h-9 w-9 place-items-center rounded-full border border-[#12af7c]/15 bg-[#12af7c]/[.065] text-[#0e9a55] dark:border-[#54e394]/15 dark:bg-[#54e394]/[.06] dark:text-[#54e394]">
        <Icon className="h-4 w-4" strokeWidth={1.8} />
      </div>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
        <path d="M4 54C19 54 17 35 31 35C43 35 44 49 61 49" stroke="#12AF7C" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="31" cy="35" r="2" fill="#12AF7C" fillOpacity="0.38" />
      </svg>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setCompanyOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateHeaderShape = () => setIsScrolled(window.scrollY > 36);
    updateHeaderShape();
    window.addEventListener("scroll", updateHeaderShape, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderShape);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setProductsOpen(false);
        setCompanyOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);

  const desktopLinkClass = "inline-flex h-11 items-center px-3 text-[13px] font-semibold text-[#142544] transition-colors hover:text-[#0e9a55] dark:text-white dark:hover:text-[#54e394]";

  return (
    <header
      className={cn(
        "sticky z-[100] isolate transition-all duration-500",
        isScrolled
          ? "top-3 border-b border-transparent bg-transparent shadow-none sm:top-4"
          : "border-b border-[#142544]/[.07] bg-white/[.95] shadow-[0_8px_30px_-26px_rgba(16,33,63,.45)] backdrop-blur-xl dark:border-white/[.07] dark:bg-[#06101d]/[.94]",
      )}
    >
      <div
        className={cn(
          "relative mx-auto flex w-full items-center justify-between gap-4 overflow-visible px-4 transition-[max-width,min-height,width,margin-top,border-radius,border-color,background-color,box-shadow] duration-500 ease-out sm:px-6 lg:px-8",
          isScrolled
            ? "mt-0 min-h-[64px] w-[calc(100%_-_1rem)] max-w-[1240px] rounded-full border border-[#17305a]/[.10] bg-white/[.91] shadow-[0_18px_55px_-25px_rgba(16,33,63,.48),0_3px_12px_-7px_rgba(16,33,63,.18),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl sm:w-[calc(100%_-_2rem)] dark:border-white/[.10] dark:bg-[#07120e]/[.91] dark:shadow-[0_22px_60px_-28px_rgba(0,0,0,.75),inset_0_1px_0_rgba(255,255,255,.06)]"
            : "mt-0 min-h-[72px] max-w-[1480px] rounded-none border border-transparent bg-transparent sm:min-h-[80px] xl:min-h-[86px]",
        )}
      >
        <HeaderNetworkGraphic compact={isScrolled} />

        <Link href="/" aria-label="billbring home" className="relative z-10 shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
          <span className="block">
            <span className="flex items-end">
              <Image src="/brand/billbring.svg" alt="billbring" width={170} height={38} priority className={cn("w-auto transition-[height] duration-500 dark:hidden", isScrolled ? "h-[29px] sm:h-[34px]" : "h-[31px] sm:h-[42px]")} />
              <Image src="/brand/billbring-home.svg" alt="billbring" width={170} height={38} priority className={cn("hidden w-auto transition-[height] duration-500 dark:block", isScrolled ? "h-[29px] sm:h-[34px]" : "h-[31px] sm:h-[42px]")} />
              <span className="mb-[2px] ml-0.5 text-[10px] font-extrabold text-[#11995a] dark:text-[#54e394]">.com</span>
            </span>
          </span>
        </Link>

        <nav className="relative z-10 hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setProductsOpen(false); }}>
            <button type="button" onClick={() => setProductsOpen((open) => !open)} aria-expanded={productsOpen} className={cn(desktopLinkClass, "gap-1.5", pathname.startsWith("/products") && "text-[#0e9a55] dark:text-[#54e394]")}>Products <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", productsOpen && "rotate-180")} /></button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease }}
                  className={cn("pointer-events-none fixed inset-x-0 z-[100] px-4 pt-3", isScrolled ? "top-[60px] sm:top-[50px]" : "top-[66px]")}
                >
                  {/* Original Product dropdown dimensions/shape are intentionally preserved. */}
                  <div className="pointer-events-auto relative mx-auto w-full max-w-[1180px] overflow-hidden rounded-[20px] border border-[#17305a]/[.09] bg-white/[.99] shadow-[0_30px_90px_-40px_rgba(16,33,63,.38)] dark:border-white/[.09] dark:bg-[#07120e]/[.99]">
                    <div className="relative flex items-center justify-between overflow-hidden border-b border-[#17305a]/[.08] px-6 py-4 dark:border-white/[.08]">
                      <DropdownGraphic />
                      <div className="relative z-10"><p className="text-[10px] font-black uppercase tracking-[.22em] text-[#0e9a55] dark:text-[#54e394]">Product Menu</p><p className="mt-1 text-[12px] text-[#66748c] dark:text-white/62">Payments and financial services in one connected ecosystem.</p></div>
                      <Link href="/products" className="group relative z-10 inline-flex items-center gap-2 text-[12px] font-bold text-[#142544] hover:text-[#0e9a55] dark:text-white/80">View all products <ArrowRight className="h-3.5 w-3.5" /></Link>
                    </div>
                    <div className="grid grid-cols-4 gap-px bg-[#17305a]/[.07] dark:bg-white/[.07]">
                      {productMenu.map((section, index) => (
                        <div key={section.group} className="relative min-h-[260px] overflow-hidden bg-white px-4 py-5 dark:bg-[#07120e]">
                          <ProductColumnGraphic index={index} />
                          <p className="relative z-10 mb-3 max-w-[78%] text-[9px] font-extrabold uppercase tracking-[.14em] text-[#7f8999] dark:text-white/48">{section.group}</p>
                          <div className="relative z-10 space-y-1">{section.items.map((item) => <Link key={item.name} href={item.href} className="group block rounded-xl px-3 py-2.5 transition hover:bg-[#0e9a55]/[.065] dark:hover:bg-white/[.055]"><span className="block text-[13px] font-bold text-[#142544] group-hover:text-[#0e9a55] dark:text-white">{item.name}</span><span className="mt-1 block text-[10.5px] leading-4 text-[#748096] dark:text-white/58">{item.description}</span></Link>)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navigation.slice(0, 2).map((item) => <Link key={item.label} href={item.href} className={cn(desktopLinkClass, pathname === item.href && "text-[#0e9a55] dark:text-[#54e394]")}>{item.label}</Link>)}

          <div className="relative" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setCompanyOpen(false); }}>
            <button type="button" onClick={() => setCompanyOpen((open) => !open)} aria-expanded={companyOpen} className={cn(desktopLinkClass, "gap-1.5", pathname === "/company" && "text-[#0e9a55] dark:text-[#54e394]")}>Company <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", companyOpen && "rotate-180")} /></button>
            <AnimatePresence>
              {companyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 7, scale: 0.985 }}
                  transition={{ duration: 0.17, ease }}
                  className="absolute left-1/2 top-full z-[160] -translate-x-1/2 pt-3"
                >
                  <div className="relative w-[292px] overflow-hidden rounded-[22px] border border-[#17305a]/[.10] bg-white/[.94] p-2.5 shadow-[0_24px_70px_-30px_rgba(16,33,63,.50),0_7px_22px_-12px_rgba(16,33,63,.22),inset_0_1px_0_rgba(255,255,255,.92)] backdrop-blur-2xl dark:border-white/[.10] dark:bg-[#07120e]/[.95] dark:shadow-[0_26px_70px_-30px_rgba(0,0,0,.78),inset_0_1px_0_rgba(255,255,255,.05)]">
                    <CompanyDropdownGraphic />

                    <div className="relative z-10 mb-2 flex items-center gap-3 rounded-[16px] border border-[#17305a]/[.06] bg-white/55 px-3.5 py-3 dark:border-white/[.07] dark:bg-white/[.035]">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#12af7c]/20 bg-[#12af7c]/[.08] text-[#0e9a55] shadow-[inset_0_1px_0_rgba(255,255,255,.75)] dark:border-[#54e394]/20 dark:bg-[#54e394]/[.07] dark:text-[#54e394]">
                        <Building2 className="h-4 w-4" strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[.19em] text-[#0e9a55] dark:text-[#54e394]">Company</p>
                        <p className="mt-0.5 text-[11px] font-medium text-[#66748c] dark:text-white/58">Inside BillBring</p>
                      </div>
                    </div>

                    <div className="relative z-10 space-y-0.5">
                      {companyMenu.map((item, index) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="group flex items-center gap-3 rounded-[14px] px-3 py-3 transition-all duration-200 hover:bg-[#0e9a55]/[.07] dark:hover:bg-white/[.055]"
                        >
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#17305a]/[.07] bg-white/70 text-[9px] font-black tabular-nums text-[#8190a4] transition group-hover:border-[#12af7c]/20 group-hover:bg-[#12af7c]/[.07] group-hover:text-[#0e9a55] dark:border-white/[.08] dark:bg-white/[.035] dark:text-white/45 dark:group-hover:text-[#54e394]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1 text-[12px] font-bold text-[#142544] transition-colors group-hover:text-[#0e9a55] dark:text-white dark:group-hover:text-[#54e394]">
                            {item.label}
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-[#0e9a55] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 dark:text-[#54e394]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/resources" className={cn(desktopLinkClass, pathname === "/resources" && "text-[#0e9a55] dark:text-[#54e394]")}>Resources</Link>
        </nav>

        <div className="relative z-10 hidden items-center gap-2.5 xl:flex"><ThemeToggle /><Link href="/login" className="inline-flex h-11 items-center rounded-[8px] border border-[#0e9a55]/40 bg-white/50 px-4 text-[12px] font-bold text-[#142544] transition hover:border-[#0e9a55] hover:bg-[#0e9a55]/[.06] hover:text-[#0e9a55] dark:bg-transparent dark:text-white">Login</Link><Link href="/partner" className="group inline-flex h-11 items-center gap-2 rounded-[8px] bg-[linear-gradient(180deg,#14a962_0%,#0a8c4f_100%)] px-5 text-[12px] font-bold text-white shadow-[0_10px_25px_-15px_rgba(14,154,85,.8)]">Partner With Us <ArrowRight className="h-3.5 w-3.5" /></Link></div>

        <div className="relative z-10 flex items-center gap-2 xl:hidden"><ThemeToggle /><button type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close navigation" : "Open navigation"} className="grid h-11 w-11 place-items-center rounded-xl border border-[#142544]/10 bg-white text-[#142544] dark:border-white/10 dark:bg-white/[.04] dark:text-white">{mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-2 border-t border-[#142544]/[.07] bg-white xl:hidden dark:border-white/[.07] dark:bg-[#06101d]">
            <div className="mx-auto max-h-[calc(100svh-72px)] w-full max-w-[1480px] overflow-y-auto px-4 py-5 sm:max-h-[calc(100svh-80px)] sm:px-6">
              <button type="button" onClick={() => setProductsOpen((open) => !open)} className="flex w-full items-center justify-between rounded-xl bg-[#f3f8f5] px-4 py-3 text-left text-sm font-bold text-[#142544] dark:bg-white/[.06] dark:text-white">Products <ChevronDown className={cn("h-4 w-4 transition-transform", productsOpen && "rotate-180")} /></button>
              <AnimatePresence initial={false}>{productsOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="grid gap-2 py-3 sm:grid-cols-2">{productMenu.map((section) => <div key={section.group} className="rounded-xl border border-[#142544]/[.07] p-3 dark:border-white/[.07]"><p className="px-2 pb-2 text-[9px] font-black uppercase tracking-[.13em] text-[#7a8799] dark:text-white/52">{section.group}</p>{section.items.map((item) => <Link key={item.name} href={item.href} className="block rounded-lg px-2 py-2.5 hover:bg-brand-500/[.08]"><span className="block text-xs font-bold text-[#142544] dark:text-white">{item.name}</span><span className="mt-0.5 block text-[10px] text-[#748096] dark:text-white/58">{item.description}</span></Link>)}</div>)}</div></motion.div>}</AnimatePresence>

              <div className="mt-2 grid gap-1 sm:grid-cols-2"><Link href="/solutions" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#142544] hover:bg-brand-500/[.08] dark:text-white">Solutions <ArrowRight className="h-3.5 w-3.5" /></Link><Link href="/partner" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#142544] hover:bg-brand-500/[.08] dark:text-white">Partners <ArrowRight className="h-3.5 w-3.5" /></Link></div>

              <button type="button" onClick={() => setCompanyOpen((open) => !open)} className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[#142544] hover:bg-brand-500/[.08] dark:text-white">Company <ChevronDown className={cn("h-4 w-4 transition-transform", companyOpen && "rotate-180")} /></button>
              <AnimatePresence initial={false}>{companyOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="grid gap-1 px-2 pb-2 sm:grid-cols-2">{companyMenu.map((item) => <Link key={item.label} href={item.href} className="rounded-lg px-3 py-2.5 text-xs font-semibold text-[#5f6e83] hover:bg-brand-500/[.08] dark:text-slate-300">{item.label}</Link>)}</div></motion.div>}</AnimatePresence>

              <Link href="/resources" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#142544] hover:bg-brand-500/[.08] dark:text-white">Resources <ArrowRight className="h-3.5 w-3.5" /></Link>

              <div className="mt-4 grid grid-cols-2 gap-2"><Link href="/login" className="flex min-h-12 items-center justify-center rounded-xl border border-[#0e9a55]/35 px-4 text-sm font-bold text-[#142544] dark:text-white">Login</Link><Link href="/partner" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0e9a55] px-4 text-sm font-bold text-white">Partner With Us <ArrowRight className="h-4 w-4" /></Link></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}