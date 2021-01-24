exports.up = knex => {
	return knex.schema.dropTable("battles");
};

exports.down = knex => {
	return knex.schema.dropTable("battles");
};
