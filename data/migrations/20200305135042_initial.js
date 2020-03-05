
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

    await knex.schema.createTable("recipes_ingredients", (table) => {
        table.integer("recipes_id")
        .references("id")
        .inTable("recipes")
        //
        table.integer("ingredients_id")
        .references("id")
        .inTable("ingredients")
        //since this table doesn't need an ID column, we can make
        // the primary key a combination of the two columns
        table.primary(["recipes_id", "ingredients_id"])
    })
};

// explain dropTableIfExists
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("quantity")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
