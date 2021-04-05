<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <!-- <button @click="addOne">Add 1</button> -->
    <button @click="increase({ value: 1 })">Add 1</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter';
import FavoriteValue from '@/components/FavoriteValue';
import UserAuth from '@/components/UserAuth';
import { mapActions } from 'vuex';

export default {
  components: {
    FavoriteValue,
    TheCounter,
    BaseContainer,
    UserAuth
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  },

  methods: {
    // addOne() {
    //   // this.$store.commit('increment');
    //   // this.$store.commit('increase', {value: 1});
    //   // this.$store.commit({
    //   //   type: 'increase',
    //   //   value: 1
    //   // });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 1
    //   })
    // },
    ...mapActions(['increase'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
