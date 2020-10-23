const supertest = require("supertest");
const server = require("../server/api/server");
const { missingno, mysteryGhost, skeletonKabutops, skeletonAerodactyl } = require("./classes/pokemonTestObject");
const { user1, user2, user3, user4, user5, user6 } = require("./classes/userTestObjects");
const { token } = require("./auth.test");


describe("authorized admins can post, put, or delete pokemon from table", () => {
        it.skip("admins can post a new pokemon through authPokemonRouter", () => {
            //can only run if pokemon is not present in list
            return supertest(server).post(/pokemon_admin/).set("Authorization", token).send(mysteryGhost).then(response => {
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


describe("Admins can get by Id and delete users", () => {
    it.skip("Admins can get by Id", () => {
        return supertest(server).get("/admin/1").set("Authorization", token).then(response => {
            expect(response.status).toBe(200), expect(response.body).toBeDefined()
        })
    })
    it.skip("Admins can delete users", () => {

    })
})

describe("Admins can make other users admin", () => {
    it.skip("PUT", () => {
        
    })
})