import apiAuth from "@/api/auth";

export const makeUser = async ({ commit }, user) => {
	var { username, email, password } = user;

	try {
		const {
			data: { idToken, refreshToken },
		} = await apiAuth.post("/v1/accounts:signUp", {
			email,
			password,
			returnSecureToken: true,
		});

		await apiAuth.post("/v1/accounts:update", {
			displayName: username,
			idToken,
		});

		delete user.password;

		commit("login", { user, idToken, refreshToken });

		return { success: true };
	} catch (error) {
		const {
			response: {
				data: {
					error: { message },
				},
			},
		} = error;

		return { success: false, err: message };
	}
};

export const loginUser = async ({ commit }, user) => {
	var { email, password } = user;
	try {
		const {
			data: { displayName, idToken, refreshToken },
		} = await apiAuth.post("/v1/accounts:signInWithPassword", {
			email,
			password,
			returnSecureToken: true,
		});

		delete user.password;

		user.displayName = displayName;

		commit("login", { user, idToken, refreshToken });

		return { success: true };
	} catch (error) {
		const {
			response: {
				data: {
					error: { message },
				},
			},
		} = error;

		return { success: false, err: message };
	}
};

export const checkAuth = async ({ commit }) => {
	var idToken = localStorage.getItem("idToken");
	var refreshToken = localStorage.getItem("refreshToken");

	if (!idToken) {
		commit("logout");
		return { sucess: false, err: "No token" };
	}

	try {
		const {
			data: { displayName, email },
		} = await apiAuth.post("/v1/accounts:lookup", {
			idToken,
		});

		const user = {
			displayName,
			email,
		};

		commit("login", { user, idToken, refreshToken });

		return { sucess: true };
	} catch (error) {
		commit("logout");
		const {
			response: {
				data: {
					error: { message },
				},
			},
		} = error;

		return { success: false, err: message };
	}
};
