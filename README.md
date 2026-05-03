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

Guide pas à pas (variables Railway vs Vercel, `ALLOWED_HOSTS`, erreurs loopback) : **`docs/deploiement-vercel-railway.md`**.

En résumé :

1. **`VITE_API_URL`** se configure sur **Vercel** (build du front), avec l’URL HTTPS **publique** de l’API Railway — puis **redéployer** le front.
2. Ne pas utiliser **`http://127.0.0.1:8000`** pour un site en ligne (blocage loopback / PNA).
3. Sur **Railway (Django)** : `CORS_ALLOWED_ORIGINS` inclut `https://theatre-therapie.vercel.app` ; **`ALLOWED_HOSTS`** = host(s) de **l’API**, pas du front (voir le guide).
