from django.contrib import admin
from apps.student.models import *
# Register your models here.
admin.site.register(Student)
admin.site.register(Subject)
admin.site.register(TimeTable)
admin.site.register(StudentAttendance)

