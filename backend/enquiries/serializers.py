import re
from rest_framework import serializers
from .models import ContactMessage

PROJECT_TYPE_MAP = {
    'business websites': 'Business Website',
    'business website': 'Business Website',
    'e-commerce websites': 'E-Commerce',
    'e-commerce website': 'E-Commerce',
    'e-commerce stores': 'E-Commerce',
    'e-commerce store': 'E-Commerce',
    'e-commerce': 'E-Commerce',
    'ecommerce': 'E-Commerce',
    'custom web applications': 'Custom Web Application',
    'custom web application': 'Custom Web Application',
    'web applications': 'Custom Web Application',
    'web application': 'Custom Web Application',
    'booking systems': 'Booking System',
    'booking system': 'Booking System',
    'management systems': 'Management System',
    'management system': 'Management System',
    'portfolio websites': 'Portfolio',
    'portfolio website': 'Portfolio',
    'portfolio': 'Portfolio',
    'portfolios': 'Portfolio',
    'landing pages': 'Landing Page',
    'landing page': 'Landing Page',
    'custom software solutions': 'Custom Software Solutions',
    'custom software solution': 'Custom Software Solutions',
    'other': 'Other',
}

BUDGET_MAP = {
    'not sure': 'Not Sure',
    'not sure / to discuss': 'Not Sure',
    '₹5,000 - ₹10,000': '₹5,000 - ₹10,000',
    '₹5000 - ₹10,000': '₹5,000 - ₹10,000',
    '5000 - 10000': '₹5,000 - ₹10,000',
    '₹10,000 - ₹25,000': '₹10,000 - ₹25,000',
    '₹10000 - ₹25000': '₹10,000 - ₹25,000',
    '10000 - 25000': '₹10,000 - ₹25,000',
    'under ₹25,000': '₹10,000 - ₹25,000',
    'under 25000': '₹10,000 - ₹25,000',
    '< 25,000': '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000': '₹25,000 - ₹50,000',
    '₹25000 - ₹50000': '₹25,000 - ₹50,000',
    '25000 - 50000': '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000': '₹50,000 - ₹1,00,000',
    '₹50000 - ₹100000': '₹50,000 - ₹1,00,000',
    '50000 - 100000': '₹50,000 - ₹1,00,000',
    '₹1,00,000+': '₹1,00,000+',
    '₹100000+': '₹1,00,000+',
    '100000+': '₹1,00,000+',
    '> ₹1,00,000': '₹1,00,000+',
}


class ContactMessageSerializer(serializers.ModelSerializer):
    project_type = serializers.CharField(max_length=150, required=False, default='Custom Web Application')
    budget = serializers.CharField(max_length=150, required=False, default='Not Sure', allow_blank=True, allow_null=True)
    phone = serializers.CharField(max_length=50, required=False, allow_blank=True, allow_null=True)
    company_name = serializers.CharField(max_length=150, required=False, allow_blank=True, allow_null=True)

    class Meta:
        model = ContactMessage
        fields = [
            'id',
            'full_name',
            'email',
            'phone',
            'company_name',
            'project_type',
            'budget',
            'message',
            'created_at',
            'status',
        ]
        read_only_fields = ['id', 'created_at', 'status']

    def to_internal_value(self, data):
        # Create a mutable copy of incoming dict
        data = data.copy() if hasattr(data, 'copy') else dict(data)

        # Normalize project_type
        if 'project_type' in data and data['project_type']:
            raw_type = str(data['project_type']).strip()
            normalized_type = PROJECT_TYPE_MAP.get(raw_type.lower(), raw_type)
            data['project_type'] = normalized_type

        # Normalize budget
        if 'budget' in data and data['budget']:
            raw_budget = str(data['budget']).strip().replace('–', '-').replace('—', '-')
            # Collapse multiple spaces around hyphens
            raw_budget_clean = re.sub(r'\s*-\s*', ' - ', raw_budget)
            normalized_budget = BUDGET_MAP.get(raw_budget_clean.lower(), BUDGET_MAP.get(raw_budget.lower(), raw_budget))
            data['budget'] = normalized_budget

        return super().to_internal_value(data)

    def validate_full_name(self, value):
        val = (value or '').strip()
        if len(val) < 2:
            raise serializers.ValidationError("Please provide your full name (at least 2 characters).")
        return val

    def validate_email(self, value):
        val = (value or '').strip().lower()
        email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
        if not re.match(email_regex, val):
            raise serializers.ValidationError("Please enter a valid email address.")
        return val

    def validate_phone(self, value):
        if not value:
            return ""
        val = value.strip()
        return val

    def validate_company_name(self, value):
        if not value:
            return ""
        val = value.strip()
        return val

    def validate_message(self, value):
        val = (value or '').strip()
        if len(val) < 10:
            raise serializers.ValidationError("Please provide a brief description of your project (at least 10 characters).")
        return val
