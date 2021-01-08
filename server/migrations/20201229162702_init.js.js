
exports.up = function(knex) {
    return knex.schema
        .createTable("users", table => {
            table.increments("id");
            table.string("email").notNullable().unique();
            table.string("password").notNullable();
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
            table.string("region").notNullable();
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
        .createTable("team_members", table => {
            table.integer("pokemon_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("pokemon")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer("team_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("teams")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.string("nickname");
        })
        .createTable("liked_pokemon", table => {
            table.integer("pokemon_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("pokemon")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer("user_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
        .createTable("battles", table => {
            table.increments("id");
            table.integer("player_A_team_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("teams")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer("player_A_user_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer("player_A_score")
                .notNullable();
            table.integer("player_B_team_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("teams")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer("player_B_user_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer("player_B_score")
                .notNullable();
            table.integer("winner_team_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("teams")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
        .createTable("admins", table => {
            table.increments("id");
            table.integer("user_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("users")
        .dropTableIfExists("pokemon")
        .dropTableIfExists("teams")
        .dropTableIfExists("team_members")
        .dropTableIfExists("liked_pokemon")
        .dropTableIfExists("battles")
        .dropTableIfExists("admins");
};
