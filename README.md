# FAQ Application Installation Guide

This is a full-stack application with React frontend, Node.js backend, MongoDB database, Redis cache, and Nginx reverse proxy, all containerized with Docker.

## Prerequisites

- Docker

- Docker Compose

- Git

## Installation Steps

1. Clone the repository:

   ```bash

   git clone <repository-url>

   cd <project-directory>

   ```

2. Create .env file in the root directory with the following configurations:

   ```env

   # MongoDB

   MONGO_LOCAL_PORT=27017

   MONGO_DOCKER_PORT=27017

   MONGO_USER=mongo

   MONGO_PASSWORD=mongo

   MONGO_URL=mongodb://mongo:mongo@mongo:27017

   # Redis

   REDIS_LOCAL_PORT=6379

   REDIS_DOCKER_PORT=6379

   REDIS_URL=redis://redis:6379

   # Server

   PORT=3030

   NODE_LOCAL_PORT=3030

   NODE_DOCKER_PORT=3030

   # Client

   REACT_APP_API_URL=http://localhost:8000/api

   REACT_APP_LOCAL_PORT=3000

   REACT_APP_DOCKER_PORT=3000

   # Nginx

   NGINX_LOCAL_PORT=8000

   NGINX_DOCKER_PORT=80

   ```

3. Build and start the containers:

   ```bash

   docker-compose up -d --build

   ```

4. Verify the installation:

   - Frontend: http://localhost:3000

   - API: http://localhost:8000/api

   - MongoDB: localhost:27017

   - Redis: localhost:6379

## Project Structure

```

.

├── client/              # React frontend

├── nginx/               # Nginx configuration

├── server/              # Node.js backend

├── .env                 # Environment variables

├── .gitignore          # Git ignore file

├── docker-compose.yml   # Docker compose configuration

└── README.md           # Project documentation

```

## Services

- Frontend (React): Runs on port 3000

- Backend (Node.js): Runs on port 3030

- MongoDB: Runs on port 27017

- Redis: Runs on port 6379

- Nginx: Runs on port 8000

## Health Checks

The application includes health checks for:

- MongoDB: Checks database connectivity every 10 seconds

- Redis: Verifies cache service availability every 10 seconds

## Volumes

- mongo_data: Persistent storage for MongoDB

- redis_data: Persistent storage for Redis

## Networks

All services are connected through the app-network bridge network.

## Troubleshooting

1. If containers fail to start:

   ```bash

   docker-compose down

   docker-compose up -d --build

   ```

2. To view logs:

   ```bash

   docker-compose logs <service-name>

   ```

3. To restart a specific service:

   ```bash

   docker-compose restart <service-name>

   ```

## Stopping the Application

To stop all services:

```bash

docker-compose down

```

To stop and remove all volumes:

```bash

docker-compose down -v

```
