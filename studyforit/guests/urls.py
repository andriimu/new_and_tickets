from django.urls import path 

from . import views

urlpatterns = [
    path('', views.User_list.User_list, name = 'user_list'),
    path('add/', views.AddUser.AddUser, name = 'add_user'),
    path('edit/<id>', views.EditUser.EditUser, name = 'edit_user'),
    path('delete/<eid>', views.DeleteUser.DeleteUser, name = 'delete_user'),
    path('view/<eid>', views.ViewUser.ViewUser, name = 'view_user'),
] 

