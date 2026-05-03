# Structure du dépôt — Théâtre-thérapie Paris (nouveau site)

## Stack

| Couche | Technologie |
|--------|-------------|
| **Frontend** | Vite 6, React 19, TypeScript (`frontend/src/`) |
| **Backend** | Django 5, Django REST Framework (`backend/`) |
| **Base de données** | **SQLite** par défaut (`backend/db.sqlite3`) ; **PostgreSQL Supabase** (ou autre) si `DATABASE_URL` est défini dans `backend/.env`. Client JS Supabase optionnel côté navigateur. |

### Rôles

- **Django** : modèles, migrations, API métier (`/api/...`), admin.
- **Supabase** : hébergement Postgres + (optionnel) Auth / RLS / Storage côté produit. Le schéma SQL est partagé : les tables créées par Django existent dans le même projet Supabase.

## Arborescence

```text
New web site theatre/
├── backend/
│   ├── apps/core/          # app minimale (health check API)
│   ├── config/             # settings, urls, wsgi
│   ├── manage.py
│   ├── requirements.txt
│   └── .env.example        # DATABASE_URL (Supabase), DJANGO_SECRET_KEY, …
├── frontend/               # application Vite + React
│   ├── src/
│   │   ├── App.tsx
│   │   ├── lib/api.ts      # appels vers Django
│   │   └── integrations/supabase/
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── index.html
│   └── .env.example        # VITE_API_URL, VITE_SUPABASE_*
├── content/
├── docs/
├── _bmad/
├── _bmad-output/
└── README.md
```

## Démarrage rapide

1. **Backend** : `cd backend` → venv → `pip install -r requirements.txt` → copier `.env.example` vers `.env` (renseigner `DATABASE_URL` Supabase ou laisser SQLite par défaut sans `.env`) → `python manage.py migrate` → `python manage.py runserver`.
2. **Frontend** : `cd frontend` → `npm install` → copier `.env.example` vers `.env.local` → `npm run dev` (port 5173).

## Variables d’environnement

- **`backend/.env`** : `DATABASE_URL`, `DJANGO_SECRET_KEY`, `DJANGO_DEBUG`, `ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS` (optionnel).
- **`frontend/.env.local`** : `VITE_API_URL`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`.

## BMAD

Journal : `docs/bmad/01-project_log.md`.
