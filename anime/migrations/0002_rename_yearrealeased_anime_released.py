# Generated by Django 4.0.1 on 2022-01-25 21:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('anime', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='anime',
            old_name='yearRealeased',
            new_name='released',
        ),
    ]
