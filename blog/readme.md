# Blog with Django and React
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

## 3. Setting up Django Project - BE
### 3.1 Install Python - BE
1. **Python**: https://www.python.org/downloads/. Current version: 3.8.2. 
    - Python 3.x includes **venv** for project environment.
    - Python 2.x uses **virtualenv** for project environment.
2. Download the .pkg file and run installation. Or use brew: `brew install python3`. Brew: https://brew.sh/
3. Check the version by typing `python3 --version`. (Python 3.8.2)
5. Python3 installs pip3 script to mac automatically.

### 3.2 Creating a Project Environment - BE
1. Create a virtual environment for project using venv tool from Python3:
    - `mkdir blog`, `cd blog`, `mkdir backend`, `mkdir frontend`, `cd backend`
    - `python3 -m venv blog_env`. Will create `blog_env` venv folder for us inside backend directory. Add blog_env to gitignore list
2. **Understanding venv folder structure**: `blog_env`
    - **bin/ Folder**: contains scripts to interact with dedicated executables eg: python, pip etc. Which means any command we run here: will only run in the venv instead of the system wide python. Also includes a file activate, which is used to activate our venv. 
        - **Activate Virtual environment**: Run: `. blog_env/bin/activate` or `source blog_env/bin/activate`. This will now launch the command line from venv. Can be identified as terminal starts with `(blog_env)`. So now: python and pip command will run from the virtual environment. Ex: Run `python --version`: will return Python 3.8.2. If we run `python --version` in any other terminal, it will return Python 2.7.16 which is our global python installation. Globally we will have to run `python3 --version` to get python3 details.
        - Similary if we run pip from venv to install any package, the package will be installed in venv only instead of system wide.
        - **Deactivate venv**: Run `deactivate`. Now terminal will not show `(blog_env)` anymore.
    - **include/ Folder**: used to look up installed packages in our environments.
        - Run: `pip list` in venv to check list of packages installed: will return pip, setuptools: the default packages in venv
        - To check system wide packages, run: `pip list` outside of venv. The list should show more packages installed system wide.
    - **lib/ Folder** used to look up installed packages in our environments.
    - **pyvenv.cfg File**: To configure venv.

### 3.3 Install Django & Create Django Project - BE
1. **Activate venv**: `. blog_env/bin/activate`
2. Check the terminal should prompt `(blog_env)` in the beginning.
3. **Install Django**: https://www.djangoproject.com/download/. Current version: 3.0.6
    - `pip install django` (will install django 3.0.6 and pytz library which provides timezone support). Note this will be installed in venv and not systemwide.
    - It will install all the python code and also adds a script in bin directory called `django-admin` which we can use to run django related commands.
6. **Create django project**: Run `django-admin startproject blog`
7. Rename the project folder to `src` or any other name viz `blog_project` to confusion with same root app name `blog`.

### 3.4 Install Django REST Framework - BE
https://www.django-rest-framework.org/
1. We will use Django REST framework to make our data available to public through REST services.

**Summary**:
1. Installing **djangorestframework**: This will generate REST APIs for our App. 

**Steps**:
1. Make sure venv is activated
2. Install django-rest-framework: `pip install djangorestframework`. (Current version: 3.11.0). Installed in bin/lib/python/site-packages
3. Add `rest_framework` to list of `INSTALLED_APPS` in main project settings.py file. To get a nice interface to check the REST API in browser. (Not required if we can test with curl).
4. Add url for login, logout auth view in urls.py file.
5. Add REST_FRAMEWORK settings to project settings.py file.

### 3.5 Configure Django Project in VSCode - BE
https://automationpanda.com/2018/02/08/django-projects-in-visual-studio-code/
1. **Install extensions**:
    - Python – for full Python language support
    - Django Template – for template file source highlighting
    - Django Snippets – for common Django code
