import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import journalRouter from "@/modules/journal/router/index";
import authRouter from "@/modules/auth/router/index";
import isAuthGuard from "@/modules/auth/router/guard";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/auth",
		...authRouter,
	},
	{
		path: "/journal",
		beforeEnter: [isAuthGuard],
		...journalRouter,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
