const express = require('express');
const router = express.Router();

// import the controllers
const controllers = require('../controllers');

// use the controllers
router.get('/', controllers.home);
router.get('/weather/:city', controllers.fetchWeather);

// export the router
module.exports = router;
