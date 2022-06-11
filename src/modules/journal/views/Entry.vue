<template>
	<div class="entry-title d-flex justify-content-between p-2">
		<div>
			<span class="text-success fs-3 fw-bold">1</span>
			<span class="mx-1 fs-3">May</span>
			<span class="m2-2 fs-4 fw-light">2022</span>
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
		<textarea placeholder="Write your daily story"></textarea>
	</div>

	<FabButton icon="fa-save" />
	<img src="https://picsum.photos/200" class="img-thumbnail" />
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
