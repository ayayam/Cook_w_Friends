//Recipe model schema still needs to be created
// const Recipes = require('../models/recipe-model')

// module.exports = {
//     cookbook_get: (req, res) => {
//         const {_id} = req.params;
//         Recipes.find({})
//         // try removing recipeName as second param
//         // when using 'recipeName' as second param, ejs portion doesn't show but cookbook page loads
//         // adding (recipes, err) as second param did something - threw an error that recipes was undefined
//         // having just recipes or just err as second param threw an error
//         .then((recipes) => {
//             res.render('pages/cookbook', 
//             { recipes: recipes }
//         );
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     },

//     recipe_get: (req, res) => {
//         const {_id} = req.params;
//         Recipes.findOne({_id: _id})
//             .then(recipe => {
                
//                 res.render('pages/recipe', {
//                     recipe: recipe
//                 });
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     },

//     recipe_delete: (req, res) => {
//         const {_id} = req.params;
//         Recipes.deleteOne({_id: _id})
//             .then(() => {
//                 res.redirect('/cookbook')
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     },

//     create_recipe_get: (req, res) => {
//         res.render('pages/create_recipe');
//     },

//     create_recipe_post: (req, res) => {
//         const { recipeName, ingredients, instructions } = req.body;
//         const newRecipe = new Recipes ({
//             recipeName: recipeName,
//             // images: images,
//             ingredients: ingredients,
//             instructions: instructions
//         })

//         newRecipe.save();

//         res.render('pages/profile')
//     },

//     update_recipe_get: (req, res) => {
//         const { _id } = req.params;
//         Recipes.findOne({_id: _id})
//             .then(recipe => {
//                 res.render('pages/update_recipe', {
//                     recipe: recipe
//                 })
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     },

//     update_recipe_put: (req, res) => {
//         const {_id} = req.params;
//         const {recipeName, images, ingredients, instructions} = req.body;
//         Recipes.findByIdAndUpdate(_id, {$set: {
//             recipeName: recipeName,
//             images: images,
//             ingredients: ingredients,
//             instructions: instructions
//         }}, {new: true})
//             .then(() => {
//                 res.redirect('/:id')
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
// }