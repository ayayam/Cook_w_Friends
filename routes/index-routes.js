const express = require('express');
const siteRoutes = require('./site-routes');
const adminRoutes = require('./admin-routes');
const userRoutes = require('./user-routes');
const friendsRoutes = require('./friends-routes');
const shoppingListRoutes = require('./shopping-list-routes');
const router = express.Router();

router.use('/', siteRoutes);
router.use('/admin', adminRoutes);
router.use('/user', userRoutes);
router.use('/user/friends', friendsRoutes);
router.use('/user/shopping-list', shoppingListRoutes);

module.exports = router;