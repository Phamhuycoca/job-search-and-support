import { createRouter, createWebHistory, type NavigationGuardWithThis, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VueRouteMiddleware, { GLOBAL_MIDDLEWARE_NAME } from './middleware';
import authMiddleware from './authMiddleware';
import { PageName } from '@/common/constants';
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
    meta:{
      public:true
    }
  },
  {
    path: '',
    name: PageName.LOGIN_PAGE,
    component: ()=>import('../pages/Auth/Login.vue'),
    meta:{
      public:true
    }
  },
  {
    path: '/admin',
    redirect:'/admin/dashboard',
    name: 'admin',
    component: ()=> import('../views/AdminView.vue'),
    meta:{
      public:true
    },
    children:[
      {
        path: 'dashboard',
        name: PageName.DASHBOARD_PAGE,
        component: ()=>import('../layouts/Admin/Dashboard.vue'),
      },
    ]
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
router.beforeEach(
  VueRouteMiddleware({
    [GLOBAL_MIDDLEWARE_NAME]: authMiddleware,
  }) as NavigationGuardWithThis<unknown>,
);

export default router
