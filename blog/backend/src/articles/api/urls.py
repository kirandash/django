from django.urls import path

from .views import (
    ArticleListView,
    ArticleDetailView,
    ArticleCreateView,
    ArticleUpdateView,
    ArticleDeleteView,
)

urlpatterns = [
    path('', ArticleListView.as_view()),
    # POST request API
    path('create/', ArticleCreateView.as_view()),
    # Primary key For individual articles view
    path('<pk>', ArticleDetailView.as_view()),
    # PUT
    path('<pk>/update/', ArticleUpdateView.as_view()),
    # DELETE
    path('<pk>/delete/', ArticleDeleteView.as_view()),
]
