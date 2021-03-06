exports.seed = function (knex) {
	const pokemon = [
		{
			name: "electrode",
			type1: "electric",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/101.png",
			number: 101,
			height: 12,
			weight: 666,
			entry:
				"It stores electric energy under very high pressure. It often explodes with little or no provocation.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/101.png",
		},
		{
			name: "exeggcute",
			type1: "grass",
			type2: "psychic",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/102.png",
			number: 102,
			height: 4,
			weight: 25,
			entry:
				"Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/102.png",
		},
		{
			name: "exeggutor",
			type1: "grass",
			type2: "psychic",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/103.png",
			number: 103,
			height: 20,
			weight: 1200,
			entry:
				"Legend has it that on rare occasions, one of its heads will drop off and continue on as an exeggcute.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/103.png",
		},
		{
			name: "cubone",
			type1: "ground",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/104.png",
			number: 104,
			height: 4,
			weight: 65,
			entry:
				"Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/104.png",
		},
		{
			name: "marowak",
			type1: "ground",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/105.png",
			number: 105,
			height: 10,
			weight: 450,
			entry:
				"The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/105.png",
		},
		{
			name: "hitmonlee",
			type1: "fighting",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/106.png",
			number: 106,
			height: 15,
			weight: 498,
			entry:
				"When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/106.png",
		},
		{
			name: "hitmonchan",
			type1: "fighting",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/107.png",
			number: 107,
			height: 14,
			weight: 502,
			entry:
				"While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/107.png",
		},
		{
			name: "lickitung",
			type1: "normal",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/108.png",
			number: 108,
			height: 12,
			weight: 655,
			entry:
				"Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/108.png",
		},
		{
			name: "koffing",
			type1: "poison",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/109.png",
			number: 109,
			height: 6,
			weight: 10,
			entry:
				"Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/109.png",
		},
		{
			name: "weezing",
			type1: "poison",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/110.png",
			number: 110,
			height: 12,
			weight: 95,
			entry:
				"It lives and grows by absorbing dust, germs and poison gases that are contained in toxic waste and garbage.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/110.png",
		},
		{
			name: "rhyhorn",
			type1: "ground",
			type2: "rock",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/111.png",
			number: 111,
			height: 10,
			weight: 1150,
			entry:
				"Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying.",
			habitat: "rough-terrain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/111.png",
		},
		{
			name: "rhydon",
			type1: "ground",
			type2: "rock",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/112.png",
			number: 112,
			height: 19,
			weight: 1200,
			entry:
				"Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.",
			habitat: "rough-terrain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/112.png",
		},
		{
			name: "chansey",
			type1: "normal",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/113.png",
			number: 113,
			height: 11,
			weight: 346,
			entry:
				"A rare and elusive POKéMON that is said to bring happiness to those who manage to get it.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/113.png",
		},
		{
			name: "tangela",
			type1: "grass",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/114.png",
			number: 114,
			height: 10,
			weight: 350,
			entry:
				"The whole body is swathed with wide vines that are similar to sea­weed. Its vines shake as it walks.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/114.png",
		},
		{
			name: "kangaskhan",
			type1: "normal",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/115.png",
			number: 115,
			height: 22,
			weight: 800,
			entry:
				"The infant rarely ventures out of its mother's protective pouch until it is 3 years old.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/115.png",
		},
		{
			name: "horsea",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/116.png",
			number: 116,
			height: 4,
			weight: 80,
			entry:
				"Known to shoot down flying bugs with precision blasts of ink from the surface of the water.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/116.png",
		},
		{
			name: "seadra",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/117.png",
			number: 117,
			height: 12,
			weight: 250,
			entry:
				"Capable of swim­ming backwards by rapidly flapping its wing-like pectoral fins and stout tail.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/117.png",
		},
		{
			name: "goldeen",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/118.png",
			number: 118,
			height: 6,
			weight: 150,
			entry:
				"Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/118.png",
		},
		{
			name: "seaking",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/119.png",
			number: 119,
			height: 13,
			weight: 390,
			entry:
				"In the autumn spawning season, they can be seen swimming power­ fully up rivers and creeks.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/119.png",
		},
		{
			name: "staryu",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/120.png",
			number: 120,
			height: 8,
			weight: 345,
			entry:
				"An enigmatic POKéMON that can effortlessly regenerate any appendage it loses in battle.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/120.png",
		},
		{
			name: "starmie",
			type1: "water",
			type2: "psychic",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/121.png",
			number: 121,
			height: 11,
			weight: 800,
			entry:
				"Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/121.png",
		},
		{
			name: "mr. mime",
			type1: "psychic",
			type2: "fairy",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/122.png",
			number: 122,
			height: 13,
			weight: 545,
			entry:
				"If interrupted while it is miming, it will slap around the offender with its broad hands.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/122.png",
		},
		{
			name: "scyther",
			type1: "bug",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/123.png",
			number: 123,
			height: 15,
			weight: 560,
			entry:
				"With ninja-like agility and speed, it can create the illusion that there is more than one.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/123.png",
		},
		{
			name: "jynx",
			type1: "ice",
			type2: "psychic",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/124.png",
			number: 124,
			height: 14,
			weight: 406,
			entry:
				"Its cries sound like human speech. However, it is impossible to tell what it is trying to say.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/124.png",
		},
		{
			name: "electabuzz",
			type1: "electric",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/125.png",
			number: 125,
			height: 11,
			weight: 300,
			entry:
				"Normally found near power plants, they can wander away and cause major blackouts in cities.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/125.png",
		},
	];

	return knex("pokemon").insert(pokemon);
};
