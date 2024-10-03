// Import Express and Axios
const express = require('express');
const axios = require('axios');

// Create an Express application
const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Define a route that fetches data from another API
app.get('/getData', async (req, res) => {
  try {
    // Fetch data from an external API (replace with your target API URL)
    const response = await axios.get('https://assetdelivery.roblox.com/v2/asset/?id=307181070');

    // Send the fetched data as the response in JSON format
    res.json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    // Handle errors (e.g., if the external API fails)
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch data from the external API',
    });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
