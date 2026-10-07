import Link from "next/link";
import { BRAND, BRAND_FULL } from "@/data/site";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label={BRAND_FULL}
    >
      {/* Premium Original Vector Logo Mark: Elegant almond & botanical leaf emblem */}
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#6E2635] bg-[#FAF8F6] text-[#6E2635] shadow-xs transition-colors duration-200 group-hover:border-[#5A1E2B] group-hover:bg-white sm:h-10 sm:w-10"
        aria-hidden="true"
      >
        <svg viewBox="0 0 36 36" className="h-5 w-5 sm:h-5 sm:w-5" fill="none">
          {/* Outer Almond Silhouette */}
          <path
            d="M18 5.5 C11.5 11 10.2 19.5 14.2 25.8 C16 28.5 20 28.5 21.8 25.8 C25.8 19.5 24.5 11 18 5.5 Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Graceful inner botanical spine / kernel vein */}
          <path
            d="M18 10.5 C16.2 15 16.5 21.5 18 24.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* Subtle kernel accent curves */}
          <path
            d="M18 14.5 C20 16 21 18.5 20.5 21"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="18" cy="8.5" r="1" fill="currentColor" />
        </svg>
      </span>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="truncate whitespace-nowrap font-serif text-[15px] font-semibold tracking-tight text-ink min-[360px]:text-[16px] sm:text-xl leading-none">
          {BRAND}
        </span>
        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#6E2635] leading-tight mt-1 sm:text-[10px]">
          Premium Dry Fruits
        </span>
      </div>
    </Link>
  );
}
