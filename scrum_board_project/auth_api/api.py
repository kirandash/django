from django.contrib.auth import authenticate, login, logout

from rest_framework import status, views
from rest_framework.response import Response

from .serializers import UserSerializer

# Custom View classes inherited from superclass views.APIView that can handle JSON structure and helps us to create custom Views
class LoginView(views.APIView): # Login View to be attached to login HTML template

    # post method to handle POST request which will come from the login form in login HTML template
    def post(self, request): # request argument will hold the data sent from browser
        user = authenticate(
            username = request.data.get("username"),
            password = request.data.get("password") # request.data will hold the username and password sent from the form
        ) # authenticate is from default django auth library that will help us verify by checking the username and pwd pair in DB. The result of authenticaiton is saved in user variable

        # If result is None or not active, it means: the credentials are not present in DB
        if user is None or not user.is_active:
            return Response({
                'status': 'Unauthorized',
                'message': 'Username or password incorrect'
            }, status=status.HTTP_401_UNAUTHORIZED)

        login(request, user) # If the user data is correct we call the django built in login menthod from oAuth. This will create a session for the user and will send a session id to the user's browser
        return Response(UserSerializer(user).data) # Convert the resulting user data from python to JSON format using serializer and then send it in the API response

class LogoutView(views.APIView): # Logout View to be attached to logout HTML template

    # get method since we don't need any data from client for logout action
    def get(self, request):
        logout(request) # call the Django built in logout method from oAuth. If user is logged in, his sessio will be removed from the DB and the user will be logged out. If the user is already logged out nothing will happen.
        return Response({}, status=status.HTTP_204_NO_CONTENT) # Will return an empty response with status code No Content