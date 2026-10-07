export const BRAND = "The Dry Fruits Store";
export const BRAND_FULL = "The Dry Fruits Store";
export const STORE_NAME = "The Dry Fruits Store";

export const STORE_ADDRESS = {
  line1: "A/33, Hariom Nagar",
  line2: "Anupam Colony, Bapunagar",
  area: "Bapunagar",
  city: "Ahmedabad",
  state: "Gujarat",
  pincode: "382350",
  country: "India",
  full: "A/33, Hariom Nagar, Anupam Colony, Bapunagar, Ahmedabad, Gujarat 382350, India",
};

export const STORE_RATING = "4.8 ★";

export const WHATSAPP_DISPLAY = "+91 78785 55518";
export const WHATSAPP_E164 = "917878555518";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=A%2F33%2C+Hariom+Nagar%2C+Anupam+Colony%2C+Bapunagar%2C+Ahmedabad%2C+Gujarat+382350";

export const MAX_QTY_PER_PRODUCT = 10;
export const MAX_QTY_MESSAGE = "Maximum quantity reached (10 per product).";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
