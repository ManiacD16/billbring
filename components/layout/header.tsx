"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  products,
  productGroups,
} from "@/data/products";
import { cn } from "@/lib/cn";
import { premiumEase } from "@/lib/motion";

const nav = [
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Developers",
    href: "/developers",
  },
  {
    label: "Company",
    href: "/company",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Support",
    href: "/support",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const [productsOpen, setProductsOpen] =
    useState(false);

  const [
    mobileProductsOpen,
    setMobileProductsOpen,
  ] = useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const pathname = usePathname();

  const reduced = useReducedMotion();

  const closeTimer =
    useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );

  /*
   * ========================================================
   * MENU HELPERS
   * ========================================================
   */

  const cancelProductClose = () => {
    if (!closeTimer.current) return;

    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  const openProducts = () => {
    cancelProductClose();
    setProductsOpen(true);
  };

  const closeProductsSoon = () => {
    cancelProductClose();

    closeTimer.current = setTimeout(() => {
      setProductsOpen(false);
    }, 140);
  };

  const toggleMobileMenu = () => {
    setOpen((current) => {
      const next = !current;

      if (!next) {
        setMobileProductsOpen(false);
      }

      return next;
    });
  };

  /*
   * ========================================================
   * ROUTE CHANGE
   * ========================================================
   */

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  /*
   * ========================================================
   * HEADER SCROLL STATE
   * ========================================================
   */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll,
      );
    };
  }, []);

  /*
   * ========================================================
   * ESCAPE KEY
   * ========================================================
   */

  useEffect(() => {
    const onKey = (
      event: KeyboardEvent,
    ) => {
      if (event.key !== "Escape") return;

      setOpen(false);
      setProductsOpen(false);
      setMobileProductsOpen(false);
    };

    window.addEventListener(
      "keydown",
      onKey,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        onKey,
      );
    };
  }, []);

  /*
   * ========================================================
   * TIMER CLEANUP
   * ========================================================
   */

  useEffect(() => {
    return () => {
      cancelProductClose();
    };
  }, []);

  return (
    <header
      className="
        sticky top-0 z-50
        px-3 pt-3
        sm:px-5
      "
    >
      <motion.div
        animate={
          reduced
            ? undefined
            : {
                y: scrolled ? -1 : 0,
              }
        }
        transition={{
          duration: 0.32,
          ease: premiumEase,
        }}
        className={cn(
          `
            section-shell
            relative
            overflow-visible
            rounded-[22px]
            border border-slate-200/[.75]
            bg-white/[.88]
            py-2.5
            shadow-[0_12px_52px_-30px_rgba(8,18,37,.38)]
            backdrop-blur-2xl

            transition-[max-width,border-color,background-color,box-shadow]
            duration-500

            dark:border-white/[.10]
            dark:bg-ink-950/[.84]
          `,
          scrolled &&
            `
              max-w-[1320px]
              border-slate-200/[.90]
              bg-white/[.95]
              shadow-[0_18px_60px_-34px_rgba(8,18,37,.46)]

              dark:bg-ink-950/[.95]
            `,
        )}
      >
        {/* ===================================================
            NAVIGATION BAR
        =================================================== */}

        <div className="relative z-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            aria-label="BillBring home"
            className="
              group shrink-0 rounded-lg

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-500
              focus-visible:ring-offset-4
            "
          >
            <Image
              src="/brand/billbring-main.svg"
              alt="BillBring"
              width={164}
              height={37}
              priority
              className={cn(
                `
                  w-auto
                  transition-all duration-500
                  dark:hidden
                `,
                scrolled
                  ? "h-8"
                  : "h-9",
              )}
            />

            <Image
              src="/brand/billbring-white.svg"
              alt="BillBring"
              width={164}
              height={37}
              priority
              className={cn(
                `
                  hidden w-auto
                  transition-all duration-500
                  dark:block
                `,
                scrolled
                  ? "h-8"
                  : "h-9",
              )}
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="
              hidden items-center gap-0.5
              xl:flex
            "
            aria-label="Primary navigation"
          >
            {/* Products button */}
            <div
              onMouseEnter={openProducts}
              onMouseLeave={
                closeProductsSoon
              }
            >
              <button
                type="button"
                onClick={() => {
                  cancelProductClose();

                  setProductsOpen(
                    (value) => !value,
                  );
                }}
                onFocus={openProducts}
                className={cn(
                  `
                    flex min-h-10
                    items-center gap-1
                    rounded-xl
                    px-3 py-2

                    text-sm font-bold
                    text-ink-900

                    transition
                    hover:bg-slate-100/[.80]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-500

                    dark:text-slate-100
                    dark:hover:bg-white/[.05]
                  `,
                  pathname.startsWith(
                    "/products",
                  ) &&
                    `
                      bg-brand-500/[.08]
                      text-brand-700
                      dark:text-brand-300
                    `,
                )}
                aria-expanded={
                  productsOpen
                }
                aria-haspopup="true"
                aria-controls="products-mega-menu"
              >
                Products

                <ChevronDown
                  className={cn(
                    `
                      h-4 w-4
                      transition-transform
                      duration-300
                    `,
                    productsOpen &&
                      "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </div>

            {nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(
                    `${item.href}/`,
                  ));

              return (
                <Link
                  aria-current={
                    active
                      ? "page"
                      : undefined
                  }
                  key={item.href}
                  href={item.href}
                  className={cn(
                    `
                      relative
                      rounded-xl
                      px-3 py-2

                      text-sm font-bold
                      text-ink-900

                      transition

                      hover:bg-slate-100/[.80]

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-brand-500

                      dark:text-slate-100
                      dark:hover:bg-white/[.05]
                    `,
                    active &&
                      `
                        text-brand-700
                        dark:text-brand-300
                      `,
                  )}
                >
                  {item.label}

                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="
                        absolute
                        inset-x-3
                        -bottom-[3px]
                        h-[2px]
                        rounded-full
                        bg-brand-500
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div
            className="
              hidden items-center gap-2
              xl:flex
            "
          >
            <ThemeToggle />

            <Link
              href="/login"
              className="
                rounded-xl
                border border-slate-200
                px-4 py-2.5

                text-sm font-black
                text-ink-900

                transition
                duration-300

                hover:-translate-y-0.5
                hover:border-brand-500/[.35]
                hover:bg-brand-50

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand-500

                dark:border-white/[.10]
                dark:text-white
                dark:hover:bg-white/[.05]
              "
            >
              Login
            </Link>

            <Link
              href="/partner"
              className="
                group relative
                overflow-hidden
                rounded-xl
                bg-brand-600
                px-4 py-2.5

                text-sm font-black
                text-white

                shadow-[0_16px_38px_-20px_rgba(10,150,106,.8)]

                transition
                duration-500

                hover:-translate-y-0.5
                hover:bg-brand-700

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand-500
                focus-visible:ring-offset-2
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute inset-0
                  -translate-x-[120%]

                  bg-gradient-to-r
                  from-transparent
                  via-white/[.20]
                  to-transparent

                  transition-transform
                  duration-700

                  group-hover:translate-x-[120%]
                "
              />

              <span className="relative">
                Become a Partner
              </span>
            </Link>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

          <div
            className="
              flex items-center gap-2
              xl:hidden
            "
          >
            <ThemeToggle />

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="
                grid h-11 w-11
                place-items-center

                rounded-xl

                border border-slate-200

                bg-white/[.70]

                transition

                hover:border-brand-500/[.30]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand-500

                dark:border-white/[.10]
                dark:bg-white/[.05]
              "
              aria-label={
                open
                  ? "Close menu"
                  : "Open menu"
              }
              aria-controls="mobile-navigation"
              aria-expanded={open}
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {open ? (
                  <motion.span
                    key="close"
                    initial={
                      reduced
                        ? false
                        : {
                            rotate: -35,
                            opacity: 0,
                          }
                    }
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 35,
                      opacity: 0,
                    }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={
                      reduced
                        ? false
                        : {
                            rotate: 35,
                            opacity: 0,
                          }
                    }
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -35,
                      opacity: 0,
                    }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ===================================================
            DESKTOP PRODUCTS MEGA MENU

            Important:
            Static outer wrapper handles position/centering.
            Framer Motion only animates inner menu.
        =================================================== */}

        <AnimatePresence>
          {productsOpen && (
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-full
                z-[70]
                mt-2

                hidden
                justify-center

                px-2

                xl:flex
              "
            >
              <motion.div
                id="products-mega-menu"
                onMouseEnter={
                  openProducts
                }
                onMouseLeave={
                  closeProductsSoon
                }
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        y: 10,
                        scale: 0.992,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={
                  reduced
                    ? undefined
                    : {
                        opacity: 0,
                        y: 8,
                        scale: 0.995,
                      }
                }
                transition={{
                  duration: 0.25,
                  ease: premiumEase,
                }}
                className="
                  pointer-events-auto
                  relative

                  max-h-[calc(100vh-108px)]
                  w-[min(1180px,calc(100vw-3rem))]

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-slate-200/[.90]

                  bg-white/[.97]

                  shadow-[0_38px_100px_-32px_rgba(8,18,37,.34)]

                  backdrop-blur-2xl

                  dark:border-white/[.10]
                  dark:bg-ink-900/[.97]
                "
              >
                {/* ===========================================
                    BACKGROUND GRAPHICS
                =========================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-0
                    overflow-hidden
                    rounded-[28px]
                  "
                >
                  {/* Mint glow */}
                  <div
                    className="
                      absolute
                      -left-32 -top-40
                      h-[380px] w-[380px]
                      rounded-full

                      bg-brand-400/[.09]
                      blur-[90px]

                      dark:bg-brand-500/[.09]
                    "
                  />

                  {/* Blue glow */}
                  <div
                    className="
                      absolute
                      -bottom-44 right-[13%]
                      h-[440px] w-[440px]
                      rounded-full

                      bg-blue-400/[.055]
                      blur-[100px]

                      dark:bg-blue-500/[.07]
                    "
                  />

                  {/* Background grid */}
                  <div
                    className="
                      absolute inset-0
                      opacity-[.28]

                      [background-image:linear-gradient(rgba(15,118,110,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,.045)_1px,transparent_1px)]
                      [background-size:38px_38px]

                      [mask-image:linear-gradient(to_bottom,black,transparent_88%)]

                      dark:opacity-[.12]
                    "
                  />

                  {/* Large BillBring mark */}
                  <div
                    className="
                      absolute
                      -right-14
                      top-1/2

                      h-[410px] w-[410px]

                      -translate-y-1/2
                      rotate-[-10deg]

                      opacity-[.035]

                      dark:opacity-[.055]
                    "
                  >
                    <Image
                      src="/brand/billbring-mark.svg"
                      alt=""
                      fill
                      sizes="410px"
                      className="
                        object-contain
                        dark:hidden
                      "
                    />

                    <Image
                      src="/brand/billbring-mark-white.svg"
                      alt=""
                      fill
                      sizes="410px"
                      className="
                        hidden
                        object-contain
                        dark:block
                      "
                    />
                  </div>

                  {/* Decorative financial rails */}
                  <div
                    className="
                      absolute
                      right-[12%] top-[22%]

                      h-[1px] w-[240px]

                      rotate-[18deg]

                      bg-gradient-to-r
                      from-transparent
                      via-brand-500/[.14]
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      right-[4%] bottom-[18%]

                      h-[1px] w-[310px]

                      -rotate-[12deg]

                      bg-gradient-to-r
                      from-transparent
                      via-blue-500/[.10]
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute
                      right-[23%] top-[16%]

                      h-2 w-2
                      rounded-full

                      bg-brand-500/[.35]

                      shadow-[0_0_0_7px_rgba(18,175,124,.05)]
                    "
                  />

                  <span
                    className="
                      absolute
                      right-[8%] bottom-[27%]

                      h-2 w-2
                      rounded-full

                      bg-blue-500/[.25]

                      shadow-[0_0_0_7px_rgba(59,130,246,.04)]
                    "
                  />
                </div>

                {/* ===========================================
                    MENU CONTENT
                =========================================== */}

                <div className="relative z-10 p-5 xl:p-6">
                  {/* Header */}
                  <div
                    className="
                      mb-5
                      flex items-center
                      justify-between
                      gap-6

                      border-b
                      border-slate-200/[.75]

                      pb-4

                      dark:border-white/[.09]
                    "
                  >
                    <div className="min-w-0">
                      <p
                        className="
                          flex items-center
                          gap-2

                          text-[10px]
                          font-black
                          uppercase
                          tracking-[.17em]

                          text-brand-700

                          dark:text-brand-300
                        "
                      >
                        <Sparkles
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />

                        Financial operating
                        system
                      </p>

                      <p
                        className="
                          mt-1.5

                          text-sm
                          font-bold

                          text-slate-500

                          dark:text-slate-400
                        "
                      >
                        19 capabilities across
                        one connected product
                        experience.
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

                        rounded-xl

                        bg-brand-600

                        px-4 py-2.5

                        text-xs
                        font-black
                        text-white

                        shadow-[0_14px_32px_-18px_rgba(10,150,106,.65)]

                        transition
                        duration-300

                        hover:-translate-y-0.5
                        hover:bg-brand-700
                        hover:shadow-[0_18px_38px_-18px_rgba(10,150,106,.78)]

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-brand-500
                        focus-visible:ring-offset-2
                      "
                    >
                      View all products

                      <ArrowUpRight
                        className="
                          h-3.5 w-3.5

                          transition-transform
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                        aria-hidden="true"
                      />
                    </Link>
                  </div>

                  {/* Product columns */}
                  <div
                    className="
                      grid
                      grid-cols-4
                      gap-x-5
                    "
                  >
                    {productGroups.map(
                      (group) => {
                        const groupProducts =
                          products.filter(
                            (product) =>
                              product.group ===
                              group,
                          );

                        return (
                          <div
                            key={group}
                            className="min-w-0"
                          >
                            <p
                              className="
                                mb-2.5
                                px-2

                                text-[10px]
                                font-black
                                uppercase
                                tracking-[.16em]

                                text-slate-400

                                dark:text-slate-500
                              "
                            >
                              {group}
                            </p>

                            <div className="space-y-1">
                              {groupProducts.map(
                                (product) => {
                                  const Icon =
                                    product.icon;

                                  return (
                                    <Link
                                      key={
                                        product.slug
                                      }
                                      href={`/products/${product.slug}`}
                                      className="
                                        group/item

                                        flex
                                        min-w-0
                                        items-center
                                        gap-3

                                        rounded-2xl

                                        p-2.5

                                        transition
                                        duration-300

                                        hover:-translate-y-0.5
                                        hover:bg-white/[.78]
                                        hover:shadow-[0_12px_30px_-24px_rgba(8,18,37,.42)]

                                        focus-visible:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-brand-500

                                        dark:hover:bg-white/[.055]
                                      "
                                    >
                                      <span
                                        className="
                                          icon-tile

                                          grid
                                          h-9 w-9
                                          shrink-0
                                          place-items-center

                                          transition
                                          duration-300

                                          group-hover/item:rotate-3
                                          group-hover/item:scale-105
                                          group-hover/item:shadow-sm
                                        "
                                      >
                                        <Icon
                                          className={cn(
                                            "h-4 w-4",
                                            product.accent,
                                          )}
                                          aria-hidden="true"
                                        />
                                      </span>

                                      <span className="min-w-0">
                                        <span
                                          className="
                                            block

                                            text-[13px]
                                            font-black
                                            leading-[1.15rem]

                                            text-ink-950

                                            dark:text-white
                                          "
                                        >
                                          {
                                            product.name
                                          }
                                        </span>

                                        <span
                                          className="
                                            mt-0.5
                                            block
                                            line-clamp-1

                                            text-[10px]
                                            leading-4

                                            text-slate-500

                                            dark:text-slate-400
                                          "
                                        >
                                          {
                                            product.category
                                          }
                                        </span>
                                      </span>
                                    </Link>
                                  );
                                },
                              )}
                            </div>
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ===================================================
            MOBILE NAVIGATION
        =================================================== */}

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={
                reduced
                  ? false
                  : {
                      opacity: 0,
                      height: 0,
                      y: -6,
                    }
              }
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={
                reduced
                  ? undefined
                  : {
                      opacity: 0,
                      height: 0,
                      y: -6,
                    }
              }
              transition={{
                duration: 0.3,
                ease: premiumEase,
              }}
              className="
                overflow-hidden
                xl:hidden
              "
            >
              <div
                className="
                  mt-3

                  max-h-[min(76vh,720px)]
                  overflow-y-auto
                  overscroll-contain

                  border-t
                  border-slate-200/[.70]

                  pb-3
                  pt-3

                  dark:border-white/[.10]
                "
              >
                {/* ===========================================
                    COLLAPSIBLE PRODUCTS
                =========================================== */}

                <div
                  className="
                    relative
                    overflow-hidden

                    rounded-[18px]

                    border
                    border-slate-200/[.65]

                    bg-slate-50/[.55]

                    dark:border-white/[.08]
                    dark:bg-white/[.025]
                  "
                >
                  {/* background visual */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute inset-0
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        absolute
                        -right-16 -top-16

                        h-44 w-44

                        rounded-full

                        bg-brand-500/[.09]

                        blur-3xl
                      "
                    />

                    <div
                      className="
                        absolute
                        -right-6 top-1/2

                        h-36 w-36

                        -translate-y-1/2

                        opacity-[.035]

                        dark:opacity-[.06]
                      "
                    >
                      <Image
                        src="/brand/billbring-mark.svg"
                        alt=""
                        fill
                        sizes="144px"
                        className="
                          object-contain
                          dark:hidden
                        "
                      />

                      <Image
                        src="/brand/billbring-mark-white.svg"
                        alt=""
                        fill
                        sizes="144px"
                        className="
                          hidden
                          object-contain
                          dark:block
                        "
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setMobileProductsOpen(
                        (value) => !value,
                      )
                    }
                    className="
                      relative z-10

                      flex
                      min-h-14
                      w-full
                      items-center
                      justify-between
                      gap-4

                      px-4 py-3

                      text-left

                      transition

                      hover:bg-white/[.55]

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-inset
                      focus-visible:ring-brand-500

                      dark:hover:bg-white/[.04]
                    "
                    aria-expanded={
                      mobileProductsOpen
                    }
                    aria-controls="mobile-products-panel"
                  >
                    <span>
                      <span
                        className="
                          block

                          text-[10px]
                          font-black
                          uppercase
                          tracking-[.17em]

                          text-brand-700

                          dark:text-brand-300
                        "
                      >
                        Products
                      </span>

                      <span
                        className="
                          mt-0.5
                          block

                          text-xs
                          font-semibold

                          text-slate-500

                          dark:text-slate-400
                        "
                      >
                        19 financial capabilities
                      </span>
                    </span>

                    <span
                      className="
                        grid
                        h-9 w-9
                        shrink-0
                        place-items-center

                        rounded-xl

                        border
                        border-slate-200/[.80]

                        bg-white/[.80]

                        dark:border-white/[.08]
                        dark:bg-white/[.04]
                      "
                    >
                      <ChevronDown
                        className={cn(
                          `
                            h-4 w-4

                            transition-transform
                            duration-300
                          `,
                          mobileProductsOpen &&
                            "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  <AnimatePresence
                    initial={false}
                  >
                    {mobileProductsOpen && (
                      <motion.div
                        id="mobile-products-panel"
                        initial={
                          reduced
                            ? false
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={
                          reduced
                            ? undefined
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        transition={{
                          duration: 0.32,
                          ease: premiumEase,
                        }}
                        className="relative z-10 overflow-hidden"
                      >
                        <div
                          className="
                            border-t
                            border-slate-200/[.65]

                            px-2
                            pb-3
                            pt-2

                            dark:border-white/[.08]
                          "
                        >
                          <div
                            className="
                              grid
                              gap-1

                              sm:grid-cols-2
                              lg:grid-cols-3
                            "
                          >
                            {products.map(
                              (product) => {
                                const Icon =
                                  product.icon;

                                return (
                                  <Link
                                    key={
                                      product.slug
                                    }
                                    href={`/products/${product.slug}`}
                                    className="
                                      group/mobile-product

                                      flex
                                      min-h-[54px]
                                      items-center
                                      gap-3

                                      rounded-xl

                                      px-3 py-2.5

                                      transition
                                      duration-200

                                      hover:bg-white

                                      focus-visible:outline-none
                                      focus-visible:ring-2
                                      focus-visible:ring-brand-500

                                      dark:hover:bg-white/[.055]
                                    "
                                  >
                                    <span
                                      className="
                                        icon-tile

                                        grid
                                        h-9 w-9
                                        shrink-0
                                        place-items-center
                                      "
                                    >
                                      <Icon
                                        className={cn(
                                          "h-4 w-4",
                                          product.accent,
                                        )}
                                        aria-hidden="true"
                                      />
                                    </span>

                                    <span className="min-w-0">
                                      <span
                                        className="
                                          block

                                          text-sm
                                          font-bold
                                          leading-5

                                          text-ink-950

                                          dark:text-white
                                        "
                                      >
                                        {
                                          product.name
                                        }
                                      </span>

                                      <span
                                        className="
                                          block
                                          truncate

                                          text-[10px]
                                          font-medium
                                          leading-4

                                          text-slate-400
                                        "
                                      >
                                        {
                                          product.category
                                        }
                                      </span>
                                    </span>
                                  </Link>
                                );
                              },
                            )}
                          </div>

                          <Link
                            href="/products"
                            className="
                              mt-2

                              flex min-h-11
                              items-center
                              justify-center
                              gap-2

                              rounded-xl

                              bg-brand-600

                              px-4 py-2.5

                              text-xs
                              font-black
                              text-white

                              transition
                              duration-300

                              hover:bg-brand-700

                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-brand-500
                              focus-visible:ring-offset-2
                            "
                          >
                            Explore all 19
                            products

                            <ArrowUpRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ===========================================
                    MOBILE MAIN LINKS
                =========================================== */}

                <div
                  className="
                    my-3
                    h-px
                    bg-slate-200

                    dark:bg-white/[.10]
                  "
                />

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-1

                    sm:grid-cols-3
                  "
                >
                  {nav.map((item) => {
                    const active =
                      pathname ===
                        item.href ||
                      pathname.startsWith(
                        `${item.href}/`,
                      );

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          `
                            rounded-xl
                            px-3 py-3

                            text-sm
                            font-bold

                            transition

                            hover:bg-slate-50

                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-brand-500

                            dark:hover:bg-white/[.05]
                          `,
                          active &&
                            `
                              bg-brand-500/[.07]
                              text-brand-700

                              dark:text-brand-300
                            `,
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <div
                  className="
                    mt-4
                    grid grid-cols-2
                    gap-2
                  "
                >
                  <Link
                    href="/login"
                    className="
                      rounded-xl
                      border border-slate-200

                      px-4 py-3

                      text-center
                      text-sm
                      font-black

                      dark:border-white/[.10]
                    "
                  >
                    Login
                  </Link>

                  <Link
                    href="/partner"
                    className="
                      rounded-xl
                      bg-brand-600

                      px-4 py-3

                      text-center
                      text-sm
                      font-black
                      text-white
                    "
                  >
                    Become a Partner
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}