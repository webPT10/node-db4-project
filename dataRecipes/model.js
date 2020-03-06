const db = require("../data/config")

// return a list of all recipes in the database
function getRecipes() {
    return db("recipes")
}

// return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
    return db("recipes")
        .select("recipes.name", "ingredients.name", "quantity.amount")
        .join("recipes_ingredients", "recipes_ingredients.recipes_id", "=", "recipes.id")
        .join("ingredients", "ingredients.id", "=", "recipes_ingredients.ingredients_id")
        .join("quantity", "quantity.id", "=", "recipes_ingredients.quantity_amount")
        .where("recipes.id", recipe_id)
}

// return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
    return db()
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}