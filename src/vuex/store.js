/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  authUser: {
    name: window.localStorage.getItem('authUserName') || '',
    email: window.localStorage.getItem('authUserEmail') || '',
  },
  token: window.localStorage.getItem('token') || '',
};

const mutations = {
  setAuthUser(state, { name, email }) {
    state.authUser.name = name;
    state.authUser.email = email;
  },
  setToken(state, token) {
    state.token = token;
  },
};

const getters = {
  isAuthenticated: state => !!state.token,
};

const actions = {
  signUp({ commit }, user) {
    return new Promise((resolve, reject) => {
      axios.post('http://vuegym.test/api/auth/signup', user)
        .then((response) => {
          window.localStorage.setItem('token', response.data.token);
          window.localStorage.setItem('authUserName', response.data.user.name);
          window.localStorage.setItem('authUserEmail', response.data.user.email);

          commit('setAuthUser', response.data.user);
          commit('setToken', response.data.token);
          resolve(response);
        })
        .catch((error) => {
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('authUserName');
          window.localStorage.removeItem('authUserEmail');

          reject(error);
        });
    });
  },
};

export default new Vuex.Store({ state, mutations, getters, actions });
