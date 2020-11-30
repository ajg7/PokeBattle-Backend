
exports.up = function(knex) {
    return knex.schema
        .createTable("scores", table => {
            table.increments("id");
            table.integer("player_score");
            table.integer("challenger_score");
            table.integer("team_Id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("teams")
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
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("scores")
};
