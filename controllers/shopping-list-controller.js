// Shopping list model schema TBC

module.exports = {
    shopping_list_get: (req, res) => { 
        res.render('pages/shopping_list')
    },

    shopping_list_put: (req, res) => {
        const { _id } = req.params;
        const { ingredient } = req.body;
        ShoppingList.insertMany()
        // add ingredient items to ingredients collections, then use another post to another route (shopping list route) and make a copy to the shopping list collection
    }
}