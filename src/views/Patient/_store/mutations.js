import {
  PATIENT_DATA,
  PATIENT_LIST,
  PATIENT_MEASURE_DATA,
  PATIENT_MEASURE_LIST

} from './mutation-types'

export default {
  [PATIENT_DATA]: (state, payload) => {
    state.patient = payload?.patient
  },
  [PATIENT_LIST]: (state, { patients }) => {
    state.patients = patients
  },
  [PATIENT_MEASURE_DATA]: (state, { patientMeasure }) => {
    state.patientMeasure = patientMeasure
  },
  [PATIENT_MEASURE_LIST]: (state, { patientMeasuresList }) => {
    state.patientMeasuresList = patientMeasuresList
  }
}