import store from "@/store/";

const isAuthGuard = async (to, from, next) => {
	const { success } = await store.dispatch("auth/checkAuth");

	if (success) {
		next();
	} else {
		next({ name: "login" });
	}
};

export default isAuthGuard;
