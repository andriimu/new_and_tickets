from django.views.generic import (
    DetailView, 
    UpdateView, 
    DeleteView
    )
from django.shortcuts import render, redirect

from .models import Articles
from .forms import ArticlesForm


class NewsHome():
    def news_home(request):
        news = Articles.objects.order_by('date')
        return render(request, 'news/news_home.html', {'news_all_posts_models': news})

class NewsDetaiView(DetailView):
    model = Articles
    template_name = 'news/details_view.html'
    context_object_name = 'article_of_news'

class NewsDeleteView(DeleteView):
    model = Articles
    success_url ='/'
    template_name = 'news/news-delete.html'


class NewsUpdateView(UpdateView):
    model = Articles
    template_name = 'news/create.html'
    form_class = ArticlesForm


   
class CreateNew():
    def create(request):
        error = ''
        form = ArticlesForm()

        if request.method =='POST':
            form = ArticlesForm(request.POST)
            if form.is_valid():
                form.save()
                return redirect('home')
            else:
                error = 'Wrong input in Form'



        
        date = {
            'form_from_ArticlesFrom' : form,
            'error_exception_views': error
        }

        return render(request, 'news/create.html', date)
