import type { ComponentType } from "react";
import {
  ArrowDownToLine,
  Briefcase,
  CreditCard,
  Fingerprint,
  Globe2,
  Landmark,
  Plane,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";

export const productGroups = [
  "Accept Money",
  "Move Money",
  "Banking & Finance",
  "Payments & Merchant",
  "Lifestyle & Protection",
] as const;

export type ProductGroup = (typeof productGroups)[number];

export type Product = {
  slug: string;
  name: string;
  category: string;
  group: ProductGroup;
  blurb: string;
  bullets: string[];
  accent: string;
  glow: string;
  icon: ComponentType<{ className?: string }>;
};

const sharedVisual = {
  accent: "text-brand-600 dark:text-brand-300",
  glow: "from-brand-500/[.18] via-brand-300/[.08] to-transparent",
} as const;

/**
 * Canonical product catalog used by navigation, product listing, sitemap,
 * product detail routes and footer links. Keep this aligned with the approved
 * 11-product information architecture.
 */
export const products: Product[] = [
  {
    slug: "paybring",
    name: "PayBring",
    category: "Payment Gateway",
    group: "Accept Money",
    blurb: "Accept customer payments online through a fast, secure and integration-ready payment gateway experience.",
    bullets: ["Online payment acceptance", "Multiple payment modes", "Transaction visibility", "Settlement-ready workflows"],
    ...sharedVisual,
    icon: CreditCard,
  },
  {
    slug: "bringpayout",
    name: "BringPayout",
    category: "Vendor & Merchant Payout",
    group: "Move Money",
    blurb: "Send controlled payouts to vendors, merchants and business partners with clear status and reconciliation visibility.",
    bullets: ["Vendor payouts", "Merchant payouts", "Bulk payout workflows", "Reconciliation-ready records"],
    ...sharedVisual,
    icon: ArrowDownToLine,
  },
  {
    slug: "bringremit",
    name: "BringRemit",
    category: "Remittance",
    group: "Move Money",
    blurb: "Move money through a focused remittance experience with guided transfers, clear states and dependable operational visibility.",
    bullets: ["Transfer workflows", "Recipient journeys", "Clear transaction status", "Partner-ready operations"],
    ...sharedVisual,
    icon: Globe2,
  },
  {
    slug: "billbring",
    name: "BillBring",
    category: "BBPS / Bill Payment / Recharge",
    group: "Payments & Merchant",
    blurb: "Bring BBPS, utility bill payments and recharge journeys together inside one consistent BillBring experience.",
    bullets: ["BBPS journeys", "Utility bill payments", "Recharge services", "Instant payment confirmations"],
    ...sharedVisual,
    icon: ReceiptText,
  },
  {
    slug: "bringaeps",
    name: "BringAEPS",
    category: "Aadhaar Banking",
    group: "Banking & Finance",
    blurb: "Enable assisted Aadhaar banking journeys through a clear, biometric-led and operator-friendly experience.",
    bullets: ["Assisted banking", "Biometric-led journeys", "Transaction receipts", "Operator visibility"],
    ...sharedVisual,
    icon: Fingerprint,
  },
  {
    slug: "bringdmt",
    name: "BringDMT",
    category: "Domestic Money Transfer",
    group: "Move Money",
    blurb: "Make domestic money transfer operations simple with guided beneficiary, transaction and confirmation workflows.",
    bullets: ["Domestic transfers", "Beneficiary management", "Transaction tracking", "Operator-led workflows"],
    ...sharedVisual,
    icon: Landmark,
  },
  {
    slug: "bringpos",
    name: "BringPOS",
    category: "POS / mPOS",
    group: "Payments & Merchant",
    blurb: "Turn merchant counters into connected payment points with fast POS and mobile POS acceptance workflows.",
    bullets: ["POS payment acceptance", "mPOS workflows", "Instant confirmations", "Merchant transaction history"],
    ...sharedVisual,
    icon: Smartphone,
  },
  {
    slug: "bringwallet",
    name: "BringWallet",
    category: "Digital Wallet",
    group: "Banking & Finance",
    blurb: "Give users one connected wallet experience for balances, money movement, transaction history and service access.",
    bullets: ["Wallet balance", "Digital money journeys", "Transaction history", "Connected service access"],
    ...sharedVisual,
    icon: WalletCards,
  },
  {
    slug: "bringtravel",
    name: "BringTravel",
    category: "Travel Services",
    group: "Lifestyle & Protection",
    blurb: "Add travel services to your customer proposition through a familiar BillBring discovery and booking experience.",
    bullets: ["Travel discovery", "Booking-oriented journeys", "Cross-service access", "Agent-friendly flow"],
    ...sharedVisual,
    icon: Plane,
  },
  {
    slug: "bringinsure",
    name: "BringInsure",
    category: "Insurance",
    group: "Lifestyle & Protection",
    blurb: "Present insurance opportunities through a clear, guided and cross-sell-ready BillBring experience.",
    bullets: ["Insurance discovery", "Guided product selection", "Customer assistance", "Service cross-sell"],
    ...sharedVisual,
    icon: ShieldCheck,
  },
  {
    slug: "bringcredit",
    name: "BringCredit",
    category: "Digital Credit & Loans",
    group: "Banking & Finance",
    blurb: "Connect eligible customers with digital credit and loan journeys while keeping discovery, application and fulfillment clear.",
    bullets: ["Credit discovery", "Loan journeys", "Application visibility", "Partner-led fulfillment"],
    ...sharedVisual,
    icon: Briefcase,
  },
];
