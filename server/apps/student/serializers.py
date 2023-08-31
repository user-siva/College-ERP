from rest_framework import serializers
from apps.student.models import *


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ['name','details']