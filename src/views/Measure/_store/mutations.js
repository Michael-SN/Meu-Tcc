import {
  MEASURE_DATA,
  MEASURE_LIST

} from './mutation-types'

export default {
  [MEASURE_DATA]: (state, { measure }) => {
    state.measure = measure
  },
  [MEASURE_LIST]: (state, { measures }) => {
    state.measures = measures
  }
}