import ApiRequest from '../../../utils/ApiRequest';
import { SET_AUTH_USER, SET_TOKEN } from './mutation_types';

const api = new ApiRequest();

export default {
  signIn({ commit }, user) {
    return new Promise((resolve, reject) => {
      api.signIn(user)
        .then((response) => {
          window.localStorage.setItem('token', response.data.token);
          window.localStorage.setItem('authUserName', response.data.user.name);
          window.localStorage.setItem('authUserEmail', response.data.user.email);

          commit(SET_TOKEN, response.data.token);
          commit(SET_AUTH_USER, response.data.user);
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
  signUp({ commit }, user) {
    return new Promise((resolve, reject) => {
      api.signUp(user)
        .then((response) => {
          window.localStorage.setItem('token', response.data.token);
          window.localStorage.setItem('authUserName', response.data.user.name);
          window.localStorage.setItem('authUserEmail', response.data.user.email);

          commit(SET_TOKEN, response.data.token);
          commit(SET_AUTH_USER, response.data.user);
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
  logOut({ commit }) {
    api.logOut()
    // eslint-disable-next-line no-unused-vars
      .then((response) => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('authUserName');
        window.localStorage.removeItem('authUserEmail');
        commit(SET_AUTH_USER, { name: '', email: '' });
        commit(SET_TOKEN, '');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.response);
      });
  },
};
