# Fitness Membership with React and Django

## 1. Setting up Project
### 1.1 Starter Project and Virtual environment
1. Python version: 3.8.2. Create venv: `python3 -m venv fitness_membership_venv`
2. Activate venv: `. fitness_membership_venv/bin/activate` or `source fitness_membership_venv/bin/activate`
3. Inside venv: install Django and stripe: `pip install django stripe`
4. **Note**: At the end of project make sure to freeze your requirements with `pip freeze > requirements.txt`. From activated venv. And then we can install the requirements on venv of other machine using `pip install -r requirements.txt`
5. **Migrate**: `python manage.py migrate`. It will create sqlite db.
6. **Import data**: `python manage.py loaddata plans.json`
7. Run server: `python manage.py runserver`
8. Current code has login, logout, page navigation etc already setup.

### 1.2 Stripe Account
1. Register at https://dashboard.stripe.com/register
2. Finish the steps to land on dashboard: https://dashboard.stripe.com/test/dashboard

### 1.3 Create Stripe Product
1. From dashboard: create a new product "Fitness Premium" with monthly charges.
2. Create another product "Fitness Premium - Yearly" with yearly subscription.

## 2. Checkout Basics
### 2.1 Select Yearly or Monthly plan, Create Customer Model for checkout
1. Add link to checkout page with monthly or yearly plan as query in join.html.
2. Also, every time user does checkout we will have to create another model called Customer. Add class Customer in plans/models.py file.
3. Migrate: `python manage.py makemigrations` & `python manage.py migrate`

### 2.2 Checkout page
1. Should restrict access to checkout page for logged out users.
2. open plans/views.py file and add @login_required from django auth before checkout view. Now user will be redirected if trying to access to checkout page. 
3. Also add code in checkout view to redirect to home page after payment is made.
4. Add publishable_key from stripe dashboard to checkout.html
5. Test payment: Card: 4242 4242 4242 4242, Expiry: 02/22, CVC: 222

### 2.3 Stripe Secret key and Passing default data to checkout page
1. Note: Publishable key is for testing card payments. To access stripe via API we will need the secret key.
2. Secret keys should be in views.py file and not html. Since it should not be seen to public.
3. Add secret key to plans/views.py file
4. Also pass default values to checkout page.

### 2.4 Display received data in checkout.html
1. `{{ plan|title }}` etc.
2. Test at: http://127.0.0.1:8000/checkout?plan=monthly and http://127.0.0.1:8000/checkout?plan=yearly. Note: http://127.0.0.1:8000/checkout for no params passed, we will get default plan as monthly. As mentioned in views.py file.
