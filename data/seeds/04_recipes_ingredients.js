
exports.seed = async function(knex) {
    await knex("recipes_ingredients").insert([
        { recipes_id: 1, ingredients_id: 1, quantity_amount: 1 },
        { recipes_id: 1, ingredients_id: 3, quantity_amount: 2 },
        { recipes_id: 1, ingredients_id: 4, quantity_amount: 3},
        { recipes_id: 2, ingredients_id: 1, quantity_amount: 1},
        { recipes_id: 2, ingredients_id: 2, quantity_amount: 3},
    ])
};
