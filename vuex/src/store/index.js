import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import counterModule from './counter/index';

const store = createStore({
  namespaced: true,
  state() {
    return {
      isLoggedIn: false
    };
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {
    counter: counterModule
  }
});

export default store;
