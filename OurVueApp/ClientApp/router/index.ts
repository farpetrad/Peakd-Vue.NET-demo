import { createRouter, createWebHashHistory, RouterOptions, RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue'

const routes: RouteRecordRaw[] = [
    { name: 'Home', path: '/', component: defineAsyncComponent(() => import('@/views/Home.vue')) },
]

const routerOptions: RouterOptions = {
    history: createWebHashHistory(),
    routes
};

const router = createRouter(
    routerOptions
);

export default router;
