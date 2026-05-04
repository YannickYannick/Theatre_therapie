/**
 * Contenu des ateliers côté front (aligné sur `backend/apps/workshops/migrations/0002_seed_workshops.py`).
 * Mettre à jour ici et, si besoin, la migration / l’API pour rester cohérents.
 */

export type WorkshopTone = "sky" | "mint";

export type WorkshopListItem = {
  slug: string;
  title: string;
  level_label: string;
  summary: string;
  tone: WorkshopTone;
  sessions_label: string;
  schedule_time: string;
  schedule_summary: string;
  sort_order: number;
};

export type WorkshopSessionItem = {
  sort_order: number;
  title: string;
  description: string;
};

export type WorkshopDetail = {
  slug: string;
  title: string;
  badge: string;
  level_label: string;
  summary: string;
  tagline: string;
  pitch: string;
  tone: WorkshopTone;
  schedule_time: string;
  dates_text: string;
  location: string;
  max_students: number;
  sessions_count: number;
  sessions_label: string;
  price_display: string;
  program_subtitle: string;
  program_subtitle_resolved: string;
  highlight_title: string;
  highlight_text: string;
  meta_title: string;
  meta_description: string;
  sessions: WorkshopSessionItem[];
};

const PROGRAM_SUBTITLE_DEFAULT = "7 séances pour explorer, ressentir et incarner.";

const emotionsSessions: WorkshopSessionItem[] = [
  {
    sort_order: 0,
    title: "Les émotions comme point de départ",
    description:
      "Explorer les émotions dans le corps et apprendre à les reconnaître sans les surjouer.",
  },
  {
    sort_order: 1,
    title: "Sincérité et vérité de jeu",
    description: "Apprendre à jouer simple, juste, et connecté à ce que l'on ressent vraiment.",
  },
  {
    sort_order: 2,
    title: "La colère et la tension juste",
    description: "Travailler l'affirmation émotionnelle sans excès ni agressivité.",
  },
  {
    sort_order: 3,
    title: "La peur et la vulnérabilité",
    description:
      "Explorer les émotions plus fragiles et apprendre à les rendre visibles sans se protéger.",
  },
  {
    sort_order: 4,
    title: "La joie et la légèreté",
    description: "Trouver une énergie vivante, simple et authentique, sans surjeu.",
  },
  {
    sort_order: 5,
    title: "Passer d'une émotion à l'autre",
    description: "Travailler les transitions émotionnelles et la construction de scènes plus complexes.",
  },
  {
    sort_order: 6,
    title: "Carte blanche émotionnelle",
    description: "Créer une petite forme personnelle ou collective à partir d'une émotion choisie.",
  },
];

const improSessions: WorkshopSessionItem[] = [
  {
    sort_order: 0,
    title: "Cohésion, confiance et lâcher-prise",
    description: "Créer un climat de sécurité, libérer la spontanéité et supprimer l'autocensure.",
  },
  {
    sort_order: 1,
    title: "Écoute et construction collective",
    description: "Apprendre à rebondir sur l'autre et co-construire sans bloquer.",
  },
  {
    sort_order: 2,
    title: "Émotions et statuts",
    description: "Explorer la palette émotionnelle et comprendre les rapports de statut en scène.",
  },
  {
    sort_order: 3,
    title: "Personnages et univers",
    description: "Créer des personnages incarnés et s'adapter à des univers variés.",
  },
  {
    sort_order: 4,
    title: "Narration et structure",
    description: "Construire une histoire claire avec un début, un problème et une résolution.",
  },
  {
    sort_order: 5,
    title: "Préparation du match d'impro",
    description: "Maîtriser les formats de match et gérer le rythme sous contraintes.",
  },
  {
    sort_order: 6,
    title: "Match final",
    description: "Jouer devant un public dans un vrai format de match d'improvisation.",
  },
];

