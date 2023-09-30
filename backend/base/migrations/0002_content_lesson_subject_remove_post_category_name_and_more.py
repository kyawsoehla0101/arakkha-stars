# Generated by Django 4.2.2 on 2023-09-21 20:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('slug', models.SlugField(default=None, editable=False, null=True, unique=True)),
                ('create_date', models.DateField(auto_now_add=True, null=True)),
                ('update_date', models.DateField(auto_now=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('decsription', models.TextField(blank=True, null=True)),
                ('create_date', models.DateField(auto_now_add=True, null=True)),
                ('update_date', models.DateField(auto_now=True, null=True)),
                ('slug', models.SlugField(blank=True, editable=False, max_length=30, null=True, unique=True)),
                ('content', models.ForeignKey(blank=True, default='general', null=True, on_delete=django.db.models.deletion.CASCADE, to='base.content')),
            ],
            options={
                'ordering': ['-create_date'],
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('slug', models.SlugField(default=None, editable=False, null=True, unique=True)),
                ('create_date', models.DateField(auto_now_add=True, null=True)),
                ('update_date', models.DateField(auto_now=True, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='post',
            name='category_name',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.DeleteModel(
            name='Post',
        ),
        migrations.AddField(
            model_name='content',
            name='subject',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.subject'),
        ),
    ]
