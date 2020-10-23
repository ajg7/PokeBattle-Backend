const supertest = require("supertest");
const server = require("../server/api/server");

let token;

describe("pokemon exist in the pokemon table", () => {
    const credentials = {
        "email": "1Mario&Luigi1",
        "password": "Vulpix777",
        "isAdmin": true
    }

    describe("authentication", () => {
        it("get token to access pokemon router", () => {
            return supertest(server).post("/login").send(credentials).then(response => {
                expect(response.status).toBe(200)
                token = response.body.token;
            })
        })
        it("give me the list of pokemon", () => {
            return supertest(server).get("/pokemon").set("Authorization", token).then(response => {
                expect(response.status).toBe(200), expect(response.body).toBeDefined();
            })
        })
        it("give me a pokemon by its id", () => {
            const id = 65;
            return supertest(server).get(`/pokemon/${id}`).set("Authorization", token).then(response => {
                expect(response.status).toBe(200), expect(response.body).toBeDefined();
            })
        })
    })
})

describe("authorized admins can post, put, or delete pokemon from table", () => {
    describe("authorized admins can get all pokemon", () => {
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
        
        const missingo = new PokemonForTesting("missingno", "normal", null,
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

        it.skip("admins can get all pokemon through authPokemonRouter", () => {
            //can only run if pokemon is not present in list
            return supertest(server).post(/pokemon_admin/).set("Authorization", token).send(skeletonKabutops).then(response => {
                expect(response.status).toBe(201), expect(response.body).toBeDefined()
            })
        })
        it.skip("admins can edit pokemon through authPokemonRouter", () => {
            return supertest(server).put("/pokemon_admin/152").set("Authorization", token).send({habitat: "sea"}).then(response => {
                expect(response.status).toBe(200)
            })
        })
        it.skip("admins can delete pokemon through authPokemonRouter", () => {
            return supertest(server).delete("/pokemon_admin/154").set("Authorization", token).then(response => expect(response.status).toBe(200))
        })
    })
})