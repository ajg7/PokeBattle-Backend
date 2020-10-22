
exports.up = function(knex) {
    return knex.schema.table("users", table => {
        table.string("email").notNullable().unique().defaultTo(0)
    })
};

exports.down = function(knex) {
    return knex.schema.table("users", table => {
        table.dropColumn("email")
    })
};
