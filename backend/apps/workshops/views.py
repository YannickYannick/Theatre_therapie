from rest_framework import generics

from .models import Workshop
from .serializers import WorkshopDetailSerializer, WorkshopListSerializer


class WorkshopListView(generics.ListAPIView):
    serializer_class = WorkshopListSerializer

    def get_queryset(self):
        return Workshop.objects.filter(is_published=True).order_by("sort_order", "pk")


class WorkshopDetailView(generics.RetrieveAPIView):
    serializer_class = WorkshopDetailSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return Workshop.objects.filter(is_published=True).prefetch_related("sessions")
