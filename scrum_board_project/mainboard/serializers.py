from rest_framework import serializers

from .models import List, Card

class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card # defining which model to be serialized
        fields = '__all__' # Mandatory since Python 3.3.0

# Serializers class translates models from python to JSON which we can send over REST API and then use in React JS.
class ListSerializer(serializers.ModelSerializer):
    cards = CardSerializer(read_only=True, many=True) # We want our List JSON structure to have cards property defined by the CardSerializer. Since each list can have multiple cards, we have defined many=True and since this data is not to be edited in List, we are defining it as read_only
    # Note define CardSerializer before ListSerializer since we are using it here

    class Meta:
        model = List # defining which model to be serialized
        fields = '__all__' # Mandatory since Python 3.3.0