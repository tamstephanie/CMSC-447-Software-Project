import { userService } from '../services'
import { router } from '../helpers'

const user = JSON.parse(localStorage.getItem('user'));
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

const actions = {
  login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username });

    userService.login(username, password)
      .then(
        user => {
          commit('loginSuccess', user);
          router.push('/main');
        },
        error => {
          commit('loginFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  logout({ commit }) {
    userService.logout();
    commit('logout');
  }
}