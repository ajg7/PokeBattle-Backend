exports.up = knex => {
	return knex.schema.createTable("battles", table => {
		table.increments("id");
		table
			.integer("user_Id")
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("users")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table
			.integer("team_Id")
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("teams")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table.integer("player_score").defaultTo(0);
		table.integer("challenger_score").defaultTo(0);
	});
};

exports.down = knex => {
	return knex.schema.dropTable("battles");
};
