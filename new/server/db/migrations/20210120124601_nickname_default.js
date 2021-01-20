exports.up = knex => {
	return knex.schema.table("team_members", table => {
		table.string("nickname").defaultTo(null);
	});
};

exports.down = knex => {
	return knex.schema.table("team_members", table => {
		table.dropColumn("nickname");
	});
};
