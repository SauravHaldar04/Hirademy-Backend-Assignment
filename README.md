## Hirademy Backend Assignment

This repository implements the backend API for the Hirademy project using Node.js, Express.js, and a MySQL database. It provides CRUD (Create, Read, Update, Delete) operations for managing assistants within the Hirademy ecosystem.

## Prerequisites

* Node.js `v20.9.0` or later (check with `node -v`) and npm `v10.1.0` or later (check with `npm -v`).
* A MySQL database server running (`v8.0.37` or compatible).

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/SauravHaldar04/Hirademy-Backend-Assignment
   ```

2. Navigate to the project directory:

   ```bash
   cd Hirademy-Backend-Assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   (or)

   ```bash
   yarn install
   ```

## Configuration

1. Create a `.env` file in the project root directory.
2. Add environment variables for database connection details, replacing placeholders with your actual credentials:

   ```
   MYSQL_HOST=localhost
   MYSQL_USER=your_username
   MYSQL_PASSWORD=your_password
   MYSQL_DB='assistant_db'
   PORT=3000
   ```

## Usage

1. Start the server:

   ```bash
   npm run dev
   ```

2. The server will typically start on port 3000 (modify `PORT` in `index.js` if needed). You can then interact with the API using tools like Postman or cURL.


## MYSQL Setup

Copy paste or run the `assistant_model.sql`  in the `models` folder to create the database in your local machine in MYSQL terminal or MYSQL Workbench.

## API Endpoints



* **GET /api/assistants/get_assistants**
    * Retrieves a list of all assistants in the system.

    * **Response:**
        * Array of assistant objects with relevant details.
        * Error message if request fails.

* **POST /api/assistants/create_assistant**
    * Creates a new assistant.
    * **Request Body:**
        * Assistant data object with required fields (e.g., name, email, phone, salary, city, country, department, role).
    * **Response:**
        * Newly created assistant object with ID.
        * Error message if creation fails.

* **GET /api/assistants/get_assistant/:id**
    * Retrieves a specific assistant by their ID.
    * **Path Parameter:**
        * `:id` (required): Unique identifier for the assistant.
    * **Response:**
        * Assistant object with details if found.
        * Error message if assistant not found.

* **PUT /api/assistants/update_assistant/:id**
    * Updates an existing assistant.
    * **Path Parameter:**
        * `:id` (required): Unique identifier for the assistant.
    * **Request Body:**
        * Assistant data object with updated fields.
    * **Response:**
        * Updated assistant object if successful.
        * Error message if update fails.

* **DELETE /api/assistants/delete_assistant/:id**
    * Deletes an assistant by their ID.
    * **Path Parameter:**
        * `:id` (required): Unique identifier for the assistant.
    * **Response:**
        * Success message if deletion is successful.
        * Error message if deletion fails.


## Error Handling

Describe how the API handles errors and the format of error responses. This might include details about error codes and corresponding messages returned by the API.


## Project Structure (if applicable)

## Hirademy Backend Assignment

This Node.js, Express.js, and MySQL project provides CRUD (Create, Read, Update, Delete) operations for managing assistants within the Hirademy ecosystem.

**Prerequisites:**

* Node.js and npm (or yarn)
* MySQL database server

**Installation:**

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies (npm install or yarn install)

**Configuration:**

1. Create a `.env` file in the root directory.
2. Add environment variables for database connection details.

**Usage:**

1. Start the server (npm start or yarn start)
2. The server will typically start on port 3000 (modify `PORT` in `server.js` if needed). Use tools like Postman or cURL to interact with the API.

**API Endpoints:**

Refer to the code for specific API endpoints and their functionalities.

**Project Structure:**

* **Root Directory (index.js):**
    * Contains the main entry point (index.js) that initializes the Express app, configures middleware, registers routes, and starts the server.
* **Config Directory:**
    * Contains `connection.js` to connect to the MySQL database.
* **Controllers Directory:**
    * It contains a controller for a specific functionality  `assistantsController.js`. It handles requests and interact with models.
* **Models Directory:**
    * It represents a database model `assistant_model.sql`. IT define the schema for data.
* **Routes Directory:**
    * It represents a group of related routes in `assistantsRoutes.js`. It define API endpoints and map them to controller functions.


## Contributing

If you'd like to contribute to this project, please create a pull request on GitHub