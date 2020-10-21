exports.seed = function (knex) {
  const pokemon = [
    {
      name: "missingno",
      type1: "normal",
      type2: null,
      imgURL: "https://vignette.wikia.nocookie.net/brokenpkmn/images/1/1a/MissingNo.jpg/revision/latest/scale-to-width-down/340?cb=20150308194339",
      number: 0,
      height: 9,
      weight: 9,
      entry: "Missing number.",
      habitat: "Shores of Cinnabar Island",
      legendary: false,
      mythical: false,
      ancient: false
    },
  ]

  return knex("pokemon").insert(pokemon)
}