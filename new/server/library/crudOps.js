const { sendError } = require("./errorHandler");

const getAll = async (response, query, name, ...args) => {
	try {
		const data = await query(...args);
		response.status(200).json(data);
	} catch (error) {
		sendError(response, error, name);
	}
};

const getById = async (response, query, name, ...args) => {
	try {
		const data = await query(...args);
		if (!data) throw new Error("Not Found");
		response.status(200).json(data[0]);
	} catch (error) {
		sendError(response, error, name);
	}
};

const add = async (response, query, name, ...args) => {
	try {
		const data = await query(...args);
		response.status(201).json(data);
	} catch (error) {
		sendError(response, error, name);
	}
};

const update = async (response, query, name, ...args) => {
	try {
		const data = await query(...args);
		console.log(data);
		if (!data) throw new Error("Not Found");
		response.status(204).end();
	} catch (error) {
		sendError(response, error, name);
	}
};

const remove = async (response, query, name, ...args) => {
	console.log(...args, "Look");
	try {
		const data = await query(...args);
		if (!data) throw new Error("Not Found");
		response.status(200).json(data);
	} catch (error) {
		sendError(response, error, name);
	}
};

module.exports = {
	getAll,
	getById,
	add,
	update,
	remove,
};
