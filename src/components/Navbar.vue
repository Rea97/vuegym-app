<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <router-link to="/" tag="h1">VueGymApp</router-link>
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-end">
      <router-link v-if="!isAuthenticated" to="/signin">Sign in</router-link>
      <router-link v-if="!isAuthenticated" to="/signup">Sign up</router-link>
      <a v-if="isAuthenticated" @click.prevent="logOut" class="navbar-item">
        <i class="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Log out
      </a>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  computed: mapGetters([
    'isAuthenticated',
  ]),
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
      // eslint-disable-next-line no-unused-vars
        .then((response) => {
          this.$router.push('/');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
