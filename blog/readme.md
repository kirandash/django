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
3. Note, .vscode must remain at root level. Move .vscode to backend folder while working with frontend code, since the settings are specific to python code. Or for future projects: better create 2 different workspaces.

### 3.6 Run Django Server
1. `cd src` & `python manage.py runserver`.
2. Handle migrations: `python manage.py migrate`. Will create db.sqlite file.
3. Run the server again & check project at: http://127.0.0.1:8000/

### 3.7 Create articles app - BE
1. `python manage.py startapp articles`
2. Add articles to list of INSTALLED_APPS in settings.py file.

### 3.8 Requirements.txt to manage dependencies - BE
1. At the end of the project: we can create a requirement.txt file to manage all our dependencies. `pip freeze > requirements.txt`
2. And then on a different machine after cloning the project from git, we can create a new venv, activate it and from the folder with requirements.txt file, run `pip install -r requirements.txt` to install all the dependencies.
3. Test by deleting blog_env and create blog_venv.

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

## 6. Integrate API to React - FE
### 6.1 Ant Design, React Container, Component Creation - Layout, Aricle, ArticleListView
1. `cd gui` and `npm run start`
2. Install **Ant design**: 
    - https://ant.design/docs/react/introduce
    - pre-styled library. alternative to material design. `npm install antd`
3. import .css file in App.js.
4. Create Layout.js file 
    - Copy basic "header-content-footer" layout code from: https://ant.design/components/layout/
    - with props input and set it's content using `{props.children}`. So it will serve as a wrapper and display in props.children, whatever content it is wrapped around.
5. Add CSS to App.css file.
6. Create a List component in components/Article.js.
    - https://ant.design/components/list/
    - Copy ant design footer part. List into components/Article.js    
7. Create a container ArticleListView.js to hold Article
8. Add ArticleListView container to App.js Layout wrapper.

### 6.2 Making API call to Django with Axios - FE and BE
1. Install **axios**: `npm install axios` Note: with npm 5.0, --save is no more required. Since by default the package will be installed as a dependency. --save-dev or --save-optional are still valid to add the package under devDependencies or optionalDependencies.
2. Add `axios.get` call to fetch API data. It will return blocked by CORS policy error.
    - To **fix CORS error**: Go to backend code. Activate venv: `. backend/blog_env/bin/activate`
    - Install django-cors-headers: https://github.com/adamchainz/django-cors-headers, Follow the instructions at this link.
    - `python -m pip install django-cors-headers` or `pip install django-cors-headers`. It will add the corsheaders package to bin/lib
    - Add `corsheaders` to list of `INSTALLED_APPS` in project settings.py file.
    - Add `MIDDLEWARES` in settings.py file.
    - Add `CORS_ORIGIN_ALLOW_ALL = True` to settings.py file.
    - Now restart the python anr FE server. API call will be successful now.
3. Pass the data to Articles component through props.
4. Check output on FE.

### 6.3 Creating Article Details View and react-router-dom - FE
1. Create container ArticleDetailView.js file.
2. Install router: `npm install react-router-dom`: Helps us in redirecting b/w different components or pages.
3. Create **src/routes.js** file. Will contain component BaseRouter for all the routes for our application which are mapped to their components.
4. Add BaseRouter to App.js and add BrowserRouter.

### 6.4 Add navigation links - FE, BE
1. use **Link** from react-router-dom.
2. In backend/src/articles/api: add id so that id appears in JSON response.
3. use that ID to navigate to articleDetails view.

## 7 POST, PUT, DELETE requests - BE
### 7.1 CreateAPIView, UpdateAPIView, DestroyAPIView - BE
**Create new Article with POST using CreateAPIView**:
https://www.django-rest-framework.org/api-guide/generic-views/#listapiview
1. **ListAPIView**: Used for read-only endpoints to represent a collection of model instances. Thus can only be used for GET calls.
2. Thus we must use a generic view that supports write features as well. Ex: **ListCreateAPIView**
3. We will use **CreateAPIView**: 
    - https://www.django-rest-framework.org/api-guide/generic-views/#createapiview
    - Used for create-only endpoints.
    - Provides a post method handler.
4. src/articles/api/views.py: Create ArticleCreateView class inherited form CreateAPIView genericview.
5. Add view to url: src/articles/api/urls.py file.
6. Test the POST API endpoint at http://127.0.0.1:8000/api/create/ by creating a new article.

**Update existing Article with PUT using UpdateAPIView**
https://www.django-rest-framework.org/api-guide/generic-views/#updateapiview
1. **UpdateAPIView**:
    - Used for update-only endpoints for a single model instance.
    - Provides put and patch method handlers.
    - Extends: GenericAPIView, UpdateModelMixin
