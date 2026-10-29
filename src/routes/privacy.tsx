import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BEE'S Auto Repair" },
      { name: "description", content: "How BEE'S Auto Repair handles the information you share with us." },
      { property: "og:title", content: "Privacy Policy — BEE'S Auto Repair" },
      { property: "og:description", content: "How BEE'S Auto Repair handles your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="container-site max-w-3xl py-20">
      <h1 className="font-display text-4xl font-bold text-primary">Privacy Policy</h1>
      <p className="mt-4 rounded bg-muted p-4 text-sm text-muted-foreground">Placeholder — the full privacy policy will be published here before launch.</p>
      <p className="mt-6 text-muted-foreground">We only use the details you give us (such as your name, phone number and vehicle information) to respond to your enquiry. We do not sell your information.</p>
      <Link to="/" className="btn btn-primary mt-8">Back to home</Link>
    </main>
  );
}
