exports.up = function (knex) {
	return knex.schema.table("team_members", table => {
		table.dropColumn("nickname");
	});
};

exports.down = function (knex) {
	return knex.schema.table("team_members", table => {
		table.dropColumn("nickname");
	});
};
