<template>
  <section class="hero is-fullheight is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              Sign up!
            </h1>
            <div class="box">
              <div class="form-horizontal">
                <div class="field">
                  <label class="label">Name</label>
                  <p class="control">
                    <input v-model="user.name"
                         id="name"
                         type="text"
                         class="input"
                         name="name"
                         value=""
                         placeholder="John Smith"
                         required
                         autofocus>
                    <!-- <span class="input-error">Error</span> -->
                  </p>
                </div>
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
                <div class="field">
                  <label class="label">Confirm Password</label>
                  <p class="control">
                    <input v-model="user.password_confirmation"
                           id="password-confirm"
                           type="password"
                           class="input"
                           name="password_confirmation"
                           placeholder="●●●●●●●"
                           required>
                    <!-- <span class="input-error">Error</span> -->
                  </p>
                </div>
                <hr>
                <p class="control">
                  <button @click="signup" class="button is-primary">Sign up!</button>
                </p>
              </div>
            </div>
            <p class="has-text-centered">
              <a href="#">Sign in</a>
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

import Form from 'form-object';
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      form: new Form(),
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    };
  },
  methods: {
    signup() {
      // TODO: Move the api requests to a separated class and set the base api host
      axios.post('http://vuegym.test/api/auth/signup', this.user)
        .then((response) => {
          this.user = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
          };
          console.log(`status: ${response.status}`);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
