const supertest = require("supertest");
const server = require("../server/api/server");
const { token } = require("./auth.test");


it("give me the list of pokemon", () => {
    return supertest(server).get("/pokemon").set("Authorization", token).then(response => {
        expect(response.status).toBe(200), expect(response.body).toBeDefined();
    })
})
it.skip("give me a pokemon by its id", () => {
    const id = 65;
    return supertest(server).get(`/pokemon/${id}`).set("Authorization", token).then(response => {
        expect(response.status).toBe(200), expect(response.body).toBeDefined();
    })
})