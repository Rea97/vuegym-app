export default {
  isAuthenticated: state => !!state.token,
  authUser: state => state.authUser,
};
