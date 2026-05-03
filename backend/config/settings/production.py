"""
Django en production (Railway, etc.).

Variables attendues : voir docs/railway.md
"""
from .base import *  # noqa: F401,F403

DEBUG = False

SECRET_KEY = env("DJANGO_SECRET_KEY")

# Railway : TLS terminé en amont
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
USE_X_FORWARDED_HOST = True

# Sous-domaines Railway (*.up.railway.app) ; compléter avec ton domaine custom si besoin
ALLOWED_HOSTS = env.list(
    "ALLOWED_HOSTS",
    default=[".up.railway.app", ".railway.app"],
)

# Origines autorisées pour les POST sécurisés (admin, formulaires) — ex. https://ton-api.up.railway.app
CSRF_TRUSTED_ORIGINS = env.list("CSRF_TRUSTED_ORIGINS", default=[])

# CORS : le front Vercel doit être listé explicitement. `FRONTEND_ORIGIN` (une seule URL, sans slash
# final) est fusionnée dans `CORS_ALLOWED_ORIGINS` pour limiter les oublis sur Railway.
_origins = list(CORS_ALLOWED_ORIGINS)
_front = env("FRONTEND_ORIGIN", default="", cast=str).strip().rstrip("/")
if _front and _front not in _origins:
    _origins.append(_front)
CORS_ALLOWED_ORIGINS = _origins

# Optionnel : autoriser tout déploiement *.vercel.app (previews). Désactivé par défaut.
if env.bool("CORS_ALLOW_VERCEL_REGEX", default=False):
    CORS_ALLOWED_ORIGIN_REGEXES = [
        r"^https://[\w.-]+\.vercel\.app$",
    ]

# Pool de connexions Postgres (Railway / Supabase)
_engine = DATABASES["default"].get("ENGINE", "")
if "sqlite" not in _engine:
    DATABASES["default"]["CONN_MAX_AGE"] = env.int("CONN_MAX_AGE", default=60)
    # Supabase / Postgres public : activer `DATABASE_SSL_REQUIRE=true` ou mettre sslmode dans l’URL.
    # Défaut false : le plugin Postgres Railway gère souvent déjà TLS dans `DATABASE_URL`.
    if env.bool("DATABASE_SSL_REQUIRE", default=False):
        _opts = DATABASES["default"].setdefault("OPTIONS", {})
        _opts.setdefault("sslmode", "require")

# Sécurité renforcée derrière HTTPS
if env.bool("DJANGO_SECURE_SSL_REDIRECT", default=False):
    SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
