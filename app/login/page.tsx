import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Login",
  description: "Access your BillBring business workspace.",
  robots: { index: false, follow: false },
};

const accessPoints = ["Clear access state", "Security-minded authentication", "Responsive operator experience"];

export default function LoginPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_22%,rgba(18,175,124,.13),transparent_30%),radial-gradient(circle_at_18%_20%,rgba(26,46,89,.08),transparent_28%)]" />
      <div className="grid-fade absolute inset-0 -z-10" />
      <div className="section-shell">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[38px] border border-slate-200/[.80] bg-white shadow-lift dark:border-white/[.10] dark:bg-ink-900 lg:grid-cols-[.85fr_1.15fr]" data-reveal="scale">
          <div className="noise relative hidden overflow-hidden bg-ink-950 p-10 text-white lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(18,175,124,.2),transparent_34%)]" />
            <Image src="/brand/billbring-white.svg" alt="BillBring" width={154} height={35} className="relative h-9 w-auto" />
            <div className="relative mt-24">
              <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em] text-brand-300"><Sparkles className="h-3.5 w-3.5" /> Business workspace</p>
              <h2 className="mt-5 text-4xl font-black leading-[.98] tracking-[-.055em]">One clear doorway into your financial operations.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">A focused access experience keeps the path into BillBring simple, familiar and deliberate.</p>
            </div>
            <div className="relative mt-10 space-y-3">{accessPoints.map((item) => <div key={item} className="flex items-center gap-3 text-xs font-bold text-slate-300"><CheckCircle2 className="h-4 w-4 text-brand-400" /> {item}</div>)}</div>
            <ShieldCheck className="absolute -bottom-12 -right-12 h-56 w-56 stroke-[.5] text-brand-400/[.07]" aria-hidden="true" />
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <Image src="/brand/billbring-main.svg" alt="BillBring" width={150} height={34} className="h-9 w-auto dark:hidden lg:hidden" />
            <Image src="/brand/billbring-white.svg" alt="BillBring" width={150} height={34} className="hidden h-9 w-auto dark:block lg:hidden" />
            <div className="mt-8 flex items-center justify-between lg:mt-0">
              <div><p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Secure access</p><h1 className="mt-3 text-4xl font-black tracking-[-.05em]">Welcome back.</h1></div>
              <span className="icon-tile h-11 w-11 text-brand-600 dark:text-brand-300"><LockKeyhole className="h-5 w-5" /></span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">Sign in to continue to your BillBring operating workspace.</p>
            <form className="mt-8 space-y-5" aria-label="BillBring login">
              <label className="block"><span className="mb-2.5 block text-xs font-black">Work email</span><input name="email" type="email" autoComplete="email" required className="h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50/[.60] px-4 text-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/[.08] dark:border-white/[.10] dark:bg-white/[.035] dark:focus:bg-white/[.05]" placeholder="name@company.com" /></label>
              <label className="block"><span className="mb-2.5 block text-xs font-black">Password</span><input name="password" type="password" autoComplete="current-password" required className="h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50/[.60] px-4 text-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/[.08] dark:border-white/[.10] dark:bg-white/[.035] dark:focus:bg-white/[.05]" placeholder="••••••••" /></label>
              <div className="flex items-center justify-between gap-4 text-xs"><label className="flex items-center gap-2 font-semibold text-slate-500"><input type="checkbox" className="h-4 w-4 accent-brand-600" /> Remember me</label><Link href="/support" className="font-black text-brand-600 hover:underline dark:text-brand-300">Need help?</Link></div>
              <button type="button" className="group relative h-[52px] w-full overflow-hidden rounded-2xl bg-brand-600 text-sm font-black text-white shadow-glow transition duration-500 hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"><span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/[.20] to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" /><span className="relative inline-flex items-center gap-2">Login to BillBring <ArrowUpRight className="h-4 w-4" /></span></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
