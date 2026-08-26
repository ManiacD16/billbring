"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { productGroups, products } from "@/data/products";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Developers", href: "/developers" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support", href: "/support" },
];

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

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/[.08] bg-[var(--background)] backdrop-blur-xl dark:border-white/[.08]">
      <div className="section-shell flex min-h-[82px] items-center justify-between gap-5">
        {/* Logo */}
        <Link
          href="/"
          aria-label="BillBring home"
          className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <Image
            src="/brand/billbring-main.svg"
            alt="BillBring"
            width={170}
            height={38}
            priority
            className="h-[34px] w-auto dark:hidden"
          />

          <Image
            src="/brand/billbring-white.svg"
            alt="BillBring"
            width={170}
            height={38}
            priority
            className="hidden h-[34px] w-auto dark:block"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {/* Products */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen((open) => !open)}
              className={cn(
                "inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-[13px] font-semibold transition",
                "hover:bg-ink-900/[.045] dark:hover:bg-white/[.06]",
                pathname.startsWith("/products") &&
                  "bg-brand-500/[.10] text-brand-700 dark:text-brand-300",
              )}
            >
              Products

              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-300",
                  productsOpen && "rotate-180",
                )}
              />
            </button>

            {/* Products Dropdown */}
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                    scale: 0.985,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 6,
                    scale: 0.99,
                  }}
                  transition={{
                    duration: 0.22,
                    ease,
                  }}
                  className="
                    absolute
                    left-0
                    top-full
                    z-[100]
                    pt-3
                  "
                >
                  <div
                    className="
                      w-[760px]
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-ink-900/[.10]
                      bg-[var(--surface-strong)]
                      p-3
                      shadow-[0_32px_90px_-38px_rgba(26,46,89,.42)]
                      dark:border-white/[.10]
                      xl:w-[900px]
                      2xl:w-[1050px]
                    "
                  >
                    <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
                      {productGroups.map((group, groupIndex) => {
                        const groupProducts = products.filter(
                          (product) => product.group === group,
                        );

                        return (
                          <div
                            key={group}
                            className="
                              min-w-0
                              rounded-[1.4rem]
                              bg-[var(--surface-muted)]
                              p-4
                            "
                          >
                            <div className="flex min-h-[42px] items-start justify-between gap-3 border-b border-ink-900/[.08] pb-3 dark:border-white/[.08]">
                              <p className="max-w-[145px] text-[10px] font-bold uppercase leading-[1.35] tracking-[.13em] text-[var(--muted)]">
                                {group}
                              </p>

                              <span className="shrink-0 font-display text-lg font-semibold leading-none text-brand-500">
                                {String(groupIndex + 1).padStart(2, "0")}
                              </span>
                            </div>

                            <div className="mt-2">
                              {groupProducts.map((product) => (
                                <Link
                                  key={product.slug}
                                  href={`/products/${product.slug}`}
                                  className="
                                    group
                                    flex
                                    min-h-[38px]
                                    items-center
                                    justify-between
                                    gap-3
                                    rounded-xl
                                    px-2.5
                                    py-2
                                    text-[12px]
                                    font-semibold
                                    leading-[1.35]
                                    transition
                                    hover:bg-white
                                    dark:hover:bg-white/[.06]
                                  "
                                >
                                  <span className="min-w-0">
                                    {product.name}
                                  </span>

                                  <ArrowUpRight
                                    className="
                                      h-3.5
                                      w-3.5
                                      shrink-0
                                      text-[var(--muted)]
                                      opacity-0
                                      transition-all
                                      duration-200
                                      group-hover:-translate-y-0.5
                                      group-hover:translate-x-0.5
                                      group-hover:opacity-100
                                    "
                                  />
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Dropdown Footer */}
                    <div className="mt-2 flex items-center justify-between gap-6 rounded-[1.2rem] bg-ink-950 px-5 py-4 text-white">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[.15em] text-brand-300">
                          19 connected capabilities
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-200">
                          Explore the full BillBring financial service layer.
                        </p>
                      </div>

                      <Link
                        href="/products"
                        className="
                          group
                          inline-flex
                          shrink-0
                          items-center
                          gap-2
                          rounded-full
                          bg-white
                          px-4
                          py-2.5
                          text-xs
                          font-semibold
                          text-ink-950
                          transition
                          hover:-translate-y-0.5
                        "
                      >
                        View all products

                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Navigation */}
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex h-11 items-center rounded-full px-4 text-[13px] font-semibold transition",
                  "hover:bg-ink-900/[.045] dark:hover:bg-white/[.06]",
                  active &&
                    "bg-brand-500/[.10] text-brand-700 dark:text-brand-300",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />

          <Link
            href="/login"
            className="inline-flex h-11 items-center rounded-full px-4 text-[13px] font-semibold transition hover:bg-ink-900/[.045] dark:hover:bg-white/[.06]"
          >
            Login
          </Link>

          <Link
            href="/partner"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-brand-500 px-5 text-[13px] font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-brand-400"
          >
            Become a Partner

            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen ? "Close navigation" : "Open navigation"
            }
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/[.10] bg-[var(--surface-strong)] dark:border-white/[.10]"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.24,
              ease,
            }}
            className="border-t border-ink-900/[.08] bg-[var(--surface-strong)] dark:border-white/[.08] lg:hidden"
          >
            <div className="section-shell max-h-[calc(100svh-82px)] overflow-y-auto py-5">
              <div className="rounded-[1.6rem] bg-[var(--surface-muted)] p-3">
                <button
                  type="button"
                  onClick={() =>
                    setProductsOpen((open) => !open)
                  }
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold"
                >
                  Products

                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      productsOpen && "rotate-180",
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {productsOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-2 px-1 pb-2 sm:grid-cols-2">
                        {productGroups.map((group) => (
                          <div
                            key={group}
                            className="rounded-xl bg-[var(--surface-strong)] p-3"
                          >
                            <p className="px-2 pb-2 text-[9px] font-bold uppercase tracking-[.14em] text-[var(--muted)]">
                              {group}
                            </p>

                            {products
                              .filter(
                                (product) =>
                                  product.group === group,
                              )
                              .map((product) => (
                                <Link
                                  key={product.slug}
                                  href={`/products/${product.slug}`}
                                  className="block rounded-lg px-2 py-2 text-xs font-semibold hover:bg-brand-500/[.08]"
                                >
                                  {product.name}
                                </Link>
                              ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-3 space-y-1">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold hover:bg-brand-500/[.08]"
                  >
                    {item.label}

                    <ArrowUpRight className="h-4 w-4 text-[var(--muted)]" />
                  </Link>
                ))}

                <Link
                  href="/login"
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold hover:bg-brand-500/[.08]"
                >
                  Login

                  <ArrowUpRight className="h-4 w-4 text-[var(--muted)]" />
                </Link>
              </div>

              <Link
                href="/partner"
                className="mt-4 flex min-h-14 items-center justify-between rounded-full bg-brand-500 px-5 text-sm font-semibold text-ink-950"
              >
                Become a Partner

                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}