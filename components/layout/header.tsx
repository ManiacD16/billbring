"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { productGroups, products } from "@/data/products";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Home", href: "/" },
  { label: "Retailer", href: "/solutions#retailers" },
  { label: "Distributor", href: "/solutions#retailers" },
  { label: "Merchant", href: "/solutions#merchants" },
  { label: "About Us", href: "/company" },
  { label: "Contact Us", href: "/support" },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/[.07] bg-white/[.88] backdrop-blur-xl dark:border-white/[.07] dark:bg-[#03060a]/[.88]">
      <div className="section-shell flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" aria-label="BillBring home" className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
          <Image src="/brand/billbring-main.svg" alt="BillBring" width={160} height={36} priority className="h-[32px] w-auto dark:hidden" />
          <Image src="/brand/billbring-white.svg" alt="BillBring" width={160} height={36} priority className="hidden h-[32px] w-auto dark:block" />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">
          <Link href="/" className={cn("inline-flex h-10 items-center px-3 text-[12px] font-semibold transition hover:text-brand-600 dark:hover:text-brand-300", pathname === "/" && "text-brand-600 dark:text-hero-green")}>Home</Link>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button type="button" onClick={() => setServicesOpen((open) => !open)} aria-expanded={servicesOpen} aria-haspopup="true" className={cn("inline-flex h-10 items-center gap-1 px-3 text-[12px] font-semibold transition hover:text-brand-600 dark:hover:text-brand-300", pathname.startsWith("/products") && "text-brand-600 dark:text-hero-green")}>
              Services <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div initial={{ opacity: 0, y: 8, scale: .99 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 6, scale: .99 }} transition={{ duration: .2, ease }} className="absolute left-1/2 top-full z-[100] w-[820px] -translate-x-[28%] pt-3">
                  <div className="rounded-[1.5rem] border border-ink-900/[.08] bg-white p-3 shadow-[0_30px_90px_-38px_rgba(16,33,63,.36)] dark:border-white/[.09] dark:bg-[#0a111a]">
                    <div className="grid grid-cols-4 gap-2">
                      {productGroups.map((group) => (
                        <div key={group} className="rounded-[1.1rem] bg-[#f4f8f5] p-3.5 dark:bg-white/[.035]">
                          <p className="border-b border-ink-900/[.07] pb-2.5 text-[9px] font-black uppercase tracking-[.13em] text-[var(--muted)] dark:border-white/[.07]">{group}</p>
                          <div className="mt-2 space-y-0.5">
                            {products.filter((product) => product.group === group).slice(0, 5).map((product) => (
                              <Link key={product.slug} href={`/products/${product.slug}`} className="block rounded-lg px-2 py-2 text-[11px] font-semibold transition hover:bg-white hover:text-brand-600 dark:hover:bg-white/[.055] dark:hover:text-brand-300">{product.name}</Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link href="/products" className="mt-2 flex items-center justify-between rounded-xl bg-ink-950 px-4 py-3 text-xs font-bold text-white dark:bg-black">
                      View all BillBring services <ArrowRight className="h-4 w-4 text-brand-300" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {nav.slice(1).map((item) => {
            const basePath = item.href.split("#")[0];
            const active = basePath !== "/" && pathname === basePath;
            return (
              <Link key={`${item.label}-${item.href}`} href={item.href} className={cn("inline-flex h-10 items-center px-3 text-[12px] font-semibold transition hover:text-brand-600 dark:hover:text-brand-300", active && "text-brand-600 dark:text-hero-green")}>{item.label}</Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <ThemeToggle />
          <Link href="/login" className="inline-flex h-10 items-center rounded-lg border border-brand-500/25 px-4 text-[12px] font-bold text-brand-700 transition hover:bg-brand-500/[.06] dark:text-brand-300">Login</Link>
          <Link href="/partner" className="group inline-flex h-10 items-center gap-2 rounded-lg bg-brand-600 px-4 text-[12px] font-bold text-white shadow-[0_12px_30px_-18px_rgba(18,175,124,.7)] transition hover:-translate-y-0.5 hover:bg-brand-700 dark:bg-hero-green dark:text-[#041008] dark:hover:brightness-105">Become a Partner <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" /></Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close navigation" : "Open navigation"} className="grid h-11 w-11 place-items-center rounded-xl border border-ink-900/[.09] bg-white text-ink-950 dark:border-white/[.10] dark:bg-white/[.04] dark:text-white">
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .22, ease }} className="border-t border-ink-900/[.07] bg-white dark:border-white/[.07] dark:bg-[#071018] xl:hidden">
            <div className="section-shell max-h-[calc(100svh-76px)] overflow-y-auto py-5">
              <button type="button" onClick={() => setServicesOpen((open) => !open)} className="flex w-full items-center justify-between rounded-xl bg-[var(--surface-muted)] px-4 py-3 text-left text-sm font-bold">
                Services <ChevronDown className={cn("h-4 w-4 transition", servicesOpen && "rotate-180")} />
              </button>
              <AnimatePresence initial={false}>
                {servicesOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="grid gap-2 py-2 sm:grid-cols-2">
                      {productGroups.map((group) => (
                        <div key={group} className="rounded-xl border border-ink-900/[.07] p-3 dark:border-white/[.07]">
                          <p className="px-2 pb-2 text-[9px] font-black uppercase tracking-[.13em] text-[var(--muted)]">{group}</p>
                          {products.filter((product) => product.group === group).slice(0, 5).map((product) => <Link key={product.slug} href={`/products/${product.slug}`} className="block rounded-lg px-2 py-2 text-xs font-semibold hover:bg-brand-500/[.08]">{product.name}</Link>)}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-3 grid gap-1 sm:grid-cols-2">
                {nav.map((item) => <Link key={`${item.label}-${item.href}`} href={item.href} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold hover:bg-brand-500/[.08]">{item.label}<ArrowRight className="h-3.5 w-3.5 text-[var(--muted)]" /></Link>)}
                <Link href="/login" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold hover:bg-brand-500/[.08]">Login <ArrowRight className="h-3.5 w-3.5 text-[var(--muted)]" /></Link>
              </div>
              <Link href="/partner" className="mt-4 flex min-h-12 items-center justify-between rounded-xl bg-brand-600 px-5 text-sm font-bold text-white dark:bg-hero-green dark:text-[#041008]">Become a Partner <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
