# Generated by Django 5.1.4 on 2024-12-24 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_event_host'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(blank=True, default='event_images/default.jpg', null=True, upload_to='event_images'),
        ),
    ]
