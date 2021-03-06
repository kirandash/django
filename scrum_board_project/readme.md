# Scrum Board with Django and React
## 1. Intro
### 1.1 What we will learn
1. **React**: 
    - Client side
    - Helps with User interaction
    - Built with JS Programming language
2. **Django**:
    - Server Side
    - Persistence
    - Built with Python
3. **Django REST Framework**
    - Sending data to/from client and server
    - Python

**Topics**:
1. Intro to React and Django
2. Django and REST implementation
3. React: Displaying and editing data
4. Authorizing and Routing

### 1.2 Prerequisites
1. HTML
2. JS
3. Python
4. Web/HTTP

## 2. Django and React
### 2.1 Django Intro
1. Web Development framework
2. Built with Python
3. Helps us build websites quickly
4. **Components**:
    - MTV (Model, Template, View)
    - **Model**: Python class used to store data in DB
    - **View**: Component that handles request from browser. Gets request from browser ---> Retrieves data from DB ---> perform any logic if reqd ---> and then send the data to the template which can then be viewed on browser
    - **Template**: Display data received from view in HTML
    - **url conf**: urls.py file maps a particular url in browser with a view in django
    - **Flow**: Client Browser(React) ---> HTTP ---> Django Server ---> urls.py ---> views.py <---> Model ---> Template ---> Client Browser

### 2.2 React Intro
1. JS based Web Development framework
2. Helps building Rich Internet applications
3. Client side Framework
4. Components in React: View
5. Redux for handling data
6. Thunks for handling API calls
7. Selectors: another layer between Redux and Thunks
8. Styled Components: For better styling
9. For communicating with Django: we will use **Django REST Framework** to make API calls.

## 3. Setting up Django Project
### 3.1 Install Python
1. **Python**: https://www.python.org/downloads/. Current version: 3.8.2. 
    - Python 3.x includes **venv** for project environment.
    - Python 2.x uses **virtualenv** for project environment.
2. Download the .pkg file and run installation. Or use brew: `brew install python3`. Brew: https://brew.sh/
3. Check the version by typing `python3 --version`. (Python 3.8.2)
5. Python3 installs pip3 script to mac automatically.

### 3.2 Creating a Project Environment
1. `python3 -m venv scrum_board_env`. Will create `scrum_board_env` venv folder for us.
2. **Understanding venv folder structure**: `scrum_board_env`
    - **bin/ Folder**: contains scripts to interact with dedicated executables eg: python, pip etc. Which means any command we run here: will only run in the venv instead of the system wide python. Also includes a file activate, which is used to activate our venv. 
        - **Activate Virtual environment**: Run: `. scrum_board_env/bin/activate`. This will now launch the command line from venv. Can be identified as terminal starts with `(scrum_board_env)`. So now: python and pip command will run from the virtual environment. Ex: Run `python --version`: will return Python 3.8.2. If we run `python --version` in any other terminal, it will return Python 2.7.16 which is our global python installation. Globally we will have to run `python3 --version` to get python3 details.
        - Similary if we run pip from venv to install any package, the package will be installed in venv only instead of system wide.
        - **Deactivate venv**: Run `deactivate`. Now terminal will not show `(scrum_board_env)` anymore.
    - **include/ Folder**: used to look up installed packages in our environments.
        - Run: `pip list` in venv to check list of packages installed: will return pip, setuptools: the default packages in venv
        - To check system wide packages, run: `pip list` outside of venv. The list should show more packages installed system wide.
    - **lib/ Folder** used to look up installed packages in our environments.
    - **pyvenv.cfg File**: To configure venv.

### 3.3 Start a Django Project
1. **Activate venv**: `. scrum_board_env/bin/activate`
2. Check the terminal should prompt `(scrum_board_env)` in the beginning.
3. **Install Django**: https://www.djangoproject.com/download/. Current version: 3.0.5
4. `pip install django` (will install django 3.0.5 and pytz library which provides timezone support). Note this will be installed in venv and not systemwide.
5. It will install all the python code and also adds a script in bin directory called `django-admin` which we can use to run django related commands.
6. **Create django project**: Run `django-admin startproject scrum_board`
7. Rename the project folder to `scrum_board_project` to confusion with same root app name `scrum_board`.

### 3.4 Understanding Folder structure
1. **manage.py**: 
    - Run Commands
2. **scrum_board_project/__init__.py**: (aka Dunder Init file)
    - Tells Python that this folder contains Python files
3. **scrum_board_project/wsgi.py and asgi**:
    - Provides hooks for web server viz apache or enginex when django is running on live web sites. Used during deployment.
