from django.db import models
# from django.utils.encoding import python_2_unicode_compatible

# Create your models here.
# python_2_unicode_compatible can be ignored if we are using python3 but if you are using python2, it must be added for unicode compatibility
# @python_2_unicode_compatible
class List(models.Model):
    # Fields for List model in DB
    name = models.CharField(max_length=50)

    def __str__(self):
        return "List: {}".format(self.name) # user friendly name to show on django admin

# @python_2_unicode_compatible
class Card(models.Model):
    # Fields for List model in DB
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    list = models.ForeignKey(List, related_name="cards", on_delete=models.DO_NOTHING,) # ForeignKey to build A relation b/w card and list. Each card will be inside a list
    # Syntax: (ModelName, related_name="test"): related_name is the name of the prop to be used in List model which will include all the cards that particular List is having.
    # list is made mandatory, bcoz we want each card to be a part of List
     # For ForeignKey, on_delete is required since Django 2.x
    story_points = models.IntegerField(null=True, blank=True)
    business_value = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "Card: {}".format(self.title) # user friendly name to show on django admin