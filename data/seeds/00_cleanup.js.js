
exports.seed = async function(knex) {
  await knex("recipes_ingredients").truncate()
  await knex("ingredients").truncate()
  await knex("quantity").truncate()
  await knex("recipes").truncate()
};
