<template>
  <div id="app">
    <app-navbar></app-navbar>
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
};
</script>

<style>

</style>
