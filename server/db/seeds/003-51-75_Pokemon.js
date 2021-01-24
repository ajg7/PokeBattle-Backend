exports.seed = function (knex) {
	const pokemon = [
		{
			name: "dugtrio",
			type1: "ground",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/51.png",
			number: 51,
			height: 7,
			weight: 333,
			entry:
				"A team of diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
			habitat: "cave",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/51.png",
		},
		{
			name: "meowth",
			type1: "normal",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/52.png",
			number: 52,
			height: 4,
			weight: 42,
			entry:
				"Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/52.png",
		},
		{
			name: "persian",
			type1: "normal",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/53.png",
			number: 53,
			height: 10,
			weight: 320,
			entry:
				"Although its fur has many admirers, it is tough to fraise as a pet because of its fickle meanness.",
			habitat: "cave",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/53.png",
		},
		{
			name: "psyduck",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/54.png",
			number: 54,
			height: 8,
			weight: 196,
			entry:
				"While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png",
		},
		{
			name: "golduck",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/55.png",
			number: 55,
			height: 17,
			weight: 766,
			entry:
				"Often seen swim­ming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/55.png",
		},
		{
			name: "mankey",
			type1: "fighting",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/56.png",
			number: 56,
			height: 5,
			weight: 280,
			entry:
				"Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/56.png",
		},
		{
			name: "primeape",
			type1: "fighting",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/57.png",
			number: 57,
			height: 10,
			weight: 320,
			entry:
				"Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/57.png",
		},
		{
			name: "growlithe",
			type1: "fire",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/58.png",
			number: 58,
			height: 7,
			weight: 190,
			entry:
				"Very protective of its territory. It will bark and bite to repel intruders from its space.",
			habitat: "grasland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/58.png",
		},
		{
			name: "arcanine",
			type1: "fire",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/59.png",
			number: 59,
			height: 19,
			weight: 1550,
			entry:
				"A POKéMON that has been admired since the past for its beauty. It runs agilely as if on wings.",
			habitat: "grassland",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/59.png",
		},
		{
			name: "poliwag",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/60.png",
			number: 60,
			height: 6,
			weight: 124,
			entry:
				"Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/60.png",
		},
		{
			name: "poliwhirl",
			type1: "water",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/61.png",
			number: 61,
			height: 10,
			weight: 200,
			entry:
				"Capable of living in or out of water. When out of water, it sweats to keep its body slimy.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/61.png",
		},
		{
			name: "poliwrath",
			type1: "water",
			type2: "fighting",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/62.png",
			number: 62,
			height: 13,
			weight: 540,
			entry:
				"An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.",
			habitat: "waters-edge",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/62.png",
		},
		{
			name: "abra",
			type1: "psychic",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/63.png",
			number: 63,
			height: 9,
			weight: 195,
			entry:
				"Using its ability to read minds, it will identify impending danger and teleport to safety.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/63.png",
		},
		{
			name: "kadabra",
			type1: "psychic",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/64.png",
			number: 64,
			height: 13,
			weight: 565,
			entry:
				"It emits special alpha waves from its body that induce headaches just by being close by.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/64.png",
		},
		{
			name: "alakazam",
			type1: "psychic",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/65.png",
			number: 65,
			height: 15,
			weight: 480,
			entry: "Its brain can out­ perform a super­ computer. Its IQ is said to be 5,000.",
			habitat: "urban",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/65.png",
		},
		{
			name: "machop",
			type1: "fighting",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/66.png",
			number: 66,
			height: 8,
			weight: 195,
			entry:
				"Loves to build its muscles. It trains in all styles of martial arts to become even stronger",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/66.png",
		},
		{
			name: "machoke",
			type1: "fighting",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/67.png",
			number: 67,
			height: 15,
			weight: 705,
			entry:
				"Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/67.png",
		},
		{
			name: "machamp",
			type1: "fighting",
			type2: null,
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/68.png",
			number: 68,
			height: 16,
			weight: 1300,
			entry:
				"Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/68.png",
		},
		{
			name: "bellsprout",
			type1: "grass",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/69.png",
			number: 69,
			height: 7,
			weight: 40,
			entry:
				"Even though its body is extremely skinny, it is blindingly fast when catching its prey.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/69.png",
		},
		{
			name: "weepinbell",
			type1: "grass",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/70.png",
			number: 70,
			height: 10,
			weight: 64,
			entry:
				"It spits out poison powder to immobilize the enemy and then finishes it with a spray of acid",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/70.png",
		},
		{
			name: "victreebel",
			type1: "grass",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/71.png",
			number: 71,
			height: 17,
			weight: 155,
			entry:
				"Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
			habitat: "forest",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/71.png",
		},
		{
			name: "tentacool",
			type1: "water",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/72.png",
			number: 72,
			height: 9,
			weight: 455,
			entry:
				"Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/72.png",
		},
		{
			name: "tentacruel",
			type1: "water",
			type2: "poison",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/73.png",
			number: 73,
			height: 16,
			weight: 550,
			entry:
				"The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.",
			habitat: "sea",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/73.png",
		},
		{
			name: "geodude",
			type1: "rock",
			type2: "ground",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/74.png",
			number: 74,
			height: 4,
			weight: 200,
			entry:
				"Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/74.png",
		},
		{
			name: "graveler",
			type1: "rock",
			type2: "ground",
			imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/75.png",
			number: 75,
			height: 10,
			weight: 1050,
			entry:
				"Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
			habitat: "mountain",
			legendary: false,
			mythical: false,
			ancient: false,
			region: "kanto",
			modern_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
			shiny_imgURL:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/75.png",
		},
	];

	return knex("pokemon").insert(pokemon);
};
