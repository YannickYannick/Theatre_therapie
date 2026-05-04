# Dates des séances — atelier Impro (7 séances).

from django.db import migrations

IMPRO_DATES = "17, 24, 31 mai · 7, 14, 21, 28 juin"


def forwards(apps, schema_editor):
    Workshop = apps.get_model("workshops", "Workshop")
    Workshop.objects.filter(slug="impro").update(dates_text=IMPRO_DATES)


class Migration(migrations.Migration):
    dependencies = [
        ("workshops", "0003_workshop_location_age_dor"),
    ]

    operations = [
        migrations.RunPython(forwards, migrations.RunPython.noop),
    ]
