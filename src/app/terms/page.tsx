import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for browsing The Dry Fruits Store and sending a WhatsApp inquiry.",
};

export default function TermsPage() {
  return (
    <div className="shell py-16 sm:py-24">
      <article className="max-w-3xl">
        <p className="font-script text-4xl text-gold">Plainly stated</p>
        <h1 className="mt-3 font-serif text-6xl text-ink">Terms</h1>
        <div className="mt-8 space-y-5 leading-relaxed text-stone-600">
          <p>Prices shown on this website are indicative. Fresh batch pricing, exact availability, and courier or local delivery charges are confirmed directly during your WhatsApp conversation.</p>
          <p>Submitting an inquiry does not automatically lock inventory until confirmed in chat.</p>
          <p>You can add up to ten items to your inquiry list, with customizable weight options for each product.</p>
          <p>Photographs represent our actual product grades and packaging style. As natural agricultural products, slight variations in size and shade are inherent to natural harvests.</p>
          <p>Please store your dry fruits, nuts, dates, and seeds in airtight containers in a cool, dry place once delivered to preserve maximum freshness and crunch.</p>
        </div>
      </article>
    </div>
  );
}
