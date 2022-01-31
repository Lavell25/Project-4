from django.db import models
from django.urls import reverse


# Create your models here.


class Creator(models.Model):
    name = models.CharField(max_length=256)
    country = models.CharField(max_length=256)
    image = models.CharField(max_length=256)

    def __str__(self):
        return self.name


class Anime(models.Model):
    title = models.CharField(max_length=256)
    released = models.DateField()
    description = models.CharField(max_length=1000)
    favortieCharacter = models.CharField(max_length=256)
    level = models.CharField(max_length=256)
    creator = models.ForeignKey(
        Creator, on_delete=models.CASCADE, related_name='animes', null=True)
    image = models.CharField(max_length=1000, default='www.google.com')

    def __str__(self):
        return self.title
