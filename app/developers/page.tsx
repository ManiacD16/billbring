import type { Metadata } from "next";
import { Braces, Cable, KeyRound, RadioTower, ShieldCheck, SquareTerminal } from "lucide-react";
import { InternalHero } from "@/components/ui/internal-hero";
import { FeatureCard } from "@/components/ui/feature-card";
import { ApiSection } from "@/components/sections/api-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Developers",
  description: "Explore the BillBring API-first developer experience.",
};

const developerFeatures = [
  { id: "sandbox", icon: SquareTerminal, title: "Sandbox workflow", copy: "Keep the first integration path safe, readable and easy to reason about before production traffic is involved." },
  { id: "webhooks", icon: RadioTower, title: "Realtime events", copy: "Design webhook and status update flows around predictable financial events." },
  { icon: KeyRound, title: "Access boundaries", copy: "Keep credentials and permissions explicit across integration surfaces." },
  { icon: Cable, title: "Integration clarity", copy: "Document the path from first request to production operation with fewer hidden assumptions." },
  { icon: Braces, title: "Consistent resources", copy: "Apply shared conventions across payments, payouts and other service APIs." },
  { icon: ShieldCheck, title: "Security minded", copy: "Treat validation, observability and protected access as first-class developer concerns." },
];

export default function DevelopersPage() {
  return (
    <>
      <InternalHero
        eyebrow="Developers"
        title={<>Build financial experiences without <span className="text-brand-500">the visual complexity.</span></>}
        copy="The BillBring developer experience is designed around clear APIs, predictable events and implementation patterns that are easy to reason about."
      />
      <ApiSection />
      <section id="docs" className="section-transition scroll-mt-28 py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <SectionHeading eyebrow="Developer experience" title={<>A cleaner path from <span className="text-brand-500">sandbox to scale.</span></>} align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {developerFeatures.map((feature) => <FeatureCard key={feature.title} id={feature.id} icon={feature.icon} title={feature.title} copy={feature.copy} />)}
          </div>
        </div>
      </section>
    </>
  );
}
