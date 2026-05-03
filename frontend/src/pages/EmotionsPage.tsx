import { useEffect } from "react";
import {
  WorkshopHero,
  PracticalInfo,
  ProgramGrid,
  WorkshopCTA,
} from "@/components/workshop";

const sessions = [
  {
    title: "Les émotions comme point de départ",
    description:
      "Explorer les émotions dans le corps et apprendre à les reconnaître sans les surjouer.",
  },
  {
    title: "Sincérité et vérité de jeu",
    description: "Apprendre à jouer simple, juste, et connecté à ce que l'on ressent vraiment.",
  },
  {
    title: "La colère et la tension juste",
    description: "Travailler l'affirmation émotionnelle sans excès ni agressivité.",
  },
  {
    title: "La peur et la vulnérabilité",
    description:
      "Explorer les émotions plus fragiles et apprendre à les rendre visibles sans se protéger.",
  },
  {
    title: "La joie et la légèreté",
    description: "Trouver une énergie vivante, simple et authentique, sans surjeu.",
  },
  {
    title: "Passer d'une émotion à l'autre",
    description:
      "Travailler les transitions émotionnelles et la construction de scènes plus complexes.",
  },
  {
    title: "Carte blanche émotionnelle",
    description: "Créer une petite forme personnelle ou collective à partir d'une émotion choisie.",
  },
];

export function EmotionsPage() {
  useEffect(() => {
    document.title = "Émotions encore et toujours · Atelier Niveau 2 — Théâtre Thérapie";
    const desc =
      "Atelier de théâtre niveau 2 à Paris 13e. 7 séances pour travailler les émotions, la sincérité et la présence au plateau.";
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", desc);
  }, []);

  return (
    <>
      <WorkshopHero
        tone="sky"
        badge="Atelier · Niveau 2"
        title="Émotions encore et toujours"
        tagline="Centré sur les émotions au plateau et leur utilisation juste et consciente."
        pitch="On y travaille la sincérité, la précision du jeu, l'écoute et la présence."
      />
      <PracticalInfo
        schedule="14h – 16h"
        dates="10, 17, 24, 31 mai · 7, 14, 21 juin"
      />
      <ProgramGrid tone="sky" sessions={sessions} />
      <WorkshopCTA />
    </>
  );
}
