//Recipe model schema still needs to be created

module.exports = {
    cookbook_get: (req, res) => {
        res.render('pages/cookbook');
    },

    recipe_get: (req, res) => {
        const {_id} = req.params;
        Recipes.findOne({_id: _id})
            .then(recipe => {
                res.render('pages/recipe', {
                    recipe: recipe
                });
            })
            .catch((err) => {
                console.log(err);
            })
    },

    recipe_delete: (req, res) => {
        const {_id} = req.params;
        Recipes.deleteOne({_id: _id})
            .then(() => {
                res.redirect('/cookbook')
            })
            .catch(err => {
                console.log(err)
            })
    },

    create_recipe_post: (req, res) => {
        const {} = req.body;
        const newRecipe = new Recipes ({
            recipeName: recipeName,
            images: images,
            ingredients: ingredients,
            instructions: instructions
        })

        newRecipe.save();

        res.redirect('/:id')
    },

    update_recipe_put: (req, res) => {
        const {_id} = req.params;
        const {recipeName, images, ingredients, instructions} = req.body;
        Recipes.findByIdAndUpdate(_id, {$set: {
            recipeName: recipeName,
            images: images,
            ingredients: ingredients,
            instructions: instructions
        }}, {new: true})
            .then(() => {
                res.redirect('/:id')
            })
            .catch(err => {
                console.log(err)
            })
    }
}