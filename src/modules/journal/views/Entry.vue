<template>
	<template v-if="entry">
		<div class="entry-title d-flex justify-content-between p-2">
			<div>
				<span class="text-success fs-3 fw-bold">{{ day }}</span>
				<span class="mx-1 fs-3">{{ month }}</span>
				<span class="m2-2 fs-4 fw-light">{{ year }}</span>
			</div>

			<div>
				<button class="btn btn-danger mx-2">
					Remove
					<i class="mx-1 fa fa-trash-alt"></i>
				</button>

				<button class="btn btn-primary mx-2">
					Upload Image
					<i class="mx-1 fa fa-upload"></i>
				</button>
			</div>
		</div>
		<hr />
		<div class="d-flex flex-column px-3 h-75">
			<textarea placeholder="Write your daily story" v-model="entry.text"></textarea>
		</div>

		<FabButton icon="fa-save" @save-click="save" />
		<img src="https://picsum.photos/200" class="img-thumbnail" />
	</template>
</template>

<script>
import FabButton from "../components/FabButton.vue";
import { mapGetters, mapActions } from "vuex";
import getDayMonthYear from "@/modules/journal/helpers/dateHelper";

export default {
	components: {
		FabButton,
	},
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			entry: null,
		};
	},
	computed: {
		...mapGetters({
			entriesById: "journal/entriesById",
		}),
		day() {
			const { day } = getDayMonthYear(this.entry.date);
			return day;
		},
		month() {
			const { month } = getDayMonthYear(this.entry.date);
			return month;
		},
		year() {
			const { year } = getDayMonthYear(this.entry.date);
			return year;
		},
	},
	methods: {
		...mapActions({
			updEntry: "journal/updEntry",
			addEntry: "journal/addEntry",
		}),
		entryById() {
			var entry;

			if (this.id == "new") {
				entry = {
					text: null,
					date: new Date().getTime(),
					picture: null,
				};
			} else {
				entry = this.entriesById(this.id);
				if (!entry) {
					this.$router.push({ name: "noentry" });
				}
			}

			this.entry = entry;
		},

		async save() {
			if (this.entry.id) {
				await this.updEntry(this.entry);
			} else {
				var id = await this.addEntry(this.entry);
				this.$router.push({ name: "entry", params: { id: id } });
			}
		},
	},
	created() {
		this.entryById(this.id);
	},
	watch: {
		id() {
			this.entryById();
		},
	},
};
</script>

<style lang="scss" scoped>
textarea {
	font-size: 20px;
	border: none;
	height: 100%;

	&:focus {
		outline: none;
	}
}

img {
	width: 200px;
	position: fixed;
	bottom: 150px;
	right: 20px;
	box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
