from django.shortcuts import render
from .models import *

# Create your views here.
def post(request, p_id): # p_id will come from url
    context = {} # initially set an empty context object

    post = Post.objects.get(pk=p_id) # get post based on post id received from url
    context["post"] = post # Add post to the context object

    return render(request, "post.html", context)

def category(request, c_id): # c_id will come from url
    context = {} # initially set an empty context object

    category = Category.objects.get(pk=c_id) # get category based on category id received from url
    context["category"] = category # Add category to the context object

    posts = Post.objects.filter(category=category) # Filter posts based on the category
    context["posts"] = posts # Add posts to the context object

    return render(request, "category.html", context)

def blog(request):
    context = {} # initially set an empty context object

    posts = Post.objects.all() # Get all posts
    context["posts"] = posts # Add posts to the context object

    return render(request, "blog.html", context)
