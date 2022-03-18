import { createRouter, createWebHashHistory, RouterOptions, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    { name: 'Home', path: '/', component: () => import('@/views/Home.vue') },
    { name: 'About', path: '/about', component: () => import('@/views/About.vue') },
]

const routerOptions: RouterOptions = {
    history: createWebHashHistory(),
    routes
};

const router = createRouter(
    routerOptions
);

export default router;
