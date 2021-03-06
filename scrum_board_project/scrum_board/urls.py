"""scrum_board URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
# from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls), # default url added by django for admin path
    path('mainboard/', include('mainboard.urls')), # We will load all the views for mainboard app through mainboard. Ex: mainboard/lists, mainboard/cards.
    # It tells Django that, In url once mainboard/ is matched, for the rest of the url look in mainboard/urls.py file
    # using regexp: url(r'^mainboard/', include('mainboard.urls')), note: at the ending of regex string we don't have $ since that is not the end of the string, the rest of the url path is to be matched from mainboard/urls.py file
    path('auth_api/', include('auth_api.urls')), # We will load all the views for auth_api app through auth_api. Ex: auth_api/login, auth_api/logout.
]
