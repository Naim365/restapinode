const express = require('express');
const router = express.Router();
const controller = require('../controller/custController');

// Customer api
router.get('/displaycustomer', controller.displayCustomer);

module.exports = router;