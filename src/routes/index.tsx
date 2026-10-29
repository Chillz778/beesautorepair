import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { BookingButton } from "@/components/site/BookingButton";

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
        {/* Next: Services, Why Choose Us, How It Works, Reviews, Appointment, Contact, Footer */}
      </main>
      <BookingButton floating />
    </>
  );
}
