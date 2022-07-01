import axios from "axios";

const apiJournal = axios.create({
	baseURL: "https://vuejs-journal-default-rtdb.firebaseio.com",
});

apiJournal.interceptors.request.use((config) => {
	config.params = {
		auth: localStorage.getItem("idToken"),
	};

	return config;
});

export default apiJournal;
