import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ProseStyles } from "./buyers-guide";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${SITE.name}` },
      {
        name: "description",
        content: `How ${SITE.name} collects, uses, and protects your personal information when you browse or purchase.`,
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`How ${SITE.name} handles your data. Last updated: May 2026.`}
      />
      <article className="container-px mx-auto max-w-3xl py-16 prose-style">
        <p className="lead">
          {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
          This policy describes what information we collect, how we use it, and the choices you have
          when you use our website, request a quote, or place an order.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <b>Contact and quote details</b> — name, email, phone number, company (if provided), and
            the content of messages you send through our contact or quote forms.
          </li>
          <li>
            <b>Order-related information</b> — shipping or delivery address, billing details where
            applicable, and communications about your purchase.
          </li>
          <li>
            <b>Technical data</b> — IP address, browser type, device type, and general usage data
            collected through cookies or similar technologies to keep the site secure and improve
            performance.
          </li>
        </ul>

        <h2>How we use your information</h2>
        <p>We use the information above to:</p>
        <ul>
          <li>Respond to inquiries and provide quotes</li>
          <li>Process and fulfill orders, schedule delivery, and provide customer support</li>
          <li>Send transactional messages (order updates, delivery coordination)</li>
          <li>Improve our website, products, and services</li>
          <li>Comply with legal obligations and protect our rights</li>
        </ul>

        <h2>Sharing of information</h2>
        <p>
          We do not sell your personal information. We may share information with service providers
          who assist us (for example, payment processors, delivery partners, or email providers)
          only as needed to operate our business, and subject to appropriate safeguards.
        </p>

        <h2>Cookies</h2>
        <p>
          We may use cookies and similar technologies for essential site functionality, analytics,
          and preferences. You can control cookies through your browser settings; disabling some
          cookies may affect how the site works.
        </p>

        <h2>Data retention and security</h2>
        <p>
          We retain information for as long as needed to fulfill the purposes described here, unless
          a longer period is required by law. We use reasonable administrative, technical, and
          organizational measures to protect your information.
        </p>

        <h2>Your choices</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or restrict
          certain processing of your personal data. To make a request, contact us using the details
          below.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${SITE.email}`} className="text-orange font-semibold underline">
            {SITE.email}
          </a>{" "}
          or call{" "}
          <a href={SITE.phoneHref} className="text-orange font-semibold underline">
            {SITE.phone}
          </a>
          .
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
