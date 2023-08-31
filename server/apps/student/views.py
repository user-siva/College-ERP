#from django.shortcuts import render
#from django.http import JsonResponse
#from django.forms.models import model_to_dict
from apps.student.models import *
from apps.student.serializers import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET','POST'])
def get_profile(request):
    profile = Student.objects.all()
    serializer = StudentSerializer(profile,many=True)
    return Response(serializer.data)
