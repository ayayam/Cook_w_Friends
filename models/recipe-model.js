const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
    recipeName: {
        type: String,
        required: [true, "Please enter recipe name"],
        minlength: [1, "Please enter at least 1 character"]
    },
    // images: {
    //     type: String,
    // },
    ingredients: {
        type: String,
        required: [true, "Please enter some ingredients"],
        minlength: [1, "Please enter at least 1 character"]
    },
    instructions: {
        type: String,
        required: [true, "Please enter instructions"],
        minlength: [1, "Please enter at least 1 character"]
    }
})

const Recipes = mongoose.model('recipes', recipeSchema);

async function runRecipes() {
    await mongoose.connect(`${process.env.DB_URL}`)
    mongoose.model('recipes', recipeSchema);
    await mongoose.model('recipes').find();
}
runRecipes();

module.exports = Recipes;