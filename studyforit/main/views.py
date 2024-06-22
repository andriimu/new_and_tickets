from django.shortcuts import render


def index(request):
    data = {
       'title_of_page': 'Hel my new ',
       'values_of_index': ['some','ht;o','123443']
    }
    return render(request, 'main/index.html', data)
def about(request):
    return render(request, 'main/about.html')