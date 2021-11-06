import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isloading: false,
    listAgenda: [],
  },
  mutations: {
    KONFIRMASI_AGENDA: (state, agenda) => {
      state.listAgenda.push(agenda);
    },
  },
  actions: {
    simpangAgenda({ commit, state }, agenda) {
      state.isLoading = true;
      setTimeout(() => {
        commit("KONFIRMASI_AGENDA", agenda);
        state.isLoading = false;
      }, 1500);
    },
  },
});
