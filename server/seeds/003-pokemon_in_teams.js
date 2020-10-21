exports.seed = function (knex) {
  const nicknames = [
    {
      nickname: ""
    },
  ]

  return knex("pokemon_in_team").insert(nicknames)
}