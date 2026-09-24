from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.db import connection
from .models import ContactMessage
from .serializers import ContactMessageSerializer


class ContactMessageCreateView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            contact_instance = serializer.save()
            return Response(
                {
                    "success": True,
                    "message": "Thank you! Your project enquiry has been received. We'll get back to you soon.",
                    "data": {
                        "id": contact_instance.id,
                        "full_name": contact_instance.full_name,
                        "email": contact_instance.email,
                        "project_type": contact_instance.project_type,
                        "created_at": contact_instance.created_at,
                    }
                },
                status=status.HTTP_201_CREATED
            )
        return Response(
            {
                "success": False,
                "message": "Please correct the errors in the form.",
                "errors": serializer.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )


class HealthCheckView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        db_status = "connected"
        try:
            with connection.cursor() as cursor:
                cursor.execute("SELECT 1")
                row = cursor.fetchone()
                if not row:
                    db_status = "error"
        except Exception as e:
            db_status = f"failed: {str(e)}"

        return Response(
            {
                "status": "healthy",
                "service": "SVS CodeVista Backend API",
                "version": "1.0.0",
                "database": db_status,
                "db_engine": connection.vendor,
            },
            status=status.HTTP_200_OK
        )


class CompanyInfoView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        return Response(
            {
                "company": "SVS CodeVista",
                "tagline": "We Build Digital Solutions That Grow Your Business.",
                "subheadline": "We Build Digital Solutions That Move Your Business Forward.",
                "email": "svscodevista@gmail.com",
                "phone": "+91 8122715090",
                "services_count": 8,
                "technologies": ["Python", "Django", "React", "MySQL", "REST API", "Axios"],
                "active": True
            },
            status=status.HTTP_200_OK
        )
