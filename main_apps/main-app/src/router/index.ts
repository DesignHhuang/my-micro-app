import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/react16/',
  },
  {
    path: '/react16/:page*',
    name: 'react16',
    component: () => import(/* webpackChunkName: "react16" */ '../pages/react16.vue'),
  },
  {
    path: '/react17/:page*',
    name: 'react17',
    component: () => import(/* webpackChunkName: "react17" */ '../pages/react17.vue'),
  },
  {
    path: '/self/:page*',
    name: 'self',
    component: () => import(/* webpackChunkName: "self" */ '../pages/self.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes: routes
})

export default router;
