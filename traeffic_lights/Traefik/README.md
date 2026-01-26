# Traefik Project

This project is a web application that provides traffic data visualization for four districts. The application consists of a frontend built with React, Vite, and Tailwind CSS, and a backend built with Express that serves a fake API.

## Project Structure

```
Traefik
├── frontend          # Frontend application
│   ├── src
│   │   ├── components # React components
│   │   │   └── District.jsx
│   │   ├── App.jsx    # Main application component
│   │   └── main.jsx   # Entry point for React
│   ├── index.html     # Main HTML file
│   ├── package.json    # Frontend dependencies and scripts
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── vite.config.js  # Vite configuration
│   └── README.md      # Frontend documentation
├── backend           # Backend application
│   ├── src
│   │   ├── controllers # Controller for traffic data
│   │   │   └── traffic.js
│   │   ├── routes      # API routes
│   │   │   └── api.js
│   │   └── app.js      # Entry point for Express
│   ├── package.json    # Backend dependencies and scripts
│   └── README.md      # Backend documentation
└── README.md         # Overall project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Traefik
   ```

2. Install dependencies for the frontend:
   ```
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```
   cd ../backend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

### Usage

- The application displays traffic data for four districts, each represented by a different color.
- Click on a district to view detailed traffic data in a diagram.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License.