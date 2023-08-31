from django.urls import path
from apps.student.views import *

urlpatterns = [
	path('',get_profile),
]