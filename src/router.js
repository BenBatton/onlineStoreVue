import Vue from "vue";
import Router from "vue-router";
import Catalog from "@/views/Catalog";

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
    {
      path: "/checkout",
      component: () => import("./views/Checkout.vue"),
    },
    {
      path: "/ShopCart",
      component: () => import("./views/ShoppingCart.vue"),
    },
    {
      path: "/Product",
      component: () => import("./views/SingleProduct.vue"),
    },
  ],
});
