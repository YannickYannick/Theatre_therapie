from django.db import models


class Workshop(models.Model):
    """Atelier affiché sur le site (fiche détail + carte d'accueil)."""

    class Tone(models.TextChoices):
        SKY = "sky", "Ciel"
        MINT = "mint", "Menthe"

    slug = models.SlugField("identifiant URL", max_length=64, unique=True)
    title = models.CharField("titre", max_length=200)
    badge = models.CharField("pastille (ex. Atelier · Niveau 2)", max_length=120)
    level_label = models.CharField("niveau (carte accueil)", max_length=80)
    summary = models.TextField("résumé (carte accueil)")
    tagline = models.CharField(max_length=300)
    pitch = models.TextField()
    tone = models.CharField(max_length=10, choices=Tone.choices, default=Tone.SKY)

    schedule_time = models.CharField("horaires affichés", max_length=80)
    dates_text = models.CharField("dates des séances", max_length=200)
    location = models.CharField(
        "lieu",
        max_length=120,
        default="L'Âge d'or — 26 rue du Dr Magnan, 75013 Paris",
    )
    max_students = models.PositiveSmallIntegerField("places max", default=8)
    sessions_count = models.PositiveSmallIntegerField("nombre de séances", default=7)
    price_display = models.CharField("tarif affiché", max_length=120, default="175 € (25 €/séance)")

    program_subtitle = models.CharField(
        "sous-titre du programme",
        max_length=200,
        blank=True,
        help_text="Vide = texte par défaut à partir du nombre de séances.",
    )

    highlight_title = models.CharField(
        "titre encadré optionnel",
        max_length=120,
        blank=True,
        help_text="Ex. « Objectif final » sous les infos pratiques.",
    )
    highlight_text = models.TextField("texte encadré optionnel", blank=True)

    meta_title = models.CharField("meta title", max_length=200, blank=True)
    meta_description = models.TextField("meta description", blank=True)

    is_published = models.BooleanField("publié", default=True)
    sort_order = models.PositiveSmallIntegerField("ordre d'affichage", default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["sort_order", "pk"]
        verbose_name = "atelier"
        verbose_name_plural = "ateliers"

    def __str__(self) -> str:
        return self.title

    @property
    def sessions_label(self) -> str:
        n = self.sessions_count
        return f"{n} séance" if n <= 1 else f"{n} séances"


class WorkshopSession(models.Model):
    """Séance / module du programme d'un atelier."""

    workshop = models.ForeignKey(
        Workshop,
        on_delete=models.CASCADE,
        related_name="sessions",
        verbose_name="atelier",
    )
    sort_order = models.PositiveSmallIntegerField("ordre", default=0)
    title = models.CharField(max_length=200)
    description = models.TextField()

    class Meta:
        ordering = ["sort_order", "pk"]
        verbose_name = "séance (programme)"
        verbose_name_plural = "séances (programme)"

    def __str__(self) -> str:
        return f"{self.workshop.slug} · {self.title}"
