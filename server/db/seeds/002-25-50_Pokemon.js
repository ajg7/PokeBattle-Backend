exports.seed = function (knex) {
	const pokemon = [
		{
			name: "pikachu",
			type1: "electric",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/25.png",
			number: 25,
			height: 4,
			weight: 60,
			entry:
				"When several of these POKéMON gather, their electricity could build and cause lightning storms.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
		},
		{
			name: "raichu",
			type1: "electric",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/26.png",
			number: 26,
			height: 8,
			weight: 300,
			entry:
				"Its tail discharges electricity into the ground, protecting it from getting shocked.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/26.png",
		},
		{
			name: "sandshrew",
			type1: "ground",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/27.png",
			number: 27,
			height: 6,
			weight: 120,
			entry:
				"Burrows deep underground in arid locations far from water. It only emerges to hunt for food.",
			habitat: "rough-terrain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/27.png",
		},
		{
			name: "sandslash",
			type1: "ground",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/28.png",
			number: 28,
			height: 10,
			weight: 295,
			entry:
				"Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
			habitat: "rough-terrain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/28.png",
		},
		{
			name: "nidoran ♀",
			type1: "poison",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/29.png",
			number: 29,
			height: 4,
			weight: 70,
			entry:
				"Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/29.png",
		},
		{
			name: "nidorina",
			type1: "poison",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/30.png",
			number: 30,
			height: 8,
			weight: 200,
			entry:
				"The female's horn develops slowly. Prefers physical attacks such as clawing and biting.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/30.png",
		},
		{
			name: "nidoqueen",
			type1: "poison",
			type2: "ground",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/31.png",
			number: 31,
			height: 13,
			weight: 600,
			entry:
				"Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/31.png",
		},
		{
			name: "nidoran ♂",
			type1: "poison",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/32.png",
			number: 32,
			height: 5,
			weight: 90,
			entry:
				"Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/32.png",
		},
		{
			name: "nidorino",
			type1: "poison",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/33.png",
			number: 33,
			height: 9,
			weight: 195,
			entry:
				"An aggressive POKéMON that is quick to attack. The horn on its head secretes a powerful venom.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/33.png",
		},
		{
			name: "nidoking",
			type1: "poison",
			type2: "ground",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/34.png",
			number: 34,
			height: 14,
			weight: 620,
			entry:
				"One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/34.png",
		},
		{
			name: "clefairy",
			type1: "fairy",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/35.png",
			number: 35,
			height: 6,
			weight: 75,
			entry:
				"Its magical and cute appeal has many admirers. It is rare and found only in certain areas.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png",
		},
		{
			name: "clefable",
			type1: "fairy",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/36.png",
			number: 36,
			height: 13,
			weight: 400,
			entry:
				"A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/36.png",
		},
		{
			name: "vulpix",
			type1: "fire",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/37.png",
			number: 37,
			height: 6,
			weight: 99,
			entry:
				"At the time of birth, it has just one tail. The tail splits from its tip as it grows older.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/37.png",
		},
		{
			name: "ninetales",
			type1: "fire",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/38.png",
			number: 38,
			height: 11,
			weight: 199,
			entry:
				"Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/38.png",
		},
		{
			name: "jigglypuff",
			type1: "normal",
			type2: "fairy",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/39.png",
			number: 39,
			height: 5,
			weight: 55,
			entry:
				"When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png",
		},
		{
			name: "wigglytuff",
			type1: "normal",
			type2: "fairy",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/40.png",
			number: 40,
			height: 10,
			weight: 120,
			entry:
				"The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/40.png",
		},
		{
			name: "zubat",
			type1: "poison",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/41.png",
			number: 41,
			height: 8,
			weight: 75,
			entry:
				"Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
			habitat: "cave",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/41.png",
		},
		{
			name: "golbat",
			type1: "poison",
			type2: "flying",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/42.png",
			number: 42,
			height: 16,
			weight: 550,
			entry:
				"Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.",
			habitat: "cave",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/42.png",
		},
		{
			name: "oddish",
			type1: "grass",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/43.png",
			number: 43,
			height: 5,
			weight: 54,
			entry:
				"During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/43.png",
		},
		{
			name: "gloom",
			type1: "grass",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/44.png",
			number: 44,
			height: 8,
			weight: 86,
			entry:
				"It secretes a sticky, drool-like honey. Although sweet, it smells too repulsive to get very close.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/44.png",
		},
		{
			name: "vileplume",
			type1: "grass",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/45.png",
			number: 45,
			height: 12,
			weight: 186,
			entry:
				"It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/45.png",
		},
		{
			name: "paras",
			type1: "bug",
			type2: "grass",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/46.png",
			number: 46,
			height: 3,
			weight: 54,
			entry:
				"Burrows to suck tree roots. The mushrooms on its back grow by draw­ing nutrients from the bug host.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/46.png",
		},
		{
			name: "parasect",
			type1: "bug",
			type2: "grass",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/47.png",
			number: 47,
			height: 10,
			weight: 295,
			entry:
				"A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/47.png",
		},
		{
			name: "venonat",
			type1: "bug",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/48.png",
			number: 48,
			height: 10,
			weight: 300,
			entry:
				"Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/48.png",
		},
		{
			name: "venomoth",
			type1: "bug",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/49.png",
			number: 49,
			height: 15,
			weight: 125,
			entry:
				"The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/49.png",
		},
		{
			name: "diglett",
			type1: "ground",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/50.png",
			number: 50,
			height: 2,
			weight: 8,
			entry:
				"Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.",
			habitat: "cave",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/50.png",
		},
	];

	return knex("pokemon").insert(pokemon);
};
