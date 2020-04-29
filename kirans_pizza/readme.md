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
    - Django CMS provides custom build content areas completely independent of one another. So instead of putting the entire content of a page in one content area, we can separate each section. Thus easy for website editor to change the content. While WordPress by default provides only one content area. But in WordPress too we can use an additional plugin called Advanced custom fields to create custom fields to enter content.
    - Good for developers with experience on Django
    - Django CMS integrates Seamlessly with Django's additional functionality. Thus we get: Power of CMS + Data Processing Features from Django.

### 1.3 Install Virtual Environment
1. **Install virtual environment**: `pip install virtualenv`. Installs globally.
2. `cd django`: workspace
3. `mkdir kirans_pizza`
4. `cd kirans_pizza`
5. `virtualenv env_kiranspizza`: will setup the starter project for us. So we don't have to create all the files on our own.
6. `source env_kiranspizza/bin/activate`: to activate the virtual environment. Now the terminal will indicate (env_kiranspizza) at start. which means now we are working under virtual environment.