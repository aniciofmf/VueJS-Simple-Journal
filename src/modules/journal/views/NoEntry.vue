<template>
	<div class="d-flex justify-content-center">
		<h1 class="align-self-center">No entry selected</h1>
	</div>

	<FabButton @click="addEntry" />
</template>

<script>
import FabButton from "../components/FabButton.vue";

export default {
	components: {
		FabButton,
	},
	methods: {
		addEntry() {
			this.$router.push({ name: "entry", params: { id: "new" } });
		},
	},
};
</script>

<style lang="scss" scoped>
div {
	height: 100%;
}
</style>
