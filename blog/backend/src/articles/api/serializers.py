from rest_framework import serializers

from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        # Fields to appear in JSON response
        fields = ('id', 'title', 'content')
