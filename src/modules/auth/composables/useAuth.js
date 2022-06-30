import { useStore } from "vuex";

const useAuth = () => {
	var store = useStore();

	var createUser = async (user) => {
		const actionResp = await store.dispatch("auth/makeUser", user);

		return actionResp;
	};

	return {
		createUser,
	};
};

export default useAuth;
