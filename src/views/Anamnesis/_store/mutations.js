import { ANAMNESIS_DATA } from "./mutation-types";

export default {
  [ANAMNESIS_DATA]: (state, { anamnesis }) => {
    state.anamnesis = anamnesis;
  },
};
