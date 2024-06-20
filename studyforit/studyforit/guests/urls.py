from django.contrib import admin
from django.urls import path , include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.user_list),
    path('Add/', views.AddUser),
    path('Edit/<id>', views.EditUser),
    path('Delete/<eid>', views.DeleteUser),
    path('View/<eid>', views.ViewUser),
] 

