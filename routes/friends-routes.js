const express = require('express');
const friendsController = require('../controllers/friends-controllers');
const router = express.Router();

router.route('/user/:id/friends')
    .get(friendsController.friends_get)

router.route('/user/:id/friends/friend_profile')
    .get(friendsController.friend_profile_get)

module.exports = router;