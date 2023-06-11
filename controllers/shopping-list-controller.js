const Users = require("../models/user-model");

module.exports = {
    shopping_list_get: (req, res) => { 
        res.render('pages/shopping_list')
    },

    shopping_list_put: (req, res) => {
        const { _id } = req.params;
        const { shoppingList } = req.body;
        Users.findByIdAndUpdate(_id,
            {
                $set: {
                    shoppingList: shoppingList
                },
            },
            { new: true } 
        )
            .then((users) => {
                res.render('pages/shopping_list', {
                    users: users
                });
            })
            .catch((err) => {
                console.log(err);
            });
        // add ingredient items to ingredients collections, then use another post to another route (shopping list route) and make a copy to the shopping list collection
    }
}