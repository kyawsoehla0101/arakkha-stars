from django.urls import path
from .import views

urlpatterns = [
    path('subject/',views.getSubjects,name="getSubjects"),
    path('subject-contents/<slug:slug>/',views.getSubjectContents,name="getContents"),
    path('lessons/<slug:slug>/',views.getLessons,name="getLessons"),
    path('lessons/<slug:slug>/<str:contentId>/',views.getContentLessons,name="getContentLessons"),
    # path('content',views.content,name="content"),
    
    # # each content in subject
    # path('content-subject/<slug:slug>/',views.content_subject,name="content-subject"),
    
    # # each lesson in content 
    # path('lesson-content/<slug:slug>/',views.lesson_conetent,name="lesson_conetent"),
    
    # # create
    # path('create-lesson',views.lesson_create,name="lesson-create-page"),
    
    # # detail
    # path('detail-lesson/<slug:slug>/',views.lesson_detail,name="lesson-detail-page"),
    
    # # update
    # path('edit-lesson/<slug:slug>/',views.lesson_edit,name="lesson-edit-page"),
    
    # # delete
    # path('delete-lesson/<slug:slug>/',views.lesson_delete,name="lesson-delete-page"),

   
]



