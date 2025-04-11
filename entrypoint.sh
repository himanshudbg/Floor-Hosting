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


gunicorn --bind :8000 --workers 2 djproject.wsgi