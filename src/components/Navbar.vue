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
      <router-link to="/signup">Sign up</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>
