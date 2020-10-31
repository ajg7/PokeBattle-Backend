
exports.up = function(knex) {
    return knex.schema
        .createTable("pokemon_in_teams", table => {
            table.increments("id");
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
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("pokemon_in_teams")
};
