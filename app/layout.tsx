import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SiteLoader } from "@/components/motion/site-loader";
import { ServiceWorkerCleanup } from "@/components/system/service-worker-cleanup";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { MotionProvider } from "@/components/motion/motion-provider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7faf8" },
    { media: "(prefers-color-scheme: dark)", color: "#05080d" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.billbring.com"),
  title: {
    default: "BillBring — Bringing Bills & Payments Together, Seamlessly.",
    template: "%s | BillBring",
  },
  description: "A unified platform to manage bill payments, collections, recharges and digital payments — all in one place.",
  keywords: ["BillBring", "payments", "BBPS", "AEPS", "DMT", "payment gateway", "payouts", "fintech", "digital payments"],
  openGraph: {
    title: "BillBring — Bringing Bills & Payments Together, Seamlessly.",
    description: "A unified platform for bill payments, collections, recharges and digital payments.",
    type: "website",
    siteName: "BillBring",
  },
  twitter: { card: "summary_large_image", title: "BillBring", description: "Bringing Bills & Payments Together, Seamlessly." },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BillBring",
  url: "https://www.billbring.com",
  logo: "https://www.billbring.com/brand/billbring-main.svg",
  description: "A unified platform to manage bill payments, collections, recharges and digital payments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ThemeProvider>
          <ServiceWorkerCleanup />
          <MotionProvider>
            <SiteLoader />
            <ScrollProgress />
            <Header />
            <main id="main-content" tabIndex={-1}>{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
        <Script id="organization-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
