import { PROFILE_DATA } from "./mutation-types";

export default {
  [PROFILE_DATA]: (state, payload) => {
    state.user = payload?.user;
  },
};
