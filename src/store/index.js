import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  pageYOffset: 0
}

const mutations = {
  setPageYOffset(state, val) {
    state.pageYOffset = val;
  }
}

export default new Vuex.Store({
  state, mutations
})
