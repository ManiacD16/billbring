"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-11 w-11" aria-hidden />;

  const dark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="group relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-slate-200/[.80] bg-white/[.70] text-ink-900 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-brand-500/[.35] dark:border-white/[.10] dark:bg-white/[.05] dark:text-white"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="absolute inset-0 bg-brand-500/[.08] opacity-[.00] transition-opacity group-hover:opacity-[1]" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={dark ? "sun" : "moon"} initial={{ opacity: 0, rotate: -40, scale: .7 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 40, scale: .7 }} transition={{ duration: .24 }} className="relative">
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
