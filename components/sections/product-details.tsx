import type { ComponentType } from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Banknote,
  Boxes,
  Building2,
  Check,
  CircleDollarSign,
  CreditCard,
  FileText,
  Fingerprint,
  Gauge,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Plane,
  QrCode,
  Receipt,
  Route,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  TabletSmartphone,
  UserRoundCheck,
  UsersRound,
  WalletCards,
  Workflow,
} from "lucide-react";
import type { Product } from "@/data/products";
import type {
  ProductContentItem,
  ProductDetail,
  ProductMetric,
  ProductStep,
} from "@/data/product-details";

const benefitIcons = [ShieldCheck, Gauge, Workflow, Network] as const;
const capabilityIcons = [Layers3, Route, Activity, Boxes] as const;

type GraphicNode = {
  label: string;
  hint: string;
  icon: ComponentType<{ className?: string }>;
};

type ProductGraphicConfig = {
  eyebrow: string;
  title: string;
  helper: string;
  centerLabel: string;
  centerTitle: string;
  centerChips: string[];
  footer: string;
  sources: GraphicNode[];
  destinations: GraphicNode[];
};

const productGraphicMap: Record<string, ProductGraphicConfig> = {
  paybring: {
    eyebrow: "Collection flow",
    title: "From customer intent to payment visibility.",
    helper: "PayBring helps businesses collect payments through a simple, connected checkout journey.",
    centerLabel: "PayBring",
    centerTitle: "Payment collection hub",
    centerChips: ["Checkout", "Track", "Reconcile"],
    footer: "Connect storefronts, customers and settlement visibility in one payment flow.",
    sources: [
      { label: "Storefront", hint: "Collect online", icon: Store },
      { label: "Customer", hint: "Makes payment", icon: UsersRound },
      { label: "Order", hint: "Creates request", icon: ShoppingCart },
    ],
    destinations: [
      { label: "Checkout", hint: "Pay securely", icon: CreditCard },
      { label: "Status", hint: "Track live", icon: BadgeCheck },
      { label: "Settlement", hint: "View outcome", icon: Banknote },
    ],
  },
  bringupi: {
    eyebrow: "UPI collection flow",
    title: "Make UPI payments easy to start and easy to confirm.",
    helper: "BringUPI turns everyday UPI behaviour into a clean business-ready collection experience.",
    centerLabel: "BringUPI",
    centerTitle: "UPI payment layer",
    centerChips: ["Collect", "Confirm", "Track"],
    footer: "Help customers pay quickly with a familiar UPI-first journey.",
    sources: [
      { label: "Customer", hint: "Ready to pay", icon: UsersRound },
      { label: "UPI App", hint: "Payment app", icon: Smartphone },
      { label: "Merchant", hint: "Accepts UPI", icon: Building2 },
    ],
    destinations: [
      { label: "Collect", hint: "Request created", icon: FileText },
      { label: "Approve", hint: "Customer authorises", icon: BadgeCheck },
      { label: "Success", hint: "Payment confirmed", icon: Check },
    ],
  },
  bringqr: {
    eyebrow: "QR payment flow",
    title: "Turn a simple scan into a complete payment journey.",
    helper: "BringQR is built for easy in-store and assisted payments through a quick scan-and-pay experience.",
    centerLabel: "BringQR",
    centerTitle: "QR collection point",
    centerChips: ["Scan", "Pay", "Confirm"],
    footer: "Perfect for counter payments, small businesses and assisted digital collections.",
    sources: [
      { label: "Shop", hint: "Displays QR", icon: Store },
      { label: "QR Code", hint: "Ready to scan", icon: QrCode },
      { label: "Customer", hint: "Scans to pay", icon: Smartphone },
    ],
    destinations: [
      { label: "UPI Pay", hint: "Digital payment", icon: Smartphone },
      { label: "Success", hint: "Instant response", icon: BadgeCheck },
      { label: "Receipt", hint: "Proof of payment", icon: Receipt },
    ],
  },
  billbring: {
    eyebrow: "Bill payment flow",
    title: "One place to manage bill payments and recharge services.",
    helper: "billbring helps agents and businesses serve everyday utility and recharge needs in a connected workflow.",
    centerLabel: "billbring",
    centerTitle: "Bill payment network",
    centerChips: ["Fetch", "Pay", "Confirm"],
    footer: "Utility collections and recharges become easier to explain, operate and complete.",
    sources: [
      { label: "Utility Bill", hint: "Electricity / water", icon: FileText },
      { label: "Recharge", hint: "Mobile / DTH", icon: Smartphone },
      { label: "Customer", hint: "Requests service", icon: UsersRound },
    ],
    destinations: [
      { label: "Bill Paid", hint: "Amount cleared", icon: BadgeCheck },
      { label: "Recharge Done", hint: "Service activated", icon: CircleDollarSign },
      { label: "Receipt", hint: "Transaction record", icon: Receipt },
    ],
  },
  bringpayout: {
    eyebrow: "Outgoing payout flow",
    title: "A cleaner operating model for outgoing payments.",
    helper: "BringPayout helps teams reduce payout fragmentation and connect payment execution with the systems that trigger and track it.",
    centerLabel: "BringPayout",
    centerTitle: "Payout orchestration layer",
    centerChips: ["Verify", "Route", "Confirm"],
    footer: "Move money from business instruction to recipient delivery through one payout workflow.",
    sources: [
      { label: "Business", hint: "Starts payout", icon: Building2 },
      { label: "Approval Team", hint: "Checks request", icon: UsersRound },
      { label: "Payout File", hint: "Batch upload", icon: FileText },
    ],
    destinations: [
      { label: "Bank", hint: "Direct transfer", icon: Landmark },
      { label: "Wallet", hint: "Digital payout", icon: WalletCards },
      { label: "Partner", hint: "Recipient paid", icon: UserRoundCheck },
    ],
  },
  bringremit: {
    eyebrow: "Money transfer flow",
    title: "Simplify domestic remittance from sender to beneficiary.",
    helper: "BringRemit supports assisted transfer journeys that are easy for customers to start and easy for agents to complete.",
    centerLabel: "BringRemit",
    centerTitle: "Domestic transfer layer",
    centerChips: ["Accept", "Transfer", "Confirm"],
    footer: "Support retail remittance journeys with a clear start, transfer and confirmation process.",
    sources: [
      { label: "Sender", hint: "Wants to remit", icon: UsersRound },
      { label: "Retail Point", hint: "Assisted service", icon: Store },
      { label: "Cash In", hint: "Amount accepted", icon: Banknote },
    ],
    destinations: [
      { label: "Beneficiary", hint: "Gets money", icon: UserRoundCheck },
      { label: "Bank A/C", hint: "Deposit destination", icon: Landmark },
      { label: "Status", hint: "Transfer confirmed", icon: BadgeCheck },
    ],
  },
  bringwallet: {
    eyebrow: "Wallet flow",
    title: "Keep stored value and digital spending in one connected experience.",
    helper: "BringWallet gives users and businesses a simple wallet layer for loading, storing and using funds.",
    centerLabel: "BringWallet",
    centerTitle: "Digital wallet layer",
    centerChips: ["Load", "Store", "Spend"],
    footer: "Support add money, balance use and transfer actions inside a familiar wallet experience.",
    sources: [
      { label: "User App", hint: "Opens wallet", icon: Smartphone },
      { label: "Add Money", hint: "Load balance", icon: CircleDollarSign },
      { label: "Stored Value", hint: "Wallet balance", icon: WalletCards },
    ],
    destinations: [
      { label: "Pay", hint: "Use balance", icon: CreditCard },
      { label: "Transfer", hint: "Send funds", icon: ArrowRight },
      { label: "Track", hint: "View balance", icon: BadgeCheck },
    ],
  },
  bringaeps: {
    eyebrow: "Assisted banking flow",
    title: "Make Aadhaar-enabled banking services easier to understand and deliver.",
    helper: "BringAEPS connects customer identity, assisted service points and basic banking outcomes in one simple flow.",
    centerLabel: "BringAEPS",
    centerTitle: "AEPS service layer",
    centerChips: ["Identify", "Authenticate", "Serve"],
    footer: "Designed for assisted banking use cases where simplicity and trust matter most.",
    sources: [
      { label: "Customer", hint: "Needs service", icon: UsersRound },
      { label: "Aadhaar", hint: "Identity linked", icon: FileText },
      { label: "Biometric", hint: "Fingerprint check", icon: Fingerprint },
    ],
    destinations: [
      { label: "Cash Withdraw", hint: "Cash service", icon: Banknote },
      { label: "Balance Check", hint: "Know balance", icon: Landmark },
      { label: "Mini Statement", hint: "Recent activity", icon: Receipt },
    ],
  },
  bringcash: {
    eyebrow: "Cash withdrawal flow",
    title: "Support assisted cash access through a clear and guided process.",
    helper: "BringCash helps retailers and service points handle digital-to-cash withdrawal journeys more cleanly.",
    centerLabel: "BringCash",
    centerTitle: "Cash-out service layer",
    centerChips: ["Request", "Verify", "Withdraw"],
    footer: "A simple visual flow for cash withdrawal services delivered through retailer points.",
    sources: [
      { label: "Customer", hint: "Needs cash", icon: UsersRound },
      { label: "Retailer", hint: "Assists service", icon: Store },
      { label: "Request", hint: "Amount entered", icon: FileText },
    ],
    destinations: [
      { label: "Cash Out", hint: "Money delivered", icon: Banknote },
      { label: "Status", hint: "Transaction done", icon: BadgeCheck },
      { label: "Receipt", hint: "Proof available", icon: Receipt },
    ],
  },
  bringpos: {
    eyebrow: "POS acceptance flow",
    title: "Turn card acceptance into a simple merchant-ready payment journey.",
    helper: "BringPOS supports in-store digital acceptance with a clear path from customer action to payment confirmation.",
    centerLabel: "BringPOS",
    centerTitle: "POS transaction layer",
    centerChips: ["Accept", "Authorise", "Confirm"],
    footer: "Built for merchants that want easy card and device-based payment acceptance.",
    sources: [
      { label: "Cardholder", hint: "Pays in store", icon: CreditCard },
      { label: "POS Device", hint: "Accepts card", icon: TabletSmartphone },
      { label: "Merchant", hint: "Runs checkout", icon: Store },
    ],
    destinations: [
      { label: "Payment", hint: "Card processed", icon: CircleDollarSign },
      { label: "Approval", hint: "Transaction ok", icon: BadgeCheck },
      { label: "Receipt", hint: "Sale completed", icon: Receipt },
    ],
  },
  bringtravel: {
    eyebrow: "Travel booking flow",
    title: "Make travel search, booking and confirmation easier to follow.",
    helper: "BringTravel supports agents and businesses that need a simple booking flow for everyday travel services.",
    centerLabel: "BringTravel",
    centerTitle: "Travel booking layer",
    centerChips: ["Search", "Book", "Confirm"],
    footer: "A clear visual journey from travel request to booking confirmation.",
    sources: [
      { label: "Traveller", hint: "Wants a trip", icon: UsersRound },
      { label: "Agent", hint: "Helps booking", icon: Building2 },
      { label: "Search", hint: "Find options", icon: Search },
    ],
    destinations: [
      { label: "Flight / Bus", hint: "Choose service", icon: Plane },
      { label: "Booking", hint: "Reservation done", icon: BadgeCheck },
      { label: "Ticket", hint: "Confirmation issued", icon: FileText },
    ],
  },
  bringinsure: {
    eyebrow: "Insurance service flow",
    title: "Connect customer needs with plan selection and policy issuance.",
    helper: "BringInsure helps make digital insurance services more understandable for teams, partners and customers.",
    centerLabel: "BringInsure",
    centerTitle: "Insurance enablement layer",
    centerChips: ["Assess", "Select", "Issue"],
    footer: "From enquiry to policy, the experience stays structured and easy to explain.",
    sources: [
      { label: "Customer", hint: "Needs cover", icon: UsersRound },
      { label: "Advisor", hint: "Guides choice", icon: ShieldCheck },
      { label: "Plan Need", hint: "Health / life / general", icon: FileText },
    ],
    destinations: [
      { label: "Plan", hint: "Best fit selected", icon: ShieldCheck },
      { label: "Payment", hint: "Premium paid", icon: CreditCard },
      { label: "Policy", hint: "Cover activated", icon: BadgeCheck },
    ],
  },
  bringcredit: {
    eyebrow: "Credit journey flow",
    title: "Guide applicants from enquiry to credit access with more clarity.",
    helper: "BringCredit helps connect customer applications, eligibility checks and suitable lender outcomes in one flow.",
    centerLabel: "BringCredit",
    centerTitle: "Credit orchestration layer",
    centerChips: ["Assess", "Match", "Disburse"],
    footer: "A structured credit journey helps teams explain what happens at each step.",
    sources: [
      { label: "Applicant", hint: "Needs funds", icon: UsersRound },
      { label: "Documents", hint: "Share details", icon: FileText },
      { label: "Eligibility", hint: "Basic assessment", icon: LockKeyhole },
    ],
    destinations: [
      { label: "Lender Match", hint: "Relevant offer", icon: Building2 },
      { label: "Approval", hint: "Decision status", icon: BadgeCheck },
      { label: "Disbursal", hint: "Funds received", icon: Banknote },
    ],
  },
};

