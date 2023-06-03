
from django.urls import path 

from django.urls import re_path, include
from django.conf.urls.static import static
from django.conf import settings 

from EmployeeApp import views



urlpatterns=[
    re_path(r'^departement/$', views.departementApi),
    re_path(r'^departement/([0-9]+)$', views.departementApi),
    
    re_path(r'^employee/$', views.employeeApi),
    re_path(r'^employee/([0-9]+)$', views.employeeApi),
    re_path(r'^Savefile$',views.Savefile)
]+ static(settings.PHOTO_URL, document_root=settings.PHOTO_ROOT)
