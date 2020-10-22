const { expectCt } = require("helmet");
const supertest = require("supertest");
const server = require("../server/api/server");

const credentials = {
    "email": "1Mario&Luigi1",
    "password": "Vulpix777"
}

let token;

describe("pokemon exist in the pokemon table", () => {
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
    })
})