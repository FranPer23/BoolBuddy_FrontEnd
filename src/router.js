import { createRouter,  createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProfilesPage from "./pages/ProfilesPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import SingleProfilePage from "./pages/SingleProfilepage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        }, 
     
        {
            path: "/profiles",
            name: "profiles",
            component: ProfilesPage,
        },
        {
            path: "/search",
            name: "search",
            component: SearchPage,
        },
       
        // {
        //     path: "/:pathMatch(.)",
        //     name: "notFound",
        //     component: NotFoundPage,
        // },
        {
            // passo un parametro al path, per visualizzare 1 singolo progetto
            path: "/profiles/:id",
            name: "single-profile",
            component: SingleProfilePage,
        },
    ],
});

export { router };
