// Import required modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Middleware
// Use morgan to log requests to the console
app.use(morgan('dev'));
// Use body-parser to parse JSON bodies
app.use(bodyParser.json());
// Use body-parser to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// Root route - responds with a simple greeting
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// About route - responds with a brief description
app.get('/about', (req, res) => {
    res.send('This is an Express server.');
});

// Handle non-existent routes
// Sends a 404 status and an error message for undefined routes
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
// Listen on the specified port and log a message to the console
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}.`);
});
