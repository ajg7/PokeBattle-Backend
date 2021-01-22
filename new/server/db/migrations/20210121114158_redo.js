exports.up = knex => {
	return knex.schema.alterTable("teams", table => {
		table.string("team_name").notNullable().alter();
	});
};

exports.down = knex => {
	return knex.schema.table("team_members", table => {
		table.dropColumn("team_name");
	});
};