4. **scrum_board_project/settings.py**:
    - Configures the Django Project
5. **scrum_board_project/urls.py**:
    - Routes web requests based on URL
6. We will edit only the settings.py: to configure django and urls.py file to manage routes requests based on URL in this project.
7. Will Not Edit: manage.py, __init__.py, wsgi.py

### 3.5 Run Django Dev Server
1. From venv: run `cd scrum_board_project` && `python manage.py runserver`
2. Ignore unapplied migrations warning.
3. Website available at http://127.0.0.1:8000/
4. Also creates a db.sqlite3 file to store data.

## 4 The Backend: Django and REST
### 4.1 Creating a Django App - mainboard
1. Make sure venv is activated.
2. Note that scrum_board is our root django app
3. Create a new app: `cd scrum_board_project` & `python manage.py startapp mainboard`
4. Django does not open all the apps present in code by default. We have to specifically install the new app by adding it to the list of `INSTALLED_APPS` in `scrum_board/settings.py` file. Note: Make sure to add a trailing comma.

### 4.2 Understanding Django App Folder structure - mainboard
1. **migrations/**: holds files to help us with migrate our DB when we change our schema over time. Or move code to different environment.
2. **__init__.py**: (Dunder Init file) - Tells Python that this folder contains Python files
3. **admin.py**: controls admin interface that can be used to edit data related to this app.
4. **apps.py**: controls settings specific to this app.
5. **models.py**: provides the data layer which Django uses to create DB schema or queries.
6. **tests.py**: Can add unit test for testing this app.
7. **views.py**: Holds logic and control flow for handling requests and defines HTTP response that can be returned.

### 4.3 Add models to mainboard/models.py file
1. **Models**: Defines the structure of database tables. models.py file will contain all the fields to be added in DB.
2. Create class `List` & `Card` models : inherited from models.Model
3. **models.Model**: lets us save the data from list and Card class into our DB.
    - Will create a table for List and a table for Card. name, title & description will be the columns in the tables. Model classes are mapped to database tables. Each instance will be mapped to rows. And fields are mapped to columns.
    - name and title are of type CharField while description will be of type TextField
    - **blank = True**: not mandatory
4. python_2_unicode_compatible can be ignored if we are using python3 but if you are using python2, it must be added for unicode compatibility

### 4.4 Running Migration
1. **Migrations**: Generate scripts to change the database structure
2. **Intitial Migration**: By default no tables exists. So When a new model is defined, the **initial migration** will create the corresponding database tables
3. When is a migration needed? While adding a model. Or Adding a Field. Removing a Field. Or Changing a field.
4. **Migration commands**: `python manage.py makemigrations`, `python manage.py migrate`, `python manage.py showmigrations`
5. `makemigrations`:
    - Generates migration files for later use. 
    - Uses current model fields and current database tables
    - Creates numbered files in appname/migrations/
6. `migrate`:
    - Runs all migrations that haven't been run yet. To apply all migrations.
    - Can also run migrations for an app to a specific number using: `migrate <appname> <number>` eg `migrate mainboard 1`
7. **Unapplied migrations**: When a migration file has been created, but hasn't been run.
    - Very common source of error when working with a team. So always make sure to have a look at changing models and pull migration files.

**Running migrations on our project:**
1. Go to manage.py folder (`cd scrum_board_project`, `ls`). Make sure venv is activated.
2. Run command: `python manage.py makemigrations`. This creates model for any new model added in our code. Ex - List, Card model will be created. The structure of new models can be checked at: mainboard/migrations/0001_initial.py. This file shows the structure of 2 tables in DB for List and Card with their respective fields and id which is a unique primary key.
3. `python manage.py showmigrations` will list all the default django migrations along with mainboard migrations grouped. Note that the `[ ]` empty sq brackets imply that these migrations have not been applied so far.
4. Apply all migrations by running: `python manage.py migrate`. (Will show all applied migrations. 
5. Verify applied migrations by: Now running `showmigrations` command will show `[x]` for all the applied migrations)
6. Download os db tool: https://sqlitebrowser.org/: Helps us see sqlite db and their structures and contents.
7. Install sqlitebrowser. Launch from Applications/DB Browser for SQLite.
8. open database ---> select: db.sqlite3 file from our project. (Or shortcut: In terminal: type `open db.sqlite3`)
9. Under Database Structure we can find: Tables: mainboard_list, mainboard_card + default django tables. Note: The tables we created will be named in following syntax: `appname_modelname` ex: `mainboard_list`, `mainboard_card`
10. Expand table mainboard_list to see all the fields we added to our db ex: name. By default id is added which is the unique key for our data.
11. **Default tables**: 
    - auth tables
    - **django_migrations** table: tells django which version currently the migration is

### 4.5 Adding More properties to Card Model
1. **ForeignKey**: `list = models.ForeignKey(List, related_name="cards")`
    - Used to create relationship b/w 2 tables. Ex: Each card must be in a list. that list prop is now used in Card model.
    - Syntax: (ModelName, related_name="test"): related_name is the name of the prop to be used in List model which will include all the cards that particular List is having.
2. After adding fields: Run migrations
3. `python manage.py makemigrations`
4. Note: since list ForeignKey property can not be Null and we have not provided any defauly. Our migrations command will ask us to provide a value. (In case there are any existing fields from before). But since we don't have any previous data, we can just choose 1) Provide a one-off default now (will be set on all existing rows with a null value for this column).
5. Enter None
6. And all our new fields will be created.
7. Check for unapplied migrations: `python manage.py showmigrations`
8. apply new migrations: `python manage.py migrate`
9. `open db.sqlite3` to check new fields under mainboard_card table.

### 4.6 Django Admin Interface for mainboard app
**Summary**:
1. Create a Superuser
2. Register Model classes to Admin
3. Using the Admin Interface to Add Data

**Steps**:
1. open `mainboard/admin.py` file.
2. Register our models List, Card in mainboard app to admin. `admin.site.register(List)`
3. Create **superuser**: Make sure venv is activated, `python manage.py createsuperuser`
4. Run server: `python manage.py runserver` and go to http://127.0.0.1:8000/admin
5. Start Adding data using the admin interface. Add some cards.
6. Note: The __str__(self) fn defined in models.py file helps us define the user friendly names to display for Cards and lists in admin otherwise it will show as just object.

### 4.7 Django REST Framework
1. We will use Django REST framework to make our data available to public through REST services.

**Summary**:
1. Installing **djangorestframework**: This will generate REST APIs for us
2. Adding **Serializers** classes to models: These classes will enable the REST framework to convert our data into JSON format.
3. Adding **API views** for REST API
4. **Configuring URLs** where the REST API will be served.

**Steps**:
1. Make sure venv is activated
2. Install django-rest-framework: `pip install djangorestframework`.
3. Add `serializers.py` file to mainboard app. Serializers class translates models from python to JSON which we can send over REST API and then use in React JS.
4. Add `api.py` file to mainboard app. Once data is prepared by serializer in JSON format, code in api.py file will set the JSON data to be available via an API call.
    - Create classes ListApi, CardApi inheriting from **ListAPIView**.
    - ListAPIView is basically a component that gets a request from client ex: React. ---> query the data it needs in python ---> convert it using serializer and ---> send the result data back to client (React) in JSON format
5. Add urls.py file to to mainboard app: mainboard.
6. Add ListApi, CardApi API views to urlpatterns.
7. Note: The urls.lpy from mainboard app will not be detected by django. Since, django only reads the urls.py from our main project folder: scrum_board/urls.py. Thus, to make django read our mainboard app urls.py file: add path to urlpatterns in `scrum_board/urls.py` file.
8. Run server: `python manage.py runserver`
9. Test the REST APIs using curl utility in terminal: `curl http://127.0.0.1:8000/mainboard/cards` and `curl http://127.0.0.1:8000/mainboard/lists`. 
10. If curl is not available on your system: Add `rest_framework` to list of `INSTALLED_APPS` in main project settings.py file. To get a nice interface to check the REST API in browser. (Not required if we can test with curl) And now load the REST API urls in browser. 

### 4.8 Modifying ListSerializer to include CardSerializer
1. Currently, the list API: http://127.0.0.1:8000/mainboard/lists, have only list details. And does not have any card details. 
2. Modify the ListSerializer class in mainboard/serializers.py file to add CardSerializer.
3. In Django admin: add one more list with no cards added. Only to check the difference b/w both types.
4. Check list API: http://127.0.0.1:8000/mainboard/lists.

## 5, 6, 7, 8 Adding a React Frontend
Check: scrum_board_ui

### 8.6 Fixing CORS error
Read more about this at: https://blog.logrocket.com/creating-an-app-with-react-and-django/
1. Make sure venv is activated.
2. `pip install django-cors-headers`. **django-cors-headers**: App for handling the server headers required for Cross-Origin Resource Sharing (CORS). Since we want to access Django APIs from React.
3. Add `corsheaders` to list of `INSTALLED_APPS` in project settings file.
4. Add `'corsheaders.middleware.CorsMiddleware','django.middleware.common.CommonMiddleware',` to list of MIDDLEWARE in project settings.file. They correspond to a filter that’ll intercept all of our application’s requests and apply CORS logic to them.
5. Add `CORS_ORIGIN_ALLOW_ALL = True` to project settings file. Since we’re working full localhost, we’ll disable the CORS feature.

## 9. Selectors - UI
Check: scrum_board_ui

## 10. Editing Data
### 10.1 Intro
1. Get Cards: GET request to url /mainboard/cards - Already Implemented. To implement:
2. Creating a Card: POST request to url /mainboard/cards
3. Updating a Card: PUT request to url /mainboard/cards/2
4. Delete a Card: DELETE request to url /mainboard/cards/3
5. Getting a Card: GET request to url /mainboard/cards/4

### 10.2 Saving new Cards with POST
1. For saving new Cards we will need 2 classes from Django:
    - ViewSets
    - Router
2. Currently our api code at: mainboard/api.py has 2 classes ListApi and CardApi, which are extended from ListAPIView. ListAPIView currently handles only GET request. To add all other request types we can manyally add views for POST, DELETE etc. But better way is to generate all the views automatically using ModalViewSet.
3. **ModelViewSet**: It's a set of Model Views that supports GET, PUT, POST, DELETE. An alternate way to create all views (GET, POST, DELETE etc) for APIs. Instead of creating the views manually.
5. mainboard/api.py: Modify the List and Card APIs using ModelViewSet
6. mainboard/urls.py: for configuring the URLs, use **router** from restframework. It helps us generate url mapping for all views (GET, POST, DELETE etc) in a better or easy way.
7. After adding the code, restart the server and reload the API at: http://127.0.0.1:8000/mainboard/cards/. Note: Now along with GET option, we also have POST option if we scroll down the page.
8. Visit: http://127.0.0.1:8000/mainboard/lists/1/ to see PUT and DELETE options as well for individual list and card item.
9. Note: Now, loading the API from Frontend will be failing at http://localhost:3000/. Because, the API endpoint created by router class of djangorestframework expects a slash at the end. So, in Frontend code change the endpoint URL in thunks/list.js to http://127.0.0.1:8000/mainboard/lists/.

## 10.3 to ## 10.7 - Frontend
Check: scrum_board_ui

## 11 Styled Components - Frontend
Check: scrum_board_ui

## 12 Login, Authentication and Routing
### 12.1 Backend Views for Login Logout
**Summary:**
1. This app is not related to our mainboard app. So we will create a new app.
2. Add Custom ApiView classes
3. Note: For Stand alone Django applications, we could have used the Django default packages for implementing login and logout. But in this project, since we are going to call the API from React, we will create our custom views.

**Steps:**
1. Make sure venv is activated. Create new app `auth_api`: `python manage.py startapp auth_api`. **Note**: we are not calling the app `auth` because that's the name used by default django authentication app.
2. Now: Normally our views should go in `views.py` but since our views will be AJAX calls from React, we will create a new file `api.py`
3. Create `api.py` file with LoginView and LogoutView classes, inherited from views.APIView. It will handle login and logout requests from HTML template.
4. Create serializers.py file to serialize/convert User data from python to JSON before sending it to Frontend REST API as a response.
5. Map the views to urls using urlpatterns in urls.py file.
6. Test: http://127.0.0.1:8000/auth_api/login/: It should load and show a warning that GET is not allowed.
7. Delete unnecessary files from auth_api module
    - admin.py
    - apps.py
    - models.py
    - tests.py
    - views.py

### 12.2 Configuring Django for Authentication and CSRF Protection
1. Now we have our Login and Logout views ready. So, we can restrict few parts of our application to be accessible for only logged in users.
2. **CSRF Protection**: When a user is logged in, Django automatically uses CSRF Protection for our views.
    - CSRF Protection is applied on requests that change data on the server. ie **POST, PUT, DELETE** requests. Not required for GET requests.
    - It helps in preventing **cross-site** requests.
    - Does so by setting a **csrf-token cookie**. A securely generated token number.
    - Client should send back token as a header. (Not cookie)

**Configuring Authentication:**
1. We will restrict API views. ListViewset and CardViewset in mainboard/api.py
2. mainboard/api.py: add IsAuthenticated permission classes.
3. Now if we load http://localhost:3000/, the lists API will throw an error: 403 forbidden. Task: Add error handling in Frontend code at the end of course.
