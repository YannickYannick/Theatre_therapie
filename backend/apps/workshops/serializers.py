from rest_framework import serializers

from .models import Workshop, WorkshopSession


class WorkshopSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkshopSession
        fields = ("sort_order", "title", "description")


class WorkshopListSerializer(serializers.ModelSerializer):
    """Aperçu pour la page d'accueil."""

    sessions_label = serializers.CharField(read_only=True)
    schedule_summary = serializers.SerializerMethodField()

    class Meta:
        model = Workshop
        fields = (
            "slug",
            "title",
            "level_label",
            "summary",
            "tone",
            "sessions_label",
            "schedule_time",
            "schedule_summary",
            "sort_order",
        )

    def get_schedule_summary(self, obj: Workshop) -> str:
        return f"{obj.schedule_time} · {obj.sessions_label}"


class WorkshopDetailSerializer(serializers.ModelSerializer):
    sessions = WorkshopSessionSerializer(many=True, read_only=True)
    sessions_label = serializers.CharField(read_only=True)
    program_subtitle_resolved = serializers.SerializerMethodField()

    class Meta:
        model = Workshop
        fields = (
            "slug",
            "title",
            "badge",
            "level_label",
            "summary",
            "tagline",
            "pitch",
            "tone",
            "schedule_time",
            "dates_text",
            "location",
            "max_students",
            "sessions_count",
            "sessions_label",
            "price_display",
            "program_subtitle",
            "program_subtitle_resolved",
            "highlight_title",
            "highlight_text",
            "meta_title",
            "meta_description",
            "sessions",
        )

    def get_program_subtitle_resolved(self, obj: Workshop) -> str:
        if obj.program_subtitle.strip():
            return obj.program_subtitle
        n = obj.sessions_count
        return f"{n} séances pour explorer, ressentir et incarner."
