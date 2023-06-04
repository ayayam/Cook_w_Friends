const express = require('express');
const profileController = require('../controllers/profile-controllers');
const router = express.Router();

router.route('/:_id')
    .get(profileController.profile_get)
    

router.route('/profile-edit')
    .get(profileController.profile_edit_get)
    .put(profileController.profile_edit_put)
    

module.exports = router;