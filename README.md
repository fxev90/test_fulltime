# Fulltime Force Test Repository

This repository contains the code for the Fulltime Force Test, which is divided into two main parts:

- A backend application built with NestJS
- A frontend application built with React

The project also utilizes Docker for managing a PostgreSQL database and a MeiliSearch service.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Clone the Repository](#clone-the-repository)
- [Environment Setup](#environment-setup)
- [Run PostgreSQL and MeiliSearch with Docker](#run-postgresql-and-meilisearch-with-docker)
- [Running the NestJS Application](#running-the-nestjs-application)
- [Running the React Application](#running-the-react-application)

## Prerequisites

- Node.js (v18.x or later)
- Docker (v24.0.6 or later)
- Yarn package manager

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/fxev90/test_fulltime.git
cd test_fulltime
```

### Environment Setup

Copy the `.env.example` file and rename it to `.env`. Update the `.env` file with your actual environment variables.

```bash
cp .env.example .env
```

### Run PostgreSQL and MeiliSearch with Docker

In the root directory of the repository, run the following command:

```bash
docker-compose up
```

## Running the NestJS Application

### Navigate to the NestJS Folder

```bash
cd git_commits_nest
```

### Environment Setup for NestJs

Copy the `.env.example` file and rename it to `.env`. Update the `.env` file with your actual environment variables.

```bash
cp .env.example .env
```

### Install Dependencies

```bash
yarn install
```

### Run the Application

```bash
yarn start
```

The application will start running on [http://localhost:3000/](http://localhost:3000/). You can use the search endpoint as follows:

- **Endpoint:** GET [http://localhost:3000/search](http://localhost:3000/search)
- **Query Parameters:**
  - `index`: Specifies the index to search within.
  - `query`: The search query string.
  - `page`: The page number for pagination.
  - `limit`: The number of records to return per page.

## Running the React Application

### Navigate to the React Folder

```bash
cd ../git_commits_react
```

### Install Dependencies

```bash
yarn install
```

### Run the Application

```bash
yarn start
```

The application will start running on [http://localhost:3003/](http://localhost:3003/). It has two routes:

- GET [http://localhost:3003/profile](http://localhost:3003/profile): Displays personal information.
- GET [http://localhost:3003/](http://localhost:3003/): Displays GitHub commits with pagination.

