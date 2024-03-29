import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/home/index.vue'),
        meta: {
          authRequired: undefined,
        },
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('pages/about/index.vue'),
        meta: {
          authRequired: undefined,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
