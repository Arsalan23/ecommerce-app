import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ProseStyles } from "./buyers-guide";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: `Terms of Service — ${SITE.name}` },
      {
        name: "description",
        content: `Terms and conditions for using ${SITE.name} website, quotes, and purchases.`,
      },
    ],
  }),
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle={`Rules for using ${SITE.name} and placing orders. Last updated: May 2026.`}
      />
      <article className="container-px mx-auto max-w-3xl py-16 prose-style">
        <p className="lead">
          By accessing or using the {SITE.name} website (&quot;Site&quot;) or requesting quotes or
          services from us, you agree to these Terms of Service. If you do not agree, please do not
          use the Site.
        </p>

        <h2>Website use</h2>
        <p>
          The Site is provided for informational and commercial purposes related to shipping
          containers, trailers, cabins, and related products. You agree not to misuse the Site,
          attempt unauthorized access, or use automated means to scrape or overload our systems
          without permission.
        </p>

        <h2>Quotes and pricing</h2>
        <p>
          Quotes provided online, by phone, or by email are estimates based on information available
          at the time. Final pricing, availability, taxes, fees, and delivery charges are confirmed
          before you commit to a purchase. We reserve the right to correct errors in descriptions or
          pricing.
        </p>

        <h2>Orders and payment</h2>
        <p>
          An order becomes binding when confirmed in writing (including email) and any required
          deposit or payment terms are met. You are responsible for the accuracy of information you
          provide (delivery address, contact details, site access). Additional charges may apply if
          delivery conditions differ from what was disclosed.
        </p>

        <h2>Delivery</h2>
        <p>
          Delivery timelines and methods depend on inventory, location, and carrier schedules. Risk
          of loss and title pass according to the agreement for your specific order. For general
          preparation guidance, see our{" "}
          <Link to="/delivery-placement-info" className="text-orange font-semibold underline">
            Delivery &amp; Placement
          </Link>{" "}
          page and{" "}
          <Link to="/shipping" className="text-orange font-semibold underline">
            Shipping
          </Link>{" "}
          information.
        </p>

        <h2>Disclaimer</h2>
        <p>
          Product images and descriptions on the Site are for illustration; actual units may vary by
          grade, configuration, or manufacturer. The Site is provided &quot;as is&quot; without
          warranties of any kind except where required by applicable law.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {SITE.name} and its affiliates are not liable for
          indirect, incidental, special, consequential, or punitive damages arising from your use of
          the Site or purchase of products, except where liability cannot be excluded by law.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. The &quot;Last updated&quot; date will change
          when we do; continued use of the Site after changes means you accept the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms:{" "}
          <a href={`mailto:${SITE.email}`} className="text-orange font-semibold underline">
            {SITE.email}
          </a>{" "}
          ·{" "}
          <a href={SITE.phoneHref} className="text-orange font-semibold underline">
            {SITE.phone}
          </a>
        </p>

        <div className="not-prose mt-10">
          <Link to="/contact" className="btn-orange inline-flex">
            Contact us
          </Link>
        </div>
      </article>
      <ProseStyles />
    </>
  );
}
