exports.seed = function (knex) {
  const users = [
    {
      username: "admin777",
      password: "Romans8:37"
    }
  ]

  return knex("users").insert(users)
}