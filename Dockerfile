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

# Copy React build output
COPY --from=frontend-build /app/dist /var/www/html

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBUG=False
ENV DATABASE_URL=sqlite:///backend/db.sqlite3
ENV ALLOWED_HOSTS=*

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    apache2 \
    libapache2-mod-wsgi-py3 \
    && rm -rf /var/lib/apt/lists/*

# Configure Apache
RUN echo "<VirtualHost *:80>\n\
    WSGIPassAuthorization On\n\
    WSGIScriptAlias /api /backend/floorhosting/wsgi.py\n\
    DocumentRoot /var/www/html\n\
\n\
    Alias /static/ /backend/staticfiles/\n\
    Alias / /var/www/html/\n\
\n\
    <Directory /backend>\n\
        Require all granted\n\
        Options FollowSymLinks\n\
    </Directory>\n\
\n\
    <Directory /var/www/html>\n\
        Options FollowSymLinks\n\
        AllowOverride None\n\
        Require all granted\n\
    </Directory>\n\
</VirtualHost>" > /etc/apache2/sites-available/000-default.conf

# Copy backend and set permissions
COPY backend/ /backend/
RUN chown -R www-data:www-data /backend && \
    chmod -R 755 /backend && \
    mkdir -p /backend/staticfiles

# Startup script
RUN echo '#!/bin/bash\n\
cd /backend\n\
python manage.py migrate\n\
python manage.py collectstatic --noinput\n\
apache2ctl -D FOREGROUND\n\
' > /start.sh && chmod +x /start.sh

EXPOSE 80
CMD ["/start.sh"]