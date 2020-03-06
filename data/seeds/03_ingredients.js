
exports.seed = async function(knex) {
    await knex("ingredients").insert([
        { name: "milk"},
        { name: "Kix cereal"},
        { name: "macaroni"},
        { name: "cheddar cheese"}
    ])
};
