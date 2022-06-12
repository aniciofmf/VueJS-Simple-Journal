export default () => ({
	isLoading: true,
	entries: [
		{
			id: new Date().getTime(),
			date: new Date().toDateString(),
			text: "Lorem Ipsum Occaecat ea et nulla proident irure pariatur enim excepteur exercitation.",
			picture: null,
		},
		{
			id: new Date().getTime() + 1000,
			date: new Date().toDateString(),
			text: "Veniam veniam veniam cupidatat non duis deserunt aliquip est laboris labore sit nostrud quis nostrud.",
			picture: null,
		},
		{
			id: new Date().getTime() + 2000,
			date: new Date().toDateString(),
			text: "Ad sunt cupidatat ea do eu ea proident fugiat.",
			picture: null,
		},
	],
});
