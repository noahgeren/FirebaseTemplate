import Vue from "vue";
import Vuex from "vuex";
import { auth } from './firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: undefined
  },
  mutations: {
    user(state, user){
      state.user = user;
    }
  },
  actions: {
    getCurrentUser({ state }) {
      return new Promise(resolve => {
        (function checkIfUserIsDefined(){
          if(state.user !== undefined){
            return resolve(state.user);
          }
          setTimeout(checkIfUserIsDefined, 30);
        })();
      });
    },
    signIn({}, { email, password }) {
      return auth.signInWithEmailAndPassword(email, password);
    },
    signOut() {
      return auth.signOut();
    }
  },
  getters: {

  }
});

auth.onAuthStateChanged(user => {
  store.commit('user', user);
});

export default store;