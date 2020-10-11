
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
  return knex("Pokemon Members").insert(pokemonMembers);
};
