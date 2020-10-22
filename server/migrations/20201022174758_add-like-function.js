exports.up = function(knex) {
    return knex.schema
        .createTable("liked_pokemon", table => {
            table.integer("user_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer("pokemon_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("pokemon")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("liked_pokemon")
};
