import { createRouter, createWebHistory } from 'vue-router';
import homeP from "@/pages/homeP";
import blogP from "@/pages/blogP";
import projectsP from "@/pages/projectsP";
import notFound from "@/pages/notFound";
import articlesP from "@/pages/articlesP";
import detailsP from "@/pages/detailsP";


const routes = [
    {
        path: "/",  
        Name: "Home",
        component: homeP,
    },
    {
        path: "/projects",
        name: "Projects",
        component: projectsP,
    },
    {
        path: "/blog",
        name: "Blog",
        component: blogP,
    },
    {
        path: "/articles",
        name: "Articles",
        component: articlesP,
    },
    {
        path: "/details",
        name: "Details",
        component: detailsP,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router 