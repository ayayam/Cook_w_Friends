const Users = require("../models/user-model");
const Recipes = require("../models/recipe-model");

module.exports = {
  profile_get: (req, res) => {
    const { _id } = req.params;
    Users.findOne({ _id: _id })
      .then((users) => {
        console.log(users);
        res.render('pages/profile', {
          users: users,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  profile_edit_put: (req, res) => {
    const { _id } = req.params;
    const { firstName, lastName, bio } = req.body;
    Users.findByIdAndUpdate(
      _id,
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          bio: bio,
        },
      },
      { new: true }
    )
      .then((users) => {
        res.render('pages/profile', { users: users });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  profile_edit_get: (req, res) => {
    const { _id } = req.params;
    Users.findOne({ _id: _id })
      .then((user) => {
        res.render('pages/profile_edit', {
          users: user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  cookbook_get: (req, res) => {
    const { _id } = req.params;
    const { username } = req.body;
    console.log(_id)
    // use when finding recipes with it's user_id
    Recipes.find({ user_id: _id })
    // Recipes.find({user: _id})
      .then((recipes) => {
        console.log(recipes)
        res.render('pages/cookbook', { recipes: recipes });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  recipe_get: (req, res) => {
    const { _id } = req.params;
    Recipes.findOne({ _id: _id })
      .then((recipe) => {
        res.render('pages/recipe', {
          recipe: recipe,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  recipe_delete: (req, res) => {
    const { _id } = req.params;
    Recipes.deleteOne({ _id: _id })
      .then(() => {
        res.redirect('/:_id/cookbook');
      })
      .catch((err) => {
        console.log(err);
      });
  },

  create_recipe_get: (req, res) => {
    res.render('pages/create_recipe', { recipe: recipe });
  },

  create_recipe_post: (req, res) => {
    const { recipeName, images, ingredients, instructions, user } = req.body;
    const newRecipe = new Recipes({
      recipeName: recipeName,
      images: images,
      ingredients: ingredients,
      instructions: instructions,
      user: user
    });

    newRecipe.save();

    res.render('pages/recipe');
  },

  update_recipe_get: (req, res) => {
    const { _id } = req.params;
    const { recipeName, images, ingredients, instructions } = req.body;
    Recipes.findOne({ _id: _id })
      .then((recipe) => {
        res.render('pages/update_recipe', {
          recipe: recipe,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  update_recipe_put: (req, res) => {
    const { _id } = req.params;
    const { recipeName, images, ingredients, instructions } = req.body;
    Recipes.findByIdAndUpdate(
      _id,
      {
        $set: {
          recipeName: recipeName,
          images: images,
          ingredients: ingredients,
          instructions: instructions,
        },
      },
      { new: true }
    )
      .then((recipe) => {
        res.render('pages/recipe', {
            recipe: recipe
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
}
