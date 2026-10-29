// Single source of truth for business details.
// PLACEHOLDERS: every value marked below is sample content — replace with verified details before launch.
export const business = {
  name: "BEE'S Auto Repair",
  phoneDisplay: "(555) 010-0000", // placeholder — 555 numbers are reserved for fiction
  phoneHref: "tel:+15550100000",
  smsHref: "sms:+15550100000",
  email: "hello@example.com", // placeholder
  // Placeholder address — not a real shop location.
  address: { street: "123 Placeholder Ave", city: "Sample City", state: "ST", zip: "00000" },
  serviceArea: "Sample City and surrounding neighborhoods (placeholder)",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ], // placeholder hours
};

export const img = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=75`;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Location", href: "#location" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
