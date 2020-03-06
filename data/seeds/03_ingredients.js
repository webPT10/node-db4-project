
exports.seed = async function(knex) {
    await knex("ingredients").insert([
        { name: "milk", quant_id: 1},
        { name: "Kix cereal", quant_id: 2},
        { name: "macaroni", quant_id: 1},
        { name: "cheddar cheese", quant_id: 3}
    ])
};
