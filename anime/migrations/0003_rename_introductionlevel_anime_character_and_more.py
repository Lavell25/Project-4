# Generated by Django 4.0.1 on 2022-01-26 01:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('anime', '0002_rename_yearrealeased_anime_released'),
    ]

    operations = [
        migrations.RenameField(
            model_name='anime',
            old_name='introductionLevel',
            new_name='character',
        ),
        migrations.RenameField(
            model_name='anime',
            old_name='mostPopularCharacter',
            new_name='level',
        ),
        migrations.AlterField(
            model_name='anime',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='animes', to='anime.creator'),
        ),
    ]
