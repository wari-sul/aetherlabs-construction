const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Fixed global target timestamp: February 2, 2026 — 14:30 UTC
const TARGET_TIMESTAMP = new Date('2026-02-02T14:30:00Z').getTime();

// Enable CORS for all origins (adjust for production if needed)
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Countdown API endpoint
app.get('/api/countdown', (req, res) => {
  res.json({
    end: TARGET_TIMESTAMP,
    server: Date.now()
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Countdown target: ${new Date(TARGET_TIMESTAMP).toISOString()}`);
});
