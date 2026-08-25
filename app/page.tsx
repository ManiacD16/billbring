import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { ProductGrid } from "@/components/sections/product-grid";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Solutions } from "@/components/sections/solutions";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ApiSection } from "@/components/sections/api-section";
import { Security } from "@/components/sections/security";
import { DashboardShowcase } from "@/components/sections/dashboard-showcase";
import { WhyBillBring } from "@/components/sections/why-billbring";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <ProductGrid />
      <Ecosystem />
      <Solutions />
      <HowItWorks />
      <ApiSection />
      <Security />
      <DashboardShowcase />
      <WhyBillBring />
      <SocialProof />
      <FinalCta />
    </>
  );
}
