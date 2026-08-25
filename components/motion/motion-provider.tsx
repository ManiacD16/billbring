"use client";

import { MotionConfig } from "framer-motion";
import type { PropsWithChildren } from "react";
import { premiumEase } from "@/lib/motion";

export function MotionProvider({ children }: PropsWithChildren) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.42, ease: premiumEase }}>
      {children}
    </MotionConfig>
  );
}
