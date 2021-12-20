const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

// Create express instance
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// Require API routes
const timelines = require('./routes/timelines');

// Import API Routes
app.use(timelines);

// Export the server middleware
module.exports = app;
