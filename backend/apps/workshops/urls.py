from django.urls import path

from . import views

urlpatterns = [
    path("", views.WorkshopListView.as_view(), name="workshop-list"),
    path("<slug:slug>/", views.WorkshopDetailView.as_view(), name="workshop-detail"),
]
