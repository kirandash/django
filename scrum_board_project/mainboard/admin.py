from django.contrib import admin
from .models import List, Card

# Register your models here. - Tells Admin of Django to add List, Card Model
admin.site.register(List)
admin.site.register(Card)