import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  patient: null,
  patients: [],
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}