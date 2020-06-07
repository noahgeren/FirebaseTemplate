import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Index,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: async (to, from, next) => {
      if (!await store.dispatch('getCurrentUser')) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (await store.dispatch('getCurrentUser')) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
