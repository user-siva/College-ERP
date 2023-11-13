#from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
#from django.forms.models import model_to_dict
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from apps.student.models import *
from apps.student.serializers import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_profile(request):
    profile = Student.objects.all()
    serializer = StudentSerializer(profile,many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def add_profile(request):
    if request.method=='POST':
        data = JSONParser().parse(request)
        print("Data:",data)
        serializer = StudentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    
@csrf_exempt   
def delete_student(request,pk):
    
    st = Student.objects.get(pk=pk)
    
    
    st.delete()
    return HttpResponse(status=204)

@api_view(['GET'])
def get_subject(request):
    subjects = Subject.objects.all()
    serializer = SubjectSerializer(subjects,many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def add_subject(request):
    if request.method=='POST':
        data = JSONParser().parse(request)
        serializer = SubjectSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@api_view(['GET'])
def get_time_table(request):
    subjects = TimeTable.objects.all()
    serializer = TimeTableSerializer(subjects,many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def add_time_table(request):
    if request.method=='POST':
        data = JSONParser().parse(request)
        serializer = TimeTableSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@api_view(['GET'])
def get_attendance(request):
    attendance = StudentAttendance.objects.all()
    serializer = StudentAttendanceSerializer(attendance,many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def add_attendance(request):
    if request.method=='POST':
        data = JSONParser().parse(request)
        serializer = StudentAttendanceSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)