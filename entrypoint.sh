#!/bin/sh

until cd /code/backend
do
    echo "Waiting for server volume..."
done

until python manage.py migrate
do
    echo "Waiting for db to be ready..."
    sleep 2
done

# Use the correct WSGI application path for your Django project
gunicorn --bind 0.0.0.0:$PORT --workers 2 floorhosting.wsgi