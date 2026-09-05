import type { ComponentType } from "react";
import {
  ArrowDownToLine,
  Banknote,
  Briefcase,
  CreditCard,
  Fingerprint,
  Landmark,
  Plane,
  QrCode,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  TabletSmartphone,
  WalletCards,
} from "lucide-react";

export const productGroups = [
  "Collections & Payments",
  "Move Money",
  "Banking & Financial Inclusion",
  "Business & Financial Services",
  "Send Money Across India. Right From Your Store."
] as const;

export type ProductGroup = (typeof productGroups)[number];

export type Product = {
  slug: string;
  name: string;
  category: string;
  group: ProductGroup;
  blurb: string;
  accent: string;
  glow: string;
  icon: ComponentType<{ className?: string }>;
};

const sharedVisual = {
  accent: "text-brand-600 dark:text-brand-300",
  glow: "from-brand-500/[.18] via-brand-300/[.08] to-transparent",
} as const;

/**
 * Product catalog aligned with the approved billbring website content.
 */
export const products: Product[] = [
  {
    slug: "paybring",
    name: "PayBring",
    category: "Payment Gateway / Collection",
    group: "Collections & Payments",
    blurb: "Accept and collect online payments securely through multiple payment methods.",
    ...sharedVisual,
    icon: CreditCard,
  },
  {
    slug: "bringupi",
    name: "BringUPI",
    category: "UPI Payments / Collection",
    group: "Collections & Payments",
    blurb: "Enable fast, secure and seamless UPI payment acceptance and collection.",
    ...sharedVisual,
    icon: Smartphone,
  },
  {
    slug: "bringqr",
    name: "BringQR",
    category: "UPI / QR Payments",
    group: "Collections & Payments",
    blurb: "Accept instant digital payments through simple and secure QR solutions.",
    ...sharedVisual,
    icon: QrCode,
  },
  {
    slug: "billbring",
    name: "billbring",
    category: "BBPS / Bill Payment / Recharge",
    group: "Collections & Payments",
    blurb: "Collect utility bills and provide mobile, DTH and other digital recharge services.",
    ...sharedVisual,
    icon: ReceiptText,
  },
  {
    slug: "bringpayout",
    name: "BringPayout",
    category: "Vendor & Merchant Payout",
    group: "Move Money",
    blurb: "Send quick and reliable payouts to vendors, merchants, employees and partners.",
    ...sharedVisual,
    icon: ArrowDownToLine,
  },
  {
    slug: "bringremit",
    name: "BringRemit",
    category: "Domestic Money Transfer",
    group: "Send Money Across India. Right From Your Store.",
    blurb: "Turn your retail outlet into a convenient money-transfer point with BringRemit.",
    ...sharedVisual,
    icon: Landmark,
  },
  {
    slug: "bringwallet",
    name: "BringWallet",
    category: "Wallet",
    group: "Move Money",
    blurb: "Enable convenient digital wallet transactions and money movement.",
    ...sharedVisual,
    icon: WalletCards,
  },
  {
    slug: "bringaeps",
    name: "BringAEPS",
    category: "Aadhaar Enabled Payment System",
    group: "Banking & Financial Inclusion",
    blurb: "Provide assisted banking services through Aadhaar-enabled transactions.",
    ...sharedVisual,
    icon: Fingerprint,
  },
  {
    slug: "bringcash",
    name: "BringCash",
    category: "Cash Withdrawal",
    group: "Banking & Financial Inclusion",
    blurb: "Enable convenient assisted cash withdrawal services through billbring retailer network.",
    ...sharedVisual,
    icon: Banknote,
  },
  {
    slug: "bringpos",
    name: "BringPOS",
    category: "POS / mPOS",
    group: "Banking & Financial Inclusion",
    blurb: "Accept card and digital payments through flexible POS and mobile POS solutions.",
    ...sharedVisual,
    icon: TabletSmartphone,
  },
  {
    slug: "bringtravel",
    name: "BringTravel",
    category: "Travel",
    group: "Business & Financial Services",
    blurb: "Provide convenient flight, bus and other travel booking services.",
    ...sharedVisual,
    icon: Plane,
  },
  {
    slug: "bringinsure",
    name: "BringInsure",
    category: "Insurance",
    group: "Business & Financial Services",
    blurb: "Offer accessible digital insurance solutions for customers and businesses.",
    ...sharedVisual,
    icon: ShieldCheck,
  },
  {
    slug: "bringcredit",
    name: "BringCredit",
    category: "Loans / Credit Solutions",
    group: "Business & Financial Services",
    blurb: "Connect eligible customers and businesses with suitable digital credit solutions.",
    ...sharedVisual,
    icon: Briefcase,
  },
];
