# Generated by Django 4.2.7 on 2024-06-18 18:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('guests', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='guests',
            options={},
        ),
        migrations.RemoveField(
            model_name='guests',
            name='cat',
        ),
        migrations.RemoveField(
            model_name='guests',
            name='is_published',
        ),
        migrations.RemoveField(
            model_name='guests',
            name='photo',
        ),
        migrations.RemoveField(
            model_name='guests',
            name='slug',
        ),
    ]
