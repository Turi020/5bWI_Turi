# Traefik Backend Application

This directory contains the backend part of the Traefik application, which is built using Express. The backend serves a fake API that provides traffic data for four districts.

## Project Structure

- **src/**: Contains the source code for the backend.
  - **controllers/**: Contains the logic for handling requests.
    - `traffic.js`: Controller for traffic data.
  - **routes/**: Contains the route definitions.
    - `api.js`: Defines the API routes for the application.
  - `app.js`: Entry point for the Express application.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Navigate to the backend directory:
   ```
   cd Traefik/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the backend server, run the following command:
```
npm start
```

The server will start and listen for requests. You can access the API at `http://localhost:3000/api/traffic`.

### API Endpoints

- `GET /api/traffic`: Returns traffic data for the four districts, including counts of high, medium, and low traffic.

### License

This project is licensed under the MIT License.