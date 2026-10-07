import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Dry Fruits Store handles your inquiry. The cart stays in your browser.",
};

export default function PrivacyPage() {
  return (
    <div className="shell py-16 sm:py-24">
      <article className="max-w-3xl">
        <p className="font-script text-4xl text-leaf">Quiet by design</p>
        <h1 className="mt-3 font-serif text-6xl text-ink">Privacy Policy</h1>
        <div className="mt-8 space-y-5 leading-relaxed text-stone-600">
          <p>The Dry Fruits Store does not ask you to create an account, and this website does not run an automated payment checkout.</p>
          <p>Your inquiry list is stored in your device browser only, so it stays ready as you explore products. Clearing your browser cache removes it. We only receive your inquiry details when you choose to connect with us on WhatsApp.</p>
          <p>The inquiry button opens a concise delivery form, then connects directly to WhatsApp with a pre-filled summary you can review before sending. That chat is delivered through WhatsApp under their standard terms.</p>
          <p>When you contact us, your communication is used solely to assist you with fresh dry fruit availability, custom boxes, pricing, and delivery. We never sell or share your personal information.</p>
        </div>
      </article>
    </div>
  );
}
