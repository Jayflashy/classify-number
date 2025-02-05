const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', numberClassifier);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});