2. **Workspace Settings for VSCode**
    - `pip install pep8`, `pip install autopep8`, `pip install pylint`
    - Press Cmd + Shift + P: Open Workspace Settings (JSON)
    - This will create .vscode/settings.json file for us.
    - copy paste the setings from article.
    - Change `"python.linting.pylintPath": "pylint",`

### 3.6 Run Django Server
1. `cd src` & `python manage.py runserver`.
2. Handle migrations: `python manage.py migrate`. Will create db.sqlite file.
3. Run the server again & check project at: http://127.0.0.1:8000/

### 3.7 Create articles app - BE
1. `python manage.py startapp articles`
2. Add articles to list of INSTALLED_APPS in settings.py file.

## 4 React project setup - FE
### 4.1 Create React Project using create-react-app tool - FE
1. **create-react-app** Create react app is a tool that helps us create a react app quickly so that we don't have to setup the project from scratch. Run the command: `cd frontend` & `npx create-react-app gui`. Note: We don't need the venv that we were using during django. Because all the packages we install in react will be installed at project level only. venv can be deactivated by running: `deactivate`. (blog_env) prompt will now disappear from terminal.

### 4.2 Understanding Project structure - FE
1. The project created by create-react-app has 2 main folders
    - **public**: to hold publicly accessible resources of our app
    - **src**: will hold actual react code
2. **public folder - public/index.html**:
    - index html file is present inside public folder. This file is going to be sent to the client when react app loads.
    - **div with id root**: index.html file has a div with id `root` which is the target where our react app is going to load.
    - There is a **noscript** tag which will execute if JS is disabled for client browser. So if client's browser has JS disabled, client will get the message written in noscript tag.
3. **src folder**:
    - **index.js**: Code in this will help us insert our React App into index.html file with `ReactDOM.render()`. ReactDOM is an extension of React that helps us with rendering react components on to DOM.
    - **index.css**: Holds global css for our app. All styles written here will be applied to all the components in our App.
    - **App.js**: Holds JS code for our root React component
    - **App.css**: Holds CSS code for our root React component
4. **package.json**:
    - Holds details of all the packages that are used so far.
    - Also holds the scripts for starting dev server, creating a build and testing our app.
5. Run the command `cd gui` & `npm run start` to run the project on localhost:3000
6. Change app title to Blog in index.html file.

## 5. Models and API - BE
### 5.1 Create Article model and register - BE
1. open **articles/models.py**: Add Data structure code.
2. `python manage.py makemigrations`
3. `python manage.py migrate`
4. Register in admin.py file using `admin.site.register`

### 5.2 Create superuser to access admin - BE
1. `python manage.py createsuperuser` Enter details
2. Login to admin: http://127.0.0.1:8000/admin
3. Select Articles Model - Create 2 articles.

### 5.3 Create API for public access of Articles model - BE
https://www.django-rest-framework.org/api-guide/serializers/
1. Serializers convert model from Python into JSON object that we can then use in our React app
2. Create `src/articles/api` folder.
3. Initialize the api folder with `__init__.py` file. This tells interpreter that the folder has python code
4. Create `src/articles/api/serializers.py` file to convert model from Python into JSON.
5. Create `src/articles/api/views.py` file - a view for the API serializers class. https://www.django-rest-framework.org/api-guide/generic-views/
    - Create ArticleListView using **ListAPIView**: https://www.django-rest-framework.org/api-guide/generic-views/#listapiview
    - Used for read-only endpoints to represent a collection of model instances.
6. Also create a ArticleDetailView using **RetrieveAPIView** Used for read-only endpoints to represent a single model instance.
    - https://www.django-rest-framework.org/api-guide/generic-views/#retrieveapiview
7. Create `src/articles/api/urls.py` file - to create endpoints for API that will be accessible publicly.
8. Include articles.api.urls in project root urls.py file.
9. Check if the API works, by visiting http://127.0.0.1:8000/api/ and detail view at http://127.0.0.1:8000/api/1
