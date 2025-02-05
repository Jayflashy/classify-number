const express = require("express");
const cors = require("cors");
const {numberClassifier} = require("./routes/numberClassifier");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', numberClassifier);


// 404 error
app.use((req, res, next) => {
    res.status(404).json({
      status: 'error',
      message: "Endpoint not found. "
    });
  });
// Start the server
const PORT = 2025;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});