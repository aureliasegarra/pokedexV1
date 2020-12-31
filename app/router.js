const express = require('express');

//Import of the controllers
const mainController = require('./controllers/mainController');

const router = express.Router();

// Routes to be defined
router.get('/', mainController.homePage);



module.exports = router;