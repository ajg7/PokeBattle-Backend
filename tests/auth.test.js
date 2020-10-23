const supertest = require("supertest");
const server = require("../server/api/server");
const { user1, user2, user3, user4, user5, user6 } = require("./classes/userTestObjects");

let token;

describe("pokemon exist in the pokemon table", () => {

    describe("authentication", () => {
        it.skip("user can signup", () => {
            return supertest(server).post("/users/signup").send(user6).then(response => {
                expect(response.status).toBe(201), expect(response.body).toBeDefined();
            })
        })
        it.skip("get token to access pokemon router", () => {
            return supertest(server).post("/users/login").send(user1).then(response => {
                expect(response.status).toBe(200)
                token = response.body.token;
            })
        })
    })
})

module.exports.token = token;