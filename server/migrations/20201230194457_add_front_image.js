
exports.up = function(knex) {
    return knex.schema.table("pokemon", table => {
        table.string("modern_imgURL");
        table.string("shiny_imgURL");
    })
};

exports.down = function(knex) {
    return knex.schema.table("pokemon", table => {
        table.dropColumn("modern_imgURL");
        table.dropColumn("shiny_imgURL");
    });
};
