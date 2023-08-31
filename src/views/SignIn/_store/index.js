// import actions from './actions'
import mutations from './mutations'

const state = {
  data: null,
  error: null,
  loading: false
}

export default {
  namespaced: true,
  state,
  mutations,
}