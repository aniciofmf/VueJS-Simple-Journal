<template>
	<NavigationBar />

	<div class="d-flex">
		<div class="col-4">
			<EntryList />
		</div>
		<div class="col">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import EntryList from "../components/EntryList.vue";
export default {
	name: "JournalLayout",
	components: {
		NavigationBar,
		EntryList,
	},
};
</script>

<style></style>
