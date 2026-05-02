import os

from django.core.asgi import get_asgi_application

if "DJANGO_SETTINGS_MODULE" not in os.environ:
    if os.environ.get("RAILWAY_ENVIRONMENT"):
        os.environ["DJANGO_SETTINGS_MODULE"] = "config.settings.production"
    else:
        os.environ["DJANGO_SETTINGS_MODULE"] = "config.settings.local"

application = get_asgi_application()
