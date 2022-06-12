import { createStore } from "vuex";
import journalModule from "@/modules/journal/store/journal";

const store = createStore({
	modules: {
		journal: journalModule,
	},
});

export default store;
