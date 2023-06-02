from django.db import models

# Create your models here.
class Departements(models.Model):
    DepID = models.AutoField(primary_key=True)
    DepName = models.CharField(max_length=150)
    
    

class Employees(models.Model):
    EmpID = models.AutoField(primary_key=True)
    EmpName = models.CharField(max_length=30)
    Empdep = models.CharField(max_length=50)
    DateofJoining = models.DateField()
    photoFieldName = models.CharField(max_length=100)
    
       