from django.urls import path

from .import views

urlpatterns = [
    path('posts',views.PostApi,name="postapi"),
    path('category/',views.CategoryApi,name="categoryapi"),
]
