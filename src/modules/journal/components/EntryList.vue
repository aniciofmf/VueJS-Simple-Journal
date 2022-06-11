<template>
	<div class="entry-container">
		<div class="px-2 pt-2">
			<input type="text" class="form-control" placeholder="Search entry" />
		</div>
		<div class="entry-scrollable">
			<Entry v-for="item in 100" :key="item" />
		</div>
	</div>
</template>

<script>
import Entry from "./Entry.vue";
export default { components: { Entry } };
</script>

<style lang="scss" scoped>
input {
	height: 35px;
}
.entry-container {
	//border-right: 1px solid #2c3e50;
	//height: calc(100vh - 75vh);
}

.entry-scrollable {
	margin-top: 10px;
	height: calc(100vh - 110px);
	overflow: scroll;
	overflow-x: hidden;
}
</style>
