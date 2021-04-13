import { createStore } from 'vuex';

import coachesModule from '@/store/modules/coaches/index';
import requestModule from '@/store/modules/requets/index';


const store = createStore({

  modules: {
    coaches: coachesModule,
    requests: requestModule
  },
  state() {
    return {
      userId: 'c1',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});


export default store;
