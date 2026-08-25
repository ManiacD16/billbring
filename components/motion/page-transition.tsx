"use client";

import type { PropsWithChildren } from "react";

/*
 * Keep the initial React tree completely deterministic.
 *
 * Page entrance animation is handled by CSS instead of
 * Framer Motion so SSR and the first client render always
 * produce identical attributes.
 */
export function PageTransition({
  children,
}: PropsWithChildren) {
  return (
    <div className="page-transition-shell">
      {children}
    </div>
  );
}