from django.contrib.auth.models import User

from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User # model from built in django oAuth User class - no need to create on our own
        fields = ('id', 'username')