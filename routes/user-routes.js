const express = require('express');
const userControllers = require('../controllers/user-controllers')
const router = express.Router();

router.route('/:_id')
    .get(userControllers.profile_get)
    .put(userControllers.profile_edit_put)    

router.route('/:_id/profile-edit')
    .get(userControllers.profile_edit_get)

// user/profile/:_id/cookbook/:_id

//taking out :_id from cookbook route to see if that's what's getting in the way of passing Recipes model data *DIDN'T WORK*
router.route('/:_id/cookbook')
    .get(userControllers.cookbook_get)
    .post(userControllers.create_recipe_post)

router.route('/create-recipe')
    .get(userControllers.create_recipe_get)

router.route('/:_id/update-recipe')
    .get(userControllers.update_recipe_get)

router.route('/:_id/recipe/:_id')
    .get(userControllers.recipe_get)
    .put(userControllers.update_recipe_put)
    .delete(userControllers.recipe_delete)


module.exports = router;