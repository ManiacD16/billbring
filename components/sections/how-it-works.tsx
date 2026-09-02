"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CircleUserRound, Rocket, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  { icon: CircleUserRound, title: "Create account", copy: "Start with a simple business or partner onboarding journey." },
  { icon: BadgeCheck, title: "Complete verification", copy: "Submit the information required for your selected services." },
  { icon: SlidersHorizontal, title: "Activate services", copy: "Choose the financial products your business wants to offer." },
  { icon: Rocket, title: "Start transacting", copy: "Go live and operate through one consistent billbring experience." },
];

export function HowItWorks() {
  return (
    <section className="section-transition relative overflow-hidden py-28 sm:py-36 lg:py-40">
      <div className="absolute inset-x-0 top-[43%] -z-10 h-px bg-gradient-to-r from-transparent via-brand-500/[.10] to-transparent" />
      <div className="section-shell">
        <SectionHeading eyebrow="How it works" title={<>From sign-up to live in <span className="text-brand-500">four clear steps.</span></>} copy="Each step is designed to remove uncertainty and keep the next action obvious." align="center" />
        <div className="relative mt-16 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-px overflow-hidden bg-slate-200 dark:bg-white/[.10] lg:block"><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.25, ease: [0.22,1,0.36,1] }} className="h-full origin-left bg-gradient-to-r from-brand-500/[.30] via-brand-500 to-brand-500/[.30]" /></div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article key={step.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08, duration: .72, ease: [0.22,1,0.36,1] }} className="group relative">
                <div className="relative z-10 mx-auto mb-7 grid h-14 w-14 place-items-center rounded-[18px] bg-brand-600 text-white shadow-glow transition duration-500 group-hover:-translate-y-1 group-hover:rotate-3"><Icon className="h-5 w-5" /></div>
                <div className="premium-surface relative min-h-[250px] overflow-hidden rounded-[27px] p-6">
                  <span className="absolute -right-4 -top-8 text-[96px] font-black tracking-[-.08em] text-slate-100 dark:text-white/[.025]">0{index + 1}</span>
                  <div className="relative"><p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Step {index + 1}</p><h3 className="mt-3 text-[21px] font-black tracking-[-.03em]">{step.title}</h3><p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">{step.copy}</p></div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
