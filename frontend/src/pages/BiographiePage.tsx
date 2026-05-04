import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function BiographiePage() {
  useEffect(() => {
    document.title = "Biographie & équipe · Théâtre Thérapie · Paris";
    const desc =
      "Kenza et Yannick cofondent Théâtre Thérapie à Paris : ateliers de théâtre, improvisation, et accompagnement à la prise de parole.";
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", desc);
  }, []);

  return (
    <article className="mx-auto max-w-4xl px-5 sm:px-8 pt-14 pb-20 lg:pt-20">
      <header className="mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sky-soft)]/40 text-[color:var(--sky-soft-foreground)] px-3 py-1 text-xs font-semibold">
          Biographie &amp; équipe
        </span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
          L&apos;équipe
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Kenza &amp; Yannick · Théâtre Thérapie, Paris.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-cream-deep shadow-md lg:sticky lg:top-24">
            <img
              src="/images/kenza-el-ghadouini.png"
              alt="Portrait de Kenza"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
          <h2 className="font-display text-2xl sm:text-3xl text-primary">Kenza</h2>
          <p>
            Kenza est comédienne et professeure de théâtre. Formée au{" "}
            <strong className="text-foreground">Cours Florent</strong> puis au{" "}
            <strong className="text-foreground">Cours Clément</strong> à Paris, elle a construit un
            parcours alliant rigueur académique (Master Commerce à{" "}
            <strong className="text-foreground">Kedge Business School</strong>) et engagement
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

      <section
        className="mt-16 lg:mt-24 pt-12 border-t border-border/60"
        aria-labelledby="yannick"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-cream-deep shadow-md lg:sticky lg:top-24 max-w-md mx-auto lg:max-w-none">
              <img
                src="/images/yannick.png"
                alt="Portrait de Yannick, formateur en prise de parole et cofondateur de Théâtre Thérapie"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-5 text-foreground/85 leading-relaxed text-[1.05rem]">
            <h2
              id="yannick"
              className="font-display text-3xl sm:text-4xl text-primary"
            >
              Yannick
            </h2>
          <p>
            <strong className="text-foreground">Coach en prise de parole et développement personnel</strong>,
            Yannick accompagne depuis une dizaine d&apos;années des professionnels et des particuliers à{" "}
            <strong className="text-foreground">trouver leur voix</strong>. Son approche, à la fois{" "}
            <strong className="text-foreground">directe et bienveillante</strong>, aide chacun à
            dépasser ses blocages et à <strong className="text-foreground">oser prendre sa place</strong>,{" "}
            devant un public, en réunion ou dans les moments où l&apos;on sent que les mots comptent.
          </p>
          <p>
            Issu du <strong className="text-foreground">milieu sportif et du collectif</strong>, il
            intervient aussi comme <strong className="text-foreground">coach auprès d&apos;équipes</strong>,{" "}
            dont des <strong className="text-foreground">équipes de rugby</strong> et d&apos;autres
            groupes qui veulent renforcer la parole de vestiaire, la cohésion et le soutien mutuel sous
            pression. Autant de situations où l&apos;on apprend vite que le jeu ne tient pas qu&apos;aux
            gestes : il tient au regard, au rythme et à la confiance qu&apos;on se donne les uns les
            autres.
          </p>
          <p>
            <strong className="text-foreground">Trois années de pratique théâtrale</strong> viennent
            compléter son parcours : il connaît le vocabulaire du plateau, du timing et du risque, et le
            met au service d&apos;ateliers où chacun peut explorer, sans jugement, ce qu&apos;il a à dire.
            Ingénieur de formation et habitué aux <strong className="text-foreground">projets d&apos;équipe</strong>{" "}
            exigeants, il transpose au théâtre la même exigence d&apos;écoute et de clarté collective.
          </p>
          <p className="text-muted-foreground text-sm">
            Avec Kenza, il cofonde <strong className="text-foreground/90">Théâtre Thérapie</strong> pour
            proposer une pédagogie où le corps, la parole et le plaisir du jeu vont ensemble.
          </p>
          </div>
        </div>
      </section>
    </article>
  );
}
