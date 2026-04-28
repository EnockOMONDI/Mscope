from django.contrib import admin

from .models import Inquiry


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "inquiry_type", "service", "created_at")
    list_filter = ("inquiry_type", "service", "created_at")
    search_fields = ("name", "email", "phone", "company", "message")
    readonly_fields = ("created_at",)

# Register your models here.
