"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { premiumEase } from "@/lib/motion";

export function SiteLoader() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    try {
      if (sessionStorage.getItem("billbring-loader-seen")) return;
      setVisible(true);
    } catch { setVisible(true); }
    const timer = window.setTimeout(() => {
      try { sessionStorage.setItem("billbring-loader-seen", "1"); } catch {}
      setVisible(false);
    }, 640);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#06101e]" exit={{ opacity: 0 }} transition={{ duration: .32, ease: premiumEase }} aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(18,175,124,.18),transparent_30%)]" />
          <div className="grid-fade absolute inset-0 opacity-[.20]" />
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .38, ease: premiumEase }} className="relative flex flex-col items-center">
            <Image src="/brand/billbring-white.svg" alt="" width={190} height={44} priority className="h-11 w-auto" />
            <div className="mt-5 h-px w-40 overflow-hidden bg-white/[.10]"><motion.div className="h-full bg-gradient-to-r from-brand-400 to-cyan-300" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .52, ease: premiumEase }} style={{ transformOrigin: "left" }} /></div>
            <p className="mt-3 text-[9px] font-extrabold uppercase tracking-[.22em] text-white/[.50]">Financial infrastructure, connected</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
