import Vue from "vue";
import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
