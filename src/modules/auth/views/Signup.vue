<template>
	<form @submit.prevent="submit(userForm)" class="login100-form validate-form p-b-33 p-t-5">
		<div class="wrap-input100 validate-input" data-validate="Enter email">
			<input class="input100" type="text" placeholder="Email" required v-model="userForm.email" />
			<span class="focus-input100" data-placeholder="&#xe818;"></span>
		</div>

		<div class="wrap-input100 validate-input" data-validate="Enter username">
			<input class="input100" type="text" placeholder="username" required v-model="userForm.username" />
			<span class="focus-input100" data-placeholder="&#xe82a;"></span>
		</div>

		<div class="wrap-input100 validate-input" data-validate="Enter password">
			<input class="input100" type="password" placeholder="Password" required v-model="userForm.password" />
			<span class="focus-input100" data-placeholder="&#xe80f;"></span>
		</div>

		<div class="container-login100-form-btn m-t-32">
			<button type="submit" class="login100-form-btn">Register</button>
		</div>

		<div class="container-login100-form-btn m-t-32">
			<router-link :to="{ name: 'login' }">Login</router-link>
		</div>
	</form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "@/modules/auth/composables/useAuth";
import Swal from "sweetalert2";

export default {
	setup() {
		const router = useRouter();

		const userForm = ref({
			username: "test",
			email: "test@test.com",
			password: "123123",
		});

		const { createUser } = useAuth();

		const submit = async (user) => {
			const { success, err } = await createUser(user);

			if (!success) {
				Swal.fire("Error!", err, "error");
			} else {
				router.push({ name: "noentry" });
			}
		};

		return {
			userForm,
			submit,
		};
	},
};
</script>

<style></style>
