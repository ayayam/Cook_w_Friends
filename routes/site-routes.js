const express = require('express');
const siteController = require('../controllers/site-controller');
const router = express.Router()

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

router.route('/search')
    .get(siteController.search_get)
    .post(siteController.search_post) //?

router.route('/auth/google')
    .get(siteController.google_get)

router.route('/auth/google/admin')
    .get(siteController.google_redirect_get)

router.route('/logout')
    .get(siteController.logout)


module.exports = router;