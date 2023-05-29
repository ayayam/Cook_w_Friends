const express = require('express');
const siteRoutes = require('./site-routes');
const cookbookRoutes = require('./cookbook-routes');
const friendsRoutes = require('./friends-routes');
const profileRoutes = require('./profile-routes');
const shoppingListRoutes = require('./shopping-list-routes');
const router = express.Router();

router.use('/', siteRoutes);
router.use('/user/:_id/cookbook', cookbookRoutes);
router.use('/user/:_id/friends', friendsRoutes);
router.use('/user/:_id/profile', profileRoutes);
router.use('/user/:_id/shopping-list', shoppingListRoutes);

module.exports = router;