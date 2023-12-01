import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  measure: null,
  measures: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
