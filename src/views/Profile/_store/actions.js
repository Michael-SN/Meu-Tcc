import axiosInstance from "@/axios";
import * as mutation from "./mutation-types";
import { PRIVATE_API } from "@/config";

export default {
  userData: async ({ state, commit }, payload) => {
    try {
      const user = state?.user;

      if (user?.id === +payload) {
        return {
          success: true,
        };
      }

      const userData = await axiosInstance.get(
        `${PRIVATE_API}/user/getUser/${payload}`
      );
      commit(mutation.PROFILE_DATA, userData.data);

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

  userUpdate: async ({ state, commit }, payload) => {
    try {
      const userId = state?.user.id;

      const { data } = await axiosInstance.put(
        `${PRIVATE_API}/user/update/${userId}`,
        payload
      );

      commit(mutation.PROFILE_DATA, data);

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  },
};
