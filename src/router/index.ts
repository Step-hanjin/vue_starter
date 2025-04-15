import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import Home from "@/pages/Home.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;