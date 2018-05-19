import axios from 'axios';

export default class {
  constructor() {
    this.baseUrl = 'http://vuegym.test/api';
  }

  signIn(data) {
    return axios.post(`${this.baseUrl}/auth/login`, data);
  }

  signUp(data) {
    return axios.post(`${this.baseUrl}/auth/signup`, data);
  }
}
