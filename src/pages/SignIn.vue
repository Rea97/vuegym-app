<template>
  <section class="hero is-fullheight is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title has-text-centered">
              <router-link to="/">VueGymApp</router-link>
            </h1>
            <div class="box">
              <div class="form-horizontal">
                <div class="field">
                  <label class="label">Email</label>
                  <p class="control">
                    <input v-model="user.email"
                           id="email"
                           type="email"
                           class="input"
                           name="email"
                           value=""
                           placeholder="jsmith@example.org"
                           required>
                    <!-- <span class="input-error">Error</span> -->
                  </p>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <p class="control">
                    <input v-model="user.password"
                           id="password"
                           type="password"
                           class="input"
                           name="password"
                           placeholder="●●●●●●●"
                           required>
                    <!-- <span class="input-error">Error</span> -->
                  </p>
                </div>
                <hr>
                <p class="control">
                  <button @click="signin" class="button is-primary">Sign in!</button>
                </p>
              </div>
            </div>
            <p class="has-text-centered">
              <router-link to="/signup">Sign up</router-link>
              |
              <a href="#">Help</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'SignIn',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      this.$store.dispatch('signIn', this.user)
      // eslint-disable-next-line no-unused-vars
        .then((response) => {
          this.$router.push('/home');
        })
        .catch((error) => {
          console.log(error.response.data.error);
        });
    },
  },
};
</script>

<style scoped>

</style>
