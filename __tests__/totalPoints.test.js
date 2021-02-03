const supertest = require("supertest");
const server = require("../server/api/server");

describe("Total Points", () => {
	test("Get Total Points", () => {
		return supertest(server)
			.get(`/users/points/${22}`)
			.then(response => expect(response.status).toBe(200));
	});
	test("Update Total Points", () => {
		const updatedPoints = { points: 5 };
		return supertest(server)
			.put(`/users/points/${22}`)
			.send(updatedPoints)
			.then(response => expect(response.status).toBe(204));
	});
});
