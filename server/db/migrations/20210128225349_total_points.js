exports.up = knex => {
	return knex.schema.table("users", table => {
		table.integer("total_points").defaultTo(0).notNullable();
	});
};

exports.down = knex => {
	return knex.schema.dropTable("users");
};
