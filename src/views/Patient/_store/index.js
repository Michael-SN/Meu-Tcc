import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  patient: null,
  patients: [],
  patientMeasure: null,
  patientMeasuresList: []
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}