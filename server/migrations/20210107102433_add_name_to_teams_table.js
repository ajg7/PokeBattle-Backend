exports.up = function(knex) {
    return knex.schema.table("teams", table => {
        table.string("team_name");
    })
};

exports.down = function(knex) {
    return knex.schema.table("teams", table => {
        table.dropColumn("team_name");
    });
};
