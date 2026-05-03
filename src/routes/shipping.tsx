import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ProseStyles } from "./buyers-guide";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/shipping")({
  component: ShippingPage,
  head: () => ({
    meta: [
      { title: `Shipping & Delivery — ${SITE.name}` },
      {
        name: "description",
        content: `How ${SITE.name} ships containers, trailers, and cabins nationwide — timelines, quotes, and what to expect.`,
      },
    ],
  }),
});

function ShippingPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery"
        title="Shipping & Delivery"
        subtitle="Nationwide delivery, transparent quotes, and what happens after you order."
      />
      <article className="container-px mx-auto max-w-3xl py-16 prose-style">
        <p className="lead">
          {SITE.name} coordinates professional delivery for shipping containers, trailers, modular
          cabins, and related equipment across the continental United States. Delivery is quoted
          separately from product price so you see a full landed cost before you commit.
        </p>

        <h2>How shipping is quoted</h2>
        <p>
          Freight depends on distance, equipment type (tilt-bed, lowboy, flatbed), access at your
          location, and current carrier rates. When you request a quote, we use your ZIP code and
          product details to provide an all-in delivered price where possible. Final routing may be
          adjusted for safety or regulatory reasons.
        </p>

        <h2>Typical timelines</h2>
        <ul>
          <li>
            <b>Standard delivery</b> — often 3–10 business days after order confirmation and payment
            arrangements, subject to inventory and carrier scheduling.
          </li>
          <li>
            <b>Rush or remote areas</b> — may require additional lead time or specialized equipment;
            your sales representative will confirm windows.
          </li>
        </ul>

        <h2>Receiving your order</h2>
        <p>
          For containers and many large units, tilt-bed delivery is standard: the driver needs a
          clear approach, firm ground, and overhead clearance. See our detailed{" "}
          <Link to="/delivery-placement-info" className="text-orange font-semibold underline">
            Delivery &amp; Placement Guide
          </Link>{" "}
          for site requirements, photos of good vs. challenging access, and tips to avoid reschedule
          fees.
        </p>

        <h2>Inspection</h2>
        <p>
          Please inspect your unit at delivery when practical. Note any visible transit damage on
          the paperwork and notify us immediately so we can work with the carrier and you on
          resolution.
        </p>

        <h2>Changes and cancellations</h2>
        <p>
          If you need to change the delivery address or date, contact us as early as possible. Once
          a unit is loaded or in transit, changes may incur additional fees. Cancellation policies
          depend on your order agreement and whether the unit has been reserved or dispatched.
        </p>

        <h2>Questions</h2>
        <p>
          Call{" "}
          <a href={SITE.phoneHref} className="text-orange font-semibold underline">
            {SITE.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${SITE.email}`} className="text-orange font-semibold underline">
            {SITE.email}
          </a>{" "}
          for a tailored shipping quote.
        </p>

        <div className="not-prose mt-10 flex flex-wrap gap-3">
          <Link to="/delivery-placement-info" className="btn-orange inline-flex">
            Site prep guide
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-navy font-bold text-navy hover:bg-muted"
          >
            Get a quote
          </Link>
        </div>
      </article>
      <ProseStyles />
    </>
  );
}
