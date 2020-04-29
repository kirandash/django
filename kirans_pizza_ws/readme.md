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
2. Click on Structure icon on top right corner to see all contents.
3. Click on Plus icon to Add a new Text plugin
4. To edit existing content: either double click or open from Structure menu on top right corner.

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
3. Click on Structure icon on top right corner to see the two new content areas.
    - Daily_Specials
    - Menus
4. Add Text plugin to Daily_Specials content area.
5. Add Text Plugin to Menu content area.
