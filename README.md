# Event-Collector

This repository contains a simple Node.js application that interacts with MySQL and Redis using Docker Compose. The Docker Compose configuration includes separate services for the Node.js application, MYSQL and Redis, allowing them to communicate within the same Docker network.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/jagraj-singh/Event-Collector.git
   cd Event-Collector
   ```

2. Build and run the Docker containers using Docker Compose:

   ```bash
   docker-compose up -d
   ```

   This command will build the Docker images and start the containers in detached mode.

3. Access your Node.js application at http://localhost:7007.
