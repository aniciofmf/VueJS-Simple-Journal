<template>
	<div class="entry-container">
		<div class="px-2 pt-2">
			<input type="text" v-model="term" class="form-control" placeholder="Search entry" />
		</div>
		<div class="mt-2 d-flex flex-column">
			<button class="btn btn-primary mx-3" @click="$router.push({ name: 'entry', params: { id: 'new' } })">
				<i class="fa fa-plus-circle mx-2"></i>New entry
			</button>
		</div>
		<div class="entry-scrollable">
			<Entry v-for="item in entriesByTermComputed" :key="item.id" :entry="item" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Entry from "./Entry.vue";
export default {
	components: { Entry },
	computed: {
		...mapGetters({
			entriesByTerm: "journal/entriesByTerm",
		}),
		entriesByTermComputed() {
			return this.entriesByTerm(this.term);
		},
	},
	data() {
		return {
			term: "",
		};
	},
};
</script>

<style lang="scss" scoped>
input {
	height: 35px;
}

.entry-scrollable {
	margin-top: 10px;
	height: calc(100vh - 110px);
	overflow: scroll;
	overflow-x: hidden;
}
</style>
