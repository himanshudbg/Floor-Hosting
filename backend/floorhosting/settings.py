"""
Django settings for floorhosting project.
"""

from pathlib import Path
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY', 'django-insecure-^h!l9hujuz5f*==kgukc$6azswleeb!if+*c)10#qpr__4@t*q')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

APPEND_SLASH = True

# Application definition
# Add django.contrib.staticfiles to INSTALLED_APPS
INSTALLED_APPS = [
    "unfold",  # before django.contrib.admin
    "unfold.contrib.filters",  # optional, if special filters are needed
    "unfold.contrib.forms",  # optional, if special form elements are needed
    "unfold.contrib.inlines",  # optional, if special inlines are needed
    "unfold.contrib.import_export",  # optional, if django-import-export package is used
    "unfold.contrib.guardian",  # optional, if django-guardian package is used
    "unfold.contrib.simple_history",  # optional, if django-simple-history package is used
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',  # Add this line
    'rest_framework',
    'corsheaders',
    'django_filters',
    'gameservers',
]

# Templates configuration
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, '../backend/build'),  # Point to build folder
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# Keep assets URL as is
# Static files configuration
STATIC_URL = '/assets/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build'),
]

# Add whitenoise configuration
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, '../backend/build/assets'),  # Point directly to assets folder
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
    ],
}


# CORS and CSRF Settings
CORS_ALLOWED_ORIGINS = [
    "https://parallel-mildrid-floorhost-78cc1d3d.koyeb.app",
    "http://parallel-mildrid-floorhost-78cc1d3d.koyeb.app",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

CORS_ALLOW_CREDENTIALS = True

# Allow all origins for CSRF based on CORS_ALLOW_ALL_ORIGINS from .env
if CORS_ALLOW_ALL_ORIGINS:
    CSRF_TRUSTED_ORIGINS = ["https://*", "http://*"]
else:
    CSRF_TRUSTED_ORIGINS = [
        "https://parallel-mildrid-floorhost-78cc1d3d.koyeb.app",
        "http://parallel-mildrid-floorhost-78cc1d3d.koyeb.app",
    ]

# CSRF_TRUSTED_ORIGINS = [
#     "https://parallel-mildrid-floorhost-78cc1d3d.koyeb.app",
#     "http://parallel-mildrid-floorhost-78cc1d3d.koyeb.app",
# ]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'floorhosting.middleware.AdminRedirectMiddleware',
]

ROOT_URLCONF = 'floorhosting.urls'

WSGI_APPLICATION = 'floorhosting.wsgi.application'

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# CORS settings: Allow all origins for development (restrict this in production)
CORS_ALLOW_ALL_ORIGINS = os.getenv('CORS_ALLOW_ALL_ORIGINS', 'True') == 'True'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Unfold admin settings
UNFOLD = {
    "SITE_TITLE": "Floor Hosting",
    "SITE_HEADER": "Floor Hosting Admin",
    "SITE_URL": "/",
    "SITE_ICON": None,  # You can add a custom icon path here
    "DASHBOARD_CALLBACK": None,
    "STYLES": [
        "https://unpkg.com/@tailwindcss/forms@0.5.3/dist/forms.min.css",
    ],
    "SCRIPTS": [],
    "THEME": "dark",  # Use the dark theme
    "COLORS": {
        "primary": {
            "50": "249 250 251",  # gray-50
            "100": "243 244 246",  # gray-100
            "200": "229 231 235",  # gray-200
            "300": "209 213 219",  # gray-300
            "400": "156 163 175",  # gray-400
            "500": "107 114 128",  # gray-500
            "600": "75 85 99",     # gray-600
            "700": "55 65 81",     # gray-700
            "800": "31 41 55",     # gray-800
            "900": "17 24 39",     # gray-900
        },
        "accent": {
            "50": "239 246 255",   # blue-50
            "100": "219 234 254",  # blue-100
            "200": "191 219 254",  # blue-200
            "300": "147 197 253",  # blue-300
            "400": "96 165 250",   # blue-400
            "500": "59 130 246",   # blue-500
            "600": "37 99 235",    # blue-600
            "700": "29 78 216",    # blue-700
            "800": "30 64 175",    # blue-800
            "900": "30 58 138",    # blue-900
        },
    },
}
