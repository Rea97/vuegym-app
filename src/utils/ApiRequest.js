import axios from 'axios';

export default class {
  constructor() {
    this.baseUrl = 'http://vuegym.test/api';
  }

  signUp(data) {
    return axios.post(`${this.baseUrl}/signup`, data);
  }
}
