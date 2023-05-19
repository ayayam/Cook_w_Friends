const express = require('express');
const profileController = require('../controllers/profile-controllers');
const router = express.Router();

router.route('/')
    .get(profileController.profile_get)
    .put(profileController.profile_edit_put)

    

module.exports = router;