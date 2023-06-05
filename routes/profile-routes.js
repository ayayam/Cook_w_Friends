const express = require('express');
const profileController = require('../controllers/profile-controllers');
const router = express.Router();

router.route('/:_id')
    .get(profileController.profile_get)
    .put(profileController.profile_edit_put)    

router.route('/profile-edit/:_id')
    .get(profileController.profile_edit_get)

    
module.exports = router;