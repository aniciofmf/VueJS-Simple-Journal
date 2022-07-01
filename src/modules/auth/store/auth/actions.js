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
