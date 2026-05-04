import { ExternalLink, MapPin } from "lucide-react";

const ADDRESS_LINE = "26 rue du Dr Magnan, 75013 Paris";
const MAP_EMBED =
  "https://maps.google.com/maps?q=26+Rue+du+Docteur+Magnan,+75013+Paris&t=&z=16&ie=UTF8&iwloc=&output=embed";
const MAP_EXTERNAL =
  "https://www.google.com/maps/search/?api=1&query=26+Rue+du+Docteur+Magnan%2C+75013+Paris";

type AgeDorMapCardProps = {
  className?: string;
};

export function AgeDorMapCard({ className }: AgeDorMapCardProps) {
  return (
    <div
      className={`rounded-[2rem] border border-border/60 bg-card shadow-sm overflow-hidden ${className ?? ""}`}
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-0">
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-primary">
            <MapPin className="h-5 w-5 shrink-0" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Lieu des ateliers
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl text-primary">L&apos;Âge d&apos;or</h2>
          <address className="mt-2 text-foreground/85 not-italic leading-relaxed">
            {ADDRESS_LINE}
          </address>
          <a
            href={MAP_EXTERNAL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline w-fit"
          >
            Ouvrir dans Google Maps
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
          </a>
        </div>
        <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] border-t lg:border-t-0 lg:border-l border-border/60 bg-muted/20">
          <iframe
            title="Carte : théâtre L'Âge d'or, 26 rue du Dr Magnan, Paris 13e"
            src={MAP_EMBED}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
