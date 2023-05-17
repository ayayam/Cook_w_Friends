const express = require('express');
const profileController = require('../controllers/profile-controllers');
const router = express.Router();

router.route('/user/:id/profile')
    .get(profileController.profile_get)

router.route('/user/:id/profile/profile_edit')
    .put(profileController.profile_edit_put)