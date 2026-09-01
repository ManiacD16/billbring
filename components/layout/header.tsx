"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/cn";

const navigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "Partners", href: "/partner" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/developers" },
] as const;

const productMenu = [
  {
    group: "Accept Money",
    items: [{ name: "PayBring", description: "Payment Gateway", href: "/products/paybring" }],
  },
  {
    group: "Move Money",
    items: [
      { name: "BringPayout", description: "Vendor & Merchant Payout", href: "/products/bringpayout" },
      { name: "BringRemit", description: "Remittance", href: "/products/bringremit" },
      { name: "BringDMT", description: "Domestic Money Transfer", href: "/products/bringdmt" },
    ],
  },
  {
    group: "Banking & Finance",
    items: [
      { name: "BringAEPS", description: "Aadhaar Banking", href: "/products/bringaeps" },
      { name: "BringWallet", description: "Digital Wallet", href: "/products/bringwallet" },
      { name: "BringCredit", description: "Digital Credit & Loans", href: "/products/bringcredit" },
    ],
  },
  {
    group: "Payments & Merchant",
    items: [
      { name: "BillBring", description: "BBPS / Bill Payment / Recharge", href: "/products/billbring" },
      { name: "BringPOS", description: "POS / mPOS", href: "/products/bringpos" },
    ],
  },
  {
    group: "Lifestyle & Protection",
    items: [
      { name: "BringTravel", description: "Travel Services", href: "/products/bringtravel" },
      { name: "BringInsure", description: "Insurance", href: "/products/bringinsure" },
    ],
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const desktopLinkClass =
    "inline-flex h-11 items-center px-3 text-[13px] font-semibold text-[#142544] transition-colors hover:text-[#0e9a55] dark:text-white dark:hover:text-[#54e394]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#142544]/[.07] bg-white/[.95] shadow-[0_8px_30px_-26px_rgba(16,33,63,.45)] backdrop-blur-xl dark:border-white/[.07] dark:bg-[#06101d]/[.94]">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1480px] items-center justify-between gap-4 px-4 sm:min-h-[80px] sm:px-6 lg:px-8 xl:min-h-[86px]">
        <Link
          href="/"
          aria-label="BillBring home"
          className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <span className="block">
            <span className="flex items-end">
              <Image
                src="/brand/billbring-main.svg"
                alt="BillBring"
                width={170}
                height={38}
                priority
                className="h-[31px] w-auto dark:hidden sm:h-[34px]"
              />
              <Image
                src="/brand/billbring-home.svg"
                alt="BillBring"
                width={170}
                height={38}
                priority
                className="hidden h-[31px] w-auto dark:block sm:h-[34px]"
              />
              <span className="mb-[2px] ml-0.5 text-[10px] font-extrabold text-[#11995a] dark:text-[#54e394]">.com</span>
            </span>
            <span className="mt-0.5 hidden text-[7.5px] font-medium tracking-[-.01em] text-[#68758a] dark:text-white/50 sm:block">Bringing Bills and Payments Together Seamlessly</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setProductsOpen(false);
            }}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((open) => !open)}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              aria-controls="desktop-products-menu"
              className={cn(
                desktopLinkClass,
                "gap-1.5",
                pathname.startsWith("/products") && "text-[#0e9a55] dark:text-[#54e394]",
              )}
            >
              Products
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", productsOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 9 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 7 }}
                  transition={{ duration: 0.18, ease }}
                  className="pointer-events-none fixed inset-x-0 top-[86px] z-[100] px-4 pt-3"
                >
                  <div
                    id="desktop-products-menu"
                    role="region"
                    aria-label="Products mega menu"
                    className="pointer-events-auto mx-auto w-full max-w-[1180px] overflow-hidden rounded-[20px] border border-[#17305a]/[.09] bg-white/[.99] shadow-[0_30px_90px_-40px_rgba(16,33,63,.38)] dark:border-white/[.09] dark:bg-[#07120e]/[.99] dark:shadow-[0_34px_100px_-42px_rgba(0,0,0,.86)]"
                  >
                    <div className="flex items-center justify-between border-b border-[#17305a]/[.08] px-6 py-4 dark:border-white/[.08]">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#0e9a55] dark:text-[#54e394]">Products</p>
                        <p className="mt-1 text-[12px] text-[#66748c] dark:text-white/62">One connected BillBring product ecosystem.</p>
                      </div>
                      <Link href="/products" className="group inline-flex items-center gap-2 text-[12px] font-bold text-[#142544] transition hover:text-[#0e9a55] dark:text-white/80 dark:hover:text-[#54e394]">
                        View all products <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-5 gap-px bg-[#17305a]/[.07] dark:bg-white/[.07]">
                      {productMenu.map((section) => (
                        <div key={section.group} className="min-h-[238px] bg-white px-4 py-5 dark:bg-[#07120e]">
                          <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[.14em] text-[#7f8999] dark:text-white/48">{section.group}</p>
                          <div className="space-y-1">
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group block rounded-xl px-3 py-2.5 transition hover:bg-[#0e9a55]/[.065] dark:hover:bg-white/[.055]"
                              >
                                <span className="block text-[13px] font-bold text-[#142544] transition group-hover:text-[#0e9a55] dark:text-white dark:group-hover:text-[#54e394]">{item.name}</span>
                                <span className="mt-1 block text-[10.5px] leading-4 text-[#748096] dark:text-white/58">{item.description}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(desktopLinkClass, active && "text-[#0e9a55] dark:text-[#54e394]")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 xl:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className="inline-flex h-11 items-center rounded-[8px] border border-[#0e9a55]/40 px-4 text-[12px] font-bold text-[#142544] transition hover:border-[#0e9a55] hover:bg-[#0e9a55]/[.06] hover:text-[#0e9a55] dark:border-[#54e394]/35 dark:text-white dark:hover:border-[#54e394] dark:hover:text-[#54e394]"
          >
            Login
          </Link>
          <Link
            href="/partner"
            className="group inline-flex h-11 items-center gap-2 rounded-[8px] bg-[linear-gradient(180deg,#14a962_0%,#0a8c4f_100%)] px-5 text-[12px] font-bold text-white shadow-[0_12px_28px_-16px_rgba(14,154,85,.65)] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Become a Partner <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-[#142544]/10 bg-white text-[#142544] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-white/10 dark:bg-white/[.04] dark:text-white"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease }}
            className="border-t border-[#142544]/[.07] bg-white xl:hidden dark:border-white/[.07] dark:bg-[#06101d]"
          >
            <div className="mx-auto max-h-[calc(100svh-72px)] w-full max-w-[1480px] overflow-y-auto px-4 py-5 sm:max-h-[calc(100svh-80px)] sm:px-6">
              <button
                type="button"
                onClick={() => setProductsOpen((open) => !open)}
                aria-expanded={productsOpen}
                aria-controls="mobile-products-menu"
                className="flex w-full items-center justify-between rounded-xl bg-[#f3f8f5] px-4 py-3 text-left text-sm font-bold text-[#142544] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:bg-white/[.06] dark:text-white"
              >
                Products <ChevronDown className={cn("h-4 w-4 transition-transform", productsOpen && "rotate-180")} />
              </button>

              <AnimatePresence initial={false}>
                {productsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div id="mobile-products-menu" className="grid gap-2 py-3 sm:grid-cols-2">
                      {productMenu.map((section) => (
                        <div key={section.group} className="rounded-xl border border-[#142544]/[.07] p-3 dark:border-white/[.07]">
                          <p className="px-2 pb-2 text-[9px] font-black uppercase tracking-[.13em] text-[#7a8799] dark:text-white/52">{section.group}</p>
                          {section.items.map((item) => (
                            <Link key={item.name} href={item.href} className="block rounded-lg px-2 py-2.5 transition hover:bg-brand-500/[.08] dark:hover:bg-white/[.06]">
                              <span className="block text-xs font-bold text-[#142544] dark:text-white">{item.name}</span>
                              <span className="mt-0.5 block text-[10px] text-[#748096] dark:text-white/58">{item.description}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-2 grid gap-1 sm:grid-cols-2">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#142544] hover:bg-brand-500/[.08] dark:text-white dark:hover:bg-white/[.06]"
                  >
                    {item.label}<ArrowRight className="h-3.5 w-3.5 text-[#7f8999] dark:text-white/35" />
                  </Link>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <Link href="/login" className="flex min-h-12 items-center justify-center rounded-xl border border-[#0e9a55]/35 px-4 text-sm font-bold text-[#142544] dark:text-white">
                  Login
                </Link>
                <Link href="/partner" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0e9a55] px-4 text-sm font-bold text-white">
                  Become a Partner <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}