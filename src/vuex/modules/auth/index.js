/* eslint-disable no-shadow */
import getters from './getters';
import actions from './actions';
import { SET_AUTH_USER, SET_TOKEN } from './mutation_types';

const state = {
  authUser: {
    name: window.localStorage.getItem('authUserName') || '',
    email: window.localStorage.getItem('authUserEmail') || '',
  },
  token: window.localStorage.getItem('token') || '',
};

const mutations = {
  [SET_AUTH_USER](state, { name, email }) {
    state.authUser.name = name;
    state.authUser.email = email;
  },
  [SET_TOKEN](state, token) {
    state.token = token;
  },
};

export default { state, getters, actions, mutations };
