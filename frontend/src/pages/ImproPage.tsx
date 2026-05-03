import { useEffect } from "react";
import { Sparkles } from "lucide-react";
import {
  WorkshopHero,
  PracticalInfo,
  ProgramGrid,
  WorkshopCTA,
} from "@/components/workshop";

const sessions = [
  {
    title: "Cohésion, confiance et lâcher-prise",
    description: "Créer un climat de sécurité, libérer la spontanéité et supprimer l'autocensure.",
  },
  {
    title: "Écoute et construction collective",
    description: "Apprendre à rebondir sur l'autre et co-construire sans bloquer.",
  },
  {
    title: "Émotions et statuts",
    description:
      "Explorer la palette émotionnelle et comprendre les rapports de statut en scène.",
  },
  {
    title: "Personnages et univers",
    description: "Créer des personnages incarnés et s'adapter à des univers variés.",
  },
  {
    title: "Narration et structure",
    description: "Construire une histoire claire avec un début, un problème et une résolution.",
  },
  {
    title: "Préparation du match d'impro",
    description: "Maîtriser les formats de match et gérer le rythme sous contraintes.",
  },
  {
    title: "Match final",
    description: "Jouer devant un public dans un vrai format de match d'improvisation.",
  },
];

export function ImproPage() {
  useEffect(() => {
    document.title = "Et... IMPRO · Atelier d'improvisation — Théâtre Thérapie";
    const desc =
      "Atelier d'improvisation théâtrale à Paris 13e. 7 séances jusqu'à un match d'impro devant un public.";
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", desc);
  }, []);

  return (
    <>
      <WorkshopHero
        tone="mint"
        badge="Atelier · Tous niveaux"
        title="Et... IMPRO"
        tagline="Centré sur le jeu collectif et la prise de risque."
        pitch="On y travaille la confiance, l'écoute, la cohésion et le plaisir du plateau."
      />
      <PracticalInfo
        schedule="16h – 18h"
        dates="10, 17, 24, 31 mai · 7, 14, 21 juin"
        extra={
          <div className="rounded-[1.5rem] bg-[color:var(--mint-soft)]/30 border border-[color:var(--mint-soft)]/50 px-6 py-5 flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="font-display font-semibold text-foreground">Objectif final</div>
              <p className="text-sm text-foreground/75 mt-1">
                Un match d'improvisation devant un public, dans un vrai format de scène.
              </p>
            </div>
          </div>
        }
      />
      <ProgramGrid tone="mint" sessions={sessions} />
      <WorkshopCTA />
    </>
  );
}
