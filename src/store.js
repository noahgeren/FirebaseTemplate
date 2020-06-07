import Vue from "vue";
import Vuex from "vuex";
import { auth } from './firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    user(state, user){
      state.user = user;
    }
  },
  actions: {
    getCurrentUser({ commit, state }) {
      return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          unsubscribe();
          if(state.user !== user) {
            commit('user', user);
          }
          resolve(user);
        }, reject);
      });
    },
    signIn(store, { email, password }) {
      return auth.signInWithEmailAndPassword(email, password);
    },
    signOut({ commit }) {
      commit('user', null);
      return auth.signOut();
    }
  },
  getters: {

  }
});
