import datetime
from django.db import models
from django.contrib.auth.models import User
from django.db.models import JSONField

class Student(models.Model):
    name = models.CharField(max_length=200)
    details = JSONField()

    def __str__(self):
        return self.name
    

