class PokemonForTesting {
    constructor(name, type1, type2, imgURL, number, height, weight, entry, habitat, legendary, mythical, ancient) {
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.imgURL = imgURL;
        this.number = number;
        this.height = height;
        this.weight = weight;
        this.entry = entry;
        this.habitat = habitat;
        this.legendary = legendary;
        this.mythical = mythical;
        this.ancient = ancient;
    }
}

const missingno = new PokemonForTesting("missingno", "normal", null,
            "https://vignette.wikia.nocookie.net/brokenpkmn/images/1/1a/MissingNo.jpg/revision/latest/scale-to-width-down/340?cb=20150308194339",
            152, 1, 1, "A glitch in the matrix", "waters-edge", 0, 0, 0); 

const mysteryGhost = new PokemonForTesting("mystery ghost", "ghost", null, 
            "https://www.lifewire.com/thmb/b-DRbgrWrBs8dkcFzsSmOjQsvzE=/735x0/PokeGhost-5bc39ae74cedfd0051154962.png",
            153, 1, 1, "mysterious ghost that lives in the Pokemon Tower", "urban", 0, 0, 0);

const skeletonKabutops = new PokemonForTesting("skeleton kabutops", "rock", null, 
            "https://archive-media-0.nyafuu.org/vp/image/1468/58/1468584172753.png",
            154, 9, 450, "Undead remains of kabutops", "mountain", 0, 0, 1)
const skeletonAerodactyl = new PokemonForTesting("skeleton aerodactyl", "rock", null, 
            "https://pm1.narvii.com/5801/5f3746c0f5ad861df2d7b302633ab96811cfacd3_hq.jpg",
            154, 9, 450, "Undead remains of aerodactyl", "mountain", 0, 0, 1)

module.exports = {
    missingno,
    mysteryGhost,
    skeletonKabutops,
    skeletonAerodactyl
}