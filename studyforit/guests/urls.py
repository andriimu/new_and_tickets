from django.urls import path 

from . import views

urlpatterns = [
    path('', views.User_list.as_view(), name = 'user_list'),
    path('add/', views.AddUser.as_view(), name = 'add_user'),
    path('edit/<pk>', views.EditUser.as_view(), name = 'edit_user'),
    path('delete/<pk>', views.DeleteUser.as_view(), name = 'delete_user'),
    path('view/<pk>', views.ViewUser.as_view(), name = 'view_user'),
] 

