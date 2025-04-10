# Build stage for React frontend
FROM node:22-alpine AS frontend-build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend files
COPY index.html vite.config.js eslint.config.js ./
COPY src/ ./src/
COPY public/ ./public/

# Build the React application
RUN npm run build

# Python backend stage
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBUG=False

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    nginx \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy Django backend
COPY backend/ ./backend/

# Copy built React app from frontend-build stage
COPY --from=frontend-build /app/dist ./dist/

# Configure Django settings
RUN echo "from pathlib import Path\nBASE_DIR = Path('/app/backend')\nTEMPLATES = [{'BACKEND': 'django.template.backends.django.DjangoTemplates', 'DIRS': [Path('/app/dist')], 'APP_DIRS': True, 'OPTIONS': {'context_processors': ['django.template.context_processors.debug', 'django.template.context_processors.request', 'django.contrib.auth.context_processors.auth', 'django.contrib.messages.context_processors.messages']}}]\nSTATICFILES_DIRS = [Path('/app/dist/assets')]\nSTATIC_URL = '/assets/'" >> /app/backend/floorhosting/settings_override.py

# Configure nginx
RUN echo 'server { \
    listen 80 default_server; \
    server_name floorhost.kleverup.me; \
    \
    location /assets/ { \
        alias /app/dist/assets/; \
    } \
    \
    location /admin/ { \
        proxy_pass http://127.0.0.1:8000/admin/; \
        proxy_set_header Host $host; \
        proxy_set_header X-Real-IP $remote_addr; \
    } \
    \
    location /api/ { \
        proxy_pass http://127.0.0.1:8000/api/; \
        proxy_set_header Host $host; \
        proxy_set_header X-Real-IP $remote_addr; \
    } \
    \
    location /static/ { \
        proxy_pass http://127.0.0.1:8000/static/; \
    } \
    \
    location / { \
        try_files $uri $uri/ /index.html; \
        root /app/dist; \
        index index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Create startup script
RUN echo '#!/bin/bash\n\
cd /app/backend\n\
python manage.py collectstatic --noinput\n\
python manage.py migrate --noinput\n\
gunicorn floorhosting.wsgi:application --bind 127.0.0.1:8000 --daemon\n\
nginx -g "daemon off;"\n\
' > /app/start.sh && chmod +x /app/start.sh

# Expose port
EXPOSE 80

# Start services
CMD ["/app/start.sh"]