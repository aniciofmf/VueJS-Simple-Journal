import axios from "axios";

const uploadImage = async (file) => {
	if (!file) {
		return;
	}

	try {
		var formData = new FormData();

		formData.append("upload_preset", "q8cbfseo");
		formData.append("file", file);

		var { data } = await axios.post("https://api.cloudinary.com/v1_1/dozcdppf0/image/upload", formData);

		return data.secure_url;
	} catch (error) {
		console.log(error);
		return error;
	}
};

export default uploadImage;
