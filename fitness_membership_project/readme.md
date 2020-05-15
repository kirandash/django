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
