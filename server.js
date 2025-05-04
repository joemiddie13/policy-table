const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001;

// Enable CORS for requests from your React app
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'x-api-key']
}));

// Parse JSON request bodies
app.use(express.json());

// Proxy endpoint for Anthropic API
app.post('/api/anthropic', async (req, res) => {
  try {
    console.log('Received request to proxy Anthropic API');
    
    // Extract the API key from headers
    const apiKey = req.headers['x-api-key'];
    
    if (!apiKey) {
      return res.status(400).json({ error: 'API key is required' });
    }

    // Forward the request to Anthropic
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    // Check if the response is ok
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Anthropic API error:', errorData);
      return res.status(response.status).json(errorData);
    }

    // Send the response back to the client
    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    console.error('Proxy server error:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
  console.log('Ready to proxy requests to Anthropic API');
});