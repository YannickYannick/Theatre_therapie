# Vercel (front) + Railway (API Django) — variables au bon endroit

Ce guide corrige l’erreur du navigateur du type **« blocked … loopback »** ou **« Ateliers indisponibles »** quand le site Vercel appelle encore `http://127.0.0.1:8000`.

## Règle d’or

| Type de variable | Où la définir |
|------------------|---------------|
| `VITE_*` (API URL, Supabase…) | **Vercel** — projet du **frontend** (build Vite). **Jamais** sur le service Django Railway si tu ne build pas le front sur Railway. |
| `DJANGO_*`, `DATABASE_URL`, `CORS_*`, `ALLOWED_HOSTS` | **Railway** — service dont la racine est **`backend/`**. |

Les variables `VITE_*` sont injectées **au moment du `npm run build`** sur la machine qui build (ici Vercel). Si elles sont seulement sur Railway, le bundle Vercel **ne les voit pas** et garde la valeur par défaut du code : `http://127.0.0.1:8000` → appel bloqué depuis Internet.

## 1. Railway — service API Django

### À supprimer de ce service (si présent)

- `VITE_API_URL`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Elles ne servent pas à Gunicorn/Django sur ce dépôt.

### À corriger / renseigner

1. **`DJANGO_SECRET_KEY`**  
   Une vraie clé longue et aléatoire (pas `dev-only-change-me`).

2. **`ALLOWED_HOSTS`**  
   Liste de **noms d’hôte sans `https://`**, correspondant aux requêtes **reçues par l’API** (en-tête `Host`), par exemple :
   - `*.up.railway.app` n’est pas une syntaxe Django valide ; utilise plutôt le domaine exact affiché par Railway pour ton service, ex.  
     `ton-service-api.up.railway.app`  
   - Tu peux mettre plusieurs valeurs **séparées par une virgule** (comme dans `backend/.env.example` local).  
   **Ne mets pas** `https://theatre-therapie.vercel.app` ici : ce n’est pas le `Host` des requêtes vers Django.

3. **`CORS_ALLOWED_ORIGINS`**  
   Ici tu mets l’origine du **front** (avec `https://`) :
   - `https://theatre-therapie.vercel.app`  
   - Tu peux ajouter `,http://localhost:5173` pour le dev local en parallèle.

4. **`CSRF_TRUSTED_ORIGINS`**  
   URLs **HTTPS de l’API elle-même** (pour l’admin Django), par exemple :
   - `https://ton-service-api.up.railway.app`

5. **`DATABASE_URL`**  
   Postgres (plugin Railway ou Supabase), obligatoire en prod si tu n’utilises pas SQLite sur le conteneur (en pratique : Postgres sur Railway).

### URL publique de l’API

Dans Railway : ton service → **Settings** → **Networking** / domaine public.  
Copie l’URL de base, ex. `https://theatre-therapie-production-xxxx.up.railway.app` (exemple) — **sans** `/` final. Tu en auras besoin pour Vercel ci-dessous.

## 2. Vercel — projet frontend

Dans **Settings → Environment Variables** (pour **Production** au minimum) :

| Variable | Exemple de valeur |
|----------|-------------------|
| `VITE_API_URL` | `https://TON-SERVICE-API.up.railway.app` (l’URL Railway copiée ci-dessus, **sans** slash final) |
| `VITE_SUPABASE_URL` | URL réelle du projet Supabase |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Clé anon / publishable réelle |

Ensuite : **Redeploy** le dernier déploiement (ou un commit vide) pour **rebuild** avec ces variables. Un simple changement de variable sans nouveau build laisse l’ancien JS avec `127.0.0.1`.

## 3. Vérifications rapides

- Dans le navigateur sur le site Vercel : F12 → **Network** → recharger → les appels `/api/workshops/` doivent partir vers **ton domaine Railway**, pas vers `127.0.0.1`.
- `GET https://TON-API.up.railway.app/api/health/` doit répondre `{"status":"ok",...}`.
- `GET https://TON-API.up.railway.app/api/workshops/` doit renvoyer du JSON (liste d’ateliers).

## Récap des erreurs fréquentes

| Mauvaise config | Conséquence |
|-----------------|-------------|
| `VITE_API_URL` uniquement sur Railway | Le build Vercel n’a pas l’URL → reste `127.0.0.1` → loopback bloqué. |
| `ALLOWED_HOSTS=https://theatre-therapie.vercel.app` | Mauvais : ce n’est pas le host de l’API ; risque de **400 Bad Request** sur l’API. |
| Oublier `CORS_ALLOWED_ORIGINS` avec l’URL Vercel | Erreur CORS dans la console quand le front appelle l’API. |

Voir aussi **`docs/railway.md`** pour le détail des variables Django sur Railway.
