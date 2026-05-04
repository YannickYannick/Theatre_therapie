# Programme atelier « Émotions » aligné sur le planning PDF (7 séances).

from django.db import migrations


EMOTIONS_SESSIONS = [
    (
        "Les émotions comme point de départ",
        "Explorer les émotions dans le corps et apprendre à les reconnaître sans les surjouer.",
    ),
    (
        "La colère et la tension juste",
        "Travailler l'affirmation émotionnelle sans excès ni agressivité.",
    ),
    (
        "La peur et la vulnérabilité",
        "Explorer les émotions plus fragiles et apprendre à les rendre visibles sans se protéger.",
    ),
    (
        "La joie et la légèreté",
        "Trouver une énergie vivante, simple et authentique, sans surjeu.",
    ),
    (
        "La tristesse juste",
        "Accueillir la tristesse sans s'effondrer ni la retenir, pour la rendre visible avec douceur, simplicité et vérité.",
    ),
    (
        "Passer d'une émotion à l'autre",
        "Travailler les transitions émotionnelles et la construction de scènes plus complexes.",
    ),
    (
        "Carte blanche émotionnelle ✦",
        "Créer une petite forme personnelle ou collective à partir d'une émotion choisie.",
    ),
]


def forwards(apps, schema_editor):
    Workshop = apps.get_model("workshops", "Workshop")
    WorkshopSession = apps.get_model("workshops", "WorkshopSession")
    try:
        w = Workshop.objects.get(slug="emotions")
    except Workshop.DoesNotExist:
        return
    WorkshopSession.objects.filter(workshop=w).delete()
    for i, (title, description) in enumerate(EMOTIONS_SESSIONS):
        WorkshopSession.objects.create(
            workshop=w, sort_order=i, title=title, description=description
        )


class Migration(migrations.Migration):
    dependencies = [
        ("workshops", "0005_workshop_copy_typography"),
    ]

    operations = [
        migrations.RunPython(forwards, migrations.RunPython.noop),
    ]
