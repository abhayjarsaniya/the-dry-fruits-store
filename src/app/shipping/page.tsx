import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping Information",
  description: "How The Dry Fruits Store inquiries, pricing and doorstep delivery are confirmed on WhatsApp.",
};

export default function ShippingPage() {
  return (
    <div className="shell py-16 sm:py-24">
      <article className="max-w-3xl">
        <p className="font-script text-4xl text-caramel">Carefully packed</p>
        <h1 className="mt-3 font-serif text-6xl text-ink">Shipping Information</h1>
        <div className="mt-8 space-y-5 leading-relaxed text-stone-600">
          <p>This website functions as a catalog and direct inquiry platform. Doorstep delivery is confirmed after we connect with you on WhatsApp.</p>
          <p>When you send an inquiry, your chosen dry fruits, weights and quantities are automatically summarized. We verify stock freshness, current market pricing, and suitable delivery options for your address in Ahmedabad or across India.</p>
          <p>Please double check your required weights and quantities in the message before sending. An order is confirmed once both parties agree in the chat.</p>
          <p>
            Have questions about customized festive hampers, corporate orders, or specific delivery timings? Visit our <Link href="/contact" className="underline underline-offset-4">Contact</Link> page or message us directly.
          </p>
        </div>
      </article>
    </div>
  );
}
