# MeowFactss

Welcome to the MeowFactss repository! Below, you'll find a detailed explanation of the project, how to set it up, and an overview of the codebase.

## Introduction
MeowFactss is a fun project designed to share interesting and random facts about cats. The goal of this project is to provide cat enthusiasts and curious individuals with fascinating information about cats in a simple and engaging manner.

## Screenshots

![Screenshot 1](https://github.com/leaish613/meowfactss/assets/146575698/d1434f29-591c-49a8-a420-e0c6ddd49568)
![Screenshot 2](https://github.com/leaish613/meowfactss/assets/146575698/0900ec12-dddf-4301-9cd4-71b3579365b1)
![Screenshot 3](https://github.com/leaish613/meowfactss/assets/146575698/4dc55f08-a973-4387-8d2e-029c9789463f)

## Project Purpose and Functionality
The MeowFactss project integrates SQLite with React to manage and display random facts about cats. The backend, written in Python, uses SQLite to store and retrieve cat facts. The frontend, built with React, communicates with the backend to fetch and display these facts to users. This setup makes MeowFactss a comprehensive full-stack application for exploring cat trivia.

Here’s how it works:
- The backend server uses SQLite as its database to store a collection of cat facts.
- The React frontend communicates with the backend API to fetch and display random cat facts.
- Users can interact with the application to view different cat facts and enjoy learning about cats.

## Features
- Provides random cat facts fetched from a SQLite database
- Full-stack application using SQLite, Python (Flask or Django), and React
- Simple and clean codebase

## Getting Started

### Prerequisites
To run this project, you need to have the following installed:
- Node.js
- Python 3.x
- SQLite
- npm (Node package manager)
- pip (Python package installer)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/leaish613/meowfactss.git
    cd meowfactss
    ```

2. Install dependencies for the frontend (React):
    ```bash
    cd frontend
    npm install
    ```

3. Install dependencies for the backend (Python):
    ```bash
    cd ../backend
    pip install -r requirements.txt
    ```

## Usage
To run the project, follow these steps:

### Start the Backend Server (SQLite + Python)
1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Run the Flask or Django server (example for Flask):
    ```bash
    python app.py
    ```
   The backend server should now be running at http://localhost:5000.

### Start the Frontend (React)
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Start the React development server:
    ```bash
    npm start
    ```
   The React app should now be running and accessible at http://localhost:3000.

## Available Scripts
This project was bootstrapped with Create React App. In the project directory, you can run:

- `npm start`: Runs the app in the development mode for the React frontend. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes, and you may see any lint errors in the console.

## SQLite Integration
This project uses SQLite as the database for storing and retrieving cat facts. The backend (Python) manages the SQLite database, providing data to the React frontend.

## Learn More
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [Create React App documentation](https://create-react-app.dev/docs/getting-started/)
  
## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

<!--

## License
This project is licensed under the MIT License. See the LICENSE file for details. -->

