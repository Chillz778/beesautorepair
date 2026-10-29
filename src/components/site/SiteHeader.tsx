import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "@/lib/business";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-primary">
          <span className="grid size-9 place-items-center rounded-md bg-primary text-sm text-primary-foreground">B</span>
          {business.name}
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={business.phoneHref} className="btn btn-primary hidden sm:inline-flex">
            <Phone className="size-4" aria-hidden /> Call Now
          </a>
          <a href={business.phoneHref} className="btn btn-primary size-11 p-0 sm:hidden" aria-label="Call now">
            <Phone className="size-4" aria-hidden />
          </a>
          <button
            type="button"
            className="btn btn-ghost size-11 p-0 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="animate-in fade-in slide-in-from-top-2 border-t border-border lg:hidden">
          <ul className="container-site flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-2 py-3 font-medium text-foreground hover:bg-muted focus-visible:bg-muted focus-visible:outline-none">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
