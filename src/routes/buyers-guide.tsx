import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/buyers-guide")({
  component: GuidePage,
  head: () => ({
    meta: [
      { title: "Shipping Container Buyer's Guide — Nano Containers LLC" },
      { name: "description", content: "Step-by-step guide to buying the right shipping container. Sizes, grades, site requirements, prices and expert tips." },
    ],
  }),
});

function GuidePage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Shipping Container Buying Guide" subtitle="Everything you need to know to buy with confidence." />
      <article className="container-px mx-auto max-w-3xl py-16 prose-style">
        <p className="lead">Buying a shipping container for the first time can feel overwhelming — there are sizes, grades, delivery requirements, and prices to consider. This complete guide walks you through every step so you can buy with confidence and get the right container for your budget and project.</p>

        <Step n={1} title="Decide What You Will Use It For">
          <p>Your intended use is the most important factor. Common uses include:</p>
          <ul>
            <li><b>General storage</b> — household goods, tools, equipment, inventory, or retail overflow</li>
            <li><b>Construction site storage</b> — secure, lockable storage for materials and tools on active job sites</li>
            <li><b>Agricultural storage</b> — grain, feed, machinery, and chemicals on farms and rural properties</li>
            <li><b>Container home or ADU</b> — residential living space using one or multiple containers</li>
            <li><b>Container office or workspace</b> — portable office, studio, or commercial unit</li>
            <li><b>Pop-up retail or food service</b> — container cafe, bar, shop, or market stall</li>
            <li><b>Chemical or hazmat storage</b> — bunded stores with spill containment</li>
            <li><b>Cold chain logistics</b> — refrigerated (reefer) containers</li>
            <li><b>Freight and export</b> — ISO-certified containers for international shipping</li>
          </ul>
        </Step>

        <Step n={2} title="Choose the Right Size">
          <ul>
            <li><b>10ft container</b> — compact storage; fits in tight spaces; great for residential yards</li>
            <li><b>20ft container</b> — the most popular size; versatile for storage, offices, and conversions</li>
            <li><b>30ft container</b> — a middle option for when a 20ft is too small but a 40ft is too long</li>
            <li><b>40ft container</b> — maximum capacity for large storage or multi-room conversions</li>
            <li><b>High Cube (HC)</b> — adds 1ft of extra interior height (9ft 6in vs 8ft 6in)</li>
          </ul>
          <p className="callout"><b>Rule of thumb:</b> When in doubt, go one size up. A 20ft container holds approximately 1,170 cubic feet; a 40ft holds around 2,385 cubic feet.</p>
        </Step>

        <Step n={3} title="Choose Your Container Grade">
          <ul>
            <li><b>New / One-Trip</b> — used once to carry goods from overseas; near-new condition. Best for modifications, container homes, offices.</li>
            <li><b>Cargo-Worthy (CW)</b> — inspected and certified as structurally sound for international shipping.</li>
            <li><b>Wind and Watertight (WWT)</b> — structurally intact and weatherproof. Most popular choice for on-site storage. Best value.</li>
            <li><b>AS-IS</b> — sold in current condition without warranty. Lowest price.</li>
          </ul>
        </Step>

        <Step n={4} title="Check Your Site and Access">
          <ul>
            <li><b>Level ground</b> — gravel, concrete, asphalt, or compacted soil</li>
            <li><b>Access clearance</b> — at least 60ft of clear, straight run-up for tilt-bed delivery</li>
            <li><b>Overhead clearance</b> — check for low-hanging power lines or tree branches</li>
            <li><b>Gate and road width</b> — standard delivery trucks are 8-9ft wide</li>
            <li><b>Permits</b> — some municipalities require permits for permanent placement</li>
          </ul>
        </Step>

        <Step n={5} title="Understand Shipping Container Prices">
          <ul>
            <li><b>10ft WWT used:</b> from $1,800</li>
            <li><b>20ft WWT used:</b> from $2,200</li>
            <li><b>20ft one-trip:</b> from $3,500</li>
            <li><b>40ft WWT used:</b> from $3,200</li>
            <li><b>40ft high cube one-trip:</b> from $4,800</li>
          </ul>
        </Step>

        <Step n={6} title="Place Your Order">
          <p>You can order through our online shop, or call <b>+1 (435) 229-9359</b> for a custom quote. We accept credit cards, bank transfer (EFT), and financing options. Once confirmed, we will schedule delivery and keep you updated through to placement.</p>
        </Step>

        <h3>Tips From Our Experts</h3>
        <ul>
          <li>Always inspect photos of used containers before buying — ask us for condition photos</li>
          <li>For modifications, always start with a one-trip or CW container — the steel is in better condition</li>
          <li>Consider double doors on both ends if you need regular full-length access</li>
          <li>Place containers on railway sleepers or a gravel pad to prevent sinking</li>
          <li>Add a lock box over the lock rod handles for maximum security</li>
        </ul>

        <div className="not-prose mt-10 bg-orange text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-extrabold">Still have questions?</h3>
          <p className="mt-2 text-white/90">Get a free quote within 24 hours from our team.</p>
          <Link to="/contact" className="mt-5 inline-flex bg-white text-orange font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-md hover:bg-white/90">Contact Us</Link>
        </div>
      </article>
      <ProseStyles />
    </>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="flex items-center gap-3"><span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-orange text-white text-base">{n}</span>{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function ProseStyles() {
  return (
    <style>{`
      .prose-style { color: var(--color-foreground); line-height: 1.75; }
      .prose-style .lead { font-size: 1.125rem; color: var(--color-muted-foreground); }
      .prose-style h2 { font-size: 1.5rem; font-weight: 800; color: var(--color-navy); margin-top: 2rem; }
      .prose-style h3 { font-size: 1.25rem; font-weight: 800; color: var(--color-navy); margin-top: 1.75rem; margin-bottom: 0.75rem; }
      .prose-style ul { list-style: disc; padding-left: 1.25rem; margin-top: 0.75rem; color: var(--color-muted-foreground); }
      .prose-style ul li { margin: 0.4rem 0; }
      .prose-style ul li b { color: var(--color-navy); }
      .prose-style p { margin-top: 0.75rem; color: var(--color-muted-foreground); }
      .prose-style .callout { background: color-mix(in oklab, var(--orange) 10%, white); border-left: 4px solid var(--orange); padding: 1rem 1.25rem; border-radius: 0.5rem; margin-top: 1rem; color: var(--color-foreground); }
    `}</style>
  );
}
