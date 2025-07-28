const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the web directory
app.use(express.static(path.join(__dirname, 'web')));

// Serve the main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

// API endpoint for mock data
app.get('/api/stats', (req, res) => {
  res.json({
    totalGames: 1247,
    totalWins: 892,
    conversionRate: 71.5,
    revenueIncrease: 23.4
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Shopify Checkout Games app running on http://localhost:${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}`);
}); 