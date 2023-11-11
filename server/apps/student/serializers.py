from rest_framework import serializers
from apps.student.models import *


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ['name','details']

class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = ['name','details']

class TimeTableSerializer(serializers.ModelSerializer):

    class Meta:
        model = TimeTable
        fields = ['day','details']

class StudentAttendanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudentAttendance
        fields = ['name','details']