import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Service from "../views/Service.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/blog", name: "blog", component: Blog },
    { path: "/service", name: "service", component: Service },
    { path: "/contact", name: "contact", component: Contact },
  ],
});

export default router;
