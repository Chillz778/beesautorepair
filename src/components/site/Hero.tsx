import { Phone, Wrench, ClipboardCheck, MessageSquare } from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";
import { business } from "@/lib/business";
import { BookingButton } from "./BookingButton";

const points = [
  { icon: ClipboardCheck, text: "Clear diagnosis before any work" },
  { icon: MessageSquare, text: "Estimates approved by you first" },
  { icon: Wrench, text: "Repairs and routine maintenance" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero text-hero-foreground">
      <img src={heroImg} alt="Technician inspecting a car on a lift in a clean workshop" width={1600} height={1066}
        className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />

      <div className="container-site py-20 md:py-32 lg:py-40">
        <p className="eyebrow">Local auto repair &amp; maintenance</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
          Reliable Auto Repair. Honest Service.{" "}
          <span className="text-accent">Back on the Road.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-hero-muted">
          From check-engine lights to routine oil changes, we explain what your vehicle needs,
          share an estimate, and only start work once you approve it.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <BookingButton />
          <a href={business.phoneHref} className="btn btn-outline-light btn-lg">
            <Phone className="size-5" aria-hidden /> Call {business.phoneDisplay}
          </a>
        </div>

        <ul className="mt-14 grid gap-4 border-t border-hero-foreground/15 pt-8 sm:grid-cols-3">
          {points.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 text-sm text-hero-muted">
              <Icon className="size-5 shrink-0 text-accent" aria-hidden /> {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
