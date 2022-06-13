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

export const updEntry = async ({ commit }, entry) => {
	var { date, picture, text } = entry;
	await apiJournal.put(`entries/${entry.id}.json`, {
		date,
		picture,
		text,
	});

	commit("updEntry", entry);
};

export const addEntry = async ({ commit }, entry) => {
	var { data } = await apiJournal.post("/entries.json", {
		...entry,
	});

	entry.id = data.name;

	commit("addEntry", entry);

	return data.name;
};
