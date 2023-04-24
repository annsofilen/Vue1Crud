import AuthService from '../services/AuthService';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    async register({ commit }, user) {
      try {
        const response = await AuthService.register(user)
          commit('registerSuccess');
          return response.data;

      } catch (error) {
        commit('registerFailure');
        throw error;
      }
    },

    async login({ commit }, user) {
      try {
        const inLoggedUser = await AuthService.login(user);
        commit('loginSuccess', inLoggedUser);
        return inLoggedUser;

      } catch (error) {
        commit('loginFailure');
        throw error;
      }
    },

    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    }

  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};

