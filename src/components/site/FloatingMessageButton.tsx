import { MessageSquare } from "lucide-react";
import { business } from "@/lib/business";

// Message action pinned to the viewport edge: a text to the shop, not a booking form.
// Sits at the right edge on desktop and as a thumb-reachable pill on phones.
export function FloatingMessageButton() {
  return (
    <a
      href={business.smsHref}
      className="message-fixed"
      aria-label={`Message us now at ${business.phoneDisplay}`}
    >
      <MessageSquare className="size-5 shrink-0" aria-hidden />
      <span>Message Us Now</span>
    </a>
  );
}
