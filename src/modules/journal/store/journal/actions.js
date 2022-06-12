import apiJournal from "@/api/journal";

export const getEntries = async ({ commit }) => {
	var { data } = await apiJournal.get("/entries.json");

	const entries = [];
	for (let id of Object.keys(data)) {
		entries.push({
			id,
			...data[id],
		});
	}

	commit("setEntries", entries);
};

export const updEntry = async ({ commit }) => {};

export const addEntry = async ({ commit }) => {};
