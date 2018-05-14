import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/pages/Landing';
import SignUp from '@/pages/SignUp';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
  ],
});
