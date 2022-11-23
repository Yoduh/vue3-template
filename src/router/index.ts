import {
  createRouter,
  createWebHistory,
  // RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router';
import Home from '@/views/Home.vue';

// function redirectHome(to: RouteLocationNormalized) {
//   if (to.query.error) {
//     return { name: 'Test' };
//   }
//   return true;
// }

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
