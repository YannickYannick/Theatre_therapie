import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, MapPin, Users, Euro } from "lucide-react";
import type { ReactNode } from "react";

import {
  BilletterieAtelierButtons,
  BilletterieImproFootnote,
  type AtelierSlug,
} from "@/components/BilletterieAtelierButtons";

export type Tone = "sky" | "mint";

export function WorkshopHero({
  tone,
  badge,
  title,
  tagline,
  pitch,
}: {
  tone: Tone;
  badge: string;
  title: string;
  tagline: string;
  pitch: string;
}) {
  const toneBg =
    tone === "sky"
      ? "from-[color:var(--sky-soft)]/45 to-[color:var(--sky-soft)]/10"
      : "from-[color:var(--mint-soft)]/45 to-[color:var(--mint-soft)]/10";
  const toneChip =
    tone === "sky"
      ? "bg-[color:var(--sky-soft)] text-[color:var(--sky-soft-foreground)]"
      : "bg-[color:var(--mint-soft)] text-[color:var(--mint-soft-foreground)]";

  return (
    <section className={`bg-gradient-to-br ${toneBg} border-b border-border/60`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-14 pb-16 lg:pt-20 lg:pb-20">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${toneChip}`}
        >
          {badge}
        </span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-foreground/80 max-w-3xl">{tagline}</p>
        <p className="mt-4 text-base text-foreground/70 max-w-3xl leading-relaxed">{pitch}</p>
      </div>
    </section>
  );
}

export function PracticalInfo({
  schedule,
  dates,
  location = "L'Âge d'or — 26 rue du Dr Magnan, 75013 Paris",
  maxStudents = 8,
  priceDisplay = "175 € (25 €/séance)",
  sessionsLabel = "7 séances",
  extra,
}: {
  schedule: string;
  dates: string;
  location?: string;
  maxStudents?: number;
  priceDisplay?: string;
  sessionsLabel?: string;
  extra?: ReactNode;
}) {
  const items = [
    { icon: Calendar, label: sessionsLabel, value: dates },
    { icon: Clock, label: "Horaires", value: schedule },
    { icon: MapPin, label: "Lieu", value: location },
    { icon: Users, label: "Effectif", value: `${maxStudents} élèves max` },
    { icon: Euro, label: "Tarif", value: priceDisplay },
  ];
  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 -mt-10">
      <div className="rounded-[2rem] bg-card border border-border/60 shadow-md p-6 sm:p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((it) => (
          <div key={it.label} className="flex items-start gap-3">
            <div className="rounded-full bg-secondary p-2 text-primary">
              <it.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {it.label}
              </div>
              <div className="text-sm font-semibold text-foreground">{it.value}</div>
            </div>
          </div>
        ))}
      </div>
      {extra && <div className="mt-6">{extra}</div>}
    </section>
  );
}

export function ProgramGrid({
  tone,
  sessions,
  subtitle = "7 séances pour explorer, ressentir et incarner.",
}: {
  tone: Tone;
  sessions: { title: string; description: string }[];
  subtitle?: string;
}) {
  const toneNum =
    tone === "sky"
      ? "bg-[color:var(--sky-soft)] text-[color:var(--sky-soft-foreground)]"
      : "bg-[color:var(--mint-soft)] text-[color:var(--mint-soft-foreground)]";

  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16 lg:py-20">
      <h2 className="font-display text-3xl sm:text-4xl text-primary mb-3">Programme</h2>
      <p className="text-muted-foreground mb-10">{subtitle}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        {sessions.map((s, i) => (
          <div
            key={i}
            className="rounded-[1.5rem] bg-card border border-border/60 p-6 hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <span
                className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center font-display font-semibold ${toneNum}`}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg text-foreground leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WorkshopCTA({ currentSlug }: { currentSlug?: AtelierSlug }) {
  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 pb-20">
      <div className="rounded-[2rem] bg-[color:var(--cream-deep)] border border-border/60 p-8 sm:p-10 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-primary">Envie de participer ?</h2>
        <p className="mt-3 text-foreground/75 max-w-xl mx-auto">
          8 places par atelier. Choisissez la billetterie correspondante — les liens s&apos;ouvrent
          dans un nouvel onglet.
        </p>
        <BilletterieImproFootnote className="mt-4 mx-auto" />
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <BilletterieAtelierButtons currentSlug={currentSlug} />
        </div>
        <Link
          to="/inscription"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Préférez envoyer un message ou une question
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
