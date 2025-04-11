FROM python:3.12-alpine AS builder

WORKDIR /app

RUN apk add --no-cache gcc musl-dev libpq-dev

RUN python3 -m venv venv
ENV VIRTUAL_ENV=/app/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

COPY requirements.txt .
RUN pip install -r requirements.txt


FROM python:3.12-alpine AS runner

WORKDIR /app

# Install runtime dependencies
RUN apk add --no-cache libpq

COPY --from=builder /app/venv venv
COPY . .

ENV VIRTUAL_ENV=/app/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
ENV PORT=8000

WORKDIR /app/backend

EXPOSE ${PORT}

CMD gunicorn --bind :${PORT} --workers 2 floorhosting.wsgi