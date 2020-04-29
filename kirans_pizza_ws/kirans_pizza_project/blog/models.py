from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField()
    category = models.ForeignKey("Category", on_delete=models.DO_NOTHING,) # on_delete is required since Django 2.x
    content = models.TextField()

    def __unicode__(self):
        return "%s" % (self.title,) # User friendly: To show post's title in admin

class Category(models.Model):
    title = models.CharField(max_length=200)

    def __unicode__(self):
        return "%s" % (self.title,) # User friendly: To show post's title in admin