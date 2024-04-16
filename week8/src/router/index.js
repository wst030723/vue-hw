import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/FrontView/HomeView.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/FrontView/AboutView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/FrontView/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/FrontView/ProductView.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/FrontView/CheckoutView.vue'),
      },
      {
        path: 'content',
        component: () => import('../views/FrontView/ContentView.vue'),
      },

    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
