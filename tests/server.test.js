const { expectCt } = require("helmet");
const supertest = require("supertest");
const server = require("../server/api/server");

describe("pokemon exist in the pokemon table", () => {
    const credentials = {
        "email": "1Mario&Luigi1",
        "password": "Vulpix777"
    }
    
    let token;
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
    const credentials = {
        "email": "1Mario&Luigi1",
        "password": "Vulpix777",
        "isAdmin": true
    }
    
    let token;

    const pokemonToTest = {
        "name": "missingno",
        "type1": "normal",
        "type2": null,
        "imgURL": "https://vignette.wikia.nocookie.net/brokenpkmn/images/1/1a/MissingNo.jpg/revision/latest/scale-to-width-down/340?cb=20150308194339",
        "number": 152,
        "height": 9,
        "weight": 1,
        "entry": "A glitch in the matrix",
        "habitat": "waters-edge",
        "legendary": false,
        "mythical": false,
        "ancient": false
    }

    describe("authorized admins can get all pokemon", () => {
        it("admins can get all pokemon through authPokemonRouter", () => {

        })
    })
})