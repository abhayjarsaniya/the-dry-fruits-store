import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchResults } from "@/components/search-results";

export const metadata: Metadata = {
  title: "Search",
  description: "Search premium dry fruits, nuts, dates, seeds and gift boxes at The Dry Fruits Store.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="px-5 py-20 text-stone-500">Searching…</div>}>
      <SearchResults />
    </Suspense>
  );
}
