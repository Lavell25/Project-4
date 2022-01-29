from rest_framework import serializers
from .models import Anime, Creator
from django.contrib.auth.models import User


class CreatorSerializer(serializers.ModelSerializer):
    animes = serializers.StringRelatedField(many=True)

    class Meta:
        model = Creator
        fields = '__all__'


class AnimeSerializer(serializers.HyperlinkedModelSerializer):
    creator = serializers.StringRelatedField()

    class Meta:
        model = Anime
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        return User.objects.create_superuser(**validated_data)

    class Meta:
        model = User
        fields = ['username', 'password', 'email']
