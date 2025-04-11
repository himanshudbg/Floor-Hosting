#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install dependencies from requirements.txt instead of poetry
pip install -r backend/requirements.txt

# Build frontend
cd frontend
npm install
npm run build

# Build backend
cd ../backend
python manage.py migrate
python -m gunicorn floorhosting.asgi:application -k uvicorn.workers.UvicornWorker