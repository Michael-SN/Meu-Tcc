import {
  SIGN_IN_LOADING,
  SIGN_IN_DATA,
  SIGN_IN_ERROR,
} from './mutation-types'

import { resetState } from '../../../helpers'

const intialState = {
  data: null,
  error: null,
  loading: false
}


export default {
  [SIGN_IN_LOADING]: (state) => {
    resetState(state, intialState)
    state.loading = true
  },
  [SIGN_IN_DATA]: (state, payload) => {
    resetState(state, intialState)
    state.data = payload
  },
  [SIGN_IN_ERROR]: (state, payload) => {
    resetState(state, intialState)
    state.error = payload
  },
}