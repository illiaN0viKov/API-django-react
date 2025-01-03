# Generated by Django 5.1.4 on 2024-12-26 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_event_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='host',
        ),
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(blank=True, default='event_images/default.jpg', null=True, upload_to='event_images'),
        ),
    ]
