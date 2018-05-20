<template>
  <div id="app">
    <app-navbar v-show="shouldShowNavbar"></app-navbar>
    <router-view/>
  </div>
</template>

<script>
import AppNavbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
  computed: {
    shouldShowNavbar() {
      return this.$route.name !== 'SignUp' && this.$route.name !== 'SignIn';
    },
  },
};
</script>

<style>

</style>
