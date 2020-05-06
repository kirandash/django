# from django.conf.urls import url
from rest_framework.routers import DefaultRouter

# from .api import ListApi, CardApi
from .api import ListViewSet, CardViewSet

# router configuration for REST API endpoints using restframework router
router = DefaultRouter()
router.register(r'lists', ListViewSet)
router.register(r'cards', CardViewSet)

# urlpatterns = [
#     url(r'^lists$', ListApi.as_view()), # url(r'regexstring', )
#     # First argument: regular expression string. r stands for raw string, means python will ignore any special characters inside the string. ^ caret sign at beginning tells python that this is the beginning of the string we are trying to match. $ sign at the end tells python that this is the end of string we are trying to match. Thus this regex will check for url that exactly matches the string 'lists'.
#     # Second argument: View fn to load when the url is matched. Our views are classes inherited from ListAPIView. Thus, we will use classname.as_view() to get the view fn to call.
#     # summary: if we get lists in url, call the ListApi
#     url(r'^cards$', CardApi.as_view()), # If we get cards in url, call the ListApi
# ]

urlpatterns = router.urls