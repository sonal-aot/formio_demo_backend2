const express = require('express');
const { getData, postData } = require('../controllers/dataController');

const router = express.Router();

// Define routes
router.get('/', getData);
router.post('/', postData);

module.exports = router;
