// express server
const express = require('express');
const app = express();
const port = 3000;

// import the routes
const routes = require('./routes');

// use the routes
app.use('/', routes);

// load the environment variables
require('dotenv').config();


// start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);