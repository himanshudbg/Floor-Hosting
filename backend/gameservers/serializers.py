from rest_framework import serializers
from .models import Service, ServiceFeature

class ServiceFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceFeature
        fields = ['id', 'feature']

class ServiceSerializer(serializers.ModelSerializer):
    features = ServiceFeatureSerializer(many=True, read_only=True)
    feature_list = serializers.ListField(
        child=serializers.CharField(),
        write_only=True,
        required=False
    )
    price_1_month = serializers.SerializerMethodField()
    price_12_month = serializers.SerializerMethodField()
    price_24_month = serializers.SerializerMethodField()
    price_48_month = serializers.SerializerMethodField()
    
    class Meta:
        model = Service
        fields = [
            'id', 'name', 'description', 'type', 'base_price', 
            'original_price', 'popular', 'features', 'feature_list',
            'price_1_month', 'price_12_month', 'price_24_month', 'price_48_month',
            'discount_12_month', 'discount_24_month', 'discount_48_month',
            'created_at', 'updated_at'
        ]
    
    def get_price_1_month(self, obj):
        return float(obj.get_price_for_subscription(1))
    
    def get_price_12_month(self, obj):
        return float(obj.get_price_for_subscription(12))
    
    def get_price_24_month(self, obj):
        return float(obj.get_price_for_subscription(24))
    
    def get_price_48_month(self, obj):
        return float(obj.get_price_for_subscription(48))
    
    def create(self, validated_data):
        features_data = validated_data.pop('feature_list', [])
        service = Service.objects.create(**validated_data)
        
        for feature in features_data:
            ServiceFeature.objects.create(service=service, feature=feature)
        
        return service
    
    def update(self, instance, validated_data):
        features_data = validated_data.pop('feature_list', None)
        
        # Update service fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # Update features if provided
        if features_data is not None:
            instance.features.all().delete()
            for feature in features_data:
                ServiceFeature.objects.create(service=instance, feature=feature)
        
        return instance