const express = require('express');
const siteRoutes = require('./site-routes');
const cookbookRoutes = require('./cookbook-routes');
const friendsRoutes = require('./friends-routes');
const profileRoutes = require('./profile-routes');
const shoppingListRoutes = require('./shopping-list-routes');
const router = express.Router();

router.use('/', siteRoutes);
router.use('/user/:id/cookbook', cookbookRoutes);
router.use('/user/:id/friends', friendsRoutes);
router.use('/user/:id/profile', profileRoutes);
router.use('/user/:id/shopping-list', shoppingListRoutes);

module.exports = router;