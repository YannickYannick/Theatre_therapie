import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Sparkles, Users } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
  "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&q=80",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80",
  "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&q=80",
  "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
];

export function HomePage() {
  useEffect(() => {
    document.title = "Théâtre Thérapie — Ateliers de théâtre à Paris";
    const desc =
      "Cours et ateliers de théâtre à Paris fondés par Kenza El Ghadouini. Émotions, improvisation, présence au plateau.";
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
              Comédienne & professeure de théâtre · Paris
            </p>
            <p className="mt-6 text-base text-foreground/80 max-w-xl leading-relaxed">
              Des ateliers pensés pour libérer la parole, le corps et l'authenticité de chacun. Une
              pédagogie ancrée dans les émotions, la confiance et la présence au plateau.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/inscription"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition shadow-sm"
              >
                S'inscrire
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/biographie"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
              >
                Découvrir Kenza
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[color:var(--sky-soft)]/40 via-transparent to-[color:var(--mint-soft)]/40 blur-2xl" />
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-cream-deep shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=900&q=80"
                alt="Portrait de Kenza El Ghadouini"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm shadow-md">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-semibold">8 élèves max</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display text-3xl sm:text-4xl text-primary">Les ateliers</h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Deux ateliers complémentaires, 7 séances chacun, à Paris 13e.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <WorkshopCard
            to="/emotions"
            tone="sky"
            level="Niveau 2"
            title="Émotions encore et toujours"
            description="Centré sur les émotions au plateau et leur utilisation juste et consciente. On y travaille la sincérité, la précision du jeu, l'écoute et la présence."
            schedule="14h–16h · 7 séances"
          />
          <WorkshopCard
            to="/impro"
            tone="mint"
            level="Tous niveaux"
            title="Et... IMPRO"
            description="Centré sur le jeu collectif et la prise de risque. On y travaille la confiance, l'écoute, la cohésion et le plaisir du plateau."
            schedule="16h–18h · 7 séances"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <h2 className="font-display text-3xl sm:text-4xl text-primary mb-8">En images</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-3xl border border-border/60 bg-cream-deep group"
            >
              <img
                src={src}
                alt={`Atelier ${i + 1}`}
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
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-foreground">Écrivez à Kenza</h2>
          <a
            href="mailto:kenza.elghadouini@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm sm:text-base font-semibold hover:opacity-90 transition"
          >
            <Mail className="h-4 w-4" />
            kenza.elghadouini@gmail.com
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
  to: "/emotions" | "/impro";
  tone: "sky" | "mint";
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