function getProductGraphic(product: Product): ProductGraphicConfig {
  return (
    productGraphicMap[product.slug] ?? {
      eyebrow: "Product flow",
      title: `How ${product.name} connects people, actions and outcomes.`,
      helper: `${product.name} is designed to make its service flow easier to understand, operate and support.`,
      centerLabel: product.name,
      centerTitle: "Connected service layer",
      centerChips: ["Start", "Process", "Confirm"],
      footer: `A simple visual flow tailored to ${product.name}.`,
      sources: [
        { label: "Customer", hint: "Starts here", icon: UsersRound },
        { label: "Business", hint: "Operates flow", icon: Building2 },
        { label: "Request", hint: "Service input", icon: FileText },
      ],
      destinations: [
        { label: "Processed", hint: "Handled clearly", icon: BadgeCheck },
        { label: "Delivered", hint: "Service outcome", icon: CircleDollarSign },
        { label: "Tracked", hint: "Status visible", icon: Receipt },
      ],
    }
  );
}

function MetricStrip({ detail, product }: { detail: ProductDetail; product: Product }) {
  const ProductIcon = product.icon;

  return (
    <section className="relative overflow-hidden bg-[#08261d] py-0 text-white dark:bg-[#06150f]">
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.18)_1px,transparent_0)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-brand-500/30 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-[-12rem] h-96 w-96 rounded-full bg-emerald-300/10 blur-[120px]" />
      <ProductIcon className="pointer-events-none absolute right-[7%] top-1/2 h-56 w-56 -translate-y-1/2 stroke-[.6] text-white/[.035]" />

      <div className="section-shell relative grid sm:grid-cols-2 xl:grid-cols-4">
        {detail.metrics.map((metric: ProductMetric, index: number) => (
          <div
            key={`${metric.value}-${metric.label}`}
            className={`relative min-h-[190px] px-1 py-9 sm:px-8 sm:py-11 xl:min-h-[220px] xl:px-8 ${index === 1 || index === 3 ? "sm:border-l sm:border-white/[.10]" : ""} ${index >= 2 ? "sm:border-t sm:border-white/[.10] xl:border-t-0" : ""} ${index > 0 ? "xl:border-l xl:border-white/[.10]" : ""}`}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-display text-[clamp(1.7rem,2.5vw,2.45rem)] font-semibold tracking-[-.045em] text-[#48f0af]">{metric.value}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[.17em] text-white/65">{metric.label}</p>
              </div>
              <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/[.14] bg-white/[.06] text-[10px] font-black text-white/45">0{index + 1}</span>
            </div>
            <p className="mt-7 max-w-[28ch] text-[13px] leading-6 text-white/58">{metric.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MiniFlowGraphic({ product, detail }: { product: Product; detail: ProductDetail }) {
  const ProductIcon = product.icon;
  const labels = [detail.steps[0]?.title ?? "Initiate", detail.steps[1]?.title ?? "Process", detail.steps[2]?.title ?? "Complete"];
  const icons = [CircleDollarSign, ProductIcon, Check] as ComponentType<{ className?: string }>[];

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_32px_80px_-56px_rgba(8,18,37,.18)] dark:shadow-none sm:p-9">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(18,175,124,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(18,175,124,.06)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/[.12] blur-[75px]" />
      <ProductIcon className="pointer-events-none absolute -bottom-8 -right-2 h-56 w-56 stroke-[.75] text-brand-500/[.06]" />

      <div className="relative">
        <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Product workflow</p>
        <h3 className="mt-3 max-w-sm text-[1.65rem] font-black leading-[1.05] tracking-[-.045em] text-ink-950 dark:text-white">One clear journey from start to status.</h3>

        <div className="mt-12 space-y-5">
          {labels.map((label: string, index: number) => {
            const FlowIcon = icons[index];
            return (
              <div key={label} className="relative flex items-center gap-4">
                {index < labels.length - 1 && <span className="absolute left-[23px] top-12 h-9 w-px bg-gradient-to-b from-brand-500/50 to-brand-500/10" />}
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-brand-500/15 bg-white text-brand-600 shadow-sm dark:bg-white/[.06] dark:text-brand-300">
                  <FlowIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1 rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3.5 backdrop-blur dark:bg-white/[.035]">
                  <p className="text-[9px] font-black uppercase tracking-[.15em] text-slate-400">Step {String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-sm font-black text-ink-950 dark:text-white">{label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-9 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.13em] text-brand-600 dark:text-brand-300">
          <Sparkles className="h-4 w-4" /> Connected through billbring
        </div>
      </div>
    </div>
  );
}

function CapabilityOperatingGraphic({ product }: { product: Product }) {
  const ProductIcon = product.icon;
  const graphic = getProductGraphic(product);

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_26px_70px_-52px_rgba(26,46,89,.22)] dark:shadow-none sm:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_1px_1px,rgba(18,175,124,.11)_1px,transparent_0)] [background-size:24px_24px] dark:opacity-30" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-brand-500/[.08] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#10213f]/[.05] blur-3xl dark:bg-white/[.03]" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[.16em] text-brand-600 dark:text-brand-300">{graphic.eyebrow}</p>
            <p className="mt-1.5 max-w-xl text-sm font-black tracking-[-.02em] text-ink-950 dark:text-white sm:text-base">{graphic.title}</p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-500/15 bg-brand-500/[.07] text-brand-600 dark:text-brand-300">
            <Network className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">{graphic.helper}</p>

        <div className="mt-7 grid gap-4 md:grid-cols-[1fr_auto_1.08fr_auto_1fr] md:items-center">
          <div>
            <p className="mb-2 text-[9px] font-black uppercase tracking-[.14em] text-slate-400">Inputs</p>
            <div className="space-y-2.5">
              {graphic.sources.map((source: GraphicNode) => {
                const SourceIcon = source.icon;
                return (
                  <div key={source.label} className="flex items-center gap-2.5 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2.5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm dark:bg-white/[.06] dark:text-brand-300">
                      <SourceIcon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-black text-ink-950 dark:text-white">{source.label}</span>
                      <span className="block text-[10px] text-slate-500 dark:text-slate-400">{source.hint}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center gap-2 text-brand-500/70">
            <span className="h-px w-8 bg-brand-500/25" />
            <ArrowRight className="h-4 w-4" />
            <span className="h-px w-8 bg-brand-500/25" />
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-brand-500/20 bg-[var(--surface-muted)] px-4 py-6 text-center sm:px-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,175,124,.16),transparent_65%)]" />
            <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-[18px] bg-[#10213f] text-white shadow-[0_18px_40px_-20px_rgba(16,33,63,.28)] dark:bg-white dark:text-[#10213f]">
              <ProductIcon className="h-6 w-6" />
            </span>
            <p className="relative mt-4 text-[10px] font-black uppercase tracking-[.13em] text-brand-600 dark:text-brand-300">{graphic.centerLabel}</p>
            <p className="relative mt-1 text-base font-black tracking-[-.03em] text-ink-950 dark:text-white">{graphic.centerTitle}</p>
            <div className="relative mt-4 flex flex-wrap items-center justify-center gap-2">
              {graphic.centerChips.map((chip: string) => (
                <span key={chip} className="rounded-full border border-brand-500/15 bg-white/80 px-2.5 py-1 text-[9px] font-black uppercase tracking-[.1em] text-slate-600 backdrop-blur dark:bg-white/[.05] dark:text-slate-300">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center gap-2 text-brand-500/70">
            <span className="h-px w-8 bg-brand-500/25" />
            <ArrowRight className="h-4 w-4" />
            <span className="h-px w-8 bg-brand-500/25" />
          </div>

          <div>
            <p className="mb-2 text-[9px] font-black uppercase tracking-[.14em] text-slate-400">Outcomes</p>
            <div className="space-y-2.5">
              {graphic.destinations.map((destination: GraphicNode) => {
                const DestinationIcon = destination.icon;
                return (
                  <div key={destination.label} className="flex items-center gap-2.5 rounded-2xl border border-[var(--border)] bg-white px-3 py-2.5 shadow-sm dark:bg-white/[.035]">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-500/[.08] text-brand-600 dark:text-brand-300">
                      <DestinationIcon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-black text-ink-950 dark:text-white">{destination.label}</span>
                      <span className="block text-[10px] text-slate-500 dark:text-slate-400">{destination.hint}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-brand-500/12 bg-brand-500/[.045] px-3 py-2.5 text-center text-[10px] font-bold text-slate-600 dark:text-slate-300">
          <Check className="h-3.5 w-3.5 shrink-0 text-brand-500" />
          {graphic.footer}
        </div>
      </div>
    </div>
  );
}

export function ProductDetails({ product, detail }: { product: Product; detail: ProductDetail }) {
  return (
    <>
      <MetricStrip detail={detail} product={product} />

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
          <div data-reveal="left">
            <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300">{detail.eyebrow}</p>
            <h2 className="mt-4 max-w-[13ch] font-display text-[clamp(2.7rem,4.6vw,4.9rem)] font-semibold leading-[.95] tracking-[-.06em] text-ink-950 dark:text-white text-balance">{detail.overviewTitle}</h2>
            <div className="mt-7 max-w-2xl space-y-5 text-[16px] leading-8 text-slate-600 dark:text-slate-300">
              {detail.overview.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {detail.useCases.slice(0, 4).map((useCase: string) => (
                <span key={useCase} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[10px] font-black uppercase tracking-[.11em] text-slate-600 dark:border-white/[.09] dark:bg-white/[.035] dark:text-slate-300">{useCase}</span>
              ))}
            </div>
          </div>

          <div data-reveal="right">
            <MiniFlowGraphic product={product} detail={detail} />
          </div>
        </div>
      </section>

      <section className="section-transition bg-[#f4f8f6] py-20 dark:bg-[#070c11] sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[.68fr_1.32fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300">Core capabilities</p>
              <h2 className="mt-4 max-w-[12ch] font-display text-[clamp(2.6rem,4.2vw,4.45rem)] font-semibold leading-[.96] tracking-[-.055em] text-ink-950 dark:text-white text-balance">{detail.capabilitiesTitle}</h2>
              <p className="mt-7 max-w-xl text-[16px] leading-8 text-slate-600 dark:text-slate-300">{detail.capabilitiesIntro}</p>
            </div>

            <div data-reveal="right">
              <CapabilityOperatingGraphic product={product} />
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {detail.capabilities.map((capability: ProductContentItem, index: number) => {
              const CapabilityIcon = capabilityIcons[index % capabilityIcons.length];
              return (
                <article key={capability.title} className="group relative min-h-[275px] overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-[0_28px_70px_-48px_rgba(8,18,37,.5)] dark:border-white/[.08] dark:bg-[#0b1118] sm:p-7">
                  <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-brand-500/[.08] blur-2xl transition duration-500 group-hover:scale-125" />
                  <CapabilityIcon className="pointer-events-none absolute -bottom-8 -right-5 h-36 w-36 stroke-[.65] text-brand-500/[.055]" />
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-brand-500/15 bg-brand-500/[.08] text-brand-600 dark:text-brand-300"><CapabilityIcon className="h-5 w-5" /></span>
                  <p className="mt-9 text-[9px] font-black uppercase tracking-[.15em] text-slate-400">Capability {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl font-black tracking-[-.035em] text-ink-950 dark:text-white">{capability.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300">Why billbring</p>
              <h2 className="mt-4 max-w-[11ch] font-display text-[clamp(2.7rem,4.4vw,4.65rem)] font-semibold leading-[.95] tracking-[-.06em] text-ink-950 dark:text-white text-balance">{detail.whyTitle}</h2>
              <p className="mt-6 max-w-xl text-[16px] leading-8 text-slate-600 dark:text-slate-300">{detail.whyIntro}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {detail.benefits.map((benefit: ProductContentItem, index: number) => {
                const BenefitIcon = benefitIcons[index % benefitIcons.length];
                return (
                  <article key={benefit.title} className="group relative min-h-[260px] overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118]">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/45 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#09261e] text-[#48f0af] shadow-[0_14px_34px_-20px_rgba(18,175,124,.8)] dark:bg-brand-500/[.12]"><BenefitIcon className="h-5 w-5" /></span>
                      <span className="text-[10px] font-black tracking-[.14em] text-slate-300 dark:text-white/20">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 text-xl font-black tracking-[-.035em] text-ink-950 dark:text-white">{benefit.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-transition py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-[#0a211a] text-white dark:border-white/[.09] dark:bg-[#07150f]">
            <div className="grid lg:grid-cols-[.72fr_1.28fr]">
              <div className="relative overflow-hidden border-b border-white/[.09] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-[90px]" />
                <Workflow className="pointer-events-none absolute -bottom-8 -right-7 h-56 w-56 stroke-[.65] text-white/[.035]" />
                <div className="relative">
                  <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#48f0af]">How it works</p>
                  <h2 className="mt-4 max-w-[10ch] font-display text-[clamp(2.65rem,4vw,4.25rem)] font-semibold leading-[.94] tracking-[-.06em] text-white text-balance">Three steps. One connected flow.</h2>
                  <p className="mt-6 max-w-md text-sm leading-7 text-white/60">The exact verification, payment or partner flow varies by product, but the experience is designed around a simple pattern: start, process, confirm.</p>
                </div>
              </div>

              <div className="p-7 sm:p-10 lg:p-12">
                <div className="space-y-4">
                  {detail.steps.map((step: ProductStep, index: number) => (
                    <div key={step.title} className="group grid gap-4 rounded-[22px] border border-white/[.09] bg-white/[.035] p-5 transition hover:bg-white/[.055] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-[#48f0af]/25 bg-[#48f0af]/10 text-xs font-black text-[#48f0af]">0{index + 1}</span>
                      <div>
                        <h3 className="text-lg font-black tracking-[-.03em]">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/55">{step.description}</p>
                      </div>
                      <ArrowRight className="hidden h-5 w-5 text-white/25 transition duration-300 group-hover:translate-x-1 group-hover:text-[#48f0af] sm:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-transition pb-20 sm:pb-28 lg:pb-32">
        <div className="section-shell">
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-7 dark:border-white/[.09] dark:bg-[#0b1118] sm:p-9">
            <div className="grid gap-7 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300">Where it fits</p>
                <h2 className="mt-3 text-2xl font-black tracking-[-.045em] text-ink-950 dark:text-white">Common {product.name} use cases</h2>
              </div>
              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                {detail.useCases.map((useCase: string) => (
                  <span key={useCase} className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[.055] px-3.5 py-2.5 text-[11px] font-bold text-slate-700 dark:text-slate-200">
                    <Check className="h-3.5 w-3.5 text-brand-500" /> {useCase}
                  </span>
                ))}
              </div>
            </div>
            {detail.footnote && <p className="mt-7 border-t border-slate-200/80 pt-6 text-[11px] leading-6 text-slate-400 dark:border-white/[.08]">{detail.footnote}</p>}
          </div>
        </div>
      </section>
    </>
  );
}