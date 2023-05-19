const express = require('express');
const friendsController = require('../controllers/friends-controllers');
const router = express.Router();

router.route('/')
    .get(friendsController.friends_get)

router.route('/friend_profile/:id')
    .get(friendsController.friend_profile_get) //?

module.exports = router;