
exports.seed = function(knex) {
  const pokemonMembers = [
    {
      "Name": "missingno",
      "Type1": "Normal",
      "Type2": null,
      "ImgUrl": "https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png",
      "PokemonNumber": 152
    }
  ]
  pokemonMembers.length < 6 ? knex("Pokemon Members").insert(pokemonMembers) : knex("Pokemon Members");
};
