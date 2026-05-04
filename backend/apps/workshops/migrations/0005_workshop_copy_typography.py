# Harmonise lieu, horaires et meta_title (tirets longs / demi-cadratins) avec le front.

from django.db import migrations, models

NEW_DEFAULT_LOCATION = "L'Âge d'or, 26 rue du Dr Magnan, 75013 Paris"


def forwards(apps, schema_editor):
    Workshop = apps.get_model("workshops", "Workshop")
    for w in Workshop.objects.all():
        changed = []
        if w.location and " — " in w.location:
            w.location = w.location.replace(" — ", ", ")
            changed.append("location")
        if w.schedule_time and "\u2013" in w.schedule_time:
            w.schedule_time = w.schedule_time.replace(" \u2013 ", " à ")
            changed.append("schedule_time")
        if w.meta_title and " — Théâtre" in w.meta_title:
            w.meta_title = w.meta_title.replace(" — Théâtre", " · Théâtre")
            changed.append("meta_title")
        elif w.meta_title and " — " in w.meta_title:
            w.meta_title = w.meta_title.replace(" — ", " · ")
            changed.append("meta_title")
        if changed:
            w.save(update_fields=changed)


class Migration(migrations.Migration):
    dependencies = [
        ("workshops", "0004_impro_dates_text"),
    ]

    operations = [
        migrations.RunPython(forwards, migrations.RunPython.noop),
        migrations.AlterField(
            model_name="workshop",
            name="location",
            field=models.CharField(
                default=NEW_DEFAULT_LOCATION,
                max_length=120,
                verbose_name="lieu",
            ),
        ),
    ]
