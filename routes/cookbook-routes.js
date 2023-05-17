const express = require('express');
const cookbookController = require('../controllers/cookbook-controllers');
const router = express.Router();

router.route('/cookbook')
    .get(cookbookController.cookbook_get)

router.route('/cookbook/recipe')
    .get(cookbookController.recipe_get)
    .delete(cookbookController.recipe_delete)

router.route('/cookbook/create-recipe')
    .post(cookbookController.create_recipe_post)

router.route('/cookbook/update_recipe')
    .put(cookbookController.update_recipe_put)



module.exports = router;