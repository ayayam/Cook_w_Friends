const mongoose = require('mongoose');
const {Schema} = mongoose;

const shoppingListSchema = new Schema ({
    ingredient: {
        type: String,
    }
})

const ShoppingList = mongoose.model('shoppingList', shoppingListSchema);


async function runShoppingList() {
    await mongoose.connect(`${process.env.DB_URL}`)
    mongoose.model('shoppingList', shoppingListSchema)
    await mongoose.model(('shoppingList').insertMany())
}

runShoppingList();

module.exports = ShoppingList;