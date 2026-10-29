import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { FloatingMessageButton } from "@/components/site/FloatingMessageButton";
import { VehicleShowcase } from "@/components/site/VehicleShowcase";
import { Services, WhyChooseUs, About, Reviews, Location, Contact, SiteFooter } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BEE'S Auto Repair — Reliable Auto Repair & Maintenance" },
      { name: "description", content: "Honest auto repair, diagnostics, brakes, oil changes and routine maintenance. Book an appointment with BEE'S Auto Repair." },
      { property: "og:title", content: "BEE'S Auto Repair" },
      { property: "og:description", content: "Reliable auto repair. Honest service. Back on the road." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <VehicleShowcase />
        <Services />
        <WhyChooseUs />
        <About />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingMessageButton />
    </>
  );
}
