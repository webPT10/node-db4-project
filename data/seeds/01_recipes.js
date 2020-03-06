
exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "mac-n-cheese"},
    { name: "cereal"}
  ])
};
