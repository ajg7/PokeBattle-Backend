
exports.up = function(knex) {
    return knex.schema
        .createTable("users", table => {
            table.increments("id");
            table.string("username").notNullable().unique()
            table.string("password").notNullable()
        })
        .createTable("pokemon", table => {
            table.increments("id")
            table.string("name").notNullable().unique()
            table.string("type1").notNullable()
            table.string("type2")
            table.string("imgURL").notNullable().unique()
            table.integer("number").notNullable().unique()
            table.integer("height").notNullable()
            table.integer("weight").notNullable()
            table.string("entry").notNullable().unique()
            table.string("habitat").notNullable()
            table.boolean("legendary")
            table.boolean("mythical")
            table.boolean("ancient")
        })
        .createTable("teams", table => {
            table.increments("id")
            table.integer("user_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
        .createTable("pokemon_in_teams", table => {
            table.integer("pokemon_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer("team_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.string("nickname")
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("users")
        .dropTableIfExists("pokemon")
        .dropTableIfExists("teams")
        .dropTableIfExists("pokemon_in_teams")
};
