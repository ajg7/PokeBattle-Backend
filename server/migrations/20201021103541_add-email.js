
exports.up = function(knex) {
    return knex.schema.table("users", table => {
        table.string("email").notNullable().defaultTo("empty")
    })
};

exports.down = function(knex) {
    return knex.schema.table("users", table => {
        table.dropColumn("email")
    })
};
