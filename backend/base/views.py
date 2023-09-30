from django.shortcuts import render,get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serailizars import *

# all lessons
@api_view(['GET'])
def getSubjects(request):
    subjects = Subject.objects.all()
    serializer = SubjectsSerializer(subjects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSubjectContents(request,slug):
    contents = Content.objects.filter(subject__slug = slug)
    serializer = ContentSerializer(contents, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLessons(request,slug):
    lessons = Lesson.objects.filter(content__subject__slug = slug).first()
    serializer = LessonSerializer(lessons, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getContentLessons(request,slug,contentId):
    lessons = Lesson.objects.get(content__subject__slug = slug, content__slug = contentId)
    serializer = LessonSerializer(lessons, many=False)
    return Response(serializer.data)

# # Lesson create
# @api_view(['POST'])
# def lesson_create(request):
#     if request.method == 'POST':
#         serializer=LessonSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data)
    

# # lesson detail
# @api_view(["GET"])
# def lesson_detail(request,slug):
#     if request.method == 'GET':
#         lesson=Lesson.objects.get(id=slug)
#         serailizer=LessonSerializer(lesson,many=False)
#     return Response(serailizer.data)


# # lesson update
# @api_view(['PUT','POST'])
# def lesson_edit(request,slug):
#     lesson=Lesson.objects.get(id=slug)
#     serializer=LessonSerializer(instance=lesson,data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# # lesson delete
# @api_view(['DELETE'])
# def lesson_delete(request,slug):
#     lesson=Lesson.objects.get(id=slug)
#     lesson.delete()
#     return Response("Delete Successfully!")


# # subjects
# @api_view(["GET"])
# def subject(request):
#     if request.method == 'GET':
#         subjects=Subject.objects.all()
#         serializer=SubjectsSerializer(subjects,many=True)
#     return Response(serializer.data)

# # content 
# @api_view(['GET'])
# def content(request):
#     if request.method == 'GET':
#         contents=Content.objects.all()
#         serializer=ContentSerializer(contents,many=True)
#     return Response(serializer.data)
    
# #each content in subject
# @api_view(['GET'])
# def content_subject(request,slug):
#     subject=Subject.objects.get(id=slug)
#     each_content=Content.objects.filter(subject=subject)
#     serailizer=EachConentSerializer(each_content,many=True)
#     return Response(serailizer.data)

# # each lesson in content
# @api_view(['GET'])
# def lesson_conetent(request,slug):
#     content=Content.objects.get(id=slug)
#     each_lesson=Lesson.objects.filter(content=content)
#     serializer=EachLessonSerializer(each_lesson,many=True)
#     return Response(serializer.data)

# # get first lesson in subject
# def getFirstLesson(request,slug):
#     content=Content.objects.get(id=slug)
#     pass
    
    
    
    
    

    
    
    
    
    
    

