/** URLs billetterie (Vite : préfixe `VITE_`, exposées au navigateur). */

function trimUrl(url: string | undefined): string {
  return (url ?? "").trim();
}

export function getBilletterieEmotionsUrl(): string {
  return trimUrl(import.meta.env.VITE_BILLETTERIE_EMOTIONS_URL);
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
