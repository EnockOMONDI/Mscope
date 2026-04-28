from django.contrib import admin

from .models import ServicePage


@admin.register(ServicePage)
class ServicePageAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "slug", "is_published", "sort_order")
    list_filter = ("category", "is_published")
    search_fields = ("title", "summary")
    prepopulated_fields = {"slug": ("title",)}

# Register your models here.
