from django.shortcuts import render
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *

@api_view()
def PostApi(request):
    posts=Post.objects.all()
    serializer=PostSerializer(posts,many=True)
    
    return Response(serializer.data)



@api_view()
def CategoryApi(request):
    categories=Category.objects.all()
    serializer=PostSerializer(categories,many=True)
    
    return Response(serializer.data)
    