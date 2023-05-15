const express = require('express');
const siteRoutes = require('./site-routes');
const router = express.Router();

router.use('/', siteRoutes);
router.use('/user', userRoutes);


module.exports = router;