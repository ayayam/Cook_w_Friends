const express = require('express');
const siteRoutes = require('./site-routes');
const adminRoutes = require('./admin-routes');
const cookbookRoutes = require('./cookbook-routes');
const friendsRoutes = require('./friends-routes');
const profileRoutes = require('./profile-routes');
const shoppingListRoutes = require('./shopping-list-routes');
const router = express.Router();

router.use('/', siteRoutes);
router.use('/admin', adminRoutes);
router.use('/user/cookbook', cookbookRoutes);
router.use('/user/friends', friendsRoutes);
router.use('/user/profile', profileRoutes);
router.use('/user/shopping-list', shoppingListRoutes);

module.exports = router;