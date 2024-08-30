require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start server
const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});