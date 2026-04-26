export type Testimonial = {
  initials: string;
  name: string;
  role: string;
  rating: 4 | 5;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { initials: "JM", name: "James Miller", role: "Construction Manager, TX", rating: 5,
    quote: "Ordered a 40ft high cube for our construction site and it arrived exactly on schedule. Clean, wind-tight, and exactly as described. The delivery driver was incredibly careful and professional. Will definitely order again." },
  { initials: "SR", name: "Sarah Reynolds", role: "Ranch Owner, OK", rating: 5,
    quote: "Best price I found after comparing 6 different companies. The team was super helpful and answered all my questions about grading. Smooth delivery to our farm. Could not be happier with the quality." },
  { initials: "DK", name: "David Kim", role: "Project Developer, FL", rating: 5,
    quote: "Had them modify a 20ft container into a site office — added AC cutout, windows, and man door. Turned out fantastic. Outstanding quality and faster turnaround than I expected." },
  { initials: "AL", name: "Angela Lopez", role: "Restaurant Owner, CA", rating: 5,
    quote: "We needed a refrigerated container fast for our restaurant expansion. Nano Containers had it delivered in 4 days. The team was professional, responsive, and the unit was spotless inside." },
  { initials: "BT", name: "Brian Thompson", role: "Farm Owner, IA", rating: 5,
    quote: "Purchased two 20ft containers for our farm storage. Pricing was transparent with no hidden fees. The delivery driver was careful placing them exactly where I needed. Highly recommend." },
  { initials: "MW", name: "Marcus Wade", role: "Warehouse Manager, GA", rating: 4,
    quote: "Great experience overall. The container was in excellent condition and delivery was smooth. Communication could be slightly faster but they always followed up. Would buy again." },
  { initials: "LF", name: "Linda Foster", role: "Small Business Owner, AZ", rating: 5,
    quote: "I was nervous about buying a container online but the Nano Containers team walked me through every step. The container arrived in perfect condition and I use it daily for my business inventory." },
  { initials: "RG", name: "Robert Garcia", role: "General Contractor, CO", rating: 5,
    quote: "Third container I have bought from these guys. Every time — perfect condition, on time, fair price. They are my go-to supplier and I recommend them to every client who needs storage on site." },
  { initials: "TN", name: "Tammy Nguyen", role: "Event Planner, NY", rating: 5,
    quote: "Used a modified 20ft container as a pop-up retail space at our event. It looked incredible and the modifications were exactly to my spec. Nano Containers made the whole process easy and stress-free." },
  { initials: "CP", name: "Chris Patterson", role: "Landscaper, NC", rating: 5,
    quote: "Needed a place to store equipment at multiple job sites. Bought a used 20ft WWT container and it was in much better shape than I expected for the price. Delivery was fast and easy." },
  { initials: "KW", name: "Karen Williams", role: "Homesteader, TN", rating: 5,
    quote: "Set up a 40ft container on our property for a workshop. The whole process from order to delivery took less than a week. The team answered every question I had patiently and professionally." },
  { initials: "JD", name: "Jason Daniels", role: "E-Commerce Seller, OH", rating: 5,
    quote: "I run a small e-commerce business and needed extra warehouse space fast. Nano Containers delivered a clean, dry 40ft unit right on schedule. It has been a game-changer for my storage needs." },
];
