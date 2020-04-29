from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.blog), # r: regExp
    url(r'^category/(?P<c_id>[\-\w]+)/$', views.category), # c_id
    url(r'^post/(?P<p_id>[\-\w]+)/$', views.post)
]