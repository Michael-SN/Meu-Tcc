import {
  PATIENT_DATA,
  PATIENT_LIST
} from './mutation-types'

export default {
  [PATIENT_DATA]: (state, payload) => {
    state.patient = payload?.patient
  },
  [PATIENT_LIST]: (state, { patients }) => {
    state.patients = patients
  }
}