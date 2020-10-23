const supertest = require("supertest");
const server = require("../server/api/server");
const { missingno, mysteryGhost, skeletonKabutops, skeletonAerodactyl } = require("./classes/pokemonTestObject")

let token;

describe("pokemon exist in the pokemon table", () => {

    describe("authentication", () => {
        it("user can signup", () => {
            return supertest(server).post("/users/signup").send(credentials).then(response => {
                expect(response.status).toBe(201), expect(response.body).toBeDefined();
            })
        })
        it("get token to access pokemon router", () => {
            return supertest(server).post("/users/login").send(credentials).then(response => {
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

describe("Admins can get by Id and delete users", () => {
    it("Admins can get by Id", () => {
        return supertest(server).get("/admin/1").set("Authorization", token).then(response => {
            expect(response.status).toBe(200), expect(response.body).toBeDefined()
        })
    })
    it("Admins can delete users", () => {

    })
})

describe("Admins can make other users admin", () => {
    it("PUT", () => {
        
    })
})