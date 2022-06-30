import apiAuth from "@/api/auth";

export const makeUser = async ({ commit }, user) => {
	var { username, email, password } = user;

	try {
		const response = await apiAuth.post("/v1/accounts:signUp", {
			email,
			password,
			returnSecureToken: true,
		});

		return { success: true };
	} catch (error) {
		return { success: false, msg: error.response };
	}
};
