from rest_framework import viewsets, permissions
from anime.serializers import CreatorSerializer, AnimeSerializer, UserSerializer
from anime.models import Creator, Anime
from django.contrib.auth.models import User


class CreatorViewSet(viewsets.ModelViewSet):
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class AnimeViewSet(viewsets.ModelViewSet):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
