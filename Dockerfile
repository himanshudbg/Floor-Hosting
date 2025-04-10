# Build stage for React frontend
FROM node:22-alpine AS frontend-build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Python backend stage
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBUG=False
ENV DATABASE_URL=sqlite:///db.sqlite3

# Set working directory
WORKDIR /backend

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    apache2 \
    libapache2-mod-wsgi-py3 \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy Django backend
COPY backend/ .

# Configure Apache global settings
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Configure Apache for Django with proper permissions
RUN echo '<VirtualHost *:80>\n\
    ServerAdmin webmaster@localhost\n\
    DocumentRoot /backend\n\
    \n\
    WSGIDaemonProcess floorhosting python-path=/backend:/usr/local/lib/python3.11/site-packages\n\
    WSGIProcessGroup floorhosting\n\
    WSGIScriptAlias / /backend/floorhosting/wsgi.py\n\
    WSGIPassAuthorization On\n\
    \n\
    <Directory /backend>\n\
        Options Indexes FollowSymLinks\n\
        AllowOverride All\n\
        Require all granted\n\
    </Directory>\n\
    \n\
    Alias /static/ /backend/staticfiles/\n\
    <Directory /backend/staticfiles>\n\
        Options Indexes FollowSymLinks\n\
        AllowOverride None\n\
        Require all granted\n\
    </Directory>\n\
    ErrorLog ${APACHE_LOG_DIR}/error.log\n\
    CustomLog ${APACHE_LOG_DIR}/access.log combined\n\
</VirtualHost>' > /etc/apache2/sites-available/000-default.conf

# Create required directories and set permissions
RUN mkdir -p /backend/staticfiles && \
    chown -R www-data:www-data /backend && \
    chmod -R 755 /backend

# Create startup script with proper initialization
RUN echo '#!/bin/bash\n\
cd /backend\n\
python manage.py migrate --noinput\n\
python manage.py collectstatic --noinput\n\
chown -R www-data:www-data /backend\n\
chmod -R 755 /backend/staticfiles\n\
apache2ctl -D FOREGROUND\n\
' > /backend/start.sh && chmod +x /backend/start.sh

# Enable required Apache modules
RUN a2enmod wsgi

EXPOSE 80
CMD ["/backend/start.sh"]