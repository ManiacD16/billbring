import { GsapReveal } from "@/components/motion/gsap-reveal";
import { PageTransition } from "@/components/motion/page-transition";

export default function Template({ children }: { children: React.ReactNode }) {
  return <GsapReveal><PageTransition>{children}</PageTransition></GsapReveal>;
}
