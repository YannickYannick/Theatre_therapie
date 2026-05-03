# Contexte pour les agents (Cursor)

Ce dépôt est configuré pour **Cursor** et **BMAD Method** (module BMM).

## Démarrage rapide

1. Ouvrir ce dossier comme racine de projet dans Cursor.
2. Utiliser les **skills** BMAD dans `.agents/skills/` (ex. `bmad-help`, `bmad-create-prd`, `bmad-agent-dev`).
3. Les **règles** Cursor du projet sont dans `.cursor/rules/` (BMAD + contexte site théâtre).

## Arborescence utile

| Élément | Rôle |
|--------|------|
| `frontend/` | Frontend Vite + React (`frontend/src/`, appels API Django, client Supabase) — voir `docs/project-structure.md` |
| `backend/` | Django + DRF, migrations sur Postgres Supabase (`DATABASE_URL`) |
| `frontend/public/` | Assets statiques du front (images, favicon) |
| `content/` | Textes / contenus optionnels hors code |
| `_bmad/` | Configuration et cœur BMAD |
| `_bmad-output/` | Artefacts générés (plans, sprints, etc.) |
| `docs/` | Connaissance projet, recherche, journal `docs/bmad/` |
| `.agents/skills/` | Workflows invoquables par l’agent |

## Utilisateur

Prénom configuré pour BMAD : **Yann**. Langue : **français**.

Pour la procédure détaillée des phases (analyse → implémentation), suivre les instructions des skills BMAD ou la documentation sur [bmadcode.com](https://bmadcode.com/).
