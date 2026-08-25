import {
  ArrowDownToLine,
  BadgeIndianRupee,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CreditCard,
  Fingerprint,
  Globe2,
  Landmark,
  Plane,
  QrCode,
  ReceiptText,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Umbrella,
  WalletCards,
  Zap,
} from "lucide-react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/cn";

type VisualKind = "checkout" | "payout" | "remit" | "bill" | "biometric" | "transfer" | "pos" | "wallet" | "travel" | "insure" | "credit";

type VisualSpec = {
  kind: VisualKind;
  secondary: typeof CreditCard;
  label: string;
  tilt: string;
};

const visualBySlug: Record<string, VisualSpec> = {
  paybring: { kind: "checkout", secondary: QrCode, label: "Tap · QR · Card", tilt: "rotate-[5deg]" },
  "payment-gateway-collection": { kind: "checkout", secondary: CreditCard, label: "Collect online", tilt: "-rotate-[4deg]" },
  bringpayout: { kind: "payout", secondary: Banknote, label: "Payout rail", tilt: "rotate-[4deg]" },
  "vendor-merchant-payout": { kind: "payout", secondary: Building2, label: "Vendor network", tilt: "-rotate-[5deg]" },
  bringremit: { kind: "remit", secondary: Globe2, label: "Cross-border flow", tilt: "rotate-[4deg]" },
  remittance: { kind: "remit", secondary: Route, label: "Transfer route", tilt: "-rotate-[3deg]" },
  billbring: { kind: "bill", secondary: ReceiptText, label: "Bills connected", tilt: "rotate-[5deg]" },
  "bbps-bill-payment-recharge": { kind: "bill", secondary: BadgeIndianRupee, label: "BBPS · Recharge", tilt: "-rotate-[4deg]" },
  bringaeps: { kind: "biometric", secondary: Fingerprint, label: "Assisted banking", tilt: "rotate-[4deg]" },
  aeps: { kind: "biometric", secondary: Fingerprint, label: "Biometric flow", tilt: "-rotate-[4deg]" },
  bringdmt: { kind: "transfer", secondary: Landmark, label: "Domestic rail", tilt: "rotate-[4deg]" },
  "domestic-money-transfer": { kind: "transfer", secondary: Banknote, label: "Beneficiary route", tilt: "-rotate-[5deg]" },
  bringpos: { kind: "pos", secondary: CreditCard, label: "Counter ready", tilt: "rotate-[4deg]" },
  "pos-mpos": { kind: "pos", secondary: Smartphone, label: "Tap · Dip · Swipe", tilt: "-rotate-[4deg]" },
  bringwallet: { kind: "wallet", secondary: WalletCards, label: "Wallet layer", tilt: "rotate-[5deg]" },
  wallet: { kind: "wallet", secondary: BadgeIndianRupee, label: "Balance · Activity", tilt: "-rotate-[4deg]" },
  bringtravel: { kind: "travel", secondary: Plane, label: "Search · Book", tilt: "rotate-[4deg]" },
  bringinsure: { kind: "insure", secondary: Umbrella, label: "Protected journeys", tilt: "-rotate-[4deg]" },
  bringcredit: { kind: "credit", secondary: BriefcaseBusiness, label: "Credit discovery", tilt: "rotate-[5deg]" },
};

