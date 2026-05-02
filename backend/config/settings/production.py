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

# Pool de connexions Postgres (Railway / Supabase)
_engine = DATABASES["default"].get("ENGINE", "")
if "sqlite" not in _engine:
    DATABASES["default"]["CONN_MAX_AGE"] = env.int("CONN_MAX_AGE", default=60)
    # Railway / Supabase : connexion TLS souvent requise si l’URL ne précise pas sslmode
    if env.bool("DATABASE_SSL_REQUIRE", default=True):
        _opts = DATABASES["default"].setdefault("OPTIONS", {})
        _opts.setdefault("sslmode", "require")

# Sécurité renforcée derrière HTTPS
if env.bool("DJANGO_SECURE_SSL_REDIRECT", default=False):
    SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
