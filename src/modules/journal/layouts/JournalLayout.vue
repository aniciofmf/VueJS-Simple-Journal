<template>
	<NavigationBar />

	<div v-if="isLoading" class="row justify-content-md-center">
		<div class="col-3 text-center mt-5">
			<h3>Loading Entries ...</h3>
			<div class="spinner-border text-primary" role="status"></div>
		</div>
	</div>

	<div v-else class="d-flex">
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
import { mapActions, mapState } from "vuex";

export default {
	name: "JournalLayout",
	components: {
		NavigationBar,
		EntryList,
	},
	computed: {
		...mapState({
			isLoading: (state) => state.journal.isLoading,
		}),
	},
	methods: {
		...mapActions({
			getEntries: "journal/getEntries",
		}),
	},
	created() {
		this.getEntries();
	},
};
</script>

<style></style>
