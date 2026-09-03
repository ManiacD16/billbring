import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, LockKeyhole } from "lucide-react";

export const metadata: Metadata = {
  title: "Login",
  description: "Access your billbring business workspace.",
  robots: { index: false, follow: false },
};

const accessPoints = ["Clear access state", "Security-minded authentication", "Responsive operator experience"];

export default function LoginPage() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-[#f7fbf9] py-14 dark:border-white/[.08] dark:bg-[#05090d] sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(18,175,124,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(18,175,124,.05)_1px,transparent_1px)] [background-size:52px_52px] dark:opacity-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-500/[.13] blur-[120px]" />
      <div className="section-shell relative">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_34px_90px_-54px_rgba(8,18,37,.52)] dark:border-white/[.09] dark:bg-[#0b1118] lg:grid-cols-[1.08fr_.92fr]" data-reveal="scale">
          <div className="relative min-h-[420px] overflow-hidden bg-black lg:min-h-[650px]">
            <Image src="/images/home/2.png" alt="billbring dashboard and business workspace" fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06101a]/95 via-[#06101a]/35 to-transparent" />
            <div className="absolute right-5 top-5 hidden w-[42%] overflow-hidden rounded-[18px] border border-white/15 bg-black/35 p-2 shadow-2xl backdrop-blur-md sm:block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[12px]"><Image src="/images/home/5.png" alt="billbring dashboard preview" fill sizes="240px" className="object-contain" /></div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9 lg:p-10">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-300">Business workspace</p>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2.4rem,4vw,4.3rem)] font-black leading-[.98] tracking-[-.055em]">One clear doorway into your financial operations.</h2>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">{accessPoints.map((item) => <span key={item} className="inline-flex items-center gap-2 text-xs font-bold text-slate-300"><CheckCircle2 className="h-4 w-4 text-brand-400" /> {item}</span>)}</div>
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <Image src="/brand/billbring-main.svg" alt="billbring" width={150} height={34} className="h-9 w-auto dark:hidden" />
              <Image src="/brand/billbring-white.svg" alt="billbring" width={150} height={34} className="hidden h-9 w-auto dark:block" />
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/[.09] text-brand-700 dark:text-brand-300"><LockKeyhole className="h-5 w-5" /></span>
            </div>

            <div className="mt-12">
              <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Secure access</p>
              <h1 className="mt-3 text-4xl font-black tracking-[-.05em] text-ink-950 dark:text-white">Welcome back.</h1>
              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">Sign in to continue to your billbring operating workspace.</p>
            </div>

            <form className="mt-8 space-y-5" aria-label="billbring login">
              <label className="block"><span className="mb-2.5 block text-xs font-black">Work email</span><input name="email" type="email" autoComplete="email" required className="h-[52px] w-full rounded-xl border border-slate-200 bg-[#f7fbf9] px-4 text-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/[.08] dark:border-white/[.10] dark:bg-white/[.035] dark:focus:bg-white/[.05]" placeholder="name@company.com" /></label>
              <label className="block"><span className="mb-2.5 block text-xs font-black">Password</span><input name="password" type="password" autoComplete="current-password" required className="h-[52px] w-full rounded-xl border border-slate-200 bg-[#f7fbf9] px-4 text-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/[.08] dark:border-white/[.10] dark:bg-white/[.035] dark:focus:bg-white/[.05]" placeholder="••••••••" /></label>
              <div className="flex items-center justify-between gap-4 text-xs"><label className="flex items-center gap-2 font-semibold text-slate-500"><input type="checkbox" className="h-4 w-4 accent-brand-600" /> Remember me</label><Link href="/support" className="font-black text-brand-600 hover:underline dark:text-brand-300">Need help?</Link></div>
              <button type="button" className="group relative h-[52px] w-full overflow-hidden rounded-xl bg-brand-600 text-sm font-black text-white shadow-glow transition duration-500 hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"><span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/[.20] to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" /><span className="relative inline-flex items-center gap-2">Login to billbring <ArrowUpRight className="h-4 w-4" /></span></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
