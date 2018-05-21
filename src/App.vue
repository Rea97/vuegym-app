<template>
  <div id="app">
    <app-navbar v-show="shouldShowNavbar"></app-navbar>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import AppNavbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    AppNavbar,
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
  },
};
</script>

<style src="./assets/scss/app.scss" lang="scss"></style>
<style src="./assets/css/app.css"></style>
