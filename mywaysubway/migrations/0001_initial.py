# Generated by Django 2.1.5 on 2019-03-01 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='제목 없음', max_length=30)),
                ('bread', models.CharField(default=' ', max_length=30)),
                ('cheeze', models.CharField(default=' ', max_length=30)),
                ('vegetable', models.CharField(default=' ', max_length=30)),
                ('source', models.CharField(default=' ', max_length=30)),
                ('topping', models.CharField(default=' ', max_length=30)),
                ('cookie', models.CharField(default=' ', max_length=30)),
                ('beverage', models.CharField(default=' ', max_length=30)),
                ('introduction', models.TextField(default='설명 없음')),
            ],
        ),
    ]
