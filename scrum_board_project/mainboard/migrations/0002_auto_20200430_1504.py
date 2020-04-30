# Generated by Django 3.0.5 on 2020-04-30 15:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainboard', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='business_value',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='card',
            name='list',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.DO_NOTHING, related_name='cards', to='mainboard.List'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='card',
            name='story_points',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
