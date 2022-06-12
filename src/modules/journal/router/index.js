export default {
	name: "journal",
	component: () => import("@/modules/journal/layouts/JournalLayout.vue"),
	children: [
		{
			path: "",
			name: "noentry",
			component: () => import("@/modules/journal/views/NoEntry.vue"),
		},
		{
			path: ":id",
			name: "entry",
			component: () => import("@/modules/journal/views/Entry.vue"),
			props: (route) => {
				return {
					id: route.params.id,
				};
			},
		},
	],
};
