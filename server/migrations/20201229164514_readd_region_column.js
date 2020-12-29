
exports.up = function(knex) {
    return knex.schema.table("pokemon", table => {
        table.string("region");
    })
};

exports.down = function(knex) {
    return knex.schema.table("pokemon", table => {
        table.dropColumn("region");
    });
};
