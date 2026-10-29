import { Phone } from "lucide-react";
import { business } from "@/lib/business";

// Fixed action at the viewport edge: a direct call, not a booking form.
export function FloatingCallButton() {
  return (
    <a
      href={business.phoneHref}
      className="call-fixed"
      aria-label={`Call us now at ${business.phoneDisplay}`}
    >
      <Phone className="call-fixed-icon size-5 shrink-0" aria-hidden />
      <span>Call Us Now</span>
    </a>
  );
}
