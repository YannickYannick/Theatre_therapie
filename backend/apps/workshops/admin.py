from django.contrib import admin

from .models import Workshop, WorkshopSession


class WorkshopSessionInline(admin.TabularInline):
    model = WorkshopSession
    extra = 0
    ordering = ("sort_order", "pk")


@admin.register(Workshop)
class WorkshopAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "tone", "is_published", "sort_order")
    list_filter = ("is_published", "tone")
    search_fields = ("title", "slug")
    ordering = ("sort_order", "pk")
    inlines = [WorkshopSessionInline]
    fieldsets = (
        (None, {"fields": ("slug", "title", "is_published", "sort_order")}),
        ("Contenu", {"fields": ("badge", "level_label", "summary", "tagline", "pitch", "tone")}),
        ("Infos pratiques", {"fields": ("schedule_time", "dates_text", "location", "max_students", "sessions_count", "price_display")}),
        ("Programme", {"fields": ("program_subtitle",)}),
        ("Encadré optionnel", {"fields": ("highlight_title", "highlight_text"), "classes": ("collapse",)}),
        ("SEO", {"fields": ("meta_title", "meta_description"), "classes": ("collapse",)}),
    )


@admin.register(WorkshopSession)
class WorkshopSessionAdmin(admin.ModelAdmin):
    list_display = ("title", "workshop", "sort_order")
    list_filter = ("workshop",)
    ordering = ("workshop", "sort_order", "pk")
