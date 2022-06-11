<template>
	<div class="d-flex justify-content-center">
		<h1 class="align-self-center">No entry selected</h1>
	</div>

	<FabButton />
</template>

<script>
import FabButton from "../components/FabButton.vue";

export default {
	components: {
		FabButton,
	},
};
</script>

<style lang="scss" scoped>
div {
	height: 100%;
}
</style>
