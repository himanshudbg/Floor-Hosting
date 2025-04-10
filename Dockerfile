# Build stage for React frontend
FROM node:22-alpine AS frontend-build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Python backend stage
FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBUG=False
ENV DATABASE_URL=sqlite:////data/db.sqlite3

# Install dependencies
RUN apt-get update && apt-get install -y \
    apache2 \
    libapache2-mod-wsgi-py3 \
 && rm -rf /var/lib/apt/lists/*

# Configure Apache
WORKDIR /backend
COPY backend/ .
COPY --from=frontend-build /app/dist /var/www/html

# Apache configuration
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf && \
    echo "<VirtualHost *:80>\n\
        DocumentRoot /var/www/html\n\
        WSGIDaemonProcess floorhosting python-path=/backend:/usr/local/lib/python3.11/site-packages\n\
        WSGIProcessGroup floorhosting\n\
        WSGIScriptAlias /api /backend/floorhosting/wsgi.py\n\
        Alias /static/ /backend/staticfiles/\n\
        <Directory /var/www/html>\n\
            AllowOverride All\n\
            Require all granted\n\
        </Directory>\n\
        <Directory /backend>\n\
            Require all granted\n\
        </Directory>\n\
    </VirtualHost>" > /etc/apache2/sites-available/000-default.conf

# Permissions and startup
RUN mkdir -p /data /backend/staticfiles && \
    chown -R www-data:www-data /data /backend && \
    chmod -R 755 /data /backend

RUN echo "#!/bin/bash\n\
python manage.py migrate\n\
python manage.py collectstatic --noinput\n\
chown -R www-data:www-data /data /backend\n\
exec apache2ctl -D FOREGROUND" > /start.sh && \
    chmod +x /start.sh

EXPOSE 80
CMD ["/start.sh"]