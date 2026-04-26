import { createFileRoute } from "@tanstack/react-router";
import { Truck, Ruler, Cloud, KeySquare } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProseStyles } from "./buyers-guide";

export const Route = createFileRoute("/delivery-placement-info")({
  component: DeliveryPage,
  head: () => ({
    meta: [
      { title: "Container Delivery & Placement Guide — Nano Containers LLC" },
      { name: "description", content: "How container delivery works, site requirements, ground prep, and placement tips for tilt-bed deliveries to all 50 states." },
    ],
  }),
});

function DeliveryPage() {
  return (
    <>
      <PageHero eyebrow="Delivery" title="Delivery & Placement Guide" subtitle="Everything you need to prepare your site for a tilt-bed container delivery." />
      <article className="container-px mx-auto max-w-3xl py-16 prose-style">
        <p className="lead">Nano Containers LLC delivers to all 50 states using professional tilt-bed (roll-off) trucks. This page covers everything you need to know to prepare your site, understand the delivery process, and get your container placed correctly the first time.</p>

        <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
          {[
            { i: Truck, t: "Tilt-bed delivery", d: "No crane required" },
            { i: Ruler, t: "60ft of run-up", d: "Clear straight access" },
            { i: Cloud, t: "Overhead clearance", d: "Avoid power lines" },
            { i: KeySquare, t: "15–30 min drop", d: "Quick & professional" },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="bg-white border rounded-xl p-5 flex gap-4">
              <div className="h-11 w-11 rounded-lg bg-orange/10 text-orange flex items-center justify-center"><Icon className="h-5 w-5" /></div>
              <div><div className="font-bold text-navy">{t}</div><div className="text-sm text-muted-foreground">{d}</div></div>
            </div>
          ))}
        </div>

        <h2>How Container Delivery Works</h2>
        <p>All containers are delivered on a <b>tilt-bed truck</b> (also called a roll-off or sliding axle trailer). The truck backs up to your chosen spot, tilts the bed, and slides the container off onto the ground — no crane required.</p>
        <ul>
          <li>Driver backs truck to the placement area and positions for the drop</li>
          <li>The trailer bed tilts and the container slides off under its own weight</li>
          <li>Driver adjusts placement as needed within a few feet</li>
          <li>Entire drop takes approximately 15–30 minutes</li>
        </ul>

        <h2>Site Requirements</h2>
        <h3>Ground Conditions</h3>
        <ul>
          <li><b>Level surface</b> — uneven ground may make doors hard to open and close</li>
          <li><b>Firm ground</b> — gravel, concrete, asphalt, or well-compacted soil</li>
          <li><b>Drainage</b> — avoid standing water around the container base</li>
          <li><b>Foundation blocks</b> — railway sleepers or concrete blocks improve airflow</li>
        </ul>

        <h3>Access Requirements</h3>
        <ul>
          <li><b>Run-up:</b> at least 60ft straight, level approach for the truck</li>
          <li><b>Width:</b> minimum 12ft for the truck, gates included</li>
          <li><b>Height:</b> 14ft of overhead clearance — watch for power lines and branches</li>
          <li><b>Turning radius:</b> trucks need wide turning room — verify with your driver</li>
        </ul>

        <h2>Delivery Timeline</h2>
        <p>Typical delivery is <b>3–10 business days</b> from confirmed order. We coordinate scheduling with you and the driver provides an arrival window the day before drop-off.</p>

        <h2>What If I Cannot Receive Tilt-Bed Delivery?</h2>
        <p>If your site cannot accommodate a tilt-bed truck (steep grade, tight access, narrow gates), we can arrange <b>crane delivery</b> at additional cost. Talk to our team to plan the right delivery method.</p>
      </article>
      <ProseStyles />
    </>
  );
}
