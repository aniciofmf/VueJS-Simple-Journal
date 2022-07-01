export const setLoading = (state, val) => {
	state.isLoading = val;
};

export const setEntries = (state, entries) => {
	state.entries = [...state.entries, ...entries];
	setLoading(state, false);
};

export const updEntry = (state, entry) => {
	setLoading(state, true);
	var id = state.entries.map((e) => e.id).indexOf(entry.id);
	state.entries[id] = entry;
	setLoading(state, false);
};

export const addEntry = (state, entry) => {
	setLoading(state, true);
	state.entries = [entry, ...state.entries];
	setLoading(state, false);
};

export const delEntry = (state, id) => {
	state.entries = state.entries.filter((e) => e.id != id);
};

export const resetEntries = (state) => {
	state.entries = [];
};
