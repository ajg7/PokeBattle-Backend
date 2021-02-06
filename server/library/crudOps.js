const getAll = async (response, query, ...args) => {
	try {
		const data = await query(...args);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json(error.message);
	}
};

const getById = async (response, query, ...args) => {
	try {
		const data = await query(...args);
		response.status(200).json(data);
	} catch (error) {
		response.status(404).json(error.message);
	}
};

const add = async (response, query, ...args) => {
	try {
		const data = await query(...args);
		response.status(201).json(data);
	} catch (error) {
		response.status(500).json(error.message);
	}
};

const update = async (response, query, ...args) => {
	try {
		const data = await query(...args);
		response.status(204).json(data);
	} catch (error) {
		response.status(404).json(error.message);
	}
};

const remove = async (response, query, ...args) => {
	try {
		const data = await query(...args);
		response.status(200).json(data);
	} catch (error) {
		response.status(404).json(error.message);
	}
};

module.exports = {
	getAll,
	getById,
	add,
	update,
	remove,
};
