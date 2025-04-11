#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install dependencies
pip install poetry
poetry install

# Build frontend
cd frontend
npm install
npm run build

# Build backend
cd ../backend
python manage.py migrate