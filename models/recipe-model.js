const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
    recipeName: {
        type: String,
        // required: [true, "Please enter recipe name"],
        // minlength: [1, "Please enter at least 1 character"]
    },
    images: {
        type: String,
    },
    ingredients: {
        type: Array,
        // required: [true, "Please enter some ingredients"],
        // minlength: [1, "Please enter at least 1 character"]
    },
    instructions: {
        type: Array,
        // required: [true, "Please enter instructions"],
        // minlength: [1, "Please enter at least 1 character"]
    },
    user_id: {
        type: String
    }
    // below throws error:
    // user_id: [
    //     {type: Schema.Types.ObjectId,
    //     ref: "Users"}
    // ],
    
})

const Recipes = mongoose.model('recipes', recipeSchema);

async function runRecipes() {
    await mongoose.connect(`${process.env.DB_URL}`)
    mongoose.model('Recipes', recipeSchema);
    await mongoose.model('Recipes').find();
}
runRecipes();

module.exports = Recipes;