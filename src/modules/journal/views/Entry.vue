<template>
	<template v-if="entry">
		<div class="entry-title d-flex justify-content-between p-2">
			<div>
				<span class="text-success fs-3 fw-bold">{{ day }}</span>
				<span class="mx-1 fs-3">{{ month }}</span>
				<span class="m2-2 fs-4 fw-light">{{ year }}</span>
			</div>

			<div>
				<input type="file" v-show="false" accept="image/jpeg,image/png,image/jpg" @change="selectImage" ref="imgRef" />
				<button v-if="showRemove" class="btn btn-danger mx-2" @click="remove">
					Remove
					<i class="mx-1 fa fa-trash-alt"></i>
				</button>

				<button @click="imageLoad" class="btn btn-primary mx-2">
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
		<img v-if="localImage" :src="localImage" class="img-thumbnail" />
	</template>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";

import FabButton from "../components/FabButton.vue";
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
			showRemove: true,
			localImage: null,
			file: null,
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
	watch: {
		id() {
			this.entryById();
		},
	},
	methods: {
		...mapActions({
			updEntry: "journal/updEntry",
			addEntry: "journal/addEntry",
			delEntry: "journal/delEntry",
		}),
		entryById() {
			var entry;

			if (this.id == "new") {
				entry = {
					text: "",
					date: new Date().getTime(),
					picture: "",
				};

				this.showRemove = false;
			} else {
				entry = this.entriesById(this.id);
				if (!entry) {
					this.$router.push({ name: "noentry" });
				}

				this.showRemove = true;
			}

			this.entry = entry;
		},

		async save() {
			new Swal({
				title: "Wait please ..",
				allowOutsideClick: false,
			});

			Swal.showLoading();

			if (this.entry.id) {
				await this.updEntry(this.entry);
			} else {
				var id = await this.addEntry(this.entry);
				this.$router.push({ name: "entry", params: { id: id } });
			}

			Swal.fire("Saved", "The entry was sucessfully saved!", "success");
		},

		async remove() {
			this.showRemove = false;

			var { isConfirmed } = await Swal.fire({
				title: "Attention",
				text: "You're about to delete the entry, please confirm",
				showDenyButton: true,
				confirmButtonText: "Yes",
			});

			if (isConfirmed) {
				await this.delEntry(this.entry.id);
				this.$router.push({ name: "noentry" });
			}

			this.showRemove = true;
		},

		selectImage($event) {
			var file = $event.target.files[0];
			var frObj = new FileReader();

			if (!file) {
				return;
			}

			frObj.readAsDataURL(file);
			frObj.onload = () => (this.localImage = frObj.result);
			this.file = file;
		},
		imageLoad() {
			this.$refs.imgRef.click();
		},
	},
	created() {
		this.entryById(this.id);
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
