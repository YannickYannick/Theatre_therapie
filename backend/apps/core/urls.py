from django.urls import include, path

from . import views

urlpatterns = [
    path("health/", views.health, name="health"),
    path("workshops/", include("apps.workshops.urls")),
]
