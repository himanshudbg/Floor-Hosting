from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline
from .models import Service, ServiceFeature

class ServiceFeatureInline(TabularInline):
    model = ServiceFeature
    extra = 3

@admin.register(Service)
class ServiceAdmin(ModelAdmin):
    list_display = ('name', 'type', 'base_price', 'popular', 'created_at')
    list_filter = ('type', 'popular')
    search_fields = ('name', 'description')
    inlines = [ServiceFeatureInline]
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'type', 'popular')
        }),
        ('Pricing', {
            'fields': ('base_price', 'original_price'),
        }),
        ('Subscription Discounts', {
            'fields': ('discount_12_month', 'discount_24_month', 'discount_48_month'),
            'description': 'Set discount percentages for different subscription lengths'
        }),
    )
