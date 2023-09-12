# HNG_STAGE_2_BACKEND

A Simple REST API for Managing Persons

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Documentation](#documentation)
- [Error Handling](#error-handling)
## Introduction

This project is a simple REST API for managing persons. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on person resources. The API is built using Node.js and MongoDB, and it provides a flexible way to handle dynamic parameters, such as adding or retrieving a person by name.

## Features

- Create a new person
- Fetch details of a person
- Modify details of an existing person
- Remove a person
- Handle dynamic input parameters
- Secure interactions with the database

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose (MongoDB)
- Postman (for testing)
- dotenv (for environment variables)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Postman (for testing)

### Installation

1. **Navigate to the project directory:**


    ```bash
    git clone https://github.com/sam-shot/hng_stage2_backend
    ```


2. **Navigate to the project directory:**

    ```bash
    cd <"your_cloned_location">/hng_stage2_backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

To start the server, use the following command:

```bash
npm start
```

The API will be accessible at http://localhost:5000


## Error Handling

When using the API, you may encounter various error responses. Below are some common error scenarios and their corresponding HTTP status codes:

- `400 Bad Request`: This status code is returned when the request is malformed or missing required parameters. Check your request payload and ensure it follows the API's expected format.

- `404 Not Found`: When trying to access a resource that does not exist, the API responds with a 404 status code. Double-check the resource's ID or name provided in the request.

- `409 Conflict`: If you attempt to create a resource that already exists, such as a person with the same name, the API will return a 409 status code. Ensure the resource is unique or consider updating the existing one.

- `500 Internal Server Error`: In case of unexpected server errors, you might receive a 500 status code. If you encounter this, it's recommended to report the issue to me at [here](mailto:samshotmedia01@gmail.com).

Always check the response status code and the accompanying error message in the JSON response body for more details on the specific error. The API aims to provide informative error messages to assist you in troubleshooting.


## API Endpoints

- **POST /api:** Create a new person
- **GET /api/:user_id:** Fetch details of a person by ID
- **PUT /api/:user_id:** Update details of an existing person by ID
- **DELETE /api/:user_id:** Remove a person by ID


## Testing

You can test the API using Postman or a testing script. Use the provided Postman collection for testing CRUD operations.

### Postman Collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/24711521-dd995c3e-7b46-4e8a-b9ae-af8206bdb7f4?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D24711521-dd995c3e-7b46-4e8a-b9ae-af8206bdb7f4%26entityType%3Dcollection%26workspaceId%3D52a7857f-1abd-4ef3-a021-89b2a2971902)


### Running Tests

1. Import the Postman collection into Postman.
2. Run the collection to perform CRUD operations and test the API.

## Documentation

The API is documented on Postman, providing detailed information about each endpoint, request parameters, and response structures.

![API Documentation](https://github-production-user-asset-6210df.s3.amazonaws.com/75101172/267460046-2e200dad-4bc7-4adb-bec5-7dd67766e36c.png)


You can access the complete API documentation, including usage examples, on Postman. Please follow the link below:

[View Complete Documentation on Postman](https://documenter.getpostman.com/view/24711521/2s9YC4TXcs)
