from rest_framework import serializers
from apps.student.models import *


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ['id','name','details']

class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = ['id','name','details']

class TimeTableSerializer(serializers.ModelSerializer):

    class Meta:
        model = TimeTable
        fields = ['id','day','details']

class StudentAttendanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudentAttendance
        fields = ['id','name','details']