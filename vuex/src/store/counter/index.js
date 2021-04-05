import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

export default counterModule = {
  state() {
    return {
      counter: 0
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters
};
