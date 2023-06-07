const express = require('express');
const userControllers = require('../controllers/user-controllers')
const router = express.Router();

router.route('/:_id')
    .get(userControllers.profile_get)
    .post(userControllers.profile_edit_put)    

router.route('/:_id/profile-edit')
    .get(userControllers.profile_edit_get)

// user/profile/:_id/cookbook/:_id

//taking out :_id from cookbook route to see if that's what's getting in the way of passing Recipes model data *DIDN'T WORK*
router.route('/:_id/cookbook')
    .get(userControllers.cookbook_get)
    .post(userControllers.create_recipe_post)

router.route('/:_id/create-recipe')
    .get(userControllers.create_recipe_get)
// /create-recipe here and action value results in: http://localhost:3000/create-recipe (Cannot GET /create-recipe)
// /create-recipe here and ./create-recipe as action value results in: http://localhost:3000/user/647b8bc1be7cdffb23adddf3/create-recipe (Cannot GET)
// /:_id/cookbook/create-recipe here and ./:_id/cookbook/create-recipe as action value results in: http://localhost:3000/user/647b8bc1be7cdffb23adddf3/user/create-recipe

router.route('/recipe/:_id/update-recipe')
    .get(userControllers.update_recipe_get)

router.route('/recipe/:_id')
    .get(userControllers.recipe_get)
    .post(userControllers.update_recipe_put)
    .delete(userControllers.recipe_delete)


module.exports = router;