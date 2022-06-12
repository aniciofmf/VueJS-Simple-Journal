export const entriesByTerm =
	(state) =>
	(term = "") => {
		if (term.length > 0) {
			return state.entries.filter((entry) => entry.text.toLowerCase().includes(term.toLowerCase()));
		}

		return state.entries;
	};

export const entriesById = (state) => (id) => {
	var entry = state.entries.find((entry) => entry.id == id);

	if (!entry) return;

	return entry;
};
