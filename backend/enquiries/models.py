from django.db import models


class ContactMessage(models.Model):
    PROJECT_TYPE_CHOICES = [
        ('Business Website', 'Business Website'),
        ('E-Commerce', 'E-Commerce Website'),
        ('Custom Web Application', 'Custom Web Application'),
        ('Booking System', 'Booking System'),
        ('Management System', 'Management System'),
        ('Portfolio', 'Portfolio Website'),
        ('Landing Page', 'Landing Page'),
        ('Custom Software Solutions', 'Custom Software Solutions'),
        ('Other', 'Other'),
    ]

    BUDGET_CHOICES = [
        ('Not Sure', 'Not Sure / To Discuss'),
        ('₹5,000 - ₹10,000', '₹5,000 - ₹10,000'),
        ('₹10,000 - ₹25,000', '₹10,000 - ₹25,000'),
        ('₹25,000 - ₹50,000', '₹25,000 - ₹50,000'),
        ('₹50,000 - ₹1,00,000', '₹50,000 - ₹1,00,000'),
        ('₹1,00,000+', '₹1,00,000+'),
    ]

    STATUS_CHOICES = [
        ('New', 'New Lead'),
        ('Contacted', 'Contacted'),
        ('In Progress', 'In Progress / Discussion'),
        ('Completed', 'Completed / Converted'),
    ]

    full_name = models.CharField(max_length=150, verbose_name="Full Name")
    email = models.EmailField(max_length=254, verbose_name="Email Address")
    phone = models.CharField(max_length=50, blank=True, null=True, verbose_name="Phone Number")
    company_name = models.CharField(max_length=150, blank=True, null=True, verbose_name="Company / Business Name")
    project_type = models.CharField(
        max_length=150,
        choices=PROJECT_TYPE_CHOICES,
        default='Custom Web Application',
        verbose_name="Project Type"
    )
    budget = models.CharField(
        max_length=150,
        choices=BUDGET_CHOICES,
        default='Not Sure',
        blank=True,
        null=True,
        verbose_name="Budget Range"
    )
    message = models.TextField(verbose_name="Project Description")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Submission Date")
    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default='New',
        verbose_name="Status"
    )

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Project Enquiry"
        verbose_name_plural = "Project Enquiries"

    def __str__(self):
        return f"[{self.status}] {self.full_name} - {self.project_type} ({self.created_at.strftime('%Y-%m-%d')})"
