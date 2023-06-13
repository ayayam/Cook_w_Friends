const Users = require("../models/user-model");
const Recipes = require("../models/recipe-model");

module.exports = {
  profile_get: (req, res) => {
    const { _id } = req.params;
    Users.findOne({ _id: _id })
      .then((users) => {
        // console.log(users);
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
    // const { username } = req.body;
    // console.log(_id)
    // use when finding recipes with it's user_id
    Recipes.find({ user: _id })
    // Recipes.find({user: _id})
      .sort({ recipeName: 1 })
      .then((recipes) => {
        // console.log(recipes)
        res.render('pages/cookbook', { recipes: recipes,
        userId:_id });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  recipe_get: (req, res) => {
    const { _id } = req.params;
    const { userId } = req.params;
    console.log(_id);
    Recipes.findOne({ _id: _id })
      .then((recipe) => {
        res.render('pages/recipe', {
          recipe: recipe,
          userId: userId
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  recipe_delete: (req, res) => {
    const { _id } = req.params;
    const { userId } = req.params;
    console.log(_id);
    Recipes.deleteOne({ _id: _id })
      .then(() => {
        res.redirect(`/user/${userId}/cookbook`);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  create_recipe_get: (req, res) => {
    const { recipeName, images, ingredients, instructions, user } = req.body;
    res.render('pages/create_recipe', { 
      recipeName: recipeName,
      images: images,
      ingredients: ingredients,
      instructions: instructions,
      user: user
     });
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

    res.redirect(`/user/${user}/cookbook`);

  },

  update_recipe_get: (req, res) => {
    const { _id } = req.params;
    // let ingredientsList = [];
    // for (let i = 0; i < req.body.ingredients.length; i++) {
    //   ingredientsList.push({ingredients: req.body.ingredients[i]});
    // }
    // const { recipeName, images, ingredients, instructions, user } = req.body;
    Recipes.findOne({ _id: _id })
      .then((recipe) => {
        res.render('pages/update_recipe', {
          recipe: recipe
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  update_recipe_put: (req, res) => {
    const { _id } = req.params;
    const { recipeName, images, ingredients, instructions, user } = req.body;
    // console.log(recipeName)
    Recipes.findByIdAndUpdate(
      _id,
      {
        $set: {
          recipeName: recipeName,
          images: images,
          ingredients: ingredients,
          instructions: instructions,
          user: user,
        },
      },
      { new: false }
    )
      .then((recipe) => {
        res.redirect(`/user/${user}/cookbook`);
      })
      .catch((err) => {
        console.log(err);
      });
  },
}
