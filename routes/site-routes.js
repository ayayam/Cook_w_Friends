const express = require('express');
const router = express.Router()
const siteController = require('../controllers/site-controller');

router.route('/')
    .get(siteController.home)

router.route('/login')
    .get(siteController.login_get)
    .post(siteController.login_post)
    // redirect to profile page

router.route('/contact_us')
    .get(siteController.contact_us_get)
    .post(siteController.contact_us_post)

router.route('/register')
    .get(siteController.register_get)
    .post(siteController.register_post)

module.exports = router;