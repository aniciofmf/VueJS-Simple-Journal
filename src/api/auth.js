import axios from "axios";

const apiAuth = axios.create({
	baseURL: "https://identitytoolkit.googleapis.com",
	params: {
		key: "AIzaSyA863udnkh0kv55gDoMzvurzcgyDirHc5w",
	},
});

export default apiAuth;
