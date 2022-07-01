import { computed } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
	var store = useStore();
	var authStatus = computed(() => store.getters["auth/currentState"]);

	var createUser = async (user) => {
		const actionResp = await store.dispatch("auth/makeUser", user);

		return actionResp;
	};

	var loginUser = async (user) => {
		const actionResp = await store.dispatch("auth/loginUser", user);

		return actionResp;
	};

	var checkAuth = async () => {
		const actionResp = await store.dispatch("auth/checkAuth");

		return actionResp;
	};

	return {
		createUser,
		loginUser,
		checkAuth,
		authStatus,
	};
};

export default useAuth;
