from django.db import models
from cms.models.pluginmodel import CMSPlugin
# Create your models here.

class Daily_Specials(CMSPlugin):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="daily_specials") # will create daily_specials folder in media directory
    description = models.TextField()
    url = models.CharField(max_length=200)

    class Meta:
        verbose_name = "Daily Special"
        verbose_name_plural = "Daily Specials"

    def __unicode__(self):
        return "%s" % (self.name,) # To return daily specials name when viewed as a list

class Menu_Item(CMSPlugin):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="menu_item") # will create menu_item folder in media directory
    price = models.CharField(max_length=200)
    description = models.TextField()
    url = models.CharField(max_length=200)

    def __unicode__(self):
        return "%s" % (self.name,) # To return menu items name when viewed as a list