import axiosInstance from "@/axios";
import * as mutation from './mutation-types'
import { PRIVATE_API } from '@/config'

export default {
  patientCreate: async ({ commit }, payload) => {
    try {

      const { data } = await axiosInstance.post(`${PRIVATE_API}/patient/create`, payload)

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

      const { data } = await axiosInstance.get(`${PRIVATE_API}/patient/list`)

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

      const [patientData, patientMeasureList] = await Promise.all([
        axiosInstance.get(`${PRIVATE_API}/patient/list/${payload}`),
        axiosInstance.get(`${PRIVATE_API}/patient/list/${payload}/measures`)
      ])

      console.log(patientMeasureList)

      commit(mutation.PATIENT_DATA, patientData.data)
      commit(mutation.PATIENT_MEASURE_LIST, patientMeasureList.data)

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

      await axiosInstance.delete(`${PRIVATE_API}/patient/delete/${payload}`)

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

      const { data } = await axiosInstance.put(`${PRIVATE_API}/patient/update/${patientId}`, payload)

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