<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item brand-text" to="/">VueGymApp</router-link>

        <div @click="toogleBurger" class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <router-link v-if="!isAuthenticated" to="/signin" class="navbar-item">
            Sign in
          </router-link>
          <router-link v-if="!isAuthenticated" to="/signup" class="navbar-item">
            Sign up
          </router-link>
          <a v-if="isAuthenticated" @click.prevent="logOut" class="navbar-item">
            <i class="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Log out
          </a>
        </div>
      </div>
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
    toogleBurger() {
      const burger = document.querySelector('.burger');
      const menu = document.querySelector(`#${burger.dataset.target}`);
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    },
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
