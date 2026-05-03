# Theatre_therapie

Site **théâtre-thérapie Paris** : frontend **Vite + React**, backend **Django + DRF**.

## Prérequis

- Python 3.11+
- Node 20+

## Démarrage rapide

**Backend** (SQLite par défaut, fichier `backend/db.sqlite3`) :

```bash
cd backend
python -m venv .venv
# Windows : .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

**Frontend** :

```bash
cd frontend
npm install
cp .env.example .env.local   # optionnel : API URL, Supabase (sur macOS/Linux ; sous Windows : copy)
npm run dev
```

- Application : http://localhost:5173  
- API santé : http://127.0.0.1:8000/api/health/

Si un dossier `node_modules` orphelin est encore présent **à la racine** du dépôt (hors `frontend/`), tu peux le supprimer à la main : tout le front utilise désormais `frontend/node_modules`.

## Base de données

- **Développement** : SQLite (aucune variable `DATABASE_URL` requise).
- **Production / Supabase** : renseigner `DATABASE_URL` dans `backend/.env` (PostgreSQL).

## Documentation projet

Voir `docs/project-structure.md` et le journal BMAD `docs/bmad/01-project_log.md`.

## Déploiement Railway

Configuration du service API, variables et SSH : **`docs/railway.md`**.  
Dans Railway, définir la racine du service sur le dossier **`backend`**.

## Front sur Vercel + API distante

Si le front est sur **Vercel** (ex. `https://theatre-therapie.vercel.app`) et l’API sur **Railway** (ou autre) :

1. **Vercel** — variable d’environnement **`VITE_API_URL`** = URL **publique HTTPS** de l’API, sans slash final (ex. `https://xxx.up.railway.app`). Puis **redéployer** (Vite injecte cette valeur au build).
2. **Ne jamais** laisser `http://127.0.0.1:8000` en prod : le navigateur refusera d’appeler ta machine depuis Internet (message type « blocked … loopback » / CORS).
3. **Django (prod)** — `CORS_ALLOWED_ORIGINS` doit inclure l’origine exacte du front, ex. `https://theatre-therapie.vercel.app` (voir `docs/railway.md`).
