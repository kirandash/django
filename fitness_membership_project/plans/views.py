from django.shortcuts import render, get_object_or_404, redirect
from .forms import CustomSignupForm
from django.urls import reverse_lazy
from django.views import generic
from .models import FitnessPlan
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
import stripe

# secret key
stripe.api_key = 'sk_test_PHhQ6horKGtIRo2OpEcrom160037S3sTfV'


def home(request):
    plans = FitnessPlan.objects
    return render(request, 'plans/home.html', {'plans': plans})


def plan(request, pk):
    plan = get_object_or_404(FitnessPlan, pk=pk)
    if plan.premium:
        return redirect('join')
    else:
        return render(request, 'plans/plan.html', {'plan': plan})


def join(request):
    return render(request, 'plans/join.html')


@login_required
def checkout(request):
    if request.method == 'POST':
        # Once payment is made, the request will come to checkout page again with POST request. This time don't show checkout page again and redirect to home.
        return redirect('home')
    else:
        # Default monthly plan values while passing data to checkout page
        plan = 'monthly'
        coupon = 'none'
        price = 1000  # in cents - 10 dollars
        og_dollar = 10  # original dollar amount
        coupon_dollar = 0
        final_dollar = 10
        if request.method == 'GET' and 'plan' in request.GET:
            # Default yearly plan values while passing data to checkout page
            if request.GET['plan'] == 'yearly':
                plan = 'yearly'
                price = 10000
                og_dollar = 100
                final_dollar = 100
        return render(request, 'plans/checkout.html', {'plan': plan, 'coupon': coupon, 'price': price, 'og_dollar': og_dollar, 'coupon_ dollar': coupon_dollar, 'final_dollar': final_dollar})


def settings(request):
    return render(request, 'registration/settings.html')


class SignUp(generic.CreateView):
    form_class = CustomSignupForm
    success_url = reverse_lazy('home')
    template_name = 'registration/signup.html'

    def form_valid(self, form):
        valid = super(SignUp, self).form_valid(form)
        username, password = form.cleaned_data.get(
            'username'), form.cleaned_data.get('password1')
        new_user = authenticate(username=username, password=password)
        login(self.request, new_user)
        return valid