function Artwork({ kind, product, secondary: Secondary }: { kind: VisualKind; product: Product; secondary: typeof CreditCard }) {
  const Icon = product.icon;
  const iconClass = cn("h-7 w-7", product.accent);

  if (kind === "remit") return (
    <div className="absolute inset-0">
      <div className="absolute right-[10%] top-[14%] grid h-28 w-28 place-items-center rounded-full border border-slate-200/[.80] bg-white/[.70] shadow-card dark:border-white/[.10] dark:bg-white/[.04]">
        <Globe2 className={cn("h-14 w-14 stroke-[1.15]", product.accent)} />
        <span className="absolute inset-[-14px] rounded-full border border-dashed border-brand-500/[.20] transition-transform duration-[1400ms] group-hover:rotate-45" />
      </div>
      <div className="absolute right-[7%] top-[48%] h-px w-[40%] origin-right -rotate-12 bg-gradient-to-l from-brand-500/[.60] to-transparent" />
      <div className="absolute right-[33%] top-[42%] grid h-11 w-11 place-items-center rounded-2xl border border-white/[.70] bg-white/[.80] shadow-card dark:border-white/[.10] dark:bg-ink-800/[.80]"><Secondary className={cn("h-5 w-5", product.accent)} /></div>
    </div>
  );

  if (kind === "biometric") return (
    <div className="absolute right-[7%] top-[10%] h-[64%] w-[40%] rounded-[30px] border border-white/[.70] bg-white/[.55] p-4 shadow-card backdrop-blur-xl dark:border-white/[.10] dark:bg-white/[.04]">
      <div className="mx-auto mt-3 grid h-24 w-20 place-items-center rounded-[26px] border border-brand-500/[.15] bg-brand-500/[.055]"><Fingerprint className={cn("h-12 w-12 stroke-[1.15]", product.accent)} /></div>
      <div className="animate-scan [--scan-distance:72px] absolute left-4 right-4 top-[30%] h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
      <div className="mt-8 space-y-2"><div className="h-1.5 rounded-full bg-slate-200/[.80] dark:bg-white/[.10]"/><div className="h-1.5 w-2/3 rounded-full bg-brand-500/[.30]"/></div>
    </div>
  );

  if (kind === "travel") return (
    <div className="absolute inset-0">
      <div className="absolute right-[7%] top-[18%] h-32 w-32 rounded-full border border-dashed border-sky-400/[.30] transition-transform duration-[1600ms] group-hover:rotate-45" />
      <Plane className={cn("absolute right-[18%] top-[25%] h-14 w-14 -rotate-12 transition duration-700 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:-rotate-6", product.accent)} />
      <div className="absolute bottom-[18%] right-[4%] w-[43%] rounded-[22px] border border-white/[.70] bg-white/[.65] p-3 shadow-card backdrop-blur dark:border-white/[.10] dark:bg-white/[.04]"><div className="flex items-center justify-between"><span className="text-[8px] font-black uppercase tracking-[.12em] text-slate-400">Boarding</span><Route className="h-4 w-4 text-brand-500"/></div><div className="mt-3 h-1.5 w-3/4 rounded-full bg-slate-200 dark:bg-white/[.10]"/><div className="mt-2 h-1.5 w-1/2 rounded-full bg-brand-500/[.30]"/></div>
    </div>
  );

  if (kind === "insure") return (
    <div className="absolute inset-0">
      <div className="absolute right-[10%] top-[14%] grid h-28 w-28 place-items-center rounded-[30px] border border-white/[.70] bg-white/[.60] shadow-card backdrop-blur dark:border-white/[.10] dark:bg-white/[.04]"><Umbrella className={cn("h-14 w-14 stroke-[1.15]", product.accent)} /></div>
      <div className="absolute bottom-[14%] right-[29%] grid h-14 w-14 place-items-center rounded-[20px] border border-white/[.70] bg-white/[.80] shadow-card dark:border-white/[.10] dark:bg-ink-800/[.85]"><ShieldCheck className="h-6 w-6 text-brand-500"/></div>
      <span className="absolute bottom-[28%] right-[14%] h-px w-[24%] -rotate-12 bg-gradient-to-r from-brand-500/[.55] to-transparent" />
    </div>
  );

  if (kind === "credit") return (
    <div className="absolute inset-0">
      <div className="absolute right-[8%] top-[14%] grid h-28 w-28 place-items-center rounded-full border border-amber-400/[.20] bg-amber-400/[.07] shadow-card"><BadgeIndianRupee className={cn("h-14 w-14 stroke-[1.15]", product.accent)} /></div>
      <div className="absolute bottom-[13%] right-[8%] w-[42%] rounded-[22px] border border-white/[.70] bg-white/[.70] p-3 shadow-card dark:border-white/[.10] dark:bg-white/[.04]"><div className="flex items-end gap-2">{[34,52,68,86].map((h)=><span key={h} className="w-3 rounded-t bg-brand-500/[.30]" style={{height:h/2}} />)}</div><div className="mt-2 flex items-center gap-1 text-[8px] font-black text-brand-600 dark:text-brand-300">Eligibility path <ArrowDownToLine className="h-3 w-3 -rotate-90"/></div></div>
    </div>
  );

  if (kind === "wallet") return (
    <div className="absolute inset-0">
      <div className="absolute right-[6%] top-[15%] grid h-28 w-40 place-items-center rounded-[30px] border border-white/[.70] bg-white/[.60] shadow-card backdrop-blur dark:border-white/[.10] dark:bg-white/[.04]"><WalletCards className={cn("h-14 w-14 stroke-[1.15]", product.accent)} /></div>
      {[0,1,2].map((i)=><span key={i} className="absolute grid h-9 w-9 place-items-center rounded-full border border-white/[.70] bg-white/[.85] text-[10px] font-black text-brand-600 shadow-sm dark:border-white/[.10] dark:bg-ink-800 dark:text-brand-300" style={{right:`${12+i*9}%`,bottom:`${14+i*4}%`}}>₹</span>)}
    </div>
  );

  if (kind === "pos") return (
    <div className="absolute inset-0">
      <div className="absolute right-[9%] top-[11%] h-[62%] w-[33%] rounded-[28px] border-[2px] border-ink-950 bg-white p-3 shadow-card dark:bg-ink-800"><div className="mx-auto h-1 w-8 rounded-full bg-ink-950/[.20] dark:bg-white/[.20]"/><div className="mt-5 grid h-20 place-items-center rounded-2xl bg-brand-500/[.08]"><Smartphone className={cn("h-9 w-9", product.accent)} /></div><div className="mt-4 grid grid-cols-3 gap-1">{[1,2,3,4,5,6].map(i=><span key={i} className="h-2 rounded bg-slate-100 dark:bg-white/[.10]"/>)}</div></div>
      <div className="absolute bottom-[13%] right-[31%] grid h-14 w-20 place-items-center rounded-[18px] border border-white/[.70] bg-white/[.80] shadow-card dark:border-white/[.10] dark:bg-ink-800/[.80]"><CreditCard className={cn("h-6 w-6", product.accent)} /></div>
    </div>
  );

  if (kind === "bill") return (
    <div className="absolute inset-0">
      <div className="absolute right-[8%] top-[12%] h-[62%] w-[36%] rounded-[26px] border border-white/[.70] bg-white/[.65] p-4 shadow-card backdrop-blur dark:border-white/[.10] dark:bg-white/[.04]"><div className="flex items-center justify-between"><ReceiptText className={cn("h-6 w-6", product.accent)}/><Zap className="h-4 w-4 text-amber-500"/></div><div className="mt-6 space-y-2.5">{[82,66,74,48].map(v=><div key={v} className="h-1.5 rounded-full bg-slate-200/[.80] dark:bg-white/[.10]" style={{width:`${v}%`}} />)}</div><div className="mt-5 h-8 rounded-xl bg-brand-500/[.10]"/></div>
      <div className="absolute bottom-[11%] right-[31%] grid h-12 w-12 place-items-center rounded-full border border-white/[.70] bg-white/[.85] shadow-card dark:border-white/[.10] dark:bg-ink-800"><Secondary className={cn("h-5 w-5", product.accent)} /></div>
    </div>
  );

  if (kind === "transfer" || kind === "payout") return (
    <div className="absolute inset-0">
      <div className="absolute right-[8%] top-[15%] grid h-24 w-24 place-items-center rounded-[26px] border border-white/[.70] bg-white/[.65] shadow-card backdrop-blur dark:border-white/[.10] dark:bg-white/[.04]"><Icon className={iconClass}/></div>
      <div className="absolute right-[8%] top-[47%] h-px w-[38%] bg-gradient-to-l from-brand-500/[.60] to-transparent" />
      {[0,1,2].map(i=><div key={i} className="absolute grid h-10 w-10 place-items-center rounded-[14px] border border-white/[.70] bg-white/[.80] shadow-sm dark:border-white/[.10] dark:bg-ink-800/[.80]" style={{right:`${32+i*12}%`,top:`${48+i*7}%`}}><span className="h-2 w-2 rounded-full bg-brand-500" /></div>)}
      <div className="absolute bottom-[14%] right-[8%] flex items-center gap-2 rounded-full border border-white/[.70] bg-white/[.80] px-3 py-2 text-[8px] font-black uppercase tracking-[.1em] text-slate-400 shadow-sm dark:border-white/[.10] dark:bg-ink-800/[.80]"><Secondary className={cn("h-3.5 w-3.5", product.accent)}/>{kind === "payout" ? "Payout sent" : "Transfer ready"}</div>
    </div>
  );

  return (
    <div className="absolute inset-0">
      <div className="absolute right-[7%] top-[12%] h-[63%] w-[39%] rounded-[30px] border border-white/[.70] bg-white/[.55] p-4 shadow-card backdrop-blur-xl dark:border-white/[.10] dark:bg-white/[.04]">
        <div className="flex items-center justify-between"><span className="h-1.5 w-10 rounded-full bg-slate-200 dark:bg-white/[.10]"/><span className="h-2 w-2 rounded-full bg-brand-500"/></div>
        <div className="mt-7 grid h-16 place-items-center rounded-[20px] bg-brand-500/[.07]"><Icon className={iconClass}/></div>
        <div className="mt-5 space-y-2"><div className="h-1.5 w-4/5 rounded bg-slate-200 dark:bg-white/[.10]"/><div className="h-1.5 w-3/5 rounded bg-slate-100 dark:bg-white/[.07]"/></div>
      </div>
      <div className="absolute bottom-[12%] right-[29%] grid h-14 w-14 place-items-center rounded-[18px] border border-white/[.70] bg-white/[.80] shadow-card dark:border-white/[.10] dark:bg-ink-800/[.80]"><Secondary className={cn("h-6 w-6", product.accent)} /></div>
    </div>
  );
}

