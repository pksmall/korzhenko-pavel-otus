const express = require('express');
const router = require('./ads/AdsController');

// express app init
const app = express();

// router
app.use('/', router);

module.exports = app;
