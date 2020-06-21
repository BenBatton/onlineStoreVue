import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Catalog";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Catalog,
    },
    {
      path: "/todos",
      component: () => import("./views/Todos.vue"),
    },
  ],
});
