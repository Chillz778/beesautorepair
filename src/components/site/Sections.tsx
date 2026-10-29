import { Clock, Mail, MapPin, Navigation, Phone, Quote, Star, ShieldCheck, FileText, Wrench, Users, Camera } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { business, img, navLinks } from "@/lib/business";

function Heading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="inline-block rounded bg-muted px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{children}</span>;
}

const services = [
  { title: "Vehicle Diagnostics", id: "photo-1625047509248-ec889cbff17f", text: "Check-engine light on? We scan, test and trace the real cause, then explain it in plain English before recommending anything." },
  { title: "Brake Repair", id: "photo-1619642751034-765dfdf7c58e", text: "Squealing, grinding or a soft pedal. We inspect pads, rotors, calipers and fluid, and show you what needs attention." },
  { title: "Oil Changes", id: "photo-1487754180451-c456f719a1fc", text: "The right oil and filter for your engine, plus a quick multi-point look at fluids, belts and tyres while you wait." },
  { title: "Engine Repair", id: "photo-1486262715619-67b85e0b08d3", text: "From misfires and leaks to timing components, we repair engine problems with care and keep you updated along the way." },
  { title: "AC Service", id: "photo-1504222490345-c075b6008014", text: "Weak or warm air? We check for leaks, test the system and recharge or repair it so the cabin stays comfortable." },
  { title: "Routine Maintenance", id: "photo-1530046339160-ce3e530c7d2f", text: "Scheduled services, filters, fluids, batteries and inspections that help prevent bigger, costlier repairs later." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-site">
        <Heading eyebrow="Our services" title="Repairs and maintenance, done right" intro="Whatever brings you in, the process is the same: we find the cause, explain your options, and only start work once you approve the estimate." />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title} className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-lg">
              <div className="overflow-hidden">
                <img src={img(s.id, 800, 520)} alt={s.title} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const reasons = [
  { icon: FileText, title: "Transparent estimates", text: "You get a written estimate and a clear explanation before any work begins. No surprise add-ons." },
  { icon: Wrench, title: "Careful workmanship", text: "We take the time to diagnose properly, use quality parts and double-check our work before handing back the keys." },
  { icon: Users, title: "Experienced technicians", text: "Years of hands-on experience across domestic, Asian and European vehicles.", note: "Experience details to be confirmed" },
  { icon: ShieldCheck, title: "Warranties & certifications", text: "Any parts/labour warranty and technician certifications will be listed here once verified.", note: "Pending verification" },
];

export function WhyChooseUs() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container-site">
        <Heading eyebrow="Why choose us" title="Honest work you can actually understand" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text, note }) => (
            <li key={title} className="rounded-xl bg-card p-6 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Icon className="size-6" aria-hidden /></span>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              {note && <div className="mt-3"><Placeholder>{note}</Placeholder></div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <img src={img("photo-1492144534655-ae79c964c9d7", 1000, 750)} alt="Cars inside a clean, well-lit workshop" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
        <div>
          <Heading eyebrow="About us" title="A neighborhood shop that treats you like a neighbor" />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>BEE'S Auto Repair was built on a simple idea: car repair shouldn't feel confusing or stressful. We take the time to explain what's going on with your vehicle, show you what we found, and give you an honest recommendation.</p>
            <p>Whether it's a quick oil change or a tricky engine fault, we treat every car as if it were our own — and every customer as someone we want to see again.</p>
          </div>
          <div className="mt-6"><Placeholder>Sample write-up — to be replaced with the shop's story</Placeholder></div>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { name: "Sample Customer A", text: "Placeholder review text. A real customer review will appear here with its source once collected." },
  { name: "Sample Customer B", text: "Placeholder review text. We'll only show genuine reviews, linked to where they were posted." },
  { name: "Sample Customer C", text: "Placeholder review text. Ratings will be shown only when verified from a public source." },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-hero py-20 text-hero-foreground md:py-28">
      <div className="container-site">
        <p className="eyebrow">Reviews &amp; trust</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What customers say</h2>
        <p className="mt-4 max-w-2xl text-hero-muted">These are clearly marked sample placeholders, not real reviews. Genuine reviews and ratings will be added with their source (e.g. Google).</p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-xl border border-hero-foreground/15 bg-hero-foreground/5 p-6">
              <div className="flex items-center justify-between">
                <Quote className="size-7 text-accent" aria-hidden />
                <span className="rounded bg-hero-foreground/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide">Sample placeholder</span>
              </div>
              <div className="mt-4 flex gap-1 text-hero-foreground/30" aria-label="Rating not yet available">
                {Array.from({ length: 5 }).map((_, n) => <Star key={n} className="size-4" aria-hidden />)}
              </div>
              <p className="mt-4 text-hero-muted">"{r.text}"</p>
              <p className="mt-5 text-sm font-semibold">{r.name} · <span className="text-hero-muted">Source: to be added</span></p>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {["Workshop photo", "Team photo", "Service bay photo"].map((t) => (
            <div key={t} className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-hero-foreground/25 text-hero-muted">
              <Camera className="size-7" aria-hidden />
              <span className="text-sm">{t} — real photo coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  const a = business.address;
  const full = `${a.street}, ${a.city}, ${a.state} ${a.zip}`;
  return (
    <section id="location" className="py-20 md:py-28">
      <div className="container-site">
        <Heading eyebrow="Location & hours" title="Find the shop" intro="Address, hours and service area below are placeholders and will be updated with the real details." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border bg-card p-6">
            <MapPin className="size-6 text-accent" aria-hidden />
            <h3 className="mt-4 font-display text-lg font-bold text-primary">Address</h3>
            <p className="mt-2 text-muted-foreground">{full}</p>
            <p className="mt-4 text-sm font-semibold text-primary">Service area</p>
            <p className="text-sm text-muted-foreground">{business.serviceArea}</p>
            <div className="mt-4"><Placeholder>Placeholder address</Placeholder></div>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <Clock className="size-6 text-accent" aria-hidden />
            <h3 className="mt-4 font-display text-lg font-bold text-primary">Opening hours</h3>
            <dl className="mt-3 space-y-2 text-sm">
              {business.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 border-b border-border pb-2 last:border-0">
                  <dt className="text-muted-foreground">{h.days}</dt><dd className="font-semibold text-primary">{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4"><Placeholder>Placeholder hours</Placeholder></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed bg-muted p-6 text-center text-muted-foreground">
            <Navigation className="size-7" aria-hidden />
            <p className="font-semibold text-primary">Map coming soon</p>
            <p className="text-sm">A map and directions will be added once the exact location is confirmed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-muted py-20 md:py-28">
      <div className="container-site">
        <Heading eyebrow="Contact" title="Talk to the shop" />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a href={business.phoneHref} className="btn btn-primary btn-lg"><Phone className="size-5" aria-hidden /> {business.phoneDisplay}</a>
          <a href={business.smsHref} className="btn btn-lg border bg-card text-primary hover:bg-background"><Quote className="size-5" aria-hidden /> Send a text</a>
          <a href={`mailto:${business.email}`} className="btn btn-lg border bg-card text-primary hover:bg-background"><Mail className="size-5" aria-hidden /> {business.email}</a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Phone number and email are placeholders.</p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-hero py-12 text-hero-muted">
      <div className="container-site flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-lg font-bold text-hero-foreground">{business.name}</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-hero-foreground">{l.label}</a></li>)}
            <li><Link to="/privacy" className="hover:text-hero-foreground">Privacy Policy</Link></li>
          </ul>
        </nav>
      </div>
      <p className="container-site mt-8 text-xs">© {new Date().getFullYear()} {business.name}. Photos via Unsplash.</p>
    </footer>
  );
}
