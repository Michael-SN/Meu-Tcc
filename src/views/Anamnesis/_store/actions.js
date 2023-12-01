import axiosInstance from "@/axios";
import * as mutation from "./mutation-types";
import { PRIVATE_API } from "@/config";

export default {
  anamnesisCreate: async ({ commit }, { payload, patientId }) => {
    try {
      const { data } = await axiosInstance.post(
        `${PRIVATE_API}/anamnesis/register/${patientId}`,
        payload
      );

      commit(mutation.ANAMNESIS_DATA, {
        anamnesis: data,
      });

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
  anamnesisUpdate: async ({ commit }, { payload, patientId }) => {
    try {
      const { data } = await axiosInstance.put(
        `${PRIVATE_API}/anamnesis/update/${patientId}`,
        payload
      );
      commit(mutation.ANAMNESIS_DATA, {
        anamnesis: data,
      });
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
  anamnesisList: async ({ commit }, patientId) => {
    try {
      const { data } = await axiosInstance.get(
        `${PRIVATE_API}/anamnesis/list/${patientId}`
      );
      commit(mutation.ANAMNESIS_DATA, data);
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
