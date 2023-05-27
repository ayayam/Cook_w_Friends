const express = require('express');
const cookbookController = require('../controllers/cookbook-controllers');
const router = express.Router();

router.route('/')
    .get(cookbookController.cookbook_get)
    .post(cookbookController.create_recipe_post)

router.route('/create-recipe')
    .get(cookbookController.create_recipe_get)

router.route('/:id')
    .get(cookbookController.recipe_get)
    .put(cookbookController.update_recipe_put)
    .delete(cookbookController.recipe_delete)



module.exports = router;