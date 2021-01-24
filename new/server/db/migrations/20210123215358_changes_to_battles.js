exports.up = knex => {
	return knex.schema.alterTable("battles", table => {
		table.renameColumn("player_A_score", "wins");
		table.renameColumn("player_B_score", "losses");
		table.dropColumn("player_B_team_Id");
		table.dropColumn("player_B_user_Id");
		table.dropColumn("winner_team_Id");
		table.dropColumn("winner_user_Id");
	});
};

exports.down = knex => {
	return knex.schema.table("battles", table => {
		table.dropColumn("wins");
		table.dropColumn("losses");
		table.dropColumn("player_B_team_Id");
		table.dropColumn("player_B_user_Id");
		table.dropColumn("winner_team_Id");
		table.dropColumn("winner_user_Id");
	});
};
