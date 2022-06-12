export const setLoading = (state, val) => {
	state.isLoading = val;
};

export const setEntries = (state, entries) => {
	state.entries = [...state.entries, ...entries];
	setLoading(state, false);
};

export const updEntry = (state) => {};

export const addEntry = (state) => {};
