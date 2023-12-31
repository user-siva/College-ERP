from django.urls import path
from apps.student.views import *

urlpatterns = [
	path('',get_profile),
	path('add_profile/',add_profile),
    path('update_student/<int:pk>/',update_student),
	path('delete_student/<int:pk>/',delete_student),
	path('get_subject/',get_subject),
	path('add_subject/',add_subject),
	path('get_time_table/',get_time_table),
	path('add_time_table/',add_time_table),
	path('get_attendance/',get_attendance),
	path('add_attendance/',add_attendance),
]