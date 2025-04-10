# Build stage for React frontend
FROM node:22-alpine AS frontend-build

# Set working directory
WORKDIR /app

# Copy package files
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy frontend files
COPY frontend/index.html frontend/vite.config.js frontend/eslint.config.js ./
COPY frontend/src/ ./src/
COPY frontend/public/ ./public/

# Build the React application
RUN npm run build

# Python backend stage
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBUG=False
ENV DATABASE_URL=sqlite:///db.sqlite3

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    apache2 \
    libapache2-mod-wsgi-py3 \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy Django backend
COPY backend/ ./backend/

# Configure Apache global settings
RUN echo "ServerName localhost:8000" >> /etc/apache2/apache2.conf

# Configure Apache for Django with proper permissions
RUN echo '<VirtualHost *:80>\n\
    ServerName localhost:8000\n\
    ServerAdmin webmaster@localhost\n\
    DocumentRoot /app\n\
    \n\
    WSGIDaemonProcess floorhosting python-path=/app/backend:/usr/local/lib/python3.11/site-packages\n\
    WSGIProcessGroup floorhosting\n\
    WSGIScriptAlias / /app/backend/floorhosting/wsgi.py\n\
    WSGIPassAuthorization On\n\
    \n\
    <Directory /app/backend>\n\
        Options Indexes FollowSymLinks\n\
        AllowOverride All\n\
        Require all granted\n\
    </Directory>\n\
    \n\
    Alias /static/ /app/backend/staticfiles/\n\
    <Directory /app/backend/staticfiles>\n\
        Options Indexes FollowSymLinks\n\
        AllowOverride None\n\
        Require all granted\n\
    </Directory>\n\
    \n\
    ErrorLog ${APACHE_LOG_DIR}/error.log\n\
    CustomLog ${APACHE_LOG_DIR}/access.log combined\n\
</VirtualHost>' > /etc/apache2/sites-available/000-default.conf

# Create required directories and set permissions
RUN mkdir -p /app/backend/staticfiles && \
    chown -R www-data:www-data /app && \
    chmod -R 755 /app

# Create startup script with proper initialization
RUN echo '#!/bin/bash\n\
cd /app/backend\n\
python manage.py migrate --noinput\n\
python manage.py collectstatic --noinput\n\
chown -R www-data:www-data /app\n\
chmod -R 755 /app/backend/staticfiles\n\
apache2ctl -D FOREGROUND\n\
' > /app/start.sh && chmod +x /app/start.sh

# Enable required Apache modules
RUN a2enmod wsgi

# Expose port
EXPOSE 80

# Start services
CMD ["/app/start.sh"]