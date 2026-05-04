/**
 * Canonical business identity — use everywhere the site shows entity, contact, or address.
 * Update only this module when details change.
 */
export const COMPANY_LEGAL_NAME = "Merchant Provider SRX LLC";
/** Public-facing service name (marketing, FAQ). */
export const COMPANY_BRAND_NAME = "SRX Payments";

export const COMPANY_EMAIL = "raexyhacks68@gmail.com";
export const COMPANY_MAILTO = `mailto:${COMPANY_EMAIL}`;

export const COMPANY_ADDRESS_STREET = "12849 Climbing Ivy Dr";
export const COMPANY_ADDRESS_COUNTRY = "United States";

/** Single line for maps / structured labels */
export const COMPANY_ADDRESS_FULL = `${COMPANY_ADDRESS_STREET}, ${COMPANY_ADDRESS_COUNTRY}`;

export function companyGoogleMapsSearchUrl(): string {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(COMPANY_ADDRESS_FULL)
  );
}

/** Homepage iframe embed (Google Maps) */
export function companyGoogleMapsEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(COMPANY_ADDRESS_STREET)}&output=embed`;
}
