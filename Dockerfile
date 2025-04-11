FROM python:3.12-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /code

WORKDIR /code

# Install Python dependencies with Poetry
RUN pip install poetry
COPY pyproject.toml poetry.lock /code/
RUN poetry config virtualenvs.create false
RUN poetry install --only main --no-root --no-interaction

COPY . /code

# Build frontend
WORKDIR /code/frontend
RUN npm install
RUN npm run build

# Switch to backend for Django commands
WORKDIR /code/backend

RUN chmod +x /code/entrypoint.sh

CMD ["/code/entrypoint.sh"]