<template>
  <div id="app">
    <app-navbar v-show="shouldShowNavbar"></app-navbar>

    <template v-if="!shouldUseDashboardLayout"><router-view/></template>

    <div v-if="shouldUseDashboardLayout" class="container">
      <div class="colums">
        <div class="column is-3">
          <app-sidebar></app-sidebar>
        </div>
        <div class="column is-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import AppNavbar from './components/Navbar';
import AppSidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppSidebar,
  },
  methods: mapActions(['logOut']),
  created() {
    // eslint-disable-next-line no-unused-vars
    axios.interceptors.response.use(undefined, err => new Promise((resolve, reject) => {
      // eslint-disable-next-line no-underscore-dangle
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        // eslint-disable-next-line no-unused-vars
        this.logOut().then((response) => {
          this.$router.push('/signin');
        });
      }
      throw err;
    }));
  },
  computed: {
    shouldShowNavbar() {
      return this.$route.name !== 'SignUp' && this.$route.name !== 'SignIn';
    },
    shouldUseDashboardLayout() {
      return this.$route.name !== 'Landing'
        && this.$route.name !== 'SignIn'
        && this.$route.name !== 'SignUp';
    },
  },
};
</script>

<style src="./assets/scss/app.scss" lang="scss"></style>
<style src="./assets/css/app.css"></style>
