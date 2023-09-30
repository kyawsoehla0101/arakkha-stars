from rest_framework import serializers
from .models import *

# Subjects
class SubjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Subject
        fields='__all__'
#Content   
class ContentSerializer(serializers.ModelSerializer):    
    class Meta:
        model=Content
        fields='__all__'
        dept = 1
#Lesson
class LessonSerializer(serializers.ModelSerializer):    
    class Meta:
        model=Lesson
        fields='__all__'
        depth = 2
        
# #Eachcontent in subject        
# class EachConentSerializer(serializers.ModelSerializer):
#     subject=serializers.StringRelatedField(many=False,read_only=True)
#     class Meta:
#         model=Content
#         fields='__all__'
        
# #Each Lesson in content        
# class EachLessonSerializer(serializers.ModelSerializer):
#     # content=serializers.StringRelatedField(many=False,read_only=True)
#     class Meta:
#         model=Lesson
#         fields='__all__'
#         depth = 1
        
        
        
        
