# Déploiement Railway — Théâtre-thérapie

## Service Django (API) — identifiants projet

| Paramètre | Valeur |
|-----------|--------|
| Projet | `a32a6714-e6db-4f25-b94d-68b4f8dfbea2` |
| Environnement | `fd7f19c6-3f95-4366-95b7-6a712e29c877` |
| Service (API) | `b9a5660a-93a7-491d-a7d7-47abcada28a9` |

### Réglages dans Railway (dashboard)

1. **Root Directory** : `backend` (racine du code Python / `manage.py`).
2. Fichier **`backend/railway.toml`** : build (collectstatic) + déploiement (migrate + gunicorn).
3. Attacher **PostgreSQL** (plugin Railway) *ou* coller une **`DATABASE_URL`** Supabase (Postgres en mode session, port 5432).

### Variables d’environnement (service API)

| Variable | Obligatoire | Description |
|----------|-------------|-------------|
| `DJANGO_SETTINGS_MODULE` | oui | `config.settings.production` |
| `DJANGO_SECRET_KEY` | oui | Clé secrète longue et aléatoire |
| `DATABASE_URL` | oui en prod | Injectée automatiquement si plugin Postgres Railway ; sinon URI Postgres (ex. Supabase) |
| `PORT` | non | Définie par Railway — ne pas surcharger |
| `CORS_ALLOWED_ORIGINS` | recommandé | Origines du front, séparées par des virgules. Ex. `https://ton-front.up.railway.app,http://localhost:5173` |
| `CSRF_TRUSTED_ORIGINS` | recommandé | URLs HTTPS du **backend** (admin, POST). Ex. `https://ton-api.up.railway.app` |
| `ALLOWED_HOSTS` | optionnel | Par défaut le code accepte `.up.railway.app` ; ajoute ton domaine custom si besoin (liste séparée par virgules) |
| `CONN_MAX_AGE` | optionnel | Durée de persistance des connexions Postgres (secondes), défaut `60` |
| `DJANGO_SECURE_SSL_REDIRECT` | optionnel | `true` pour forcer les redirections HTTPS Django (souvent inutile derrière Railway) |

### SSH sur le service

```bash
railway ssh --project=a32a6714-e6db-4f25-b94d-68b4f8dfbea2 --environment=fd7f19c6-3f95-4366-95b7-6a712e29c877 --service=b9a5660a-93a7-491d-a7d7-47abcada28a9
```

### Définir les variables en CLI (après `railway link`)

Exemples (adapter les valeurs) :

```bash
railway variables --set "DJANGO_SETTINGS_MODULE=config.settings.production" --service b9a5660a-93a7-491d-a7d7-47abcada28a9
railway variables --set "DJANGO_SECRET_KEY=<génère-une-clé-longue>" --service b9a5660a-93a7-491d-a7d7-47abcada28a9
railway variables --set "CSRF_TRUSTED_ORIGINS=https://TON-SERVICE.up.railway.app" --service b9a5660a-93a7-491d-a7d7-47abcada28a9
```

Référencer la variable `DATABASE_URL` depuis le plugin Postgres dans l’UI Railway si besoin.

### Frontend (Vercel / autre service Railway / statique)

Lors du **build** Vite, définir :

- `VITE_API_URL` = URL publique de l’API Django (ex. `https://ton-api.up.railway.app`), **sans** slash final.

Puis ajouter cette origine dans `CORS_ALLOWED_ORIGINS` côté Django.
