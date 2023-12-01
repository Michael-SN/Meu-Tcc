import axiosInstance from "@/axios";
import * as mutation from "./mutation-types";
import { PRIVATE_API } from "@/config";

export default {
  measureList: async ({ commit }, payload) => {
    try {
      const { data } = await axiosInstance.get(
        `${PRIVATE_API}/measure/list/${payload}`
      );

      commit(mutation.MEASURE_LIST, data);

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  },
  // eslint-disable-next-line no-unused-vars
  measureCreate: async ({ commit, state }, { payload, patientId }) => {
    try {
      const { data } = await axiosInstance.post(
        `${PRIVATE_API}/measure/register/${patientId}`,
        payload
      );

      commit(mutation.MEASURE_LIST, { measures: [...state.measures, data] });

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  },
  measureUpdate: async ({ commit, state }, { payload, measureId }) => {
    try {
      const { data } = await axiosInstance.put(
        `${PRIVATE_API}/measure/update/${measureId}`,
        payload
      );

      commit(mutation.MEASURE_LIST, { measures: [...state.measures, data] });

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  },
};
