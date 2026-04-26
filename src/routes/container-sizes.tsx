import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ProseStyles } from "./buyers-guide";

export const Route = createFileRoute("/container-sizes")({
  component: SizesPage,
  head: () => ({
    meta: [
      { title: "Container Sizes & Specs — Nano Containers LLC" },
      { name: "description", content: "Full ISO shipping container dimensions, capacities and payload specs for 10ft, 20ft, 40ft, and high cube containers." },
    ],
  }),
});

const SIZES = [
  { name: "10ft Standard Shipping Container", best: "Compact storage in tight spaces — residential yards, small construction sites, retail back-of-house.",
    rows: [["External", "10ft L × 8ft W × 8ft 6in H"], ["Internal", "9ft 4in L × 7ft 8in W × 7ft 10in H"], ["Door opening", "7ft 8in W × 7ft 5in H"], ["Capacity", "≈ 565 cu ft"], ["Tare weight", "≈ 2,800 kg (6,170 lbs)"], ["Max payload", "≈ 10,000 kg (22,046 lbs)"]] },
  { name: "20ft Standard Shipping Container", best: "Most popular size; versatile for storage, offices, and conversions; fits most driveways.",
    rows: [["External", "20ft L × 8ft W × 8ft 6in H"], ["Internal", "19ft 4in L × 7ft 8in W × 7ft 10in H"], ["Door opening", "7ft 8in W × 7ft 5in H"], ["Capacity", "1,172 cu ft"], ["Tare weight", "≈ 2,300 kg (5,070 lbs)"], ["Max payload", "≈ 21,700 kg (47,840 lbs)"], ["TEU", "1 TEU"]] },
  { name: "40ft Standard Shipping Container", best: "Maximum capacity for large storage, commercial use, or multi-room conversions.",
    rows: [["External", "40ft L × 8ft W × 8ft 6in H"], ["Internal", "39ft 5in L × 7ft 8in W × 7ft 10in H"], ["Capacity", "≈ 2,385 cu ft"], ["Tare weight", "≈ 3,750 kg (8,270 lbs)"], ["Max payload", "≈ 26,750 kg (58,975 lbs)"], ["TEU", "2 TEU"]] },
  { name: "40ft High Cube Container", best: "Extra 1ft of interior height — perfect for tall items, container homes and conversion projects.",
    rows: [["External", "40ft L × 8ft W × 9ft 6in H"], ["Internal", "39ft 5in L × 7ft 8in W × 8ft 10in H"], ["Capacity", "≈ 2,694 cu ft"], ["Tare weight", "≈ 3,900 kg (8,600 lbs)"], ["Max payload", "≈ 28,600 kg (63,050 lbs)"]] },
];

function SizesPage() {
  return (
    <>
      <PageHero eyebrow="Reference" title="Container Sizes & Specs" subtitle="ISO standard dimensions, capacities and payload specs for every container we carry." />
      <article className="container-px mx-auto max-w-4xl py-16 prose-style">
        <p className="lead">All shipping containers sold by Nano Containers LLC conform to ISO standards. Use this page to compare sizes and find the right container for your project.</p>
        {SIZES.map((s) => (
          <div key={s.name} className="not-prose bg-white border rounded-xl p-6 mt-8">
            <h2 className="text-xl font-extrabold text-navy">{s.name}</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {s.rows.map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm border-b border-dashed pb-1.5">
                  <span className="text-muted-foreground">{k}</span><span className="font-bold text-navy">{v}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground"><b className="text-navy">Best for:</b> {s.best}</p>
          </div>
        ))}
      </article>
      <ProseStyles />
    </>
  );
}
