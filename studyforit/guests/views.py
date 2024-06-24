from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.views.generic import (
    ListView,
    UpdateView, 
    CreateView,
    DetailView,
    DeleteView,
)
from rest_framework import generics
from .serializers import GuestSerializer
from .models import User
from .forms import UserForm
'''
class User_list():
    def User_list(request):
        records=User.objects.all()
        mydict={'records_from_User_models':records}
        return render(request,'listingpage.html',context=mydict)
'''
class User_list(ListView):
    model = User
    template_name = 'listingpage.html'
    context_object_name = 'records_from_User_models'

'''
class AddUser():
    def AddUser(request):
        mydict={}
        form=UserForm(request.POST or None , request.FILES or None)
        if form.is_valid():
            form.save()
            return redirect('/')

        mydict['form_for_add_users']=form
        return render(request,'add.html',mydict)
'''
class AddUser(CreateView):
    model = User
    form_class = UserForm
    template_name = 'add.html'
    success_url ='/'
   


class EditUser(UpdateView):
    model = User
    form_class = UserForm
    template_name = 'edit.html'
    context_object_name = 'form_permision_edit'
    success_url = '/'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form_permision_edit'] = context.get('form')
        return context
'''
class DeleteUser():
    def DeleteUser(request,eid=None):
        one_rec = User.objects.get(pk=eid)
        if  request.method=="POST":
            one_rec.delete()
            return redirect('/')
        return render(request,'delete.html')
'''

class DeleteUser(DeleteView):
    model = User
    success_url ='/'
    template_name = 'delete.html'

'''
class ViewUser():
    def ViewUser(request,eid=None):
        mydict={}
        one_rec = User.objects.get(pk=eid)
        mydict['user_from_User_models']=one_rec
        return render(request,'view.html',mydict)
'''
class ViewUser(DetailView):
    model = User
    template_name = 'view.html'
    context_object_name = 'user_from_User_models'

class UserViewSet(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = GuestSerializer

class UserView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = GuestSerializer
    