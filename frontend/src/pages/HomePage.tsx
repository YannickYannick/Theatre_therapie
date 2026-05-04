import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Sparkles, Users } from "lucide-react";

import { AgeDorMapCard } from "@/components/AgeDorMapCard";
import { BilletterieAtelierButtons } from "@/components/BilletterieAtelierButtons";
import type { WorkshopTone } from "@/lib/workshopPresets";
import { WORKSHOP_LIST } from "@/lib/workshopPresets";

function isTone(v: string): v is WorkshopTone {
  return v === "sky" || v === "mint";
}

/** Galerie « En images » : fichiers dans `public/images/gallery/`. */
const galleryImages = [
  "/images/gallery/accueil-galerie-01.jpeg",
  "/images/gallery/accueil-galerie-02.jpeg",
  "/images/gallery/accueil-galerie-03.jpeg",
  "/images/gallery/accueil-galerie-04.jpeg",
  "/images/gallery/accueil-galerie-05.jpeg",
  "/images/gallery/accueil-galerie-06.jpeg",
] as const;

const galleryAlts: readonly string[] = [
  "Atelier Théâtre Thérapie à Paris, vue 1",
  "Atelier Théâtre Thérapie à Paris, vue 2",
  "Atelier Théâtre Thérapie à Paris, vue 3",
  "Atelier Théâtre Thérapie à Paris, vue 4",
  "Atelier Théâtre Thérapie à Paris, vue 5",
  "Atelier Théâtre Thérapie à Paris, vue 6",
];

export function HomePage() {
  useEffect(() => {
    document.title = "Théâtre Thérapie · Ateliers de théâtre à Paris";
    const desc =
      "Cours et ateliers de théâtre à Paris : Kenza et Yannick. Émotions, improvisation, prise de parole.";
    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "description");
      document.head.appendChild(el);
    }
    el.setAttribute("content", desc);
  }, []);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--mint-soft)]/40 text-[color:var(--mint-soft-foreground)] px-3 py-1 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              Ateliers à Paris · Saison en cours
            </span>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl text-primary leading-[1.05] tracking-tight">
              Théâtre
              <br />
              Thérapie
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl">
              Kenza &amp; Yannick · Paris
            </p>
            <p className="mt-6 text-base text-foreground/80 max-w-xl leading-relaxed">
              Des ateliers pensés pour libérer la parole, le corps et l&apos;authenticité de chacun,
              entre jeu théâtral, improvisation et accompagnement à la prise de parole. Une pédagogie
              ancrée dans les émotions, la confiance et la présence au plateau.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <BilletterieAtelierButtons />
              </div>
              <Link
                to="/biographie"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
              >
                Découvrir Kenza et Yannick
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[color:var(--sky-soft)]/40 via-transparent to-[color:var(--mint-soft)]/40 blur-2xl" />
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-cream-deep shadow-lg">
              <img
                src="/images/hero-accueil-profs-theatre.png"
                alt="Illustration : Kenza et un collaborateur, professeurs de théâtre"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm shadow-md">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-semibold">8 élèves max</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-16">
        <AgeDorMapCard />
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display text-3xl sm:text-4xl text-primary">Les ateliers</h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Deux ateliers complémentaires, 7 séances chacun, à l&apos;Âge d&apos;or (Paris 13e).
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {WORKSHOP_LIST.map((w) => (
            <WorkshopCard
              key={w.slug}
              to={`/${w.slug}`}
              tone={isTone(w.tone) ? w.tone : "sky"}
              level={w.level_label}
              title={w.title}
              description={w.summary}
              schedule={w.schedule_summary}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <h2 className="font-display text-3xl sm:text-4xl text-primary mb-8">En images</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <div
              key={src}
              className="aspect-square overflow-hidden rounded-3xl border border-border/60 bg-cream-deep group"
            >
              <img
                src={src}
                alt={galleryAlts[i] ?? `Atelier Théâtre Thérapie, vue ${i + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <div className="rounded-[2rem] bg-gradient-to-br from-[color:var(--sky-soft)]/30 to-[color:var(--mint-soft)]/30 border border-border/60 px-6 py-12 sm:px-12 sm:py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
            Une question ?
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-foreground">Écrivez-nous</h2>
          <a
            href="mailto:yannbaff@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm sm:text-base font-semibold hover:opacity-90 transition"
          >
            <Mail className="h-4 w-4" />
            yannbaff@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}

function WorkshopCard({
  to,
  tone,
  level,
  title,
  description,
  schedule,
}: {
  to: string;
  tone: WorkshopTone;
  level: string;
  title: string;
  description: string;
  schedule: string;
}) {
  const toneBg =
    tone === "sky"
      ? "bg-[color:var(--sky-soft)]/35"
      : "bg-[color:var(--mint-soft)]/35";
  const toneChip =
    tone === "sky"
      ? "bg-[color:var(--sky-soft)] text-[color:var(--sky-soft-foreground)]"
      : "bg-[color:var(--mint-soft)] text-[color:var(--mint-soft-foreground)]";

  return (
    <Link
      to={to}
      className={`group rounded-[2rem] border border-border/60 ${toneBg} p-7 sm:p-9 flex flex-col transition hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`text-xs font-semibold rounded-full px-3 py-1 ${toneChip}`}>{level}</span>
        <span className="text-xs text-foreground/60">{schedule}</span>
      </div>
      <h3 className="mt-5 font-display text-2xl sm:text-3xl text-primary leading-tight">{title}</h3>
      <p className="mt-3 text-sm sm:text-base text-foreground/75 leading-relaxed">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        Découvrir l'atelier
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
