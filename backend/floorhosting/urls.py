from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

# Create URL patterns
urlpatterns = [
    # Standard admin URL with trailing slash
    path('admin/', admin.site.urls),
    
    # API URLs
    path('api/', include('gameservers.urls')),
    
    # Serve static files
    *static(settings.STATIC_URL, document_root=settings.STATIC_ROOT),
    
    # This should be the last pattern - it will catch all other URLs and serve the React app
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]

# Create a custom middleware to handle admin without trailing slash
