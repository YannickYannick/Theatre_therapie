import { ExternalLink } from "lucide-react";

import {
  getBilletterieEmotionsUrl,
  getBilletterieImproUrl,
  hasBilletterieEmotions,
  hasBilletterieImpro,
} from "@/lib/billetterie";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition text-center min-w-[10rem] sm:min-w-0";

const activeClass = `${btnBase} bg-primary text-primary-foreground hover:opacity-90 shadow-sm`;
const disabledClass = `${btnBase} border border-border bg-muted/40 text-muted-foreground cursor-not-allowed opacity-80`;

export type AtelierSlug = "emotions" | "impro";

type BilletterieAtelierButtonsProps = {
  /** Sur une page atelier : léger surlignage du bouton correspondant */
  currentSlug?: AtelierSlug;
  className?: string;
};

export function BilletterieAtelierButtons({ currentSlug, className }: BilletterieAtelierButtonsProps) {
  const emotionsHref = getBilletterieEmotionsUrl();
  const improHref = getBilletterieImproUrl();
  const emotionsOk = hasBilletterieEmotions();
  const improOk = hasBilletterieImpro();

  const highlight = (slug: AtelierSlug) =>
    currentSlug === slug ? " ring-2 ring-primary ring-offset-2 ring-offset-background" : "";

  return (
    <div className={`flex flex-col sm:flex-row flex-wrap gap-3 ${className ?? ""}`}>
      {emotionsOk ? (
        <a
          href={emotionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className={activeClass + highlight("emotions")}
        >
          S&apos;inscrire — Émotions encore et toujours
          <ExternalLink className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
        </a>
      ) : (
        <button type="button" disabled className={disabledClass + highlight("emotions")}>
          Émotions encore et toujours — billetterie à venir
        </button>
      )}
      {improOk ? (
        <a
          href={improHref}
          target="_blank"
          rel="noopener noreferrer"
          className={activeClass + highlight("impro")}
        >
          S&apos;inscrire — Et... IMPRO
          <ExternalLink className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
        </a>
      ) : (
        <button type="button" disabled className={disabledClass + highlight("impro")}>
          Et... IMPRO — billetterie à venir
        </button>
      )}
    </div>
  );
}

/** Textes d’information tant qu’une billetterie n’est pas branchée (lien Vite). */
export function BilletterieImproFootnote({ className }: { className?: string }) {
  const emotionsOk = hasBilletterieEmotions();
  const improOk = hasBilletterieImpro();
  if (emotionsOk && improOk) return null;
  return (
    <div className={`text-sm text-muted-foreground max-w-xl space-y-2 ${className ?? ""}`}>
      {!emotionsOk && (
        <p>
          La billetterie pour{" "}
          <span className="font-medium text-foreground/90">Émotions encore et toujours</span> sera
          ouverte ici dès que le lien de réservation sera publié.
        </p>
      )}
      {!improOk && (
        <p>
          La billetterie pour l&apos;atelier{" "}
          <span className="font-medium text-foreground/90">Et... IMPRO</span> est à venir.
        </p>
      )}
    </div>
  );
}
