import axiosInstance from "@/axios";
import * as mutation from './mutation-types'


export default {
  patientCreate: async ({ commit }, payload) => {
    try {

      const { data } = await axiosInstance.post('/patient/create', payload)

      commit(mutation.PATIENT_DATA, data)

      return {
        success: true,
        data
      }

    } catch (error) {

      return {
        success: false,
        error
      }
    }
  },

  patientList: async ({ commit }) => {
    try {

      const { data } = await axiosInstance.get('/patient/list')

      commit(mutation.PATIENT_LIST, data)

      return {
        success: true,
      }

    } catch (error) {

      return {
        success: false,
        error
      }
    }
  },

  patientData: async ({ state, commit }, payload) => {

    try {

      const patient = state?.patient

      if (patient?.id === +payload) {
        return {
          success: true
        }
      }

      const { data } = await axiosInstance.get(`/patient/list/${payload}`)

      commit(mutation.PATIENT_DATA, data)

      return {
        success: true,
      }

    } catch (error) {

      return {
        success: false,
        error
      }
    }
  },

  patientDelete: async ({ commit }, payload) => {
    try {

      await axiosInstance.delete(`/patient/delete/${payload}`)

      commit(mutation.PATIENT_DATA, null)

      return {
        success: true,
      }


    } catch (error) {
      return {
        success: false,
        error
      }
    }
  },

  patientUpdate: async ({ state, commit }, payload) => {
    try {

      const patientId = state?.patient.id

      const { data } = await axiosInstance.put(`/patient/update/${patientId}`, payload)

      commit(mutation.PATIENT_DATA, data)

      return {
        success: true,
        data
      }

    } catch (error) {
      return {
        success: false,
        error
      }
    }
  }
}