2. src/articles/api/views.py: Create ArticleUpdateView class inherited from UpdateAPIView
3. Add view to url: src/articles/api/urls.py file.
4. Test PUT API at: http://127.0.0.1:8000/api/1/update/

**Delete existing Article with DELETE using DestroyAPIView**
https://www.django-rest-framework.org/api-guide/generic-views/#destroyapiview
1. **UpdateAPIView**:
    - Used for update-only endpoints for a single model instance.
    - Provides put and patch method handlers.
    - Extends: GenericAPIView, UpdateModelMixin
2. src/articles/api/views.py: Create ArticleUpdateView class inherited from UpdateAPIView
3. Add view to url: src/articles/api/urls.py file.
4. Test DELETE API at: http://127.0.0.1:8000/api/2/delete/

### 7.2 ViewSets to handle GET, POST, PUT, DELETE - BE:
https://www.django-rest-framework.org/api-guide/viewsets/
1. To handle GET, POST, PUT, DELETE with generic views is a bit repetitive and we end up with more classes/code. There is a better way to handle this using ViewSets.
2. Django REST framework allows you to combine the logic for a set of related views in a single class, called a **ViewSet**. Thus a single class can handle all 4 request types. Thus, if app needs only one request type viz GET or POST: go for generic views. If app has requirement for all 4 request types: go for viewsets.
3. Create ArticleViewSet class extending from viewsets.ModelViewSet.
4. In urls.py use `DefaultRouter()` from restframework. 
5. Test all 4 request types at: http://127.0.0.1:8000/api/articles/ and http://127.0.0.1:8000/api/articles/1/

## 8 POST, PUT, DELETE requests - FE
### 8.1 Create Form - FE
1. https://ant.design/components/form/
2. Create components/Form.js
3. Add CustomForm to ArticleListView.js and ArticleDetailView.js

### 8.2 Handle post, put Request Type for Form submit - FE & BE
1. Handle form submission in form.js based on request type.
2. Send props to Form.js from ArticleDetailView.js and ArticleListView.js
3. Test post and put from browser. It will fail with **403 Authentication error**.
4. To fix this: go to backend/src/settings.py file: and remove rest framework permission and add allow any.
    - Not recommended. Will add proper authentication later in a better way.
    - https://www.django-rest-framework.org/api-guide/permissions/
5. Test post and put requests from Frontend.

### 8.3 Handling Delete - FE
1. Add another form for delete button.

## 9. Authenticate Users with React and Django - FE and BE
### 9.1 Setup Redux - actions, reducers, store. and Thunks for API calls - FE
1. Redux ---> Store + Action + Reducers. Store: Central state of our application. Used to save data for app usage.
    - Install: `npm i redux`,
    - `npm i react-redux`: to integrate react with redux
    - `npm i redux-thunk`: to handle API calls
    - shortcut: `npm i redux react-redux redux-thunk`
2. Create src/store/actions and reducers/ folder.
3. actions/: all actions or events to happen in our app which will change the store data.
    - actionTypes.js: to create constants so that we don't have to type strings all the time. To avoid typos.
    - auth.js
4. reducers/: defines what change to be done to the store whenever an action occurs.
    - auth.js
5. store/utility.js: contains code for updatingObject
6. Add the reducer to createStore fn in index.js. (Create separate store.js file in future projects)
7. Provide the store to App component in index.js

### 9.2 autoSignup with authCheckState action - FE
1. Add connect from react-redux to App component.
2. Create authCheckState action in actions/auth.js file to keep checking for authentication if app reloads.

### 9.3 Create Login Component - FE
1. Create containers/Login component
    - Form code copied from https://ant.design/components/form/ - Login Form
    - Spinner code copied from https://ant.design/components/spin/
    - Add errorMessage from props. (If auth fails)
2. Add component to login route in src/routes.js file.
3. Can test the Login feature by settings isLoading from dev tools
    - Go to chrome dev tools - Profiler tab
    - Search for Login component. On right side we can see all the props being passed to login component.
    - Change loading to true from false and we will be able to see the Loader.
4. Also we will change articles path in routes.js and Aritcle.js to /articles/articleID
5. dispatch authLogin from login component.
    - Note: right now login API is not created in backend yet. So it will throw 404 error. We will create that later.

### 9.4 Create SignUp Component - FE
1. Create containers/Singup Component
    - Copy code for registration form from https://ant.design/components/form/
2. Add component to signup route in src/routes.js file.
3. Also add logout method to containers/Layout.js component file.

