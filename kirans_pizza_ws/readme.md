# Django CMS 101
## 1. Intro and Project Setup
### 1.1 Introduction and Prerequisites
1. **Django CMS**: Django is good for building web applications. But when it comes to CMS, Django is not as powerful as WordPress or Drupal. So, to help with that we have: **Django CMS** which is an add on used with Django to use as CMS. 
2. **Prerequisites**: Python, Django, HTML, CSS, JS
3. **Goal**:
    - Install and configure Django CMS
    - Create Page templates with placeholders
    - Create content plugins
    - Create app hooks to integrate Django Apps

### 1.2 Why Django CMS
1. Out of the box Django is powerful enough to create data driven web applications. And does a great job at handling CRUD operations in DB.
2. But for websites that need CMS, Django out of the box isn't a right choice.
3. Content Management Options: WordPress, Drupal, Joomla, Magento, Ghost etc.
4. WordPress is easy to learn and setup.
5. Why Django CMS?
    - **Custom Content Areas**: Django CMS provides custom build content areas completely independent of one another. So instead of putting the entire content of a page in one content area, we can separate each section. Thus easy for website editor to change the content. While WordPress by default provides only one content area. But in WordPress too we can use an additional plugin called Advanced custom fields to create custom fields to enter content.
    - Good for developers with experience on Django
    - Django CMS integrates Seamlessly with Django's additional functionality. Thus we get: Power of CMS + Data Processing Features from Django.

### 1.3 Install Virtual Environment
1. **Install virtual environment**: `pip install virtualenv`. Installs globally.
2. `cd django`: workspace
3. `mkdir kirans_pizza_ws`. Workspace with project folder and virtual environment
4. `cd kirans_pizza_ws`
5. `virtualenv env_kiranspizza`: will setup the starter project for us. So we don't have to create all the files on our own.
6. `source env_kiranspizza/bin/activate`: to activate the virtual environment. Now the terminal will indicate (env_kiranspizza) at start. which means now we are working under virtual environment.

### 1.4 Create Django CMS project using djangocms-installer
1. `pip install djangocms-installer`. Installs globally.
2. `mkdir kirans_pizza`. Project folder
3. `cd kirans_pizza`
4. `djangocms -p . kirans_pizza`: p = parent directory, . = install in current directory
5. Rename parent folder to `kirans_pizza_project` to avoid confusion with the app name `kirans_pizza`

### 1.5 Run Django Server
1. From manage.py path: Run `python3 manage.py runserver`
2. Visit: http://127.0.0.1:8000/

## 2. Page Templates and Placeholders
### 2.1 Login and Page Creation
1. First create a superuser to login as admin: `python3 manage.py createsuperuser`. Login with credentials.
2. Note: we can login from any page in future using `?edit` in url.
3. Click on New Page and Next.
4. Enter title, slug and content and save.

### 2.2 Add Plugins to Home Page
1. On edit mode for home page: http://127.0.0.1:8000/en/?edit
2. Click on Structure icon on top right corner to see all contents of page in structure view.
3. Click on Plus icon to Add a new Text plugin
4. To edit existing content: either double click or open from Structure icon on top right corner.

### 2.3 Creating Page Template 
1. `kirans_pizza/kirans_pizza/templates`: Templates Folder with starter files:
    - base.html, fullwidth.html, sidebar_left.html and sidebar_right.html
    - base.html is the main file from which all the other pages are extended.
2. Create new page template `home.html` for home page. copy content from sidebar_left.html

### 2.4 Creating Placeholders and register template
1. home.html, create placeholder for daily_specials and menus
2. Register home.html template in `kirans_pizza/settings.py` file. Under `CMS_TEMPLATES` truple. So when we create a new page we can now select this new template.

### 2.5 Assign Template to Page
1. Refresh http://127.0.0.1:8000/en/?edit
2. Page ---> Templates ---> Home. Click on Home to apply home template to home page.
3. Click on Structure icon on top right corner to see the two new content areas in structure view.
    - Daily_Specials
    - Menus
4. Add Text plugin to Daily_Specials content area.
5. Add Text Plugin to Menu content area.

### 2.6 Add Styling
1. Create css folder in kirans_pizza/static/.
2. Create main.css file.
3. Link css file to base.html file `<link rel="stylesheet" href="{% static 'css/main.css' %}">`
4. load static in base.html file to be able to access static files viz. css

### 2.7 Static Placeholders for Logo and Footer
1. Static placeholder is common to all pages. Viz: Logo, Footer etc. Add static placeholders for logo and footer in base.html. 
2. Go to browser and on reload we can see the new placeholders in structure view.
3. Pin indicates a static placeholder.
4. In structure view, add Picture/Image plugin to Logo static placeholder. - Add image: set width and save.
5. Check logo in content view.
6. Add Text Plugin to Footer.

## 3. Create Content Plugins
### Intro
1. We will learn:
    - How to create custom plugins specific to site's needs
    - How to restrict content placeholders to only allow custom plugins
    - How to give plugin content structure in the HTML
    - Styling

