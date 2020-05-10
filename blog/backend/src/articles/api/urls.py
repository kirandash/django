from django.urls import path

from .views import ArticleListView, ArticleDetailView

urlpatterns = [
    path('', ArticleListView.as_view()),
    # Primary key For individual articles view
    path('<pk>', ArticleDetailView.as_view())
]
