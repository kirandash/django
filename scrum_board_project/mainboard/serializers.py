from rest_framework import serializers

from .models import List, Card

# Serializers class translates models from python to JSON which we can send over REST API and then use in React JS.
class ListSerializer(serializers.ModelSerializer):

    class Meta:
        model = List # defining which model to be serialized
        fields = '__all__' # Mandatory since Python 3.3.0

class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card # defining which model to be serialized
        fields = '__all__' # Mandatory since Python 3.3.0