import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function BiographiePage() {
  useEffect(() => {
    document.title = "Biographie — Kenza El Ghadouini · Théâtre Thérapie";
    const desc =
      "Comédienne et professeure de théâtre formée au Cours Florent et au Cours Clément, Kenza El Ghadouini cofonde Théâtre Thérapie à Paris.";
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", desc);
  }, []);

  return (
    <article className="mx-auto max-w-4xl px-5 sm:px-8 pt-14 pb-20 lg:pt-20">
      <header className="mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sky-soft)]/40 text-[color:var(--sky-soft-foreground)] px-3 py-1 text-xs font-semibold">
          Biographie
        </span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
          Kenza El Ghadouini
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Comédienne, professeure de théâtre, cofondatrice de Théâtre Thérapie.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-cream-deep shadow-md lg:sticky lg:top-24">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80"
              alt="Portrait de Kenza El Ghadouini"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
          <p>
            Kenza El Ghadouini est comédienne et professeure de théâtre. Formée au{" "}
            <strong className="text-foreground">Cours Florent</strong> puis au{" "}
            <strong className="text-foreground">Cours Clément</strong> à Paris, elle a construit un
            parcours alliant rigueur académique — Master Commerce à{" "}
            <strong className="text-foreground">Kedge Business School</strong> — et engagement
            artistique profond. Percussionniste, danseuse de bachata et sportive accomplie, elle
            apporte à la scène une présence physique et une énergie singulière.
          </p>

          <blockquote className="my-8 rounded-2xl bg-[color:var(--mint-soft)]/30 border-l-4 border-[color:var(--mint-soft)] px-6 py-5 text-foreground/90 italic">
            « Une pratique du jeu ancrée dans le corps et le collectif. »
          </blockquote>

          <p>
            Après une formation en improvisation théâtrale aux{" "}
            <strong className="text-foreground">Ateliers de Bob</strong> à Rabat, Kenza développe
            une pratique du jeu ancrée dans le corps et le collectif. Elle a travaillé avec le{" "}
            <strong className="text-foreground">Collectif Théâtre sans fin</strong> sur{" "}
            <em>J'étais dans ma maison et j'attendais que la pluie vienne</em> de Jean-Luc Lagarce,
            et joue actuellement avec le{" "}
            <strong className="text-foreground">Collectif Cours Clément</strong> dans{" "}
            <em>Tailleur pour dames</em> de Feydeau.
          </p>

          <p>
            Parallèlement à son parcours de comédienne, Kenza enseigne le théâtre et
            l'improvisation, avec une pédagogie centrée sur les{" "}
            <strong className="text-foreground">émotions</strong>, la{" "}
            <strong className="text-foreground">confiance</strong> et la{" "}
            <strong className="text-foreground">présence au plateau</strong>. Elle cofonde
            aujourd'hui <strong className="text-primary">Théâtre Thérapie</strong>, des ateliers
            pensés pour libérer la parole, le corps et l'authenticité de chacun.
          </p>

          <div className="pt-6 flex flex-wrap gap-3">
            <Link
              to="/emotions"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Atelier Émotions
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/impro"
              className="inline-flex items-center gap-2 rounded-full bg-card border border-border text-foreground px-5 py-2.5 text-sm font-semibold hover:bg-secondary transition"
            >
              Atelier Impro
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
