const express = require('express');
const shoppingListController = require('../controllers/shopping-list-controller');
const router = express.Router();

router.route('/')
    .get(shoppingListController.shopping_list_get)
    .post(shoppingListController.shopping_list_put) //? 

module.exports = router;    