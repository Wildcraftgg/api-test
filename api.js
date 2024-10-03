// Import Express
const express = require('express');

// Create an Express application
const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  // Send JSON response
  res.json({ message: 'Hello' });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
