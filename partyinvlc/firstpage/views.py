from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'firstpage/index.html')
def about(request):
    return render(request, 'firstpage/about.html')