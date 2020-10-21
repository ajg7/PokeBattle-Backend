
exports.up = function(knex) {
    return knex.schema.table("users", table => {
        table.boolean("isAdmin").notNullable().defaultTo(0)
    })
};

exports.down = function(knex) {
    return knex.schema.table("users", table => {
        table.dropColumn("isAdmin")
    })
};