const emotionsDetail: WorkshopDetail = {
  slug: "emotions",
  title: "Émotions encore et toujours",
  badge: "Atelier · Niveau 2",
  level_label: "Niveau 2",
  summary:
    "Centré sur les émotions au plateau et leur utilisation juste et consciente. On y travaille la sincérité, la précision du jeu, l'écoute et la présence.",
  tagline: "Centré sur les émotions au plateau et leur utilisation juste et consciente.",
  pitch: "On y travaille la sincérité, la précision du jeu, l'écoute et la présence.",
  tone: "sky",
  schedule_time: "14h – 16h",
  dates_text: "10, 17, 24, 31 mai · 7, 14, 21 juin",
  location: "L'Âge d'or — 26 rue du Dr Magnan, 75013 Paris",
  max_students: 8,
  sessions_count: 7,
  sessions_label: "7 séances",
  price_display: "175 € (25 €/séance)",
  program_subtitle: "",
  program_subtitle_resolved: PROGRAM_SUBTITLE_DEFAULT,
  highlight_title: "",
  highlight_text: "",
  meta_title: "Émotions encore et toujours · Atelier Niveau 2 — Théâtre Thérapie",
  meta_description:
    "Atelier de théâtre niveau 2 à l'Âge d'or (Paris 13e). 7 séances pour travailler les émotions, la sincérité et la présence au plateau.",
  sessions: emotionsSessions,
};

const improDetail: WorkshopDetail = {
  slug: "impro",
  title: "Et... IMPRO",
  badge: "Atelier · Tous niveaux",
  level_label: "Tous niveaux",
  summary:
    "Centré sur le jeu collectif et la prise de risque. On y travaille la confiance, l'écoute, la cohésion et le plaisir du plateau.",
  tagline: "Centré sur le jeu collectif et la prise de risque.",
  pitch: "On y travaille la confiance, l'écoute, la cohésion et le plaisir du plateau.",
  tone: "mint",
  schedule_time: "16h – 18h",
  dates_text: "17, 24, 31 mai · 7, 14, 21, 28 juin",
  location: "L'Âge d'or — 26 rue du Dr Magnan, 75013 Paris",
  max_students: 8,
  sessions_count: 7,
  sessions_label: "7 séances",
  price_display: "175 € (25 €/séance)",
  program_subtitle: "",
  program_subtitle_resolved: PROGRAM_SUBTITLE_DEFAULT,
  highlight_title: "Objectif final",
  highlight_text: "Un match d'improvisation devant un public, dans un vrai format de scène.",
  meta_title: "Et... IMPRO · Atelier d'improvisation — Théâtre Thérapie",
  meta_description:
    "Atelier d'improvisation théâtrale à l'Âge d'or (Paris 13e). 7 séances jusqu'à un match d'impro devant un public.",
  sessions: improSessions,
};

const WORKSHOP_DETAILS_BY_SLUG: Record<string, WorkshopDetail> = {
  emotions: emotionsDetail,
  impro: improDetail,
};

/** Liste d’accueil (ordre d’affichage). */
export const WORKSHOP_LIST: WorkshopListItem[] = [
  {
    slug: emotionsDetail.slug,
    title: emotionsDetail.title,
    level_label: emotionsDetail.level_label,
    summary: emotionsDetail.summary,
    tone: emotionsDetail.tone,
    sessions_label: emotionsDetail.sessions_label,
    schedule_time: emotionsDetail.schedule_time,
    schedule_summary: `${emotionsDetail.schedule_time} · ${emotionsDetail.sessions_label}`,
    sort_order: 0,
  },
  {
    slug: improDetail.slug,
    title: improDetail.title,
    level_label: improDetail.level_label,
    summary: improDetail.summary,
    tone: improDetail.tone,
    sessions_label: improDetail.sessions_label,
    schedule_time: improDetail.schedule_time,
    schedule_summary: `${improDetail.schedule_time} · ${improDetail.sessions_label}`,
    sort_order: 1,
  },
];

export function getWorkshopDetail(slug: string): WorkshopDetail | undefined {
  return WORKSHOP_DETAILS_BY_SLUG[slug];
}
