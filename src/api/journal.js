import axios from "axios";

const apiJournal = axios.create({
	baseURL: "https://vuejs-journal-default-rtdb.firebaseio.com",
});

export default apiJournal;
