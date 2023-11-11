from django.urls import path
from apps.staff.views import *

urlpatterns = [
	path('',get_profile),
	path('update_profile/',update_profile),
]