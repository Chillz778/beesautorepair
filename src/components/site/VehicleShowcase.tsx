import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "@/lib/business";

const slides = [
  { id: "photo-1494976388531-d1058494cdd8", title: "Performance & muscle cars", text: "Tune-ups, brakes and diagnostics for the cars you love to drive." },
  { id: "photo-1533473359331-0135ef1b58bf", title: "SUVs & family vehicles", text: "Keep the daily hauler safe with routine checks and maintenance." },
  { id: "photo-1580273916550-e323be2ae537", title: "European sedans & coupes", text: "Careful diagnosis and clear estimates before any work starts." },
  { id: "photo-1517524008697-84bbe3c3fd98", title: "All-weather drivers", text: "Seasonal inspections, AC and heating service, tyres and fluids." },
];

// Auto-advancing slideshow; pauses on hover/focus and respects reduced motion.
export function VehicleShowcase() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (n: number) => setI((n + slides.length) % slides.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section aria-roledescription="carousel" aria-label="Vehicles we service" className="bg-hero py-16 text-hero-foreground md:py-24"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="container-site">
        <p className="eyebrow">Every make, every model</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Vehicles we look after</h2>

        <div className="relative mt-10 overflow-hidden rounded-xl">
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
            {slides.map((s, n) => (
              <figure key={s.id} className="relative w-full shrink-0" aria-hidden={n !== i}>
                <img src={img(s.id, 1600, 800)} alt={s.title} loading={n === 0 ? "eager" : "lazy"} className="aspect-[4/3] w-full object-cover sm:aspect-[2/1]" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-hero via-hero/70 to-transparent p-6 pt-20 md:p-10">
                  <h3 className="font-display text-2xl font-bold md:text-3xl">{s.title}</h3>
                  <p className="mt-2 max-w-lg text-hero-muted">{s.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <button type="button" onClick={() => go(i - 1)} aria-label="Previous slide" className="btn absolute left-3 top-1/2 size-11 -translate-y-1/2 bg-hero/60 p-0 text-hero-foreground hover:bg-hero">
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" onClick={() => go(i + 1)} aria-label="Next slide" className="btn absolute right-3 top-1/2 size-11 -translate-y-1/2 bg-hero/60 p-0 text-hero-foreground hover:bg-hero">
            <ChevronRight className="size-5" />
          </button>
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {slides.map((s, n) => (
            <button key={s.id} type="button" onClick={() => go(n)} aria-label={`Show slide ${n + 1}`} aria-current={n === i}
              className={`h-2.5 rounded-full transition-all ${n === i ? "w-8 bg-accent" : "w-2.5 bg-hero-foreground/40 hover:bg-hero-foreground/70"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
