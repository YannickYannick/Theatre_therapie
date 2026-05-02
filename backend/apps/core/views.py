from django.http import JsonResponse


def health(_request):
    """Healthcheck Railway / LB : pas de DRF (évite 406 selon le header Accept)."""
    return JsonResponse({"status": "ok", "service": "theatre-therapy-paris-api"})
