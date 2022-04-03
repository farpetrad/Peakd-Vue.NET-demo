import {
  createRouter,
  createWebHistory,
  RouterOptions,
  RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: () => import("../views/HomePage.vue"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import("../views/AboutPage.vue"),
  },
];

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  routes,
};

const router = createRouter(routerOptions);

export default router;
