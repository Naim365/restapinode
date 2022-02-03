const express = require('express');
const router = express.Router();
const multer  = require('multer');
const controller = require('../controller/custController');
const path = require('path');

const storage = multer.diskStorage({
    destination: './src/image/',
    filename: function (req, file, cb) {
       return cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});


// Customer api
router.get('/displayCustomer', controller.displayCustomer);
router.post('/createCustomer', upload.single('image'), controller.createCustomer);

module.exports = router;