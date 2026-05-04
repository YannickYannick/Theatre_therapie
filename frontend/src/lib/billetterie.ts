/** URLs billetterie (Vite : préfixe `VITE_`, exposées au navigateur). */

/** Billetterie par défaut : atelier Émotions niveau 2 (Billetweb). */
const DEFAULT_BILLETTERIE_EMOTIONS =
  "https://www.billetweb.fr/theatre-therapie-atelier-motion-niveau-2";

function trimUrl(url: string | undefined): string {
  return (url ?? "").trim();
}

export function getBilletterieEmotionsUrl(): string {
  return trimUrl(import.meta.env.VITE_BILLETTERIE_EMOTIONS_URL) || DEFAULT_BILLETTERIE_EMOTIONS;
}

export function getBilletterieImproUrl(): string {
  return trimUrl(import.meta.env.VITE_BILLETTERIE_IMPRO_URL);
}

export function hasBilletterieEmotions(): boolean {
  return Boolean(getBilletterieEmotionsUrl());
}

export function hasBilletterieImpro(): boolean {
  return Boolean(getBilletterieImproUrl());
}
