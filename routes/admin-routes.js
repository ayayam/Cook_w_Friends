const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controllers');

router.route('/')
    .get(adminController.landing_page)

module.exports = router;