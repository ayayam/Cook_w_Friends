const express = require('express');
const router = express.Router()
const siteController = require('../controllers/site-controller');

router.route('/')
    .get(siteController.home)

router.route('/login')
    .get(siteController.login)
    // redirect to profile page

router.route('/contact_us')
    .get(siteController.contact_us)

module.exports = router;