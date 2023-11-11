#from django.shortcuts import render
from django.http import JsonResponse
#from django.forms.models import model_to_dict
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from apps.staff.models import *
from apps.staff.serializers import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_profile(request):
    profile = Staff.objects.all()
    serializer = StaffSerializer(profile,many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def update_profile(request):
    if request.method=='POST':
        data = JSONParser().parse(request)
        serializer = StaffSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)