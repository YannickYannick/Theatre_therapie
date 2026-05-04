# Mise à jour du lieu des ateliers : théâtre L'Âge d'or (Paris 13e).

from django.db import migrations, models

NEW_LOCATION = "L'Âge d'or, 26 rue du Dr Magnan, 75013 Paris"


def forwards(apps, schema_editor):
    Workshop = apps.get_model("workshops", "Workshop")
    Workshop.objects.filter(slug__in=("emotions", "impro")).update(location=NEW_LOCATION)


class Migration(migrations.Migration):
    dependencies = [
        ("workshops", "0002_seed_workshops"),
    ]

    operations = [
        migrations.RunPython(forwards, migrations.RunPython.noop),
        migrations.AlterField(
            model_name="workshop",
            name="location",
            field=models.CharField(
                default=NEW_LOCATION,
                max_length=120,
                verbose_name="lieu",
            ),
        ),
    ]
