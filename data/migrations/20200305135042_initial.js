
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.string("name").notNull().unique()
  })

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id")
    table.string("name").notNull().unique()
    table.integer("quant_id")
        .references("id")
        .inTable("quantity")
  })

  await knex.schema.createTable("quantity", (table) => {
      table.increments("id")
      table.float("amount").notNull()
  })
};

// explain dropTableIfExists
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("quantity")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
