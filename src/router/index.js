import Vue from 'vue';
import Router from 'vue-router';
import store from '@/vuex/store';
import Landing from '@/pages/Landing';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import Home from '@/pages/Home';
import DailyFoodIngest from '@/pages/DailyFoodIngest';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/signin');
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/daily-food-ingest',
      name: 'DailyFoodIngest',
      component: DailyFoodIngest,
      beforeEnter: ifAuthenticated,
    },
  ],
  linkActiveClass: 'is-active',
});
