<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 1</button>

  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter";
import FavoriteValue from "@/components/FavoriteValue";

export default {
  components: {
    FavoriteValue,
    TheCounter,
    BaseContainer,
  },

  methods: {
    addOne() {
      // this.$store.commit('increment');
      // this.$store.commit('increase', {value: 1});
      // this.$store.commit({
      //   type: 'increase',
      //   value: 1
      // });
      this.$store.dispatch({
        type: 'increase',
        value: 1
      })
    }
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
