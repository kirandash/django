from django.urls import path

from .api import LoginView, LogoutView

# Mapping API endpoint views to urls
urlpatterns = [
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view())  # Note: Since our views are classes and not methods, we need to call .as_view() since urlPatterns needs views as methods.
]