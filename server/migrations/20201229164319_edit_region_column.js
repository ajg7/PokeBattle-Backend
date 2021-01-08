
exports.up = function(knex) {
    return knex.schema.table("pokemon", table => {
        table.dropColumn("region");
    })
};

exports.down = function(knex) {
    return knex.schema.table("pokemon", table => {
        table.dropColumn("region");
    });
};
