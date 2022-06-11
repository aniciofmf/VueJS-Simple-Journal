<template>
	<div class="home"></div>
</template>

<script>
export default {
	mounted() {
		this.$router.push({ name: "noentry" });
	},
};
</script>