### 9.5 Create login and registration API endpoints in Django using django-rest-auth - BE
1. Install **django-rest-auth**: A package that converts Django's default oAuth library into an API and serves that as endpoints. Thus, it automatically creates views and urls to handle authentication.
    - https://django-rest-auth.readthedocs.io/en/latest/installation.html (Follow the instructions here)
    - Dependent on django-rest-framework library (already installed)
    - From venv: `pip install django-rest-auth`
    - Add `'rest_framework.authtoken','rest_auth'` to INSTALLED_APPS in src/blog/settings.py file.
    - Add `path('rest-auth/', include('rest_auth.urls')),` to urlpatterns in src/blog/urls.py file.
    - Run Migration: `python manage.py migrate`
2. Adding Registration Feature using **djago-allauth**:
    - By default registration functinality is not included. Since we need registration, we will need another package: `pip install django-allauth` and follow the remaining steps from url. Extra: Add `'allauth.socialaccount',` to list of INSTALLED_APPS.
    - Run Migration: `python manage.py migrate`
    - Run server
    - Check login at: http://127.0.0.1:8000/rest-auth/login/ - it won't work. as it has email as mandatory. To make it optional: let's add additional settings.
    - We can add additinal settings: https://django-allauth.readthedocs.io/en/latest/configuration.html
    - Add `ACCOUNT_EMAIL_VERIFICATION` to settings.py file
    - Check login at: http://127.0.0.1:8000/rest-auth/login/ - try logging in with admin details.
3. To understand more about how django-rest-auth urls and views are created: checkout the demo project at: https://django-rest-auth.readthedocs.io/en/latest/demo.html
    - All code can be found at: rest_auth/ folder - urls.py and views.py file
    - registration related code at: rest_auth/registration/ files
4. After registering few users: all tokens for respective users can be checked at:
    - http://127.0.0.1:8000/admin/authtoken/token/
    - all users can be checked at: http://127.0.0.1:8000/admin/auth/user/
5. Freeze requirements after finishing project: `pip freeze > requirements.txt`

## 10 Deploy Django - React App with Heroku
### 10.1 Steps to deploy Django App in Heroku
**Setup**
1. Sign up and go to heroku dashboard: https://dashboard.heroku.com/apps
2. Create a new app
3. Select an available name: blog-django-react-app ---> Next
4. Follow instructions given in the deploy tab
5. Install heroku on mac: `brew tap heroku/brew && brew install heroku`
    - https://devcenter.heroku.com/articles/heroku-cli
6. Enter `heroku login` in terminal and hit enter. Login in browser and go back to terminal.
7. Copy blog folder code to a separate directory where we can create a new git repo.
8. `cd ~/Desktop/test/blog/`
9. `git init`
10. `heroku git:remote -a blog-django-react-app`

**Buildpacks for Servers**
11. Create **buildpacks** for python and node servers
    - Python: `heroku buildpacks:set heroku/python`
    - Add node to existing build pack at index 1: `heroku buildpacks:add --index 1 heroku/nodejs`

**Reorganizing Folders and Files**
1. We will have to reorganize our files as per heroku's settings.
2. Move all code from frontend/gui/ folder to root and then delete the frontend/ and frontend/gui/ folders.
3. Move requirements.txt from backend/src folder to root.
4. Rename backend/src folder to backend/blog_project
5. Move blog_project/ folder to root
6. Delete backend folder
7. Move all content of blog_project/ to root and delete blog_project folder.
8. Check node, npm version we used in our project with `node -v`, `npm -v` and add that to **engines** info in package.json.
9. Create **procfile** with no extension in root. This will serve as a config file for heroku app. Add commands for each processes in procfile.
    - `release: python manage.py migrate`. With every release, we will run the migrate command.
    - `web: gunicorn blog.wsgi --log-file -`. This command makes sure that our app is available for web through http server.
10. Add **gunicorn** to requirements.txt file. Provides the http server.
11. Add whitenoise to requirements.txt file. Helps with serving static files.
12. Add runtime.txt file for running python server. Mention latest version: 3.8.2 for now
    - https://www.python.org/downloads/
13. Add STATIC_ROOT & STATIC_STORAGE to blog/settings.py file
14. import whitenoise in blog/wsgi file
15. Add app name `blog-django-react-app.herokuapp.com` of heroku to ALLOWED_HOSTS in blog/settings.py file.
16. Remove yarn.lock file to fix clash b/w package.lock and yarn.lock.
17. `git add .` , `git commit -m ""` and `git push heroku master`
18. Check if build is successful
19. Lets do frontend build `npm i`. if any vulenrability is there. Fix by running `npm audit fix`. And create build by `npm run build`
20. Add build path to DIRS list in TEMPLATES of blog/settings.py file.
21. `"postinstall": "npm run build"` add this to package.json file so after every installation, heroku will automatically build the files for us.
22. add index.html to blog/urls.py file
23. **Rename procfile to Procfile**. To avoid utf-8 error. If error still persists, remove git repo. delete app. create new app and publish.
24. Add STATIC_DIRS to blog/settings.py file
25. git push heroku master
