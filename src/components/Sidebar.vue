<template>
  <aside class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/home">
          Dashboard
        </router-link>
      </li>
    </ul>
    <p class="menu-label">
      Nutrition
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/daily-food-ingest">
          Daily food ingest
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>

</style>
