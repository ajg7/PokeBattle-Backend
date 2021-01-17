exports.seed = function (knex) {
	const pokemon = [
		{
			name: "bulbasaur",
			type1: "grass",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
			number: 1,
			height: 7,
			weight: 69,
			entry:
				"A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
		},
		{
			name: "ivysaur",
			type1: "grass",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/2.png",
			number: 2,
			height: 10,
			weight: 130,
			entry:
				"When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
		},
		{
			name: "venusaur",
			type1: "grass",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/3.png",
			number: 3,
			height: 6,
			weight: 85,
			entry:
				"The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
		},
		{
			name: "charmander",
			type1: "fire",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/4.png",
			number: 4,
			height: 7,
			weight: 69,
			entry:
				"Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
		},
		{
			name: "charmeleon",
			type1: "fire",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/5.png",
			number: 5,
			height: 11,
			weight: 190,
			entry:
				"When it swings its burning tail, it elevates the temperature to unbearably high levels.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
		},
		{
			name: "charizard",
			type1: "fire",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/6.png",
			number: 6,
			height: 17,
			weight: 905,
			entry:
				"Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
		},
		{
			name: "squirtle",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/7.png",
			number: 7,
			height: 5,
			weight: 90,
			entry:
				"Shoots water at prey while in the water. Withdraws into its shell when in danger.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
		},
		{
			name: "wartortle",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/8.png",
			number: 8,
			height: 10,
			weight: 225,
			entry:
				"When tapped, this POKéMON will pull in its head, but its tail will still stick out a little bit.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
		},
		{
			name: "blastoise",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/9.png",
			number: 9,
			height: 16,
			weight: 855,
			entry:
				"It deliberately makes itself heavy so it can with­ stand the recoil of the water jets it fires.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
		},
		{
			name: "caterpie",
			type1: "bug",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/10.png",
			number: 10,
			height: 3,
			weight: 29,
			entry:
				"It releases a stench from its red antenna to repel enemies. It grows by molting repeatedly.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png",
		},
		{
			name: "metapod",
			type1: "bug",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/11.png",
			number: 11,
			height: 3,
			weight: 29,
			entry:
				"This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png",
		},
		{
			name: "butterfree",
			type1: "bug",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/12.png",
			number: 12,
			height: 11,
			weight: 320,
			entry:
				"In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png",
		},
		{
			name: "weedle",
			type1: "bug",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/13.png",
			number: 13,
			height: 3,
			weight: 32,
			entry:
				"Often found in forests, eating leaves. It has a sharp venomous stinger on its head.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/13.png",
		},
		{
			name: "kakuna",
			type1: "bug",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/14.png",
			number: 14,
			height: 6,
			weight: 100,
			entry:
				"Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/14.png",
		},
		{
			name: "beedrill",
			type1: "bug",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/15.png",
			number: 15,
			height: 10,
			weight: 295,
			entry:
				"Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png",
		},
		{
			name: "pidgey",
			type1: "normal",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/16.png",
			number: 16,
			height: 3,
			weight: 18,
			entry:
				"A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png",
		},
		{
			name: "pidgeotto",
			type1: "normal",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/17.png",
			number: 17,
			height: 11,
			weight: 300,
			entry:
				"Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png",
		},
		{
			name: "pidgeot",
			type1: "normal",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/18.png",
			number: 18,
			height: 15,
			weight: 395,
			entry:
				"When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png",
		},
		{
			name: "rattata",
			type1: "normal",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/19.png",
			number: 19,
			height: 3,
			weight: 35,
			entry:
				"Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png",
		},
		{
			name: "raticate",
			type1: "normal",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/20.png",
			number: 20,
			height: 7,
			weight: 185,
			entry:
				"It uses its whis­kers to maintain its balance. It apparently slows down if they are cut off.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png",
		},
		{
			name: "spearow",
			type1: "normal",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/21.png",
			number: 21,
			height: 3,
			weight: 20,
			entry:
				"Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne",
			habitat: "rough-terrain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/21.png",
		},
		{
			name: "fearow",
			type1: "normal",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/22.png",
			number: 22,
			height: 12,
			weight: 380,
			entry:
				"With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
			habitat: "rough-terrain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/22.png",
		},
		{
			name: "ekans",
			type1: "poison",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/23.png",
			number: 23,
			height: 20,
			weight: 69,
			entry:
				"Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/23.png",
		},
		{
			name: "arbok",
			type1: "poison",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/24.png",
			number: 24,
			height: 35,
			weight: 650,
			entry:
				"It is rumored that the ferocious warning markings on its belly differ from area to area.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/24.png",
		},
	];

	return knex("pokemon").insert(pokemon);
};
