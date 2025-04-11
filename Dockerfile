# Frontend build stage
FROM node:22-alpine AS frontend-build

WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Main stage
FROM python:3.12-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    apache2 \
    libapache2-mod-wsgi-py3 \
    && rm -rf /var/lib/apt/lists/*

# Enable Apache modules
RUN a2enmod rewrite
RUN a2enmod wsgi

WORKDIR /code

# Install Python dependencies
RUN pip install poetry
COPY pyproject.toml poetry.lock* /code/
RUN poetry config virtualenvs.create false
RUN poetry install --only main --no-root --no-interaction

# Copy backend files
COPY backend/ /code/backend/

# Copy built frontend from build stage
COPY --from=frontend-build /app/dist /code/backend/build

# Create entrypoint script
RUN echo '#!/bin/bash\n\
cd /code/backend\n\
python manage.py migrate --noinput\n\
apache2ctl -D FOREGROUND' > /code/entrypoint.sh

RUN chmod +x /code/entrypoint.sh

# Configure Apache
RUN echo '<VirtualHost *:80>\n\
    ServerAdmin webmaster@localhost\n\
    DocumentRoot /code/backend/build\n\
    \n\
    ErrorLog ${APACHE_LOG_DIR}/error.log\n\
    CustomLog ${APACHE_LOG_DIR}/access.log combined\n\
    \n\
    Alias /static/ /code/backend/build/assets/\n\
    <Directory /code/backend/build>\n\
        Options FollowSymLinks\n\
        AllowOverride All\n\
        Require all granted\n\
        RewriteEngine On\n\
        RewriteBase /\n\
        RewriteRule ^index\.html$ - [L]\n\
        RewriteCond %{REQUEST_FILENAME} !-f\n\
        RewriteCond %{REQUEST_FILENAME} !-d\n\
        RewriteRule . /index.html [L]\n\
    </Directory>\n\
    \n\
    WSGIScriptAlias /api /code/backend/floorhosting/wsgi.py\n\
    WSGIDaemonProcess floorhosting python-path=/code/backend python-home=/code\n\
    WSGIProcessGroup floorhosting\n\
    \n\
    <Directory /code/backend/floorhosting>\n\
        <Files wsgi.py>\n\
            Require all granted\n\
        </Files>\n\
    </Directory>\n\
    \n\
    WSGIPassAuthorization On\n\
</VirtualHost>' > /etc/apache2/sites-available/000-default.conf

EXPOSE 80

CMD ["/code/entrypoint.sh"]