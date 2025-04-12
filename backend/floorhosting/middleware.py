from django.http import HttpResponseRedirect

class AdminRedirectMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Check if the path is exactly '/admin'
        if request.path == '/admin':
            # Redirect to '/admin/'
            return HttpResponseRedirect('/admin/')
        
        # Otherwise, continue with the normal request
        return self.get_response(request)