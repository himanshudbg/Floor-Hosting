from django.db import models

class Service(models.Model):
    TYPE_CHOICES = (
        ('web', 'Web Hosting'),
        ('game', 'Game Hosting'),
    )
    
    name = models.CharField(max_length=100)
    description = models.TextField()
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    base_price = models.DecimalField(max_digits=6, decimal_places=2, help_text="Base monthly price")
    original_price = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    popular = models.BooleanField(default=False)
    
    # Discount percentages for different subscription lengths
    discount_12_month = models.IntegerField(default=10, help_text="Discount percentage for 12-month subscription")
    discount_24_month = models.IntegerField(default=20, help_text="Discount percentage for 24-month subscription")
    discount_48_month = models.IntegerField(default=30, help_text="Discount percentage for 48-month subscription")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.get_type_display()}: {self.name}"
    
    def get_price_for_subscription(self, months):
        """Calculate price based on subscription length"""
        if months == 1:
            return self.base_price
        elif months == 12:
            discount = self.discount_12_month / 100
            return self.base_price * (1 - discount)
        elif months == 24:
            discount = self.discount_24_month / 100
            return self.base_price * (1 - discount)
        elif months == 48:
            discount = self.discount_48_month / 100
            return self.base_price * (1 - discount)
        return self.base_price  # Default to base price

class ServiceFeature(models.Model):
    service = models.ForeignKey(Service, related_name='features', on_delete=models.CASCADE)
    feature = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.service.name} - {self.feature}"
