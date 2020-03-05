
exports.up = async function(knex) {
  await knex.schema.creatTable("recipes", (table) => {
    table.increments("id")
    table.string("name").notNull().unique()
  })

  await knex.schema.creatTable("ingredients", (table) => {
    table.increments("id")
    table.string("name").notNull().unique()
    table.integer("quant_id")
        .references("id")
        .inTable("quantity")
  })

  await knex.schema.creatTable("quantity", (table) => {
      table.increments("id")
      table.string("qty_id").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes")
};
