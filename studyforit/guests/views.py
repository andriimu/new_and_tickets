from django.shortcuts import render,redirect

from rest_framework import generics
from .serializers import GuestSerializer
from .models import User
from .forms import UserForm

class User_list():
    def User_list(request):
        records=User.objects.all()
        mydict={'records_from_User_models':records}
        return render(request,'listingpage.html',context=mydict)

class AddUser():
    def AddUser(request):
        mydict={}
        form=UserForm(request.POST or None , request.FILES or None)
        if form.is_valid():
            form.save()
            return redirect('/')

        mydict['form_for_add_users']=form
        return render(request,'add.html',mydict)

class EditUser():
    def EditUser(request,id=None):
        one_rec=User.objects.get(pk=id)
        form=UserForm(request.POST or None,request.FILES or None, instance=one_rec)
        if form.is_valid():
            form.save()
            return redirect('/')
        mydict= {'form_permision_edit':form}
        return render(request,'edit.html',context=mydict)

class DeleteUser():
    def DeleteUser(request,eid=None):
        one_rec = User.objects.get(pk=eid)
        if  request.method=="POST":
            one_rec.delete()
            return redirect('/')
        return render(request,'delete.html')

class ViewUser():
    def ViewUser(request,eid=None):
        mydict={}
        one_rec = User.objects.get(pk=eid)
        mydict['user_from_User_models']=one_rec
        return render(request,'''view.html''',mydict)

class UserViewSet(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = GuestSerializer

class UserView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = GuestSerializer
    