export function ProductVisual({ product, large = false }: { product: Product; large?: boolean }) {
  const spec = visualBySlug[product.slug] ?? { kind: "checkout" as const, secondary: Sparkles, label: "Connected flow", tilt: "rotate-[4deg]" };
  const Secondary = spec.secondary;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={cn("absolute -right-20 -top-20 rounded-full bg-gradient-to-br blur-3xl transition-transform duration-700 group-hover:scale-110", product.glow, large ? "h-72 w-72" : "h-60 w-60")} />
      <div className={cn("absolute right-[3%] top-[8%] h-[68%] w-[48%] rounded-[40px] border border-slate-200/[.50] opacity-[.55] transition-transform duration-700 group-hover:rotate-0 dark:border-white/[.06]", spec.tilt)} />
      <Artwork kind={spec.kind} product={product} secondary={Secondary} />
      <div className="absolute bottom-[7%] right-[5%] flex items-center gap-2 rounded-full border border-white/[.70] bg-white/[.72] px-3 py-2 shadow-sm backdrop-blur dark:border-white/[.10] dark:bg-ink-800/[.72]">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_0_4px_rgba(18,175,124,.08)]" />
        <span className="text-[8px] font-black uppercase tracking-[.11em] text-slate-400">{spec.label}</span>
      </div>
      <Sparkles className="absolute right-[4%] top-[7%] h-4 w-4 text-brand-400/[.35] transition duration-700 group-hover:rotate-12 group-hover:scale-110" />
    </div>
  );
}
