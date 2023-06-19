import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from './mutation-types'

export default {
  [SIGN_IN_REQUEST]: (state) => {
    state.request = true
    state.loading = true
  },
  [SIGN_IN_SUCCESS]: (state) => {
    state.success = true
    state.request = false
    state.loading = false
  },
  [SIGN_IN_FAILURE]: (state, { message }) => {
    state.failure = message
    state.request = false
    state.loading = false
    state.success = false
  },
}