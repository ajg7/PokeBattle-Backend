
exports.up = function(knex) {
    return knex.schema
        .createTable("users", table => {
            table.increments();
            table.string("username").notNullable().unique()
            table.string("password").notNullable()
        })
        .createTable("pokemon", table => {
            table.increments()
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
        })
        .createTable("teams", table => {
            table.increments()
            table.integer("user_Id")
            //Add foreign key methods later
        })
        .createTable("pokemon_in_teams", table => {
            table.integer("pokemon_Id")
            //Add foreign key methods later
            table.integer("team_Id")
            //Add foreign key methods later
            table.string("nickname")
        })
};

exports.down = function(knex) {

};
