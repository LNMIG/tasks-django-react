# CREATION PROCESS STEPS

- Create directory: __tasks-django-react__
---

- Apply __git init__
---

- Create file __.gitignore__
---

- Create virtual environment __venv__ with __virtualenv__
---

- Activate the virtual environment:
  - .\venv\Scripts\activate , or
  - source ./venv/Scripts/activate , or
  - ctrl + shift + P --> select Python Interpreter
---

- Install the following:
  - pip install __django__
  - pip install __djangorestframework__
  - pip install __django-cors-headers__
  - npm django-react
---

- Create the projects' core with django (BackEnd):
  - django-admin startproject __api__ . *with the dot at the end the file manage.py is gonna be located outside folder __api__*
---

- Create a project's application with django :
  - django-admin startapp __tasks__
---
- Add all the apps to file settings.py in __api__ folder:
  - INSTALLED_APPS = [
      <br>. . .
      <br>__'corsheaders',__
      <br>__'rest_framework',__
      <br>__'tasks',__
      <br>. . .
  <br>]
---
- Add to MIDDLEWARE section in file settings.py in __api__ folder:
  - MIDDLEWARE = [
      <br>. . .
      <br>__'corsheaders.middleware.CorsMiddleware',__
      <br>'django.middleware.common.CommonMiddleware',
      <br>. . .
  <br>]
---

- Add to the end of settings.py file in __api__ folder:
  - CORS_ALLOWED_ORIGINS = [
      <br>"https://localhost:80000"
  <br>]
---

- Create table __Task__ in tasks/models.py
  - don't forget to add __ __str__ __ function in table Task to show the title of each task
  - *don't forget to makemigrations and migrate*
  - add the table to tasks/admin.py
---

- Create file __serializer.py__ in folder tasks
---

- Create class  __TaskView__ in tasks/views.py
---

- Create file  __urls.py__ in folder __tasks__
---

- Update file  __urls.py__ in folder __api__
  - add a new path to urlpatterns
---

