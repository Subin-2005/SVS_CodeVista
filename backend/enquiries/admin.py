from django.contrib import admin
from django.utils.html import format_html
from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'full_name',
        'email',
        'phone',
        'company_name',
        'project_type',
        'budget',
        'status_badge',
        'created_at',
    )
    list_display_links = ('id', 'full_name')
    list_filter = ('status', 'project_type', 'created_at')
    search_fields = ('full_name', 'email', 'phone', 'company_name', 'message')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)
    list_per_page = 25

    fieldsets = (
        ('Lead Information', {
            'fields': ('full_name', 'email', 'phone', 'company_name')
        }),
        ('Project Scope & Budget', {
            'fields': ('project_type', 'budget', 'message')
        }),
        ('Management & Status', {
            'fields': ('status', 'created_at')
        }),
    )

    def status_badge(self, obj):
        colors = {
            'New': '#f59e0b',
            'Contacted': '#3b82f6',
            'In Progress': '#8b5cf6',
            'Completed': '#10b981',
        }
        bg = colors.get(obj.status, '#64748b')
        return format_html(
            '<span style="background-color: {}; color: #ffffff; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 600; text-transform: uppercase;">{}</span>',
            bg,
            obj.status
        )
    status_badge.short_description = 'Status'
    status_badge.admin_order_field = 'status'

    actions = ['mark_as_contacted', 'mark_as_in_progress', 'mark_as_completed']

    @admin.action(description='Mark selected enquiries as Contacted')
    def mark_as_contacted(self, request, queryset):
        count = queryset.update(status='Contacted')
        self.message_user(request, f"{count} enquiry/enquiries marked as Contacted.")

    @admin.action(description='Mark selected enquiries as In Progress')
    def mark_as_in_progress(self, request, queryset):
        count = queryset.update(status='In Progress')
        self.message_user(request, f"{count} enquiry/enquiries marked as In Progress.")

    @admin.action(description='Mark selected enquiries as Completed')
    def mark_as_completed(self, request, queryset):
        count = queryset.update(status='Completed')
        self.message_user(request, f"{count} enquiry/enquiries marked as Completed.")
