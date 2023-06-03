from rest_framework import serializers
from EmployeeApp.models import Departements , Employees
class DepartementSerializer(serializers.ModelSerializer):
    class Meta :
        model = Departements
        fields = ('DepID', 'DepName')




class EmployeeSerializer(serializers.ModelSerializer):
    class Meta :
        model = Employees
        fields = ('EmpID', 
                  'EmpName',
                  'Empdep', 
                  'DateofJoining',
                  'photoFieldName')     