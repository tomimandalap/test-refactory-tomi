import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataTask: []
  },
  mutations: {
    setTask (state, payload) {
      state.dataTask = payload
    }
  },
  actions: {
    task (context, data) {
      context.commit('setTask', data)
    }
  },
  getters: {
    getDataTask: state => state.dataTask
  },
  modules: {
  }
})
