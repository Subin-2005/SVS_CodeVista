"""
URL configuration for codevista_backend project.
"""

from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def root_api_index(request):
    return JsonResponse({
        "message": "SVS CodeVista Backend REST API",
        "endpoints": {
            "health": "/api/health/",
            "company_info": "/api/info/",
            "contact_enquiry": "POST /api/contact/",
            "admin": "/admin/"
        }
    })

admin.site.site_header = "SVS CodeVista Administration"
admin.site.site_title = "SVS CodeVista Portal"
admin.site.index_title = "Project Enquiries & Client Management"

urlpatterns = [
    path('', root_api_index, name='api-root'),
    path('admin/', admin.site.urls),
    path('api/', include('enquiries.urls')),
]
