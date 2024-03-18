import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/FrontView.vue"),
    children: [
      {
        path: "home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "login",
        component: () => import("../views/LoginView.vue"),
      },
      {
        path: "list",
        component: () => import("../views/ListView.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/CartView.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../views/admin/BackView.vue"),
    children: [
      {
      path: "products",
      component: () => import("../views/admin/ProductsView.vue"),
    },
    {
      path: "order",
      component: () => import("../views/admin/OrderView.vue"),
    }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
