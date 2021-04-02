import Vuex from "vuex";
import Vue from "vue";
import { SET_DATA } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: null,
    text: 'Users',
    count: 0
  },

  getters: {
    getData: (state) => {
      return state.lists;
    },
    getCountData: (state) => {
      return state.count
    }
  },

  mutations: {
    [SET_DATA](state, data) {
      state.lists = data
    },
    setCount(state, data) {
      state.count = data
    }
  },

  actions: {
    setData(context, data) {
      context.commit('setData', data);
      context.commit('setCount', data.length)
    },
  },
});
