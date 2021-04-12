import { createStore } from 'vuex';

import coachesModule from '@/store/modules/coaches/index';
import requestModule from '@/store/modules/requets/index';


const store = createStore({

  modules: {
    coaches: coachesModule,
    requests: requestModule
  },
  state() {

  }
});


export default store;
