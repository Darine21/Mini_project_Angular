from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from EmployeeApp.models import Departements,Employees
from EmployeeApp.serializers import DepartementSerializer, EmployeeSerializer 
from django.http import JsonResponse

from django.core.files.storage import default_storage


# Create your views here.
@csrf_exempt
def departementApi(request, id=0):
    if request.method=='GET':
        departements = Departements.objects.all()
        departements_serializer = DepartementSerializer(departements, many=True)
        return JsonResponse(departements_serializer.data , safe=False)
    elif request.method=='POST':
        departement_data =  JSONParser().parse(request)
        departement_serializer = DepartementSerializer(data=departement_data)
        if departement_serializer.is_valid():
            departement_serializer.save()
            return JsonResponse("added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method=='PUT':
        departement_data = JSONParser().parse(request)
        departement = Departements.objects.get(DepID = departement_data['DepID'])
        departement_serializer= DepartementSerializer(departement,data=departement_data)
        if departement_serializer.is_valid():
            departement_serializer.save()
            return JsonResponse("Upload successfully!", safe=False)
        return JsonResponse("Failed to upload", safe=False)  
    
      
    elif request.method =='DELETE':
        departement = Departements.objects.get(DepID=id)
        departement.delete()
        return JsonResponse("Deleted successfully!", safe=False)
    return JsonResponse("Failed to delete", safe=False)  


@csrf_exempt
def employeeApi(request, id=0):
    if request.method=='GET':
        employees = Employees.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data , safe=False)
    elif request.method=='POST':
        employee_data =  JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method=='PUT':
        employee_data = JSONParser().parse(request)
        employee = Employees.objects.get(EmpID = employee_data['EmpID'])
        employee_serializer= EmployeeSerializer(employee,data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Upload successfully!", safe=False)
        return JsonResponse("Failed to upload", safe=False)  
    
      
    elif request.method =='DELETE':
        employee = Employees.objects.get(EmpID=id)
        employee.delete()
        return JsonResponse("Deleted successfully!", safe=False)
    return JsonResponse("Failed to delete", safe=False) 

@csrf_exempt
def Savefile (request):
    file= request.FILES['uploadfile']
    file_name= default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)

    