const express = require('express');
const shoppingListController = require('../controllers/shopping-list-controller');
const router = express.Router();

router.route('/user/:id/shopping_list')
    .get(shoppingListController.shopping_list_get)
    .post(shoppingListController.shopping_list_post)