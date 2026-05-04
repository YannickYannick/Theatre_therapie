# Données initiales (reprise du contenu front historique).

from django.db import migrations


def seed_workshops(apps, schema_editor):
    Workshop = apps.get_model("workshops", "Workshop")
    WorkshopSession = apps.get_model("workshops", "WorkshopSession")

    if Workshop.objects.filter(slug="emotions").exists():
        return

    emotions = Workshop.objects.create(
        slug="emotions",
        title="Émotions encore et toujours",
        badge="Atelier · Niveau 2",
        level_label="Niveau 2",
        summary=(
            "Centré sur les émotions au plateau et leur utilisation juste et consciente. "
            "On y travaille la sincérité, la précision du jeu, l'écoute et la présence."
        ),
        tagline="Centré sur les émotions au plateau et leur utilisation juste et consciente.",
        pitch="On y travaille la sincérité, la précision du jeu, l'écoute et la présence.",
        tone="sky",
        schedule_time="14h – 16h",
        dates_text="10, 17, 24, 31 mai · 7, 14, 21 juin",
        location="L'Âge d'or — 26 rue du Dr Magnan, 75013 Paris",
        max_students=8,
        sessions_count=7,
        price_display="175 € (25 €/séance)",
        program_subtitle="",
        highlight_title="",
        highlight_text="",
        meta_title="Émotions encore et toujours · Atelier Niveau 2 — Théâtre Thérapie",
        meta_description=(
            "Atelier de théâtre niveau 2 à l'Âge d'or (Paris 13e). 7 séances pour travailler les émotions, "
            "la sincérité et la présence au plateau."
        ),
        is_published=True,
        sort_order=0,
    )

    emotions_sessions = [
        (
            "Les émotions comme point de départ",
            "Explorer les émotions dans le corps et apprendre à les reconnaître sans les surjouer.",
        ),
        (
            "Sincérité et vérité de jeu",
            "Apprendre à jouer simple, juste, et connecté à ce que l'on ressent vraiment.",
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
            "Passer d'une émotion à l'autre",
            "Travailler les transitions émotionnelles et la construction de scènes plus complexes.",
        ),
        (
            "Carte blanche émotionnelle",
            "Créer une petite forme personnelle ou collective à partir d'une émotion choisie.",
        ),
    ]
    for i, (title, description) in enumerate(emotions_sessions):
        WorkshopSession.objects.create(
            workshop=emotions, sort_order=i, title=title, description=description
        )

    impro = Workshop.objects.create(
        slug="impro",
        title="Et... IMPRO",
        badge="Atelier · Tous niveaux",
        level_label="Tous niveaux",
        summary=(
            "Centré sur le jeu collectif et la prise de risque. On y travaille la confiance, "
            "l'écoute, la cohésion et le plaisir du plateau."
        ),
        tagline="Centré sur le jeu collectif et la prise de risque.",
        pitch="On y travaille la confiance, l'écoute, la cohésion et le plaisir du plateau.",
        tone="mint",
        schedule_time="16h – 18h",
        dates_text="17, 24, 31 mai · 7, 14, 21, 28 juin",
        location="L'Âge d'or — 26 rue du Dr Magnan, 75013 Paris",
        max_students=8,
        sessions_count=7,
        price_display="175 € (25 €/séance)",
        program_subtitle="",
        highlight_title="Objectif final",
        highlight_text="Un match d'improvisation devant un public, dans un vrai format de scène.",
        meta_title="Et... IMPRO · Atelier d'improvisation — Théâtre Thérapie",
        meta_description=(
            "Atelier d'improvisation théâtrale à l'Âge d'or (Paris 13e). 7 séances jusqu'à un match d'impro "
            "devant un public."
        ),
        is_published=True,
        sort_order=1,
    )

    impro_sessions = [
        (
            "Cohésion, confiance et lâcher-prise",
            "Créer un climat de sécurité, libérer la spontanéité et supprimer l'autocensure.",
        ),
        (
            "Écoute et construction collective",
            "Apprendre à rebondir sur l'autre et co-construire sans bloquer.",
        ),
        (
            "Émotions et statuts",
            "Explorer la palette émotionnelle et comprendre les rapports de statut en scène.",
        ),
        (
            "Personnages et univers",
            "Créer des personnages incarnés et s'adapter à des univers variés.",
        ),
        (
            "Narration et structure",
            "Construire une histoire claire avec un début, un problème et une résolution.",
        ),
        (
            "Préparation du match d'impro",
            "Maîtriser les formats de match et gérer le rythme sous contraintes.",
        ),
        (
            "Match final",
            "Jouer devant un public dans un vrai format de match d'improvisation.",
        ),
    ]
    for i, (title, description) in enumerate(impro_sessions):
        WorkshopSession.objects.create(
            workshop=impro, sort_order=i, title=title, description=description
        )


def unseed_workshops(apps, schema_editor):
    Workshop = apps.get_model("workshops", "Workshop")
    Workshop.objects.filter(slug__in=("emotions", "impro")).delete()


class Migration(migrations.Migration):
    dependencies = [
        ("workshops", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_workshops, unseed_workshops),
    ]
