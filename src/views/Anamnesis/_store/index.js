import actions from "./actions";
import mutations from "./mutations";

const state = {
  anamnesis: null,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
