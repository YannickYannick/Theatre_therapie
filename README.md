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
npm install
cp .env.example .env.local   # optionnel : API URL, Supabase
npm run dev
```

- Application : http://localhost:5173  
- API santé : http://127.0.0.1:8000/api/health/

## Base de données

- **Développement** : SQLite (aucune variable `DATABASE_URL` requise).
- **Production / Supabase** : renseigner `DATABASE_URL` dans `backend/.env` (PostgreSQL).

## Documentation projet

Voir `docs/project-structure.md` et le journal BMAD `docs/bmad/01-project_log.md`.
