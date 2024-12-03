const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mount routes
app.use('/data', dataRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