### 3.1 Building a Plugin
1. From manage.py folder: Create a new app for plugins `python3 manage.py startapp kirans_pizza_plugins`
2. Add new app to base app(kirans_pizza) settings file. Note: Make sure to add a trailing comma.

**App Folder Structure:**
1. **migrations/**: holds files to help us with migrate our DB when we change our schema over time. Or move code to different environment.
2. **__init__.py**: (Dunder Init file) - Tells Python that this folder contains Python files
3. **admin.py**: controls admin interface that can be used to edit data related to this app.
4. **apps.py**: controls settings specific to this app.
5. **models.py**: provides the data layer which Django uses to create DB schema or queries.
6. **tests.py**: Can add unit test for testing this app.
7. **views.py**: Holds logic and control flow for handling requests and defines HTTP response that can be returned.

### 3.2 Building Plugin - Contd
1. Create model by extending CMSPlugin instead of models.Model like we do in Django.
2. After adding code for new models. Run migrations
3. `python3 manage.py makemigrations`: will create a migration file for our app kirans_pizza_plugins
4. `python3 manage.py migrate`: will create tables in our Database
5. In cms views file are identified as `cms_plugins.py` file. Rename `kirans_pizza_plugins/views.py`to `cms_plugins.py`. Remove all default code and add code for our CMS view.
6. Create templates folder in our plugin app `kirans_pizza_plugins`. Create file `daily_special.html`

### 3.3 Use plugin under Daily Specials content
1. Refresh http://127.0.0.1:8000/en/
2. ?edit view
3. Go to Structured view and under Daily specials content add Daily Specials Plugin. Add all the details, save and publish to see the result on home page.

### 3.4 Defining CMS Placeholder Configuration
**Restricting Types of Plugins in Content Area**:
1. Now on our website, the Daily Specials content area has all plugins available to add. But we would like to restrict it to only allow Daily_Specials plugin in the list. So that user does not accidentally add any other content to this area.
2. Go to base app settings file: `kirans_pizza_plugins/settings.py`: 
3. Add configuration to `CMS_PLACEHOLDER_CONF`.

### 3.5 Restricting Numbers of Plugins in Content Area
1. Add `limits` to `CMS_PLACEHOLDER_CONF`
2. Now refresh on FE and try to add new plugin. Daily Specials Content will not accept. Note: Previous data will retain.

### 3.6 Building a Second Plugin - For Menu Items
1. Create a plugin for menu item.
2. Go to `kirans_pizza_plugins/models.py` file. 
3. After adding code for new models. Run migrations
4. `python3 manage.py makemigrations`: will create a migration file for our app kirans_pizza_plugins
5. `python3 manage.py migrate`: will create tables in our Database
6. Create Menu_Item class extending from CMSPlugin
7. Open cms_plugins.py file for the view.
8. Add Menu_Items_Plugin class to tie Plugin with template
9. Create menu_item.html file.
10. Go to base app settings file: `kirans_pizza_plugins/settings.py`: 
11. Add configuration in `CMS_PLACEHOLDER_CONF` for Menu_Item Plugin.

### 3.7 Styling Plugins

## 4. Apphooks
### 4.1 Intro
1. We will learn how to hook traditional Django apps or an existing Django application into Django CMS.

### 4.2 Building a Django App for blog
1. Lets create a blog app where we will integrate our CMS.
2. `python3 manage.py startapp blog`. Add blog to list of installed apps in root app's settings.py file. `kirans_pizza_plugins/settings.py`
3. open models.py file for blog app. And add Post, Category model by extending models.Model
4. `python3 manage.py makemigrations blog`: will create a migration file for our app kirans_pizza_plugins
5. `python3 manage.py migrate`: will create tables in our Database
6. To show our new model in admin, we will have to add the model to `blog/admin.py`
7. open `blogs/views.py` and define views for post, category, blog
8. Create `blog/urls.py` file: specific to blog app. And add urlpatterns
9. Create folder `blog/templates` for our 3 views. blog.html, category.html and post.html.

### 4.3 Create the Apphook
1. Create a file in blog app: `blog/cms_apps.py`
2. Extend BlogApp from CMSApp
3. Restart server
4. Go to : http://127.0.0.1:8000/en/?edit
5. Click on Create to make a new page: Blog. Save and Publish.
6. Reload page. Go to Page ---> Advanced Settings ---> Under Applications List select "Blog" and Save and Publish.
7. Now: all the urls of our blog app will appear after /blog
8. To setup some data: lets create some categories and posts. Go to example.com ---> Administration ---> Categorys ---> Add
9. Also create a new post and assign to general category. save
10. Now visit: http://127.0.0.1:8000/en/blog/ to see all the blog posts on frontend. 
11. We can click on title to visit detail view
12. Or visit http://127.0.0.1:8000/en/blog/category/1/ for category page.

### 4.4 Extend the Django CMS Toolbar
1. Create a file in blog app: `cms_toolbars.py`
2. Create and Register PostToolbar, CategoryToolbar
3. Restart devserver
4. Reload browser and now we can see the blog menu option in toolbar. Thus, direct access to blog.
