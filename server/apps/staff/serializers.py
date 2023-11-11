from rest_framework import serializers
from apps.staff.models import *


class StaffSerializer(serializers.ModelSerializer):

    class Meta:
        model = Staff
        fields = ['name','details']