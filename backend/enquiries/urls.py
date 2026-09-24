from django.urls import path
from .views import ContactMessageCreateView, HealthCheckView, CompanyInfoView

urlpatterns = [
    path('contact/', ContactMessageCreateView.as_view(), name='contact-create'),
    path('health/', HealthCheckView.as_view(), name='health-check'),
    path('info/', CompanyInfoView.as_view(), name='company-info'),
]
