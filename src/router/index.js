import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HardvearView from "../views/HardvearView.vue";
import HardverDetailView from "../views/HardverDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/hardvear",
      name: "hardvear",
      component: HardvearView,
    },
    {
      path: "/product/:id",
      name: "pruduct",
      component: HardverDetailView,
    }
  ],
});

export default router;
