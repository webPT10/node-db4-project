
exports.seed = async function(knex) {
    await knex("quantity").insert([
        { amount: "1 cup"},
        { amount: "2/3 cup"},
        {amount: "2 cups"}
    ])
};
