from rest_framework import viewsets
from anime.serializers import CreatorSerializer, AnimeSerializer
from anime.models import Creator, Anime


class CreatorViewSet(viewsets.ModelViewSet):
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer


class AnimeViewSet(viewsets.ModelViewSet):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
