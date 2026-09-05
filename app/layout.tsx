import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SiteBackground } from "@/components/layout/site-background";
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
    default: "billbring — Bringing Bills & Payments Together, Seamlessly.",
    template: "%s | billbring",
  },
  description: "billbring is a FinTech platform connecting businesses, retailers, distributors and financial institutions through simple, secure and technology-driven financial solutions.",
  keywords: ["billbring", "payments", "UPI", "BBPS", "AEPS", "DMT", "payment gateway", "payouts", "wallet", "POS", "fintech", "digital financial services"],
  openGraph: {
    title: "billbring — Bringing Bills & Payments Together, Seamlessly.",
    description: "Payments, banking services and digital financial solutions together on one connected ecosystem.",
    type: "website",
    siteName: "billbring",
  },
  twitter: { card: "summary_large_image", title: "billbring", description: "Bringing Bills & Payments Together, Seamlessly." },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "billbring",
  url: "https://www.billbring.com",
  logo: "https://www.billbring.com/brand/billbring-main.svg",
  description: "Payments, banking services and digital financial solutions together on one connected ecosystem.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="site-body min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <SiteBackground />
        <div className="site-content">
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
        </div>
        <Script id="organization-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
