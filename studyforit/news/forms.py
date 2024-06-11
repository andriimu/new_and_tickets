from .models import Articles
from django.forms import ModelForm, TextInput, DateInput, Textarea


class ArticlesForm(ModelForm):
    class Meta:
        model = Articles
        fields = ['title','anons','full_text','date']
        widgets = {
            "title": TextInput (attrs ={
                'class': 'form-control',
                'placeholder':'Name of Article'
            }),

            "anons": TextInput (attrs ={
                'class': 'form-control',
                'placeholder':'Anons of Article'
            }),
            "date": DateInput(
                attrs={"type": "datetime-local", "class": "form-control"},
                format="%Y-%m-%dT%H:%M",
            ),
             "full_text": Textarea (attrs ={
                'class': 'form-control',
                'placeholder':'Text of Article'
            })
        }