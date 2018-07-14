// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'buefy/lib/buefy.css';
import Vue from 'vue';
import Buefy from 'buefy';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './vuex/store';

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

const token = window.localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
