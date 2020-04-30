from rest_framework.generics import ListAPIView

from .serializers import ListSerializer, CardSerializer
from .models import List, Card

# ListAPIView is basically a component that gets a request from client ex: React. ---> query the data it needs in python ---> convert it using serializer and ---> send the result data back to client (React) in JSON format
class ListApi(ListAPIView):
    queryset = List.objects.all() # Get all rows from List table (mainboard_list) from DB
    serializer_class = ListSerializer # convert queried data into JSON format

class CardApi(ListAPIView):
    queryset = Card.objects.all() # Get all rows from Card table (mainboard_card) from DB
    serializer_class = CardSerializer # convert queried data into JSON format