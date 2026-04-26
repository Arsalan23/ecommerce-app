import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ProseStyles } from "./buyers-guide";

export const Route = createFileRoute("/new-vs-used")({
  component: NewVsUsedPage,
  head: () => ({
    meta: [
      { title: "New vs. Used Shipping Containers — Nano Containers LLC" },
      { name: "description", content: "Compare new (one-trip), Cargo-Worthy, Wind & Watertight and AS-IS container grades to choose the right one for your project." },
    ],
  }),
});

function NewVsUsedPage() {
  return (
    <>
      <PageHero eyebrow="Buying Guide" title="New vs. Used Shipping Containers" subtitle="Which grade should you buy? A breakdown of every container condition." />
      <article className="container-px mx-auto max-w-3xl py-16 prose-style">
        <p className="lead">One of the first decisions every container buyer faces is whether to buy new or used. Both have clear advantages depending on your budget, intended use, and quality requirements.</p>

        <h2>New (One-Trip) Shipping Containers</h2>
        <p>A one-trip container is manufactured at an overseas factory, loaded with a single shipment of goods, and shipped to a US port. After that one journey, it is sold as a "one-trip" unit.</p>
        <h3>What to Expect</h3>
        <ul>
          <li>Minimal surface rust — typically just minor oxidation at welds or corners</li>
          <li>No significant dents or structural damage</li>
          <li>Clean, odor-free interior with intact bamboo or hardwood flooring</li>
          <li>Original factory paint in the color specified</li>
          <li>All seals, gaskets, and locking hardware in excellent condition</li>
        </ul>
        <h3>Best For</h3>
        <ul>
          <li>Container homes, ADUs, and residential builds</li>
          <li>Container offices, studios, and workspaces</li>
          <li>Container cafes, bars, and retail pop-ups</li>
          <li>Any project where appearance matters</li>
        </ul>

        <h2>Cargo-Worthy (CW) Containers</h2>
        <p>CW containers have been inspected and certified as structurally sound for active international shipping. Some dents, rust, and surface wear are normal. Great balance of quality and price.</p>

        <h2>Wind & Watertight (WWT) Containers</h2>
        <p>Structurally intact and weatherproof, but not certified for shipping. The most popular choice for on-site storage and best value overall.</p>

        <h2>AS-IS Containers</h2>
        <p>Sold in current condition without warranty. May have minor to significant cosmetic or structural issues. Lowest price; ideal for non-critical storage or as raw material for modification projects.</p>

        <div className="not-prose mt-10 grid sm:grid-cols-2 gap-4">
          <Link to="/shop" className="btn-orange">Browse Inventory</Link>
          <Link to="/contact" className="btn-navy">Talk to a Specialist</Link>
        </div>
      </article>
      <ProseStyles />
    </>
  );
}
