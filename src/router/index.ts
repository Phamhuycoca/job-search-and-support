import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: ()=> import('../views/AdminView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // scrollBehavior(to, from) {
  //   if (to.hash) {
  //     return from.name
  //       ? {
  //           el: to.hash,
  //           top: 180,
  //           behavior: 'smooth',
  //         }
  //       : new Promise((resolve) => {
  //           setTimeout(() => {
  //             resolve({
  //               el: to.hash,
  //               top: 180,
  //               behavior: 'smooth',
  //             });
  //           }, 3000);
  //         });
  //   }
  //   return {
  //     top: 0,
  //     behavior: 'smooth',
  //   };
  // },
});

export default router
