import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import FilmPage from "@/pages/FilmPage.vue";
import ErrorPage from "@/components/ErrorPage.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/FilmPage/:id',
        component: FilmPage
    },
    {
        path: '/:pathMatch(.*)*',
        component: ErrorPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})


export default router;