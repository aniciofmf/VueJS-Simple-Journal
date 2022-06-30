import { useStore } from "vuex";

const useAuth = () => {
	var store = useStore();

	var createUser = async (user) => {};

	return {
		createUser,
	};
};

export default useAuth;
